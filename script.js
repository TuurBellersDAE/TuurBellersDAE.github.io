// highlight current page
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
  const target = a.getAttribute('href');
  if (target === here || (here === 'index.html' && target === 'index.html')) a.classList.add('active');
});

// optional: swap thumbnail <-> gif on hover for cards that declare data-anim
document.querySelectorAll('.media').forEach(m=>{
  const img = m.querySelector('img');
  const still = img?.getAttribute('src');
  const anim = m.dataset.anim;
  if(!img || !anim) return;
  m.addEventListener('mouseenter',()=>img.src=anim);
  m.addEventListener('mouseleave',()=>img.src=still);
});
