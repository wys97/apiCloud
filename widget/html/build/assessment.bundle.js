webpackJsonp([26],{

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _activityIndicator = __webpack_require__(330);

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

var _defineProperty2 = __webpack_require__(11);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _navBar = __webpack_require__(26);

var _navBar2 = _interopRequireDefault(_navBar);

var _icon = __webpack_require__(23);

var _icon2 = _interopRequireDefault(_icon);

var _toast = __webpack_require__(46);

var _toast2 = _interopRequireDefault(_toast);

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

__webpack_require__(331);

__webpack_require__(27);

__webpack_require__(24);

__webpack_require__(47);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antdMobile = __webpack_require__(59);

var _linkConfig = __webpack_require__(32);

__webpack_require__(25);

__webpack_require__(1098);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Assessment = function (_React$Component) {
  (0, _inherits3.default)(Assessment, _React$Component);

  function Assessment(props) {
    (0, _classCallCheck3.default)(this, Assessment);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Assessment.__proto__ || (0, _getPrototypeOf2.default)(Assessment)).call(this, props));

    _this.ajaxApi = function () {
      var that = _this;
      if (window.api) {
        window.api.ajax({
          url: (0, _linkConfig.getLink)() + (0, _linkConfig.getApi)("creditAssessment"),
          method: 'post',
          dataType: 'json',
          headers: {
            'Content-Type': 'application/json',
            'appToken': window.localStorage.Apptoken
          }

        }, function (res, err) {
          if (res.code === '200') {
            if (res.data.length == 0) {
              _this.setState({
                displayModule: 3,
                animating: false
              });
            } else if (res.data.length >= 1) {

              _this.setState({
                displayModule: 2,
                data: res.data,
                animating: false
              });

              // } else {
              //   this.setState({
              //     displayModule: 2,
              //     data: res.data,
              //     animating: false
              //   })
            }
          } else {
            _toast2.default.info(err.body.message, 3);

            _this.setState({
              animating: false
            });
          }
        });
      }
    };

    _this.goBack = function () {
      //关闭pdf
      if (_this.state.closePDF) {
        var pdfReader = window.api.require('pdfReader');
        pdfReader.closePdfView();
        _this.setState({
          closePDF: false
        });
      } else {
        //返回上一页
        window.api.openFrame({
          url: './userInfo.html',
          name: 'userInfo',
          rect: {
            w: "auto",
            marginTop: window.api.safeArea.top,
            marginBottom: window.api.safeArea.bottom + 50
          },
          reload: true,
          pageParam: {
            from: 'securitySet'
          },

          useWKWebView: true,
          historyGestureEnabled: true
        });
        window.api.closeFrame();
      }
    };

    _this.showModalDetails = function (item) {
      var systemType = window.api.systemType;
      _this.setState({
        animating: true,
        closePDF: true
      });
      if (systemType == 'ios') {
        var titleTop = document.getElementsByClassName('assessment_title')[0].scrollTop;
        var offsetHeight = document.getElementsByClassName('assessment_title')[0].offsetHeight;
        var h = document.getElementsByClassName('assessment')[0];
        var top = document.body.clientHeight > 667 ? titleTop + offsetHeight + 44 : titleTop + offsetHeight + 20;
        _this.state.pdfReader.openPdfView({
          rect: {
            x: 0,
            y: Number(top),
            w: 'auto',
            h: 'auto'
          },
          path: (0, _linkConfig.getLink)() + item.url,
          fixed: true
        });
      } else {
        _this.state.pdfReader.open({
          hidden: {
            print: true,
            export: true,
            bookmark: true,
            email: true
          },
          path: (0, _linkConfig.getLink)() + item.url,
          showLoading: true
        });
      }
      setTimeout(function () {
        _this.setState({
          animating: false
        });
      }, 1500);
    };

    _this.state = {
      displayModule: 0, //显示的模块    1 一个合同时   2  两个合同或以上  3 没有合同      
      data: [], //请求的数据
      details: false, //是否显示详情
      item: {}, //详情数据
      animating: false,
      pdfReader: null,
      closePDF: false
    };
    return _this;
  }

  (0, _createClass3.default)(Assessment, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var that = this;
      window.apiready = function () {
        var pdfReader = window.api.require("pdfReader");
        that.setState({
          animating: true,
          pdfReader: pdfReader
        });
        that.ajaxApi();
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _ref;

      var _state = this.state,
          displayModule = _state.displayModule,
          data = _state.data,
          details = _state.details;


      var Modal1 = _react2.default.createElement(
        "div",
        { className: "modal1" },
        data.map(function (item, index) {
          return _react2.default.createElement("iframe", { key: index, src: item.url, className: "item",
            style: {
              width: window.screen.width,
              height: window.screen.height,
              padding: '30px 0 0'
            } });
        })
      );

      var Modal2 = _react2.default.createElement(
        "div",
        { className: "Modal2" },
        !details && data.map(function (item, index) {
          return _react2.default.createElement(
            "div",
            { key: index, onClick: function onClick() {
                return _this2.showModalDetails(item);
              } },
            _react2.default.createElement(
              "div",
              { className: "Modal2_item" },
              _react2.default.createElement(
                "div",
                { className: "item_title" },
                item.contract
              ),
              _react2.default.createElement(
                "div",
                { className: "time" },
                _react2.default.createElement(
                  "span",
                  null,
                  item.contractSignDate
                ),
                _react2.default.createElement(_icon2.default, { type: "right", color: "#D2D2D2" })
              )
            )
          );
        })
      );

      var m = _react2.default.createElement(
        "div",
        { className: "Modal2_details" },
        _react2.default.createElement(
          _navBar2.default,
          {
            mode: "light",
            icon: _react2.default.createElement(_icon2.default, { type: "left", color: "#333333" }),
            onLeftClick: function onLeftClick() {
              _this2.setState({ details: false });
            },
            style: {
              position: "fixed",
              top: 0,
              width: "100%",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 100,
              fontSize: "18px",
              color: "#333333"
            }
          },
          this.state.item.contract
        ),
        this.state.item.url && this.state.item.url != null ? _react2.default.createElement("iframe", { src: this.state.item.url,
          style: (_ref = {
            position: "fixed",
            top: 0,
            width: "100%",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 90
          }, (0, _defineProperty3.default)(_ref, "width", window.screen.width), (0, _defineProperty3.default)(_ref, "height", window.screen.height), (0, _defineProperty3.default)(_ref, "padding", '50px 0 0'), _ref)
        }) : _react2.default.createElement(
          "div",
          { className: "occupied" },
          _react2.default.createElement("img", { src: __webpack_require__(1099) }),
          _react2.default.createElement(
            "div",
            null,
            "\u5408\u540C\u6B63\u5728\u52AA\u529B\u8FC1\u79FB\u4E2D\uFF0C\u8BF7\u60A8\u7A0D\u540E\u518D\u8BD5......"
          )
        )
      );

      var Modal3 = _react2.default.createElement(
        "div",
        { className: "Modal3" },
        _react2.default.createElement(
          "div",
          null,
          "\u5408\u540C\u7B7E\u7F72\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u67E5\u770B\uFF01"
        )
      );

      return _react2.default.createElement(
        "div",
        { className: "assessment" },
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
              color: "#444D54",
              borderBottom: '1px solid #EEEEEE'
            },
            className: "assessment_title"
          },
          "\u6211\u7684\u5408\u540C"
        ),
        displayModule == 1 && Modal1,
        displayModule == 2 && Modal2,
        displayModule == 3 && Modal3,
        details && m,
        _react2.default.createElement(_activityIndicator2.default, { toast: true, animating: this.state.animating }),
        this.state.animating && _react2.default.createElement(
          "div",
          { className: "loader_wrap" },
          _react2.default.createElement("div", { className: "loader_img" }),
          _react2.default.createElement(
            "div",
            { className: "loader_text" },
            "\u52A0\u8F7D\u4E2D..."
          )
        )
      );
    }
  }]);
  return Assessment;
}(_react2.default.Component);

