const menuButton=document.getElementById('menuButton');
const mainNav=document.getElementById('mainNav');
menuButton.addEventListener('click',()=>{
  const open=mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
});

const profiles={
  shakado:{
    image:'shakado-profile.jpg',
    category:'IRIAM LIVER / TALK',
    name:'沙門 釈迦力',
    reading:'SHAKADO SHAKARIKI',
    description:'閻魔代理をしながら、普段は自動車整備士を営む男性ライバー。ゆる雑談をメインに、ふらっと立ち寄れて気軽に話せる時間を届けています。',
    details:[['活動媒体','IRIAM'],['配信内容','ゆる雑談'],['肩書き','閻魔代理 / 自動車整備士'],['性別','男性']],
    links:[['X','https://x.com/syakariki_iriam?s=21&t=enc1lWXjnDQOuVr2cJdIOA'],['IRIAM','https://web.iriam.app/s/user/MY4Gkzy27q?uuid=f175ac16']]
  },
  usotsuki:{
    image:'usotsuki-profile.jpg',
    category:'IRIAM LIVER / V-RAPPER',
    name:'獺月 愛識',
    reading:'USOTSUKI KANASHIKI',
    description:'リリカルリリックを得意とするVラッパー。IRIAMを中心に雑談・歌・コラボ企画で活動し、YouTubeでは自身が作詞した楽曲を公開予定です。',
    details:[['活動媒体','IRIAM / YouTube'],['配信内容','雑談 / 歌 / コラボ企画'],['活動スタイル','Vラッパー'],['YouTube','作詞した楽曲を公開予定']],
    links:[['X','https://x.com/usotuki_kanasi?s=11&t=enc1lWXjnDQOuVr2cJdIOA'],['IRIAM','https://web.iriam.app/s/user/LXD8dgn1Rc?uuid=2e6'],['YouTube','https://youtube.com/channel/UCddPxfroxlUOyolnXkn5Djw?si=zroZo-s5bh1uHVws']]
  }
};

const modal=document.getElementById('profileModal');
const modalImage=document.getElementById('modalImage');
const modalCategory=document.getElementById('modalCategory');
const modalName=document.getElementById('modalName');
const modalReading=document.getElementById('modalReading');
const modalDescription=document.getElementById('modalDescription');
const modalDetails=document.getElementById('modalDetails');
const modalLinks=document.getElementById('modalLinks');

function openProfile(id){
  const p=profiles[id];
  if(!p)return;
  modalImage.src=p.image;
  modalImage.alt=p.name;
  modalCategory.textContent=p.category;
  modalName.textContent=p.name;
  modalReading.textContent=p.reading;
  modalDescription.textContent=p.description;
  modalDetails.innerHTML='';
  p.details.forEach(([term,value])=>{
    const row=document.createElement('div');
    const dt=document.createElement('dt');
    const dd=document.createElement('dd');
    dt.textContent=term; dd.textContent=value;
    row.append(dt,dd); modalDetails.appendChild(row);
  });
  modalLinks.innerHTML='';
  p.links.forEach(([label,url])=>{
    const a=document.createElement('a');
    a.href=url;a.target='_blank';a.rel='noopener';
    a.innerHTML=label+' <span>↗</span>';
    modalLinks.appendChild(a);
  });
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeProfile(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.querySelectorAll('[data-profile]').forEach(btn=>btn.addEventListener('click',()=>openProfile(btn.dataset.profile)));
document.querySelectorAll('[data-close-profile]').forEach(el=>el.addEventListener('click',closeProfile));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProfile();});

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=encodeURIComponent(document.getElementById('name').value);
  const email=encodeURIComponent(document.getElementById('email').value);
  const subject=encodeURIComponent(document.getElementById('subject').value);
  const message=encodeURIComponent(document.getElementById('message').value);
  location.href=`mailto:contact.vreduo@gmail.com?subject=V-RE:DUO｜${subject}&body=お名前：${name}%0Aメールアドレス：${email}%0A%0A${message}`;
});