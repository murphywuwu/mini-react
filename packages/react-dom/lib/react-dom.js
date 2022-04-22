function renderDOM(element) {
  const { type, props } = element

  if (typeof type == 'function') {
    const element = type(props)
    return renderDOM(element)
  }
  const children = props.children

  // 第一步创建dom
  const node = document.createElement(type)

  // 第二步为dom添加属性
  Object.keys(props).forEach((key) => {
    if (key == 'children') return
    let val = props[key]

    // 支持style属性
    if (key == 'style') {
      let str = ''
      Object.keys(val).forEach((key) => {
        str += `${key}: ${val[key]};`
      })
      val = str
    }

    node.setAttribute(key, val)
  })

  // 第三步为dom添加children
  if (typeof children == 'string') {
    const childNode = document.createTextNode(children)

    node.appendChild(childNode)
  }

  // 支持复杂虚拟DOM树
  if (Array.isArray(children)) {
    children.forEach((element) => {
      let childNode
      if (typeof element == 'string') {
        childNode = document.createTextNode(element)
      } else {
        childNode = renderDOM(element)
      }
      node.appendChild(childNode)
    })
  }

  return node
}

function render(element, root) {
  const node = renderDOM(element)

  // 最后，在root中插入dom
  root.appendChild(node)
}

module.exports = {
  render,
}
