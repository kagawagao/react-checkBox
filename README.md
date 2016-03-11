# react-checkbox
React UI Component - checkbox

## Install
```bash
$ npm install nd-rc-checkbox --save
```

## Use
```jsx
import React from 'react'
import Checkbox from 'nd-rc-checkbox'
import 'nd-rc-checkbox/assets/index.scss'

export default class extends React.Component {

  handleChange (value, e) {
    // [Object]: the event object
    console.log(e)
    // [Boolean]: true as checked, false as not
    console.log(value)
  }

  render () {
    // [Boolean]: default checked
    const checked = true
    // [Boolean]: disabled, true as disabled, false as not
    const disable = true
    // [String]: type, 'square' or 'circle', 'square' as default,
    const type = 'circle'

    return (
      <div>
        <Checkbox disable={disable} onChange={this.handleChange}/>
        <Checkbox checked={checked} type={type} onChange={this.handleChange}/>
      </div>
    )
  }
}
```
