'use strict'

const React = require('..')

describe('react', () => {
  describe('createElement', function () {
    test('hello world', function () {
      const result = React.createElement('h1', {}, 'hello, world')

      expect(result).toEqual({
        props: {
          children: 'hello, world',
        },
        type: 'h1',
      })
    });
  });
});
