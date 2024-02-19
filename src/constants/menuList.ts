import { IMenuItem } from '@/components/MenuItem/MenuItem';

export const appetizerList: IMenuItem[] = [
  {
    name: 'ЗАКУСКА З ОСЕЛЕДЦЕМ ТА КАРТОПЛЕЮ І БУРЯКОМ, ЯЙЦЕМ ТА ЦИБУЛЕЮ',
    weight: '350',
    price: '190'
  },
  {
    name: 'ТАР ТАР З ЛОСОСЯ З ЛИМОННОЮ ЗАПРАВКОЮ',
    weight: '150',
    price: '360'
  },
  {
    name: 'СКИБКИ СЛАБОСОЛЕНОГО ЛОСОСЯ ІЗ ПРИПРАВЛЕНИМ ВЕРШКОВИМ МАСЛОМ',
    weight: '100/50',
    price: '340'
  },
  {
    name: 'САЛО СОЛЕНЕ З ГРІНКАМИ ТА ЧАСНИКОМ',
    weight: '100/30/50',
    price: '160'
  },
  {
    name: 'ВІТЕЛО ТОННАТО З КАПЕРСАМИ',
    weight: '100/100',
    price: '240'
  },
  {
    name: 'ПАШТЕТ ПЕЧІНКОВИЙ КАРАМЕЛІЗОВАНИЙ В ПОЄДНАННІ З ЯГІДНИМ МУСОМ',
    weight: '100/50/50',
    price: '200'
  },
  {
    name: 'ДУЕТ БРУСКЕТ НА БРІОШІ',
    weight: '',
    price: '220'
  },
  {
    name: 'РОЛИ З БАКЛАЖАНУ З ГОРІХОВО - СИРНОЮ ЗАПРАВКОЮ',
    weight: '150',
    price: '240'
  },
  {
    name: 'СИРНЕ ПЛАТО',
    description:
      'грісіні, камамбер, пармезан, ементаль та дор блю з медом - чілі',
    weight: '160/30/30',
    price: '290'
  },
  {
    name: 'СОЛІННЯ ДОМАШНЄ',
    description: 'квашені томати та огірки, крижавка та слива',
    weight: '350',
    price: '240'
  },
  {
    name: 'ОВОЧЕВА ТАРІЛКА',
    description: 'спілі томати,огірки та свіжа зелень з цибулею',
    weight: '300',
    price: '220'
  }
];

export const saladsList: IMenuItem[] = [
  {
    name: 'ЦЕЗАР КЛАСИЧНИЙ',
    variants: [
      { name: '- З ШМАТОЧКАМИ КУРКИ', weight: '250', price: '240' },
      { name: '- З СЛАБОСОЛЕНИМ ЛОСОСЕМ', weight: '250', price: '280' },
      { name: '- З КРЕВЕТКОЮ', weight: '200', price: '300' }
    ]
  },
  {
    name: 'САЛАТ З КАПУСТИ ТА НАСІННЯ СОНЯХА',
    weight: '200',
    price: '180'
  },
  {
    name: 'САЛАТ ГРЕЦЬКИЙ З МІКСОМ ЗЕЛЕНІ',
    weight: '250',
    price: '220'
  },
  {
    name: 'САЛАТ ТЕПЛИЙ МЯСНИЙ З ОВОЧАМИ ТА СТЕБЛОМ САЛЕРИ',
    weight: '350',
    price: '260'
  },
  {
    name: 'САЛАТ «CЛОВЯНСЬКИЙ»',
    weight: '200',
    price: '180'
  },
  {
    name: 'ЗЕЛЕНИЙ САЛАТ З БРОКОЛІ ТА СТРУЧКОВОЇ КВАСОЛІ З ГРЕЦЬКИМ ЙОГУРТОМ',
    weight: '350',
    price: '220'
  }
];

export const hotAppetizer: IMenuItem[] = [
  {
    name: 'СИРНІ КУЛЬКИ',
    weight: '150',
    price: '160'
  },
  {
    name: 'СУЛУГУНІ У ЛИСТКОВОМУ ТІСТІ',
    weight: '150',
    price: '160'
  },
  {
    name: 'КАМАМБЕР ГРИЛЬ НА БРІОШІ З ЯГІДНИМ СОУСОМ',
    weight: '120/30/30',
    price: '190'
  },
  {
    name: 'КРЕВЕТКИ В КИСЛОСОЛОДКОМУ СОУСІ',
    weight: '200',
    price: '260'
  },
  {
    name: 'М’ЯСО МІДІЙ ЗАПЕЧЕНІ ЗІ ШПИНАТОМ ТА СИРОМ ДОР БЛЮ',
    weight: '280',
    price: '260'
  }
];

