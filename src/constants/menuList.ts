import { IMenuItem } from '@/components/MenuItem/MenuItem';

export const appetizierList: IMenuItem[] = [
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

export const homePageSectionButtons = [
  { value: 1, name: 'Кухня', path: '/kitchen', padding: 'p-4' },
  { value: 2, name: 'Бар', path: '/bar', padding: 'p-4' }
];

export const kitchenSectionButtons = [
  { value: 1, name: 'Закуски', path: '/kitchen/appetizer' },
  { value: 2, name: 'Салати', path: '/kitchen/salads' },
  { value: 3, name: 'Супи', path: '/kitchen/soups' },
  { value: 4, name: 'Гарячі закуски', path: '/kitchen/hot_appetizer' },
  { value: 5, name: 'Гарніри', path: '/kitchen/side_dishes' },
  { value: 6, name: 'Десерти', path: '/kitchen/desserts' },
  { value: 7, name: 'Паста', path: '/kitchen/pasta' },
  { value: 8, name: 'Основні страви', path: '/kitchen/main_dishes' },
  { value: 9, name: 'Для дітей', path: '/kitchen/for_kids' },
  { value: 10, name: 'Гарячі напої', path: '/kitchen/hot_drinks' },
  { value: 11, name: 'Мангал меню', path: '/kitchen/mangal_menu' },
  { value: 12, name: 'Соуси', path: '/kitchen/souces' }
];

export const barSectionButtons = [
  { value: 13, name: 'Міцний алкоголь', path: '/strong_alcohol' },
  { value: 14, name: 'Вино', path: '/wine' },
  { value: 15, name: 'КОКТЕЙЛІ', path: '/coctails' },
  { value: 16, name: 'КОКТЕЙЛІ БЕЗАЛКОГОЛЬНІ', path: '/non_alcohol_coctails' },
  { value: 17, name: 'Напої безалкогольні', path: '/non_alcohol_drinks' },
  { value: 18, name: 'Пиво', path: '/beer' }
];
