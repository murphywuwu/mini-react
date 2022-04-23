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
    })

    test('list', function () {
      const result = React.createElement(
        'ul',
        {
          style: {
            color: 'white',
          },
        },
        React.createElement('li', { style: { background: 'blue' } }, '1'),
        React.createElement('li', { style: { background: 'pink' } }, '2'),
        React.createElement('li', { style: { background: 'black' } }, '3'),
      )

      expect(result).toEqual({
        type: 'ul',
        props: {
          children: [
            {
              type: 'li',
              props: {
                children: '1',
                style: {
                  background: 'blue',
                },
              },
            },
            {
              type: 'li',
              props: {
                children: '2',
                style: {
                  background: 'pink',
                },
              },
            },
            {
              type: 'li',
              props: {
                children: '3',
                style: {
                  background: 'black',
                },
              },
            },
          ],
          style: {
            color: 'white',
          },
        },
      })
    })

    test('support function component', function () {
      function Welcome(props) {
        return React.createElement('h1', null, 'hello, ', props.name)
      }

      const element = React.createElement(Welcome, { name: 'world' })

      expect(typeof element.type).toBe('function')
      expect(element.props).toEqual({ name: 'world' })

      const fn = element.type
      expect(fn(element.props)).toEqual({
        type: 'h1',
        props: {
          children: ['hello, ', 'world'],
        },
      })
    })
  })
})
