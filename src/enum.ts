// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
console.log(Role.Reporter);
console.log(Role);

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了',
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes',
}

// 枚举成员
// Role.Reporter = 2; // 枚举成员定义后是不能修改的
enum Char {
  // const
  a, // 没有枚举值的情况
  f,
  b = Char.a, // 对已有枚举成员的引用
  c = 1 + 3, // 常量的表达式
  // computed
  d = Math.random(),
  e = '123'.length,
  // f = 4, // computed member一定要赋初始值
};

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
};
let month = [Month.Jan, Month.Feb, Month.Mar];

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

// 可以把任意的number类型赋值给枚举类型E、F的变量
let e: E = 3;
let f: F = 3; // 取值可以超出枚举成员的定义
// e === f; // 不同类型的枚举，不可以进行比较
/* 枚举成员类型 */
let e1: E.a = 1;
let e2: E.b;
// e1 === e2; // 不同枚举成员类型，不可以进行比较
let e3: E.a = 2;
e1 === e3;

/* 字符串枚举 */
let g1: G = G.a; // 或者G.b,取值只能是枚举成员的类型
let g2: G.a = G.a; // 只能取G.a