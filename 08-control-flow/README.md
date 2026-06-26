# 08장 - 제어문

## 이번 장 핵심

- 제어문은 코드 실행 흐름을 인위적으로 바꾼다.
- 조건문은 표현식의 truthy/falsy 평가 결과에 따라 실행된다.
- `switch`문에서 `break`를 빼면 다음 case까지 이어서 실행된다.

## 헷갈렸던 점

- 숫자 `0`은 falsy인데 문자열 `"0"`은 왜 truthy일까?
- 빈 배열 `[]`은 왜 truthy일까?
- `switch`에서 `break`를 빼면 왜 다음 case까지 실행될까?

## 실험 코드

- `control-flow.js` - 08장 실험 목록
- `truthy-falsy.js` - 조건문에서 truthy/falsy 확인
- `switch-fallthrough.js` - `switch`의 fall-through 확인

## 실행 방법

```bash
node 08-control-flow/control-flow.js
node 08-control-flow/truthy-falsy.js
node 08-control-flow/switch-fallthrough.js
```

## 실행 결과

```txt
문자열 '0'
빈 배열
one
two
```

## 알게 된 점

- `0`은 falsy라서 `if (0)` 블록이 실행되지 않는다.
- `"0"`과 `[]`는 truthy라서 조건문 안쪽이 실행된다.
- `switch`에서 `break`가 없으면 의도치 않게 다음 case까지 실행될 수 있다.

## Node.js 백엔드와 연결

- `if (req.query.limit)`처럼 값 존재 여부를 검사할 때 `"0"`도 truthy라는 점을 의식해야 한다.
- 빈 배열은 truthy이므로 배열이 비었는지는 `array.length`로 확인해야 한다.
- 요청 처리 흐름은 조건문이 많아지기 쉬워 guard clause로 단순화하는 것이 좋다.

## 토론 질문

1. API에서 `"0"`은 값이 있는 것으로 봐야 할까, 없는 것으로 봐야 할까?
2. 빈 배열이 truthy인 것은 어떤 상황에서 버그로 이어질 수 있을까?
3. `switch`의 fall-through는 장점일까, 위험한 기능일까?
