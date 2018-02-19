# Redux和服务器通信

React和Redux都是靠数据驱动的，在现实中，应用的数据都是存放在数据库的，通过服务器API暴露出来，网页要获得数据就需要与服务器进行通信。

下面会介绍两种通信方式(重点是Redux与服务器的通信):

- React组件访问服务器的方式
- Redux架构下访问服务器的方式

## React组件访问服务器

支持网络访问的JavaScript库，最传统的肯定是用JQuery的$.ajax。但是目前的趋势是在React中使用浏览器原生支持的fetch函数来访问网络资源，fetch函数返回的结果是一个Promise对象，Promise能够使得异步代码更加简介和清晰。

对于不支持的fetch的浏览器，可以使用 [fetch的polyfill](https://github.com/github/fetch) 来实现。

接下来做一个能展示某个城市天气的React组件。


由于中国天气网的API不支持跨域访问，所以我们需要通过代理(Proxy)。

在weather_react应用根目录下的package.json中添加一行:

```shell
  "proxy": "http://www.weather.com.cn/",
```

这一配置告诉react_weather应用，当接收到不是请求本地资源的请求时，把这个请求的协议和域名替换为http://www.weather.com.cn/  并转发出去，并将收到的结果返回给浏览器。

```JSX
import React from 'react';

const cityId = 101270107; // 成都郫县

class Weather extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {weather: null};
    }

    componentDidMount() {
        const apiUrl = `/data/cityinfo/${cityId}.html`;
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status' + response.status);
            }
            response.json().then((responseJson) => {
                this.setState({weather: responseJson.weatherinfo});
            }).catch((error) => {
                this.setState({weather: null});
            });
        }).catch((error) => {
            this.setState({weather: null});
        });
    }

    render() {
        if (!this.state.weather) {
            return <div>暂时没有数据</div>;
        }

        const {city, weather, temp1, temp2} = this.state.weather;
        return (
            <div>
                {city} {weather} 最低温 {temp1} 最高温 {temp2}
            </div>
        );
    }
}

export default Weather;

```
 
## Redux访问服务器

使用Redux访问服务器，同样是要解决异步的问题。

Redux异步操作的方法:

- [redux-thunk](https://github.com/gaearon/redux-thunk)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- ...

如果应用只有一个简单的API请求，则应该考虑使用 redux-thunk，若应用有大量的API请求，而且请求直接还存在复杂的依赖关系，则需要考虑使用redux-saga或者其他库。

这里我们介绍简单的 redux-thunk 中间件。

### redux-thunk 中间件

在Redux的架构下，一个action通过dispatch派发出去，在调用reducer函数之前，会先经过一个中间件，这里就是产生异步操作的地方。

在Store中引入 redux-thunk。

```javascript
import thunkMiddleware from 'redux-thunk';
const middlewares = [thunkMiddleware];
```

### 异步action对象

'异步action对象'不是一个普通的JavaScript对象，而是一个函数。

redux-thunk的工作就是检查action对象是不是函数，如果不是函数，则放行。若发现action是函数，则执行这个函数，并把state的dispatch和getState作为参数传入到函数中，处理过程到此为止，不会让这个异步的action派发到reducer函数。

### 异步操作的模式

一个异步操作至少包含三个action类型:

- 异步操作开始的action
- 异步操作成功的action
- 异步操作失败的action

当这三种类型的action被派发后，组件会进入不同的三种状态:

- 异步操作正在进行
- 异步操作已经完成
- 异步操作已经失败

异步action构造函数的代码的模板:

```javascript
export const sampleAsyncAction = () => {
    return (dispatch, getState) => {
    // 在这里可以进行异步操作，并在合适的时候调用dispatch派发出新的action
    }
}
```