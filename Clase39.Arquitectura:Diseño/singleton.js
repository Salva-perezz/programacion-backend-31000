let instance;

class SingletonClass {
  constructor() {
    this.value = Math.random(100);
  }

  printValue() {
    console.log(this.value);
  }

  static getInstance() {
    if (!instance) {
      instance = new SingletonClass();
    }

    return instance;
  }
}

module.exports = SingletonClass;
