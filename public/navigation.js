(() => {
const menu=document.querySelector('#mobile-nav'),toggle=document.querySelector('.menu-toggle');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus()}});

})();
