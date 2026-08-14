const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const pointer=document.querySelector('.pointer-light');
window.addEventListener('pointermove',e=>{pointer.style.left=e.clientX+'px';pointer.style.top=e.clientY+'px';});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.page-progress span').style.width=(scrollY/max*100)+'%';});

const profiles={
shakado:{image:'shakado-profile.jpg',category:'IRIAM LIVER / TALK',name:'沙門 釈迦力',reading:'SHAKADO SHAKARIKI',description:'閻魔代理をしながら、普段は自動車整備士を営む男性ライバー。ゆる雑談をメインに、ふらっと立ち寄れて気軽に話せる時間を届けています。',details:[['活動媒体','IRIAM'],['配信内容','ゆる雑談'],['肩書き','閻魔代理 / 自動車整備士'],['性別','男性']],links:[['X','https://x.com/syakariki_iriam?s=21&t=enc1lWXjnDQOuVr2cJdIOA'],['IRIAM','https://web.iriam.app/s/user/MY4Gkzy27q?uuid=f175ac16']]},
usotsuki:{image:'usotsuki-profile.jpg',category:'IRIAM LIVER / V-RAPPER',name:'獺月 愛識',reading:'USOTSUKI KANASHIKI',description:'リリカルリリックを得意とするVラッパー。IRIAMを中心に雑談・歌・コラボ企画で活動し、YouTubeでは自身が作詞した楽曲を公開予定です。',details:[['活動媒体','IRIAM / YouTube'],['配信内容','雑談 / 歌 / コラボ企画'],['活動スタイル','Vラッパー'],['YouTube','作詞した楽曲を公開予定']],links:[['X','https://x.com/usotuki_kanasi?s=11&t=enc1lWXjnDQOuVr2cJdIOA'],['IRIAM','https://web.iriam.app/s/user/LXD8dgn1Rc?uuid=2e6'],['YouTube','https://youtube.com/channel/UCddPxfroxlUOyolnXkn5Djw?si=zroZo-s5bh1uHVws']]}
};
const modal=document.getElementById('profileModal'),mi=document.getElementById('modalImage'),mc=document.getElementById('modalCategory'),mn=document.getElementById('modalName'),mr=document.getElementById('modalReading'),md=document.getElementById('modalDescription'),mde=document.getElementById('modalDetails'),ml=document.getElementById('modalLinks');
function openProfile(id){const p=profiles[id];if(!p)return;mi.src=p.image;mi.alt=p.name;mc.textContent=p.category;mn.textContent=p.name;mr.textContent=p.reading;md.textContent=p.description;mde.innerHTML='';p.details.forEach(([t,v])=>{const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=t;dd.textContent=v;row.append(dt,dd);mde.append(row);});ml.innerHTML='';p.links.forEach(([t,u])=>{const a=document.createElement('a');a.href=u;a.target='_blank';a.rel='noopener';a.textContent=t+' ↗';ml.append(a);});modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeProfile(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('[data-profile]').forEach(b=>b.addEventListener('click',()=>openProfile(b.dataset.profile)));
document.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',closeProfile));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProfile();});

document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const n=encodeURIComponent(document.getElementById('name').value),em=encodeURIComponent(document.getElementById('email').value),s=encodeURIComponent(document.getElementById('subject').value),m=encodeURIComponent(document.getElementById('message').value);location.href=`mailto:contact.vreduo@gmail.com?subject=V-RE:DUO｜${s}&body=お名前：${n}%0Aメールアドレス：${em}%0A%0A${m}`;});