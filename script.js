// Reveal-on-scroll for cards
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.15});
document.querySelectorAll('[data-observe]').forEach(el=>io.observe(el));

// Optional: GIF-on-hover (swap thumbnail <-> animated GIF)
document.querySelectorAll('.media').forEach(m=>{
  const img = m.querySelector('img');
  const still = m.dataset.thumbnail;
  const anim  = m.dataset.anim;        // only if provided
  if(!img || !anim) return;
  m.addEventListener('mouseenter', ()=>{ img.src = anim; });
  m.addEventListener('mouseleave', ()=>{ img.src = still; });
  // Keyboard focus accessibility
  m.addEventListener('focus', ()=>{ img.src = anim; }, true);
  m.addEventListener('blur',  ()=>{ img.src = still; }, true);
});
