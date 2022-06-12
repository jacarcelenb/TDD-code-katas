import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('should print even if is a even number', () => {
   expect(game(4)).toBe("Even")
  });
  test('should print odd if is a odd number', () => {
    expect(game(9)).toBe("Odd")
   });
   test('should print the number as string if is a prime number', () => {
    expect(game(7)).toBe(String(7))
   });
  
});
