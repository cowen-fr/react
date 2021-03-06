## `React Router`

React Router主要用来定义页面之间的匹配关系。

#### 1、`<HashRouter />`和`<BrowserRouter />`：

二者都是React Router提供的路由顶层组件，不同之处在于`BrowserRouter`能更好的与服务器中的路由定义相匹配，而后者则是在路由直接加以`#`分割。

```jsx
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import About from './components/about.jsx';
import Vip from './components/vip.jsx';
const App=(props)=>{
    return (
        <BrowserRouter>
            <Route path="/about" component={About} />
            <Route path="/vip" component={Vip} />
        </BrowserRouter>
    )
}
```

#### 2、`<Switch />`

`Switch`也是一种路由组件，但是不同于顶层路由组件，`<Switch/>`必须外层包裹一个顶层路由组件。`<Switch/>`在匹配一个路由之后，它会忽略其他的路由。

如果没有匹配的路由，`<Switch />`则会返回null。

```jsx
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Index from './component/index.js';
import About from './component/about.js';
import Vip from './component/vip.js';
const App=(props)=>(
    <Router>
        <Switch>
            <Route path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/vip" component={Vip} />
        </Switch>
    </Router>
);
export default App;
```

> **Note：**在匹配`localhost:3000/`之后，我们访问其他路由`localhost:3000/about`和`localhost:3000/vip`时，只会渲染Index组件。

#### 2、`<Link />`和`<NavLink />`：

`React Router`提供了`<Link />`组件来作为跳转链接。

```jsx
import React from 'react';
import {Link} from 'react-router-dom';
const Index=(props)=>(
    <div className="wrap">
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="vip">VIP</Link></li>
        </ul>    
    </div>
);
export default Index;
```

`<NavLink />`也是提供了一种跳转链接，并且会给出一个页面的`current`样式。类似于`router`的路径匹配模式，`NavLink`也会匹配路径中的公共部分，为了解决该问题，我们可以使用`exact`参数。

```jsx
import React from 'react';
import {NavLink} from 'react-router-dom';
import About from './component/about.js';
import Vip from './component/vip.js';
<Switch>
    <Route exact path="/about" component={About} />
    <Route exact path="/vip" component={Vip} />
    <Route exact path="/" component={Index} />
</Switch>
```

#### 3、`exact`和`strict`：

`React Router`路由匹配的规则是根据url来匹配的，默认的情况下，如果url中含有公共部分的话，

```jsx
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
const App=(props)=>{
    return (
        <Router>
            <Route exact={true} path="/" component={Index} />
            <Route path="/about" component={About} />
        </Router>
    )
}
```

> **Note：**路由地址`localhost:3000/`和`localhost:3000/about`的公共部分包含了`localhost:/`，因此访问about页面时，也会加载Index组件。

`strict`字段用来严格匹配路由地址，严格到`/`都要正确匹配。

#### 4、404页面配置：

404页面用来匹配那些没有在定义路由列表中的路由地址。结合`<Switch />`可以实现404页面的配置。

```jsx
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Index from './component/index.js';
import About from './component/about.js';
import Vip from './component/vip.js';
import NotFound from './component/error.js';
const APP = (props) => {
  return (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/vip" component={Vip} />
            <Route component={NotFound} />
        </Switch>
    </Router>
  )
}
export default APP;
```

> **Note：**为什么会结合`<Switch />`，因为`<Switch />`是在匹配一个之后会忽视其他路由定义。

#### 5、`render`方法：

`render`用于Route的渲染，可以取代`component`属性的定义，返回可以是个组件也可以是jsx。

```jsx
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Index from './components/index.js';
const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={()=><Index />} />
            </Switch>
        </Router>
    )
}
```

#### 6、`Route Props`：

对于动态路由，我们可以使用参数传递来渲染对应的组件，参数的类型包括以下三种：

- `history`对象：

  可以向原生js一样执行前进、后退操作。

- `location`对象：

  可以获取`hash`、`search`参数。

- `match`对象：

  可以获取url中的参数`params`参数。

```jsx
<User path="/user/:id" />
this.props.match.params.id;//获取动态路径中的参数
this.props.location.search;//请求参数
this.props.history.push("/");//跳转操作
```

#### 7、`<Redirect />`：

`Redirect`用于路由的跳转，也可以用于组件内的跳转。

```jsx
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
class User extends Component{
    constructor(props){
        super(props)
    }
    render(){
        this.props.match.params.id=="001"?
        <Redirect to=`myprofile${this.props.match.params.id}` />
        :
        <div className="user-wrap">
            welcome
        </div>
    }
}
```

#### 8、`<withRouter />`：

对于一些无状态组件，高级组件`withRouter`可以将无状态组件进行包裹加工，使其变成含有router参数的组件。

```jsx
//父组件
import React from 'react';
import Vip from './component/vip.js';
import {BrowserRouter as Router} from 'react-router-dom';
const App = (props) => {
  return (
    <Router className="home-wrap">
    	<h1>首页</h1>
    	<Vip />	
    </Router>
  )
}

export default App;
//子组件
import React from 'react';
import {withRouter} from 'react-router';
const Vip = (props) => {

  return (
    <div>Vip</div>
  )
}
const WithRouter=withRouter(Vip);
export default WithRouter;
```

#### 9、`<Prompt />`：

`<Prompt />`使用在路由跳转时的用户确认，确定的话就会跳转至新的路由，否则就会保持原状。

```jsx
import React from 'react';
import {Link,NavLink,Prompt} from 'react-router-dom';
const Index=(props)=>(
	<div>
		<Prompt message="您确定离开？" />
		<h1>这里是首页</h1>
	</div>
);
export default Index;
```
