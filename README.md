<h1 align="center">21天造一个react🐱</h1>

## ⭐️ 喜欢请 star

更多好文，请移步[轮子猫的博客](https://github.com/murphywuwu/blog)

## ⚙️ 为什么要造轮子

1. 你是否用了很久 react，依然只停留于会用 react 框架上
2. 你是否看了很多遍 react 源码解析的文章，对 react 的了解依然半知半解
3. 你是否在开发中，遇到 react 的问题，都不知如何下手分析，导致无法精准定位问题
4. 你是否看每次想要下定决心开始学习 react 源码时，看到它那数万行代码，心里就开始打退堂鼓，想着明日再说 🙊

明日复明日，明日何其多。蓦然回首，你依然停留在原地。

> 看百遍，不如做一遍

通过本系列文章的学习，

1. 你将学会打造一个相对完整的 react，从而让你对 react 的底层原理有更深入的了解
2. 你将学会使用 TDD 的方式编程

### 🚀 为什么是 TDD

> 如果你问我有什么方法可以让你的编码能力有极大的提升？🦄

那我一定推荐你去了解 TDD，很多人对 TDD 都有偏见，认为 TDD 太麻烦，增加了工作量，本来写业务代码就已经花费很多时间了，还要花时间去写测试代码，白给自己增加工作量。但事实上，我认为通过 TDD 的方式编程其实是更高效的。这是因为大部分人遇到一个需求，还没想清楚就开始动手(想一想面试时候的你遇到手写代码题是否是这样)，而不是使用以终为始的思维方式去解决问题。

1. 明确结果： 定义&理解问题
2. 拆解结果：拆解问题
3. 给出解决方案
   TDD 刚好是符合这种思维模式。先写测试代码，也就是先明确结果，明确该需求要达到的目标效果。接着，我们根据这个结果，去拆解任务。最后，编写实现代码，给出解决方案。这整个过程既高效又能让我们写出安全的代码。

学会使用 TDD 的方式编程，能帮助你使用健壮的代码去解决具体的问题~

现在我们开始吧，本系列文章从 0 开始循序渐进，从 hello，world 启程，带你一步一步实现一个工业级 react~🐯

## 📖 文章

- [ ] 【7 天造一个 react】第一天，react 实现指南：2 步，带你 say hello
- [ ] 【7 天造一个 react】第二天，支持渲染复杂虚拟 DOM 树
- [ ] 【7 天造一个 react】第三天，10+行代码，支持组件化编程
- [ ] 【7 天造一个 react】第四天，useState vs setState
- [ ] 【7 天造一个 react】第五天，useEffect 与生命周期
- [ ] 【7 天造一个 react】第六天，实现合成事件
- [ ] 【7 天造一个 react】第七天，性能优化全解

## 🔥 快速开始

通过 examples 目录下的项目，你可以快速的看到目前实现的 react 都可以做些什么。

```
// 切换到examples/hello-world目录
cd examples
cd hello-world

// 安装依赖
yarn install

// 启动
yarn start
```