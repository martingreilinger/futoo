import {Option} from './option';

describe('Option', () => {
  const value: string = 'value';
  const otherValue: string = 'other';

  it.each`
    givenValue |expectedClass | expectedValue
    ${value} | ${Option.Some} | ${value}
    ${null} | ${Option.None} | ${otherValue}
    ${undefined} | ${Option.None} | ${otherValue}
  `(
    'creates instance of "$expectedClass" when called with value "$givenValue"',
    ({givenValue, expectedClass, expectedValue}) => {
      // when
      const valueOption = Option.of(givenValue);

      // then
      expect(valueOption).toBeInstanceOf(expectedClass);
      expect(valueOption.getOrElse(otherValue)).toBe(expectedValue);
    });
});
