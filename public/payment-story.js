(() => {
  const scene = document.querySelector('.payment-scene');
  if (!scene) return;
  const map = scene.querySelector('.payout-map');
  const svg = scene.querySelector('.payout-lines');
  const brand = scene.querySelector('.brand-payment');
  const hub = scene.querySelector('.payout-hub');
  const people = [...scene.querySelectorAll('.payout-person')];
  const brandStatus = scene.querySelector('.brand-status');
  const hubLabel = scene.querySelector('.hub-payment-label');
  const hubTotal = scene.querySelector('.hub-payment-total');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const playbackRate = 1.65;
  const replayDelay = 2000;
  // Let the last payout’s confirmation settle before the two-second hold.
  const animationEnd = 8500 + 400 * playbackRate;
  const restartAt = animationEnd + replayDelay * playbackRate;
  const duration = restartAt + 700;
  const travels = [[1700, 3600], [4200, 5800], [5100, 6700], [6000, 7600], [6900, 8500]];
  let elapsed = reduced.matches ? 10000 : 0;
  let previous = null, frame = 0, visible = false;
  const ns = 'http://www.w3.org/2000/svg';
  const clamp = n => Math.max(0, Math.min(1, n));
  const ease = n => 1 - Math.pow(1 - n, 3);
  function node(tag, attrs, parent = svg) {
    const e = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
    parent.appendChild(e);
    return e;
  }
  const paths = travels.map(() => ({
    track: node('path', {class:'payout-line'}),
    dot: node('circle', {class:'payment-dot', r:4, opacity:0}),
    length: 0
  }));
  // Layout coordinates exclude entry transforms so connections never drift as cards arrive.
  function bounds(el) {
    let x=0, y=0, p=el;
    while (p && p!==map) { x+=p.offsetLeft; y+=p.offsetTop; p=p.offsetParent; }
    return {x,y,w:el.offsetWidth,h:el.offsetHeight};
  }
  function layout() {
    const b=bounds(brand), h=bounds(hub);
    const vertical=matchMedia('(max-width:800px)').matches;
    svg.setAttribute('viewBox', `0 0 ${map.clientWidth} ${map.clientHeight}`);
    [b,...people.map(bounds)].forEach((r,i) => {
      let d;
      if (vertical) {
        if (!i) {
          const x=b.x+b.w/2, y=b.y+b.h, tx=h.x+h.w/2, ty=h.y;
          d=`M${x} ${y} C${x} ${y+24},${tx} ${ty-24},${tx} ${ty}`;
        } else {
          const x=h.x+h.w/2, y=h.y+h.h, tx=r.x, ty=r.y+r.h/2, gutter=Math.max(2,tx-18);
          d=`M${x} ${y} V${y+18} Q${x} ${y+34},${x-16} ${y+34} H${gutter+16} Q${gutter} ${y+34},${gutter} ${y+50} V${ty-16} Q${gutter} ${ty},${gutter+16} ${ty} H${tx}`;
        }
      } else {
        const x=i?h.x+h.w:b.x+b.w, y=i?h.y+h.h/2:b.y+b.h/2;
        const tx=i?r.x:h.x, ty=i?r.y+r.h/2:h.y+h.h/2, mid=x+(tx-x)*.5;
        d=`M${x} ${y} C${mid} ${y},${mid} ${ty},${tx} ${ty}`;
      }
      paths[i].track.setAttribute('d',d);
      paths[i].length=paths[i].track.getTotalLength();
    });
    render();
  }
  function render() {
    const t=elapsed;
    scene.classList.toggle('is-resetting',t>=restartAt);
    brand.classList.toggle('is-visible',t>=100);
    hub.classList.toggle('is-visible',t>=1600);
    scene.classList.toggle('reminded',t>=900);
    scene.classList.toggle('is-receiving',t>=3000&&t<4200);
    scene.classList.toggle('is-distributing',t>=4200&&t<8800);
    const received=t>=1700;
    brandStatus.textContent=received?'Brand funds cleared':'Awaiting payment';
    brandStatus.classList.toggle('is-waiting',!received);
    hubTotal.textContent='$'+Math.round(20000*ease(clamp((t-2600)/1000))).toLocaleString('en-US');
    hubLabel.textContent=t<3600?'Payment arriving':t<8500?'Distributing payment':'Payment distributed';
    people.forEach((p,i)=>{
      const [start,end]=travels[i+1],paid=t>=end;
      p.classList.toggle('is-visible',t>=end-480);
      p.classList.toggle('is-paid',paid);
      p.classList.toggle('is-sending',t>=end-480&&!paid);
      p.querySelector('.recipient-status').textContent=paid?'Paid':'Transferring';
      if(i<3)p.querySelector('.tax-status').textContent='W‑9 verified';
    });
    paths.forEach(({track,dot,length},i)=>{
      const [start,end]=travels[i],p=clamp((t-start)/(end-start));
      const active=t>=start&&t<end&&!reduced.matches;
      track.style.opacity=t>=start?'1':'0';
      if(active){
        const point=track.getPointAtLength(length*p);
        dot.setAttribute('cx',point.x);
        dot.setAttribute('cy',point.y);
      }
      dot.style.opacity=active?'1':'0';
    });
    scene.dataset.progress=(t/duration).toFixed(3);
  }
  function tick(time) {
    if(previous!==null)elapsed=(elapsed+Math.min(time-previous,100)*playbackRate)%duration;
    previous=time;render();
    if(visible&&!document.hidden)frame=requestAnimationFrame(tick);
  }
  function resume() {
    cancelAnimationFrame(frame);previous=null;
    if(visible&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(tick);
  }
  if(!reduced.matches)scene.classList.add('is-animated');
  new ResizeObserver(layout).observe(map);layout();
  new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);resume();},{threshold:.2}).observe(scene);
  reduced.addEventListener('change',()=>{
    scene.classList.toggle('is-animated',!reduced.matches);
    elapsed=reduced.matches?10000:0;render();resume();
  });
  document.addEventListener('visibilitychange',resume);
})();
