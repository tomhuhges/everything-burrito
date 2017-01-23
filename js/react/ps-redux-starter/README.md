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

### key terms (store, actions & reducers)

##### the store

redux (usually) has just one store that contains all of the app's data. when a container component wants to change the state, the store is notified, changes its state, and then lets components know what the new state is.

##### actions
these are the things that notify the store when a state-changing event happens.

they look like this:

```js
{
  type: ACTION_NAME,
  data: { info: 'some data'}
}
```

##### reducers
reducers are the things that change the store's state. they are functions that take the current state of the store and an action, and return the new state accordingly.

they look like this:

```js
function reducer(state = [], action) {
  switch(action.type) {
    case: ACTION_NAME:
      return [...state,
        Object.assign({}, action.data)
      ]
    // ...
  }
}
```
