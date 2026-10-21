(() => {
  const scene=document.querySelector('.hero-magnetic');
  if(!scene)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const compact=matchMedia('(max-width:800px)');
  const paths=[...scene.querySelectorAll('.magnetic-lines path')];
  const nodes=[...scene.querySelectorAll('.magnetic-node')].map((el,i)=>({el,path:paths[i],x:0,y:0,tx:0,ty:0,vx:0,vy:0,w:0,h:0}));
  let pointer=null,raf=0,visible=false,previous=0,width=0,height=0;
  scene.classList.add('has-entrance');
  nodes.forEach((n,i)=>{n.el.style.setProperty('--step',i);n.path.style.setProperty('--step',i);});
  const entranceEnd=80+(nodes.length-1)*240+650;
  let entranceElapsed=reduced.matches?entranceEnd:0,entrancePrevious=null,entranceFrame=0;
  const clamp=n=>Math.max(0,Math.min(1,n));
  function drawEntrance(){
    nodes.forEach((n,i)=>{
      const p=reduced.matches?1:clamp((entranceElapsed-80-i*240)/650);
      const eased=1-Math.pow(1-p,3);
      n.el.style.opacity=String(eased);
      n.el.style.translate=`0 ${18*(1-eased)}px`;
      n.el.style.scale=String(.94+.06*eased);
      n.path.style.opacity=String(.65*(reduced.matches?1:clamp((entranceElapsed-200-i*240)/500)));
    });
  }
  function entranceTick(time){
    if(entrancePrevious!==null)entranceElapsed=Math.min(entranceEnd,entranceElapsed+Math.min(time-entrancePrevious,80));
    entrancePrevious=time;drawEntrance();
    entranceFrame=entranceElapsed<entranceEnd?requestAnimationFrame(entranceTick):0;
  }
  function syncEntrance(){
    cancelAnimationFrame(entranceFrame);entrancePrevious=null;drawEntrance();
    if(visible&&!document.hidden&&!reduced.matches&&entranceElapsed<entranceEnd)entranceFrame=requestAnimationFrame(entranceTick);
  }
  const tilts=[-9,4,10,9,4,-8];
  function base(i){
    const positions=compact.matches?[[.25,.11],[.75,.11],[.75,.29],[.75,.86],[.25,.86],[.25,.29]]:width<520?[[.25,.16],[.75,.16],[.75,.31],[.75,.83],[.25,.83],[.25,.31]]:[[.17,.24],[.5,.19],[.83,.24],[.83,.76],[.5,.83],[.17,.76]];
    return {x:width*positions[i][0],y:height*positions[i][1]};
  }
  function goals(){
    nodes.forEach((n,i)=>{
      const b=base(i);n.tx=b.x;n.ty=b.y;
      if(pointer&&!reduced.matches){const dx=pointer.x-b.x,dy=pointer.y-b.y,d=Math.hypot(dx,dy),f=Math.max(0,1-d/280)*.24;n.tx+=dx*f;n.ty+=dy*f;}
      // Leave room for rotated edges when a pointer approaches the scene boundary.
      n.tx=Math.max(n.w/2+12,Math.min(width-n.w/2-12,n.tx));
      n.ty=Math.max(n.h/2+14,Math.min(height-n.h/2-14,n.ty));
    });
  }
  function draw(){nodes.forEach((n,i)=>{
    n.el.style.transform=`translate3d(${n.x-n.w/2}px,${n.y-n.h/2}px,0) rotate(${tilts[i]+n.vx*.2}deg)`;
    n.path.setAttribute('d',`M ${width/2} ${height*(compact.matches?.55:.51)} Q ${width/2+(n.x-width/2)*.23} ${n.y} ${n.x} ${n.y}`);
  });}
  function tick(now){
    const dt=previous?Math.min((now-previous)/16.667,2):1;previous=now;goals();let moving=false;
    nodes.forEach(n=>{
      n.vx=(n.vx+(n.tx-n.x)*.085*dt)*Math.pow(.76,dt);n.vy=(n.vy+(n.ty-n.y)*.085*dt)*Math.pow(.76,dt);
      n.x+=n.vx*dt;n.y+=n.vy*dt;
      if(Math.abs(n.vx)+Math.abs(n.vy)+Math.abs(n.tx-n.x)+Math.abs(n.ty-n.y)>.08)moving=true;
    });draw();raf=moving&&visible&&!document.hidden&&!reduced.matches?requestAnimationFrame(tick):0;
  }
  function start(){if(!raf&&visible&&!document.hidden&&!reduced.matches){previous=0;raf=requestAnimationFrame(tick);}}
  function reset(){cancelAnimationFrame(raf);raf=0;pointer=null;goals();nodes.forEach(n=>{n.x=n.tx;n.y=n.ty;n.vx=n.vy=0;});draw();}
  scene.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||reduced.matches)return;const r=scene.getBoundingClientRect();pointer={x:e.clientX-r.left,y:e.clientY-r.top};start();});
  scene.addEventListener('pointerleave',()=>{pointer=null;start();});
  new ResizeObserver(()=>{width=scene.clientWidth;height=scene.clientHeight;nodes.forEach(n=>{n.w=n.el.offsetWidth;n.h=n.el.offsetHeight;});reset();}).observe(scene);
  new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);syncEntrance();if(!visible){cancelAnimationFrame(raf);raf=0;pointer=null;}else start();},{threshold:.1}).observe(scene);
  document.addEventListener('visibilitychange',()=>{syncEntrance();if(document.hidden){cancelAnimationFrame(raf);raf=0;}else start();});
  reduced.addEventListener('change',()=>{reset();if(reduced.matches)entranceElapsed=entranceEnd;syncEntrance();});
  drawEntrance();
})();
