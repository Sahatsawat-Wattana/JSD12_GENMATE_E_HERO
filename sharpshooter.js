import Hero from "./hero.js";

export default class Sharpshooter extends Hero {
  constructor(name, gender, multiverse, hp, attack, maxAmmo) {
    super(name, gender, multiverse, hp, attack);
    this.maxAmmo = maxAmmo;
    this.ammo = maxAmmo;
    this.isInCover = false;
  }

  precisionShot(target) {
    if (this.ammo > 0) {
      this.ammo -= 1;
      const damage = this.attack * 2.5;
      console.log(
        `[DEADEYE] ${this.name} fires a high-caliber precision shot! (Ammo: ${this.ammo}/${this.maxAmmo})`,
      );
      target.gotattacked(damage);
    } else {
      console.log(`*Click!* ${this.name}'s weapon is empty! Need to reload.`);
    }
  }

  reload() {
    this.ammo = this.maxAmmo;
    console.log(
      `[RELOAD] ${this.name} locks in a fresh magazine. Ammo restored to ${this.maxAmmo}.`,
    );
  }

  takeCover() {
    this.isInCover = true;
    console.log(
      `[COVER] ${this.name} rolls behind a barricade, completely breaking line of sight!`,
    );
  }
  gotattacked(attack) {
    if (this.isInCover) {
      console.log(
        `[BLOCKED] The attack shatters the barricade! ${this.name} completely dodges it and takes 0 damage.`,
      );
      this.isInCover = false;
    } else {
      super.gotattacked(attack);
    }
  }
  statusNow() {
    super.statusNow();
    if (this.hp > 0) {
      console.log(
        `   -> Ammo: ${this.ammo}/${this.maxAmmo} | Stance: ${this.isInCover ? "In Cover" : "Exposed"}`,
      );
    }
  }
}