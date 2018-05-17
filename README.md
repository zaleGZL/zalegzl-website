# 博客前台

项目地址: [https://github.com/zaleGZL/zalegzl-website](https://github.com/zaleGZL/zalegzl-website)

如果你觉得项目不错的话，欢迎点击右上角 'star' 支持下，万分感谢! ~\(≧▽≦)/~

## 前言

以前我是用 hexo + next 来搭建自己的博客，但最近学习了 React 后，深深地被它的组件化开发思想所吸引，刚好寒假放假有时间，所以我就用 React 搭建了一个自己的博客。React 实际上只是对应 MVC 中的视图层，要想搭建一个完整的应用，仅有 React 是不够的，我们还需要其它的库或框架，例如用来管理数据的 redux，用于实现前端路由的 react-router 等等。

## 技术栈

### 前端

- react
- axios: 异步请求
- react-router-dom: 前端路由
- redux: 管理整个应用数据
- redux-thunk: redux的中间件，多用于处理异步action
- styled-components: CSS in JS 的一种，使得能够在JS中写原生的CSS

注明: 博客前端页面没有使用其它基于 React 的 CSS 框架，主要还是想加强自己写 CSS 能力。

### 后端

- koa

博客的后端是使用 Node.js 开发的，是基于 koa 并采用了 Restful API 架构实现的，完美实现前后端的分离，后端只需要负责提供数据，而路由的跳转、数据渲染都是由前端实现。

项目地址: [https://github.com/zaleGZL/zalegzl-website-server](https://github.com/zaleGZL/zalegzl-website-server)

## 实现的功能

- [x] 博客首页列表展示
- [x] 博客内容markdown
- [x] 博客内容的目录
- [x] 博客的分类和标签
- [x] 返回顶部
- [x] 响应式
- [x] 关于页面(目前用于放简历，本人大三，求实习中...)

## TODO

- [ ] 分类页面
- [ ] 标签页面
- [ ] markdown代码高亮
- [ ] 美化页面的样式

## 博客预览

#### 首页

![blog_home](http://p3ek8rd7p.bkt.clouddn.com/blog_home.jpg)

#### 博客详情页

![http://p3ek8rd7p.bkt.clouddn.com/blog_page.jpg](http://p3ek8rd7p.bkt.clouddn.com/blog_page.jpg)


## 项目总结

接下来我大致介绍一下我在做博客项目时的一些体会和感悟。

### React 仅仅是一个视图层

在使用 React 之后，我发现 React 它本身做的事情非常简单，它仅仅只是一个视图层的一个框架，它能够让你使用 JSX 语法来写HTML，而且它这种基于组件化的开发方式非常新颖，使得组件具备高可复用性。当在多人协作构建应用时，我们每个人只需要负责一个个小的组件，同时我们也要尽量降低组件与组件的耦合性，增大组件的内聚性，最终这一个个组件就能够构建出一个大型应用。

### 前端路由

前端发展非常快速，总是会出现新的东西，以前在使用 express 搭建后端应用，那时候我知道有后端路由，就是请求的 URL 路径来返回不同的内容，返回不同的页面。而当我第一次听说前端路由时，我一开始以为它是一个新的东西，其实不然，它仅仅是把后端的那一套搬过来了而已。在前端实现了路由，可以使得当页面的 URL 刷新时，不会发起该 URL 请求，而是根据不同的 URL 渲染不同的组件。

```JavaScript
<Switch>
  <Route exact path="/" component={BlogList} />
  <Route exact path="/blogs" component={BlogList} />
  <Route path="/blogs/:blogId" component={Blog} />
  <Route path="/tags" component={OnDevelopingContent} />
  <Route path="/categories" component={OnDevelopingContent} />
  <Route path="/about" component={ResumeContent} />
  <Route component={NotFoundContent} />
</Switch>
```

上面的代码就是我的博客应用最顶层的路由组件的部分代码，这里是使用 [react-router](https://github.com/ReactTraining/react-router)，并且根据不同的路由来渲染不同的组件。

### 如何管理应用数据

React 中的 `state` 其实就是来存放应用数据的，并且能够传递给子组件，在构建一个小型应用时，`state` 的确够用，但是在构建大型应用时就要好好考虑一下如何管理应用数据了。

`state` 其实存在以下几个问题:

- 父组件若要将数据传递给孙组件或者更后代的组件，就需要所有中间组件的帮助帮忙传递，否则就需要用 React 中的 `context API` 来实现跨组件传递数据。

- 子组件的数据无法传递给父组件或者更顶层的组件。

- 应用的数据存放地过于分散。

而 Redux 的出现就解决了以上的问题，在 Redux 中只存在一个唯一的全局 `store`，整个应用的数据都存放在这里，任何组件都可以能够从 `store` 中获得自己组件需要用到的数据，并且能够通过派发 `action` 来改变 `store`，`store` 的改变会使得相应组件被更新，组件也会收到更新后的数据。其实 Redux 就是使用 `Context API` 实现的，

```Javascript
const mapStateToProps = state => ({
  blogCount: state.profile.blogCount,
  tagCount: state.profile.tagCount,
  categoryCount: state.profile.categoryCount
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestGetProfileInfo
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)
```

从代码可以看出，`ProfileCard` 从 `store` 获取了 `profile` 对象的 `blogCount`、`tagCount`、`categoryCount` 和一个 `requestGetProfileInfo` 函数，`requestGetProfileInfo` 其实就是用来改变 `store` 的。`connect` 函数是 [react-redux](https://github.com/reactjs/react-redux) 的一个方法，用来连接 react 和 redux，调用该函数实际上返回一个高阶组件，并且内部是做了很多的性能优化(主要在 `shouldcomponentupdate` 函数里)。

### CSS 应该怎么写

前端发展的初期，一开始大家都提倡内容与样式分离，其实就是将 HTML 与 CSS 分开写，在 HTML 中引用 CSS 资源。

但是随着前端的发展，组件化开发越来被认可，似乎是一种趋势。但是它却与传统的内容与样式分离相违背。在组件化开发方式中，我们都提倡组件内聚性，将与该组件相关的 HTML、CSS、JavaScript 写在一起，在我看来，这是组件化开发最适合的写法。

在 React 写 CSS 其实有很多种选择，各有各的优点吧，萝卜青菜，各有所爱嘛，但让我眼前一亮的却是 [styled-components](https://github.com/styled-components/styled-components) 这个库，它其实也是 CSS in JS 的一种。

#### 组件中的内联样式

```Javascript
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

这其实跟在 HTML 中写内联样式时一样的，我觉得假如一个组件只需要修改某几个样式，是完全可以采用这个写法，但是若要写很多样式，其实是不适合的。

#### 外部样式

> reboot.css

```CSS
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0 0 100px;
    padding-top: 50px;
}

a {
    text-decoration: none;
    cursor: pointer;
}
```

> index.js

```JavaScript
import './reboot.css'
```

当加载页面的时候，在外面样式表中就能够找到它。

![react_import_css](http://p3ek8rd7p.bkt.clouddn.com/react_import_css.jpg)

但这样写会存在许多问题:

- 命名容易冲突
- 组件独立性较差
- 无法按需加载

#### CSS in JS

我个人比较喜欢 [styled-components](https://github.com/styled-components/styled-components)，先来看看官方的例子。

```JavaScript
// 创建一个Title组件并且它会渲染 h1 标签，并且拥有以下的样式
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// 创建一个Wrapper组件并且它会渲染 section 标签，并且拥有以下样式
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// 组件渲染
render(
  <Wrapper>
    <Title>
      Hello World, this is my first styled component!
    </Title>
  </Wrapper>
);
```

`styled-components` 的核心思想是将样式与相应的组件绑定到一起，通过计算 CSS 样式内容生成内容哈希值，并且将该值作为该组件 className 的值，这完美地解决了命名冲突问题。

当然 `styled-components` 的强大之处不止于此，它还能够实现 CSS 规则的继承、扩展、根据父组件传递的 props 动态计算样式等等。

CSS in JS 似乎是一种全新的选择，我个人非常喜欢这种写法。






