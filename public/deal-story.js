(() => {
  const board=document.querySelector('.kanban-board');
  if(!board)return;
  const lanes=[...board.querySelectorAll('.kanban-column')];
  const stacks=lanes.map(lane=>lane.querySelector('.kanban-cards'));
  const originals=stacks.map(stack=>[...stack.children]);
  const cards=originals.flat();
  const primary=board.querySelector('.deal-focus');
  const secondary=originals[0][0];
  const labels=['Negotiation','Contract','Content','Published'];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const animations=new Set(),flights=new Map();
  const duration=6800,replayDelay=2000,cycle=duration+replayDelay;
  let elapsed=0,previous=null,frame=0,visible=false,next=0;
  const steps=[[0,primary,2],[2300,secondary,1],[5000,primary,3]];
  [primary,secondary].forEach((card,i)=>{

    const marker=document.createElement('span');marker.className='deal-drag-marker';marker.setAttribute('aria-hidden','true');
    marker.innerHTML='<svg viewBox="0 0 30 34" fill="none"><path d="M4 3v25l7-7 5 10 5-3-5-9 10-1L4 3Z" fill="currentColor" stroke="white" stroke-width="2" stroke-linejoin="round"/></svg>';
    card.appendChild(marker);if(i)card.classList.add('deal-secondary');
  });
  function update(){
    lanes.forEach((lane,i)=>{
      lane.querySelector('h3>span').textContent=lane.querySelectorAll('.deal-card').length;

    });
    cards.forEach(card=>{
      const stage=stacks.indexOf(card.parentElement);
      card.classList.toggle('is-published',stage===3);
      let action;
      if(card===primary)action=stage===1?'Review contract':stage===2?'Review draft':'Send invoice';
      if(card===secondary)action=stage===0?'Review offer':'Review contract';
      if(action)card.querySelector('.deal-action').textContent=action;
    });
  }
  function track(animation){
    animations.add(animation);
    animation.finished.then(()=>animations.delete(animation),()=>animations.delete(animation));
    if(!visible||document.hidden)animation.pause();
    return animation;
  }
  function cancelMotion(){
    flights.clear();animations.forEach(a=>a.cancel());animations.clear();
    board.querySelectorAll('.deal-origin').forEach(e=>e.remove());
    cards.forEach(card=>card.classList.remove('is-dragging'));
  }
  function move(card,target,animated=true){
    if(target<=stacks.indexOf(card.parentElement))return;
    const oldRects=new Map(cards.map(c=>[c,c.getBoundingClientRect()]));
    const origin=oldRects.get(card),area=board.getBoundingClientRect();
    stacks[target].appendChild(card);
    update();
    const destination=card.getBoundingClientRect();
    if(!animated||reduced.matches){update();return;}
    card.classList.add('is-dragging');
    lanes.forEach(lane=>lane.classList.remove('is-current'));
    lanes[target].classList.add('is-receiving-deal');
    const ghost=document.createElement('div');ghost.className='deal-origin';ghost.setAttribute('aria-hidden','true');
    Object.assign(ghost.style,{left:`${origin.left-area.left}px`,top:`${origin.top-area.top}px`,width:`${origin.width}px`,height:`${origin.height}px`});board.appendChild(ghost);
    const dx=origin.left-destination.left,dy=origin.top-destination.top;
    const flight=track(card.animate([
      {transform:`translate(${dx}px,${dy}px) scale(1)`,offset:0,easing:'ease-out'},
      {transform:`translate(${dx}px,${dy-9}px) rotate(-1.2deg) scale(1.025)`,offset:.16,easing:'cubic-bezier(.4,0,.2,1)'},
      {transform:'translate(0,-5px) rotate(.4deg) scale(1.02)',offset:.84,easing:'cubic-bezier(.2,.8,.2,1)'},
      {transform:'translate(0,0) rotate(0) scale(1)',offset:1}
    ],{duration:1800,fill:'none'}));
    flights.set(card,flight);
    cards.filter(c=>c!==card&&!flights.has(c)).forEach(other=>{
      const before=oldRects.get(other),after=other.getBoundingClientRect();
      if(Math.abs(before.x-after.x)+Math.abs(before.y-after.y)>1)
        track(other.animate([{transform:`translate(${before.x-after.x}px,${before.y-after.y}px)`},{transform:'none'}],{duration:650,easing:'cubic-bezier(.22,1,.36,1)'}));
    });
    track(ghost.animate([{opacity:.7},{opacity:.7,offset:.65},{opacity:0}],{duration:1800}));
    const finish=()=>{
      ghost.remove();
      if(flights.get(card)!==flight)return;
      flights.delete(card);card.classList.remove('is-dragging');
      lanes[target].classList.remove('is-receiving-deal');lanes[target].classList.add('is-current');update();
    };
    flight.finished.then(finish,finish);
  }
  function restartBoard(){
    // Restore the opening arrangement without animating any card backwards.
    cancelMotion();
    originals.forEach((group,i)=>group.forEach(card=>stacks[i].appendChild(card)));
    lanes.forEach(lane=>lane.classList.remove('is-current','is-receiving-deal'));
    next=0;update();
  }
  function tick(time){
    if(previous!==null)elapsed+=Math.min(time-previous,100);
    previous=time;
    if(elapsed>=cycle){elapsed%=cycle;restartBoard();}
    while(next<steps.length&&elapsed>=steps[next][0]){move(steps[next][1],steps[next][2]);next++;}
    board.dataset.storyProgress=(Math.min(elapsed,duration)/duration).toFixed(3);
    if(visible&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(tick);
  }
  function resume(){
    cancelAnimationFrame(frame);previous=null;
    const playing=visible&&!document.hidden&&!reduced.matches;
    animations.forEach(a=>playing?a.play():a.pause());
    if(playing)frame=requestAnimationFrame(tick);
  }
  function staticEnd(){cancelMotion();move(primary,3,false);move(secondary,1,false);lanes[3].classList.add('is-current');elapsed=duration;next=steps.length;}
  update();if(reduced.matches)staticEnd();
  new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);resume();},{threshold:.1}).observe(board);
  let width=board.clientWidth;
  new ResizeObserver(()=>{if(board.clientWidth!==width){width=board.clientWidth;cancelMotion();lanes.forEach(l=>l.classList.remove('is-receiving-deal'));update();}}).observe(board);
  document.addEventListener('visibilitychange',resume);
  reduced.addEventListener('change',()=>{if(reduced.matches)staticEnd();else{restartBoard();elapsed=0;}resume();});
})();
