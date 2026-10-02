import legalNatureHero from '../assets/images/legal_nature_hero_1790247889431.jpg';
import illegalLoggingImg from '../assets/images/illegal_logging_inspection_1790247905867.jpg';
import environmentalPollutionImg from '../assets/images/environmental_pollution_sample_1790247920974.jpg';
import wildlifeRangerImg from '../assets/images/wildlife_protection_ranger_1790247936878.jpg';
import deforestationImg from '../assets/images/deforestation_impact_1790247235786.jpg';
import degradedEcosystemImg from '../assets/images/ecosystem_degraded_state_1790247273734.jpg';

import {
  LegalBasisCard,
  LegalExample,
  LegalSolution,
  LiabilityType,
  PipelineStep,
  WarningConsequence,
  DiscussionDirection,
  QuizQuestion,
} from '../types';

export const IMAGES = {
  hero: legalNatureHero,
  deforestation: deforestationImg,
  illegalLogging: illegalLoggingImg,
  pollutionSample: environmentalPollutionImg,
  wildlifeRanger: wildlifeRangerImg,
  degradedEcosystem: degradedEcosystemImg,
};

export const LEGAL_BASES: LegalBasisCard[] = [
  {
    id: 'basis-1',
    title: 'Konstitutsiyaviy asos',
    category: 'Asosiy qonun kafolatlari',
    description:
      'Davlat barqaror rivojlanish prinsipiga muvofiq, atrof-muhitni yaxshilash, tiklash va muhofaza qilish, ekologik muvozanatni saqlash choralarini ko‘radi. Fuqarolar qulay tabiiy atrof-muhitga ega bo‘lish huquqiga ega bo‘lib, atrof tabiiy muhitga ehtiyotkorona munosabatda bo‘lish har bir fuqaroning majburiyatidir.',
    officialReference: 'O‘zbekiston Respublikasi Konstitutsiyasi (49 va 62-moddalar)',
    keyNorm: 'Ekologik huquqlar va umumiy konstitutsiyaviy majburiyat',
  },
  {
    id: 'basis-2',
    title: 'Atrof-muhitni muhofaza qilish',
    category: 'Umumekologik qonunchilik',
    description:
      'Atrof-muhitni muhofaza qilish, tabiiy boyliklardan oqilona foydalanish hamda jamiyat va tabiat o‘rtasidagi uyg‘un munosabatlarni ta’minlashning davlat tizimi tartibga solinadi. Ekologik talablarni buzganlik uchun huquqiy ta’sir choralari nazarda tutilgan.',
    officialReference: '“Tabiatni muhofaza qilish to‘g‘risida”gi Qonun',
    keyNorm: 'Tabiiy resurslardan oqilona va me’yoriy foydalanish',
  },
  {
    id: 'basis-3',
    title: 'Hayvonot va o‘simlik dunyosini muhofaza qilish',
    category: 'Biologik resurslar qonunchiligi',
    description:
      'Yovvoyi holda o‘suvchi o‘simliklar hamda yovvoyi hayvonlar davlat muhofazasidadir. Ularning tabiiy yashash muhitini buzish, noqonuniy yig‘ish, kesish yoki ovlash qat’iyan taqiqlanadi hamda qonunchilikka binoan javobgarlik choralari qo‘llaniladi.',
    officialReference: '“O‘simliklar dunyosini muhofaza qilish to‘g‘risida” va “Hayvonot dunyosini muhofaza qilish to‘g‘risida”gi Qonunlar',
    keyNorm: 'Flora va faunani noqonuniy nobud qilishdan himoya qilish',
  },
  {
    id: 'basis-4',
    title: 'Tabiiy hududlarni muhofaza qilish',
    category: 'Maxsus muhofaza rejimi',
    description:
      'Davlat qo‘riqxonalari, milliy tabiiy bog‘lar, biosfera rezervatlari va buyurtma qo‘riqxonalar biologik xilma-xillikni asl holida saqlab qolish uchun maxsus huquqiy rejimga ega. Bu zonalarda tabiiy muvozanatga xavf soluvchi har qanday xo‘jalik faoliyati qat’iy cheklanadi yoki taqiqlanadi.',
    officialReference: '“Muhofaza etiladigan tabiiy hududlar to‘g‘risida”gi Qonun',
    keyNorm: 'Daxlsiz tabiiy hududlar va maxsus huquqiy rejim',
  },
];

