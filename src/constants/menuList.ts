import { IMenuItem } from "@/components/MenuItem/MenuItem";

export const appetizerList: IMenuItem[] = [
  {
    name: "БРУСКЕТТА З ТОМАТАМИ",
    weight: "150",
    price: "170",
  },
  {
    name: "СИРНА ТАРІЛКА",
    weight: "220",
    price: "340",
  },
  {
    name: "ПАТЕ З КУРЯЧОЇ ПЕЧІНКИ",
    weight: "200/50",
    price: "260",
  },
  {
    name: "ВІТЕЛЛО ТОНАТО",
    weight: "200",
    price: "280",
  },
  {
    name: "САЛО ФІРМОВЕ З ГРІНКАМИ",
    weight: "100/30/50",
    price: "190",
  },
  {
    name: "РУЛЕТИКИ З ЛОСОСЯ З ЧЕРВОНОЮ ІКРОЮ",
    weight: "150",
    price: "390",
  },
  {
    name: "ЗАКУСКА З ОСЕЛЕДЦЯ ТА КАРТОПЛІ",
    weight: "350",
    price: "220",
  },
  {
    name: "ОВОЧЕВА ТАРІЛКА",
    // description: 'спілі томати,огірки та свіжа зелень з цибулею',
    weight: "300",
    price: "270",
  },
  {
    name: "СОЛІННЯ ДО СТОЛУ",
    // description: 'квашені томати та огірки, крижавка та слива',
    weight: "350",
    price: "260",
  },
  {
    name: "СЛИВИ МАРИНОВАНІ",
    weight: "150",
    price: "130",
  },
  // {
  //   name: "ПАШТЕТ З ОЖИНОВИМ СОУСОМ",
  //   weight: "200/50",
  //   price: "245",
  // },
  // {
  //   name: 'ТАР ТАР З ЛОСОСЯ З ЛИМОННОЮ ЗАПРАВКОЮ',
  //   weight: '150',
  //   price: '360'
  // },
  // {
  //   name: 'СКИБКИ СЛАБОСОЛЕНОГО ЛОСОСЯ ІЗ ПРИПРАВЛЕНИМ ВЕРШКОВИМ МАСЛОМ',
  //   weight: '100/50',
  //   price: '340'
  // },
  // {
  //   name: 'СИРНЕ ПЛАТО',
  //   description:
  //     'грісіні, камамбер, пармезан, ементаль та дор блю з медом-чілі',
  //   weight: '160/30/30',
  //   price: '325'
  // },
  // {
  //   name: 'ПАШТЕТ ПЕЧІНКОВИЙ КАРАМЕЛІЗОВАНИЙ В ПОЄДНАННІ З ЯГІДНИМ МУСОМ',
  //   weight: '100/50/50',
  //   price: '200'
  // },
  // {
  //   name: 'ДУЕТ БРУСКЕТ НА БРІОШІ',
  //   weight: '',
  //   price: '220'
  // },
  // {
  //   name: 'РОЛИ З БАКЛАЖАНУ З ГОРІХОВО - СИРНОЮ ЗАПРАВКОЮ',
  //   weight: '150',
  //   price: '240'
  // },
];

export const saladsList: IMenuItem[] = [
  {
    name: "ГРЕЦЬКИЙ З МІКСОМ ЗЕЛЕНІ",
    weight: "250",
    price: "240",
  },
  {
    name: "«CОНЯХ» З КАПУСТИ",
    weight: "200",
    price: "180",
  },
  {
    name: "МІЗЕРІЯ",
    weight: "250",
    price: "190",
  },
  {
    name: "ТЕПЛИЙ З ТЕЛЯТИНОЮ, ОВОЧАМИ ТА СТЕБЛОМ СЕЛЕРИ",
    weight: "350",
    price: "320",
  },
  {
    name: "ЦЕЗАР",
    variants: [
      { name: "- З КУРКОЮ", weight: "250", price: "280" },
      { name: "- З ЛОСОСЕМ", weight: "250", price: "320" },
      { name: "- З КРЕВЕТКАМИ", weight: "200", price: "360" },
    ],
  },
  // {
  //   name: 'САЛАТ «CЛОВЯНСЬКИЙ»',
  //   weight: '200',
  //   price: '180'
  // },
  // {
  //   name: 'ЗЕЛЕНИЙ САЛАТ З БРОКОЛІ ТА СТРУЧКОВОЇ КВАСОЛІ З ГРЕЦЬКИМ ЙОГУРТОМ',
  //   weight: '350',
  //   price: '220'
  // }
];

