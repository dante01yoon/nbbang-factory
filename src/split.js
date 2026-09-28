// 총액을 인원수로 나눠 1인당 금액을 계산한다.
export function splitBill(total, people) {
  if (!Number.isInteger(total) || total < 0) throw new Error('총액은 0 이상의 정수여야 합니다');
  if (!Number.isInteger(people) || people < 1) throw new Error('인원은 1명 이상이어야 합니다');
  const each = Math.floor(total / people);
  const remainder = total % people;
  // 나머지 원은 앞사람부터 1원씩 더 내서 합계가 총액과 같게 한다.
  return Array.from({ length: people }, (_, i) => each + (i < remainder ? 1 : 0));
}

export function sum(amounts) {
  return amounts.reduce((a, b) => a + b, 0);
}

export function won(n) {
  return n.toLocaleString('ko-KR') + '원';
}