export const soups = [
  {
    name: 'БОГРАЧ',
    weight: '350',
    price: '160'
  },
  {
    name: 'ЮШКА З БІЛИХ ГРИБІВ З РИСОВОЮ ВЕРМІШЕЛЛЮ',
    weight: '300',
    price: '140'
  },
  {
    name: 'БОРЩ ЧЕРВОНИЙ ПОДАЄТЬСЯ З ГРІНКАМИ ТА САЛОМ',
    weight: '350',
    price: '140'
  }
];

export const mainDishes = [
  {
    name: 'ТОМЛЕНА ТЕЛЯТИНА З КАРТОПЛЯНИМ КРЕМОМ ТА ЧЕРІ',
    weight: '370',
    price: '320'
  },
  {
    name: 'СВИННА ВИРІЗКА ІЗ ЗАПЕЧЕНОЮ КАРТОПЛЕЮ ТА СОУСОМ ДЕМІГЛАС',
    weight: '380',
    price: '340'
  },
  {
    name: 'МЕДАЛЬЙОНИ З СВИННОЇ ВИРІЗКИ З СТРУЧКОВОЮ КВАСОЛЕЮ',
    weight: '330',
    price: '360'
  },
  {
    name: 'СТЕЙК З КУРКИ З ОВОЧАМИ У ВЕРШКОВОМУ СОУСІ',
    weight: '350',
    price: '290'
  },
  {
    name: 'ФІЛЕ ЛОСОСЯ ПІД ВЕРШКОВО-ІКОРНИМ СОУСОМ',
    weight: '300',
    price: '360'
  },
  {
    name: 'ФІЛЕ ДОРАДО З КАБАЧКОМ ТА ЧЕРІ',
    weight: '300',
    price: '380'
  }
];

export const sideDishes = [
  {
    name: 'КАРТОПЛЯ ЗАПЕЧЕНА З ЧАСНИКОМ',
    weight: '150',
    price: '110'
  },
  {
    name: 'КАРТОПЛЯ ФРІ + КЕТЧУП',
    weight: '150/50',
    price: '150'
  },
  {
    name: 'ПОЛЕНТА З ПАРМЕЗАНОМ',
    weight: '200/30',
    price: '140'
  },
  {
    name: 'СТРУЧКОВА КВАСОЛЯ В КИСЛОСОЛОДКОМУ СОУСІ З ІМБИРЕМ',
    weight: '200',
    price: '130'
  }
];

export const pasta = [
  {
    name: 'КАРБОНАРА З ДОМАШНІМ ШПОНДЕРОМ',
    weight: '340',
    price: '260'
  },
  {
    name: 'ПАСТА З ЛОСОСЕМ',
    weight: '300',
    price: '320'
  },
  {
    name: 'ФЕТУЧІНІ З КУРКОЮ ТА ОВОЧАМИ',
    weight: '350',
    price: '260'
  }
];

export const desserts = [
  {
    name: 'СИРНИКИ З ЯГІДНИМ СОУСОМ',
    weight: '150/50',
    price: '140'
  },
  {
    name: 'НАЛИСНИК–ТОРБИНКА З СИРНИМ МУСОМ ТА КАРАМЕЛЛЮ',
    weight: '200',
    price: '140'
  },
  {
    name: 'НАЛИСНИКИ З ПРЯНИМИ ЯБЛУКАМИ',
    weight: '250',
    price: '160'
  },
  {
    name: 'ШТРУДЕЛЬ З ВИШНЕЮ З КУЛЬКОЮ МОРОЗИВА',
    weight: '150/50',
    price: '200'
  },
  {
    name: 'ТОМЛЕНІ ЛІСОВІ ЯГОДИ 2 З ВАНІЛЬНИМ МОРОЗИВОМ',
    weight: '200/50',
    price: '180'
  },
  {
    name: 'МОРОЗИВО',
    weight: '100',
    price: '120'
  },
  {
    name: 'ДОДАТКИ ДО МОРОЗИВA: ШОКОЛАД, КАРАМЕЛЬ, ГОРІХИ',
    price: '30'
  },
  {
    name: 'ВЕРШКИ З ЧОРНОСЛИВОМ',
    weight: '150',
    price: '140'
  }
];

