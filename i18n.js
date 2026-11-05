// Site languages. Uzbek lives in the HTML; this file holds Russian and English.
// Each entry: 'Uzbek text exactly as on the page': ['Русский', 'English'].
// Text that is missing here stays in Uzbek. Headings with inner tags are keyed by their full HTML.
const I18N={
  // header, footer, page titles
  'Asosiy menyu':['Главное меню','Main menu'],
  'AirFit — bosh sahifa':['AirFit — главная','AirFit — home'],
  'Xizmatlar':['Услуги','Services'],
  'Jadval':['Расписание','Schedule'],
  'Trener':['Тренер','Coach'],
  'Narxlar':['Цены','Prices'],
  'Aloqa':['Контакты','Contact'],
  'Menyuni ochish':['Открыть меню','Open menu'],
  'Menyuni yopish':['Закрыть меню','Close menu'],
  'Til':['Язык','Language'],
  'Bosh sahifa':['Главная','Home'],
  'AirFit — Ayollar fitnes zali, Toshkent':['AirFit — женский фитнес-зал, Ташкент','AirFit — women’s gym, Tashkent'],
  'Qo‘ng‘iroq':['Позвонить','Call'],
  'Bepul kunga yozilish':['Записаться на бесплатный день','Book a free day'],
  'Bepul sinov kuni':['Бесплатный пробный день','Free trial day'],
  'Toshkentdagi ayollar fitnes zali':['Женский фитнес-зал в Ташкенте','Women’s gym in Tashkent'],

  // home
  'Faqat ayollar uchun · Kukcha':['Только для женщин · Кукча','Women only · Kukcha'],
  'O‘zingiz uchun<br><span class="o">eng yaxshi</span><br><span class="pk">tanlov!</span>':['Ваш<br><span class="o">лучший</span><br><span class="pk">выбор!</span>','Your<br><span class="o">best</span><br><span class="pk">choice!</span>'],
  'Bir makon — cheksiz imkoniyatlar!':['Одно место — безграничные возможности!','One place — endless possibilities!'],
  'Bepul kunga yozil →':['Бесплатный день →','Free trial day →'],
  '1 kun bepul':['1 день бесплатно','1 day free'],
  'Birinchi tashrif — sinov kuni. Zal va darslarni bepul sinab ko‘ring.':['Первый визит — пробный день. Попробуйте зал и занятия бесплатно.','Your first visit is a trial day. Try the gym and classes for free.'],
  'Kunduzgi smena 12:00–17:00 · abonementlarga chegirma':['Дневная смена 12:00–17:00 · скидка на абонементы','Daytime 12:00–17:00 · discount on memberships'],
  '900 000 tejang':['Сэкономьте 900 000','Save 900 000'],
  '6 oylik zal abonementi — oyiga atigi 650 000 so‘m':['Абонемент в зал на 6 месяцев — всего 650 000 сум в месяц','6-month gym membership — just 650 000 so‘m a month'],

  // services
  'Nima <span>qilamiz</span>':['Что мы <span>делаем</span>','What we <span>do</span>'],
  'Natija uchun mashq qiling, kayfiyat uchun raqsga tushing. Keyin esa massaj bilan tiklaning.':['Тренируйтесь ради результата, танцуйте ради настроения. А потом восстанавливайтесь с массажем.','Train for results, dance for the mood. Then recover with a massage.'],
  'Fitnes':['Фитнес','Fitness'],
  'Trenajyor zali, funksional, kuch va kardio mashg‘ulotlari. Xohlasangiz, trener bilan shaxsiy mashg‘ulot.':['Тренажёрный зал, функциональные, силовые и кардиотренировки. По желанию — персональные занятия с тренером.','Gym floor, functional, strength and cardio training. Personal sessions with a coach if you like.'],
  'Aerobika & Zumba':['Аэробика и зумба','Aerobics & Zumba'],
  'Energiyaga to‘la guruh darslari: chidamlilik, kardio va yaxshi kayfiyat.':['Энергичные групповые занятия: выносливость, кардио и хорошее настроение.','High-energy group classes: endurance, cardio and a great mood.'],
  'Stretching':['Стретчинг','Stretching'],
  'Egiluvchanlik, to‘g‘ri qomat va yengillik hissi.':['Гибкость, правильная осанка и ощущение лёгкости.','Flexibility, good posture and a feeling of lightness.'],
  'Arab raqsi':['Восточные танцы','Belly dance'],
  'Nafis harakatlar, plastika va ayollik. Qorin va bel mushaklarini mustahkamlaydi, kayfiyatni ko‘taradi.':['Изящные движения, пластика и женственность. Укрепляет мышцы живота и поясницы, поднимает настроение.','Graceful movement and femininity. Strengthens the abs and lower back and lifts your mood.'],
  'Massaj':['Массаж','Massage'],
  'Tiklovchi, antitsellyulit va relaks massaj. Og‘ir mashg‘ulotdan keyin juda mos keladi.':['Восстановительный, антицеллюлитный и расслабляющий массаж. Идеально после тяжёлой тренировки.','Recovery, anti-cellulite and relaxing massage. Perfect after a hard workout.'],
  'Manikyur & pedikyur':['Маникюр и педикюр','Manicure & pedicure'],
  'Mashg‘ulotdan keyin go‘zallik uchun vaqt ajrating.':['Найдите время для красоты после тренировки.','Make time for beauty after your workout.'],
  'Qulayliklar':['Удобства','Amenities'],
  'Nega <span>AirFit</span>?':['Почему <span>AirFit</span>?','Why <span>AirFit</span>?'],
  'Mashg‘ulotdan oldin ham, keyin ham o‘zingizni uydagidek his qilasiz.':['И до, и после тренировки вы чувствуете себя как дома.','Feel at home before and after every workout.'],
  '1Fit ilovasidagi reyting':['Рейтинг в приложении 1Fit','Rating in the 1Fit app'],
  'Mijozlarimiz AirFit’ni 1Fit’da eng yuqori baholaydi. 1Fit obunasi bo‘lsa, ilova orqali ham kelishingiz mumkin.':['Наши клиентки ставят AirFit высшие оценки в 1Fit. Если у вас есть подписка 1Fit, можно прийти и через приложение.','Our clients give AirFit top marks on 1Fit. With a 1Fit subscription you can also visit through the app.'],
  'Zamonaviy jihozlar':['Современное оборудование','Modern equipment'],
  'Dush va fen':['Душ и фен','Showers and hair dryers'],
  'Bepul Wi-Fi':['Бесплатный Wi-Fi','Free Wi-Fi'],
  'Avtoturargoh':['Парковка','Parking'],
  'Metro yaqinida':['Рядом с метро','Near the metro'],

  // schedule
  'Bugun <span>nima</span> bor?':['Что <span>сегодня</span>?','What’s <span>on</span> today?'],
  'Kunni tanlang va guruh darsiga joy band qiling. Trenajyor zali ish vaqti davomida ochiq.':['Выберите день и забронируйте место на групповом занятии. Тренажёрный зал открыт весь рабочий день.','Pick a day and book a spot in a group class. The gym floor is open all day.'],
  'Hafta kunlari':['Дни недели','Days of the week'],
  'Shaxsiy mashg‘ulotlar — siz uchun qulay vaqtda.':['Персональные тренировки — в удобное для вас время.','Personal sessions — at a time that suits you.'],
  'Vaqtni kelishish →':['Договориться о времени →','Arrange a time →'],
  'Shaxsiy mashg‘ulot':['Персональная тренировка','Personal session'],
  'Aerobika Miks':['Аэробика Микс','Aerobics Mix'],
  '90 daqiqa':['90 минут','90 min'],
  '60 daqiqa':['60 минут','60 min'],
  'Trener: {n}':['Тренер: {n}','Coach: {n}'],
  'Arofat':['Арофат','Arofat'],
  'Band qilish →':['Записаться →','Book →'],
  'Du':['Пн','Mon'],'Se':['Вт','Tue'],'Ch':['Ср','Wed'],'Pa':['Чт','Thu'],'Ju':['Пт','Fri'],'Sh':['Сб','Sat'],

  // coach
  'Treneringiz':['Ваш тренер','Your coach'],
  'Kim bilan <span>mashq qilasiz</span>':['С кем вы <span>тренируетесь</span>','Who you’ll <span>train with</span>'],
  'AirFit — ayollar uchun, ayollar tomonidan yaratilgan zal. Asoschimiz bilan tanishing.':['AirFit — зал, созданный женщинами для женщин. Познакомьтесь с нашей основательницей.','AirFit is a gym made by women, for women. Meet our founder.'],
  'Arofat Ozodovna — fitnes-trener':['Арофат Озодовна — фитнес-тренер','Arofat Ozodovna — fitness coach'],
  'yillik<br>tajriba':['лет<br>опыта','years of<br>experience'],
  'AirFit asoschisi':['Основательница AirFit','AirFit founder'],
  'Arofat <span>Ozodovna</span>':['Арофат <span>Озодовна</span>','Arofat <span>Ozodovna</span>'],
  'Shaxsiy fitnes-trener':['Персональный фитнес-тренер','Personal fitness coach'],
  'Aerobika va Zumba instruktori':['Инструктор по аэробике и зумбе','Aerobics and Zumba instructor'],
  'Arofat Ozodovna fitnes va jismoniy tayyorgarlik sohasida 10 yildan beri ishlaydi. U aerobika va Zumba bo‘yicha guruh darslarini, shuningdek, shaxsiy mashg‘ulotlarni olib boradi.':['Арофат Озодовна 10 лет работает в сфере фитнеса и физической подготовки. Она ведёт групповые занятия по аэробике и зумбе, а также персональные тренировки.','Arofat Ozodovna has worked in fitness and physical training for 10 years. She teaches group aerobics and Zumba classes as well as personal sessions.'],
  'Uning mashg‘ulotlari qomatni yaxshilaydi, chidamlilik va faollikni oshiradi, o‘ziga bo‘lgan ishonchni mustahkamlaydi. U har bir mijozning o‘ziga xos xususiyatlari va maqsadlarini hisobga oladi, darslarda esa qulay va ruhlantiruvchi muhit yaratadi.':['Её тренировки улучшают фигуру, повышают выносливость и активность, укрепляют уверенность в себе. Она учитывает особенности и цели каждой клиентки и создаёт на занятиях комфортную и вдохновляющую атмосферу.','Her sessions improve your figure, build endurance and energy, and boost self-confidence. She takes each client’s needs and goals into account and keeps every class comfortable and motivating.'],
  'Aerobika':['Аэробика','Aerobics'],
  'Zumba':['Зумба','Zumba'],
  'Shaxsiy mashg‘ulotlar':['Персональные тренировки','Personal sessions'],
  'Kardio':['Кардио','Cardio'],
  'Qomat va chidamlilik':['Фигура и выносливость','Figure and endurance'],
  'Har bir ayolga <em>kuchliroq, g‘ayratliroq</em> va o‘ziga ishongan bo‘lishga yordam berish.':['Помочь каждой женщине стать <em>сильнее, энергичнее</em> и увереннее в себе.','To help every woman become <em>stronger, more energetic</em> and more confident.'],
  'Arofat bilan mashq qil →':['Тренироваться с Арофат →','Train with Arofat →'],
  'Shaxsiy mashg‘ulot (Arofat Ozodovna)':['Персональная тренировка (Арофат Озодовна)','Personal session (Arofat Ozodovna)'],

  // prices
  'Tanla va <span>boshla</span>':['Выбирай и <span>начинай</span>','Choose and <span>start</span>'],
  'Birinchi kun bepul — 1 ta sinov tashrifi. Uzoqroq muddatga olsangiz, har oy arzonroq.':['Первый день бесплатно — 1 пробный визит. Чем дольше срок, тем дешевле каждый месяц.','Your first day is free — 1 trial visit. The longer the term, the less you pay each month.'],
  'Abonement muddati':['Срок абонемента','Membership term'],
  '1 oy':['1 месяц','1 month'],
  '3 oy':['3 месяца','3 months'],
  '6 oy':['6 месяцев','6 months'],
  'Tanang — o‘z qo‘lingda!':['Твоё тело — в твоих руках!','Your body is in your hands!'],
  'Zal abonementi':['Абонемент в зал','Gym membership'],
  'Mustaqil mashg‘ulot':['Самостоятельные тренировки','Train on your own'],
  'so‘m / oy':['сум / мес','so‘m / month'],
  '1 oylik abonement':['Абонемент на 1 месяц','1-month membership'],
  '{m} oy · jami {s} so‘m':['{m} мес. · всего {s} сум','{m} months · {s} so‘m total'],
  '{s} so‘m tejaysiz':['экономия {s} сум','you save {s} so‘m'],
  'Barcha trenajyorlar va zonalarga kirish':['Доступ ко всем тренажёрам и зонам','Access to all machines and zones'],
  'O‘zingizga qulay vaqtda':['В удобное для вас время','Whenever suits you'],
  'Dush va kiyinish xonasi':['Душ и раздевалка','Showers and changing room'],
  'Tanlash':['Выбрать','Choose'],
  'Trener bilan':['С тренером','With a coach'],
  'Trener bilan abonement':['Абонемент с тренером','Membership with a coach'],
  'Tajribali trener bilan shaxsiy mashg‘ulot':['Персональные тренировки с опытным тренером','Personal sessions with an experienced coach'],
  'Individual dastur':['Индивидуальная программа','Individual program'],
  'Natijalarni kuzatish':['Отслеживание результатов','Progress tracking'],
  'Eng samarali':['Самый эффективный','Most effective'],
  'Zal + trener':['Зал + тренер','Gym + coach'],
  'Natijaga kompleks yondashuv':['Комплексный подход к результату','A complete approach to results'],
  'Zal abonementi + shaxsiy trener':['Абонемент в зал + персональный тренер','Gym membership + personal coach'],
  'Individual dastur va nazorat':['Индивидуальная программа и контроль','Individual program and supervision'],
  'Har bosqichda natija':['Результат на каждом этапе','Results at every stage'],
  'Hozir yozilish':['Записаться сейчас','Sign up now'],
  'Birinchi tashrif — sinov kuni':['Первый визит — пробный день','First visit is a trial day'],
  'Massaj · 1 seans':['Массаж · 1 сеанс','Massage · 1 session'],
  'Manikyur / pedikyur':['Маникюр / педикюр','Manicure / pedicure'],

  // contact
  'Birinchi<br>kun <span>bepul.</span><br>Bugun boshla.':['Первый<br>день <span>бесплатно.</span><br>Начни сегодня.','First<br>day <span>free.</span><br>Start today.'],
  'Ertaga emas — hoziroq!':['Не завтра — прямо сейчас!','Not tomorrow — right now!'],
  'Ismingiz':['Ваше имя','Your name'],
  'Telefon raqamingiz':['Ваш номер телефона','Your phone number'],
  'Yo‘nalish':['Направление','Activity'],
  'Fitnes / zal':['Фитнес / зал','Fitness / gym'],
  'Aerobika / Zumba':['Аэробика / зумба','Aerobics / Zumba'],
  'Dars yoki abonement (ixtiyoriy)':['Занятие или абонемент (необязательно)','Class or membership (optional)'],
  'Dars yoki abonement':['Занятие или абонемент','Class or membership'],
  'Yuborish →':['Отправить →','Send →'],
  'Yuborilmoqda…':['Отправляем…','Sending…'],
  'Arizangiz tayyor!':['Ваша заявка готова!','Your request is ready!'],
  'Uni qulay usulda yuboring. Telegram uchun matn nusxalandi — chatga joylashtiring.':['Отправьте её удобным способом. Текст для Telegram скопирован — вставьте его в чат.','Send it whichever way suits you. The text for Telegram is copied — paste it into the chat.'],
  'Arizangiz qabul qilindi!':['Заявка принята!','Request received!'],
  'Tez orada siz bilan bog‘lanamiz. Shoshilinch bo‘lsa — qo‘ng‘iroq qiling.':['Мы скоро с вами свяжемся. Если срочно — позвоните.','We’ll be in touch soon. If it’s urgent, give us a call.'],
  'Telegram orqali →':['Через Telegram →','Via Telegram →'],
  'WhatsApp orqali →':['Через WhatsApp →','Via WhatsApp →'],
  'Qo‘ng‘iroq qilish':['Позвонить','Call us'],
  '← Arizani o‘zgartirish':['← Изменить заявку','← Edit request'],
  'Assalomu alaykum! AirFit’ga yozilmoqchiman.':['Здравствуйте! Хочу записаться в AirFit.','Hello! I’d like to sign up at AirFit.'],
  'Ism':['Имя','Name'],
  'Telefon':['Телефон','Phone'],
  'Dars':['Занятие','Class'],
  'Manzil':['Адрес','Address'],
  'Kukcha, Toshkent':['Кукча, Ташкент','Kukcha, Tashkent'],
  'Metro yaqinida · avtoturargoh':['Рядом с метро · парковка','Near the metro · parking'],
  'Ish vaqti':['Часы работы','Opening hours'],
  'Du–Sh · 08:00–21:00':['Пн–Сб · 08:00–21:00','Mon–Sat · 08:00–21:00'],
  'AirFit xaritada':['AirFit на карте','AirFit on the map'],
  'Yo‘lni ko‘rsatish →':['Проложить маршрут →','Get directions →']
};