export const hotAppetizerList: IMenuItem[] = [
  {
    name: "СИРНІ КУЛЬКИ",
    weight: "150",
    price: "180",
  },
  {
    name: "СУЛУГУНІ В ЛИСТКОВОМУ ТІСТІ",
    weight: "150",
    price: "180",
  },
  {
    name: "КРЕВЕТКИ В ЧАСНИКОВОМУ СОУСІ",
    weight: "200",
    price: "380",
  },
  {
    name: "ШТРУДЕЛЬ З ЛОСОСЕМ ТА ШПИНАТОМ",
    weight: "220",
    price: "270",
  },
  {
    name: "БАНОШ ЗІ ШКВАРКАМИ ТА ПЕЧЕРИЦЯМИ",
    weight: "300",
    price: "250",
  },
  {
    name: "СПАГЕТТІ КАРБОНАРА З ДОМАШНІМ ШПОНДЕРОМ",
    weight: "340",
    price: "280",
  },
  //   {
  //     name: 'КАМАМБЕР ГРИЛЬ НА БРІОШІ З ЯГІДНИМ СОУСОМ',
  //     weight: '120/30/30',
  //     price: '190'
  //   },
  //   {
  //     name: 'КРЕВЕТКИ В КИСЛОСОЛОДКОМУ СОУСІ',
  //     weight: '200',
  //     price: '260'
  //   },
  //   {
  //     name: 'М’ЯСО МІДІЙ ЗАПЕЧЕНІ ЗІ ШПИНАТОМ ТА СИРОМ ДОР БЛЮ',
  //     weight: '280',
  //     price: '260'
  //   }
];

export const soupsList = [
  {
    name: "БОРЩ ФІРМОВИЙ З ЦИБУЛЕВИМ ПИРОГОМ",
    weight: "350",
    price: "180",
  },
  {
    name: "БОГРАЧ",
    weight: "350",
    price: "190",
  },
  {
    name: "ЮШКА ГРИБНА З РИСОВОЮ ВЕРМІШЕЛЛЮ",
    weight: "300",
    price: "180",
  },
];

export const mainDishesList = [
  {
    name: "ТОМЛЕНА ТЕЛЯТИНА З КАРТОПЛЯНИМ ПЮРЕ",
    weight: "370",
    price: "390",
  },
  {
    name: 'ВИРІЗКА З ТЕЛЯТИНИ ПІД МИГДАЛЕВО-ВЕРШКОВИМ СОУСОМ',
    weight: '250',
    price: '380'
  },
  // {
  //   name: 'СВИННА ВИРІЗКА ІЗ ЗАПЕЧЕНОЮ КАРТОПЛЕЮ ТА СОУСОМ ДЕМІГЛАС',
  //   weight: '380',
  //   price: '340'
  // },
  {
    name: "НІЖНЕ КУРЯЧЕ ФІЛЕ ПІД СОУСОМ З ОВОЧАМИ",
    weight: "300",
    price: "280",
  },
  // {
  //   name: 'СТЕЙК З КУРКИ З ОВОЧАМИ У ВЕРШКОВОМУ СОУСІ',
  //   weight: '350',
  //   price: '290'
  // },
  {
    name: "ФІЛЕ ЛОСОСЯ ПІД ІКОРНИМ СОУСОМ З ОВОЧАМИ",
    weight: "300",
    price: "460",
  },
  {
    name: 'ФІЛЕ ДОРАДО З КАБАЧКОВОЮ ПАСТОЮ',
    weight: '300',
    price: '360'
  }
];

export const sideDishesList = [
  {
    name: "КАРТОПЛЯ ЗАПЕЧЕНА",
    weight: "150",
    price: "120",
  },
  {
    name: "КАРТОПЛЯ ФРІ З СОУСОМ",
    weight: "150/50",
    price: "150",
  },
  {
    name: "КАРТОПЛЯ СМАЖЕНА З ЦИБУЛЬКОЮ",
    weight: "200",
    price: "160",
  },
  {
    name: "КВАСОЛЯ СТРУЧКОВА З КУНЖУТОМ",
    weight: "200",
    price: "160",
  },
  {
    name: "СПАРЖА",
    weight: "150",
    price: "160",
  },
  // {
  //   name: "КУСКУС З ОВОЧАМИ",
  //   weight: "150",
  //   price: "120",
  // },
  // {
  //   name: 'ОВОЧІ ГРИЛЬ',
  //   weight: '250',
  //   price: '225'
  // },
  // {
  //   name: 'ПОЛЕНТА З ПАРМЕЗАНОМ',
  //   weight: '200/30',
  //   price: '140'
  // },
];

