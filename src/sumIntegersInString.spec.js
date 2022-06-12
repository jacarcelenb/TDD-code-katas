import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  
  test('should print zero  if the string only have letters', () => {
    const value = "dadfasdf";
    const resp = sumOfIntegersInString(value);
    expect(resp).toBe("0");
  });
  test('should print Only numbers  if the string only have numbers', () => {
    const value = "413413413";
    const resp = sumOfIntegersInString(value);
    expect(resp).toBe("413413413");
  });
  test('should show the sum of integers inside of the string  if the string only have letters and numbers', () => {
    const value = "h3ll0w0r1d";
    const resp = sumOfIntegersInString(value);
    expect(resp).toBe("4");
  });
});