Assessment.displayName = "Assessment";
Assessment.propTypes = {};
Assessment.defaultProps = {};
exports.default = Assessment;


_reactDom2.default.render(_react2.default.createElement(Assessment, null), document.getElementById("assessment"));

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(578);
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
		module.hot.accept(578, function() {
			var newContent = __webpack_require__(578);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1099:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-activity-indicator {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  z-index: 99; }\n\n.am-activity-indicator-spinner {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2.125%20-1.875%2064%2064%22%3E%3Cpath%20fill%3D%22%23CCC%22%20d%3D%22M29.875-1.875c-17.673%200-32%2014.327-32%2032s14.327%2032%2032%2032%2032-14.327%2032-32-14.327-32-32-32zm0%2060.7c-15.85%200-28.7-12.85-28.7-28.7s12.85-28.7%2028.7-28.7%2028.7%2012.85%2028.7%2028.7-12.85%2028.7-28.7%2028.7z%22%2F%3E%3Cpath%20fill%3D%22%23108ee9%22%20d%3D%22M61.858%2030.34c.003-.102.008-.203.008-.305%200-11.43-5.996-21.452-15.01-27.113l-.013.026c-.24-.137-.515-.22-.81-.22-.912%200-1.65.738-1.65%201.65%200%20.654.384%201.215.937%201.482%207.963%205.1%2013.247%2014.017%2013.247%2024.176%200%20.147-.01.293-.01.44h.022c0%20.01-.004.02-.004.03%200%20.91.74%201.65%201.65%201.65s1.65-.74%201.65-1.65c0-.06-.012-.112-.018-.167z%22%2F%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  -webkit-animation: spinner-anime 1s linear infinite;\n  animation: spinner-anime 1s linear infinite; }\n\n.am-activity-indicator-tip {\n  font-size: 14px;\n  margin-left: 8px;\n  color: #000;\n  opacity: 0.4; }\n\n.am-activity-indicator.am-activity-indicator-toast {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n  z-index: 1999; }\n\n.am-activity-indicator.am-activity-indicator-toast .am-activity-indicator-spinner {\n  margin: 0; }\n\n.am-activity-indicator.am-activity-indicator-toast .am-activity-indicator-toast {\n  display: inline-block;\n  position: relative;\n  top: 4px; }\n\n.am-activity-indicator-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 15px 15px;\n  border-radius: 7px;\n  background-clip: padding-box;\n  color: #fff;\n  background-color: rgba(58, 58, 58, 0.9);\n  font-size: 15px;\n  line-height: 20px; }\n\n.am-activity-indicator-spinner-lg {\n  width: 32px;\n  height: 32px; }\n\n@-webkit-keyframes spinner-anime {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes spinner-anime {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);

// exports


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-toast {\n  position: fixed;\n  width: 100%;\n  z-index: 1999;\n  font-size: 14px;\n  text-align: center; }\n\n.am-toast > span {\n  max-width: 50%; }\n\n.am-toast.am-toast-mask {\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  -webkit-transform: translateZ(1px);\n  transform: translateZ(1px); }\n\n.am-toast.am-toast-nomask {\n  position: fixed;\n  max-width: 50%;\n  width: auto;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateZ(1px);\n  transform: translateZ(1px); }\n\n.am-toast.am-toast-nomask .am-toast-notice {\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  -ms-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%); }\n\n.am-toast-notice-content .am-toast-text {\n  min-width: 60px;\n  border-radius: 3px;\n  color: #fff;\n  background-color: rgba(58, 58, 58, 0.9);\n  line-height: 1.5;\n  padding: 9px 15px; }\n\n.am-toast-notice-content .am-toast-text.am-toast-text-icon {\n  border-radius: 5px;\n  padding: 15px 15px; }\n\n.am-toast-notice-content .am-toast-text.am-toast-text-icon .am-toast-text-info {\n  margin-top: 6px; }\n", ""]);

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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMenu = getMenu;
exports.getApi = getApi;
exports.getLink = getLink;
exports.getBanner = getBanner;
exports.ticketOffice = ticketOffice;
/**
 * 接口、链接变量文件
 * 
 */
function getMenu(menuName) {
    //H5跳转url
    var menuList = {
        "个人信息维护": "personalSettings/personalInformation.html",
        "还款": "repayment/repayment.html",
        "支用": "pay/index.html",
        "提额": "liftingAmount/index.html",
        "交易记录": "transactRecord/transaction-record.html",
        "公告列表": "msgCenter/msgCenter.html",
        "公告详情": "msgCenter/groups.html",
        "银行卡维护": "personalSettings/bankcardList.html",
        "修改支付密码": "personalSettings/verifyPassword.html",
        "忘记支付密码": "personalSettings/reset-creditMessage.html",
        "设置支付密码": "personalSettings/payment-password.html",
        "支付密码维护": "personalSettings/passwordSetting.html",
        "个人中心": "userInfo.html",
        "首页": "index.html"
    };
    if (String(menuList[menuName]).includes("/")) {
        return 'https://hnhk.jbhloan.com/cashLoan/' + menuList[menuName]; //测试
        // return 'https://hnhk-uat.jbhloan.com/cashLoan/' + menuList[menuName]         //预生产
        // return 'https://hkbt.jbhloan.com/cashLoan/' + menuList[menuName]         //生产
    } else {
        return menuList[menuName];
    }
};

function getApi(apiName) {
    //api 接口地址
    var apiList = {
        //授信接口
        "creditApply": "/app-api/credit/apply", //授信申请
        "getCustomerInfo": "/app-api/credit/getCustomerInfo", //绑卡前获取用户信息
        "ocrBankCard": "/app-api/credit/ocr-bank-card", //OCR识别银行卡
        "authFace": "/app-api/credit/auth-face", //人脸识别
        "ocrIdCard": "/app-api/credit/ocr-id-card", //OCR识别身份证
        "cardBin": "/app-api/credit/cardBin/", //根据银行卡号获取卡类型和发卡行
        "preSign": "/app-api/credit/pre-sign/", //获取绑卡验证码（支付中心-预签约）
        "supportBank": "/app-api/credit/support-bank", //支持银行列表（含 ICON）
        "bindBankCard": "/app-api/credit/bind-bank-card", //APP 绑卡接口
        //首页
        "noticeShowto": "/app-api/home/notice-showtop", //置顶栏公告
        "calculator": "/app-api/home/calculator", //费率计算器
        "updateToken": "/app-api/update-token", //刷新小贷token
        "limitDetail": "/app-api/home/limit-detail", //额度详情
        "limitDisplay": "/app-api/home/limit-display", //首页额度显示
        "overdueDetail": "/app-api/home/overdue-detail", //客户逾期信息查询
        //积分、用户信息
        "checkStatus": "/app-api/points/check-status", //用户信息和签到状态查询
        "areaInfo": "/app-api/points/area-info", //地区信息
        "versionCheck": "/app-api/points/version/check", //检查新版本
        "contacInfoList": "/app-api/points/contact_info/list", //常用联系人-列表
        "contacInfoSave": "/app-api/points/contact_info/save", //常用联系人-新增
        "contacInfoSaveBatch": "/app-api/points/contact_info/save_batch", //常用联系人-批量新增
        "contacInfoUpdate": "/app-api/points/contact_info/update", //常用联系人-更新
        "contacInfoDelete": "/app-api/points/contact_info/delete/", //常用联系人-删除
        "contacInfoAuthStatus": "/app-api/points/contact_info/auth_status", //常用联系人-提交认证信息
        "basicInfoSave": "/app-api/points/basic_info/save", //用户基本资料新增
        "pointsLog": "/app-api/points/log", //用户积分流水
        "pointsLogWeek": "/app-api/points/log-week", //更多积分流水查询
        "pointsCheckIn": "/app-api/points/check-in", //签到
        //登录&注册
        "loginCaptcha": "/app-api/login/captcha", //获取图形验证码
        "loginPasswordLogin": "/app-api/login/password-login", //密码登录
        "loginSmsLogin": "/app-api/login/sms-login", //手机验证码登录
        "loginPasswordSetting": "/app-api/login/password-setting", //设置登录密码
        "loginout": '/app-api/logout', //登出
        "sendSmsCode": "/app-api/login/send-sms-code", //发送登录验证码
        "vaildCmsCode": "/app-api/login/reset-password/vaild-sms-code", //忘记密码-验证短信码
        "verifyIdentity": "/app-api/login/reset-password/verify-identity", // 忘记密码 - 验证身份证号码
        "passwordSetting": "/app-api/login/reset-password/password-setting", //忘记密码-设置密码
        //我的
        "creditAssessment": "/app-api/mine/credit-assessment", //授信评估-合同
        "helpCenterList": "/app-api/help-center/list", //帮助中心-问题列表
        "helpCenterGet": "/app-api/help-center/get/", //帮助中心-问题详情
        "passwordModify": "/app-api/mine/password-modify", //修改密码
        "creditAgreementParam": "/app-api/credit/credit-agreement-param", //协议用户信息详情
        "withholdAgreementParam": "/app-api/credit/withhold-agreement-param", //协议用户信息详情  代扣协议
        'supplement': '/app-api/credit/sign-hs-supplement', //签署恒生数据迁移补充协议
        'isNeed2Sign': '/app-api/mine/is-need2-sign', //判断同步额度按钮是否显示
        'showCustomer': '/app-api/credit/is-show-customer-auth', //是否显示 用户授权委托书
        'supplwementData': '/app-api/credit/hs-supplwement-data', //判断同步额度变量

        //公共分类
        "sendCode": "/app-api/sms/send-code", //发送验证码
        "vaildSmsCode": "/app-api/sms/vaild-sms-code" //验证验证码

    };

    return apiList[apiName];
};
function getLink() {
    // const link = "https://api.jbhloan.com"           //生产
    var link = "http://ccs46.tunnel.onepaypass.com"; //测试
    // const link = "http://ccs45.tunnel.onepaypass.com"         //预生产
    // const link = "https://preccs.jbhloan.com/"        //灰度
    // const link = "http://10.188.0.151:8080"        //联调测试
    return link;
};

function getBanner() {
    //banner地址
    var bannerList = [{ banner: "/images/banner/banner2x.png", bannerUrl: "/operation-guide.html" }, { banner: "/images/banner/banner3x.png", bannerUrl: "" }];
    bannerList.map(function (ite, index) {
        bannerList[index].banner = 'https://hnhk.jbhloan.com' + ite.banner; //测试
        //bannerList[index].banner = 'https://hnhk-uat.jbhloan.com' + ite.banner        //预生产
        // bannerList[index].banner = 'https://hkbt.jbhloan.com' + ite.banner              //生产

        bannerList[index].bannerUrl = 'https://hnhk.jbhloan.com' + ite.bannerUrl; //测试
        //bannerList[index].bannerUrl = 'https://hnhk-uat.jbhloan.com' + ite.bannerUrl        //预生产
        // bannerList[index].bannerUrl = 'https://hkbt.jbhloan.com' + ite.bannerUrl            //生产
    });
    return bannerList;
}

function ticketOffice() {

    // const Office = 'http://m.hnair.com/'    //买机票  生产地址链接
    var Office = 'https://uat-app.hnair.com/app_web_nightly/index.html#/?_k=nfielw'; //买机票  测试地址链接

    return Office;
};

exports.default = {
    getMenu: getMenu,
    getApi: getApi,
    getLink: getLink,
    ticketOffice: ticketOffice
};

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(11);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames3 = __webpack_require__(6);

var _classnames4 = _interopRequireDefault(_classnames3);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
var ActivityIndicator = function (_React$Component) {
    (0, _inherits3['default'])(ActivityIndicator, _React$Component);

    function ActivityIndicator() {
        (0, _classCallCheck3['default'])(this, ActivityIndicator);
        return (0, _possibleConstructorReturn3['default'])(this, (ActivityIndicator.__proto__ || Object.getPrototypeOf(ActivityIndicator)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ActivityIndicator, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                animating = _props.animating,
                toast = _props.toast,
                size = _props.size,
                text = _props.text;

            var wrapClass = (0, _classnames4['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-toast', !!toast), _classnames));
            var spinnerClass = (0, _classnames4['default'])(prefixCls + '-spinner', (0, _defineProperty3['default'])({}, prefixCls + '-spinner-lg', !!toast || size === 'large'));
            if (animating) {
                if (toast) {
                    return React.createElement(
                        'div',
                        { className: wrapClass },
                        text ? React.createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            React.createElement('span', { className: spinnerClass, 'aria-hidden': 'true' }),
                            React.createElement(
                                'span',
                                { className: prefixCls + '-toast' },
                                text
                            )
                        ) : React.createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            React.createElement('span', { className: spinnerClass, 'aria-label': 'Loading' })
                        )
                    );
                } else {
                    return text ? React.createElement(
                        'div',
                        { className: wrapClass },
                        React.createElement('span', { className: spinnerClass, 'aria-hidden': 'true' }),
                        React.createElement(
                            'span',
                            { className: prefixCls + '-tip' },
                            text
                        )
                    ) : React.createElement(
                        'div',
                        { className: wrapClass },
                        React.createElement('span', { className: spinnerClass, 'aria-label': 'loading' })
                    );
                }
            } else {
                return null;
            }
        }
    }]);
    return ActivityIndicator;
}(React.Component);

