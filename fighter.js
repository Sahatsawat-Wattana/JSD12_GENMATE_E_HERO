import Hero from "./hero.js";

export default class Fighter extends Hero {
  constructor(name, gender, multiverse, hp, attack) {
    super(name, gender, multiverse, hp, attack);
  }
  buffpower() {
    this.attack *= 2;
    this.hp += 10;
    console.log(
      `Hehe! Right now ${this.name} is buffed. My attack is twice! ${this.attack} attack Are you ready!!`,
    );
    console.log(`${this.name} is stronger now. My hp is ${this.hp}`);
  }
  debuffpower() {
    this.attack /= 2;
    console.log(
      `Oh no! my superpower has gone to half! just ${this.attack} attack`,
    );
  }
}