const LANGS=['uz','ru','en'];
// ?lang=ru in a link opens the site in that language (handy for Instagram / Telegram links)
const LANG=(()=>{
  const q=new URLSearchParams(location.search).get('lang');
  let s=null;
  try{if(LANGS.includes(q))localStorage.setItem('lang',q);s=localStorage.getItem('lang')}catch(_){}
  return LANGS.includes(q)?q:LANGS.includes(s)?s:'uz';
})();

// t('Uzbek text', {placeholders}) → text in the current language
function t(s,v){
  const e=I18N[s];
  let r=LANG==='uz'||!e?s:e[LANG==='ru'?0:1];
  return v?r.replace(/\{(\w+)\}/g,(_,k)=>v[k]):r;
}

(function(){
  document.documentElement.lang=LANG;
  if(LANG!=='uz'){
    document.title=document.title.split(' — ').map(p=>t(p)).join(' — ');
    const ATTRS=['aria-label','alt','placeholder','title','data-class'];
    const walk=el=>{
      for(const n of [...el.childNodes]){
        if(n.nodeType===3){
          const s=n.nodeValue.trim();
          if(I18N[s])n.nodeValue=n.nodeValue.replace(s,()=>t(s));
        }else if(n.nodeType===1&&n.tagName!=='SCRIPT'){
          ATTRS.forEach(a=>{const v=n.getAttribute(a);if(v&&I18N[v])n.setAttribute(a,t(v))});
          const h=n.innerHTML.trim();
          if(n.children.length&&I18N[h])n.innerHTML=t(h);else walk(n);
        }
      }
    };
    walk(document.body);
  }

  // UZ / RU / EN switcher in the header; the choice is remembered and the page reloads in that language
  const nav=document.getElementById('nav');
  if(!nav)return;
  const box=document.createElement('div');
  box.className='lang';box.setAttribute('role','group');box.setAttribute('aria-label',t('Til'));
  LANGS.forEach(l=>{
    const b=document.createElement('button');
    b.type='button';b.lang=l;b.textContent=l.toUpperCase();b.setAttribute('aria-pressed',l===LANG);
    b.onclick=()=>{
      if(l===LANG)return;
      const u=new URL(location.href);
      try{localStorage.setItem('lang',l);u.searchParams.delete('lang')}catch(_){u.searchParams.set('lang',l)}
      location.replace(u.href);
    };
    box.appendChild(b);
  });
  nav.insertBefore(box,nav.querySelector('.btn')||document.getElementById('burger'));
})();