export const pastaList = [
  {
    name: "КАРБОНАРА З ДОМАШНІМ ШПОНДЕРОМ",
    weight: "340",
    price: "260",
  },
  // {
  //   name: 'ПАСТА З ЛОСОСЕМ',
  //   weight: '300',
  //   price: '320'
  // },
  // {
  //   name: 'ФЕТУЧІНІ З КУРКОЮ ТА ОВОЧАМИ',
  //   weight: '350',
  //   price: '260'
  // }
];

export const dessertsList = [
  {
    name: "НАПОЛЕОН",
    weight: "150",
    price: "180",
  },
  {
    name: "ШТРУДЕЛЬ ВИШНЕВИЙ З МОРОЗИВОМ",
    weight: "150/50",
    price: "190",
  },
  {
    name: "ПРОФІТРОЛІ З ВЕРШКАМИ ТА ЧОРНОСЛИВОМ",
    weight: "150",
    price: "150",
  },
  {
    name: "СИРНИКИ З ЯГІДНИМ СОУСОМ",
    weight: "150/50",
    price: "160",
  },
  {
    name: "МЛИНЦІ З МЕДОМ",
    weight: "100/30",
    price: "140",
  },
  {
    name: "ВАРЕНИКИ З ВИШНЕЮ ТА СМЕТАНОЮ",
    weight: "200",
    price: "190",
  },
  {
    name: "МОРОЗИВО ПЛОМБІР",
    weight: "100",
    price: "120",
  },
  {
    name: "СОРБЕТ ЛАЙМОВИЙ",
    weight: "50",
    price: "70",
  },
  // {
  //   name: 'НАЛИСНИК–ТОРБИНКА З СИРНИМ МУСОМ ТА КАРАМЕЛЛЮ',
  //   weight: '200',
  //   price: '140'
  // },
  // {
  //   name: 'НАЛИСНИКИ З ПРЯНИМИ ЯБЛУКАМИ',
  //   weight: '250',
  //   price: '160'
  // },
  // {
  //   name: 'ТОМЛЕНІ ЛІСОВІ ЯГОДИ 2 З ВАНІЛЬНИМ МОРОЗИВОМ',
  //   weight: '200/50',
  //   price: '180'
  // },
  // {
  //   name: 'ДОДАТКИ ДО МОРОЗИВA: ШОКОЛАД, КАРАМЕЛЬ, ГОРІХИ',
  //   price: '30'
  // },
  // {
  //   name: 'ВЕРШКИ З ЧОРНОСЛИВОМ',
  //   weight: '150',
  //   price: '140'
  // }
];

export const forKidsList = [
  {
    name: "БУЛЬЙОН З КУРОЧКИ",
    weight: "250",
    price: "120",
  },
  {
    name: "НАГЕТСИ КУРЯЧІ З КАРТОПЛЕЮ ФРІ",
    weight: "150/150",
    price: "220",
  },
  {
    name: "ПЕЛЬМЕНІ З ТЕЛЯТИНОЮ КОЛЬОРОВІ",
    weight: "250",
    price: "180",
  },
];

export const hotDrinksList = [
  { type: "КАВА:" },
  {
    name: "ЕСПРЕССО",
    price: "65",
  },
  {
    name: "ЕСПРЕССО ТОНІК",
    price: "120",
  },
  {
    name: "АМЕРИКАНО",
    price: "65",
  },
  {
    name: "АМЕРИКАНО З МОЛОКОМ",
    price: "80",
  },
  {
    name: "КАПУОРАНДЖ",
    price: "195",
  },
  {
    name: "КАВА ПО-ІРЛАНДСЬКИ (з віскі)",
    price: "150",
  },
  {
    name: "КАПУЧІНО",
    price: "90",
  },
  {
    name: "КАПУЧІНО на рослинному молоці",
    price: "100",
  },
  {
    name: "ЛАТЕ",
    price: "95",
  },
  {
    name: "ФЛЕТ-ВАЙТ",
    price: "145",
  },
  {
    name: "КАКАО АВТОРСЬКЕ",
    price: "140",
  },
  { type: "ЧАЙ:" },
  {
    name: "RONNEFELDT",
    weight: "500",
    price: "90",
  },
  {
    name: "ОБЛІПИХОВИЙ",
    weight: "500",
    price: "100",
  },
  {
    name: "ІМБИРНО-ЦИТРУСОВИЙ",
    weight: "500",
    price: "100",
  },
  {
    name: "ЯГІДНИЙ",
    weight: "500",
    price: "100",
  },
];

