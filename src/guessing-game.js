class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.num = Math.round((this.min + this.max) / 2);
    return this.num;
  }

  lower() {
    this.setRange(this.min, this.num);
    this.guess();
  }

  greater() {
    this.setRange(this.num, this.max);
    this.guess();
  }
}

module.exports = GuessingGame;
