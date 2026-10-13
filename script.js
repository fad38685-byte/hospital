const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  const labels = getNavigationLabels(document.documentElement.lang);
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? labels.open : labels.close);
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    const labels = getNavigationLabels(document.documentElement.lang);
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', labels.open);
    navigation.classList.remove('is-open');
  });
});

const languageToggle = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
const languageCurrent = document.querySelector('.language-current');
const pageTitle = document.querySelector('title');
const pageDescription = document.querySelector('meta[name="description"]');

function getNavigationLabels(languageCode) {
  if (languageCode === 'am') return { choose: 'ቋንቋ ይምረጡ', open: 'የዳሰሳ ምናሌን ክፈት', close: 'የዳሰሳ ምናሌን ዝጋ' };
  if (languageCode === 'om') return { choose: 'Afaan filadhaa', open: 'Maqaa geejjibaa bani', close: 'Maqaa geejjibaa cufi' };
  return { choose: 'Choose language', open: 'Open navigation menu', close: 'Close navigation menu' };
}

const translations = {
  am: {
    short: 'አማ',
    title: 'አውሬሊያ የሕክምና ማዕከል — በጥንቃቄ የተደረገ እንክብካቤ።',
    description: 'ለሕይወትዎ በሁሉም ወቅቶች አስተዋይና የተሟላ እንክብካቤ። ሐኪም ያግኙ እና ቀጠሮ ይያዙ።',
    nodes: {
      '.announcement': ['እያንዳንዱ የጤና ጉዞዎ ከእኛ ጋር ነው <span class="announcement__divider">—</span> <a href="#appointment">ቀጠሮ ይያዙ <span aria-hidden="true">↗</span></a>'],
      '.brand__name span': ['የሕክምና ማዕከል'],
      '.main-nav > a': ['የሕክምና አገልግሎት', 'ሐኪሞቻችን', 'አቀራረባችን', 'አድራሻችን', 'ቀጠሮ ይያዙ <span aria-hidden="true">↗</span>'],
      '.hero__eyebrow': ['<span class="eyebrow__line"></span> ሰውን ያማከለ የጤና እንክብካቤ'],
      '.hero h1': ['ጤናዎ ጥሩ።<br><span>በጥንቃቄ</span><br>የታሰበ።'],
      '.hero__copy': ['በጥንቃቄ የቀረበ ባለሙያዊ እንክብካቤ። ለጥያቄዎችዎ፣ ለሕይወትዎ ወቅቶችና ለዕለት ተዕለት ኑሮዎ።'],
      '.hero__actions .button': ['ሐኪም ያግኙ <span aria-hidden="true">↗</span>'],
      '.hero__actions .text-link': ['<span class="play-icon" aria-hidden="true">↓</span> አገልግሎታችንን ይመልከቱ'],
      '.hero__side-note': ['<span>01 / 03</span><i></i> በሚያስፈልግበት ጊዜ ከጎንዎ'],
      '.hero__scroll': ['<span></span> ለማየት ወደ ታች ይሸብልሉ'],
      '.hero__card strong': ['እውነተኛ ሰዎች። ልዩ እንክብካቤ።'],
      '.hero__card div span': ['የሚያውቁዎትን ቡድን ያግኙ።'],
      '.hero__card > a': ['↗'],
      '.trust-strip > p': ['ለጤናዎ እንጂ ለሕክምና አገልግሎት ብቻ አይደለም።'],
      '.trust-strip__stats span': ['ልዩ አገልግሎቶች', '% ይመክሩናል', 'ዓመት ከጎንዎ'],
      '.section-heading .eyebrow': ['<span class="eyebrow__line"></span> ብዙ የጤና አገልግሎቶች'],
      '.section-heading h2': ['ለእርስዎ ሁሉ<br><span>የተዘጋጀ እንክብካቤ።</span>'],
      '.section-heading__aside p': ['ከመጀመሪያው ሰላምታ እስከ ቀጣይ ክትትል፣ ሁሉም ነገር በማዳመጥ ይጀምራል። ለእርስዎ የሚሆነውን እንክብካቤ ያግኙ።'],
      '.section-heading__aside .text-link': ['ሁሉንም አገልግሎቶች ይመልከቱ <span aria-hidden="true">↗</span>'],
      '.specialty-card h3': ['ልብ እና<br>የልብ ሕክምና', 'የመጀመሪያ<br>ደረጃ እንክብካቤ', 'የሴቶች<br>ጤና', 'አጥንት እና<br>መገጣጠሚያ', 'የሕፃናት<br>ሕክምና'],
      '.specialty-card__link': ['↗', '↗', '↗', '↗', '↗'],
      '.care-bottom > span:first-child': ['ከየት መጀመር እንዳለ አያውቁም?'],
      '.care-bottom .text-link': ['ልንረዳዎ ደስ ይለናል <span aria-hidden="true">↗</span>'],
      '.care-bottom__all': ['+ 19 ተጨማሪ ልዩ አገልግሎቶች'],
      '.doctors-intro .eyebrow': ['<span class="eyebrow__line"></span> ሰው ከሁሉ በፊት።'],
      '.doctors-intro h2': ['የእርስዎን<br>ሐኪሞች ያግኙ።'],
      '.doctors-intro__copy': ['ትክክለኛው ሐኪም ሁሉንም ነገር ይለውጣል። ከሕመም ታሪክዎ በላይ እርስዎን የሚያዩ አሳቢ ባለሙያዎችን ያግኙ።'],
      '.doctors-intro > .button': ['ሁሉንም ሐኪሞች ያግኙ <span aria-hidden="true">↗</span>'],
      '.doctor-profile-hint': ['ልምድ እና ችሎታ <span>＋</span>', 'ልምድ እና ችሎታ <span>＋</span>', 'ልምድ እና ችሎታ <span>＋</span>', 'ልምድ እና ችሎታ <span>＋</span>'],
      '.doctor-card__badge': ['ታዋቂ ሐኪም'],
      '.doctor-profile-years > span': ['ዓመት ልምድ'],
      '.doctor-profile-panel h4': ['የባለሙያነት ዘርፎች'],
      '.doctor-profile-panel li': ['የልብ መከላከያ ሕክምና', 'የልብ ጤና ግምገማ', 'የደም ግፊት እንክብካቤ', 'ዓመታዊ የጤና ምርመራ', 'የበሽታ መከላከል', 'የረጅም ጊዜ በሽታ እንክብካቤ', 'የሴቶች ጤና', 'የመከላከያ ምርመራ', 'የስነ ተዋልዶ ጤና', 'የመገጣጠሚያ ጤና', 'የስፖርት ጉዳቶች', 'እንቅስቃሴ እና ማገገም'],
      '.doctor-card__info p': ['የልብ ሕክምና <span>·</span> 14 ዓመት ልምድ', 'የመጀመሪያ ደረጃ እንክብካቤ <span>·</span> 11 ዓመት ልምድ', 'የሴቶች ጤና <span>·</span> 9 ዓመት ልምድ', 'የአጥንት ሕክምና <span>·</span> 12 ዓመት ልምድ'],
      '.appointment-photo__caption span:first-child': ['እንደ እርስዎ የሚሰማ እንክብካቤ።'],
      '.appointment-photo__caption span:last-child': ['— የአውሬሊያ ቃል ኪዳን'],
      '.appointment-content .eyebrow': ['<span class="eyebrow__line"></span> የመጀመሪያው እርምጃ ቀላል ነው'],
      '.appointment-content h2': ['ለእርስዎ<br><span>ጊዜ እንስጥ።</span>'],
      '.appointment-content__copy': ['ምን እንደሚያስፈልግዎ ትንሽ ይንገሩን። ቡድናችን ትክክለኛውን ባለሙያና ጊዜ ያገኝልዎታል።'],
      '.booking-form label > span': ['ሙሉ ስም', 'ኢሜይል አድራሻ', 'ስልክ ቁጥር', 'የሚፈልጉት አገልግሎት', 'የሚመርጡት ቀን'],
      '.booking-form select option': ['ልዩ አገልግሎት ይምረጡ', 'የመጀመሪያ ደረጃ እንክብካቤ', 'የልብ ሕክምና', 'የሴቶች ጤና', 'የአጥንት ሕክምና', 'የሕፃናት ሕክምና', 'ሌላ / እርግጠኛ አይደለሁም'],
      '.booking-submit': ['ቀጠሮ ይጠይቁ <span aria-hidden="true">↗</span>'],
      '.form-note': ['ቅጹን ከላኩ በኋላ ጥያቄዎን ለመላክ WhatsApp ወይም Telegram ይምረጡ።'],
      '.form-message': [''],
      '.quote-section blockquote': ['ለዓመታት ለመጀመሪያ ጊዜ ሐኪሜ በእውነት <em>አየኝ።</em> ይህ ሁሉንም ነገር ለወጠ።', 'ሁሉም ሰው ጥያቄዎቼን ለመስማት ጊዜ ሰጠ። <em>ተሰምቶኛል፣ ተንከባክበውኛል</em> እና ተስፋ አግኝቻለሁ።', 'ከቀጠሮ እስከ ክትትል፣ እንክብካቤው ለእኔ የተዘጋጀ ነበር። በመጨረሻ <em>የማምነውን ቡድን</em> አገኘሁ።'],
      '.quote-attribution > div span': ['ከ2021 ጀምሮ ታካሚ', 'ከ2022 ጀምሮ ታካሚ', 'ከ2023 ጀምሮ ታካሚ'],
      '.location-content .eyebrow': ['<span class="eyebrow__line"></span> በአቅራቢያዎ'],
      '.location-content h2': ['ለመድረስ ቀላል።<br><span>ቤት የሚመስል ስፍራ።</span>'],
      '.location-copy': ['በሲያትል መሃል የሚገኝ ረጋ ያለና አቀባበል የሚያደርግ ቦታ። እንደሆኑ ይምጡ፤ ቀሪውን እኛ እናስተናግዳለን።'],
      '.location-details strong': ['አድራሻ', 'የሥራ ሰዓት'],
      '.location-details p span': ['1200 5th Avenue፣ Seattle፣ WA 98101', 'ሰኞ–ዓርብ፣ 8 ጥዋት–6 ማታ · ቅዳሜ፣ 9 ጥዋት–2 ቀን'],
      '.location-content > .text-link': ['አቅጣጫ ይመልከቱ <span aria-hidden="true">↗</span>'],
      '.map-tag strong': ['አውሬሊያ የሕክምና ማዕከል'],
      '.map-tag small': ['የሲያትል መሃል · አቅጣጫ ↗'],
      '.closing-cta .eyebrow': ['<span class="eyebrow__line"></span> ጤናዎ። በእርስዎ ፍጥነት።'],
      '.closing-cta h2': ['ዝግጁ ሲሆኑ፣<br><em>እኛ እዚህ ነን።</em>'],
      '.closing-cta .button': ['እንጀምር <span aria-hidden="true">↗</span>'],
      '.footer-brand-block > p': ['ጥሩ እንክብካቤ ስሜት ነው።<br>እንዲያገኙት እንርዳዎ።'],
      '.footer-links > div > strong': ['አገልግሎቶቻችን', 'ያግኙን', 'አድራሻ'],
      '.footer-links > div:first-child a': ['ሁሉንም ልዩ አገልግሎቶች', 'ሐኪሞቻችንን ያግኙ', 'ቀጠሮ ይያዙ'],
      '.footer-address > span': ['አቅጣጫ ይመልከቱ ↗'],
      '.footer-hours': ['ሰኞ–ዓርብ፣ 8 ጥዋት–6 ማታ<br>ቅዳሜ፣ 9 ጥዋት–2 ቀን'],
      '.footer-bottom > span:first-child': ['© 2026 አውሬሊያ የሕክምና ማዕከል። ሁልጊዜ በጥንቃቄ።'],
      '.footer-bottom > span:nth-child(2)': ['በሲያትል፣ WA በጥንቃቄ የተሠራ'],
      '.footer-bottom > a': ['ግላዊነት እና ተደራሽነት'],
    },
    attributes: {
      '.site-header > .brand': { 'aria-label': 'የአውሬሊያ የሕክምና ማዕከል መነሻ' },
      '.menu-toggle': { 'aria-label': 'የዳሰሳ ምናሌን ክፈት' },
      '.main-nav': { 'aria-label': 'ዋና ዳሰሳ' },
      '.hero__image': { 'aria-label': 'ብርሃን የሞላበት አቀባበል የሚያደርግ የሕክምና ክፍል' },
      '.hero__scroll': { 'aria-label': 'ለማየት ወደ ታች ይሸብልሉ' },
      '.hero__card > a': { 'aria-label': 'ሐኪሞቻችንን ያግኙ' },
      '.trust-strip': { 'aria-label': 'የአውሬሊያ አጭር መግለጫ' },
      '.specialty-card__link': { 'aria-label': ['የልብ ሕክምናን ይመልከቱ', 'የመጀመሪያ ደረጃ እንክብካቤን ይመልከቱ', 'የሴቶች ጤናን ይመልከቱ', 'የአጥንት ሕክምናን ይመልከቱ', 'የሕፃናት ሕክምናን ይመልከቱ'] },
      '.doctor-prev': { 'aria-label': 'ቀደም ያሉ ሐኪሞች' },
      '.doctor-next': { 'aria-label': 'ቀጣይ ሐኪሞች' },
      '.doctor-profile-toggle': { 'aria-label': ['የዶክተር ማያ ቤኔትን ልምድና ችሎታ አሳይ', 'የዶክተር ጄምስ ካርተርን ልምድና ችሎታ አሳይ', 'የዶክተር ሶፊያ ሬይኖልድስን ልምድና ችሎታ አሳይ', 'የዶክተር ኖህ ዊሊያምስን ልምድና ችሎታ አሳይ'] },
      '.doctor-card__arrow': { 'aria-label': ['ከዶክተር ማያ ቤኔት ጋር ቀጠሮ ይያዙ', 'ከዶክተር ጄምስ ካርተር ጋር ቀጠሮ ይያዙ', 'ከዶክተር ሶፊያ ሬይኖልድስ ጋር ቀጠሮ ይያዙ', 'ከዶክተር ኖህ ዊሊያምስ ጋር ቀጠሮ ይያዙ'] },
      '.booking-form input[name="name"]': { placeholder: 'ምሳሌ፦ አሌክስ ሞርጋን' },
      '.booking-form input[name="email"]': { placeholder: 'you@example.com' },
      '.booking-form input[name="phone"]': { placeholder: 'ምሳሌ፦ 0911 234 567', title: 'ከ7 እስከ 15 አሃዞች ያሉትን ትክክለኛ ስልክ ቁጥር ያስገቡ።' },
      '.quote-section': { 'aria-label': 'የታካሚዎች ታሪኮች' },
      '.quote-list': { 'aria-label': 'ተጨማሪ የታካሚ ታሪኮችን ለማንበብ ያንሸራትቱ' },
      '.quote-card': { 'aria-label': ['የታካሚ ታሪክ 1 ከ3', 'የታካሚ ታሪክ 2 ከ3', 'የታካሚ ታሪክ 3 ከ3'] },
      '.quote-prev': { 'aria-label': 'ያለፉት የታካሚ ታሪኮች' },
      '.quote-next': { 'aria-label': 'ቀጣይ የታካሚ ታሪኮች' },
      '.quote-controls .quote-prev': { 'aria-label': 'ያለፉት የታካሚ ታሪኮች' },
      '.quote-controls .quote-next': { 'aria-label': 'ቀጣይ የታካሚ ታሪኮች' },
      '.location-section': { 'aria-label': 'ቦታችን እና አድራሻችን' },
      '.map-frame iframe': { title: 'በሲያትል መሃል የሚገኘውን የአውሬሊያ የሕክምና ማዕከል የሚያሳይ ካርታ' },
      '.appointment-photo img': { alt: 'አንድ እንክብካቤ ሰጪ የታካሚን እጆች በርህራሄ ይዟል' },
      '.brand--footer': { 'aria-label': 'የአውሬሊያ የሕክምና ማዕከል መነሻ' },
      'meta[name="description"]': { content: 'በሁሉም የሕይወትዎ ወቅቶች አስተዋይና የተሟላ እንክብካቤ። ሐኪም ያግኙና ቀጠሮ ይያዙ።' },
    },
  },
  om: {
    short: 'OO',
    title: 'Giddugala Yaalaa Aurelia — Kunuunsa yaadamee kennamu.',
    description: 'Kunuunsa ogeeyyii fi gara-laafinaan yeroo jireenya keessan hundatti. Ogeessa fayyaa barbaadaa, beellama qabadhaa.',
    nodes: {
      '.announcement': ['Adeemsa fayyaa keessan hunda keessatti isin bira jirra <span class="announcement__divider">—</span> <a href="#appointment">Beellama qabadhaa <span aria-hidden="true">↗</span></a>'],
      '.brand__name span': ['giddugala yaalaa'],
      '.main-nav > a': ['Kunuunsa keenya', 'Ogeeyyii fayyaa keenya', 'Akkaataa keenya', 'Nu argadhaa', 'Beellama qabadhaa <span aria-hidden="true">↗</span>'],
      '.hero__eyebrow': ['<span class="eyebrow__line"></span> Kunuunsa fayyaa nama giddugaleessa godhate'],
      '.hero h1': ['Fayyaa gaarii.<br><span>Yaadamee</span><br>kan qophaaʼe.'],
      '.hero__copy': ['Kunuunsa ogeeyyii, of eeggannoodhaan kennamu. Gaaffii keessan, yeroo jireenya keessanii fi guyyaa guyyaa keessaniif.'],
      '.hero__actions .button': ['Ogeessa fayyaa argadhaa <span aria-hidden="true">↗</span>'],
      '.hero__actions .text-link': ['<span class="play-icon" aria-hidden="true">↓</span> Kunuunsa keenya ilaalaa'],
      '.hero__side-note': ['<span>01 / 03</span><i></i> YEROO ISIN BARBAACHISU'],
      '.hero__scroll': ['<span></span> ARGUF GADI SIQAA'],
      '.hero__card strong': ['Namoota dhugaa. Kunuunsa ajaaʼibsiisaa.'],
      '.hero__card div span': ['Garee isin beeku waliin wal baradhaa.'],
      '.hero__card > a': ['↗'],
      '.trust-strip > p': ['FAYYAA KEESSANIIF; YAALA QOFIIF MITI.'],
      '.trust-strip__stats span': ['tajaajila addaa', '% nu gorsu', 'waggaa isin cinaa'],
      '.section-heading .eyebrow': ['<span class="eyebrow__line"></span> Filannoo fayyaa hedduu'],
      '.section-heading h2': ['Kunuunsa nama<br><span>guutuu keessaniif.</span>'],
      '.section-heading__aside p': ['Nagaa gaafachuu jalqabaa irraa hanga hordoffii keessaniitti, wanti hundi dhaggeeffachuu irraa jalqaba. Kunuunsa bakka jireenyi isin geesseef malu argadhaa.'],
      '.section-heading__aside .text-link': ['Tajaajiloota keenya hunda ilaalaa <span aria-hidden="true">↗</span>'],
      '.specialty-card h3': ['Onnee fi<br>yaala onnee', 'Kunuunsa<br>fayyaa waliigalaa', 'Fayyaa<br>dubartootaa', 'Lafee fi<br>buusaa', 'Yaala<br>daaʼimmanii'],
      '.specialty-card__link': ['↗', '↗', '↗', '↗', '↗'],
      '.care-bottom > span:first-child': ['Eessa irraa jalqabuu akka qabdan hin beektanii?'],
      '.care-bottom .text-link': ['Isin gargaaruun nu gammachiisa <span aria-hidden="true">↗</span>'],
      '.care-bottom__all': ['+ tajaajiloota addaa 19 dabalataa'],
      '.doctors-intro .eyebrow': ['<span class="eyebrow__line"></span> Nama dursina. Yeroo hunda.'],
      '.doctors-intro h2': ['Ogeeyyii fayyaa<br>keessan wal baradhaa.'],
      '.doctors-intro__copy': ['Ogeessi fayyaa sirrii taʼe waan hunda jijjiira. Ogeeyyii gara-laafeyyii galmee keessan qofa osoo hin taʼin nama isin keessa jiru argan wal baradhaa.'],
      '.doctors-intro > .button': ['Ogeeyyii fayyaa keenya hunda ilaalaa <span aria-hidden="true">↗</span>'],
      '.doctor-profile-hint': ['Muuxannoo fi dandeettii <span>＋</span>', 'Muuxannoo fi dandeettii <span>＋</span>', 'Muuxannoo fi dandeettii <span>＋</span>', 'Muuxannoo fi dandeettii <span>＋</span>'],
      '.doctor-card__badge': ['KAN DHUKKUBSAATOTAAN JAALLATAMU'],
      '.doctor-profile-years > span': ['WAGGAA MUUXANNOO'],
      '.doctor-profile-panel h4': ['Damee ogummaa'],
      '.doctor-profile-panel li': ['Yaala ittisa dhukkuba onnee', 'Madaallii fayyaa onnee', 'Kunuunsa dhiibbaa dhiigaa', 'Daawwannaa fayyaa waggaa', 'Fayyaa ittisuu', 'Kunuunsa dhukkuba yeroo dheeraa', 'Fayyaa dubartootaa', 'Sakattaʼinsa ittisaa', 'Fayyaa walhormaataa', 'Fayyaa buusaa', 'Miidhaa ispoortii', 'Sochii fi fayyina'],
      '.doctor-card__info p': ['Yaala onnee <span>·</span> Muuxannoo waggaa 14', 'Kunuunsa fayyaa waliigalaa <span>·</span> Muuxannoo waggaa 11', 'Fayyaa dubartootaa <span>·</span> Muuxannoo waggaa 9', 'Yaala lafee <span>·</span> Muuxannoo waggaa 12'],
      '.appointment-photo__caption span:first-child': ['Kunuunsa akka keessanitti dhagaʼamu.'],
      '.appointment-photo__caption span:last-child': ['— WAADA AURELIA'],
      '.appointment-content .eyebrow': ['<span class="eyebrow__line"></span> Tarkaanfiin jalqabaa salphaadha'],
      '.appointment-content h2': ['Yeroo<br><span>isiniif haa kenninu.</span>'],
      '.appointment-content__copy': ['Waaʼee waan isin barbaachisu xiqqoo nutti himaa. Gareen keenya ogeessa fayyaa fi yeroo isin gargaaru isiniif barbaada.'],
      '.booking-form label > span': ['Maqaa guutuu', 'Teessoo imeelii', 'Lakkoofsa bilbilaa', 'Tajaajila barbaaddan', 'Guyyaa filattan'],
      '.booking-form select option': ['Tajaajila filadhaa', 'Kunuunsa fayyaa waliigalaa', 'Yaala onnee', 'Fayyaa dubartootaa', 'Yaala lafee', 'Yaala daaʼimmanii', 'Kan biraa / Hin mirkanoofne'],
      '.booking-submit': ['Beellama gaafadhaa <span aria-hidden="true">↗</span>'],
      '.form-note': ['Erga unka kana ergtanii booda gaaffii keessan erguuf WhatsApp ykn Telegram filadhaa.'],
      '.form-message': [''],
      '.quote-section blockquote': ['Waggaa hedduuf yeroo jalqabaatiif, ogeessi fayyaa koo dhugumaan <em>na arge.</em> Sun waan hundaa jijjiire.', 'Namni hundi gaaffii koo dhaggeeffachuuf yeroo naaf kenne. <em>Na dhaggeeffataniiru, na kunuunsaniiru</em> fi abdii naaf kennaniiru.', 'Beellama qabachuu irraa kaasee hanga hordoffiitti, kunuunsi dhuunfaa ture. Dhumarratti garee <em>ani amanadhu</em> argadhe.'],
      '.quote-attribution > div span': ['Dhukkubsataa Aurelia bara 2021 irraa', 'Dhukkubsataa Aurelia bara 2022 irraa', 'Dhukkubsataa Aurelia bara 2023 irraa'],
      '.location-content .eyebrow': ['<span class="eyebrow__line"></span> Naannoo keessan jirra'],
      '.location-content h2': ['Argachuun salphaadha.<br><span>Mana keessan fakkaata.</span>'],
      '.location-copy': ['Seattle giddugala keessatti bakka tasgabbaaʼaa fi simannaa gaarii qabu. Akkuma jirtanitti kottaa; kan hafe nuti isin gargaarra.'],
      '.location-details strong': ['Nu argadhaa', 'Yeroo hojii'],
      '.location-details p span': ['1200 5th Avenue, Seattle, WA 98101', 'Wiixata–Jimaata, 8–18 · Sanbata, 9–14'],
      '.location-content > .text-link': ['Karaa argadhaa <span aria-hidden="true">↗</span>'],
      '.map-tag strong': ['Giddugala Yaalaa Aurelia'],
      '.map-tag small': ['Seattle giddugala · Karaa argadhaa ↗'],
      '.closing-cta .eyebrow': ['<span class="eyebrow__line"></span> Fayyaa keessan. Saffisa keessaniin.'],
      '.closing-cta h2': ['Yeroo qophooftan,<br><em>as jirra.</em>'],
      '.closing-cta .button': ['Mee haa jalqabnu <span aria-hidden="true">↗</span>'],
      '.footer-brand-block > p': ['Kunuunsi gaariin miira gaariidha.<br>Akka argattan isin gargaarra.'],
      '.footer-links > div > strong': ['Tajaajiloota keenya', 'Nu qunnamaa', 'Nu argadhaa'],
      '.footer-links > div:first-child a': ['Tajaajiloota addaa hunda', 'Ogeeyyii fayyaa keenya', 'Beellama qabadhaa'],
      '.footer-address > span': ['Karaa argadhaa ↗'],
      '.footer-hours': ['Wiixata–Jimaata, 8–18<br>Sanbata, 9–14'],
      '.footer-bottom > span:first-child': ['© 2026 Giddugala Yaalaa Aurelia. Yeroo hunda of eeggannoodhaan.'],
      '.footer-bottom > span:nth-child(2)': ['Seattle, WA keessatti kunuunsaan hojjetame'],
      '.footer-bottom > a': ['Iccitii fi namoota hundaaf mijachuu'],
    },
    attributes: {
      '.site-header > .brand': { 'aria-label': 'Gara fuula jalqabaa Giddugala Yaalaa Aurelia' },
      '.menu-toggle': { 'aria-label': 'Maqaa geejjibaa bani' },
      '.main-nav': { 'aria-label': 'Maqaa geejjibaa guddaa' },
      '.hero__image': { 'aria-label': 'Kutaa yaalaa ifaa fi simannaa gaarii qabu' },
      '.hero__scroll': { 'aria-label': 'Arguuf gara gadiitti siqaa' },
      '.hero__card > a': { 'aria-label': 'Ogeeyyii fayyaa keenya wal baradhaa' },
      '.trust-strip': { 'aria-label': 'Waaʼee Aurelia gabaabinaan' },
      '.specialty-card__link': { 'aria-label': ['Yaala onnee ilaalaa', 'Kunuunsa fayyaa waliigalaa ilaalaa', 'Fayyaa dubartootaa ilaalaa', 'Yaala lafee ilaalaa', 'Yaala daaʼimmanii ilaalaa'] },
      '.doctor-prev': { 'aria-label': 'Ogeeyyii fayyaa duraanii' },
      '.doctor-next': { 'aria-label': 'Ogeeyyii fayyaa itti aanu' },
      '.doctor-profile-toggle': { 'aria-label': ['Muuxannoo fi dandeettii Dr. Maya Bennett agarsiisi', 'Muuxannoo fi dandeettii Dr. James Carter agarsiisi', 'Muuxannoo fi dandeettii Dr. Sofia Reynolds agarsiisi', 'Muuxannoo fi dandeettii Dr. Noah Williams agarsiisi'] },
      '.doctor-card__arrow': { 'aria-label': ['Dr. Maya Bennett waliin beellama qabadhaa', 'Dr. James Carter waliin beellama qabadhaa', 'Dr. Sofia Reynolds waliin beellama qabadhaa', 'Dr. Noah Williams waliin beellama qabadhaa'] },
      '.booking-form input[name="name"]': { placeholder: 'Fakkeenyaaf: Alex Morgan' },
      '.booking-form input[name="email"]': { placeholder: 'you@example.com' },
      '.booking-form input[name="phone"]': { placeholder: 'Fakkeenyaaf: 0911 234 567', title: 'Lakkoofsa bilbilaa sirrii digitii 7 hanga 15 qabu galchaa.' },
      '.quote-section': { 'aria-label': 'Seenaa dhukkubsattootaa' },
      '.quote-list': { 'aria-label': 'Seenaa dhukkubsattootaa dabalataa dubbisuuf gara cinaatti harkisaa' },
      '.quote-card': { 'aria-label': ['Seenaa dhukkubsataa 1 keessaa 3', 'Seenaa dhukkubsataa 2 keessaa 3', 'Seenaa dhukkubsataa 3 keessaa 3'] },
      '.quote-prev': { 'aria-label': 'Seenaa dhukkubsattootaa duraa' },
      '.quote-next': { 'aria-label': 'Seenaa dhukkubsattootaa itti aanu' },
      '.quote-controls .quote-prev': { 'aria-label': 'Seenaa dhukkubsattootaa duraa' },
      '.quote-controls .quote-next': { 'aria-label': 'Seenaa dhukkubsattootaa itti aanu' },
      '.location-section': { 'aria-label': 'Bakka fi teessoo keenya' },
      '.map-frame iframe': { title: 'Kaartaa Giddugala Yaalaa Aurelia Seattle giddugala jiru agarsiisu' },
      '.appointment-photo img': { alt: 'Kunuunsaan tokko dhukkubsataa harka isaa lamaan qabee jajjabeessaa jira' },
      '.brand--footer': { 'aria-label': 'Gara fuula jalqabaa Giddugala Yaalaa Aurelia' },
      'meta[name="description"]': { content: 'Kunuunsa ogeeyyii fi gara-laafinaan yeroo jireenya keessan hundatti. Ogeessa fayyaa barbaadaa, beellama qabadhaa.' },
    },
  },
};

