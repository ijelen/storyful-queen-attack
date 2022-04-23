import { canAttack } from ".";

test("Return true if both queens are in the same column", () => {
  expect(canAttack([1, 1], [1, 3])).toBe(true);
  expect(canAttack([3, 1], [3, 3])).toBe(true);
});

test("Return true if both queens are in the same row", () => {
  expect(canAttack([1, 4], [3, 4])).toBe(true);
  expect(canAttack([8, 1], [3, 1])).toBe(true);
});

test("Return true if both queens are in the major diagonal", () => {
  expect(canAttack([1, 1], [3, 3])).toBe(true);
  expect(canAttack([5, 2], [6, 3])).toBe(true);
});

test("Return true if both queens are in the minor diagonal", () => {
  expect(canAttack([3, 1], [2, 2])).toBe(true);
  expect(canAttack([5, 2], [3, 4])).toBe(true);
});

test("Return false if both queens are in the same field", () => {
  expect(canAttack([3, 2], [3, 2])).toBe(false);
  expect(canAttack([5, 7], [5, 7])).toBe(false);
});

test("Return false in all other cases", () => {
  expect(canAttack([1, 2], [3, 7])).toBe(false);
  expect(canAttack([5, 7], [6, 2])).toBe(false);
});
