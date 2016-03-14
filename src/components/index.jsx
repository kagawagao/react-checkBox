import React, {PropTypes} from 'react'
import autobind from 'autobind-decorator'

export default class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.string,
    disable: PropTypes.bool
  };

  constructor (props) {
    super(props)
    const {checked = false, type = 'square', disable = false} = props
    this.state = {checked, type, disable}
  }

  componentWillReceiveProps (nextProps) {
    const {checked = false, disable = false} = nextProps
    this.setState({
      ...this.state, checked, disable
    })
  }

  @autobind
  _handleChange (e) {
    const {checked, disable} = this.state
    if (!disable) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(!checked, e)
      }
      this.setState({
        ...this.state, checked: !checked
      })
    }
  }
  render () {
    const {checked, type, disable} = this.state
    const classPrefix = 'nd-checkbox'
    let containerClassName = checked ? `${classPrefix}-container ${classPrefix}-container-checked` : `${classPrefix}-container`
    let checkClassName = checked ? `${classPrefix}-box ${classPrefix}-box-checked` : `${classPrefix}-box`
    if (type === 'circle') {
      containerClassName += ` ${classPrefix}-container-circle`
    }
    if (disable) {
      containerClassName += ` ${classPrefix}-container-disabled`
      checkClassName += ` ${classPrefix}-box-disabled`
    }
    return (
      <div className={classPrefix} onClick={this._handleChange}>
        <input className={`${classPrefix}-input`} type="checkbox"/>
        <div className={containerClassName}>
          <div className={checkClassName}></div>
        </div>
      </div>
    )
  }
}
