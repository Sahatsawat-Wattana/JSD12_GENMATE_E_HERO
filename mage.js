import Hero from "./hero.js"

export default class Mage extends Hero {
  constructor(name, gender, multiverse, hp, attack, mana) {
    super(name, gender, multiverse, hp, attack);
    this.mana = mana;
    this.hasResurrected = false;
  }
  castHeal() {
    if (this.hp > 0) {
      this.hp += 20;
      console.log(
        `${this.name} chants an ancient spell. HP restored to ${this.hp}.`,
      );
    }
  }
  gotattacked(attack) {
    this.hp -= attack;
    console.log(
      `CRITICAL HIT! ${this.name} takes ${attack} damage. (Remaining HP: ${this.hp})`,
    );
    if (this.hp <= 0 && !this.hasResurrected) {
      console.log(`[System] Warning: Vital signs dropping...`);
      console.log(
        `[Ultimate] The Ray of Light pierces the sky! ${this.name} is reviving...`,
      );
      this.hp = 50;
      this.hasResurrected = true;
      console.log(
        `${this.name} has returned from the void. HP is restored to ${this.hp}.`,
      );
    } else if (this.hp <= 0 && this.hasResurrected) {
      console.log(
        `${this.name} has fallen in battle. There is no magic left to save her.`,
      );
    }
  }
}