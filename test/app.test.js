import findBy from '../src/js/app';

const nameFinder = findBy('name', 'урон');
const typeFinder = findBy('type', 'attack');
const wrongFinder = findBy('name', 'attack');
const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

test('Осуществляется поиск по свойству name', () => {
  expect(results.filter(nameFinder)).toEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
});

test('Осуществляется поиск по свойству type', () => {
  expect(results.filter(typeFinder)).toEqual([{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }]);
});

test('При неверном значении возвращается пустой массив', () => {
  expect(results.filter(wrongFinder)).toEqual([]);
});