exports['default'] = ActivityIndicator;

ActivityIndicator.defaultProps = {
    prefixCls: 'am-activity-indicator',
    animating: true,
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false
};
module.exports = exports['default'];

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

__webpack_require__(332);

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
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
		module.hot.accept(163, function() {
			var newContent = __webpack_require__(163);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1408d11fa4a79a1f185ee5a8795698b8.png";

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(11);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames2 = __webpack_require__(6);

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _rmcNotification = __webpack_require__(130);

var _rmcNotification2 = _interopRequireDefault(_rmcNotification);

var _icon = __webpack_require__(23);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SHORT = 3;
var _config = {
    duration: SHORT,
    mask: true
};
var messageInstance = void 0;
var prefixCls = 'am-toast';
function getMessageInstance(mask, callback) {
    var _classnames;

    if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
    }
    _rmcNotification2['default'].newInstance({
        prefixCls: prefixCls,
        style: {},
        transitionName: 'am-fade',
        className: (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-mask', mask), (0, _defineProperty3['default'])(_classnames, prefixCls + '-nomask', !mask), _classnames))
    }, function (notification) {
        return callback && callback(notification);
    });
}
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config.duration;
    var _onClose = arguments[3];
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _config.mask;

    var iconTypes = {
        info: '',
        success: 'success',
        fail: 'fail',
        offline: 'dislike',
        loading: 'loading'
    };
    var iconType = iconTypes[type];
    getMessageInstance(mask, function (notification) {
        messageInstance = notification;
        notification.notice({
            duration: duration,
            style: {},
            content: !!iconType ? React.createElement(
                'div',
                { className: prefixCls + '-text ' + prefixCls + '-text-icon', role: 'alert', 'aria-live': 'assertive' },
                React.createElement(_icon2['default'], { type: iconType, size: 'lg' }),
                React.createElement(
                    'div',
                    { className: prefixCls + '-text-info' },
                    content
                )
            ) : React.createElement(
                'div',
                { className: prefixCls + '-text', role: 'alert', 'aria-live': 'assertive' },
                React.createElement(
                    'div',
                    null,
                    content
                )
            ),
            closable: true,
            onClose: function onClose() {
                if (_onClose) {
                    _onClose();
                }
                notification.destroy();
                notification = null;
                messageInstance = null;
            }
        });
    });
}
exports['default'] = {
    SHORT: SHORT,
    LONG: 8,
    show: function show(content, duration, mask) {
        return notice(content, 'info', duration, function () {}, mask);
    },
    info: function info(content, duration, onClose, mask) {
        return notice(content, 'info', duration, onClose, mask);
    },
    success: function success(content, duration, onClose, mask) {
        return notice(content, 'success', duration, onClose, mask);
    },
    fail: function fail(content, duration, onClose, mask) {
        return notice(content, 'fail', duration, onClose, mask);
    },
    offline: function offline(content, duration, onClose, mask) {
        return notice(content, 'offline', duration, onClose, mask);
    },
    loading: function loading(content, duration, onClose, mask) {
        return notice(content, 'loading', duration, onClose, mask);
    },
    hide: function hide() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    },
    config: function config() {
        var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _conf$duration = conf.duration,
            duration = _conf$duration === undefined ? SHORT : _conf$duration,
            mask = conf.mask;

        _config.duration = duration;
        if (mask === false) {
            _config.mask = false;
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

__webpack_require__(24);

__webpack_require__(48);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
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
		module.hot.accept(19, function() {
			var newContent = __webpack_require__(19);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(181);
exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-toast-notice-content .am-toast-text {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.assessment {\n  width: 100%;\n  padding-top: 2.13333rem;\n  height: 100%;\n  background: #fff; }\n  .assessment .modal1 {\n    width: 100%; }\n    .assessment .modal1 .Modal2_details {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 30;\n      background: #fff; }\n  .assessment .Modal2 {\n    width: 100%;\n    font-size: 16px;\n    padding: 0 15px; }\n    .assessment .Modal2 .Modal2_item {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      line-height: 2.13333rem;\n      border-bottom: 1px solid #EDEDED; }\n  .assessment .Modal3 {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n    .assessment .Modal3 div {\n      padding: 5px 10px;\n      border-radius: 8;\n      color: #999;\n      text-align: center;\n      line-height: 23px; }\n  .assessment .occupied {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    margin-top: 6.82667rem;\n    flex-direction: column; }\n    .assessment .occupied img {\n      width: 5.12rem;\n      height: auto;\n      margin-bottom: 25px; }\n    .assessment .occupied div {\n      padding: 5px 10px;\n      border-radius: 8;\n      color: #999;\n      width: 7.68rem;\n      text-align: center;\n      line-height: 23px; }\n  .assessment .am-activity-indicator-content {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0);\n    border-radius: 0px; }\n  .assessment .am-activity-indicator-spinner {\n    background-image: url(" + escape(__webpack_require__(333)) + ");\n    width: 86px;\n    height: 86px;\n    background-size: 100%;\n    border-radius: 8px; }\n\n.loader_wrap {\n  width: 118px;\n  height: 118px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin: -47px 0 0 -59px;\n  border-radius: 14px;\n  background-color: #171717;\n  font-size: 14px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center; }\n\n.loader_img {\n  width: 25px;\n  height: 25px;\n  background-image: url(" + escape(__webpack_require__(334)) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: 10px; }\n\n.loader_text {\n  position: relative;\n  bottom: -26px;\n  color: #fff; }\n\n.time {\n  display: flex;\n  align-items: center; }\n  .time span {\n    margin-right: 5px;\n    font-size: 12px; }\n", ""]);

// exports


/***/ })

},[1097]);