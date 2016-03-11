import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Checkbox from '../../src/index'

function shallowRender (Component, props = {}) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Component {...props}/>)
  return renderer.getRenderOutput()
}

function DomReder (Component, props = {}) {
  return TestUtils.renderIntoDocument(<Component {...props}/>)
}
describe('Shallow Rendering', function () {
  it('Checkbox should render as a <div>', function () {
    const checkbox = shallowRender(Checkbox)
    expect(checkbox.type).to.equal('div')
  })
  it('Checkbox input should render as a <input>', function () {
    const checkbox = shallowRender(Checkbox)
    expect(checkbox.props.children[0].type).to.equal('input')
  })
})

describe('Dom Rendering', function () {
  it('Click the checkbox, the state "checked" should reverse', function () {
    const checkbox = DomReder(Checkbox)
    const checked = checkbox.state.checked
    const click = TestUtils.scryRenderedDOMComponentsWithTag(checkbox, 'div')
    TestUtils.Simulate.click(click[0])
    expect(checkbox.state.checked).to.equal(!checked)
  })
})