const originalContent = new Map();
const originalAttributes = new Map();
for (const language of Object.values(translations)) {
  for (const selector of Object.keys(language.nodes)) {
    document.querySelectorAll(selector).forEach((element) => {
      if (!originalContent.has(element)) originalContent.set(element, element.innerHTML);
    });
  }
  for (const [selector, attributes] of Object.entries(language.attributes)) {
    document.querySelectorAll(selector).forEach((element) => {
      for (const name of Object.keys(attributes)) {
        if (!originalAttributes.has(element)) originalAttributes.set(element, new Map());
        const saved = originalAttributes.get(element);
        if (!saved.has(name)) saved.set(name, element.getAttribute(name));
      }
    });
  }
}
originalContent.set(pageTitle, pageTitle.textContent);
originalAttributes.set(pageDescription, new Map([['content', pageDescription.content]]));

function applyLanguage(languageCode) {
  const language = translations[languageCode];
  for (const [element, original] of originalContent) element.innerHTML = original;
  for (const [element, saved] of originalAttributes) {
    for (const [name, value] of saved) {
      if (value === null) element.removeAttribute(name);
      else element.setAttribute(name, value);
    }
  }

  if (language) {
    for (const [selector, values] of Object.entries(language.nodes)) {
      const elements = [...document.querySelectorAll(selector)];
      elements.forEach((element, index) => {
        const value = Array.isArray(values) ? values[index] : values;
        if (value !== undefined) element.innerHTML = value;
      });
    }
    for (const [selector, attributes] of Object.entries(language.attributes)) {
      const elements = [...document.querySelectorAll(selector)];
      for (const [name, values] of Object.entries(attributes)) {
        elements.forEach((element, index) => {
          const value = Array.isArray(values) ? values[index] : values;
          if (value !== undefined) element.setAttribute(name, value);
        });
      }
    }
    pageTitle.textContent = language.title;
    pageDescription.content = language.description;
  }

  document.documentElement.lang = languageCode;
  languageCurrent.textContent = language?.short || 'EN';
  for (const option of languageMenu.querySelectorAll('[data-language]')) {
    option.setAttribute('aria-pressed', String(option.dataset.language === languageCode));
  }
  const labels = getNavigationLabels(languageCode);
  languageToggle.setAttribute('aria-label', labels.choose);
  menuToggle.setAttribute('aria-label', menuToggle.getAttribute('aria-expanded') === 'true' ? labels.close : labels.open);
  document.querySelectorAll('.doctor-profile-toggle').forEach((toggle) => {
    const name = toggle.closest('.doctor-card').querySelector('h3').textContent;
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    const action = languageCode === 'am' ? (isOpen ? 'ደብቅ' : 'አሳይ') : languageCode === 'om' ? (isOpen ? 'Dhoksaa' : 'Agarsiisi') : (isOpen ? 'Hide' : 'Show');
    const details = languageCode === 'am' ? 'ልምድ እና ችሎታ' : languageCode === 'om' ? 'Muuxannoo fi dandeettii' : 'experience and skills';
    toggle.setAttribute('aria-label', `${action} ${name} ${details}`);
  });
  document.querySelector('#booking-form').setAttribute('lang', languageCode);
  try {
    localStorage.setItem('aurelia-language', languageCode);
  } catch (error) {
    console.warn('Could not save the language preference.', error);
  }
}

