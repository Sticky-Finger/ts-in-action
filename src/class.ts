class Dog {
  constructor(name: string) {
    // this.name = name;
  }
  name?: string;
  run() {}
}
console.log(Dog.prototype); // 原型只包含方法
let dog = new Dog('wangcai');
console.log(dog); // 实例只包含属性

// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color; // this一定要在super调动之后调用
  }
  color: string;
}


/**
 * 抽象类
 */
abstract class Animal {
  eat() {}
}

class Cat extends Animal {}