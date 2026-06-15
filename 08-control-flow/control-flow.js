if (0)    console.log("숫자 0");    // 예측: 출력?
if ('0')  console.log("문자열 '0'"); // 예측: ?  ← 함정
if ([])   console.log("빈 배열");    // 예측: ?  ← 함정

// switch: break 없으면?
switch (1) {
  case 1: console.log("one");   // break 안 씀
  case 2: console.log("two");
}                                // 예측: 뭐가 찍힐까?