languageToggle.addEventListener('click', () => {
  const isOpen = languageToggle.getAttribute('aria-expanded') === 'true';
  languageToggle.setAttribute('aria-expanded', String(!isOpen));
  languageMenu.hidden = isOpen;
});

languageMenu.addEventListener('click', (event) => {
  const option = event.target.closest('[data-language]');
  if (!option) return;
  applyLanguage(option.dataset.language);
  languageToggle.setAttribute('aria-expanded', 'false');
  languageMenu.hidden = true;
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-picker')) {
    languageToggle.setAttribute('aria-expanded', 'false');
    languageMenu.hidden = true;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !languageMenu.hidden) {
    languageToggle.setAttribute('aria-expanded', 'false');
    languageMenu.hidden = true;
    languageToggle.focus();
  }
});

try {
  const savedLanguage = localStorage.getItem('aurelia-language');
  if (savedLanguage === 'am' || savedLanguage === 'om') applyLanguage(savedLanguage);
} catch (error) {
  console.warn('Could not restore the saved language preference.', error);
}

const appointmentDate = document.querySelector('#appointment-date');
const localToday = new Date();
appointmentDate.min = [
  localToday.getFullYear(),
  String(localToday.getMonth() + 1).padStart(2, '0'),
  String(localToday.getDate()).padStart(2, '0'),
].join('-');

