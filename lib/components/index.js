'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Checkbox = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox(props) {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).call(this, props));

    var _props$checked = props.checked;
    var checked = _props$checked === undefined ? false : _props$checked;
    var _props$type = props.type;
    var type = _props$type === undefined ? 'square' : _props$type;
    var _props$disable = props.disable;
    var disable = _props$disable === undefined ? false : _props$disable;

    _this.state = { checked: checked, type: type, disable: disable };
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$checked = nextProps.checked;
      var checked = _nextProps$checked === undefined ? false : _nextProps$checked;
      var _nextProps$disable = nextProps.disable;
      var disable = _nextProps$disable === undefined ? false : _nextProps$disable;

      this.setState((0, _extends3.default)({}, this.state, { checked: checked, disable: disable
      }));
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(e) {
      var _state = this.state;
      var checked = _state.checked;
      var disable = _state.disable;

      if (!disable) {
        if (typeof this.props.onChange === 'function') {
          this.props.onChange(!checked, e);
        }
        this.setState((0, _extends3.default)({}, this.state, { checked: !checked
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state;
      var checked = _state2.checked;
      var type = _state2.type;
      var disable = _state2.disable;

      var classPrefix = 'nd-checkbox';
      var containerClassName = checked ? classPrefix + '-container ' + classPrefix + '-container-checked' : classPrefix + '-container';
      var checkClassName = checked ? classPrefix + '-box ' + classPrefix + '-box-checked' : classPrefix + '-box';
      if (type === 'circle') {
        containerClassName += ' ' + classPrefix + '-container-circle';
      }
      if (disable) {
        containerClassName += ' ' + classPrefix + '-container-disabled';
        checkClassName += ' ' + classPrefix + '-box-disabled';
      }
      return _react2.default.createElement(
        'div',
        { className: classPrefix, onClick: this._handleChange },
        _react2.default.createElement('input', { className: classPrefix + '-input', type: 'checkbox' }),
        _react2.default.createElement(
          'div',
          { className: containerClassName },
          _react2.default.createElement('div', { className: checkClassName })
        )
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component), _class2.propTypes = {
  checked: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  type: _react.PropTypes.string,
  disable: _react.PropTypes.bool
}, _temp), (_applyDecoratedDescriptor(_class.prototype, '_handleChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_handleChange'), _class.prototype)), _class);
exports.default = Checkbox;
module.exports = exports['default'];