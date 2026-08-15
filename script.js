
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader')?.classList.add('hidden'),450));
const menu=document.getElementById('menu'),nav=document.getElementById('nav');
if(menu&&nav){menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(o));});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const pointer=document.querySelector('.pointer');window.addEventListener('pointermove',e=>{if(pointer){pointer.style.left=e.clientX+'px';pointer.style.top=e.clientY+'px';}});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;const bar=document.querySelector('.progress span');if(bar&&max>0)bar.style.width=(scrollY/max*100)+'%';});
const counterObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target,target=Number(el.dataset.count);let n=0;const t=setInterval(()=>{n=Math.min(target,n+1);el.textContent=n;if(n>=target)clearInterval(t)},180);counterObserver.unobserve(el)}}),{threshold:.7});
document.querySelectorAll('[data-count]').forEach(el=>counterObserver.observe(el));
const form=document.getElementById('contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();const n=encodeURIComponent(name.value),em=encodeURIComponent(email.value),s=encodeURIComponent(subject.value),m=encodeURIComponent(message.value);location.href=`mailto:contact.vreduo@gmail.com?subject=V-RE:DUO｜${s}&body=お名前：${n}%0Aメールアドレス：${em}%0A%0A${m}`;});
