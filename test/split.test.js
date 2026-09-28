import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitBill, sum, won } from '../src/split.js';

test('나누어떨어지면 모두 같은 금액', () => {
  assert.deepEqual(splitBill(30000, 3), [10000, 10000, 10000]);
});

test('나누어떨어지지 않아도 합계가 총액과 같다 (#1)', () => {
  const amounts = splitBill(10000, 3);
  assert.equal(sum(amounts), 10000);
  assert.deepEqual(amounts, [3334, 3333, 3333]);
});

test('인원이 0명이면 오류', () => {
  assert.throws(() => splitBill(10000, 0));
});

test('원 단위 표기', () => {
  assert.equal(won(12345), '12,345원');
  assert.equal(sum([1, 2, 3]), 6);
});
