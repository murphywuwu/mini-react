module.exports = {
  createElement: function (type, props, ...params) {
    if (typeof type == 'function') {
      return {
        type,
        props: {
          ...props,
        },
      }
    }

    let children = params
    if (params.length == 1) {
      children = params[0]
    }

    return {
      type,
      props: {
        children,
        ...props,
      },
    }
  },
}
