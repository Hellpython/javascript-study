# 06장 - 데이터 타입

## 이번 장 핵심

- JavaScript 값은 타입을 가진다.
- `typeof`는 값의 타입을 문자열로 반환한다.
- `null`의 `typeof` 결과는 역사적인 이유로 `"object"`다.
- JavaScript 숫자는 IEEE 754 배정밀도 부동소수점으로 다뤄진다.

## 헷갈렸던 점

- `typeof null`은 왜 `"object"`일까?
- `NaN`의 타입은 왜 `"number"`일까?
- `0.1 + 0.2`는 왜 정확히 `0.3`이 아닐까?

## 실험 코드

- `data-types.js` - 06장 실험 목록
- `typeof-values.js` - `typeof null`, `typeof NaN` 확인
- `number-precision.js` - 부동소수점 정밀도 확인

## 실행 방법

```bash
node 06-data-types/data-types.js
node 06-data-types/typeof-values.js
node 06-data-types/number-precision.js
```

## 실행 결과

```txt
typeof null: object
typeof NaN: number
0.1 + 0.2: 0.30000000000000004
0.1 + 0.2 === 0.3: false
```

## 알게 된 점

- `typeof null`은 직관과 다르게 `"object"`다.
- `NaN`은 숫자 연산 실패를 나타내지만 타입은 `number`다.
- 소수 계산은 정밀도 오차가 생길 수 있으므로 금액 계산에서는 조심해야 한다.

## Node.js 백엔드와 연결

- request body나 query string에서 들어온 값은 저장 전에 타입을 확인해야 한다.
- `Number(value)` 결과가 `NaN`인지 검사해야 한다.
- DB에 숫자를 저장하기 전에 API 계층에서 검증하는 것이 좋다.

## 토론 질문

1. `NaN`도 `number`인 것은 좋은 설계일까?
2. API에서 숫자 검증은 어디까지 해야 할까?
3. 소수 계산이 필요한 값을 백엔드에서 어떻게 다루는 것이 안전할까?