export const mangalMenuList = [
  { type: "М’ЯСО" },
  {
    name: "ШАШЛИК",
    variants: [
      { name: "- З СВИННОГО ОШИЙКА", weight: "100", price: "140" },
      { name: "- З ТЕЛЯТИНИ", weight: "100", price: "170" },
      { name: "- З КУРЯЧОГО ФІЛЕ", weight: "100", price: "110" },
      { name: "- З КУРЯЧОГО СТЕГНА", weight: "100", price: "100" },
      // { name: '- СВИННА ВИРІЗКА', weight: '100', price: '120' },
      // { name: '- РЕБРА СВИННІ', weight: '100', price: '95' }
    ],
  },
  {
    name: "ЧАЛАГАЧ З АДЖИКОЮ",
    weight: "100",
    price: "150",
  },
  { type: "РИБА" },
  {
    name: "ФОРЕЛЬ НА МАНГАЛІ З ЛИМОНОМ",
    weight: "100",
    price: "160",
  },
  {
    name: "ДОРАДО",
    weight: "100",
    price: "190",
  },
  { name: "ОВОЧІ З МАНГАЛУ", weight: "250", price: "225" },
  // {
  //   name: 'ДОРАДО НА МАНГАЛІ З РОЗМАРИНОМ',
  //   weight: '100',
  //   price: '150'
  // },
  // {
  //   name: 'ФІЛЕ ЛОСОСЯ З МАНГАЛУ',
  //   weight: '100',
  //   price: '180'
  // },
  { type: "СОУСИ" },
  { name: "BBQ, АДЖИКА, САЦЕБЕЛІ, ТАРТАР", weight: "50", price: "60" },
  // { name: 'СВІЖОСПЕЧЕНА ЧІАБАТТА', price: '60' }
];

export const nonAlcoholDrinksList = [
  {
    name: "ПЕПСІ, КОКА КОЛА скло",
    weight: "250",
    price: "50",
  },
  {
    name: "ФАНТА",
    weight: "330",
    price: "50",
  },
  {
    name: "СПРАЙТ",
    weight: "330",
    price: "50",
  },
  {
    name: "МОРШИНСЬКА С/ГАЗ",
    weight: "330",
    price: "60",
  },
  { name: "МОРШИНСЬКА Н/ГАЗ", weight: "330", price: "60" },
  {
    name: "БОРЖОМІ",
    weight: "500",
    price: "120",
  },
  {
    name: "ПОЛЯНА КВАСОВА",
    weight: "500",
    price: "70",
  },
  {
    name: "СІК В АСОРТИМЕНТІ",
    weight: "250",
    price: "35",
  },
  {
    name: "УЗВАР",
    weight: "250",
    price: "35",
  },
  {
    name: "ЛИМОНАД",
    weight: "250",
    price: "45",
  },
  {
    name: 'КАМБУЧА КРАФТОВА',
    weight: '250',
    price: '90',
  },
  { type: "Cвіжі соки" },
  { name: "МОРКВЯНИЙ", weight: "200", price: "90" },
  { name: "ЯБЛУЧНИЙ", weight: "200", price: "90" },
  { name: "АПЕЛЬСИНОВИЙ", weight: "200", price: "130" },
  { name: "ГРЕЙПФРУТОВИЙ", weight: "200", price: "140" },
  { type: "Молочні коктейлі" },
  { name: "КЛАСИЧНИЙ", weight: "300", price: "90" },
  { name: "БАНАНОВИЙ", weight: "300", price: "110" },
  { name: "ШОКОЛАДНИЙ", weight: "300", price: "110" },
];