export const forKids = [
  {
    name: 'БУЛЬЙОН З МАКАРОНАМИ',
    weight: '200',
    price: '90'
  },
  {
    name: 'НАГЕТСИ З КАРТОПЛЕЮ ФРІ',
    price: '240'
  }
];

export const hotDrinks = [
  { type: 'КАВА:' },
  {
    name: 'ЕСПРЕССО',
    price: '60'
  },
  {
    name: 'АМЕРИКАНО',
    price: '60'
  },
  {
    name: 'АМЕРИКАНО З МОЛОКОМ',
    price: '70'
  },
  {
    name: 'КАВА ПО-ІРЛАНДСЬКИ',
    price: '140'
  },
  {
    name: 'КАПУОРАНЖ (холодна кава)',
    price: '90'
  },
  {
    name: 'КАПУЧІНО',
    price: '80'
  },
  {
    name: 'КАПУЧІНО на рослинному молоці',
    price: '100'
  },
  {
    name: 'ЛАТТЕ',
    price: '90'
  },
  {
    name: 'ФЛЕТ-ВАЙТ',
    price: '140'
  },
  {
    name: 'КАКАО НЕСКВІК',
    price: '60'
  },
  { type: 'ЧАЙ:' },
  {
    name: 'ЗАВАРНИЙ в асортименті',
    weight: '500',
    price: '70'
  },
  {
    name: 'ОБЛІПИХОВИЙ',
    weight: '500',
    price: '90'
  },
  {
    name: 'ІМБИРНО-ЦИТРУСОВИЙ',
    weight: '500',
    price: '90'
  },
  {
    name: 'ЯГІДНИЙ в асортименті',
    weight: '500',
    price: '90'
  }
];

export const mangalMenu = [
  { type: 'М’ЯСО' },
  {
    name: 'ШАШЛИК',
    variants: [
      { name: '- З КУРЯЧОГО ФІЛЕ', weight: '100', price: '80' },
      { name: '- З КУРЯЧОГО СТЕГНА БЕЗ КІСТКИ', weight: '100', price: '80' },
      { name: '- СВИННИЙ ОШИЙОК', weight: '100', price: '110' },
      { name: '- СВИННА ВИРІЗКА', weight: '100', price: '120' },
      { name: '- З ПОЛЯДВИЦІ ТЕЛЯТИНИ', weight: '100', price: '140' },
      { name: '- РЕБРА СВИННІ', weight: '100', price: '95' }
    ]
  },
  { type: 'РИБА' },
  {
    name: 'ФОРЕЛЬ НА МАНГАЛІ З ЛИМОНОМ',
    weight: '100',
    price: '140'
  },
  {
    name: 'ДОРАДО НА МАНГАЛІ З РОЗМАРИНОМ',
    weight: '100',
    price: '150'
  },
  {
    name: 'ФІЛЕ ЛОСОСЯ З МАНГАЛУ',
    weight: '100',
    price: '180'
  },
  { type: 'ОВОЧІ ПЕЧЕНІ НА МАНГАЛІ', weight: '250', price: '120' },
  { type: 'СОУСИ' },
  { name: 'BBQ, АДЖИКА, ТАР-ТАР, СИРНИЙ, САЦЕБЕЛІ', weight: '50', price: '60' },
  { name: 'СВІЖОСПЕЧЕНА ЧІАБАТТА', price: '60' }
];

