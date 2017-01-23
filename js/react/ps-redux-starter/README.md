## things i learned on this course

- [component creation methods & when to use them](#component-creation-methods--when-to-use-them)
- [container vs presentational components](#container-vs-presentational-components)
redux
- [key terms (store, actions & reducers)]()
- [Provider]()
- [connect]()
- [mapStateToProps]()
- [mapDispatchToProps]()
- [data flow]()


----

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

the store should be created at the entry point for the app like this:

```js
import { createStore } from 'redux'
const store = createStore(reducer)
// or
import { createStore, combineReducers } from 'redux'
const store = createStore(combineReducers(reducers))
```

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
      return [
        ...state,
        Object.assign({}, action.data)
      ]
    // ...
  }
}
```

----

### Provider

the entire app must be wrapped in react-redux's `Provider` component, passing the store as a prop to all components.

```js
<Provider store={this.props.store}>
  <App />
</Provider>
```

----

### connect

each container component must be wrapped in react-redux's `connect` function. it takes 2 optional arguments - the [`mapStateToProps`](#mapStateToProps) and [`mapDispatchToProps`](#mapDispatchToProps) callbacks which must be defined beforehand. connect returns a function, and that function then takes the component as an argument.

```js
class Container extends React.Component {
  // ...
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
```

----

### mapStateToProps

this function determines the state you want to expose to the container component.

```js
function mapStateToProps(state){
  return { data: state }
}
// inside component use this.props.data

// or restrict the parts of the state to expose
function mapStateToProps(state){
  return {
    name: state.name,
    address: state.address    
  }
}
// inside component use this.props.name, this.props.address
```

----

### mapDispatchToProps

this function determines the actions you want to expose to the container component. you can use redux's `bindActionCreators` function to

```js
import * as actions from './actions'
// ...
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
// inside component use this.props.actions.actionName
```

----

### data flow
