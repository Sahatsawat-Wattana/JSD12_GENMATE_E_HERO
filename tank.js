import Hero from "./hero.js";

export default class IronTank extends Hero {
  constructor(name, gender, multiverse, hp, attack, armor) {
    super(name, gender, multiverse, hp, attack);
    this.armor = armor;
  }

  gotattacked(power) {
    if (this.armor > 0) {
      const oldArmor = this.armor;
      this.armor -= power;

      if (this.armor < 0) {
        this.hp += this.armor;
        this.armor = 0;
      }

      console.log(
        `${this.name} Use your ARMOR to absorb the damage! (Armor: ${oldArmor} -> ${this.armor})`,
      );
    } else {
      this.hp -= power;
      console.log(
        `${this.name} has no armor left! HP is reduced by ${power}. (HP: ${this.hp + power} -> ${this.hp})`,
      );
    }
  }
}