export const LEGAL_EXAMPLES: LegalExample[] = [
  {
    id: 'ex-1',
    title: 'Daraxtlarni noqonuniy kesish',
    badge: 'Flora muhofazasi',
    situation:
      'Bir shaxs ruxsatsiz ravishda daraxtlarni kesib, hududga zarar yetkazmoqda.',
    legalIssue:
      'Bunday harakat tabiatga zarar yetkazishi va qonunchilikda belgilangan javobgarlikka sabab bo‘lishi mumkin.',
    applicableLaw: 'Daraxt va butalarni kesishga moratoriy hamda atrof-muhitni muhofaza qilish qoidalari',
    consequenceSummary: 'Noqonuniy kesilgan har bir daraxt uchun tabiatga yetkazilgan zarar hisoblanadi va tegishli jazo choralari belgilanadi.',
    image: illegalLoggingImg,
  },
  {
    id: 'ex-2',
    title: 'Noqonuniy ov',
    badge: 'Fauna muhofazasi',
    situation:
      'Shaxs taqiqlangan hududda yoki taqiqlangan usulda yovvoyi hayvonlarni ovlamoqda.',
    legalIssue:
      'Yovvoyi hayvonlarni noqonuniy ovlash biologik xilma-xillikka zarar yetkazadi va tegishli huquqiy javobgarlikni keltirib chiqarishi mumkin.',
    applicableLaw: 'Ov qilish va ovchilik xo‘jaligi to‘g‘risidagi qoidalar hamda «Qizil kitob» normalari',
    consequenceSummary: 'Noyob turlarni ovlash brakonyerlik deb baholanadi, ov qurollari musodara qilinishi va og‘ir huquqiy oqibatlar kelib chiqishi mumkin.',
    image: wildlifeRangerImg,
  },
  {
    id: 'ex-3',
    title: 'Tabiatni ifloslantirish',
    badge: 'Ekotizim xavfsizligi',
    situation:
      'Korxona yoki shaxs chiqindilarni belgilangan talablarga rioya qilmasdan tabiiy hududga tashlamoqda.',
    legalIssue:
      'Atrof-muhitga zarar yetkazilishi qonunchilikda belgilangan choralarni qo‘llashga sabab bo‘lishi mumkin.',
    applicableLaw: 'Chiqindilar to‘g‘risidagi va atmosfera/suv havzalarini muhofaza qilish qonunchiligi',
    consequenceSummary: 'Ifloslantiruvchi sub’yektga majburiy tozalash, zararni qoplash va faoliyatini to‘xtatishgacha bo‘lgan choralar qo‘llanilishi mumkin.',
    image: environmentalPollutionImg,
  },
];

