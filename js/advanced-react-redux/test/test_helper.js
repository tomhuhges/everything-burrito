import jsdom from 'jsdom'
import jQuery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'

// add mock browser dom
global.document = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>')
global.window = global.document.defaultView
const $ = jQuery(global.window)

// build renderComponent helper
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  )
  return $(ReactDOM.findDOMNode(componentInstance))
}

// build simulation helper
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

// set up chai-jquery
chaiJquery(chai, chai.util, $)

export { renderComponent, expect }