export const strongAlcoholList = [
  { type: "ГОРІЛКА" },
  { name: "ПЕРЛОВА", weight: "50", price: "40" },
  { name: "КОЗАЦЬКА РАДА", weight: "50", price: "40" },
  { name: "ФІНЛЯНДІЯ", weight: "50", price: "70" },
  { name: "ФІНЛЯНДІЯ ЖУРАВЛИНА", weight: "50", price: "70" },
  { name: "ГРЕЙ ГУЗ", weight: "50", price: "110" },
  { type: "ВІСКІ" },
  { name: "ДЖЕЙМСОН", weight: "50", price: "120" },
  { name: "ДЖЕК ДЕНІАЛС", weight: "50", price: "130" },
  { name: "ДЖЕК ДЕНІАЛС МЕДОВИЙ", weight: "50", price: "140" },
  { name: "ГЛЕНМОРАНЖИ", weight: "50", price: "290" },
  // { name: 'БУЛЕТ БУРБОН', weight: '50', price: '160' },
  { type: "КОНЬЯК" },
  { name: "МАРТЕЛЬ VS", weight: "50", price: "215" },
  { name: "ХЕНЕССІ VSOP", weight: "50", price: "390" },
  { type: "ТЕКІЛА" },
  // { name: 'ЕСПОЛОН БІЛА', weight: '50', price: '95' },
  // { name: 'ЕСПОЛОН ЗОЛОТА', weight: '50', price: '105' },
  { name: "ОЛЬМЕКА", weight: "50", price: "95" },
  { type: "РОМ" },
  {
    name: "КАПІТАН МОРГАН",
    variants: [
      { name: "  БІЛИЙ", weight: "50", price: "75" },
      { name: "  ЧОРНИЙ", weight: "50", price: "75" },
      { name: "  ЗОЛОТИЙ", weight: "50", price: "75" },
    ],
  },
  { type: "БРЕНДІ" },
  { name: "МЕТАКСА 5*", weight: "50", price: "90" },
  { name: "ЗАКАРПАТСЬКИЙ", weight: "50", price: "65" },
  { name: "СТ КАХЕТІ 3*", weight: "50", price: "70" },
  { type: "ЛІКЕР" },
  { name: "ЛІМОНЧЕЛЛО", weight: "50", price: "45" },
  { name: "БЕЙЛІС", weight: "50", price: "90" },
  { type: "ГІРКІ НАСТОЯНКИ" },
  { name: "БЕХЕРІВКА", weight: "50", price: "70" },
  { name: "ЄГЕРМАЙСТЕР", weight: "50", price: "90" },
  { name: "САМБУКА", weight: "50", price: "90" },
  { name: "АПЕРОЛЬ", weight: "50", price: "85" },
  { type: "ДЖИН" },
  { name: "БІФІТЕР", weight: "50", price: "85" },
  { type: "ВЕРМУТ" },
  { name: "МАРТІНІ Б’ЯНКО", weight: "50", price: "45" },
  { name: "МАРТІНІ РОССО", weight: "50", price: "45" },
  {
    name: "* Відкоркування пляшки власного алкоголю об’ємом до 1л вартує 400 грн.",
  },
];

