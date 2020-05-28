webpackJsonp([33],{

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navBar = __webpack_require__(26);

var _navBar2 = _interopRequireDefault(_navBar);

var _icon = __webpack_require__(23);

var _icon2 = _interopRequireDefault(_icon);

var _getPrototypeOf = __webpack_require__(58);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(27);

__webpack_require__(24);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antdMobile = __webpack_require__(59);

__webpack_require__(25);

__webpack_require__(1096);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AirTicket = function (_React$Component) {
  (0, _inherits3.default)(AirTicket, _React$Component);

  function AirTicket(props) {
    (0, _classCallCheck3.default)(this, AirTicket);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AirTicket.__proto__ || (0, _getPrototypeOf2.default)(AirTicket)).call(this, props));

    _this.goBack = function () {
      //返回上一页
      window.api.closeFrame();
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(AirTicket, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // const { data } = this.state.data;
      return _react2.default.createElement(
        "div",
        { className: "airTicket" },
        _react2.default.createElement(
          _navBar2.default,
          {
            mode: "light",
            icon: _react2.default.createElement(_icon2.default, { type: "left", color: "#333333" }),
            onLeftClick: function onLeftClick() {
              return _this2.goBack();
            },
            style: {
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 1,
              fontSize: "18px",
              color: "#333333"
            }
          },
          "\u4E70\u673A\u7968"
        ),
        _react2.default.createElement(
          "div",
          { className: "content" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("img", { src: __webpack_require__(572), alt: "" }),
            _react2.default.createElement(
              "div",
              { className: "hint" },
              "\u6B64\u529F\u80FD\u6B63\u5728\u5EFA\u8BBE\u4E2D",
              _react2.default.createElement(
                "p",
                null,
                "\u656C\u8BF7\u671F\u5F85\uFF01"
              )
            )
          )
        )
      );
    }
  }]);
  return AirTicket;
}(_react2.default.Component);

AirTicket.displayName = "AirTicket";
AirTicket.propTypes = {};
AirTicket.defaultProps = {};
exports.default = AirTicket;


_reactDom2.default.render(_react2.default.createElement(AirTicket, null), document.getElementById("airTicket"));

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(577);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(577, function() {
			var newContent = __webpack_require__(577);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  font-family: \"PingFangSC-Regular\";\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ndiv {\n  box-sizing: border-box; }\n\n.clearfloat:after {\n  display: block;\n  clear: both;\n  content: \"\";\n  visibility: hidden;\n  height: 0; }\n\n.clearfloat {\n  zoom: 1; }\n", ""]);

// exports


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-navbar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 45px;\n  background-color: #108ee9;\n  color: #fff; }\n\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.am-navbar-left {\n  padding-left: 15px;\n  font-size: 16px; }\n\n.am-navbar-left-icon {\n  margin-right: 5px;\n  display: inherit; }\n\n.am-navbar-title {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-size: 18px;\n  white-space: nowrap; }\n\n.am-navbar-right {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  font-size: 16px;\n  margin-right: 15px; }\n\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9; }\n\n.am-navbar-light .am-navbar-title {\n  color: #000; }\n", ""]);

// exports


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(12, function() {
			var newContent = __webpack_require__(12);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var NavBar = function (_React$Component) {
    (0, _inherits3['default'])(NavBar, _React$Component);

    function NavBar() {
        (0, _classCallCheck3['default'])(this, NavBar);
        return (0, _possibleConstructorReturn3['default'])(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    (0, _createClass3['default'])(NavBar, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                mode = _a.mode,
                icon = _a.icon,
                onLeftClick = _a.onLeftClick,
                leftContent = _a.leftContent,
                rightContent = _a.rightContent,
                restProps = __rest(_a, ["prefixCls", "className", "children", "mode", "icon", "onLeftClick", "leftContent", "rightContent"]);
            return React.createElement(
                'div',
                (0, _extends3['default'])({}, restProps, { className: (0, _classnames2['default'])(className, prefixCls, prefixCls + '-' + mode) }),
                React.createElement(
                    'div',
                    { className: prefixCls + '-left', role: 'button', onClick: onLeftClick },
                    icon ?
                    // tslint:disable-next-line:jsx-no-multiline-js
                    React.createElement(
                        'span',
                        { className: prefixCls + '-left-icon', 'aria-hidden': 'true' },
                        icon
                    ) : null,
                    leftContent
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-title' },
                    children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-right' },
                    rightContent
                )
            );
        }
    }]);
    return NavBar;
}(React.Component);

exports['default'] = NavBar;

NavBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    onLeftClick: function onLeftClick() {}
};
module.exports = exports['default'];

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

__webpack_require__(28);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(13, function() {
			var newContent = __webpack_require__(13);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".airTicket {\n  width: 100%;\n  padding-top: 2.13333rem; }\n\n.header {\n  width: 100%;\n  height: 1.87733rem;\n  position: relative;\n  font-size: 17px;\n  line-height: 44px;\n  color: #444d54;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: bolder;\n  background: rgba(255, 255, 255, 0.82); }\n  .header h1 {\n    width: 100%;\n    text-align: center;\n    display: inline-block; }\n  .header img {\n    display: inline-block;\n    height: 24px;\n    position: absolute;\n    top: 10px;\n    left: 10px; }\n\n.content {\n  text-align: center;\n  padding: 2.38933rem 1.62133rem 0;\n  font-size: 0.59733rem;\n  color: #909090; }\n  .content img {\n    width: 4.26667rem;\n    height: 2.56rem; }\n  .content .hint {\n    font-size: 0.68267rem;\n    margin: 1.36533rem;\n    text-align: center; }\n    .content .hint p {\n      margin: 4px 0; }\n  .content .placeholder {\n    margin-top: 3.54133rem;\n    height: 1px;\n    width: 12.8rem;\n    background: #E9E9E9; }\n  .content .feature {\n    text-align: left; }\n    .content .feature .title {\n      margin: 0.68267rem 0; }\n    .content .feature p {\n      line-height: 20px; }\n    .content .feature .content2 {\n      margin-top: 10px; }\n\n.am-navbar-light .am-navbar-title {\n  color: #444d54;\n  font-size: 17px; }\n", ""]);

// exports


/***/ })

},[1095]);