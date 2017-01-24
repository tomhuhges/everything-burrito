# things i learned on this course

*react*  
- [component creation methods & when to use them](#component-creation-methods--when-to-use-them)
- [container vs presentational components](#container-vs-presentational-components)
*redux*  
- [the store](#the-store)
- [actions](#actions)
- [reducers](#reducers)  
*react-redux*  
- [Provider](#Provider)
- [connect](#connect)
- [mapStateToProps](#mapStateToProps)
- [mapDispatchToProps](#mapDispatchToProps)
- [data flow](#data-flow)


----

# react

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

# redux

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

#react-redux

### Provider

the `Provider` component provides a way to make the redux store available as a prop to all components.

```js
<Provider store={this.props.store}>
  <App />
</Provider>
```

----

### connect

each container (stateful) component must be wrapped in react-redux's `connect` function. it takes 2 optional arguments - the [`mapStateToProps`](#mapStateToProps) and [`mapDispatchToProps`](#mapDispatchToProps) callbacks which must be defined beforehand. connect returns a function, and that function then takes the component as an argument.

```js
class Container extends React.Component {
  // ...
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)
```

----

### mapStateToProps

this function determines the state you want to expose to the container component. technically you could just return the entire state but in large apps this would kill performance. it's better to restrict to only the parts of the state that need exposing:

```js
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

this function determines the actions you want to expose to the container component. you can use redux's `bindActionCreators` function to inject dispatch functionality into each action:

```js
import { bindActionCreators } from 'redux'
import * as actions from './actions'
// ...
class Container extends React.Component { ... }
// ...
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
// inside component use this.props.actions.actionName
```

when using bindActionCreators, you can also use the shorthand of just passing an object of actions, where each action will automatically be run through bindActionCreators with dispatch functionality injected:

```js
import * as actions from './actions'
// ...
export default connect(mapStateToProps, actions)(Container)
// inside component use this.props.actions.actionName
```

----

### data flow

when an event happens (such as user input), the callback for the event will dispatch the relevant action from this.props.actions

the action will then send the action type and new data to the corresponding reducer.

the reducer takes the current state and the new data and updates the store with a new version of the state. the store then notifies all of the connected components that the state has changed.

if they need to re-render because of the state change, they will and the view will be updated.

----

###
