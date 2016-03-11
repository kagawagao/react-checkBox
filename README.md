# react-checkbox
[![Build Status](https://travis-ci.org/kagawagao/react-checkbox.svg?branch=master)](https://travis-ci.org/kagawagao/react-checkbox)
[![Coverage Status](https://coveralls.io/repos/github/kagawagao/react-checkbox/badge.svg?branch=master)](https://coveralls.io/github/kagawagao/react-checkbox?branch=master)
[![npm](https://img.shields.io/npm/v/nd-rc-checkbox.svg)](https://npmjs.org/package/nd-rc-checkbox)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-checkbox/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-checkbox/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-checkbox/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-checkbox/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/kagawagao/react-checkbox/badges/code.svg)](https://www.bithound.io/github/kagawagao/react-checkbox)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-checkbox/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-checkbox/master/dependencies/npm)
[![bitHound Overall Score](https://www.bithound.io/github/kagawagao/react-checkbox/badges/score.svg)](https://www.bithound.io/github/kagawagao/react-checkbox)

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
    // [String]: type, 'square' or 'circle', 'square' as default
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
