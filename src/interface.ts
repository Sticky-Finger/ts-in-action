// let plus: (x: number, y: number) => number;

// interface Add{
//   (x: number, y: number): number;
// }

// 类型别名
type Add = (x: number, y: number) => number

let plus: Add = (a, b) => a + b; 

// 混合类型接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
};

let lib: Lib = (() => {}) as Lib; // 加上09类型断言
lib.version = '1.0';
lib.doSomething = () => {};