export const nonAlcoholDrinks = [
  {
    name: 'ПЕПСІКОЛА скло',
    weight: '250',
    price: '50'
  },
  {
    name: 'ФАНТА',
    weight: '330',
    price: '50'
  },
  {
    name: 'СПРАЙТ',
    weight: '330',
    price: '50'
  },
  {
    name: 'МОРШИНСЬКА СГАЗ',
    weight: '330',
    price: '60'
  },
  { name: 'МОРШИНСЬКА НГАЗ', weight: '330', price: '60' },
  {
    name: 'БОРЖОМІ',
    weight: '500',
    price: '110'
  },
  {
    name: 'ПОЛЯНА КВАСОВА',
    weight: '500',
    price: '70'
  },
  {
    name: 'СІК В АСОРТИМЕНТІ',
    weight: '250',
    price: '35'
  },
  {
    name: 'УЗВАР',
    weight: '250',
    price: '30'
  },
  {
    name: 'ЛИМОНАД',
    weight: '250',
    price: '40'
  },
  { type: 'Cвіжі соки' },
  { name: 'МОРКВЯНИЙ', weight: '200', price: '80' },
  { name: 'ЯБЛУЧНИЙ', weight: '200', price: '80' },
  { name: 'АПЕЛЬСИНОВИЙ', weight: '200', price: '120' },
  { name: 'ГРЕЙПФРУТОВИЙ', weight: '200', price: '120' },
  { type: 'Молочні коктейлі' },
  { name: 'КЛАСИЧНИЙ', weight: '300', price: '70' },
  { name: 'БАНАНОВИЙ', weight: '300', price: '85' },
  { name: 'ШОКОЛАДНИЙ', weight: '300', price: '85' }
];

export const strongAlcohol = [
  { type: 'ГОРІЛКА' },
  { name: 'ПЕРЛОВА', weight: '50', price: '40' },
  { name: 'ФІНЛЯНДІЯ', weight: '50', price: '40' },
  { name: 'КОЗАЦЬКА РАДА', weight: '50', price: '65' },
  { name: 'ФІНЛЯНДІЯ ЖУРАВЛИНА', weight: '50', price: '65' },
  { name: 'ГРЕЙ ГУЗ', weight: '50', price: '105' },
  { type: 'ВІСКІ' },
  { name: 'ДЖЕЙМСОН', weight: '50', price: '115' },
  { name: 'ДЖЕК ДЕНІАЛС', weight: '50', price: '120' },
  { name: 'ДЖЕК ДЕНІАЛС МЕДОВИЙ', weight: '50', price: '130' },
  { name: 'ГЛЕНМОРАНЖИ', weight: '50', price: '275' },
  { name: 'БУЛЕТ БУРБОН', weight: '50', price: '160' },
  { type: 'КОНЬЯК' },
  { name: 'МАРТЕЛЬ VS', weight: '50', price: '215' },
  { name: 'ХЕНЕССІ VSOP', weight: '50', price: '390' },
  { type: 'ТЕКІЛА' },
  { name: 'ЕСПОЛОН БІЛА', weight: '50', price: '95' },
  { name: 'ЕСПОЛОН ЗОЛОТА', weight: '50', price: '105' },
  { type: 'РОМ' },
  {
    name: 'КАПІТАН МОРГАН',
    variants: [
      { name: ' - БІЛИЙ', weight: '50', price: '75' },
      { name: ' - ЧОРНИЙ', weight: '50', price: '75' },
      { name: ' - ЗОЛОТИЙ', weight: '50', price: '75' }
    ]
  },
  { type: 'БРЕНДІ' },
  { name: 'МЕТАКСА 5*', weight: '50', price: '90' },
  { name: 'ЗАКАРПАТСЬКИЙ', weight: '50', price: '65' },
  { name: 'СТ КАХЕТІ 3*', weight: '50', price: '70' },
  { type: 'ЛІКЕР' },
  { name: 'ЛІМОНЧЕЛЛО', weight: '50', price: '45' },
  { name: 'БЕЙЛІС', weight: '50', price: '90' },
  { type: 'ГІРКІ НАСТОЯНКИ' },
  { name: 'БЕХЕРІВКА', weight: '50', price: '70' },
  { name: 'ЄГЕРМАЙСТЕР', weight: '50', price: '90' },
  { name: 'САМБУКА', weight: '50', price: '90' },
  { name: 'АПЕРОЛЬ', weight: '50', price: '85' },
  { type: 'ДЖИН' },
  { name: 'БІФІТЕР', weight: '50', price: '85' },
  { type: 'ВЕРМУТ' },
  { name: 'МАРТІНІ Б’ЯНКО', weight: '50', price: '45' },
  { name: 'МАРТІНІ РОССО', weight: '50', price: '45' }
];