export const LEGAL_SOLUTIONS: LegalSolution[] = [
  {
    number: '01',
    title: 'Qonunlarga rioya qilish',
    description:
      'Fuqarolar va korxonalar tabiatni muhofaza qilish qonun-qoidalariga qat’iy amal qilishi, tabiatdan faqat qonuniy asoslarda foydalanishi lozim.',
    legalMechanism: 'Huquqiy intizom va qonuniylik prinsipi',
  },
  {
    number: '02',
    title: 'Ekologik nazoratni kuchaytirish',
    description:
      'Davlat ekologiya inspeksiyasi hamda jamoatchi ekologik nazoratchilar tomonidan muntazam monitoring va reydlar tashkil etish.',
    legalMechanism: 'Davlat va jamoatchilik ekologik nazorati tizimi',
  },
  {
    number: '03',
    title: 'Noqonuniy ov va daraxt kesishning oldini olish',
    description:
      'Brakonyerlik va noqonuniy daraxt kesish holatlarini erta aniqlash, qat’iy profilaktika o‘tkazish hamda monitoring vositalaridan keng foydalanish.',
    legalMechanism: 'Profilaktika va tezkor chora-tadbirlar',
  },
  {
    number: '04',
    title: 'Muhofaza etiladigan tabiiy hududlarni asrash',
    description:
      'Davlat qo‘riqxonalari va milliy bog‘larning hududiy chegaralarini qat’iy belgilash, ularga noqonuniy bostirib kirishning oldini olish.',
    legalMechanism: 'Alohida muhofaza etiladigan tabiiy hududlar rejimi',
  },
  {
    number: '05',
    title: 'Fuqarolarning ekologik huquqiy madaniyatini oshirish',
    description:
      'Aholi va yoshlar o‘rtasida ekologik qonunchilik mazmunini targ‘ib qilish, qonunbuzarlik uchun javobgarlik muqarrarligini tushuntirish.',
    legalMechanism: 'Ekologik-huquqiy ta’lim va targ‘ibot',
  },
  {
    number: '06',
    title: 'Tabiatga zarar yetkazilganda qonuniy choralar ko‘rish',
    description:
      'Har bir huquqbuzarlik yuzasidan dalillarni qonuniy rasmiylashtirish, aybdorlarni javobgarlikka tortish va tabiatga yetkazilgan zararni to‘liq undirish.',
    legalMechanism: 'Adolat va huquqiy jazo choralari muqarrarligi',
  },
];

export const LIABILITY_TYPES: LiabilityType[] = [
  {
    id: 'admin',
    type: 'Ma’muriy javobgarlik',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/40',
    definition:
      'Qonunchilikda belgilangan ekologik qoidalarni, o‘simlik va hayvonot dunyosidan foydalanish tartibini buzgan shaxslarga nisbatan qo‘llaniladi.',
    scope:
      'Ruxsatsiz daraxt kesish, ov va baliq ovlash qoidalarini buzish, chiqindilarni belgilanmagan joyga to‘kish kabi ma’muriy huquqbuzarliklar.',
    sanctionDescription:
      'Ma’muriy jarimalar qo‘llash, noqonuniy olingan mahsulotlar va huquqbuzarlik qurol-aslahalarini musodara qilish choralari.',
  },
  {
    id: 'civil',
    type: 'Fuqaroviy-huquqiy javobgarlik',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/40',
    definition:
      'Tabiatga yetkazilgan moddiy zararni to‘liq hajmda qoplash majburiyati. Bu jazo emas, balki yetkazilgan ziyonning o‘rnini qoplash vositasidir.',
    scope:
      'Kesilgan daraxtlarni qayta ekish xarajatlari, yo‘q qilingan hayvonot va o‘simlik resurslarini tiklash uchun zarur mablag‘larni qoplash.',
    sanctionDescription:
      'Zarar yetkazuvchi shaxs yoki korxona hisobidan yetkazilgan zararni kompensatsiya qilish hamda tabiatni qayta tiklash majburiyati.',
  },
  {
    id: 'criminal',
    type: 'Jinoiy javobgarlik (ayrim og‘ir hollarda)',
    badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-950/40',
    definition:
      'Tabiatga, o‘simlik yoki hayvonot dunyosiga og‘ir oqibatlar keltirib chiqargan yoki ko‘p miqdorda zarar yetkazgan hollarda qo‘llaniladigan eng qat’iy chora.',
    scope:
      'Qizil kitobga kiritilgan noyob turlarni yo‘q qilish, muhofaza etiladigan hududlarga o‘ta yirik zarar yetkazish, ommaviy brakonyerlik.',
    sanctionDescription:
      'Tergov organlari va sud hukmi bilan belgilanadigan qat’iy jinoiy jazo choralari va ozodlikni cheklash choralari.',
  },
];

