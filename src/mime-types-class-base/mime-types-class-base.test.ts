import {MimeTypeClass} from './mime-types-class-base';
describe('MimeTypeClass', () => {
  test('Constructor should not throw', () => {
    expect(() => new MimeTypeClass('')).not.toThrow();
  });
});
