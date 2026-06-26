# 04장 - 변수

## 이번 장 핵심

- 변수는 값을 저장하기 위해 확보한 메모리 공간에 붙인 이름이다.
- 식별자는 값이 아니라 메모리 주소를 기억한다.
- `let`은 재할당할 수 있고, `const`는 재할당할 수 없다.
- `const`는 선언과 동시에 초기화해야 한다.
- 원시값은 값이 복사되고, 객체는 참조가 복사된다.

## 헷갈렸던 점

- `const`는 왜 선언만 해둘 수 없을까?
- `const`로 선언한 객체의 프로퍼티는 왜 바꿀 수 있을까?
- 원시값 복사와 객체 참조 복사는 왜 다르게 동작할까?
- 선언하지 않은 변수를 읽으면 어떤 에러가 날까?

## 실험 코드

- `variables.js` - 04장 실험 목록
- `reassignment.js` - `let` 재할당과 `const` 재할당 비교
- `const-reassignment-error.js` - `const` 재할당 에러 확인
- `const-declaration-error.js` - `const` 선언만 했을 때의 SyntaxError 확인
- `reference-error.js` - 선언하지 않은 변수 접근 확인
- `primitive-vs-object.js` - 원시값 복사와 객체 참조 복사 비교

## 실행 방법

정상 실행 실험:

```bash
node 04-variables/variables.js
node 04-variables/reassignment.js
node 04-variables/primitive-vs-object.js
```

에러 관찰 실험:

```bash
node 04-variables/const-reassignment-error.js
node 04-variables/const-declaration-error.js
node 04-variables/reference-error.js
```

## 실행 결과

```txt
let age: 25
const username: 희찬
original primitive value: 10
copied primitive value: 20
object copied by reference: 99
```

에러 실험에서는 각각 `TypeError`, `SyntaxError`, `ReferenceError`를 확인한다.

## 알게 된 점

- `let`은 값을 다시 할당할 수 있지만, `const`는 재할당할 수 없다.
- `const`는 바인딩을 고정하는 것이지 객체 내부 변경을 막는 것은 아니다.
- 원시값은 복사 후 한쪽을 바꿔도 다른 쪽에 영향이 없다.
- 객체는 참조를 공유하면 한쪽 변경이 다른 변수에서도 보인다.
- 의도적으로 에러를 확인하는 코드는 정상 실행 코드와 분리해야 복습하기 쉽다.

## Node.js 백엔드와 연결

- request body 값을 변수에 담을 때 의미 있는 이름을 써야 한다.
- `const input = req.body`처럼 객체 참조를 다룰 때 원본 변경 가능성을 의식해야 한다.
- 환경변수나 query string은 문자열로 들어오므로 이름과 실제 타입이 어긋나지 않게 변환해야 한다.
- API validation에서는 `ReferenceError`, `TypeError` 같은 예외를 사용자가 보는 응답으로 바꿔야 한다.

## 토론 질문

1. `const`를 기본으로 쓰는 습관은 왜 권장될까?
2. `const` 객체의 프로퍼티 변경을 허용하는 것은 헷갈리는 설계일까?
3. 객체를 함수에 넘길 때 원본 변경을 막으려면 어떤 방법을 쓸 수 있을까?
