## `React`核心概念

#### 1、`jsx`：

`jsx`标签语法既不是字符串也不是`HTML`，它是一个`JavaScript`的语法扩展。在`jsx`中，你可以在大括号内放置任何有效的`JavaScript`表达式。

```jsx
import React from 'react';
let Title=<div className="title">标题</div>;
let name="cowen";
let elem=<h1>Hello,{name}</h1>;
```

#### 2、组件 ：

组件的定义可以使用静态函数来定义，也可以使用ES6中的class来定义。

静态组件一般是个静态函数，通过传值`props`将参数附加到`props`对象上，可以通过属性取值的方法来获得值，当然，静态组件是没有生命周期的。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
function Header(props){
    return (
        <h1>这里是{props.name}</h1>
    )
}
ReactDOM.render(<Header name="cowen" />,document.getElementById("root"));
```

常规组件一般是继承于`React.Component`，通过`this.props`来获取属性值，有完整的声明周期函数。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Header extends Component {
    constructor(props){
        super(props);        
    }
    render(){
        return (
            <h1>这里是{this.props.name}</h1>
        )
    }
}
ReactDOM.render(<Header name="cowen" />,document.getElementById("root"));
```

#### 3、`props`：

组件无论通过class声明还是函数声明，都无法改变自身的`props`。父组件可以向子组件传递多个`props`值，当然，如果属性值很多的话，建议定义成对象，然后使用`...`操作符进行传递。

```jsx
import React,{ Component } from 'react';
let obj={
    name:"cowen",
    age:32
};
class Person extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="person-wrap">
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>                
            </div>
        )
    }
}
ReactDOM.render(<Person {...obj} />,document.getElementById("root"));
```

当然我们也可以使用`Component.defaultProps`设置默认的`props`值。

```jsx
import React, {Component} from 'react';
class Person extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>{this.props.name}</h1>
        )
    }
}
Person.defaultProps={
    name:"cowen"
}
export default Person;
```

#### 4、`state`：

#### 5、事件处理：

#### 6、生命周期：

组件的声明周期可分为三个状态：

- `Mounting`：已插入真实DOM

- `Updating`：正在被重新渲染

- `Unmounting`：已移出真实DOM

生命周期的方法有：

- `componentWillMount`：

  `componentWillMount`会在组件加载（render函数执行之前）之前执行。

- `componentDidMount`：

  `componentDidMount`会在组件第一次加载之后（render函数执行之后）执行。

- `componentWillReceiveProps`：

- `shouldComponentUpdate`：

- `componentWillUpdate`：

- `componentDidUpdate`：

- `componentWillUnmount`：

  组件在卸载的时候会加载`componentWillUnmount`生命周期函数，常用于事件回收和清除定时器等。
