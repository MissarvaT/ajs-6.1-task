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
  const myWitcher = new Character('Геральт', 'Witcher');

  expect(myWitcher).toThrowError(new Error('Несуществующий тип персонажа!'));
});


test('возвращает ошибку из-за длины имени', () => {
  const myDaemon = new Character('Ио', 'Daemon');

  expect(myDaemon).toThrowError(new Error('Имя персонажа должно быть не менее 2 и не не более 10 символов в длину'));
});

test('возвращает ошибку из-за формата ввода', () => {
  const myUndead = new Character(30, 40);

  expect(myUndead).toThrowError(new Error('Ошибка формата'));
});
