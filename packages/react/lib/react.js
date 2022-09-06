module.exports = {
  createElement: function (type, props, children) {
 
    return {
      type,
      props: {
        children,
        ...props,
      },
    }
  },
}
