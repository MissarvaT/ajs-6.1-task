/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Character from '../CharacterConstructor';

test('возвращает созданного персонажа', () => {
  const myZombie = new Character('Шон', 'Zombie');

  expect(myZombie).toEqual({
    name: 'Шон',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('возвращает ошибку из-за несуществующего типа', () => {
  expect(() => { const myWitcher = new Character('Геральт', 'Witcher'); })
    .toThrowError(new Error('Несуществующий тип персонажа!'));
});


test('возвращает ошибку из-за длины имени', () => {
  expect(() => {
    const myDaemon = new Character('Ио', 'Daemon');
  }).toThrowError(new Error('Имя персонажа должно быть не менее 2 и не не более 10 символов в длину'));
});

test('возвращает ошибку из-за формата ввода', () => {
  expect(() => {
    const myUndead = new Character(30, 40);
  }).toThrowError(new Error('Ошибка формата'));
});
