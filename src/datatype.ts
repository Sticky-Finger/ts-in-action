// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '4'];

// 元组
let tuple: [number, string] = [0, '1'];
/* 元组的越界问题，实际开发中不建议这样使用 */
tuple.push(2); // 添加新元素没有报错
console.log(tuple);
// tuple[2]; // 不允许越界访问

// 函数
let add = (x: number, y: number) => x + y; // 通常返回值类型可以省略（利用了ts中的类型推断功能）
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b; // 函数实现，可以参数不同名，且不指定类型

// 对象
// let obj: object = { x: 1, y: 2 }; // 只是简单指定obj的类型object（并没有指定对象应该包含哪些属性），ts中不允许直接修改对象的属性
let obj: { x: number, y: number } = { x: 1, y: 2 };
obj.x = 3

// symbol (含义：具有唯一的值)
let s1: symbol = Symbol();
let s2: symbol = Symbol();
console.log(s1 === s2);

// undefined, null
let un: undefined = undefined; // 变被定义为undefined类型，只能赋值为undefined
let nu: null = null; // 同理,只能赋值为null
/**
 * undefined、null在ts官方文档中是其他类型的子类型（需要修改tsconfig.json中的配置——"strictNullChecks: false,"）
 */
num = undefined;
num = null;

// void (js中void是一种操作符，可以将任何表达式返回undefined——因为js中undefined不是保留字，可以被赋值覆盖) typescript中表示：没有任何返回值的类型
let noReturn = () => {};

// any （可以给该类型变量任意赋值）
let x;
x = 1;
x = [];
x = () => {};

// never 表示永远不会有返回值的类型
let error = () => { // 抛出异常的函数
  throw new Error('error');
};
let endless = () => { // 死循环函数
  while(true) {}
};