export const SCALE_OF_JUSTICE_PIPELINE: PipelineStep[] = [
  {
    stepNumber: 1,
    label: 'Qonunbuzarlik',
    detail: 'Daraxt kesish, noqonuniy ov yoki chiqindi tashlash holati yuz berishi.',
    legalAction: 'Huquqbuzarlik fakti aniqlanadi',
  },
  {
    stepNumber: 2,
    label: 'Zarar',
    detail: 'Biologik xilma-xillik va tabiiy muhitga yetkazilgan real ziyon aniqlanadi.',
    legalAction: 'Mutaxassislar tomonidan ekspertiza o‘tkaziladi',
  },
  {
    stepNumber: 3,
    label: 'Huquqiy baholash',
    detail: 'Harakat qonun normalari bilan solishtirilib, ma’muriy, fuqaroviy yoki jinoiy belgilari baholanadi.',
    legalAction: 'Protokol va dalolatnomalar rasmiylashtiriladi',
  },
  {
    stepNumber: 4,
    label: 'Javobgarlik',
    detail: 'Qonun doirasida vakolatli organlar yoki sud tomonidan adolatli jazo tayinlanadi.',
    legalAction: 'Jarima, yetkazilgan zararni qoplash yoki sud hukmi',
  },
  {
    stepNumber: 5,
    label: 'Zararning oldini olish',
    detail: 'Kelgusida bunday qonunbuzarliklar takrorlanmasligi uchun profilaktika choralari ko‘riladi.',
    legalAction: 'Qonun ustuvorligi va ekologik muvozanat tiklanadi',
  },
];

export const WARNING_CONSEQUENCES: WarningConsequence[] = [
  {
    id: 'w-1',
    title: 'Biologik turlar kamayishi',
    impactArea: 'Genetik boylik',
    description:
      'Qonuniy himoya bo‘lmasa, noyob va zaif hayvon hamda o‘simlik turlari butunlay yo‘qolib, qayta tiklanmaydi.',
  },
  {
    id: 'w-2',
    title: 'Tabiiy yashash joylarining yo‘qolishi',
    impactArea: 'Flora va fauna muhiti',
    description:
      'O‘rmonlar noqonuniy kesilganda va yerlar o‘zboshimchalik bilan egallanganda yovvoyi tabiat panoh topadigan joyidan mahrum bo‘ladi.',
  },
  {
    id: 'w-3',
    title: 'Oziq-ovqat zanjirining buzilishi',
    impactArea: 'Ekotizim zanjiri',
    description:
      'Biror yirtqich yoki o‘txo‘r tur nazoratsiz ovlansa, tabiiy zanjir uzilib, zararkunandalar ko‘payishi kabi falokatlar yuzaga keladi.',
  },
  {
    id: 'w-4',
    title: 'Ekologik muvozanatning buzilishi',
    impactArea: 'Tabiiy barqarorlik',
    description:
      'Iqlim keskinlashadi, suv manbalari qurib qoladi, toza havo va kislorod ishlab chiqaruvchi biosfera poydevori izdan chiqadi.',
  },
  {
    id: 'w-5',
    title: 'Tabiiy resurslarning kamayishi',
    impactArea: 'Iqtisodiy va tabiiy xavfsizlik',
    description:
      'Unumdor yerlar cho‘lga aylanadi, toza ichimlik suvi zaxiralari kamayadi va kelajak uchun tabiiy boyliklar tugaydi.',
  },
  {
    id: 'w-6',
    title: 'Jamiyat va kelajak avlod manfaatlariga zarar',
    impactArea: 'Insoniyat kelajagi',
    description:
      'Qonun ustuvorligi ta’minlanmasa, kelajak avlod sog‘lom yashash muhiti va hayot uchun zarur tabiiy boyliklardan mahrum bo‘ladi.',
  },
];

