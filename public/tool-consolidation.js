(() => {
  const scene=document.querySelector('.consolidation-scene');
  if(!scene)return;
  const cloud=scene.querySelector('.consolidation-cloud');
  const chips=[...cloud.children];
  const home=scene.querySelector('.consolidation-riff');
  const features=[...home.querySelectorAll('li')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const clamp=n=>Math.max(0,Math.min(1,n));
  const ease=n=>{n=clamp(n);return n*n*(3-2*n)};
  const animationEnd=3050,replayDelay=2000;
  const restartAt=animationEnd+replayDelay,resetAt=restartAt+300;
  const cycle=resetAt+450;
  let elapsed=0,previous=null,frame=0,visible=false,offsets=[],homeShift=0;
  function measure(){
    const center=home.parentElement.offsetLeft+home.parentElement.offsetWidth/2;
    homeShift=matchMedia('(min-width:801px)').matches ? scene.clientWidth/2-center : 0;
    offsets=chips.map(chip=>({
      x:center+homeShift-cloud.offsetLeft-chip.offsetLeft-chip.offsetWidth/2,
      y:home.parentElement.offsetTop+home.offsetTop+home.offsetHeight/2-cloud.offsetTop-chip.offsetTop-chip.offsetHeight/2,
      tilt:parseFloat(chip.style.getPropertyValue('--chip-tilt'))||0,
      lift:parseFloat(chip.style.getPropertyValue('--chip-lift'))||0
    }));
  }
  function render(){
    // Fade out the completed story, reset its geometry while hidden, then reveal
    // the opening state. The consolidation itself always runs forward.
    const playhead=elapsed>=resetAt ? 0 : elapsed;
    const opacity=elapsed<restartAt ? 1 : elapsed<resetAt ? 1-ease((elapsed-restartAt)/200) : ease((elapsed-resetAt)/250);
    scene.style.setProperty('--scene-opacity',opacity);
    let arrived=0;
    chips.forEach((chip,i)=>{
      const p=ease((playhead-1300-i*24)/1200),move=p;
      chip.style.setProperty('--gather-x',`${offsets[i].x*move}px`);
      chip.style.setProperty('--gather-y',`${offsets[i].y*move}px`);
      chip.style.setProperty('--chip-scale',1-.5*move);
      chip.style.setProperty('--chip-opacity',1-ease((p-.35)/.6));
      chip.style.setProperty('--chip-rotation',`${offsets[i].tilt*(1-move)}deg`);
      chip.style.setProperty('--chip-lift',`${offsets[i].lift*(1-move)}px`);
      arrived+=p/chips.length;
    });
    scene.style.setProperty('--riff-x',`${homeShift*ease((playhead-1550)/1500)}px`);
    scene.style.setProperty('--riff-scale',1+.025*Math.sin(arrived*Math.PI));
    scene.style.setProperty('--riff-glow',.2+.8*arrived);
    features.forEach((feature,i)=>{
      const p=ease((playhead-1900-i*120)/500);
      feature.style.setProperty('--feature-y',`${-5*Math.sin(p*Math.PI)}px`);
      feature.style.setProperty('--feature-opacity',.85+.15*p);
    });
    scene.dataset.phase=elapsed>=restartAt?'restart':playhead<1300?'separate':playhead<3100?'gather':'together';
  }
  function tick(time){if(previous!==null)elapsed=(elapsed+Math.min(time-previous,80))%cycle;previous=time;render();frame=requestAnimationFrame(tick)}
  function sync(){cancelAnimationFrame(frame);previous=null;if(reduced.matches){elapsed=0;render();features.forEach(f=>f.style.setProperty('--feature-opacity',1));return}if(visible&&!document.hidden)frame=requestAnimationFrame(tick)}
  measure();render();
  new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);sync()},{threshold:.2}).observe(scene);
  new ResizeObserver(()=>{measure();render()}).observe(scene);
  reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
})();
