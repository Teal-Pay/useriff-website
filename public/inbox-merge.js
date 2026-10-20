(() => {
  const section = document.querySelector('.inbox-feature');
  if (!section) return;
  const scene = section.querySelector('.inbox-merge-scene');
  const sources = [...section.querySelectorAll('.source-inbox')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = matchMedia('(max-width:700px)');
  const clamp = n => Math.max(0, Math.min(1, n));
  const smooth = n => { n=clamp(n); return n*n*(3-2*n); };
  const animationEnd = 5500, replayDelay = 2000;
  const duration = animationEnd + replayDelay;
  let elapsed = reduced.matches ? animationEnd : 0;
  let frame = 0, previous = null, visible = false, centers = [];
  function measure() {
    centers = sources.map(card => (card.parentElement.clientWidth-card.offsetWidth)/2-card.offsetLeft);
  }
  function render() {
    const gather = smooth((elapsed-1800)/3400);
    const reveal = smooth((elapsed-3700)/1800);
    scene.dataset.progress = (elapsed/duration).toFixed(3);
    scene.style.setProperty('--source-opacity',1-smooth((elapsed-3600)/1700));
    scene.style.setProperty('--merged-opacity',reveal);
    scene.style.setProperty('--merged-scale',.9+.1*reveal);
    scene.style.setProperty('--merged-y',`${16*(1-reveal)}px`);
    sources.forEach((card,i) => {
      const entrance = smooth((elapsed-i*420)/500);
      const dx = narrow.matches ? [-22,18,0][i]*(1-gather) : centers[i]*gather;
      const dy = (narrow.matches ? [-72,0,72][i] : [-21,34,-9][i])*(1-gather);
      card.style.setProperty('--card-x',`${dx}px`);
      card.style.setProperty('--card-opacity',entrance);
      card.style.setProperty('--card-y',`${dy+18*(1-entrance)}px`);
      card.style.setProperty('--card-r',`${[-5,4,-3][i]*(1-gather)}deg`);
      card.style.setProperty('--card-scale',(.94+.06*entrance)*(1-.2*gather));
    });
  }
  function tick(time) {
    if (previous !== null) elapsed = (elapsed+Math.min(time-previous,80))%duration;
    previous = time;
    render();
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame);
    previous = null;
    if (reduced.matches) { elapsed=animationEnd; render(); return; }
    if (visible && !document.hidden) frame=requestAnimationFrame(tick);
  }
  measure(); render();
  new IntersectionObserver(entries => {
    visible=entries.some(entry=>entry.isIntersecting);
    sync();
  },{threshold:.2,rootMargin:'-80px 0px -20px 0px'}).observe(scene);
  new ResizeObserver(()=>{measure();render();}).observe(scene);
  reduced.addEventListener('change',sync);
  document.addEventListener('visibilitychange',sync);
})();
