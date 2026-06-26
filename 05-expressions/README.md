# 05장 - 표현식과 문

## 이번 장 핵심

- 값으로 평가되는 문은 표현식이다.
- 표현식은 다른 표현식의 일부가 될 수 있다.
- 문은 프로그램을 구성하는 기본 실행 단위다.
- 모든 문이 값처럼 사용할 수 있는 것은 아니다.

## 헷갈렸던 점

- 할당문은 문인데 왜 값을 반환할까?
- `if`문은 왜 변수에 담을 수 없을까?
- 표현식과 문을 구분하면 어떤 버그를 더 빨리 찾을 수 있을까?

## 실험 코드

- `expressions.js` - 05장 실험 목록
- `assignment-expression.js` - 할당문이 값으로 평가되는지 확인
- `statement-error.js` - `if`문을 값처럼 쓰면 SyntaxError가 나는지 확인

## 실행 방법

정상 실행 실험:

```bash
node 05-expressions/expressions.js
node 05-expressions/assignment-expression.js
```

에러 관찰 실험:

```bash
node 05-expressions/statement-error.js
```

## 실행 결과

```txt
assignment result: 10
x after assignment: 10
```

에러 실험에서는 `SyntaxError`를 확인한다.

## 알게 된 점

- `x = 10`은 할당문이지만 `10`이라는 값으로 평가된다.
- `if`문은 조건에 따라 흐름을 제어하는 문이지 값으로 평가되는 표현식이 아니다.
- 값을 기대하는 자리에 문을 넣으면 코드가 실행되기 전에 SyntaxError가 발생한다.

## Node.js 백엔드와 연결

- `const limit = Number(req.query.limit) || 50`처럼 표현식 결과를 변수에 담을 수 있다.
- `if`는 API 요청을 검증하고 흐름을 나누는 데 사용한다.
- 조건문 안에서 바로 응답을 반환할지, 값을 계산해서 다음 단계로 넘길지 구분해야 한다.

## 토론 질문

1. 표현식과 문을 구분하는 것이 실제 백엔드 코드에서 언제 도움이 될까?
2. 할당문이 값을 반환하는 것은 편리한 기능일까, 헷갈리는 기능일까?
3. `if`문 대신 삼항 연산자를 쓰는 기준은 무엇일까?
