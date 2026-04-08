export default class Hero {
  constructor(name, gender, multiverse, hp, attack) {
    this.name = name;
    this.gender = gender;
    this.multiverse = multiverse;
    this.hp = hp;
    this.attack = attack;
  }
  introduce() {
    console.log(
      `I'm ${this.name}. I'm ${this.gender}. I'm from ${this.multiverse}.`,
    );
  }
  shiftMultiverse(anothermultiverse) {
    console.log(
      `${this.name} is from ${this.multiverse}. Go to ${anothermultiverse} to save the days.`,
    );
    this.multiverse = anothermultiverse;
  }
  gotattacked(attack) {
    this.hp -= attack;
    console.log(
      `${this.name} got attacked ${attack} hp. ${this.name} currently have ${this.hp} hp.`,
    );
  }
  statusNow() {
    if (this.hp <= 0) {
      console.log(`${this.name} is dead`);
    } else {
      console.log(
        `${this.name} is alive. ${this.name} currently have ${this.hp} hp. `,
      );
    }
  }
}
