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

export const homePageSectionButtons = [
  { value: 1, name: 'Кухня', path: '/kitchen', padding: 'p-4' },
  { value: 2, name: 'Бар', path: '/bar', padding: 'p-4' }
];

export const kitchenSectionButtons = [
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
  {
    section: 'main_dishes',
    name: 'Основні страви',
    path: '/kitchen/main_dishes'
  },
  { section: 'for_kids', name: 'Для дітей', path: '/kitchen/for_kids' },
  { section: 'mangal_menu', name: 'Мангал меню', path: '/kitchen/mangal_menu' }
];

export const barSectionButtons = [
  { section: 'hot_drinks', name: 'Гарячі напої', path: '/kitchen/hot_drinks' },
  {
    section: 'strong_alcohol',
    name: 'Міцний алкоголь',
    path: '/strong_alcohol'
  },
  { section: 'wine', name: 'Вино', path: '/wine' },
  { section: 'coctails', name: 'КОКТЕЙЛІ', path: '/coctails' },
  {
    section: 'non_alcohol_coctails',
    name: 'КОКТЕЙЛІ БЕЗАЛКОГОЛЬНІ',
    path: '/non_alcohol_coctails'
  },
  {
    section: 'non_alcohol_drinks',
    name: 'Напої безалкогольні',
    path: '/non_alcohol_drinks'
  },
  { section: 'beer', name: 'Пиво', path: '/beer' }
];

export enum KitchenMenuSections {
  Appetizers = 'appetizer',
  Salads = 'salads',
  Soups = 'soups',
  HotAppetizert = 'hot_appetizer',
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
  Coctails = 'coctails',
  NonAlcoholCoctails = 'non_alcohol_coctails',
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
  [KitchenMenuSections.HotAppetizert]: {
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
    data: []
  },
  [BarMenuSections.Wine]: {
    name: 'Вино',
    data: []
  },
  [BarMenuSections.Coctails]: {
    name: 'Коктейлі',
    data: []
  },
  [BarMenuSections.NonAlcoholCoctails]: {
    name: 'Коктейлі безалкогольні',
    data: []
  },
  [BarMenuSections.NonAlcoholDrinks]: {
    name: 'Напої безалкогольні',
    data: []
  },
  [BarMenuSections.Beer]: {
    name: 'Пиво',
    data: []
  }
};