export const wines = [
  { type: 'ШАМПАНСЬКЕ' },
  { name: 'МОЕТ ШАНДОН', weight: '750', price: '3400' },
  { type: 'ІГРИСТІ' },
  { name: 'ПРОСЕККО ЕКСТРА ДРАЙ', weight: '750', price: '450' },
  { name: 'МАРТІНІ АСТІ', weight: '750', price: '790' },
  { name: 'ФРАГОЛІНО БІЛЕ/ЧЕРВОНЕ', weight: '750', price: '390' },
  { type: 'ВИНО' },
  { country: 'УКРАЇНА' },
  { name: 'МЕРЛО', weight: '150', price: '105' },
  { name: 'ШАРДОНЕ', weight: '150', price: '105' },
  { country: 'ГРУЗІЯ' },
  { name: 'АЛАЗАНСЬКА ДОЛИНА ЧЕРВОНЕ', weight: '150', price: '90' },
  { name: 'АЛАЗАНСЬКА ДОЛИНА БІЛЕ', weight: '150', price: '90' },
  { country: 'ФРАНЦІЯ' },
  { name: 'БОРДО', weight: '150', price: '220' },
  { name: 'ШАБЛІ', weight: '150', price: '330' },
  { name: 'РОЗЕ ДЕ АНЖУ', weight: '150', price: '110' },
  { country: 'ІТАЛІЯ' },
  { name: 'КЯНТІ КЛАСІКО', weight: '150', price: '150' },
  { name: 'ПІНО ГРІДЖІО', weight: '150', price: '130' },
  { country: 'НОВА ЗЕЛАНДІЯ' },
  { name: 'СОВІНЬЙОН БЛАН', weight: '150', price: '190' },
  { name: 'ПІНО НУАР', weight: '150', price: '180' }
];

export const beer = [
  { name: 'МИКУЛИНЕЦЬКЕ РОЗЛИВНЕ', weight: '400', price: '70' },
  { type: 'ПЛЯШКОВЕ:' },
  { name: 'КРОНЕНСБУРГ БЛАНШ', weight: '500', price: '100' },
  { name: 'ГРІНБЕРГЕН СВІТЛЕ/ ТЕМНЕ', weight: '300', price: '90' },
  { name: 'ХУГАРДЕН', weight: '330', price: '120' },
  { name: 'ЛЕФФЕ БРУНЕ', weight: '330', price: '120' },
  { type: 'БЕЗАЛКОГОЛЬНЕ:' },
  { name: 'КАРЛСБЕРГ', price: '85' },
  { type: 'СЕТ ПИВНИЙ:' },
  {
    name: 'бастурма, суджук, сир копчений, начоси',
    weight: '180',
    price: '250'
  }
];

export const cocktails = [
  { type: 'КОКТЕЙЛІ КЛАСИЧНІ' },
  { name: 'МОХІТО ( КЛАСИЧНИЙ/ПОЛУНИЧНИЙ)', weight: '250', price: '140' },
  { name: 'МАЙ ТАЙ', weight: '250', price: '185' },
  { name: 'СІК ДЖУНГЛІВ', weight: '270', price: '170' },
  { name: 'ЛОНГ АЙЛЕНД', weight: '250', price: '185' },
  { name: 'АПЕРОЛЬ ШПРІТЗ', weight: '200', price: '165' },
  { name: 'ТАБЛЕРОН', weight: '200', price: '195' },
  { name: 'ВІСКІ САУЕР', weight: '110', price: '145' },
  { name: 'ТЕКІЛА САУЕР', weight: '110', price: '145' },
  { name: 'КАМОЛІЯ САУЕР', weight: '110', price: '175' },
  { name: 'НЕГРОНІ', weight: '90', price: '189' },
  { name: 'ДЖИН ТОНІК КЛАСИЧНИЙ/ЯГІДНИЙ', weight: '200', price: '140' },
  { type: 'КОКТЕЙЛІ БЕЗАЛКОГОЛЬНІ' },
  { name: 'МОХІТО', weight: '250', price: '95' },
  { name: 'СОЛОДКА ВАТА', weight: '110', price: '95' }
];

export const homePageSectionButtons = [
  { value: 1, name: 'Кухня', path: '/kitchen', padding: 'p-4' },
  { value: 2, name: 'Бар', path: '/bar', padding: 'p-4' }
];