export const winesList = [
  { type: "ШАМПАНСЬКЕ" },
  { name: "ТЕТЕНЖЕ", weight: "750", price: "3800" },
  { type: "ІГРИСТІ" },
  { name: "ПРОСЕККО ЕКСТРА ДРАЙ", weight: "150", price: "170" },
  { name: "МАРТІНІ АСТІ", weight: "750", price: "790" },
  { name: "ЛАМБРУСКО БІЛЕ/РОЖЕВЕ", weight: "750", price: "450" },
  { type: "ВИНО" },
  { country: "ІТАЛІЯ" },
  { name: "КУРНІ", weight: "750", price: "6900" },
  { name: "ГАВІ ДІ ГАВІ", weight: "750", price: "2100" },
  { name: "КЯНТІ КЛАСІКО", weight: "150", price: "150" },
  { name: "ПІНО ГРІДЖІО", weight: "150", price: "130" },
  { country: "УКРАЇНА" },
  { name: "РИСЛІНГ", weight: "150", price: "145" },
  { name: "КАБАРНЕ СОВІНЬЙОН", weight: "150", price: "110" },
  // { name: 'МЕРЛО', weight: '150', price: '105' },
  // { name: 'ШАРДОНЕ', weight: '150', price: '105' },
  { country: "ФРАНЦІЯ" },
  // { name: 'БОРДО', weight: '150', price: '220' },
  // { name: 'ШАБЛІ', weight: '150', price: '330' },
  // { name: 'РОЗЕ ДЕ АНЖУ', weight: '150', price: '110' },
  { name: "ШАРДОНЕ", weight: "150", price: "150" },
  { name: "АНТРЕКОТ МЕРЛО", weight: "150", price: "145" },
  { country: "ІСПАНІЯ" },
  { name: "ВЕРДЕХО", weight: "150", price: "110" },
  { name: "ТЕМПРАНІЛЬЙО", weight: "150", price: "110" },
  { country: "НОВА ЗЕЛАНДІЯ" },
  { name: "СОВІНЬЙОН БЛАН", weight: "150", price: "185" },
  { country: "АРГЕНТИНА" },
  { name: "ВІОНЬЄ ТОРОНТЕС", weight: "150", price: "150" },
  { name: "ШИРАЗ МАЛЬБЕК", weight: "150", price: "150" },
  { country: "ПОРТУГАЛІЯ" },
  { name: "МАТЕУШ РОЗЕ", weight: "150", price: "140" },
  { country: "СОЛОДКІ ВИНА" },
  { name: "ЛЕЙТ ХАРВЕСТ", weight: "50", price: "50" },
  { name: "ПОРТУ", weight: "50", price: "65" },
  { country: "БЕЗАЛКОГОЛЬНІ ВИНА" },
  { name: "РИСЛІНГ", weight: "150", price: "150" },

  // { country: 'ГРУЗІЯ' },
  // { name: 'АЛАЗАНСЬКА ДОЛИНА ЧЕРВОНЕ', weight: '150', price: '90' },
  // { name: 'АЛАЗАНСЬКА ДОЛИНА БІЛЕ', weight: '150', price: '90' },
  {
    name: "* Відкоркування пляшки власного алкоголю об’ємом до 1л вартує 400 грн.",
  },
];

export const beerList = [
  { name: "МИКУЛИНЕЦЬКЕ РОЗЛИВНЕ", weight: "400", price: "80" },
  { type: "ПЛЯШКОВЕ:" },
  { name: "КРОНЕНСБУРГ БЛАНШ", weight: "500", price: "100" },
  { name: "ХУГАРДЕН", weight: "330", price: "120" },
  { name: "ЛЕФФЕ БРУНЕ", weight: "330", price: "120" },
  { type: "БЕЗАЛКОГОЛЬНЕ:" },
  { name: "КАРЛСБЕРГ", price: "85" },
  { type: "ДОШКА ПИВНА:" },
  {
    name: "бастурма, суджук, косичка, кабаноси, грисіні",
    weight: "150",
    price: "250",
  },
];

export const cocktailsList = [
  { type: "КОКТЕЙЛІ" },
  { name: "МОХІТО (КЛАСИЧНИЙ/ПОЛУНИЧНИЙ)", weight: "250", price: "140" },
  { name: "МАЙ ТАЙ", weight: "250", price: "185" },
  { name: "СІК ДЖУНГЛІВ", weight: "270", price: "170" },
  { name: "ЛОНГ АЙЛЕНД", weight: "250", price: "185" },
  { name: "АПЕРОЛЬ ШПРІТЗ", weight: "200", price: "190" },
  // { name: "ТАБЛЕРОН", weight: "200", price: "195" },
  { name: "ФРЕНЧ 75", weight: "200", price: "175" },
  { name: "ВІСКІ САУЕР", weight: "110", price: "145" },
  // { name: "ТЕКІЛА САУЕР", weight: "110", price: "145" },
  // { name: "КАМОЛІЯ САУЕР", weight: "110", price: "175" },
  { name: "НЕГРОНІ", weight: "90", price: "189" },
  { name: "ДЖИН ТОНІК КЛАСИЧНИЙ/ЯГІДНИЙ", weight: "200", price: "140" },
  { type: "КОКТЕЙЛІ БЕЗАЛКОГОЛЬНІ" },
  { name: "МОХІТО", weight: "250", price: "110" },
  // { name: "СОЛОДКА ВАТА", weight: "110", price: "95" },
];