const bookingForm = document.querySelector('#booking-form');
const phoneInput = bookingForm.elements.phone;
const validatePhone = () => {
  const phone = phoneInput.value.trim();
  const digitCount = phone.replace(/\D/g, '').length;
  const validCharacters = /^[+\d()\s-]+$/.test(phone);
  const validationMessage = document.documentElement.lang === 'am'
    ? 'ትክክለኛ የስልክ ቁጥር ከ7 እስከ 15 አሃዞች ያስገቡ።'
    : document.documentElement.lang === 'om'
      ? 'Lakkoofsa bilbilaa sirrii digitii 7 hanga 15 qabu galchaa.'
      : 'Enter a valid phone number with 7 to 15 digits.';

  phoneInput.setCustomValidity(
    phone && (!validCharacters || digitCount < 7 || digitCount > 15)
      ? validationMessage
      : '',
  );
};
phoneInput.addEventListener('input', validatePhone);

const specialtySelect = document.querySelector('#specialty-select');
document.querySelectorAll('.specialty-card').forEach((card) => {
  card.addEventListener('click', () => {
    specialtySelect.value = card.dataset.specialty;
  });
});

document.querySelectorAll('.doctor-card__arrow').forEach((link) => {
  link.addEventListener('click', () => {
    specialtySelect.value = link.closest('.doctor-card').dataset.specialty;
  });
});

