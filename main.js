const PHONE='998946739499';
// Cloudflare Worker that posts sign-ups to the Telegram bot (bot/README.md). Empty → Telegram/WhatsApp links only.
const ORDER_URL='';

// Group class schedule: [time, class, trainer, duration, style] — style: '' fitness, 'd' dance
const AER=t=>[t,'Aerobika Miks','Arofat','90 daqiqa',''];
const ODD=[AER('15:00'),AER('19:00')];
const EVEN=[AER('07:30'),AER('09:30'),AER('11:00'),['14:00','Stretching','','60 daqiqa',''],['16:00','Arab raqsi','','60 daqiqa','d'],AER('18:30'),['20:00','Arab raqsi','','60 daqiqa','d']];
const SCHEDULE={'Du':ODD,'Se':EVEN,'Ch':ODD,'Pa':EVEN,'Ju':ODD,'Sh':EVEN};

// Monthly price (so‘m) by plan and term in months
const PRICES={
  zal:{name:'Zal abonementi',1:800000,3:700000,6:650000},
  trener:{name:'Trener bilan abonement',1:800000,3:700000,6:650000},
  combo:{name:'Zal + trener',1:1600000,3:1400000,6:1300000}
};

const $=id=>document.getElementById(id);
const nav=$('nav'),burger=$('burger');
const setMenu=open=>{nav.classList.toggle('open',open);burger.setAttribute('aria-expanded',open);burger.textContent=open?'✕':'☰';burger.setAttribute('aria-label',t(open?'Menyuni yopish':'Menyuni ochish'))};
burger.onclick=()=>setMenu(!nav.classList.contains('open'));

// schedule page
const days=$('days'),cls=$('classes');
if(days){
  const show=d=>{
    [...days.children].forEach(b=>{const on=b.dataset.d===d;b.classList.toggle('on',on);b.setAttribute('aria-selected',on)});
    cls.innerHTML=SCHEDULE[d].map(c=>`<div class="cl ${c[4]}"><div class="tm">${c[0]}</div><div><h4>${t(c[1])}</h4>${c[2]?`<small>${t('Trener: {n}',{n:t(c[2])})}</small>`:''}</div><span class="lvl">${t(c[3])}</span><a href="aloqa.html" data-class="${t(c[1])} · ${t(d)} ${c[0]}">${t('Band qilish →')}</a></div>`).join('');
  };
  Object.keys(SCHEDULE).forEach(d=>{const b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.dataset.d=d;b.textContent=t(d);b.onclick=()=>show(d);days.appendChild(b)});
  show({1:'Du',2:'Se',3:'Ch',4:'Pa',5:'Ju',6:'Sh'}[new Date().getDay()]||'Du');
}

// pricing page: 1 / 3 / 6 month terms
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
function term(m){
  document.querySelectorAll('#period button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.m==m));
  document.querySelectorAll('[data-plan]').forEach(card=>{
    const p=PRICES[card.dataset.plan],save=(p[1]-p[m])*m;
    card.querySelector('.pc span').textContent=fmt(p[m]);
    card.querySelector('.per').textContent=m==1?t('1 oylik abonement'):t('{m} oy · jami {s} so‘m',{m,s:fmt(p[m]*m)});
    card.querySelector('.save').textContent=save?t('{s} so‘m tejaysiz',{s:fmt(save)}):'';
    card.querySelector('.btn').dataset.class=`${t(p.name)} · ${t(m+' oy')}`;
  });
}
document.querySelectorAll('#period button').forEach(b=>b.onclick=()=>term(+b.dataset.m));
if($('period'))term(1);

// any "book" link carries its class into the form — on this page, or via ?c= on the contact page
const fClass=$('f-class');
if(fClass)fClass.value=new URLSearchParams(location.search).get('c')||'';
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-class]');
  if(!a)return;
  if(fClass)fClass.value=a.dataset.class;
  else a.href='aloqa.html?c='+encodeURIComponent(a.dataset.class);
});

// contact page form → order bot; if that fails, a ready-made message for Telegram / WhatsApp
const form=$('form'),sent=$('sent'),send=$('f-send');
if(form){
  form.onsubmit=async e=>{
    e.preventDefault();
    const v=id=>$(id).value.trim();
    let ok=false;
    if(ORDER_URL){
      send.disabled=true;send.textContent=t('Yuborilmoqda…');
      try{
        const r=await fetch(ORDER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:v('f-name'),tel:v('f-tel'),dir:v('f-dir'),class:v('f-class'),website:v('f-web')})});
        ok=(await r.json()).ok===true;
      }catch(_){}
      send.disabled=false;send.textContent=t('Yuborish →');
    }
    if(ok){
      $('s-title').textContent=t('Arizangiz qabul qilindi!');
      $('s-text').textContent=t('Tez orada siz bilan bog‘lanamiz. Shoshilinch bo‘lsa — qo‘ng‘iroq qiling.');
    }else{
      const msg=[t('Assalomu alaykum! AirFit’ga yozilmoqchiman.'),t('Ism')+': '+v('f-name'),t('Telefon')+': '+v('f-tel'),t('Yo‘nalish')+': '+v('f-dir')].concat(v('f-class')?[t('Dars')+': '+v('f-class')]:[]).join('\n');
      $('s-wa').href=`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
      navigator.clipboard&&navigator.clipboard.writeText(msg).catch(()=>{});
    }
    sent.classList.toggle('ok',ok);
    form.hidden=true;sent.classList.add('on');
  };
  $('s-back').onclick=()=>{form.hidden=false;sent.classList.remove('on')};
}

const yr=$('yr');
if(yr)yr.textContent=new Date().getFullYear();