export const homePageSectionButtons = [
  { value: 1, name: "Страви", path: "/kitchen", padding: "p-4" },
  { value: 2, name: "Напої", path: "/bar", padding: "p-4" },
];

export const kitchenSectionButtons = [
  { section: "mangal_menu", name: "Мангал меню", path: "/kitchen/mangal_menu" },
  {
    section: "main_dishes",
    name: "Основні страви",
    path: "/kitchen/main_dishes",
  },
  { section: "appetizer", name: "Закуски", path: "/kitchen/appetizer" },
  { section: "salads", name: "Салати", path: "/kitchen/salads" },
  { section: "soups", name: "Супи", path: "/kitchen/soups" },
  {
    section: "hot_appetizer",
    name: "Гарячі закуски",
    path: "/kitchen/hot_appetizer",
  },
  { section: "side_dishes", name: "Гарніри", path: "/kitchen/side_dishes" },
  { section: "desserts", name: "Десерти", path: "/kitchen/desserts" },
  // { section: 'pasta', name: 'Паста', path: '/kitchen/pasta' },
  { section: "for_kids", name: "Для дітей", path: "/kitchen/for_kids" },
];

export const barSectionButtons = [
  { section: "hot_drinks", name: "Гарячі напої", path: "/bar/hot_drinks" },
  {
    section: "strong_alcohol",
    name: "Міцний алкоголь",
    path: "/bar/strong_alcohol",
  },
  { section: "wine", name: "Вино", path: "/bar/wine" },
  { section: "cocktails", name: "Коктейлі", path: "/bar/cocktails" },
  {
    section: "non_alcohol_drinks",
    name: "Напої безалкогольні",
    path: "/bar/non_alcohol_drinks",
  },
  { section: "beer", name: "Пиво", path: "/bar/beer" },
];

export enum KitchenMenuSections {
  Appetizers = "appetizer",
  Salads = "salads",
  Soups = "soups",
  HotAppetizer = "hot_appetizer",
  SideDishes = "side_dishes",
  Desserts = "desserts",
  // Pasta = 'pasta',
  MainDishes = "main_dishes",
  ForKids = "for_kids",
  MangalMenu = "mangal_menu",
}

export enum BarMenuSections {
  HotDrinks = "hot_drinks",
  StrongAlcohol = "strong_alcohol",
  Wine = "wine",
  Cocktails = "cocktails",
  NonAlcoholDrinks = "non_alcohol_drinks",
  Beer = "beer",
}

export const KitchenMenuList = {
  [KitchenMenuSections.Appetizers]: {
    name: "Закуски",
    data: appetizerList,
  },
  [KitchenMenuSections.Salads]: {
    name: "Салати",
    data: saladsList,
  },
  [KitchenMenuSections.Soups]: {
    name: "Супи",
    data: soupsList,
  },
  [KitchenMenuSections.HotAppetizer]: {
    name: "Гарячі закуски",
    data: hotAppetizerList,
  },
  [KitchenMenuSections.SideDishes]: {
    name: "Гарніри",
    data: sideDishesList,
  },
  [KitchenMenuSections.Desserts]: {
    name: "Десерти",
    data: dessertsList,
  },
  // [KitchenMenuSections.Pasta]: {
  //   name: 'Паста',
  //   data: pastaList
  // },
  [KitchenMenuSections.MainDishes]: {
    name: "Основні страви",
    data: mainDishesList,
  },
  [KitchenMenuSections.ForKids]: {
    name: "Для дітей",
    data: forKidsList,
  },
  [KitchenMenuSections.MangalMenu]: {
    name: "Мангал меню",
    data: mangalMenuList,
  },
};

export const BarMenuList = {
  [BarMenuSections.HotDrinks]: {
    name: "Гарячі напої",
    data: hotDrinksList,
  },
  [BarMenuSections.StrongAlcohol]: {
    name: "Міцний алкоголь",
    data: strongAlcoholList,
  },
  [BarMenuSections.Wine]: {
    name: "Вино",
    data: winesList,
  },
  [BarMenuSections.Cocktails]: {
    name: "Коктейлі",
    data: cocktailsList,
  },
  [BarMenuSections.NonAlcoholDrinks]: {
    name: "Напої безалкогольні",
    data: nonAlcoholDrinksList,
  },
  [BarMenuSections.Beer]: {
    name: "Пиво",
    data: beerList,
  },
};
