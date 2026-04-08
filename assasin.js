import Hero from "./hero.js";

export default class Assassin extends Hero {
  constructor(name, gender, multiverse, hp, attack) {
    super(name, gender, multiverse, hp, attack);
    this.criticalChance = 0.4;
    this.isHidden = false;
    this.evasionChance = 0.3;
  }

  gotattacked(attack) {
    const isEvaded = Math.random() < this.evasionChance;

    if (isEvaded) {
      console.log(
        `[EVADE] ${this.name} Barely dodged the attack just in time! (Damage 0)`,
      );
    } else {
      super.gotattacked(attack);
    }
  }
  hideInShadows() {
    this.isHidden = true;
    console.log(
      `${this.name} has vanished into the shadows! (Next attack will be deadly)`,
    );
  }

  statusNow() {
    super.statusNow();
    if (this.hp > 0 && this.isHidden) {
      console.log(`${this.name} is currently hidden.`);
    }
  }
}