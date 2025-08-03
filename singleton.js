class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.timestamps = Date.now();
    Singleton.instance = this;

    return this;
  }

  sayHello() {
    console.log("Hello from the singleton!");
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2);
console.log(obj1.timestamps, obj2.timestamps);
