import React from 'react'
import Checkbox from 'nd-rc-checkbox'
import 'nd-rc-checkbox/assets/index.scss'

export default class extends React.Component {

  handleChange (value, e) {
    console.log(e)
    console.log(value)
  }

  render () {
    const checked = true
    const disable = true
    return (
      <div>
        <Checkbox checked={checked} disable={disable} onChange={this.handleChange}/>
        <Checkbox checked={checked} type='circle' onChange={this.handleChange}/>
      </div>
    )
  }
}
