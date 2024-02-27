let skills: string[] = ['bash', 'counter', 'healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'counter', 'healing']
};

strider.hometown = 'Revendell';

console.table(strider);

export{};