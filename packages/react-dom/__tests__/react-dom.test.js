const ReactDOM = require('..')
const React = require('../../react')

describe('react-dom', () => {
  describe('render', function () {
    test('hello world', function () {
      const root = document.createElement('root')

      const element = React.createElement('h1', {}, 'hello, world')

      ReactDOM.render(element, root)

      expect(root.innerHTML).toBe('<h1>hello, world</h1>')
    })

    test('list', function () {
      const root = document.createElement('root')
      const element = React.createElement(
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

      ReactDOM.render(element, root)
      expect(root.innerHTML).toBe(
        '<ul style="color: white;"><li style="background: blue;">1</li><li style="background: pink;">2</li><li style="background: black;">3</li></ul>',
      )
    })

    describe('support function component', function () {
      describe('simple', function () {
        test('with props', function () {
          const root = document.createElement('root')
          function Welcome(props) {
            return React.createElement('h1', null, 'hello, ', props.name)
          }
          const element = React.createElement(Welcome, { name: 'world' })

          ReactDOM.render(element, root)

          expect(root.innerHTML).toBe('<h1>hello, world</h1>')
        })

        test('withought props', function () {
          const root = document.createElement('root')
          function Welcome(props) {
            return React.createElement('h1', null, 'hello, ', props.name)
          }
          const element = React.createElement(Welcome)

          ReactDOM.render(element, root)

          expect(root.innerHTML).toBe('<h1>hello, </h1>')
        })
      })

      test('composite', function () {
        const root = document.createElement('root')

        function Welcome(props) {
          return React.createElement('h1', null, 'hello, ', props.name)
        }

        function App() {
          return React.createElement(
            'div',
            null,
            React.createElement(Welcome, {
              name: 'Sara',
            }),
            React.createElement(Welcome, {
              name: 'Cahal',
            }),
            React.createElement(Welcome, {
              name: 'Edite',
            }),
          )
        }

        const element = React.createElement(App, null)

        ReactDOM.render(element, root)
        expect(root.innerHTML).toBe(
          '<div><h1>hello, Sara</h1><h1>hello, Cahal</h1><h1>hello, Edite</h1></div>',
        )
      })
    })
  })
})