document.querySelectorAll('.doctor-profile-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const photo = toggle.closest('.doctor-card__photo');
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.doctor-profile-toggle[aria-expanded="true"]').forEach((openToggle) => {
      if (openToggle === toggle) return;
      openToggle.setAttribute('aria-expanded', 'false');
      const languageCode = document.documentElement.lang;
      const action = languageCode === 'am' ? 'አሳይ' : languageCode === 'om' ? 'Agarsiisi' : 'Show';
      const details = languageCode === 'am' ? 'ልምድ እና ችሎታ' : languageCode === 'om' ? 'Muuxannoo fi dandeettii' : "experience and skills";
      openToggle.setAttribute('aria-label', `${action} ${openToggle.closest('.doctor-card').querySelector('h3').textContent} ${details}`);
      openToggle.querySelector('.doctor-profile-hint span').textContent = '＋';
      openToggle.closest('.doctor-card__photo').classList.remove('is-profile-open');
      document.getElementById(openToggle.getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');
    });

    const doctorName = toggle.closest('.doctor-card').querySelector('h3').textContent;
    const profile = document.getElementById(toggle.getAttribute('aria-controls'));
    toggle.setAttribute('aria-expanded', String(!isOpen));
    const languageCode = document.documentElement.lang;
    const action = languageCode === 'am' ? (isOpen ? 'አሳይ' : 'ደብቅ') : languageCode === 'om' ? (isOpen ? 'Agarsiisi' : 'Dhoksaa') : (isOpen ? 'Show' : 'Hide');
    const details = languageCode === 'am' ? 'ልምድ እና ችሎታ' : languageCode === 'om' ? 'Muuxannoo fi dandeettii' : "experience and skills";
    toggle.setAttribute('aria-label', `${action} ${doctorName} ${details}`);
    toggle.querySelector('.doctor-profile-hint span').textContent = isOpen ? '＋' : '−';
    photo.classList.toggle('is-profile-open', !isOpen);
    profile.setAttribute('aria-hidden', String(isOpen));
  });
});

