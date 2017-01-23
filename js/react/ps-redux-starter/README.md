## things i learned on this course

- [component creation methods & when to use them](#component-creation-methods--when-to-use-them)
- [container vs presentational components](#container-vs-presentational-components)

### component creation methods & when to use them

- React.createClass() (largely deprecated)
- class extends React.Component
- stateless function

| class | stateless function |
|---|---|
|when you need access to: | everywhere else |
| - state |   |
| - refs  |   |
| - lifecycle methods |   |

##### React.createClass()

```js
var Welcome = React.createClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

##### class extends React.Component

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

##### stateless function

```js
const Welcome = (props) =>
  <h1>Hello, {props.name}</h1>;
```

----

### container vs presentational components

containers = smart = stateful  
presenters = dumb = stateless

----

## redux

###
