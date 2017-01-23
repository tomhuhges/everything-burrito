### creating react components

- React.createClass()
- class extends React.Component
- stateless function

##### React.createClass()

largely deprecated

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

### when to use component creation method

use class when you need access to:  
- state
- refs
- lifecycle methods

use stateless functions:  
- for everything else

----

### container vs presentational components

containers = smart = stateful
presenters = dumb = stateless