const doctorList = document.querySelector('.doctor-list');

function connectCarousel(track, itemSelector, previousButton, nextButton, currentLabel, totalLabel) {
  const items = [...track.querySelectorAll(itemSelector)];
  let currentIndex = 0;
  let updateFrame = 0;
  totalLabel.textContent = String(items.length).padStart(2, '0');

  const updateControls = () => {
    const itemWidth = items[0].getBoundingClientRect().width;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = itemWidth + gap;
    currentIndex = Math.min(items.length - 1, Math.max(0, Math.round(track.scrollLeft / step)));
    currentLabel.textContent = String(currentIndex + 1).padStart(2, '0');
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === items.length - 1;
  };

  const scrollByItem = (direction) => {
    const itemWidth = items[0].getBoundingClientRect().width;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (itemWidth + gap), behavior: 'smooth' });
  };

  previousButton.addEventListener('click', () => scrollByItem(-1));
  nextButton.addEventListener('click', () => scrollByItem(1));
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(updateFrame);
    updateFrame = requestAnimationFrame(updateControls);
  }, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
}

connectCarousel(
  doctorList,
  '.doctor-card',
  document.querySelector('.doctor-prev'),
  document.querySelector('.doctor-next'),
  document.querySelector('.doctor-count__current'),
  document.querySelector('.doctor-count__total'),
);