export const DISCUSSION_TOPICS: DiscussionDirection[] = [
  {
    id: 'disc-1',
    question: 'Qonunlarning ijrosini qanday kuchaytirish mumkin?',
    promptText:
      'Ekologik nazorat organlari faoliyatini raqamlashtirish, dronlar va sun’iy yo‘ldosh orqali monitoring olib borish, reydlar oshkoraligi hamda jazo choralari muqarrarligini ta’minlash.',
    studentKeypoints: [
      'Ekologik patrullarga zamonaviy texnologiyalarni joriy etish',
      'Sud qarorlari va jarimalarning shaffof ijrosi',
      'Jamoatchilik nazoratini kengaytirish',
    ],
  },
  {
    id: 'disc-2',
    question: 'Fuqarolarning huquqiy madaniyatini qanday oshirish mumkin?',
    promptText:
      'Ekologik qonunchilikni maktab dasturlariga chuqurroq kiritish, ommaviy axborot vositalarida huquqiy tushuntirish ishlarini olib borish va tabiatga yetkazilgan zararning oqibatlarini ko‘rsatish.',
    studentKeypoints: [
      'Maktablarda huquqiy-ekologik darslar va viktorinalar',
      'Ijtimoiy tarmoqlarda targ‘ibot roliklari',
      'Tabiatni asrash bo‘yicha ko‘ngillilar harakatini qo‘llab-quvvatlash',
    ],
  },
  {
    id: 'disc-3',
    question: 'Tabiatni muhofaza qilishda yoshlarning roli qanday?',
    promptText:
      'Yoshlar «yashil tashabbuslar» orqali huquqbuzarliklarga befarq bo‘lmaslik, jamoat nazoratchisi sifatida faol bo‘lish va o‘z tengdoshlariga shaxsiy namuna ko‘rsatishlari mumkin.',
    studentKeypoints: [
      'Eko-patrul va daraxt ekish aksiyalarida faol qatnashish',
      'Noqonuniy daraxt kesish holatlarini aniqlaganda vakolatli organlarga xabar berish',
      'Maktab va mahallada huquqiy-ekologik loyihalarni ilgari surish',
    ],
  },
];

export const LAW_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'O‘zbekiston Respublikasi Konstitutsiyasiga muvofiq, atrof-muhitni muhofaza qilish borasida fuqarolarning burchi nimalardan iborat?',
    options: [
      'Faqat o‘z shaxsiy hovlisini toza tutish kifoya',
      'Fuqarolar atrof tabiiy muhitga ehtiyotkorona munosabatda bo‘lishga majburdirlar',
      'Atrof-muhitni faqat davlat ekologiya inspeksiyasi asrashi kerak',
      'Fuqarolar tabiatdan cheklovlarsiz foydalanish huquqiga ega',
    ],
    correctIndex: 1,
    explanation: 'Konstitutsiyaga binoan, atrof tabiiy muhitga ehtiyotkorona munosabatda bo‘lish har bir fuqaroning konstitutsiyaviy burchidir.',
  },
  {
    id: 2,
    question: 'Tabiatga yetkazilgan zarar uchun «Fuqaroviy-huquqiy javobgarlik»ning asosiy maqsadi nima?',
    options: [
      'Faqat shaxsni jamiyatdan ajratib qo‘yish',
      'Yetkazilgan moddiy ziyonni to‘liq qoplash va tabiatni qayta tiklash',
      'Faqat ogohlantirish xati berish',
      'Barcha huquqbuzarlik qurollarini qaytarib berish',
    ],
    correctIndex: 1,
    explanation: 'Fuqaroviy-huquqiy javobgarlik yetkazilgan zararning o‘rnini moddiy jihatdan to‘liq qoplash va zararlangan hududni tiklashga xizmat qiladi.',
  },
  {
    id: 3,
    question: 'Qonunbuzarlik oqibatida javobgarlik choralari qaysi ketma-ketlikda baholanadi?',
    options: [
      'Zarar yo‘q deb hisoblanadi → ish yopiladi',
      'Qonunbuzarlik sodir bo‘ladi → Zarar aniqlanadi → Huquqiy baho beriladi → Javobgarlik qo‘llaniladi',
      'Avval jazo belgilanadi → keyin huquqbuzarlik tekshiriladi',
      'Faqat jarima to‘lansa, qonunbuzarlik hisobga olinmaydi',
    ],
    correctIndex: 1,
    explanation: 'Huquqiy davlatda har bir harakat qonuniy dalolatnoma bilan rasmiylashtiriladi, zarari hisoblanadi va shunga asosan adolatli jazo belgilanadi.',
  },
];
