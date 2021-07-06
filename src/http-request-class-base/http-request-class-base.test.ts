import {IHttpRequestOptions} from './http-request-class-base.types';
import HttpRequest from './http-request-class-base';

describe('Http request utility type', () => {
  describe('HttpRequest', () => {
    test('Constructor not throw', () => {
      const constructorParameters: IHttpRequestOptions = {
        url: 'http://some.url/',
      };
      expect(() => new HttpRequest(constructorParameters)).not.toThrow();
    });
  });
});