connectCarousel(
  document.querySelector('.quote-list'),
  '.quote-card',
  document.querySelector('.quote-prev'),
  document.querySelector('.quote-next'),
  document.querySelector('.quote-count__current'),
  document.querySelector('.quote-count__total'),
);

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const counters = document.querySelectorAll('[data-count]');
if ('IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.count);
      const start = performance.now();
      const duration = 1100;
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        counter.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.unobserve(counter);
    });
  }, { threshold: 0.7 });
  counters.forEach((counter) => countObserver.observe(counter));
} else {
  counters.forEach((counter) => { counter.textContent = counter.dataset.count; });
}

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  validatePhone();
  if (!form.reportValidity()) return;

  const booking = new FormData(form);
  const name = booking.get('name').trim();
  const languageCode = document.documentElement.lang;
  const selectedSpecialty = specialtySelect.selectedOptions[0].textContent;
  const fieldLabels = languageCode === 'am'
    ? ['የቀጠሮ ጥያቄ — አውሬሊያ የሕክምና ማዕከል', 'ስም', 'ስልክ', 'ኢሜይል', 'አገልግሎት', 'የሚመርጡት ቀን']
    : languageCode === 'om'
      ? ['Gaaffii beellamaa — Giddugala Yaalaa Aurelia', 'Maqaa', 'Bilbila', 'Imeelii', 'Tajaajila', 'Guyyaa filatame']
      : ['Appointment request — Aurelia Medical Center', 'Name', 'Phone', 'Email', 'Specialty', 'Preferred date'];
  const whatsappText = [
    fieldLabels[0],
    `${fieldLabels[1]}: ${name}`,
    `${fieldLabels[2]}: ${booking.get('phone').trim()}`,
    `${fieldLabels[3]}: ${booking.get('email').trim()}`,
    `${fieldLabels[4]}: ${selectedSpecialty}`,
    `${fieldLabels[5]}: ${booking.get('date')}`,
  ].join('\n');
  const whatsappLink = document.querySelector('#whatsapp-booking-link');
  const telegramLink = document.querySelector('#telegram-booking-link');
  whatsappLink.href = `https://wa.me/251900368205?${new URLSearchParams({ text: whatsappText })}`;
  telegramLink.href = `https://t.me/jabarbar?${new URLSearchParams({ text: whatsappText })}`;
  document.querySelector('#booking-channels').hidden = false;
  const message = document.querySelector('#form-message');
  message.textContent = languageCode === 'am'
    ? `እናመሰግናለን፣ ${name}። የቀጠሮ ጥያቄዎን ለመመልከት WhatsApp ወይም Telegram ይምረጡ። በቻቱ ውስጥ ዝግጁ ይሆናል፤ ለመላክ Send ይጫኑ።`
    : languageCode === 'om'
      ? `Galatoomaa, ${name}. Gaaffii beellama keessan ilaaluuf WhatsApp ykn Telegram filadhaa. Ergaa erguuf chaatii keessatti Send tuqaa.`
      : `Thanks, ${name}. Choose WhatsApp or Telegram to review your appointment request. The details will be ready in the chat; tap Send there to submit your request.`;
  message.classList.add('is-visible');
  form.querySelector('.booking-submit').setAttribute('aria-describedby', 'form-message');
});