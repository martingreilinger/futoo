import each from 'jest-each';
import { Option } from './option';

describe('Option', () => {
  const value: string = 'value';
  const otherValue: string = 'other';

  each([
    [value, Option.Some, value],
    [null, Option.None, otherValue],
    [undefined, Option.None, otherValue],
  ]).test(
    'creates correct subclass based when called with value: %o',
    (givenValue, expectedClass, expectedValue) => {
      // when
      const valueOption = Option.of(givenValue);

      // then
      expect(valueOption).toBeInstanceOf(expectedClass);
      expect(valueOption.getOrElse(otherValue)).toBe(expectedValue);
    });
});
