// 실험 1: let은 다시 넣을 수 있나?
let age = 24;
age = 25;
console.log(age);   // 예측: ?

// 실험 2: const는?
const name = "희찬";
name = "철수";       // 예측: 될까, 에러날까?

// 실험 3: const를 값 없이 선언만?
const x;             // 예측: ?

// 실험 4: 선언 안 한 변수를 출력?
console.log(hello);  // 예측: ?

// 실험 5-A: 원시값(숫자)
let a = 10;
let b = a;
b = 20;
console.log(a);      // 예측: ?

// 실험 5-B: 객체
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;
console.log(obj1.x); // 예측: ?