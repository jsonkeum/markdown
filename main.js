(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Marker = function Marker(props) {
  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "col-xs-12 col-sm-6 col-md-6" },
      React.createElement("textarea", { id: "textBox", onChange: props.handleChange, defaultValue: props.unmarked })
    ),
    React.createElement("div", { className: "col-xs-12 col-sm-6 col-md-6", id: "translation", dangerouslySetInnerHTML: { __html: props.markedUp } })
  );
};

exports.default = Marker;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Marker = require("./Marker.js");

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerContainer = function (_React$Component) {
  _inherits(MarkerContainer, _React$Component);

  function MarkerContainer(props) {
    _classCallCheck(this, MarkerContainer);

    var _this = _possibleConstructorReturn(this, (MarkerContainer.__proto__ || Object.getPrototypeOf(MarkerContainer)).call(this, props));

    _this.state = {
      unmarked: "Heading\n==\n\nSub-heading\n--\n \n### Add '#' for additional heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes: *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nUnordered list:\n  * Oranges\n  * Apples\n   * Grannysmith (note the extra space)\n\nNumbered list:\n  1. apples\n  2. oranges\n  3. pears\n\n [Link tags](https://www.google.com)",
      markedUp: marked("Heading\n==\n\nSub-heading\n--\n \n### Add '#' for additional heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes: *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nUnordered list:\n  * Oranges\n  * Apples\n   * Grannysmith (note the extra space)\n\nNumbered list:\n  1. apples\n  2. oranges\n  3. pears\n\n [Link tags](https://www.google.com)")
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(MarkerContainer, [{
    key: "handleChange",
    value: function handleChange() {
      this.setState({ markedUp: marked(document.getElementById('textBox').value, { sanitize: true }) });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_Marker2.default, { handleChange: this.handleChange, unmarked: this.state.unmarked, markedUp: this.state.markedUp });
    }
  }]);

  return MarkerContainer;
}(React.Component);

exports.default = MarkerContainer;
;

},{"./Marker.js":1}],3:[function(require,module,exports){
"use strict";

var _MarkerContainer = require("./components/MarkerContainer.js");

var _MarkerContainer2 = _interopRequireDefault(_MarkerContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_MarkerContainer2.default, null), document.getElementById('app'));

},{"./components/MarkerContainer.js":2}]},{},[3]);
