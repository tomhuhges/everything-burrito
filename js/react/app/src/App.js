import React from 'react'
import './App.css'
import Header from './components/common/header'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
}