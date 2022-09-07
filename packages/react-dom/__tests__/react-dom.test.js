const ReactDOM = require('..')
const React = require('../../react')

describe('react-dom', () => {
  test('hello world', function () {
    const root = document.createElement('root')

    const element = React.createElement('h1', {}, 'hello, world')

    ReactDOM.render(element, root)

    expect(root.innerHTML).toBe('<h1>hello, world</h1>')
  });
})
