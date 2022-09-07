function render(element, root) {
  const { type, props } = element
  const children = props.children

  // 第一步创建dom
  const node = document.createElement(type)

  // 第二步为dom添加children
  if (typeof children == 'string') {
    // 创建节点
    const childNode = document.createTextNode(children)
    
    // 插入节点
    node.appendChild(childNode)
  }

  // 第三步在root中插入dom
  root.appendChild(node)
}

exports.render = render