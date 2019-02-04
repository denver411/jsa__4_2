import findBy from '../src/js/app';

const heroesInfo = [{
  name: 'маг',
  type: 'character',
  description: 'Персонаж, обладающий магическими способностями',
},
{
  name: 'заклинание',
  type: 'attack',
  description: 'Атака магическим заклинанием',
},
{
  name: 'урон',
  type: 'help',
  description: 'Страница описания элемента интерфейса',
},
];
const nameFinder = findBy('name', 'урон');
const typeFinder = findBy('type', 'attack');
const wrongNameFinder = findBy('name', 'attack');
const wrongPropsFinder = findBy('health', 100);

test('Осуществляется поиск по свойству name', () => {
  expect(heroesInfo.filter(nameFinder)).toEqual([{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }]);
});

test('Осуществляется поиск по свойству type', () => {
  expect(heroesInfo.filter(typeFinder)).toEqual([{
    name: 'заклинание',
    type: 'attack',
    description: 'Атака магическим заклинанием',
  }]);
});

test('При неверном значении свойства возвращается пустой массив', () => {
  expect(heroesInfo.filter(wrongNameFinder)).toEqual([]);
});

test('При неверном cвойстве возвращается пустой массив', () => {
  expect(heroesInfo.filter(wrongPropsFinder)).toEqual([]);
});
