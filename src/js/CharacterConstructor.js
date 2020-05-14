function Character(name, type) {
  if (typeof name !== 'string' || typeof type !== 'string') {
    throw new Error('Ошибка формата');
  }
  if (name.length <= 2 || name.length > 10) {
    throw new Error('Имя персонажа должно быть не менее 2 и не не более 10 символов в длину');
  }
  const possibleTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  if (!possibleTypes.includes(type)) {
    throw new Error('Несуществующий тип персонажа!');
  }
  const fightingParameters = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Daemon: { attack: 25, defence: 25 },
    Undead: { attack: 40, defence: 10 },
    Zombie: { attack: 10, defence: 40 },
  };
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = fightingParameters[type].attack;
  this.defence = fightingParameters[type].defence;
}

export default Character;
