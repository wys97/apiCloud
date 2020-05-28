webpackJsonp([34],{

/***/ 1085:
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

__webpack_require__(1086);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WhiteStrip = function (_React$Component) {
  (0, _inherits3.default)(WhiteStrip, _React$Component);

  function WhiteStrip(props) {
    (0, _classCallCheck3.default)(this, WhiteStrip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WhiteStrip.__proto__ || (0, _getPrototypeOf2.default)(WhiteStrip)).call(this, props));

    _this.goBack = function () {
      //返回上一页
      window.api.closeFrame();
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(WhiteStrip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // const { data } = this.state.data;
      return _react2.default.createElement(
        "div",
        { className: "whiteStrip" },
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
          "\u767D\u6761\u4ECB\u7ECD"
        ),
        _react2.default.createElement(
          "div",
          { className: "content" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            "\u4EC0\u4E48\u662F\u6D77\u822A\u767D\u6761\uFF1F"
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u822A\u65C5\u5206\u671F\u662F\u4E00\u6B3E\u57FA\u4E8E\u4E2A\u4EBA\u865A\u62DF\u652F\u4ED8\u8D26\u6237\uFF0C\u96C6\u5B9E\u540D\u3001\u5145\u503C\u3001\u8F6C\u8D26\u3001\u652F\u4ED8\u3001\u63D0\u73B0\u3001\u6388\u4FE1\u3001\u653E\u6B3E\u3001\u767D\u6761\u652F\u4ED8\u4EE5\u53CA\u5176\u4ED6\u589E\u503C\u670D\u52A1\u4E3A\u4E00\u4F53\u7684\u591A\u529F\u80FD\u8D26\u6237\u3002"
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u3010\u501F\u6B3E\u989D\u5EA6\u7075\u6D3B\u3011\u6700\u4F4E1000\u5143\uFF0C\u6700\u9AD8300\u4E07"
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u3010\u6D41\u7A0B\u7B80\u6D01\u653E\u6B3E\u5FEB\u3011\u8BC4\u4F30\u6D41\u7A0B\u7CBE\u7B80\uFF0C\u4E0B\u6B3E\u901F\u5EA6\u5FEB"
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u3010\u667A\u80FD\u5B89\u5168\u3011\u652F\u6301\u6D3B\u4F53\u4EBA\u8138\u8BC6\u522B\uFF0C\u8BA4\u8BC1\u6D41\u7A0B\u66F4\u4FBF\u6377"
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u3010\u968F\u5FC3\u5206\u671F\u3011\u652F\u6301\u6700\u77ED1\u4E2A\u6708\uFF0C\u6700\u957F12\u4E2A\u6708\u968F\u5FC3\u5206\u671F"
          )
        )
      );
    }
  }]);
  return WhiteStrip;
}(_react2.default.Component);

WhiteStrip.displayName = "WhiteStrip";
WhiteStrip.propTypes = {};
WhiteStrip.defaultProps = {};
exports.default = WhiteStrip;


_reactDom2.default.render(_react2.default.createElement(WhiteStrip, null), document.getElementById("whiteStrip"));

/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(570);
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
		module.hot.accept(570, function() {
			var newContent = __webpack_require__(570);
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

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "body {\n  background: #F9FAF9; }\n\n.whiteStrip {\n  width: 100%;\n  padding-top: 2.13333rem;\n  background: #F9FAF9; }\n  .whiteStrip .content {\n    padding: 20px 15px; }\n    .whiteStrip .content p {\n      margin: 3px 0;\n      font-size: 14px;\n      line-height: 20px; }\n  .whiteStrip .header {\n    width: 100%;\n    height: 1.87733rem;\n    position: relative;\n    font-size: 17px;\n    line-height: 44px;\n    color: #444d54;\n    border-bottom: 1px solid #f0f0f0;\n    font-weight: bolder;\n    background: rgba(255, 255, 255, 0.82); }\n    .whiteStrip .header h1 {\n      width: 100%;\n      text-align: center;\n      display: inline-block; }\n    .whiteStrip .header img {\n      display: inline-block;\n      height: 24px;\n      position: absolute;\n      top: 10px;\n      left: 10px; }\n  .whiteStrip .title {\n    text-align: left;\n    font-size: 16px;\n    font-weight: bolder;\n    line-height: 20px;\n    color: #E25C58; }\n  .whiteStrip p:nth-of-type(1) {\n    width: 94%;\n    padding: 15px 0px; }\n  .whiteStrip p:nth-of-type(2) {\n    margin: 12px -6px; }\n  .whiteStrip p:nth-of-type(3) {\n    margin: 12px -6px; }\n  .whiteStrip p:nth-of-type(4) {\n    margin: 12px -6px; }\n  .whiteStrip p:nth-of-type(5) {\n    margin: 12px -6px; }\n", ""]);

// exports


/***/ })

},[1085]);