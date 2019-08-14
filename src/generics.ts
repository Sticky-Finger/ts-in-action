/**
 * 泛型函数和泛型接口
 */

// 泛型函数定义
function log<T>(value: T): T {
  console.log(value);
  return value;
}
// 调用方式一：
log<string []>(['1', 'b', 'c']);
// 调用方式二：（利用类型推断省略指定类型）
log(['a', 'b']);

// 泛型函数类型
type Log = <T>(value: T) => T
let myLog: Log = log

// 泛型接口
// 1)泛型仅仅约束了一个函数
interface LogInterface1 { // 和类型别名的定义方式完全等价
  <T>(value: T): T;
}
// 2)泛型约束其他成员，接口的所有成员都可收到泛型的约束
interface LogInterface2<T> { // 注意：当泛型变量约束了整个接口之后，接口实现的时候我们必须指定一个类型
  (value: T): T;
}
let myLog2: LogInterface2<number> = log;
interface LogInterface3<T = string> { // 接口定义中，指定一个默认类型
  (value: T): T;
}
let myLog3: LogInterface3 = log;
myLog3('1');


/**
 * 泛型类和泛型约束
 */

// 泛型类
class LogClass<T> {
  // static run(value: T) { // 静态成员不能引用类型参数
  run(value: T) {
    console.log()
    return value;
  }
}
let log4 = new LogClass<number>(); // 1）实例化时，显示传入T的类型
log4.run(1);
let log5 = new LogClass(); // 2）不传入类型参数（当不指定类型参数时，value的值可以是任意值）
log5.run('1');

// 泛型约束
interface Length {
  length: number;
}
function log6<T extends Length>(value: T): T { // T继承了Length，因此函数log6输入的参数不论什么类型，都必须有属性length
  console.log(value, value.length);
  return value;
}
log6([1]);
log6('123');
log6({length: 1});