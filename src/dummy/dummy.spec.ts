import {testFunction} from './dummy';

describe('dummy spec', () => {
  it('returns the correct string', () => {
    expect(testFunction()).toBe('working...');
  });
});
