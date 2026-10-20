(() => {
  const scene = document.querySelector('.deal-bridge');
  if (!scene) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const terms = [...scene.querySelectorAll('[data-term]')].map(source => {
    const field = scene.querySelector(`[data-field="${source.dataset.term}"]`);
    const ghost = document.createElement('span');
    ghost.className = 'bridge-flying-term';
    ghost.textContent = source.textContent;
    ghost.setAttribute('aria-hidden', 'true');
    scene.append(ghost);
    return { source, field, ghost, target: field.querySelector('dd') };
  });
  let visible = false, frame = 0, previous = 0, elapsed = 0;
  const animationEnd = 3950, replayDelay = 2000;
  const cycle = animationEnd + replayDelay, duration = 900, stagger = 460;
  const clamp = value => Math.max(0, Math.min(1, value));
  function measure() {
    const bounds = scene.getBoundingClientRect();
    terms.forEach(term => {
      const from = term.source.getBoundingClientRect();
      const to = term.target.getBoundingClientRect();
      term.path = { x: from.left - bounds.left - 10, y: from.top - bounds.top - 6,
        dx: to.left - from.left, dy: to.top - from.top };
    });
  }
  function render(time) {
    terms.forEach((term, index) => {
      const progress = (time - 550 - index * stagger) / duration;
      const active = progress > 0 && progress < 1;
      term.field.classList.toggle('has-arrived', progress >= 1);
      term.source.classList.toggle('is-transferring', active);
      if (!active || !term.path) { term.ghost.style.opacity = '0'; return; }
      const eased = progress * progress * (3 - 2 * progress);
      const { x, y, dx, dy } = term.path;
      const lift = Math.sin(progress * Math.PI) * 30;
      term.ghost.style.transform = `translate3d(${x + dx * eased}px,${y + dy * eased - lift}px,0) scale(${1 + Math.sin(progress * Math.PI) * .04})`;
      term.ghost.style.opacity = String(Math.min(clamp(progress / .1), clamp((1 - progress) / .12)));
    });
    scene.classList.toggle('is-complete', time > 3600);
  }
  function tick(now) {
    if (previous) elapsed += Math.min(now - previous, 80);
    previous = now;
    render(elapsed % cycle);
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame);
    previous = 0;
    scene.classList.toggle('has-motion', !reduced.matches);
    if (reduced.matches) { render(cycle - 1); return; }
    if (visible && !document.hidden) { measure(); frame = requestAnimationFrame(tick); }
  }
  new IntersectionObserver(entries => {
    visible = entries.some(entry => entry.isIntersecting);
    sync();
  }, { threshold: .15 }).observe(scene);
  new ResizeObserver(measure).observe(scene);
  document.fonts.ready.then(measure);
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  measure();
  render(0);
  sync();
})();