export const kitchenSectionButtons = [
  {
    section: 'main_dishes',
    name: 'Основні страви',
    path: '/kitchen/main_dishes'
  },
  { section: 'appetizer', name: 'Закуски', path: '/kitchen/appetizer' },
  { section: 'salads', name: 'Салати', path: '/kitchen/salads' },
  { section: 'soups', name: 'Супи', path: '/kitchen/soups' },
  {
    section: 'hot_appetizer',
    name: 'Гарячі закуски',
    path: '/kitchen/hot_appetizer'
  },
  { section: 'side_dishes', name: 'Гарніри', path: '/kitchen/side_dishes' },
  { section: 'desserts', name: 'Десерти', path: '/kitchen/desserts' },
  { section: 'pasta', name: 'Паста', path: '/kitchen/pasta' },
  { section: 'for_kids', name: 'Для дітей', path: '/kitchen/for_kids' },
  { section: 'mangal_menu', name: 'Мангал меню', path: '/kitchen/mangal_menu' }
];

export const barSectionButtons = [
  { section: 'hot_drinks', name: 'Гарячі напої', path: '/bar/hot_drinks' },
  {
    section: 'strong_alcohol',
    name: 'Міцний алкоголь',
    path: '/bar/strong_alcohol'
  },
  { section: 'wine', name: 'Вино', path: '/bar/wine' },
  { section: 'cocktails', name: 'КОКТЕЙЛІ', path: '/bar/cocktails' },
  {
    section: 'non_alcohol_drinks',
    name: 'Напої безалкогольні',
    path: '/bar/non_alcohol_drinks'
  },
  { section: 'beer', name: 'Пиво', path: '/bar/beer' }
];

export enum KitchenMenuSections {
  Appetizers = 'appetizer',
  Salads = 'salads',
  Soups = 'soups',
  HotAppetizer = 'hot_appetizer',
  SideDishes = 'side_dishes',
  Desserts = 'desserts',
  Pasta = 'pasta',
  MainDishes = 'main_dishes',
  ForKids = 'for_kids',
  MangalMenu = 'mangal_menu'
}

export enum BarMenuSections {
  HotDrinks = 'hot_drinks',
  StrongAlcohol = 'strong_alcohol',
  Wine = 'wine',
  Cocktails = 'cocktails',
  NonAlcoholDrinks = 'non_alcohol_drinks',
  Beer = 'beer'
}

export const KitchenMenuList = {
  [KitchenMenuSections.Appetizers]: {
    name: 'Закуски',
    data: appetizerList
  },
  [KitchenMenuSections.Salads]: {
    name: 'Салати',
    data: saladsList
  },
  [KitchenMenuSections.Soups]: {
    name: 'Супи',
    data: soups
  },
  [KitchenMenuSections.HotAppetizer]: {
    name: 'Гарячі закуски',
    data: hotAppetizer
  },
  [KitchenMenuSections.SideDishes]: {
    name: 'Гарніри',
    data: sideDishes
  },
  [KitchenMenuSections.Desserts]: {
    name: 'Десерти',
    data: desserts
  },
  [KitchenMenuSections.Pasta]: {
    name: 'Паста',
    data: pasta
  },
  [KitchenMenuSections.MainDishes]: {
    name: 'Основні страви',
    data: mainDishes
  },
  [KitchenMenuSections.ForKids]: {
    name: 'Для дітей',
    data: forKids
  },
  [KitchenMenuSections.MangalMenu]: {
    name: 'Мангал меню',
    data: mangalMenu
  }
};

export const BarMenuList = {
  [BarMenuSections.HotDrinks]: {
    name: 'Гарячі напої',
    data: hotDrinks
  },
  [BarMenuSections.StrongAlcohol]: {
    name: 'Міцний алкоголь',
    data: strongAlcohol
  },
  [BarMenuSections.Wine]: {
    name: 'Вино',
    data: wines
  },
  [BarMenuSections.Cocktails]: {
    name: 'Коктейлі',
    data: cocktails
  },
  [BarMenuSections.NonAlcoholDrinks]: {
    name: 'Напої безалкогольні',
    data: nonAlcoholDrinks
  },
  [BarMenuSections.Beer]: {
    name: 'Пиво',
    data: beer
  }
};
