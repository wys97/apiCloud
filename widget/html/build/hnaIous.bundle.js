webpackJsonp([25],{

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(49);

var _button2 = _interopRequireDefault(_button);

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

__webpack_require__(51);

__webpack_require__(27);

__webpack_require__(24);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antdMobile = __webpack_require__(59);

var _loginToken = __webpack_require__(33);

var _linkConfig = __webpack_require__(32);

var _lodash = __webpack_require__(53);

var _ = _interopRequireWildcard(_lodash);

__webpack_require__(25);

__webpack_require__(1030);

var _protocol = __webpack_require__(182);

var _protocol2 = _interopRequireDefault(_protocol);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HnaIous = function (_React$Component) {
  (0, _inherits3.default)(HnaIous, _React$Component);

  function HnaIous(props) {
    (0, _classCallCheck3.default)(this, HnaIous);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HnaIous.__proto__ || (0, _getPrototypeOf2.default)(HnaIous)).call(this, props));

    _this.gitProtocolData = function () {
      var that = _this;
      window.api.ajax({
        url: (0, _linkConfig.getLink)() + (0, _linkConfig.getApi)('creditAgreementParam'),
        method: 'post',
        headers: {
          Apptoken: window.localStorage.Apptoken
        }
      }, function (ret, err) {
        if (ret.code == '200') {

          that.setState({
            protocolData: ret.data
          });
        } else {}
      });
    };

    _this.gitshowCustomer = function () {
      var that = _this;
      window.api.ajax({
        url: (0, _linkConfig.getLink)() + (0, _linkConfig.getApi)('showCustomer'),
        method: 'post',
        headers: {
          Apptoken: window.localStorage.Apptoken
        }
      }, function (ret, err) {
        if (ret.code == '200') {
          that.setState({
            isNeed2SignCustomerAuth: ret.data.isNeed2SignCustomerAuth
          });
        } else {}
      });
    };

    _this.goCredits = function () {
      window.api.openFrame({
        url: "./idcardDiscern.html",
        name: "idcardDiscern",
        rect: {
          w: "auto",
          marginTop: window.api.safeArea.top,
          marginBottom: window.api.safeArea.bottom
        },
        useWKWebView: true,
        historyGestureEnabled: true
      });
    };

    _this.cLickRadio = function (value) {
      setTimeout(function () {
        var back = document.getElementsByClassName('back_content')[0];
        back.removeEventListener('scroll', function () {});
      }, 200);
      // console.log(value)
      //是否勾选已阅读协议
      if (value) {
        _this.setState({
          checked: true,
          disabled: false
        });
      } else {
        _this.setState({
          checked: false,
          disabled: true
        });
      }
    };

    _this.showProtocol = function (value) {
      //查看协议详情
      _this.setState({
        showProtocol: true,
        toDisabled: true
      });

      setTimeout(function () {
        var back = document.getElementsByClassName('back_content')[0];
        var zation = document.getElementsByClassName('userAuthorization')[0];
        if (back) back.addEventListener('scroll', function (e) {
          var offsetTop = e.target.offsetTop; //滚动条高度
          var scrollTop = e.target.scrollTop; //滚动条到顶部的距离
          var scrollHeight = e.target.scrollHeight; //元素的总高度
          var zationOffsetTop = zation ? zation.offsetTop : scrollHeight + 100;

          if (scrollTop >= offsetTop - 15 && scrollTop < zationOffsetTop - 25) {
            _this.setState({
              showTitle: true,
              title: '个人借款额度合同'
            });
          } else if (scrollTop >= zationOffsetTop - 25 && scrollTop > offsetTop - 25) {

            _this.setState({
              showTitle: true,
              title: '用户授权委托书'
            });
          } else {
            _this.setState({
              showTitle: false,
              title: '个人借款额度合同'
            });
          }
        });
      }, 200);

      var timeo = 3;
      var timeStop = setInterval(function () {
        timeo--;
        if (timeo > 0) {
          _this.setState({
            timeText: "(" + timeo + "s)",
            toDisabled: true
          });
        } else {
          timeo = 3; //当减到0时赋值为60
          _this.setState({
            timeText: "",
            toDisabled: false
          });
          clearInterval(timeStop); //清除定时器
        }
      }, 1000);
    };

    _this.goBack = function () {
      if (window.api) {
        window.api.closeFrame();
      }
    };

    _this.state = {
      disabled: true,
      checked: false,
      showProtocol: false, //查看协议
      // ProtocolType: 0,   //协议类型  1: 借款授信合同   2：海航白条机票分期业务注册协议
      toDisabled: true,
      timeText: "(3s)",
      protocolData: '',
      isNeed2SignCustomerAuth: false,
      title: '个人借款额度合同',
      showTitle: false
    };
    return _this;
  }

  (0, _createClass3.default)(HnaIous, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var that = this;
      window.apiready = function () {
        that.setState({
          ajax: window.api.ajax
        });
        that.gitProtocolData();
        that.gitshowCustomer();
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        {
          className: "hnaIous",
          style: { minHeight: "100%", backgroundColor: "#F9FAF9" }
        },
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
              color: "#333333",
              borderBottom: "1px solid #EFEFEF"
            }
          },
          "\u6D77\u822A\u767D\u6761"
        ),
        _react2.default.createElement("div", { style: { height: "45px" } }),
        _react2.default.createElement("img", { src: __webpack_require__(1031), alt: "", className: "banner" }),
        _react2.default.createElement(
          "div",
          { className: "my-radio" },
          this.state.checked === false ? _react2.default.createElement("img", {
            src: __webpack_require__(359),
            alt: "",
            onClick: function onClick() {
              _this2.showProtocol(1);
            }
          }) : _react2.default.createElement("img", {
            src: __webpack_require__(360),
            alt: "",
            onClick: function onClick() {
              _this2.cLickRadio(false);
            }
          }),
          _react2.default.createElement(
            "span",
            null,
            "\u6211\u5DF2\u5B8C\u5168\u9605\u8BFB\u5E76\u540C\u610F",
            _react2.default.createElement(
              "b",
              { onClick: function onClick() {
                  return _this2.showProtocol(1);
                } },
              "\u300A\u4E2A\u4EBA\u501F\u6B3E\u989D\u5EA6\u5408\u540C\u300B",
              this.state.isNeed2SignCustomerAuth && _react2.default.createElement(
                "span",
                null,
                "\u300A\u7528\u6237\u6388\u6743\u59D4\u6258\u4E66\u300B"
              )
            )
          )
        ),
        _react2.default.createElement(
          _button2.default,
          {
            disabled: this.state.disabled,
            className: "next",
            onClick: this.goCredits
          },
          "\u7ACB\u5373\u83B7\u53D6\u989D\u5EA6"
        ),
        this.state.showProtocol && _react2.default.createElement(
          "div",
          { className: "hint" },
          _react2.default.createElement(
            "div",
            { className: "back_wrap" },
            this.state.showTitle && _react2.default.createElement(
              "div",
              { className: "back_title" },
              this.state.title
            ),
            _react2.default.createElement(
              "div",
              { className: "back_content" },
              _protocol2.default.loanContract(this.state.protocolData),
              this.state.isNeed2SignCustomerAuth && _protocol2.default.userAuthorization
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "footer" },
            _react2.default.createElement(
              "span",
              {
                className: "no",
                onClick: function onClick() {
                  _this2.setState({ showProtocol: false }), _this2.cLickRadio(false);
                }
              },
              "\u4E0D\u540C\u610F"
            ),
            _react2.default.createElement(
              _button2.default,
              {
                className: "yes",
                disabled: this.state.toDisabled,
                onClick: function onClick() {
                  _this2.setState({ showProtocol: false }), _this2.cLickRadio(true), _this2.goCredits();
                }
              },
              "\u540C\u610F",
              this.state.timeText
            )
          )
        )
      );
    }
  }]);
  return HnaIous;
}(_react2.default.Component);

HnaIous.displayName = "HnaIous";
HnaIous.propTypes = {};
HnaIous.defaultProps = {};
exports.default = HnaIous;

_reactDom2.default.render(_react2.default.createElement(HnaIous, null), document.getElementById("hnaIous"));

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(555);
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
		module.hot.accept(555, function() {
			var newContent = __webpack_require__(555);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "57641bf1cc6a57905d2b117732acc678.png";

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  font-family: \"PingFangSC-Regular\";\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ndiv {\n  box-sizing: border-box; }\n\n.clearfloat:after {\n  display: block;\n  clear: both;\n  content: \"\";\n  visibility: hidden;\n  height: 0; }\n\n.clearfloat {\n  zoom: 1; }\n", ""]);

// exports


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".p, .declare_centent, .modal_content {\n  text-align: left; }\n\n.declare_centent {\n  padding-bottom: 100px;\n  line-height: 26px; }\n\n.paymentProtocol {\n  width: 100%;\n  margin-top: 100px; }\n  .paymentProtocol .content {\n    text-indent: 25px;\n    margin-top: 15px; }\n    .paymentProtocol .content span {\n      font-weight: 900; }\n\n.agriculture {\n  margin-top: 100px; }\n\n.attractInvestment {\n  margin-top: 100px;\n  line-height: 30px; }\n\n.IndustryAndCommerce {\n  margin-top: 100px;\n  line-height: 30px; }\n\n.construction {\n  margin-top: 100px;\n  line-height: 30px; }\n\n.BankOfChina {\n  margin-top: 100px;\n  line-height: 30px; }\n\n.content {\n  text-indent: 25px; }\n\n.weight {\n  font-weight: 900; }\n\n.table {\n  width: 100%;\n  font-size: 12px;\n  border: 1px solid #000;\n  display: flex;\n  line-height: 16px;\n  flex-grow: 5; }\n  .table .td {\n    width: 15%;\n    line-height: 16px; }\n  .table .th {\n    width: 20%;\n    line-height: 16px;\n    border-left: 1px solid #000; }\n  .table .tg {\n    width: 25%;\n    line-height: 16px; }\n  .table .a1 {\n    width: 100%;\n    height: 35px;\n    padding: 5px 5px;\n    display: table-cell;\n    vertical-align: middle; }\n  .table .aas {\n    border-top: 1px solid #000;\n    padding-top: 380px; }\n  .table .a2 {\n    height: 160px;\n    padding: 5px 2px;\n    border-top: 1px solid #000; }\n  .table .a3 {\n    height: 48px;\n    padding: 5px 2px;\n    border-top: 1px solid #000;\n    border-bottom: 1px solid #000; }\n  .table .a4 {\n    height: 142px;\n    padding: 5px 2px;\n    border-bottom: 1px solid #000; }\n  .table .a5 {\n    height: 112px;\n    padding: 5px 2px;\n    border-bottom: 1px solid #000; }\n  .table .a6 {\n    height: 48px;\n    padding: 5px 2px;\n    border-bottom: 1px solid #000; }\n  .table .a7 {\n    height: 110px;\n    padding: 5px 2px;\n    border-bottom: 1px solid #000; }\n  .table .a8 {\n    height: 50px;\n    padding: 5px 2px; }\n\n.userAuthorization {\n  font-size: 14px; }\n", ""]);

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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//服务协议
var serviceProtocol = _react2.default.createElement(
  "div",
  { className: "p" },
  "\xA0\xA0\xA0\xA0\xA0\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u534F\u8BAE\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u534F\u8BAE\u201D\uFF09\u662F\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u5408\u5E76\u7B80\u79F0\u4E3A\u201C\u8FD0\u8425\u65B9\u201D\uFF09\u3001\u4E0E\u822A\u65C5\u5206\u671FAPP\u7528\u6237(\u4EE5\u4E0B\u7B80\u79F0\u201C\u60A8\u201D\u6216\u201C\u5BA2\u6237\u201D\uFF0C \u5305\u62EC\u501F\u6B3E\u4EBA\u3001\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9)\u5C31\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u670D\u52A1\u201D\uFF09\u76F8\u5173\u4E8B\u9879\u6240\u8BA2\u7ACB\u7684\u6709\u6548\u5408\u7EA6\u3002",
  _react2.default.createElement("br", null),
  _react2.default.createElement(
    "div",
    { className: "h4" },
    "\xA0\xA0\xA0\xA0\xA0\u60A8\u901A\u8FC7\u7F51\u7AD9\u9875\u9762\u3001APP\u9875\u9762\u70B9\u51FB\u786E\u8BA4\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7B7E\u5B57\u6216\u7B7E\u7AE0\u786E\u8BA4\u7B49\u65B9\u5F0F\uFF09\u63A5\u53D7\u672C\u534F\u8BAE\uFF0C \u5373\u8868\u793A\u60A8\u4E0E\u8FD0\u8425\u65B9\u5DF2\u8FBE\u6210\u534F\u8BAE\u5E76\u540C\u610F\u63A5\u53D7\u672C\u534F\u8BAE\u7684\u5168\u90E8\u7EA6\u5B9A\u5185\u5BB9\u4EE5\u53CA\u4E0E\u672C\u534F\u8BAE\u6709\u5173\u7684\u5DF2\u7ECF\u53D1\u5E03\u6216\u5C06\u6765\u53EF\u80FD\u53D1\u5E03\u7684\u5404\u9879\u89C4\u5219\u3001\u9875\u9762\u63D0\u793A\u3001\u64CD\u4F5C\u6D41\u7A0B\u3001\u516C\u544A\u6216\u901A\u77E5\uFF08\u4EE5\u4E0B\u7EDF\u79F0\u201C\u672C\u534F\u8BAE\u201D\uFF09\u3002 \u5728\u63A5\u53D7\u672C\u534F\u8BAE\u4E4B\u524D\uFF0C\u8BF7\u60A8\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\u7684\u5168\u90E8\u5185\u5BB9\uFF08\u7279\u522B\u662F\u4EE5\u7C97\u4F53\u4E0B\u5212\u7EBF\u6807\u6CE8\u7684\u5185\u5BB9\uFF09\u3002\u5982\u679C\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u7684\u4EFB\u610F\u5185\u5BB9\uFF0C\u6216\u8005\u65E0\u6CD5\u51C6\u786E\u7406\u89E3\u8BE5\u6761\u6B3E\u7684\u542B\u4E49\uFF0C\u8BF7\u4E0D\u8981\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u3002"
  ),
  "\xA0\xA0\xA0\xA0\xA0 \u4E00\u3001\u76F8\u5173\u5B9A\u4E49",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA01.\u822A\u65C5\u5206\u671FAPP\u662F\u7531\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u8D1F\u8D23\u8FD0\u8425\uFF0C\u5411\u60A8\u63D0\u4F9BAPP\u670D\u52A1\u3001\u4FE1\u606F\u64AE\u5408\u7B49\u670D\u52A1\u3002\u6B64\u5916\uFF0C\u822A\u65C5\u5206\u671FAPP\u90E8\u5206\u8D37\u6B3E\u4EA7\u54C1\u7531\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u5411\u501F\u6B3E\u4EBA\u63D0\u4F9B\u501F\u6B3E\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA02.\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u662F\u6307\u5C31\u822A\u65C5\u5206\u671FAPP\u90E8\u5206\u8D37\u6B3E\u4EA7\u54C1\u7531\u5176\u5411\u63D0\u51FA\u501F\u6B3E\u7533\u8BF7\u7684\u501F\u6B3E\u4EBA\u63D0\u4F9B\u501F\u6B3E\u7684\u6CD5\u4EBA\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0 3.\u501F\u6B3E\u4EBA\u662F\u6307\u901A\u8FC7\u822A\u65C5\u5206\u671FAPP\u5411\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u6216/\u53CA\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u7533\u8BF7\u501F\u6B3E\u7684\u81EA\u7136\u4EBA\u3001\u6CD5\u4EBA\u6216\u5176\u4ED6\u7EC4\u7EC7\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u4E8C\u3001APP\u670D\u52A1",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA01. \u822A\u65C5\u5206\u671FAPP\u63D0\u4F9B\u7684\u670D\u52A1\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\uFF081\uFF09\u5F00\u53D1\u8BBE\u8BA1\u53CA\u8FD0\u8425APP\u3001\u7528\u6237\u8EAB\u4EFD\u8BC6\u522B\u53CA\u5B9E\u540D\u8BA4\u8BC1\u7B49\uFF1B\uFF082\uFF09\u6839\u636E\u60A8\u6240\u7533\u8BF7\u7684\u8D37\u6B3E\u4EA7\u54C1\u7531\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u6216/\u53CA\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u63D0\u4F9B\u7684\u8D37\u6B3E\u670D\u52A1\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA02.\u7531\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u76F4\u63A5\u72EC\u7ACB\u63D0\u4F9B\u7684\u8D37\u6B3E\u670D\u52A1\u5305\u62EC\u4FE1\u7528\u5BA1\u6838\u3001\u63D0\u4F9B\u53CA\u7BA1\u7406\u51FA\u501F\u8D44\u91D1\u3001\u4E0E\u8D37\u6B3E\u670D\u52A1\u76F8\u5173\u7684\u901A\u77E5\u4EE5\u53CA\u4E0E\u524D\u8FF0\u4FE1\u8D37\u670D\u52A1\u76F8\u5173\u7684\u5BA2\u6237\u670D\u52A1\u53CA\u6295\u8BC9\u5904\u7406\u7B49\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA03.\u7531\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u72EC\u7ACB\u63D0\u4F9B\u7684\u8D37\u6B3E\u670D\u52A1\u6216\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u4E0E\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u8054\u5408\u63D0\u4F9B\u7684\u8D37\u6B3E\u670D\u52A1\uFF0C\u5177\u4F53\u670D\u52A1\u5185\u5BB9\u8BE6\u60C5\u5E94\u4EE5\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u6216\u672C\u516C\u53F8\u4E0E\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u5728\u822A\u65C5\u5206\u671FAPP\u5F53\u65F6\u5C55\u793A\u7684\u670D\u52A1\u5185\u5BB9\u4E3A\u51C6\u3002",
  _react2.default.createElement("br", null),
  _react2.default.createElement(
    "div",
    { className: "h4" },
    "\xA0\xA0\xA0\xA0\xA04.\u60A8\u540C\u610F\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u6216/\u53CA\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u6709\u6743\u4F9D\u636E\u672C\u534F\u8BAE\u6216/\u53CA\u6709\u5173\u6587\u4EF6\u548C\u89C4\u5219\uFF0C\u6309\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u6240\u8FDB\u884C\u7684\u4EA4\u6613\u6216\u64CD\u4F5C\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8F93\u5165\u501F\u6B3E\u91D1\u989D\u3001\u501F\u6B3E\u671F\u9650\u3001\u501F\u6B3E\u7528\u9014\u3001\u63D0\u73B0\u3001\u8FD8\u6B3E\u3001\u8BA2\u7ACB\u534F\u8BAE\u7B49\uFF09\u5BF9\u76F8\u5173\u4E8B\u9879\u8FDB\u884C\u5904\u7406\u3002",
    _react2.default.createElement("br", null),
    "\u60A8\u672A\u80FD\u53CA\u65F6\u5BF9\u4EA4\u6613\u72B6\u6001\u8FDB\u884C\u786E\u8BA4\u6216\u672A\u80FD\u63D0\u4EA4\u76F8\u5173\u6307\u4EE4\u6240\u5F15\u8D77\u7684\u4EFB\u4F55\u7EA0\u7EB7\u6216\u635F\u5931\u7531\u60A8\u672C\u4EBA\u8D1F\u8D23\uFF0C\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u6216/\u53CA\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002",
    _react2.default.createElement("br", null)
  ),
  _react2.default.createElement(
    "div",
    { className: "h4" },
    "\xA0\xA0\xA0\xA0\xA05. \u60A8\u540C\u610F\u5E76\u6388\u6743\u822A\u65C5\u5206\u671FAPP\u8FD0\u8425\u65B9\uFF1A\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\uFF0C\u5728\u60A8\u7533\u8BF7\u501F\u6B3E\u4E4B\u65F6\u8D77\uFF0C\u6709\u6743\u51BB\u7ED3\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u7684\u8D26\u6237\uFF1B\u5728\u60A8\u501F\u6B3E\u5B58\u7EED\u671F\u95F4\uFF0C\u6709\u6743\u6839\u636E\u60A8\u7684\u8D44\u4FE1\u60C5\u51B5\u53CA\u5C65\u7EA6\u884C\u4E3A\u901A\u8FC7\u6263\u5212\u3001\u6B62\u4ED8\u8D26\u6237\u5185\u8D44\u91D1\u7528\u4E8E\u507F\u8FD8\u60A8\u672A\u5F52\u8FD8\u7684\u501F\u6B3E\u672C\u606F\u53CA\u5404\u9879\u8D39\u7528\u3002",
    _react2.default.createElement("br", null)
  ),
  "\xA0\xA0\xA0\xA0\xA06.\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u7684\u4EFB\u4F55\u501F\u8D37\u4EA4\u6613\u7533\u8BF7\uFF0C\u822A\u65C5\u5206\u671FAPP\u8FD0\u8425\u65B9\u5BF9\u6B64\u4E0D\u4F5C\u4EFB\u4F55\u53EF\u5B9E\u73B0\u7684\u627F\u8BFA\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA07.\u5728\u60A8\u670D\u52A1\u88AB\u7EC8\u6B62\u540E\uFF0C\u822A\u65C5\u5206\u671FAPP\u8FD0\u8425\u65B9\u6709\u6743\u5229\u4F46\u65E0\u4E49\u52A1\u6C38\u4E45\u4FDD\u5B58\u60A8\u7684\u6570\u636E\uFF0C\u822A\u65C5\u5206\u671FAPP\u8FD0\u8425\u65B9\u53EF\u4EE5\u4ECE\u670D\u52A1\u5668\u4E0A\u6C38\u4E45\u5730\u5220\u9664\u60A8\u7684\u6570\u636E\uFF0C\u4F46\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\u7684\u9664\u5916\u3002\u670D\u52A1\u7EC8\u6B62\u540E\uFF0C\u672C\u5E73\u53F0\u8FD0\u8425\u65B9\u6CA1\u6709\u4E49\u52A1\u5411\u60A8\u8FD4\u8FD8\u6570\u636E\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA08.\u56E0\u60A8\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u65F6\u6240\u5FC5\u987B\u7684\u7EC8\u7AEF\u8BBE\u5907\uFF08\u5982\u8BA1\u7B97\u673A\u3001\u667A\u80FD\u624B\u673A\u767B\uFF09\u9700\u81EA\u884C\u51C6\u5907\uFF0C\u5E76\u627F\u62C5\u6240\u9700\u7684\u8D39\u7528\uFF08\u5982\u7535\u8BDD\u8D39\u3001\u4E0A\u7F51\u8D39\u7B49\u8D39\u7528\uFF09\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA09.\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u4E0A\u4F7F\u7528\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u63D0\u4F9B\u7684\u4EA7\u54C1\u6216\u670D\u52A1\u65F6\uFF0C\u9664\u9075\u5B88\u672C\u534F\u8BAE\u7EA6\u5B9A\u5916\uFF0C\u8FD8\u5E94\u9075\u5B88\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u548C\u60A8\u4E4B\u95F4\u7684\u534F\u8BAE\u3002\u60A8\u3001\u672CAPP\u8FD0\u8425\u65B9\u3001\u4FE1\u8D37\u670D\u52A1\u65B9\u53CA\u5176\u4ED6\u65B9\u5BF9\u53EF\u80FD\u51FA\u73B0\u7684\u7EA0\u7EB7\u5728\u6CD5\u5F8B\u89C4\u5B9A\u548C\u7EA6\u5B9A\u7684\u8303\u56F4\u5185\u5404\u81EA\u627F\u62C5\u8D23\u4EFB\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA010.\u60A8\u4FDD\u8BC1\u5411\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u6216/\u53CA\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u63D0\u4F9B\u7684\u6240\u6709\u4FE1\u606F\u662F\u771F\u5B9E\u3001\u5B8C\u6574\u3001\u51C6\u786E\u3001\u5408\u6CD5\u3001\u6709\u6548\u7684\uFF0C\u5982\u60A8\u63D0\u4F9B\u4EFB\u4F55\u9519\u8BEF\u3001\u865A\u5047\u3001\u8FC7\u65F6\u6216\u4E0D\u5B8C\u6574\u7684\u8D44\u6599\uFF0C\u7531\u6B64\u4EA7\u751F\u7684\u4E00\u5207\u8D23\u4EFB\u5747\u7531\u60A8\u4E2A\u4EBA\u627F\u62C5\u3002\u5982\u60A8\u63D0\u4EA4\u7684\u4FE1\u606F\u4E0D\u5B8C\u6574\u6216\u4E0D\u7B26\u5408\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\uFF0C\u5219\u60A8\u53EF\u80FD\u65E0\u6CD5\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u6216\u5728\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u7684\u8FC7\u7A0B\u4E2D\u53D7\u5230\u9650\u5236\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA011.\u60A8\u5728\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u65F6\uFF0C\u672C\u5E73\u53F0\u8FD0\u8425\u65B9\u5411\u60A8\u6536\u53D6\u4E00\u5B9A\u7684\u670D\u52A1\u8D39\u3002\u670D\u52A1\u8D39\u7684\u6536\u53D6\u6807\u51C6\u4EE5\u822A\u65C5\u5206\u671FAPP\u5C55\u793A\u6216\u60A8\u4E0E\u822A\u65C5\u5206\u671FAPP\u7684\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u672CAPP\u8FD0\u8425\u65B9\u6709\u6743\u5355\u65B9\u9762\u8C03\u6574\u4E0A\u8FF0\u8D39\u7528\u7684\u6743\u5229\uFF0C\u4F46\u987B\u63D0\u524D\u8FDB\u884C\u901A\u77E5\u3002\u4E0A\u8FF0\u901A\u77E5\u6784\u6210\u4E86\u672C\u534F\u8BAE\u7684\u6709\u6548\u8865\u5145\uFF0C\u5177\u6709\u540C\u7B49\u6CD5\u5F8B\u6548\u529B\u3002\u5728\u901A\u77E5\u4E4B\u65E5\u8D77\uFF0C\u5982\u60A8\u7EE7\u7EED\u4F7F\u7528\u672C\u670D\u52A1\u7684\uFF0C\u5373\u89C6\u4E3A\u60A8\u540C\u610F\u822A\u65C5\u5206\u671FAPP\u6309\u7167\u8C03\u6574\u540E\u7684\u6536\u8D39\u6807\u51C6\u5411\u60A8\u6536\u53D6\u670D\u52A1\u8D39\u7528\uFF1B\u5426\u5219\u60A8\u5E94\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u4E09\u3001\u5BA2\u6237\u627F\u8BFA\u4E0E\u4FDD\u8BC1",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA01.\u60A8\u627F\u8BFA\u4E0D\u4E3A\u4EFB\u4F55\u975E\u6CD5\u76EE\u7684\u6216\u4EE5\u4EFB\u4F55\u975E\u6CD5\u65B9\u5F0F\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u5E73\u53F0\u670D\u52A1\uFF0C\u5E76\u627F\u8BFA\u9075\u5B88\u4E2D\u56FD\u76F8\u5173\u6CD5\u5F8B\u3001\u6CD5\u89C4\u53CA\u4E92\u8054\u7F51\u4F7F\u7528\u4E4B\u60EF\u4F8B\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA02.\u60A8\u540C\u610F\u5728\u4EA4\u6613\u8FBE\u6210\u6216\u4EA4\u6613\u7533\u8BF7\u63D0\u4EA4\u540E\u60A8\u4E0D\u5F97\u53D8\u66F4\u3001\u64A4\u56DE\u6216\u64A4\u9500\uFF0C\u4F46\u672C\u534F\u8BAE\u53E6\u6709\u7EA6\u5B9A\u6216\u60A8\u7B7E\u7F72\u7684\u5176\u4ED6\u534F\u8BAE\u53E6\u6709\u7EA6\u5B9A\u7684\u9664\u5916\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA03.\u60A8\u627F\u8BFA\u65E0\u8BBA\u60A8\u662F\u5426\u76F4\u63A5\u5728\u822A\u65C5\u5206\u671FAPP\u63D0\u4EA4\u501F\u6B3E\u7533\u8BF7\uFF0C\u60A8\u90FD\u5E94\u6309\u7167\u672C\u534F\u8BAE\u7684\u7EA6\u5B9A\u5C65\u884C\u76F8\u5173\u4E49\u52A1\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA04.\u60A8\u540C\u610F\u822A\u65C5\u5206\u671FAPP\u6709\u6743\u9650\u5236\u60A8\u501F\u6B3E\u3001\u8FD8\u6B3E\u6240\u4F7F\u7528\u7684\u8D44\u91D1\u6E20\u9053\uFF0C\u5177\u4F53\u4EE5\u53EF\u5728\u822A\u65C5\u5206\u671FAPP\u5E73\u53F0\u4F7F\u7528\u7684\u8D44\u91D1\u6E20\u9053\u4E3A\u51C6\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA05.\u60A8\u540C\u610F\u82E5\u51FA\u73B0\u56E0\u822A\u65C5\u5206\u671FAPP\u81EA\u8EAB\u539F\u56E0\u3001\u7CFB\u7EDF\u5DEE\u9519\u3001\u6545\u969C\u6216\u5176\u4ED6\u539F\u56E0\u5F15\u53D1\u7684\u5C55\u793A\u5EF6\u8BEF\u3001\u9519\u8BEF\u6216\u8005\u7528\u6237\u4E0D\u5F53\u83B7\u5229\u7B49\u60C5\u5F62\u7684\uFF0C\u7528\u6237\u540C\u610F\u822A\u65C5\u5206\u671FAPP\u53EF\u4EE5\u91C7\u53D6\u66F4\u6B63\u5DEE\u9519\u3001\u6263\u5212\u6B3E\u9879\u3001\u6682\u505C\u670D\u52A1\u7B49\u9002\u5F53\u7EA0\u6B63\u63AA\u65BD\u3002\u60A8\u540C\u610F\u5E76\u6388\u6743\u822A\u65C5\u5206\u671FAPP\u53EF\u4EE5\u76F4\u63A5\u6216\u901A\u8FC7\u7B2C\u4E09\u65B9\u673A\u6784\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u822A\u65C5\u5206\u671FAPP\u4F7F\u7528\u7684\u8D44\u91D1\u5212\u8F6C\u6E20\u9053\u6216\u94F6\u884C\u7B49\u673A\u6784\uFF09\uFF0C\u4ECE\u7528\u6237\u7684\u8D44\u91D1\u8D26\u6237\u4E0A\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u822A\u65C5\u5206\u671FAPP\u865A\u62DF\u8D26\u6237\u4F59\u989D \u3001\u94F6\u884C\u5B58\u7BA1\u8D26\u6237\u4F59\u989D\u3001\u94F6\u884C\u5361\u7B49\uFF09\u6263\u5212\u76F8\u5E94\u6B3E\u9879\u3002\u60A8\u540C\u610F\u5E76\u6388\u6743\u7B2C\u4E09\u65B9\u673A\u6784\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u822A\u65C5\u5206\u671FAPP\u4F7F\u7528\u7684\u8D44\u91D1\u5212\u8F6C\u6E20\u9053\u7B49\u673A\u6784\uFF09\u6839\u636E\u822A\u65C5\u5206\u671FAPP\u7684\u6307\u4EE4\u8FDB\u884C\u76F8\u5E94\u64CD\u4F5C\uFF0C\u4E14\u7B2C\u4E09\u65B9\u673A\u6784\u4E0D\u56E0\u524D\u8FF0\u64CD\u4F5C\u5BF9\u60A8\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u56DB\u3001\u4FE1\u606F\u6536\u96C6\u3001\u4F7F\u7528\u3001\u5171\u4EAB\u4E0E\u4FDD\u62A4",
  _react2.default.createElement("br", null),
  _react2.default.createElement(
    "div",
    null,
    "\xA0\xA0\xA0\xA0\xA01.\u4E3A\u4E86\u66F4\u597D\u5730\u5411\u60A8\u63D0\u4F9B\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\uFF0C",
    _react2.default.createElement(
      "span",
      null,
      "\u60A8\u540C\u610F\u5E76\u6388\u6743\u822A\u65C5\u5206\u671FAPP\u901A\u8FC7\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4EE5\u4E0B\u9014\u5F84\u4FE1\u606F\u83B7\u53D6\u60A8\u7684\u4FE1\u606F\uFF1A\u6536\u96C6\u60A8\u7559\u5B58\u5728\u822A\u65C5\u5206\u671FAPP\u7684\u5173\u8054\u516C\u53F8\u5904\u7684\u4FE1\u606F\uFF1B\u6536\u96C6\u60A8\u7559\u5B58\u5728\u822A\u65C5\u5206\u671FAPP\u5408\u4F5C\u4F19\u4F34\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5C0F\u989D\u8D37\u6B3E\u516C\u53F8\u3001\u6D88\u8D39\u91D1\u878D\u516C\u53F8\u3001\u94F6\u884C\u3001\u5F81\u4FE1\u516C\u53F8\u7B49\uFF0C\u4E0B\u540C\uFF09\u5904\u7684\u4FE1\u606F\uFF1B\u5411\u884C\u653F\u673A\u5173\u3001\u53F8\u6CD5\u673A\u5173\u67E5\u8BE2\u3001\u6253\u5370\u3001\u7559\u5B58\u60A8\u7684\u4FE1\u606F\uFF1B\u5411\u5408\u6CD5\u7559\u5B58\u60A8\u4FE1\u606F\u7684\u81EA\u7136\u4EBA\u3001\u6CD5\u4EBA\u4EE5\u53CA\u5176\u4ED6\u7EC4\u7EC7\u6536\u96C6\u60A8\u7684\u4FE1\u606F\u3002",
      _react2.default.createElement("br", null),
      "2.\u60A8\u540C\u610F\u5E76\u6388\u6743\u822A\u65C5\u5206\u671FAPP\u6536\u96C6\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4EE5\u4E0B\u60A8\u7684\u4FE1\u606F\uFF1A\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u59D3\u540D/\u540D\u79F0\u3001\u8BC1\u4EF6\u53F7\u7801\u3001\u8BC1\u4EF6\u7C7B\u578B\u3001\u4F4F\u6240\u5730\u3001\u7535\u8BDD\u53F7\u7801\u3001\u94F6\u884C\u8D26\u6237\u8BA4\u8BC1\u4FE1\u606F\u3001\u751F\u7269\u7279\u5F81\u4EE5\u53CA\u5176\u4ED6\u8EAB\u4EFD\u4FE1\u606F\uFF1B\u60A8\u5728\u7533\u8BF7\u3001\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u65F6\u6240\u63D0\u4F9B\u4EE5\u53CA\u5F62\u6210\u7684\u4EFB\u4F55\u6570\u636E\u548C\u4FE1\u606F\uFF1B\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u5173\u8054\u516C\u53F8\u548C\u5408\u4F5C\u4F19\u4F34\u5904\u4E2D\u7559\u5B58\u4EE5\u53CA\u5F62\u6210\u7684\u4EFB\u4F55\u6570\u636E\u548C\u4FE1\u606F\uFF1B\u60A8\u7684\u4FE1\u7528\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u5F81\u4FE1\u8BB0\u5F55\u548C\u4FE1\u7528\u62A5\u544A\uFF1B\u60A8\u7684\u8D22\u4EA7\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u8D22\u7A0E\u4FE1\u606F\u3001\u623F\u4EA7\u4FE1\u606F\u3001\u8F66\u8F86\u4FE1\u606F\u3001\u516C\u79EF\u91D1\u4FE1\u606F\u3001\u793E\u4FDD\u4FE1\u606F\u3001\u57FA\u91D1\u3001\u4FDD\u9669\u3001\u80A1\u7968\u3001 \u4FE1\u6258\u3001\u503A\u5238\u7B49\u6295\u8D44\u7406\u8D22\u4FE1\u606F\u548C\u8D1F\u503A\u4FE1\u606F\u7B49\uFF1B\u60A8\u5728\u884C\u653F\u673A\u5173\u3001\u53F8\u6CD5\u673A\u5173\u7559\u5B58\u7684\u4EFB\u4F55\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6237\u7C4D\u4FE1\u606F/\u5DE5\u5546\u4FE1\u606F\u3001\u8BC9\u8BBC\u4FE1\u606F\u3001\u6267\u884C\u4FE1\u606F\u548C\u8FDD\u6CD5\u72AF\u7F6A\u4FE1\u606F\u7B49\uFF1B\u4E0E\u60A8\u7533\u8BF7\u6216\u4F7F\u7528\u7684\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u76F8\u5173\u7684\u3001\u60A8\u7559\u5B58\u7684\u5176\u4ED6\u81EA\u7136\u4EBA\u3001\u6CD5\u4EBA\u548C\u7EC4\u7EC7\u7684\u5176\u4ED6\u76F8\u5173\u4FE1\u606F\uFF1B\u60A8\u8BBF\u95EE\u822A\u65C5\u5206\u671FAPP\u7F51\u7AD9\u53CA\u5176\u76F8\u5173\u7F51\u7AD9\u3001\u79FB\u52A8\u8BBE\u5907\u5BA2\u6237\u7AEF\u65F6\uFF0C\u6216\u4F7F\u7528\u672C\u670D\u52A1\u65F6\u7684\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u8BA1\u7B97\u673AIP\u5730\u5740\u3001\u8BBE\u5907\u6807\u8BC6\u7B26\u3001\u786C\u4EF6\u578B\u53F7\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u3001\u60A8\u7684\u4F4D\u7F6E\u7B49\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    null,
    "3.\u4E3A\u4E86\u66F4\u597D\u5730\u4E3A\u60A8\u63D0\u4F9B\u670D\u52A1\uFF0C\u4E5F\u4E3A\u4E86\u822A\u65C5\u5206\u671FAPP\u81EA\u8EAB\u7684\u98CE\u9669\u9632\u63A7\uFF0C",
    _react2.default.createElement(
      "span",
      null,
      "\u60A8\u540C\u610F\u5E76\u6388\u6743\u822A\u65C5\u5206\u671FAPP\u5C06\u60A8\u7684\u4FE1\u606F\u7528\u4E8E\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5982\u4E0B\u7528\u9014\uFF1A\u521B\u5EFA\u6570\u636E\u5206\u6790\u6A21\u578B\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u9002\u5408\u4E8E\u60A8\u7684\u670D\u52A1\uFF0C\u5E76\u7EF4\u62A4\u3001\u6539\u8FDB\u8FD9\u4E9B\u670D\u52A1\uFF1B\u6BD4\u8F83\u4FE1\u606F\u7684\u51C6\u786E\u6027\u5E76\u4E0E\u7B2C\u4E09\u65B9\u8FDB\u884C\u9A8C\u8BC1\uFF1B\u4E3A\u4F7F\u60A8\u77E5\u6653\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u60C5\u51B5\u6216\u4E86\u89E3\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\uFF0C\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u3001\u822A\u65C5\u5206\u671FAPP\u7684\u7AD9\u5185\u4FE1/\u7CFB\u7EDF\u4FE1\u606F\u3001\u624B\u673A\u77ED\u4FE1\u548C\u4F20\u771F\u7B49\u65B9\u5F0F\u5411\u60A8\u53D1\u9001\u670D\u52A1\u72B6\u6001\u7684\u901A\u77E5\u3001\u8425\u9500\u6D3B\u52A8\u53CA\u5176\u4ED6\u5546\u4E1A\u6027\u7535\u5B50\u4FE1\u606F\uFF1B\u9884\u9632\u6216\u963B\u6B62\u975E\u6CD5\u7684\u6D3B\u52A8\uFF1B\u7ECF\u60A8\u8BB8\u53EF\u7684\u5176\u4ED6\u7528\u9014\u3002",
      _react2.default.createElement("br", null),
      "4. \u822A\u65C5\u5206\u671FAPP\u5BF9\u60A8\u7684\u4FE1\u606F\u627F\u62C5\u4FDD\u5BC6\u4E49\u52A1\uFF0C\u4E0D\u4F1A\u4E3A\u6EE1\u8DB3\u7B2C\u4E09\u65B9\u7684\u8425\u9500\u76EE\u7684\u800C\u5411\u5176\u51FA\u552E\u6216\u51FA\u79DF\u60A8\u7684\u4EFB\u4F55\u4FE1\u606F\uFF0C\u4F46\u9664\u4EE5\u4E0B\u60C5\u5F62\u5916\uFF1A\u83B7\u5F97\u60A8\u7684\u540C\u610F\u6216\u6388\u6743\uFF1B\u4E3A\u4E86\u5411\u60A8\u63D0\u4F9B\u6216\u63A8\u8350\u822A\u65C5\u5206\u671FAPP\u7684\u5173\u8054\u516C\u53F8\u7684\u670D\u52A1\u6216/\u548C\u4EA7\u54C1\u7684\u9700\u8981\uFF0C\u5C06\u60A8\u7684\u4FE1\u606F\u63D0\u4F9B\u7ED9\u822A\u65C5\u5206\u671FAPP\u7684\u5173\u8054\u516C\u53F8\u4F7F\u7528\uFF0C\u4E14\u60A8\u540C\u610F\u822A\u65C5\u5206\u671FAPP\u7684\u5173\u8054\u516C\u53F8\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u3001\u822A\u65C5\u5206\u671FAPP\u7684\u7AD9\u5185\u4FE1/\u7CFB\u7EDF\u4FE1\u606F\u3001\u624B\u673A\u77ED\u4FE1\u548C\u4F20\u771F\u7B49\u65B9\u5F0F\u5411\u60A8\u53D1\u9001\u670D\u52A1\u72B6\u6001\u7684\u901A\u77E5\u3001\u8425\u9500\u6D3B\u52A8\u53CA\u5176\u4ED6\u5546\u4E1A\u6027\u7535\u5B50\u4FE1\u606F\uFF1B\u67D0\u4E9B\u670D\u52A1\u6216/\u548C\u4EA7\u54C1\u6216/\u548C\u63A8\u5E7F\u6D3B\u52A8\u7531\u822A\u65C5\u5206\u671FAPP\u7684\u5408\u4F5C\u4F19\u4F34\u63D0\u4F9B\u6216\u7531\u822A\u65C5\u5206\u671FAPP\u4E0E \u5408\u4F5C\u4F19\u4F34\u5171\u540C\u63D0\u4F9B\uFF0C\u822A\u65C5\u5206\u671FAPP\u4F1A\u4E0E\u5176\u5171\u4EAB\u5E76\u4F7F\u7528\uFF1B\u5728\u60A8\u8FDD\u53CD\u672C\u534F\u8BAE\u3001\u60A8\u7684\u501F\u6B3E\u534F\u8BAE\u53CA\u5176\u4ED6\u76F8\u5173\u534F\u8BAE\u65F6\uFF0C\u5411\u60A8\u7684\u4EA4\u6613\u5BF9\u624B\uFF0C\u822A\u65C5\u5206\u671FAPP\u5408\u4F5C\u7684\u94F6\u884C\u3001\u6D88\u8D39\u91D1\u878D\u516C\u53F8\u3001\u5C0F\u989D\u8D37\u6B3E\u516C\u53F8\u3001\u822A\u65C5\u5206\u671FAPP\u7684\u5173\u8054\u516C\u53F8\u7B49\u7B2C\u4E09\u65B9\u63D0\u4F9B\uFF1B\u4E3A\u5EFA\u7ACB\u4FE1\u7528\u4F53\u7CFB\uFF0C\u5411\u5F81\u4FE1\u673A\u6784\u53D1\u9001\u60A8\u7684\u4FE1\u606F\uFF0C\u540C\u65F6\u60A8\u540C\u610F\u5E76\u6388\u6743\u822A\u65C5\u5206\u671FAPP\u5C06\u60A8\u7684\u4E0D\u826F\u4FE1\u606F\u53D1\u9001\u5F81\u4FE1\u673A\u6784\u4E14\u4E0D\u518D\u53E6\u884C\u901A\u77E5\u60A8\uFF1B\u6839\u636E\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\u53CA\u6709\u6743\u673A\u5173\u7684\u8981\u6C42\u3002"
    )
  ),
  "5.\u672C\u5E73\u53F0\u8FD0\u8425\u65B9\u91CD\u89C6\u5BF9\u7528\u6237\u9690\u79C1\u7684\u4FDD\u62A4\uFF0C\u822A\u65C5\u5206\u671FAPP\u5C06\u6309\u7167\u76F8\u5173\u9690\u79C1\u6743\u653F\u7B56\u4FDD\u62A4\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F\u548C\u5176\u4ED6\u4E2A\u4EBA\u4FE1\u606F\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u4E94\u3001\u98CE\u9669\u63D0\u793A",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u60A8\u901A\u8FC7\u822A\u65C5\u5206\u671FAPP\u6240\u4ECE\u4E8B\u7684\u4EA4\u6613\u53EF\u80FD\u9762\u4E34\u5982\u4E0B\u98CE\u9669\uFF0C\u8BE5\u4E9B\u98CE\u9669\u9700\u7531\u60A8\u81EA\u884C\u627F\u62C5\uFF1A",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA01.\u76D1\u7BA1\u98CE\u9669\uFF1A\u6709\u5173\u6CD5\u5F8B\u3001\u6CD5\u89C4\u53CA\u76F8\u5173\u653F\u7B56\u3001\u89C4\u5219\u53D1\u751F\u53D8\u5316\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u5B9E\u73B0\u60A8\u7684\u501F\u8D37\u4EA4\u6613\uFF0C\u60A8\u7531\u6B64\u53EF\u80FD\u906D\u53D7\u635F\u5931\uFF1B",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA02.\u8FDD\u7EA6\u98CE\u9669\uFF1A\u56E0\u60A8\u7684\u4EA4\u6613\u5BF9\u624B\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u3001\u7B2C\u4E09\u65B9\u4FE1\u8D37\u670D\u52A1\u65B9\u7B49\u65E0\u529B\u6216\u65E0\u610F\u613F\u6309\u65F6\u8DB3\u989D\u5C65\u7EA6\uFF0C\u60A8\u7531\u6B64\u53EF\u80FD\u906D\u53D7\u635F\u5931\uFF1B",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA03.\u6210\u4EA4\u98CE\u9669\uFF1A\u60A8\u6240\u7533\u8BF7\u7684\u501F\u6B3E\u53EF\u80FD\u65E0\u6CD5\u6700\u7EC8\u8FBE\u6210\uFF0C\u60A8\u7531\u6B64\u65E0\u6CD5\u83B7\u5F97\u501F\u6B3E\uFF1B",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA04.\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u4E0D\u53EF\u6297\u529B\u56E0\u7D20\u5BFC\u81F4\u7684\u98CE\u9669\uFF1B",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA05.\u56E0\u60A8\u7684\u8FC7\u9519\u5BFC\u81F4\u7684\u4EFB\u4F55\u635F\u5931\uFF0C\u8BE5\u8FC7\u9519\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u51B3\u7B56\u5931\u8BEF\u3001\u64CD\u4F5C\u4E0D\u5F53\u3001\u9057\u5FD8\u6216\u6CC4\u9732\u822A\u65C5\u5206\u671FAPP\u8D26\u53F7\u53CA\u5BC6\u7801\u3001\u5BC6\u7801\u88AB\u4ED6\u4EBA\u7834\u89E3\u3001\u60A8\u4F7F\u7528\u7684\u8BA1\u7B97\u673A\u7CFB\u7EDF\u88AB\u7B2C\u4E09\u65B9\u4FB5\u5165\u3001\u60A8\u59D4\u6258\u4ED6\u4EBA\u7533\u8BF7\u65F6\u4ED6\u4EBA\u6076\u610F\u6216\u4E0D\u5F53\u64CD\u4F5C\u800C\u9020\u6210\u7684\u635F\u5931\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA06. \u822A\u65C5\u5206\u671FAPP\u4E0D\u5BF9\u60A8\u6216/\u53CA\u4EFB\u4F55\u4EA4\u6613\u63D0\u4F9B\u4EFB\u4F55\u62C5\u4FDD\u6216\u6761\u4EF6\uFF0C\u65E0\u8BBA\u662F\u660E\u793A\u3001\u9ED8\u793A\u6216\u6CD5\u5B9A\u7684\u3002\u822A\u65C5\u5206\u671FAPP\u5411\u60A8\u63D0\u4F9B\u7684\u5404\u79CD\u4FE1\u606F\u53CA\u8D44\u6599\u4E0D\u6784\u6210\u501F\u6B3E\u5EFA\u8BAE\uFF0C\u60A8\u5E94\u4F9D\u5176\u72EC\u7ACB\u5224\u65AD\u505A\u51FA\u51B3\u7B56\u3002\u60A8\u636E\u6B64\u8FDB\u884C\u4EA4\u6613\u7684\uFF0C\u4EA7\u751F\u7684\u98CE\u9669\u7531\u60A8\u81EA\u884C\u627F\u62C5\uFF0C\u60A8\u65E0\u6743\u636E\u6B64\u5411\u822A\u65C5\u5206\u671FAPP\u8FD0\u8425\u65B9\u63D0\u51FA\u4EFB\u4F55\u6CD5\u5F8B\u4E3B\u5F20\u3002\u5728\u4EA4\u6613\u8FC7\u7A0B\u4E2D\uFF0C\u60A8\u4E0E\u4EA4\u6613\u5BF9\u624B\u4E4B\u95F4\u53D1\u751F\u7684\u7EA0\u7EB7\uFF0C\u7531\u7EA0\u7EB7\u5404\u65B9\u81EA\u884C\u89E3\u51B3\uFF0C\u4EA4\u6613\u5E73\u53F0\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA07.\u4EE5\u4E0A\u5E76\u4E0D\u80FD\u63ED\u793A\u60A8\u901A\u8FC7\u822A\u65C5\u5206\u671FAPP\u8FDB\u884C\u501F\u8D37\u4EA4\u6613\u7684\u5168\u90E8\u98CE\u9669\u53CA\u5E02\u573A\u7684\u5168\u90E8\u60C5\u5F62\u3002\u60A8\u5728\u505A\u51FA\u4EA4\u6613\u51B3\u7B56\u524D\uFF0C\u5E94\u5168\u9762\u4E86\u89E3\u76F8\u5173\u4EA4\u6613\u89C4\u5219\u53CA\u98CE\u9669\uFF0C\u8C28\u614E\u51B3\u7B56\uFF0C\u5E76\u81EA\u884C\u627F\u62C5\u5168\u90E8\u98CE\u9669\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u516D\u3001\u514D\u9664\u8D23\u4EFB",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA01. \u822A\u65C5\u5206\u671FAPP\u56E0\u4E0B\u5217\u72B6\u51B5\u65E0\u6CD5\u6B63\u5E38\u8FD0\u4F5C\uFF0C\u4F7F\u60A8\u65E0\u6CD5\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u65F6\uFF0C\u822A\u65C5\u5206\u671FAPP\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\uFF0C\u8BE5\u72B6\u51B5\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u822A\u65C5\u5206\u671FAPP\u7CFB\u7EDF\u505C\u673A\u7EF4\u62A4\u6216\u5347\u7EA7\uFF1B\u822A\u65C5\u5206\u671FAPP\u6240\u4F9D\u8D56\u7684\u7535\u4FE1\u8BBE\u5907\u51FA\u73B0\u6545\u969C\uFF1B\u56E0\u53F0\u98CE\u3001\u5730\u9707\u3001\u6D77\u5578\u3001\u6D2A\u6C34\u3001\u96F7\u7535\u3001\u505C\u7535\u3001\u6218\u4E89\u6216\u6050\u6016\u88AD\u51FB\u3001 \u7F62\u5DE5\u7B49\u4E0D\u53EF\u6297\u529B\u539F\u56E0\uFF1B\u60A8\u7684\u7535\u8111\u8F6F\u4EF6\u3001\u7CFB\u7EDF\u3001\u786C\u4EF6\u548C\u901A\u4FE1\u7EBF\u8DEF\u3001\u4F9B\u7535\u7EBF\u8DEF\u51FA\u73B0\u6545\u969C\u7684\uFF1B\u7528\u6237\u64CD\u4F5C\u4E0D\u5F53\u6216\u901A\u8FC7\u975E\u822A\u65C5\u5206\u671FAPP\u6388\u6743\u6216\u8BA4\u53EF\u7684\u65B9\u5F0F\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u7684\uFF1B \u56E0\u75C5\u6BD2\u3001\u6728\u9A6C\u3001\u6076\u610F\u7A0B\u5E8F\u653B\u51FB\u3001\u7F51\u7EDC\u62E5\u5835\u3001\u7CFB\u7EDF\u4E0D\u7A33\u5B9A\u3001\u7CFB\u7EDF\u6216\u8BBE\u5907\u6545\u969C\u3001\u901A\u8BAF\u6545\u969C\u3001\u94F6\u884C\u539F\u56E0 \u3001\u7B2C\u4E09\u65B9\u670D\u52A1\u7455\u75B5\u6216\u653F\u5E9C\u884C\u4E3A\u7B49\u539F\u56E0\uFF1B\u5176\u4ED6\u4E0D\u53EF\u5F52\u56E0\u4E8E\u822A\u65C5\u5206\u671FAPP\u7684\u539F\u56E0\u3002\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u822A\u65C5\u5206\u671FAPP\u5BF9\u672C\u534F\u8BAE\u6240\u627F\u62C5\u7684\u8FDD\u7EA6\u8D54\u507F\u8D23\u4EFB\u603B\u989D\u4E0D\u8D85\u8FC7\u5411\u60A8\u6536\u53D6\u7684\u5F53\u6B21\u670D\u52A1\u8D39\u7528\u603B\u989D\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA02.\u57FA\u4E8E\u8FD0\u884C\u548C\u4EA4\u6613\u5B89\u5168\u7684\u9700\u8981\uFF0C\u672CAPP\u8FD0\u8425\u65B9\u53EF\u4EE5\u65E0\u9700\u4E8B\u5148\u901A\u77E5\u6682\u65F6\u505C\u6B62\u63D0\u4F9B\u3001\u9650\u5236\u3001\u6C38\u4E45\u7EC8\u6B62\u6216\u6539\u53D8\u5E73\u53F0\u7684\u90E8\u5206\u529F\u80FD\uFF0C\u6216\u63D0\u4F9B\u65B0\u7684\u529F\u80FD\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u4E03\u3001\u670D\u52A1\u6761\u6B3E\u7684\u4FEE\u6539\u548C\u670D\u52A1\u4FEE\u8BA2",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u672CAPP\u8FD0\u8425\u65B9\u6709\u6743\u5728\u5FC5\u8981\u65F6\u4FEE\u6539\u670D\u52A1\u6761\u6B3E\uFF0C\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u6761\u6B3E\u4E00\u65E6\u53D1\u751F\u53D8\u52A8\uFF0C\u5C06\u4F1A\u5728\u7F51\u7AD9\u4E0A\u540C\u6B65\u63D0\u793A\u4FEE\u6539\u5185\u5BB9\u3002\u5982\u679C\u7528\u6237\u7EE7\u7EED\u4F7F\u7528\u7F51\u7EDC\u670D\u52A1\uFF0C\u5219\u89C6\u4E3A\u540C\u610F\u5E76\u63A5\u53D7\u670D\u52A1\u6761\u6B3E\u7684\u53D8\u52A8\uFF1B\u5982\u679C\u7528\u6237\u4E0D\u540C\u610F\u6240\u6539\u52A8\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4E3B\u52A8\u53D6\u6D88\u83B7\u5F97\u7684\u7F51\u7EDC\u670D\u52A1\u3002\u672CAPP\u8FD0\u8425\u65B9\u4FDD\u7559\u968F\u65F6\u4FEE\u6539\u6216\u4E2D\u65AD\u670D\u52A1\u800C\u4E0D\u9700\u77E5\u4F1A\u7528\u6237\u7684\u6743\u5229\u3002\u672CAPP\u8FD0\u8425\u65B9\u884C\u4F7F\u4FEE\u6539\u6216\u4E2D\u65AD\u670D\u52A1\u7684\u6743\u5229\uFF0C\u4E0D\u9700\u5BF9\u7528\u6237\u6216\u7B2C\u4E09\u65B9\u8D1F\u8D23\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u516B\u3001\u9001\u8FBE\u6761\u6B3E",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA01.\u9664\u6CD5\u5F8B\u6CD5\u89C4\u6216\u76D1\u7BA1\u89C4\u5B9A\u53E6\u6709\u5F3A\u5236\u6027\u89C4\u5B9A\u5916\uFF0C\u672C\u534F\u8BAE\u5C65\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u672CAPP\u8FD0\u8425\u65B9\u4F20\u9012\u7ED9\u60A8\u7684\u4E66\u9762\u901A\u77E5\uFF0C\u6309\u7167\u60A8\u5411\u672CAPP\u8FD0\u8425\u65B9\u63D0\u4F9B\u7684\u901A\u8BAF\u5730\u5740\u4EA4\u90AE\u540E\u7684\u7B2C\u4E09\u4E2A\u81EA\u7136\u65E5\u5373\u89C6\u4E3A\u9001\u8FBE\uFF1B\u4E66\u9762\u901A\u77E5\u7684\u5F62\u5F0F\u8FD8\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5728\u822A\u65C5\u5206\u671FAPP\u7F51\u7AD9\u6216/\u53CAAPP\u516C\u544A\u3001\u5411\u60A8\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u3001\u822A\u65C5\u5206\u671FAPP\u7AD9\u5185\u4FE1\u3001\u7CFB\u7EDF\u4FE1\u606F\u3001\u624B\u673A\u77ED\u4FE1\u548C\u4F20\u771F\u7B49\u7535\u5B50\u65B9\u5F0F\uFF0C\u5728\u91C7\u7528\u7535\u5B50\u65B9\u5F0F\u8FDB\u884C\u4E66\u9762\u901A\u77E5\u7684\u60C5\u51B5\u4E0B\u53D1\u9001\u5F53\u65E5\u5373\u89C6\u4E3A\u9001\u8FBE\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA02.\u5BF9\u4E8E\u56E0\u534F\u8BAE\u4E89\u8BAE\u5F15\u8D77\u7684\u4EFB\u4F55\u7EA0\u7EB7\uFF0C\u60A8\u58F0\u660E\u53F8\u6CD5\u673A\u5173\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4EBA\u6C11\u6CD5\u9662\u3001\u4EF2\u88C1\u59D4\u5458\u4F1A\uFF09\u53EF\u4EE5\u901A\u8FC7\u624B\u673A\u77ED\u4FE1\u6216\u7535\u5B50\u90AE\u4EF6\u7B49\u73B0\u4EE3\u901A\u8BAF\u65B9\u5F0F\u6216\u90AE\u5BC4\u65B9\u5F0F\u5411\u60A8\u9001\u8FBE\u6CD5\u5F8B\u6587\u4E66\uFF08\u5305\u62EC\u8BC9\u8BBC\u6587\u4E66\u3001\u4EF2\u88C1\u6587\u4E66\uFF09\uFF0C\u4E14\u8BA4\u53EF\u4E0A\u8FF0\u9001\u8FBE\u65B9\u5F0F\u7684\u6709\u6548\u6027\u3001\u5408\u6CD5\u6027\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA03.\u60A8\u6307\u5B9A\u63A5\u6536\u6CD5\u5F8B\u6587\u4E66\u7684\u624B\u673A\u53F7\u7801\u6216\u7535\u5B50\u90AE\u7BB1\u4E3A\u60A8\u540D\u4E0B\u7684\u822A\u65C5\u5206\u671FAPP\u8D26\u6237\u7ED1\u5B9A\u7684\u624B\u673A\u53F7\u7801\u6216\u7535\u5B50\u90AE\u7BB1\uFF0C\u53F8\u6CD5\u673A\u5173\u5411\u524D\u8FF0\u7801\u5740\u53D1\u51FA\u6CD5\u5F8B\u6587\u4E66\u5373\u89C6\u4E3A\u9001\u8FBE\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA04.\u60A8\u6307\u5B9A\u90AE\u5BC4\u5730\u5740\u4E3A\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u767B\u8BB0\u5730\u5740\uFF0C\u5982\u5B58\u5728\u591A\u4E2A\u5730\u5740\uFF0C\u60A8\u8BA4\u53EF\u7531\u672C\u5E73\u53F0\u8FD0\u8425\u65B9\u4EFB\u610F\u9009\u62E9\u5176\u4E2D\u4E00\u4E2A\u5730\u5740\u4F5C\u4E3A\u60A8\u7684\u6307\u5B9A\u90AE\u5BC4\u5730\u5740\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0 5.\u60A8\u540C\u610F\u53F8\u6CD5\u673A\u5173\u53EF\u91C7\u53D6\u4EE5\u4E0A\u4E00\u79CD\u6216\u591A\u79CD\u9001\u8FBE\u65B9\u5F0F\u5411\u60A8\u9001\u8FBE\u6CD5\u5F8B\u6587\u4E66\uFF0C\u53F8\u6CD5\u673A\u5173\u91C7\u53D6\u591A\u79CD\u65B9\u5F0F\u5411\u60A8\u9001\u8FBE\u6CD5\u5F8B\u6587\u4E66\uFF0C\u9001\u8FBE\u65F6\u95F4\u4EE5\u4E0A\u8FF0\u9001\u8FBE\u65B9\u5F0F\u4E2D\u6700\u5148\u9001\u8FBE\u7684\u4E3A\u51C6\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA06.\u60A8\u786E\u8BA4\u7684\u4E0A\u8FF0\u9001\u8FBE\u65B9\u5F0F\u9002\u7528\u4E8E\u5404\u4E2A\u53F8\u6CD5\u9636\u6BB5\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E00\u5BA1\u3001\u4E8C\u5BA1\u3001\u518D\u5BA1\u3001\u6267\u884C\u4EE5\u53CA\u7763\u4FC3\u7A0B\u5E8F\uFF08\u542B\u652F\u4ED8\u4EE4\u9001\u8FBE\uFF09\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA07.\u82E5\u60A8\u4E0A\u8FF0\u9001\u8FBE\u5730\u5740\u6709\u53D8\u66F4\uFF0C\u60A8\u5E94\u5F53\u53CA\u65F6\u544A\u77E5\u672C\u516C\u53F8\u548C\u53F8\u6CD5\u673A\u5173\uFF08\u5982\u9002\u7528\uFF09\u53D8\u66F4\u540E\u7684\u9001\u8FBE\u5730\u5740\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA0\u4E5D\u3001\u5176\u4ED6",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA01.\u5728\u672C\u534F\u8BAE\u4E2D\uFF0C\u9664\u975E\u672C\u534F\u8BAE\u4E0A\u4E0B\u6587\u53E6\u6709\u89C4\u5B9A\uFF1A",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA02.\u51E1\u63D0\u53CA\u672C\u534F\u8BAE\u5E94\u5305\u62EC\u672C\u534F\u8BAE\u53CA\u5176\u9644\u4EF6\uFF0C\u4EE5\u53CA\u5BF9\u8BE5\u534F\u8BAE\u6240\u4F5C\u7684\u4EFB\u4F55\u4FEE\u6539\u3001\u4FEE\u8BA2\u6216\u8865\u5145\u7684\u6587\u4EF6\uFF1B",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA03.\u51E1\u63D0\u53CA\u6761\u3001\u6B3E\u548C\u9644\u4EF6\u4EC5\u6307\u672C\u534F\u8BAE\u7684\u6761\u3001\u6B3E\u548C\u9644\u4EF6\uFF1B",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA04.\u672C\u534F\u8BAE\u6761\u6B3E\u7684\u6807\u9898\u4EC5\u4E3A\u67E5\u9605\u65B9\u4FBF\u800C\u8BBE\u7F6E\uFF0C\u4E0D\u5E94\u6784\u6210\u5BF9\u672C\u534F\u8BAE\u7684\u4EFB\u4F55\u89E3\u91CA\uFF0C\u4E0D\u5BF9\u6807\u9898\u4E4B\u4E0B\u7684\u5185\u5BB9\u53CA\u8303\u56F4\u4F5C\u4EFB\u4F55\u9650\u5B9A\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA05.\u672C\u534F\u8BAE\u7684\u9644\u4EF6\u53CA\u5404\u9879\u8865\u5145\u3001\u4FEE\u8BA2\u6216\u53D8\u66F4\uFF0C\u4E3A\u672C\u534F\u8BAE\u4E0D\u53EF\u5206\u5272\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u4E0E\u672C\u534F\u8BAE\u6B63\u6587\u5177\u6709\u540C\u7B49\u6CD5\u5F8B\u6548\u529B\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA06.\u5982\u672C\u534F\u8BAE\u4E2D\u7684\u4EFB\u4F55\u6761\u6B3E\u65E0\u8BBA\u56E0\u4F55\u79CD\u539F\u56E0\u5B8C\u5168\u6216\u90E8\u5206\u65E0\u6548\u6216\u4E0D\u5177\u6709\u6267\u884C\u529B\uFF0C\u5219\u5E94\u8BA4\u4E3A\u8BE5\u6761\u6B3E\u53EF\u4E0E\u672C\u534F\u8BAE\u76F8\u5206\u5272\uFF0C\u5E76\u53EF\u88AB\u5C3D\u53EF\u80FD\u63A5\u8FD1\u5404\u65B9\u610F\u56FE\u7684\u3001\u80FD\u591F\u4FDD\u7559\u672C\u534F\u8BAE\u8981\u6C42\u7684\u7ECF\u6D4E\u76EE\u7684\u7684\u3001\u6709\u6548\u7684\u65B0\u6761\u6B3E\u6240\u53D6\u4EE3\uFF0C\u800C\u4E14\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u672C\u534F\u8BAE\u7684\u5176\u4ED6\u6761\u6B3E\u4ECD\u7136\u5B8C\u5168\u6709\u6548\u5E76\u5177\u6709\u7EA6\u675F\u529B\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA07.\u534F\u8BAE\u5404\u65B9\u5E94\u6309\u6CD5\u5F8B\u6CD5\u89C4\u53CA\u76F8\u5173\u89C4\u5B9A\u5404\u81EA\u627F\u62C5\u4E0E\u672C\u534F\u8BAE\u76F8\u5173\u7684\u7A0E\u8D39\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA08.\u672C\u534F\u8BAE\u672A\u5C3D\u4E8B\u5B9C\uFF0C\u7531\u534F\u8BAE\u5404\u65B9\u534F\u5546\u5904\u7406\uFF0C\u6216\u8005\u6309\u56FD\u5BB6\u6709\u5173\u6CD5\u5F8B\u3001\u6CD5\u89C4\u7684\u89C4\u5B9A\u6267\u884C\u3002\u534F\u5546\u4E0D\u6210\u7684\uFF0C\u4EFB\u4F55\u4E00\u65B9\u53EF\u4EE5\u4F9D\u6CD5\u5411\u672C\u534F\u8BAE\u7B7E\u7F72\u5730\u7684\u4EBA\u6C11\u6CD5\u9662\u8D77\u8BC9\u3002\u5728\u4E89\u8BAE\u89E3\u51B3\u671F\u95F4\uFF0C\u82E5\u8BE5\u4E89\u8BAE\u4E0D\u5F71\u54CD\u672C\u534F\u8BAE\u5176\u4ED6\u6761\u6B3E\u7684\u5C65\u884C\uFF0C\u5219\u8BE5\u5176\u4ED6\u6761\u6B3E\u5E94\u7EE7\u7EED\u5C65\u884C\u3002",
  _react2.default.createElement("br", null),
  "\xA0\xA0\xA0\xA0\xA09.\u672C\u534F\u8BAE\u7B7E\u7F72\u5730\u4E3A\u5317\u4EAC\u5E02\u671D\u9633\u533A\u3002",
  _react2.default.createElement("br", null)
);

//隐私协议 最新版
var privacyProtocol = _react2.default.createElement(
  "div",
  { className: "declare_centent" },
  _react2.default.createElement(
    "div",
    null,
    "\u4E3A\u5C0A\u91CD\u548C\u4FDD\u62A4\u6240\u6709\u4F7F\u7528\u670D\u52A1\u7528\u6237\u7684\u9690\u79C1\uFF0C\u672C\u9690\u79C1\u534F\u8BAE\u5C06\u544A\u8BC9\u60A8\u6211\u4EEC\u5982\u4F55\u6536\u96C6\u3001\u4F7F\u7528\u3001\u5B58\u50A8\u3001\u5206\u4EAB\u6709\u5173\u60A8\u7684\u4FE1\u606F\uFF0C\u4EE5\u53CA\u6211\u4EEC\u5982\u4F55\u4FDD\u62A4\u8FD9\u4E9B\u4FE1\u606F\u7684\u5B89\u5168\u3002\u60A8\u6210\u4E3A",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u6D77\u822A\u767D\u6761"
    ),
    "\u7528\u6237\u524D\u52A1\u5FC5\u4ED4\u7EC6\u9605\u8BFB\u672C\u9690\u79C1\u534F\u8BAE\u5E76\u540C\u610F\u6240\u6709\u6761\u6B3E\u3002 \u672C\u9690\u79C1\u534F\u8BAE\u4F5C\u4E3A\u6D77\u822A\u767D\u6761\u670D\u52A1\u534F\u8BAE\u7684\u9644\u4EF6\uFF0C\u5728\u60A8\u6CE8\u518C\u6210\u4E3A\u6D77\u822A\u767D\u6761\u7528\u6237\u540E\u7ACB\u5373\u751F\u6548\uFF0C\u5E76\u5BF9\u60A8\u53CA\u672C\u670D\u52A1\u4EA7\u751F\u7EA6\u675F\u529B\u3002\u672C\u670D\u52A1\u8FD0\u8425\u8005\u4E3A\uFF1A",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8"
    ),
    "\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u805A\u5B9D\u5C0F\u8D37\u201D\uFF09\uFF0C\u6CE8\u518C\u5730\u5740\uFF1A",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u5317\u4EAC\u5E02\u623F\u5C71\u533A\u897F\u6F5E\u8857\u9053\u957F\u8679\u897F\u8DEF73\u53F71\u5E622\u5C42"
    ),
    "\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u4E00\u3001 \u6211\u4EEC\u6536\u96C6\u7528\u6237\u7684\u54EA\u4E9B\u4FE1\u606F"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u53EF\u80FD\u6536\u96C6\u5E76\u5B58\u50A8\u60A8\u5728\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u5E73\u53F0\u63D0\u4F9B\u7684\u6D88\u8D39\u91D1\u878D\u670D\u52A1\uFF08\u5305\u62EC\u6D77\u5357\u822A\u7A7AAPP\u91CC\u7684\u6D77\u822A\u767D\u6761\u670D\u52A1\u4EE5\u53CA\u6D77\u822A\u767D\u6761\u72EC\u7ACBAPP\u63D0\u4F9B\u7684\u670D\u52A1\uFF0C\u4EE5\u4E0B\u7B80\u79F0\u201C\u6D77\u822A\u767D\u6761\u670D\u52A1\u201D\uFF09\u65F6\u5411\u6211\u4EEC\u63D0\u4F9B\u7684\u4EFB\u4F55\u4FE1\u606F\uFF0C\u5305\u62EC\u60A8\u5728\u6211\u4EEC\u9875\u9762\u4E2D\u5728\u7EBF \u586B\u5199\u4FE1\u606F\u6216\u5C31\u6D77\u822A\u767D\u6761\u670D\u52A1\u4E0E\u6211\u4EEC\u8054\u7CFB\u65F6\u6240\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u4EE5\u53CA\u60A8\u5728\u4F7F\u7528\u6211\u4EEC\u670D\u52A1\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5173\u4E8E\u60A8\u7684\u4EA4\u6613\u4FE1\u606F\u53CA\u7B2C\u4E09\u65B9\u5F81\u4FE1\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    "1. \u4E3A\u4E86\u5B8C\u6210\u4F1A\u5458\u8D26\u6237\u7684\u521B\u5EFA\u3001\u5173\u8054\u6216\u767B\u5F55\uFF0C\u6211\u4EEC\u5C06\u6536\u96C6\u60A8\u5728\u521B\u5EFA\u6D77\u822A\u767D\u6761\u670D\u52A1\u4F1A\u5458\u8D26\u6237\u65F6\u5411\u6D77\u822A\u767D\u6761\u5E73\u53F0\u63D0\u4F9B\u7684\u5404\u7C7B\u4FE1\u606F\uFF0C\u5982",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u53F7\u3001\u94F6\u884C\u5361\u53F7\u3001\u91D1\u9E4F\u4F1A\u5458\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u3001\u8054\u7CFB\u5730\u5740\u3001\u7535\u5B50\u90AE\u7BB1\u3001\u6307\u7EB9\u4FE1\u606F\u3001\u9762\u90E8\u7279\u5F81\u4FE1\u606F\u7B49\u4FE1\u606F"
    ),
    "\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "2. \u4E3A\u4E86\u63D0\u9AD8\u60A8\u4F7F\u7528\u6211\u4EEC\u670D\u52A1\u7684\u5B89\u5168\u6027\uFF0C\u9632\u6B62\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u88AB\u4E0D\u6CD5\u5206\u5B50\u83B7\u53D6\uFF0C\u540C\u65F6\u4E5F\u662F\u4E3A\u4E86\u63D0\u9AD8\u6D77\u822A\u767D\u6761\u5E73\u53F0\u7684\u670D\u52A1\u8D28\u91CF\u548C\u7528\u6237\u4F53\u9A8C\uFF0C\u6211\u4EEC\u4F1A\u63A5\u53D7\u5E76\u8BB0\u5F55\u60A8\u4F7F\u7528\u7684\u8BBE\u5907\u76F8\u5173\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u8BBE\u5907\u4FE1\u606F\u5305\u62EC\uFF1A",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u8BBE\u5907\u5C5E\u6027\u4FE1\u606F"
    ),
    "\uFF08\u5982\u8BBE\u5907\u54C1\u724C\u53CA\u578B\u53F7\u3001\u8BBE\u5907\u5C4F\u5E55\u89C4\u683C\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u3001\u8BBE\u5907\u8BBE\u7F6E\u3001 \u552F\u4E00\u8BBE\u5907\u6807\u8BC6\u7B26\u7B49\u8F6F\u786C\u4EF6\u7279\u5F81\u4FE1\u606F\uFF09\u3001",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u8BBE\u5907\u4F4D\u7F6E\u4FE1\u606F"
    ),
    "\uFF08\u5982\u901A\u8FC7GPS\u3001\u84DD\u7259\u6216WIFI\u4FE1\u53F7\u83B7\u5F97\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF09\u3001",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u8BBE\u5907\u8FDE\u63A5\u4FE1\u606F"
    ),
    "\uFF08IP\u5730\u5740\u3001\u6D4F\u89C8\u5668\u7684\u7C7B\u578B\u3001\u7535\u4FE1\u8FD0\u8425\u5546\u3001\u4F7F\u7528\u7684\u8BED\u8A00\u3001\u8BBF\u95EE\u65E5\u671F\u548C\u65F6 \u95F4\u53CA\u60A8\u9700\u6C42\u7684\u7F51\u9875\u8BB0\u5F55\u7B49\uFF09\u53CA",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7528\u6237\u884C\u4E3A\u4FE1\u606F"
    ),
    "\uFF08\u5E7F\u544A\u8DDF\u8E2AID\u3001\u5E7F\u544A\u70B9\u51FB\u60C5\u51B5\u3001\u9875\u9762\u70B9\u51FB\u9891\u6B21\u3001\u9875\u9762\u505C\u7559\u65F6\u95F4\u3001\u8BBF\u95EE\u8DEF\u5F84\u7B49\uFF09\u3002\u5BF9\u4E8E\u4ECE\u60A8\u7684\u5404\u79CD\u8BBE\u5907\u4E0A\u6536\u96C6\u5230\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u5B83\u4EEC\u8FDB\u884C\u5173\u8054\uFF0C \u4EE5\u4FBF\u6211\u4EEC\u80FD\u5728\u60A8\u7684\u8BBE\u5907\u4E0A\u4E3A\u60A8\u63D0\u4F9B\u4E00\u81F4\u7684\u670D\u52A1\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "3. \u5F53\u60A8\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u670D\u52A1\u65F6\uFF0C\u60A8\u9700\u8FDB\u884C\u6388\u4FE1\u3001\u652F\u7528\u3001\u8FD8\u6B3E\u3001\u63D0\u989D\u3001\u4EE5\u53CA\u66F4\u6362\u3001\u89E3\u7ED1\u94F6\u884C\u5361\u7B49\u64CD\u4F5C\uFF0C\u6211\u4EEC\u548C/\u6216\u6211\u4EEC\u59D4\u6258\u7684\u7B2C\u4E09\u65B9\u6E20\u9053\u5C06\u6536\u96C6\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u59D3\u540D/\u540D\u79F0\u3001\u8BC1\u4EF6\u53F7\u7801\u3001\u8BC1\u4EF6\u7C7B\u578B\u3001 \u4F4F\u6240\u5730\u3001\u7535\u8BDD\u53F7\u7801\u3001\u94F6\u884C\u8D26\u6237\u8BA4\u8BC1\u4FE1\u606F\u3001\u751F\u7269\u7279\u5F81\u4EE5\u53CA\u5176\u4ED6\u8EAB\u4EFD\u4FE1\u606F\uFF1B\u60A8\u5728\u7533\u8BF7\u3001\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u65F6\u6240\u63D0\u4F9B\u4EE5\u53CA\u5F62\u6210\u7684\u4EFB\u4F55\u6570\u636E\u548C\u4FE1\u606F\uFF1B\u60A8\u5728\u6D77\u822A\u767D\u6761\u5173\u8054\u516C\u53F8\u548C\u5408\u4F5C\u4F19\u4F34\u5904\u4E2D\u7559\u5B58\u4EE5\u53CA\u5F62\u6210\u7684\u4EFB\u4F55\u6570\u636E\u548C\u4FE1\u606F"
    ),
    "\uFF1B\u60A8\u7684",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u4FE1\u7528\u4FE1\u606F"
    ),
    "\uFF0C \u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u5F81\u4FE1\u8BB0\u5F55\u548C\u4FE1\u7528\u62A5\u544A"
    ),
    "\uFF1B\u60A8\u7684",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u8D22\u4EA7\u4FE1\u606F"
    ),
    "\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u8D22\u7A0E\u4FE1\u606F\u3001\u623F\u4EA7\u4FE1\u606F\u3001\u8F66\u8F86\u4FE1\u606F\u3001\u516C\u79EF\u91D1\u4FE1\u606F\u3001\u793E\u4FDD\u4FE1\u606F\u3001\u57FA\u91D1\u3001\u4FDD\u9669\u3001\u80A1\u7968\u3001\u4FE1\u6258\u3001\u503A\u5238\u7B49\u6295\u8D44\u7406\u8D22\u4FE1\u606F\u548C\u8D1F\u503A\u4FE1\u606F\u7B49\uFF1B\u60A8\u5728\u884C\u653F\u673A\u5173\u3001 \u53F8\u6CD5\u673A\u5173\u7559\u5B58\u7684\u4EFB\u4F55\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6237\u7C4D\u4FE1\u606F/\u5DE5\u5546\u4FE1\u606F\u3001\u8BC9\u8BBC\u4FE1\u606F\u3001\u6267\u884C\u4FE1\u606F\u548C\u8FDD\u6CD5\u72AF\u7F6A\u4FE1\u606F\u7B49\uFF1B\u4E0E\u60A8\u7533\u8BF7\u6216\u4F7F\u7528\u7684\u6D77\u822A\u767D\u6761\u670D\u52A1\u76F8\u5173\u7684\u3001\u60A8\u7559\u5B58\u7684\u5176\u4ED6\u81EA\u7136\u4EBA\u3001\u6CD5\u4EBA\u548C\u7EC4\u7EC7\u7684\u5176\u4ED6\u76F8\u5173\u4FE1\u606F\uFF1B\u60A8\u8BBF\u95EE\u6D77\u822A\u767D\u6761\u670D \u52A1\u5E73\u53F0\u53CA\u5176\u76F8\u5173\u7F51\u7AD9\u3001\u79FB\u52A8\u8BBE\u5907\u5BA2\u6237\u7AEF\u65F6\uFF0C\u6216\u4F7F\u7528\u672C\u670D\u52A1\u65F6\u7684\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u8BA1\u7B97\u673AIP\u5730\u5740\u3001\u8BBE\u5907\u6807\u8BC6\u7B26\u3001\u786C\u4EF6\u578B\u53F7\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u3001\u60A8\u7684\u4F4D\u7F6E\u7B49\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    null,
    "4.\u4E3A\u4F7F\u60A8\u5728\u6D77\u822A\u767D\u6761\u7684\u670D\u52A1\u4F53\u9A8C\u66F4\u4E3A\u4FBF\u6377\u3001\u987A\u7545\uFF0C\u4EE5\u4E0B\u6D77\u822A\u767D\u6761\u5F53\u524D\u5DF2\u7ECF\u63D0\u4F9B\u7684\u529F\u80FD\u4E2D\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u60A8\u53EF\u9009\u62E9\u662F\u5426\u6388\u6743\u6211\u4EEC\u5F00\u901A\u4EE5\u4E0B\u6743\u9650\uFF1A",
    _react2.default.createElement(
      "p",
      null,
      "(i)",
      _react2.default.createElement(
        "span",
        { className: "weight" },
        "\u57FA\u4E8E\u76F8\u518C\u7684\u529F\u80FD"
      ),
      "\uFF1A\u60A8\u53EF\u4F7F\u7528\u7528\u6237\u53CD\u9988\u56FE\u50CF\u4E0A\u4F20\u7B49\u670D\u52A1\uFF1B"
    ),
    _react2.default.createElement(
      "p",
      null,
      "(ii)",
      _react2.default.createElement(
        "span",
        { className: "weight" },
        "\u57FA\u4E8E\u5730\u7406\u4F4D\u7F6E\u7684\u529F\u80FD"
      ),
      "\uFF1A\u60A8\u53EF\u5F00\u542F\u5B9A\u4F4D\u670D\u52A1\uFF0C\u4EE5\u4FBF\u6D77\u822A\u767D\u6761\u6216\u8005\u6D77\u822A\u767D\u6761\u7684\u5408\u4F5C\u673A\u6784\u66F4\u597D\u5730\u9075\u5B88\u76D1\u7BA1\u89C4\u5B9A\u5C65\u884C\u53CD\u6D17\u94B1\u548C\u53EF\u7591\u4EA4\u6613\u62A5\u9001\u7B49\u4E49\u52A1\uFF1B"
    ),
    _react2.default.createElement(
      "p",
      null,
      "(iii)",
      _react2.default.createElement(
        "span",
        { className: "weight" },
        "\u57FA\u4E8E\u6307\u7EB9\u7684\u529F\u80FD"
      ),
      "\uFF1A\u60A8\u53EF\u6388\u6743\u8C03\u53D6\u60A8\u4F7F\u7528\u7684\u8BBE\u5907\u7684\u6307\u7EB9\u9A8C\u8BC1\u7CFB\u7EDF\uFF0C\u5E2E\u52A9\u6D77\u822A\u767D\u6761\u6216\u8005\u6D77\u822A\u767D\u6761\u7684\u5408\u4F5C\u673A\u6784\u5B8C\u6210\u4E2A\u4EBA\u8EAB\u4EFD\u8BC6\u522B\u3001\u767B\u5F55\u3001\u9A8C\u8BC1\u3001\u786E\u6743\u7B49\u6307\u4EE4\u64CD\u4F5C\u3002"
    ),
    "\u4E0A\u8FF0\u529F\u80FD\u53EF\u80FD\u9700\u8981\u60A8\u5728\u60A8\u7684\u8BBE\u5907\u4E2D\u5411\u6211\u4EEC\u5F00\u542F\u60A8\u7684\u76F8\u518C\u3001\u5730\u7406\u4F4D\u7F6E\uFF08\u5B9A\u4F4D\uFF09\u7B49\u529F\u80FD\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u4EE5\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u6240\u6D89\u53CA\u7684\u4FE1\u606F\u7684\u6536\u96C6\u548C\u4F7F\u7528\u3002\u60A8\u786E\u8BA4\u5E76\u540C\u610F\u5F00\u542F\u8FD9\u4E9B\u6743\u9650\u5373\u4EE3\u8868\u60A8\u6388\u6743\u6211\u4EEC\u53EF\u4EE5\u6536\u96C6\u548C\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u5B9E\u73B0\u4E0A\u8FF0\u529F\u80FD\uFF1B \u60A8\u4E5F\u53EF\u4EE5\u9075\u5FAA\u60A8\u4F7F\u7528\u8BBE\u5907\u7684\u64CD\u4F5C\u7CFB\u7EDF\u6307\u793A\u53D6\u6D88\u8FD9\u4E9B\u6388\u6743\uFF0C\u5219\u6211\u4EEC\u5C06\u4E0D\u518D\u7EE7\u7EED\u6536\u96C6\u548C\u4F7F\u7528\u60A8\u7684\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u4E5F\u65E0\u6CD5\u4E3A\u60A8\u63D0\u4F9B\u4E0A\u8FF0\u4E0E\u8FD9\u4E9B\u6388\u6743\u6240\u5BF9\u5E94\u7684\u529F\u80FD\uFF0C\u4F46\u8FD9\u4E0D\u4F1A\u5BF9\u60A8\u4F7F\u7528\u6D77\u822A\u767D\u6761\u5176\u4ED6\u670D\u52A1\u4EA7\u751F\u5F71\u54CD\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u4E8C\u3001 \u7528\u6237\u4FE1\u606F\u5982\u4F55\u4F7F\u7528"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u6536\u96C6\u60A8\u4FE1\u606F\u7684\u76EE\u7684\u4E3B\u8981\u662F\u4E3A\u4E86\u5411\u60A8\u63D0\u4F9B\u5B89\u5168\u3001\u9AD8\u6548\u4EE5\u53CA\u4E2A\u6027\u5316\u7684\u670D\u52A1\u4F53\u9A8C\u3002\u6211\u4EEC\u4F1A\u51FA\u4E8E\u4EE5\u4E0B\u76EE\u7684\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1A "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "1\u3001\u8FDB\u884C\u5B9E\u540D\u5236\u7BA1\u7406  "
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u60A8\u5728\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u65F6\u6211\u4EEC\u9700\u8981\u9996\u5148\u8BA4\u8BC1\u60A8\u8EAB\u4EFD\u7684\u771F\u5B9E\u6027\uFF0C\u4E3A\u6B64\u60A8\u9700\u8981\u63D0\u4F9B\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F\u3001\u94F6\u884C\u5361\u4FE1\u606F\u3001\u9762\u90E8\u7279\u5F81\u53CA\u624B\u673A\u53F7\u3002"
    ),
    "\u6211\u4EEC\u4F1A\u5C06\u4E0A\u8FF0\u4FE1\u606F\u63D0\u4EA4\u7ED9\u5408\u6CD5\u6301\u6709\u60A8\u4E0A\u8FF0\u4FE1\u606F\u7684\u7B2C\u4E09\u65B9\u8EAB\u4EFD\u9A8C\u8BC1\u673A\u6784\uFF0C\u4EE5\u4FBF\u5BF9\u60A8\u6240\u63D0\u4F9B\u4FE1\u606F\u7684\u51C6\u786E\u6027\u8FDB\u884C\u6838\u5BF9\u3002 \u5982\u679C\u60A8\u4E0D\u63D0\u4F9B\u4E0A\u8FF0\u4FE1\u606F\u5219\u65E0\u6CD5\u4F7F\u7528\u6839\u636E\u4E2D\u56FD\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u5FC5\u987B\u8FDB\u884C\u5B9E\u540D\u5236\u7BA1\u7406\u7684\u76F8\u5173\u91D1\u878D\u670D\u52A1\uFF0C\u5177\u4F53\u5305\u62EC\uFF1A\u4FE1\u8D37\u3002  "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "2\u3001\u4E3A\u5411\u60A8\u63D0\u4F9B\u66F4\u6709\u9488\u5BF9\u6027\u7684\u670D\u52A1"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u5728\u60A8\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u7684\u8FC7\u7A0B\u4E2D\u5411\u60A8\u53D1\u9001\u670D\u52A1\u72B6\u6001\u7684\u901A\u77E5\u53CA\u5176\u4ED6\u5546\u4E1A\u6027\u7535\u5B50\u4FE1\u606F\u6216\u5411\u60A8\u63D0\u4F9B\u4E0E\u60A8\u66F4\u52A0\u76F8\u5173\u7684\u5E7F\u544A\u3002\u5982\u4E0D\u9700\u8981\u6D77\u822A\u767D\u6761\u5E73\u53F0\u63A8\u9001\u76F8\u5173\u4FE1\u606F\uFF0C\u60A8\u53EF\u8054\u7CFB\u6D77\u822A\u767D\u6761\u5E73\u53F0\u53D6\u6D88\u3001\u9000\u8BA2\u8BE5\u4FE1\u606F\u63A8\u9001\u670D\u52A1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "3\u3001\u4E3A\u5411\u60A8\u63D0\u4F9B\u9002\u5408\u4E8E\u60A8\u7684\u670D\u52A1"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u4E3A\u5411\u60A8\u63D0\u4F9B\u9002\u5408\u4E8E\u60A8\u7684\u670D\u52A1\uFF0C\u5E76\u6301\u7EED\u7EF4\u62A4\u3001\u6539\u5584\u3001\u4F18\u5316\u8FD9\u4E9B\u670D\u52A1\uFF0C\u5BF9\u60A8\u7684\u4FE1\u606F\u8FDB\u884C\u5206\u6790\u548C\u5904\u7406\uFF0C\u6216\u5C06\u60A8\u7684\u4FE1\u606F\u7528\u4E8E\u6570\u636E\u5EFA\u6A21\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "4\u3001\u4E3A\u60A8\u63D0\u4F9B\u60A8\u9009\u62E9\u7684\u6D77\u822A\u767D\u6761\u76F8\u5173\u670D\u52A1  "
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u5728\u60A8\u4F7F\u7528\u6D77\u822A\u767D\u6761\u5E73\u53F0\u4E0A\u7684\u670D\u52A1\u65F6\uFF0C\u60A8\u540C\u610F\u5E76\u6388\u6743\u6D77\u822A\u767D\u6761\u5E73\u53F0\u5C06\u60A8\u7684\u4FE1\u606F\u7528\u4E8E\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5982\u4E0B\u7528\u9014\uFF1A\u521B\u5EFA\u6570\u636E\u5206\u6790\u6A21\u578B\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u9002\u5408\u4E8E\u60A8\u7684\u670D\u52A1\uFF0C\u5E76\u7EF4\u62A4\u3001\u6539\u8FDB\u8FD9\u4E9B\u670D\u52A1\uFF1B\u6BD4\u8F83\u4FE1\u606F\u7684\u51C6\u786E\u6027\u5E76\u4E0E\u7B2C\u4E09\u65B9\u8FDB\u884C\u9A8C\u8BC1\uFF1B\u4E3A\u4F7F\u60A8\u77E5\u6653\u6D77\u822A\u767D\u6761\u670D\u52A1\u60C5\u51B5\u6216\u4E86\u89E3\u6D77 \u822A\u767D\u6761\u670D\u52A1\uFF0C\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u3001\u6D77\u822A\u767D\u6761\u7684\u7AD9\u5185\u4FE1/\u7CFB\u7EDF\u4FE1\u606F\u3001\u624B\u673A\u77ED\u4FE1\u548C\u4F20\u771F\u7B49\u65B9\u5F0F\u5411\u60A8\u53D1\u9001\u670D\u52A1\u72B6\u6001\u7684\u901A\u77E5\u3001\u8425\u9500\u6D3B\u52A8\u53CA\u5176\u4ED6\u5546\u4E1A\u6027\u7535\u5B50\u4FE1\u606F\uFF1B\u9884\u9632\u6216\u963B\u6B62\u975E\u6CD5\u7684\u6D3B\u52A8\uFF1B\u7ECF\u60A8\u8BB8\u53EF\u7684\u5176\u4ED6\u7528\u9014\u3002  "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "5\u3001\u63D0\u4F9B\u5BA2\u6237\u670D\u52A1\u53CA\u8FDB\u884C\u6295\u8BC9\u5904\u7406"
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u6211\u4EEC\u7684\u5BA2\u670D\u7CFB\u7EDF\u4F1A\u4F7F\u7528\u60A8\u7684\u8D26\u53F7\u4FE1\u606F\u548C\u4EA4\u6613\u4FE1\u606F\u3002"
    ),
    "\u4E3A\u4FDD\u8BC1\u60A8\u7684\u8D26\u53F7\u5B89\u5168\uFF0C\u6211\u4EEC\u7684\u547C\u53EB\u4E2D\u5FC3\u5BA2\u670D\u548C\u5728\u7EBF\u5BA2\u670D\u4F1A\u4F7F\u7528\u60A8\u7684\u8D26\u53F7\u4FE1\u606F\u4E0E\u60A8\u6838\u9A8C\u60A8\u7684\u8EAB\u4EFD\u3002\u5F53\u60A8\u9700\u8981\u6211\u4EEC\u63D0\u4F9B\u4E0E\u60A8\u4EA4\u6613\u4FE1\u606F\u76F8\u5173\u7684\u5BA2\u670D\u4E0E\u552E\u540E\u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u5C06\u4F1A\u67E5\u8BE2\u60A8\u7684\u4EA4\u6613\u4FE1\u606F\u3002 \u4E3A\u4E86\u4FDD\u8BC1\u60A8\u53CA\u4ED6\u4EBA\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u5982\u60A8\u88AB\u4ED6\u4EBA\u6295\u8BC9\u6216\u6295\u8BC9\u4ED6\u4EBA\uFF0C\u6211\u4EEC\u4F1A\u5C06\u60A8\u7684",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u59D3\u540D\u53CA\u8EAB\u4EFD\u8BC1\u53F7\u7801\u3001"
    ),
    "\u6295\u8BC9\u76F8\u5173\u5185\u5BB9\u63D0\u4F9B\u7ED9\u6D88\u8D39\u8005\u6743\u76CA\u4FDD\u62A4\u90E8\u95E8\u53CA\u76D1\u7BA1\u673A\u5173\uFF0C\u4EE5\u4FBF\u53CA\u65F6\u89E3\u51B3\u6295\u8BC9\u7EA0\u7EB7\uFF0C\u4F46\u6CD5\u5F8B\u6CD5\u89C4\u660E\u786E\u7981\u6B62\u63D0\u4F9B\u7684\u9664\u5916\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "6\u3001\u6539\u8FDB\u6211\u4EEC\u7684\u4EA7\u54C1\u4EE5\u4E3A\u60A8\u63D0\u4F9B\u66F4\u4E3A\u4E2A\u6027\u5316\u7684\u670D\u52A1 "
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u60A8\u7684\u4EA4\u6613\u4FE1\u606F\u3001\u6D4F\u89C8\u4FE1\u606F\u3001\u60A8\u7684\u5173\u6CE8\u4FE1\u606F\u8FDB\u884C\u6570\u636E\u5206\u6790\u4EE5\u5F62\u6210\u7528\u6237\u753B\u50CF\uFF0C\u7528\u6765\u5C06\u60A8\u611F\u5174\u8DA3\u7684\u4EA7\u54C1\u6216\u670D\u52A1\u4FE1\u606F\u5C55\u793A\u7ED9\u60A8\u3002"
    ),
    "\u6211\u4EEC\u8FD8\u53EF\u80FD\u4E3A\u4E86\u63D0\u4F9B\u670D\u52A1\u53CA\u6539\u8FDB\u670D\u52A1\u8D28\u91CF\u7684\u5408\u7406\u9700\u8981\u800C\u83B7\u5F97\u60A8\u4E0E\u5BA2\u670D\u8054\u7CFB\u65F6\u60A8\u63D0\u4F9B\u7684\u76F8\u5173\u4FE1\u606F\uFF0C \u60A8\u53C2\u4E0E\u95EE\u5377\u8C03\u67E5\u65F6\u5411\u6211\u4EEC\u53D1\u9001\u7684\u95EE\u5377\u7B54\u590D\u4FE1\u606F\u3002\u5BF9\u4E8E\u4ECE\u60A8\u7684\u5404\u79CD\u8BBE\u5907\u4E0A\u6536\u96C6\u5230\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u5B83\u4EEC\u8FDB\u884C\u5173\u8054\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u80FD\u5728\u8FD9\u4E9B\u8BBE\u5907\u4E0A\u4E3A\u60A8\u63D0\u4F9B\u4E00\u81F4\u7684\u670D\u52A1\u3002\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u6765\u81EA\u67D0\u9879\u670D\u52A1\u7684\u4FE1\u606F\u4E0E\u6765\u81EA\u5176\u4ED6\u670D\u52A1\u7684\u4FE1 \u606F\u7ED3\u5408\u8D77\u6765\uFF0C\u4EE5\u4FBF\u4E3A\u60A8\u63D0\u4F9B\u670D\u52A1\u3001\u4E2A\u6027\u5316\u5185\u5BB9\u548C\u5EFA\u8BAE\u3002\u4E0E\u4E2A\u6027\u5316\u670D\u52A1\u76F8\u5173\u7684\u753B\u50CF\u4FE1\u606F\u5C06\u6309\u7167\u672C\u9690\u79C1\u653F\u7B56\u4E0E\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u540C\u7B49\u4FDD\u62A4\u3002  "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "7\u3001\u4FDD\u969C\u4EA4\u6613\u5B89\u5168\u6240\u5FC5\u987B\u7684\u529F\u80FD "
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u4E3A\u63D0\u9AD8\u60A8\u4F7F\u7528\u6211\u4EEC\u7684\u4EA7\u54C1\u4E0E/\u6216\u670D\u52A1\u65F6\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\uFF0C\u66F4\u51C6\u786E\u5730\u9884\u9632\u9493\u9C7C\u7F51\u7AD9\u6B3A\u8BC8\u548C\u4FDD\u62A4\u8D26\u6237\u5B89\u5168\uFF0C",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u6211\u4EEC\u53EF\u80FD\u4F1A\u901A\u8FC7\u4E86\u89E3\u60A8\u7684\u6D4F\u89C8\u4FE1\u606F\u3001\u4EA4\u6613\u4FE1\u606F\u3001\u60A8\u5E38\u7528\u7684\u8F6F\u4EF6\u4FE1\u606F\u3001\u8BBE\u5907\u4FE1\u606F\u7B49\u624B\u6BB5\u6765\u5224\u65AD\u60A8\u7684\u8D26\u53F7\u98CE\u9669\uFF0C"
    ),
    "\u5E76\u53EF\u80FD\u4F1A\u8BB0\u5F55\u4E00\u4E9B\u6211\u4EEC\u8BA4\u4E3A\u6709\u98CE\u9669\u7684\u94FE\u63A5\uFF08\u201CURL\u201D\uFF09\uFF1B\u6211\u4EEC\u4E5F\u4F1A\u6536\u96C6\u60A8\u7684\u8BBE\u5907\u4FE1\u606F\u5BF9\u4E8E\u6D77\u822A\u767D\u6761\u7CFB\u7EDF\u95EE\u9898\u8FDB\u884C\u5206\u6790\u3001\u7EDF\u8BA1\u6D41\u91CF\u5E76\u6392\u67E5\u53EF\u80FD\u5B58\u5728\u7684\u98CE\u9669\u3001\u5728\u60A8\u9009\u62E9\u5411\u6211\u4EEC\u53D1\u9001\u5F02\u5E38\u4FE1\u606F\u65F6\u4E88\u4EE5\u6392\u67E5\u3002\u5982\u679C\u60A8\u4E0D\u63D0\u4F9B\u4E0A\u8FF0\u4FE1\u606F\uFF0C \u6211\u4EEC\u5219\u65E0\u6CD5\u5728\u60A8\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u8FC7\u7A0B\u4E2D\u5BF9\u60A8\u7684\u670D\u52A1\u53CA\u8D26\u53F7\u5B89\u5168\u8FDB\u884C\u4FDD\u62A4\u3002  "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u4E09\u3001\u7528\u6237\u4FE1\u606F\u7684\u5B58\u50A8"
  ),
  _react2.default.createElement(
    "div",
    null,
    "1.\xA0\u4FDD\u5B58\u5730\u57DF"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5C06\u50A8\u5B58\u4E8E\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5883\u5185\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    "2.\xA0\u4FDD\u5B58\u671F\u9650"
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u6839\u636E\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\uFF0C\u7F51\u7EDC\u501F\u8D37\u4E1A\u52A1\u4E2D\u501F\u8D37\u5408\u540C\u5E94\u81F3\u5C11\u4FDD\u5B58\u81F3\u5408\u540C\u5230\u671F\u540E\u4E94\u5E74\uFF0C\u4FE1\u606F\u62AB\u9732\u5185\u5BB9\u5E94\u81EA\u62AB\u9732\u4E4B\u65E5\u8D77\u4FDD\u5B58\u81F3\u5C11\u4E94\u5E74\u3002\u56E0\u6B64\uFF0C\u9664\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\u5916\uFF0C\u6211\u4EEC\u5C06\u6C38\u4E45\u4FDD\u5B58\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u4EE5\u53CA\u76F8\u5173\u501F\u8D37\u4E1A\u52A1\u6570\u636E\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u7ECF\u533F\u540D\u5316\u5904\u7406\u540E\u5C06\u5F62\u6210\u53EF\u4EE5\u4F7F\u7528\u53CA\u6D41\u901A\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u5BF9\u6B64\u7C7B\u6570\u636E\u7684\u4FDD\u5B58\u53CA\u5904\u7406\u65E0\u9700\u53E6\u884C\u901A\u77E5\u5E76\u5F81\u5F97\u60A8\u7684\u540C\u610F\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    "3. \u8D85\u671F\u5904\u7406"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u56E0\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u8981\u6C42\u6216\u5176\u4ED6\u5408\u7406\u56E0\u7D20\u5BFC\u81F4\u5B58\u50A8\u4FE1\u606F\u8D85\u671F\u7684\uFF0C\u6211\u4EEC\u5C06\u6839\u636E\u8981\u6C42\uFF0C\u5220\u9664\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u6216\u533F\u540D\u5316\u5904\u7406\uFF0C\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\u7684\u9664\u5916\u3002\u5982\u679C\u6211\u4EEC\u7EC8\u6B62\u670D\u52A1\u6216\u8FD0\u8425\uFF0C\u6211\u4EEC\u4F1A\u63D0\u524D\u5411\u60A8\u901A\u77E5\uFF0C\u5E76\u5728\u7EC8\u6B62\u670D\u52A1\u6216\u8FD0\u8425\u540E\u5BF9\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u5220\u9664\u6216\u533F\u540D\u5316\u5904\u7406"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u56DB\u3001 \u7528\u6237\u4FE1\u606F\u662F\u5426\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\uFF08\u4E00\uFF09\u5171\u4EAB "
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u627F\u8BFA\u4F1A\u6839\u636E\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u53CA\u76D1\u7BA1\u89C4\u5B9A\u5BF9\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF08\u5305\u62EC\u60A8\u4E3B\u52A8\u63D0\u4F9B\u7684\u548C\u6211\u4EEC\u6536\u96C6\u3001\u8BB0\u5F55\u7684\u6240\u6709\u6570\u636E\u3001\u4FE1\u606F\u3001\u8D44\u6599\u548C\u76F8\u5E94\u7684\u4EA4\u6613\u884C\u4E3A\u8BB0\u5F55\u3001\u4EA4\u6613\u6587\u4EF6\uFF0C\u4E0B\u540C\uFF09\u627F\u62C5\u4FDD\u5BC6\u4E49\u52A1\uFF0C\u5728\u4E0D\u900F\u9732\u5355\u4E2A\u60A8\u9690\u79C1\u8D44\u6599\u7684\u524D\u63D0\u4E0B\uFF0C\u672C\u5E73\u53F0\u6709\u6743\u5BF9\u6574\u4E2A\u60A8\u6570\u636E\u5E93\u8FDB\u884C\u5206\u6790 \u5E76\u5BF9\u60A8\u6570\u636E\u5E93\u8FDB\u884C\u5546\u4E1A\u4E0A\u7684\u5229\u7528\u3002\u4F46\u4E3A\u4E86\u5411\u60A8\u63D0\u4F9B\u66F4\u591A\u5143\u5316\u3001\u4E2A\u6027\u5316\u3001\u4F18\u8D28\u7684\u670D\u52A1\uFF0C",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u6D77\u822A\u767D\u6761\u5E73\u53F0\u53EF\u80FD\u4F1A\u901A\u8FC7\u4E0E\u7B2C\u4E09\u65B9\u8FDB\u884C\u5408\u4F5C\u6765\u4E3A\u60A8\u63D0\u4F9B\u76F8\u5173\u670D\u52A1\uFF0C\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u5982\u8BE5\u7B2C\u4E09\u65B9\u540C\u610F\u627F\u62C5\u4E0E\u6D77\u822A\u767D\u6761\u5E73\u53F0\u540C\u7B49\u7684\u4FDD\u62A4\u60A8\u9690\u79C1\\ \u7684\u8D23\u4EFB\uFF0C\u5219\u89C6\u4E3A\u60A8\u540C\u610F\u6D77\u822A\u767D\u6761\u5E73\u53F0\u53EF\u5C06\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u548C\u8D44\u6599\u63D0\u4F9B\u7ED9\u8BE5\u7B2C\u4E09\u65B9\uFF0C\u7531\u7B2C\u4E09\u65B9\u8FDB\u884C\u68C0\u7D22\u3001\u52A0\u5DE5\u3001\u5904\u7406\u3001\u9A8C\u8BC1\u3001\u5173\u8054\u3001\u4F7F\u7528\u53CA\u7559\u5B58\u3002"
    ),
    "\u8BE5\u7B2C\u4E09\u65B9\u5305\u62EC\u6D77\u822A\u767D\u6761\u5173\u8054\u516C\u53F8\uFF0C\u6280\u672F\u670D\u52A1\u7C7B\u5408\u4F5C\u4F19\u4F34\uFF0C\u5E7F\u544A\u3001\u6570\u636E\u5206\u6790\u7C7B\u5408\u4F5C \u4F19\u4F34\uFF0C\u91D1\u878D\u3001\u5F81\u4FE1\u670D\u52A1\u7C7B\u5408\u4F5C\u4F19\u4F34\u4EE5\u53CA\u503A\u6743\u6536\u8D2D\u3001\u8FFD\u7D22\u7C7B\u5408\u4F5C\u4F19\u4F34\u7B49\u3002  "
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u5411\u5408\u4F5C\u4F19\u4F34\u53CA\u7B2C\u4E09\u65B9\u5171\u4EAB\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u7684\u60C5\u5F62\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    { className: "table" },
    _react2.default.createElement(
      "div",
      { className: "td" },
      _react2.default.createElement(
        "p",
        { className: "weight a1" },
        "\u670D\u52A1\u540D\u79F0"
      ),
      _react2.default.createElement(
        "p",
        { className: "weight aas" },
        "\u6D77\u822A\u767D\u6761"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "th" },
      _react2.default.createElement(
        "p",
        { className: "weight a1" },
        "\u573A\u666F\u63CF\u8FF0"
      ),
      _react2.default.createElement(
        "p",
        { className: "a2" },
        "\u89E6\u53D1\u3001\u7533\u8BF7\u3001\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1"
      ),
      _react2.default.createElement(
        "p",
        { className: "a3" },
        "\u7B7E\u8BA2\u5408\u540C"
      ),
      _react2.default.createElement(
        "p",
        { className: "a4" },
        "\u60A8\u8FDD\u53CD\u76F8\u5173\u534F\u8BAE"
      ),
      _react2.default.createElement(
        "p",
        { className: "a5" },
        "\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1"
      ),
      _react2.default.createElement(
        "p",
        { className: "a6" },
        "\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1"
      ),
      _react2.default.createElement(
        "p",
        { className: "a7" },
        "\u670D\u52A1\u4E89\u8BAE"
      ),
      _react2.default.createElement(
        "p",
        { className: "a8" },
        "\u53F8\u6CD5\u673A\u5173\u548C\u653F\u5E9C\u90E8\u95E8\u7684\u5408\u6CD5\u8981\u6C42"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "th" },
      _react2.default.createElement(
        "p",
        { className: "weight a1" },
        "\u5171\u4EAB\u4FE1\u606F\u7C7B\u578B"
      ),
      _react2.default.createElement(
        "p",
        { className: "a2" },
        "\u4E2A\u4EBA\u57FA\u7840\u4FE1\u606F\u53CA\u670D\u52A1\u6240\u5FC5\u987B\u7684\u76F8\u5173\u4FE1\u606F"
      ),
      _react2.default.createElement(
        "p",
        { className: "a3" },
        "\u59D3\u540D\u53CA\u8EAB\u4EFD\u8BC1\u53F7\u7801\u7B49\u76F8\u5173\u4E2A\u4EBA\u4FE1\u606F"
      ),
      _react2.default.createElement(
        "p",
        { className: "a4" },
        "\u5C65\u7EA6\u548C\u8FDD\u7EA6\u4FE1\u606F\uFF1B\u4FE1\u7528\u4FE1\u606F\u548C\u4E0D\u826F\u4FE1\u606F"
      ),
      _react2.default.createElement(
        "p",
        { className: "a5" },
        "\u4E2A\u4EBA\u57FA\u7840\u4FE1\u606F\u53CA\u4FE1\u7528\u3001\u98CE\u9669\u8BC4\u4F30\u6240\u9700\u7684\u6570\u636E"
      ),
      _react2.default.createElement(
        "p",
        { className: "a6" },
        "\u4E2A\u4EBA\u57FA\u7840\u4FE1\u606F\u53CA\u5FC5\u8981\u7684\u76F8\u5173\u4FE1\u606F"
      ),
      _react2.default.createElement(
        "p",
        { className: "a7" },
        "\u60A8\u7684\u59D3\u540D\u53CA\u6709\u6548\u8BC1\u4EF6\u53F7\u7801\u3001\u8054\u7CFB\u65B9\u5F0F\u548C\u4E0E\u4E89\u8BAE\u76F8\u5173\u7684\u4FE1\u606F"
      ),
      _react2.default.createElement(
        "p",
        { className: "a8" },
        "\u4E2A\u4EBA\u8D44\u6599"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "th tg" },
      _react2.default.createElement(
        "p",
        { className: "weight a1" },
        "\u5171\u4EAB\u4FE1\u606F\u63A5\u6536\u65B9"
      ),
      _react2.default.createElement(
        "p",
        { className: "a2" },
        "\u6D77\u822A\u767D\u6761\u5173\u8054\u516C\u53F8\uFF0C\u6280\u672F\u670D\u52A1\u7C7B\u5408\u4F5C\u4F19\u4F34\uFF0C\u5E7F\u544A\u3001\u6570\u636E\u5206\u6790\u7C7B\u5408\u4F5C\u4F19\u4F34\uFF0C\u91D1\u878D\u3001\u5F81\u4FE1\u670D\u52A1\u7C7B\u5408\u4F5C\u4F19\u4F34\u4EE5\u53CA\u503A\u6743\u6536\u8D2D\u3001\u8FFD\u7D22\u7C7B\u5408\u4F5C\u4F19\u4F34\u7B49"
      ),
      _react2.default.createElement(
        "p",
        { className: "a3" },
        "\u7B2C\u4E09\u65B9\u7535\u5B50\u7B7E\u7EA6\u670D\u52A1\u673A\u6784"
      ),
      _react2.default.createElement(
        "p",
        { className: "a4" },
        "\u60A8\u7684\u4EA4\u6613\u5BF9\u624B\u3001\u76F8\u5173\u4E1A\u52A1\u7684\u5408\u4F5C\u94F6\u884C\u3001\u6D88\u8D39\u91D1\u878D\u516C\u53F8\u3001\u5C0F\u989D\u8D37\u6B3E\u516C\u53F8\u3001\u62C5\u4FDD\u673A\u6784\u3001\u4FDD\u9669\u673A\u6784\u4EE5\u53CA\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u7B49\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        { className: "a5" },
        "\u6570\u636E\u670D\u52A1\u673A\u6784"
      ),
      _react2.default.createElement(
        "p",
        { className: "a6" },
        "\u5BA1\u8BA1\u3001\u6CD5\u5F8B\u7B49\u5916\u90E8\u4E13\u4E1A\u987E\u95EE"
      ),
      _react2.default.createElement(
        "p",
        { className: "a7" },
        "\u4E0E\u8BE5\u7B14\u4EA4\u6613\u6709\u5173\u7684\u5176\u4ED6\u7528\u6237\u3001\u76D1\u7BA1/\u884C\u653F\u673A\u5173\u6216\u60A8\u4E0E\u4E89\u8BAE\u76F8\u5173\u65B9\u534F\u8BAE\u7EA6\u5B9A\u7684\u5176\u4ED6\u4E89\u8BAE\u89E3\u51B3\u673A\u6784"
      ),
      _react2.default.createElement(
        "p",
        { className: "a8" },
        "\u53F8\u6CD5\u673A\u5173\u548C\u653F\u5E9C\u90E8\u95E8"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "th" },
      _react2.default.createElement(
        "p",
        { className: "weight a1" },
        "\u5171\u4EAB\u4FE1\u606F\u76EE\u7684"
      ),
      _react2.default.createElement(
        "p",
        { className: "a2" },
        "\u65B9\u4FBF\u60A8\u66F4\u4FBF\u6377\u5730\u63A5\u53D7\u6D77\u822A\u767D\u6761\u53CA\u6D77\u822A\u767D\u6761\u5173\u8054\u65B9\u6216\u8005\u5408\u4F5C\u673A\u6784\u63D0\u4F9B\u7684\u670D\u52A1"
      ),
      _react2.default.createElement(
        "p",
        { className: "a3" },
        "\u5B8C\u6210\u7535\u5B50\u7B7E\u540D"
      ),
      _react2.default.createElement(
        "p",
        { className: "a4" },
        "\u5EFA\u7ACB\u4FE1\u7528\u4F53\u7CFB"
      ),
      _react2.default.createElement(
        "p",
        { className: "a5" },
        "\u5BF9\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u4EA4\u53C9\u9A8C\u8BC1\u3001\u8BC4\u4F30\u60A8\u7684\u4FE1\u7528\u72B6\u51B5\u3001\u5C65\u7EA6\u80FD\u529B\u548C\u98CE\u9669\u627F\u53D7\u6C34\u5E73"
      ),
      _react2.default.createElement(
        "p",
        { className: "a6" },
        "\u8BC4\u4F30\u6211\u4EEC\u7684\u8D22\u52A1\u4E0E\u98CE\u9669\u80FD\u529B"
      ),
      _react2.default.createElement(
        "p",
        { className: "a7" },
        "\u53CA\u65F6\u89E3\u51B3\u7EA0\u7EB7"
      ),
      _react2.default.createElement(
        "p",
        { className: "a8" },
        "\u6839\u636E\u6709\u5173\u6CD5\u5F8B\u8981\u6C42"
      )
    )
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u5411\u5408\u4F5C\u4F19\u4F34\u53CA\u7B2C\u4E09\u65B9\u5171\u4EAB\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u60C5\u5F62\u7684\u63CF\u8FF0\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    null,
    "1.\u5728\u60A8\u901A\u8FC7\u6D77\u822A\u767D\u6761\u5E73\u53F0\u89E6\u53D1\u3001\u7533\u8BF7\u3001\u4F7F\u7528\u6D77\u822A\u767D\u6761\u5173\u8054\u65B9\u6216\u5408\u4F5C\u673A\u6784\u670D\u52A1\u6216\u901A\u8FC7\u6D77\u822A\u767D\u6761\u5173\u8054\u65B9\u6216\u5408\u4F5C\u670D\u52A1\u673A\u6784\u89E6\u53D1\u3001\u7533\u8BF7\u3001\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u65F6\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u60A8\u5728\u7B26\u5408\u6CD5\u5F8B\u548C\u76D1\u7BA1\u89C4\u5B9A\u7684\u524D\u63D0\u4E0B\u66F4\u4FBF\u6377\u5730\u63A5\u53D7\u6D77\u822A\u767D\u6761 \u53CA\u6D77\u822A\u767D\u6761\u5173\u8054\u65B9\u6216\u8005\u5408\u4F5C\u673A\u6784\u63D0\u4F9B\u7684\u670D\u52A1\uFF0C\u9700\u8981\u5C06\u60A8\u4EAB\u53D7\u670D\u52A1\u6240\u5FC5\u987B\u63D0\u4F9B\u7684\u4E2A\u4EBA\u4FE1\u606F\u5728\u4E0A\u8FF0\u673A\u6784\u4E4B\u95F4\u5171\u4EAB\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "2.\u60A8\u5728\u672C\u5E73\u53F0\u6240\u7B7E\u8BA2\u7684\u5408\u540C\u5747\u91C7\u7528\u7535\u5B50\u5408\u540C\u3001\u7535\u5B50\u7B7E\u540D\u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5E73\u53F0\u8FD0\u8425\u65B9\u9700\u5C06\u60A8\u7684\u59D3\u540D\u53CA\u8EAB\u4EFD\u8BC1\u53F7\u7801\u7B49\u76F8\u5173\u4E2A\u4EBA\u4FE1\u606F\u63D0\u4F9B\u7ED9\u7B2C\u4E09\u65B9\u7535\u5B50\u7B7E\u7EA6\u670D\u52A1\u673A\u6784\u4EE5\u5B8C\u6210\u7535\u5B50\u7B7E\u540D\uFF0C\u5BF9\u6B64\u60A8\u77E5\u6089\u5E76\u540C\u610F\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "3.\u5728\u60A8\u8FDD\u53CD\u4E0E\u6D77\u822A\u767D\u6761\u6216\u6D77\u822A\u767D\u6761\u5408\u4F5C\u673A\u6784\u6216\u8005\u5173\u8054\u65B9\u7B7E\u7F72\u7684\u76F8\u5173\u534F\u8BAE\u65F6\uFF0C\u5411\u60A8\u7684\u4EA4\u6613\u5BF9\u624B\u3001\u76F8\u5173\u4E1A\u52A1\u7684\u5408\u4F5C\u94F6\u884C\u3001\u6D88\u8D39\u91D1\u878D\u516C\u53F8\u3001\u5C0F\u989D\u8D37\u6B3E\u516C\u53F8\u3001\u62C5\u4FDD\u673A\u6784\u3001\u4FDD\u9669\u673A\u6784\u4EE5\u53CA\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u7B49\u63D0\u4F9B\u60A8\u5728\u76F8 \u5173\u534F\u8BAE\u9879\u4E0B\u7684\u5C65\u7EA6\u548C\u8FDD\u7EA6\u4FE1\u606F\uFF1B\u540C\u65F6\u4E3A\u5EFA\u7ACB\u4FE1\u7528\u4F53\u7CFB\uFF0C\u60A8\u540C\u610F\u5E76\u6388\u6743\u5728\u7B26\u5408\u76F8\u5173\u6CD5\u5F8B\u89C4\u5B9A\u7684\u524D\u63D0\u4E0B\u5C06\u60A8\u7684\u4FE1\u7528\u4FE1\u606F\u548C\u4E0D\u826F\u4FE1\u606F\u53D1\u9001\u5F81\u4FE1\u673A\u6784\u4E14\u4E0D\u518D\u53E6\u884C\u901A\u77E5\u60A8\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "4.\u9664\u6CD5\u5F8B\u53E6\u6709\u89C4\u5B9A\u5916\uFF0C\u4E3A\u4E86\u63D0\u5347\u4FE1\u606F\u5904\u7406\u6548\u7387\uFF0C\u964D\u4F4E\u4FE1\u606F\u5904\u7406\u6210\u672C\uFF0C\u6216\u63D0\u9AD8\u4FE1\u606F\u5904\u7406\u51C6\u786E\u6027\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u59D4\u6258\u6709\u80FD\u529B\u7684\u6570\u636E\u670D\u52A1\u673A\u6784\u4EE3\u8868\u6211\u4EEC\uFF0C\u5728\u9075\u5FAA\u672C\u9690\u79C1\u653F\u7B56\u4EE5\u53CA\u6388\u6743\u8303\u56F4\u7684\u60C5\u51B5\u4E0B\u5BF9\u60A8\u7684 \u4FE1\u606F\u8FDB\u884C\u52A0\u5DE5\u3001\u5206\u6790\u3001\u5904\u7406\uFF0C\u4EE5\u534F\u52A9\u5BF9\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u4EA4\u53C9\u9A8C\u8BC1\u3001\u8BC4\u4F30\u60A8\u7684\u4FE1\u7528\u72B6\u51B5\u3001\u5C65\u7EA6\u80FD\u529B\u548C\u98CE\u9669\u627F\u53D7\u6C34\u5E73\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "5.\u4E3A\u4E86\u4F9D\u6CD5\u5408\u89C4\u5F00\u5C55\u4E1A\u52A1\u5E76\u8BC4\u4F30\u6211\u4EEC\u7684\u8D22\u52A1\u4E0E\u98CE\u9669\u80FD\u529B\uFF0C\u5411\u6211\u4EEC\u8058\u8BF7\u7684\u5BA1\u8BA1\u3001\u6CD5\u5F8B\u7B49\u5916\u90E8\u4E13\u4E1A\u987E\u95EE\u62AB\u9732\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u5E76\u8981\u6C42\u5176\u6309\u7167\u76F8\u5173\u6CD5\u5F8B\u89C4\u5B9A\u548C\u76D1\u7BA1\u8981\u6C42\u5904\u7406\u60A8\u7684\u4FE1\u606F\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "6.\u5F53\u60A8\u56E0\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u53D1\u751F\u4E89\u8BAE\u65F6\uFF0C\u4E3A\u4E86\u4FDD\u62A4\u60A8\u53CA\u4E0E\u8BE5\u7B14\u4EA4\u6613\u6709\u5173\u7684\u5176\u4ED6\u7528\u6237\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u60A8\u7684\u59D3\u540D\u53CA\u6709\u6548\u8BC1\u4EF6\u53F7\u7801\u3001\u8054\u7CFB\u65B9\u5F0F\u548C\u4E0E\u4E89\u8BAE\u76F8\u5173\u7684\u4FE1\u606F\u63D0\u4F9B\u7ED9\u4E0E\u8BE5\u7B14\u4EA4\u6613\u6709\u5173\u7684\u5176\u4ED6\u7528\u6237\u3001 \u76D1\u7BA1/\u884C\u653F\u673A\u5173\u6216\u60A8\u4E0E\u4E89\u8BAE\u76F8\u5173\u65B9\u534F\u8BAE\u7EA6\u5B9A\u7684\u5176\u4ED6\u4E89\u8BAE\u89E3\u51B3\u673A\u6784\uFF0C\u4EE5\u4FBF\u53CA\u65F6\u89E3\u51B3\u7EA0\u7EB7\uFF0C\u4F46\u6CD5\u5F8B\u6CD5\u89C4\u660E\u786E\u7981\u6B62\u63D0\u4F9B\u7684\u9664\u5916\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    null,
    "7.\u672C\u5E73\u53F0\u6709\u4E49\u52A1\u6839\u636E\u6709\u5173\u6CD5\u5F8B\u8981\u6C42\u5411\u53F8\u6CD5\u673A\u5173\u548C\u653F\u5E9C\u90E8\u95E8\u63D0\u4F9B\u60A8\u7684\u4E2A\u4EBA\u8D44\u6599\u3002 "
  ),
  _react2.default.createElement(
    "div",
    null,
    "8.\u5176\u4ED6\u83B7\u5F97\u60A8\u4E8B\u5148\u6388\u6743\u540C\u610F\u7684\u60C5\u5F62\u3002 \u6D77\u822A\u767D\u6761\u5173\u8054\u65B9\u3001\u5408\u4F5C\u673A\u6784\u5728\u672A\u5F97\u5230\u60A8\u7684\u660E\u793A\u540C\u610F\u6216\u6388\u6743\u4EE5\u524D\u65E0\u6743\u5C06\u5171\u4EAB\u7684\u4E2A\u4EBA\u4FE1\u606F\u7528\u4E8E\u672C\u9690\u79C1\u653F\u7B56\u7EA6\u5B9A\u8303\u56F4\u4EE5\u5916\u7684\u5176\u4ED6\u4EFB\u4F55\u7528\u9014\u3002 \u672C\u5E73\u53F0\u5BF9\u60A8\u7684\u8D44\u6599\u7684\u62AB\u9732\uFF1A\u867D\u7136\u672C\u5E73\u53F0\u91C7\u7528\u884C\u4E1A\u6807\u51C6\u60EF\u4F8B\u4EE5\u4FDD\u62A4\u60A8\u7684\u4E2A \u4EBA\u8D44\u6599\uFF0C",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u9274\u4E8E\u6280\u672F\u9650\u5236\uFF0C\u672C\u5E73\u53F0\u4E0D\u80FD\u786E\u4FDD\u60A8\u7684\u5168\u90E8\u79C1\u4EBA\u901A\u8BAF\u53CA\u5176\u4ED6\u8D44\u6599\u4E0D\u4F1A\u901A\u8FC7\u672C\u9690\u79C1\u89C4\u5219\u4E2D\u672A\u5217\u660E\u7684\u9014\u5F84\u6CC4\u9732\u51FA\u53BB\u3002"
    ),
    "  "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\uFF08\u4E8C\uFF09\u8F6C\u8BA9"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u4E0D\u4F1A\u5C06\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8F6C\u8BA9\u7ED9\u4EFB\u4F55\u516C\u53F8\u3001\u7EC4\u7EC7\u53CA\u81EA\u7136\u4EBA\uFF0C\u4F46\u4EE5\u4E0B\u60C5\u51B5\u9664\u5916\uFF1A 1.\u968F\u7740\u6211\u4EEC\u4E1A\u52A1\u7684\u6301\u7EED\u53D1\u5C55\uFF0C\u6211\u4EEC\u6709\u53EF\u80FD\u8FDB\u884C\u5408\u5E76\u3001\u6536\u8D2D\u3001\u8D44\u4EA7\u8F6C\u8BA9\u6216\u7C7B\u4F3C\u7684\u4EA4\u6613\uFF0C\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u6709\u53EF\u80FD\u4F5C\u4E3A\u6B64\u7C7B\u4EA4\u6613\u7684\u4E00\u90E8\u5206 \u800C\u88AB\u8F6C\u79FB\u3002\u6211\u4EEC\u5C06\u5728\u8F6C\u79FB\u524D\u901A\u77E5\u60A8\uFF0C\u5E76\u8981\u6C42\u65B0\u7684\u6301\u6709\u60A8\u4E2A\u4EBA\u4FE1\u606F\u7684\u516C\u53F8\u3001\u7EC4\u7EC7\u7EE7\u7EED\u53D7\u672C\u653F\u7B56\u7684\u7EA6\u675F\u3002\u5982\u53D8\u66F4\u4E2A\u4EBA\u4FE1\u606F\u4F7F\u7528\u76EE\u7684\u65F6\uFF0C\u6211\u4EEC\u5C06\u8981\u6C42\u8BE5\u516C\u53F8\u3001\u7EC4\u7EC7\u91CD\u65B0\u53D6\u5F97\u60A8\u7684\u660E\u786E\u540C\u610F\u3002 2.\u4E8B\u5148\u83B7\u5F97\u60A8\u7684\u660E\u786E\u540C\u610F\u6216\u6388\u6743 \u7684\u60C5\u51B5\u4E0B\u5411\u7B2C\u4E09\u65B9\u8F6C\u8BA9\u3002 3.\u6839\u636E\u6CD5\u5F8B\u6CD5\u89C4\u6216\u5F3A\u5236\u6027\u7684\u884C\u653F\u6216\u53F8\u6CD5\u8981\u6C42\u800C\u8F6C\u8BA9\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\uFF08\u4E09\uFF09\u516C\u5F00\u62AB\u9732 "
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u4EC5\u4F1A\u5728\u4EE5\u4E0B\u60C5\u51B5\u4E0B\uFF0C\u4E14\u91C7\u53D6\u7B26\u5408\u4E1A\u754C\u6807\u51C6\u7684\u5B89\u5168\u9632\u62A4\u63AA\u65BD\u7684\u524D\u63D0\u4E0B\uFF0C\u624D\u4F1A\u516C\u5F00\u62AB\u9732\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1A "
  ),
  _react2.default.createElement(
    "div",
    null,
    "1. \u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u5728\u60A8\u660E\u786E\u540C\u610F\u7684\u62AB\u9732\u65B9\u5F0F\u4E0B\u62AB\u9732\u60A8\u6240\u6307\u5B9A\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1B  "
  ),
  _react2.default.createElement(
    "div",
    null,
    "2. \u6839\u636E\u6CD5\u5F8B\u3001\u6CD5\u89C4\u7684\u8981\u6C42\u3001\u5F3A\u5236\u6027\u7684\u884C\u653F\u6267\u6CD5\u6216\u53F8\u6CD5\u8981\u6C42\u6240\u5FC5\u987B\u63D0\u4F9B\u60A8\u4E2A\u4EBA\u4FE1\u606F\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u4F9D\u636E\u6240\u8981\u6C42\u7684\u4E2A\u4EBA\u4FE1\u606F\u7C7B\u578B\u548C\u62AB\u9732\u65B9\u5F0F\u516C\u5F00\u62AB\u9732\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u5728\u7B26\u5408\u6CD5\u5F8B\u6CD5\u89C4\u7684\u524D\u63D0\u4E0B\uFF0C \u5F53\u6211\u4EEC\u6536\u5230\u4E0A\u8FF0\u62AB\u9732\u4FE1\u606F\u7684\u8BF7\u6C42\u65F6\uFF0C\u6211\u4EEC\u4F1A\u8981\u6C42\u5FC5\u987B\u51FA\u5177\u4E0E\u4E4B\u76F8\u5E94\u7684\u6CD5\u5F8B\u6587\u4EF6\uFF0C\u5982\u4F20\u7968\u6216\u8C03\u67E5\u51FD\u3002\u6211\u4EEC\u575A\u4FE1\uFF0C\u5BF9\u4E8E\u8981\u6C42\u6211\u4EEC \u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u5E94\u8BE5\u5728\u6CD5\u5F8B\u5141\u8BB8\u7684\u8303\u56F4\u5185\u5C3D\u53EF\u80FD\u4FDD\u6301\u900F\u660E\u3002\u6211\u4EEC\u5BF9\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u8FDB\u884C\u4E86\u614E\u91CD\u7684\u5BA1\u67E5\uFF0C\u4EE5\u786E\u4FDD\u5176\u5177\u5907\u5408\u6CD5\u4F9D\u636E\uFF0C\u4E14\u4EC5\u9650\u4E8E\u6267\u6CD5\u90E8\u95E8\u56E0\u7279\u5B9A\u8C03\u67E5\u76EE\u7684\u4E14\u6709\u5408\u6CD5\u6743\u5229\u83B7\u53D6\u7684\u6570\u636E\u3002  "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u4E94\u3001 \u7528\u6237\u4FE1\u606F\u5982\u4F55\u4FDD\u62A4"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u4E3A\u4E86\u4FDD\u969C\u60A8\u8BBF\u95EE\u6211\u4EEC\u65F6\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u91C7\u53D6\u4E86\u5404\u79CD\u5B89\u5168\u63AA\u65BD\u3002\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5904\u4E8E\u5404\u79CD\u5B89\u5168\u7F51\u7EDC\u7684\u4FDD\u62A4\uFF0C\u53EA\u6709\u5C11\u6570\u62E5\u6709\u7279\u6B8A\u8BBF\u95EE\u6743\u9650\u7684\u4EBA\u58EB\u624D\u80FD\u8BBF\u95EE\u8BE5\u4FE1\u606F\uFF0C\u800C\u4E14\u6211\u4EEC\u8981\u6C42\u4ED6\u4EEC\u5BF9\u4FE1\u606F\u4FDD\u5BC6\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    null,
    "1. \u6570\u636E\u5B89\u5168\u6280\u672F\u63AA\u65BD"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u4F1A\u91C7\u7528\u7B26\u5408\u4E1A\u754C\u6807\u51C6\u7684\u5B89\u5168\u9632\u62A4\u63AA\u65BD\uFF0C\u5305\u62EC\u5EFA\u7ACB\u5408\u7406\u7684\u5236\u5EA6\u89C4\u8303\u3001\u5B89\u5168\u6280\u672F\u6765\u9632\u6B62\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u906D\u5230\u672A\u7ECF\u6388\u6743\u7684\u8BBF\u95EE\u4F7F\u7528\u3001\u4FEE\u6539\uFF0C\u514D\u6570\u636E\u7684\u635F\u574F\u6216\u4E22\u5931\uFF1B\u6D77\u822A\u767D\u6761\u7684\u7F51\u7EDC\u670D\u52A1\u91C7\u53D6\u4E86\u4F20\u8F93\u5C42\u5B89\u5168\u534F\u8BAE\u7B49\u52A0\u5BC6\u6280\u672F\uFF0C\u786E\u4FDD\u7528\u6237\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7684\u5B89\u5168\uFF1B\u6D77\u822A\u767D\u6761\u91C7\u53D6\u52A0\u5BC6\u6280\u672F\u5BF9\u7528\u6237\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u52A0\u5BC6\u4FDD\u5B58\uFF0C \u5E76\u901A\u8FC7\u9694\u79BB\u6280\u672F\u8FDB\u884C\u9694\u79BB\uFF1B\u6D77\u822A\u767D\u6761\u91C7\u7528\u4E25\u683C\u7684\u6570\u636E\u8BBF\u95EE\u6743\u9650\u63A7\u5236\u548C\u591A\u91CD\u8EAB\u4EFD\u8BA4\u8BC1\u6280\u672F\u4FDD\u62A4\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u907F\u514D\u6570\u636E\u88AB\u8FDD\u89C4\u4F7F\u7528\uFF1B\u6D77\u822A\u767D\u6761\u91C7\u7528\u4EE3\u7801\u5B89\u5168\u81EA\u52A8\u68C0\u67E5\u3001\u6570\u636E\u8BBF\u95EE\u65E5\u5FD7\u5206\u6790\u6280\u672F\u8FDB\u884C\u4E2A\u4EBA\u4FE1\u606F\u5B89\u5168\u5BA1\u8BA1\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    "2. \u5176\u4ED6\u5B89\u5168\u63AA\u65BD"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6D77\u822A\u767D\u6761\u901A\u8FC7\u5EFA\u7ACB\u6570\u636E\u5206\u7C7B\u5206\u7EA7\u5236\u5EA6\u3001\u6570\u636E\u5B89\u5168\u7BA1\u7406\u89C4\u8303\u6765\u7BA1\u7406\u89C4\u8303\u4E2A\u4EBA\u4FE1\u606F\u7684\u5B58\u50A8\u548C\u4F7F\u7528\uFF1B\u6D77\u822A\u767D\u6761\u901A\u8FC7\u4FE1\u606F\u63A5\u89E6\u8005\u4FDD\u5BC6\u534F\u8BAE\u3001\u76D1\u63A7\u548C\u5BA1\u8BA1\u673A\u5236\u6765\u5BF9\u6570\u636E\u8FDB\u884C\u5168\u9762\u5B89\u5168\u63A7\u5236\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    "3. \u6211\u4EEC\u4EC5\u5141\u8BB8\u6709\u5FC5\u8981\u77E5\u6653\u8FD9\u4E9B\u4FE1\u606F\u7684\u6D77\u822A\u767D\u6761\u53CA\u5173\u8054\u65B9\u7684\u5458\u5DE5\u3001\u5408\u4F5C\u4F19\u4F34\u8BBF\u95EE\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u5E76\u4E3A\u6B64\u8BBE\u7F6E\u4E86\u4E25\u683C\u7684\u8BBF\u95EE\u6743\u9650\u63A7\u5236\u548C\u76D1\u63A7\u673A\u5236\u3002\u6211\u4EEC\u540C\u65F6\u8981\u6C42\u53EF\u80FD\u63A5\u89E6\u5230\u60A8\u4E2A\u4EBA\u4FE1\u606F\u7684\u6240\u6709\u4EBA\u5458\u5C65\u884C\u76F8\u5E94\u7684\u4FDD\u5BC6\u4E49\u52A1\u3002\u5982\u679C\u672A\u80FD\u5C65\u884C\u8FD9\u4E9B\u4E49\u52A1\uFF0C\u53EF\u80FD\u4F1A\u88AB\u8FFD\u7A76\u6CD5\u5F8B\u8D23\u4EFB\u6216\u88AB\u4E2D\u6B62\u5408\u4F5C\u5173\u7CFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    "4. \u6211\u4EEC\u4F1A\u91C7\u53D6\u4E00\u5207\u5408\u7406\u53EF\u884C\u7684\u63AA\u65BD\uFF0C\u786E\u4FDD\u672A\u6536\u96C6\u65E0\u5173\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u6211\u4EEC\u53EA\u4F1A\u5728\u8FBE\u6210\u672C\u653F\u7B56\u6240\u8FF0\u76EE\u7684\u6240\u9700\u7684\u671F\u9650\u5185\u4FDD\u7559\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u9664\u975E\u9700\u8981\u5EF6\u957F\u4FDD\u7559\u671F\u6216\u53D7\u5230\u6CD5\u5F8B\u7684\u5141\u8BB8\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "5. \u4E92\u8054\u7F51\u5E76\u975E\u7EDD\u5BF9\u5B89\u5168\u7684\u73AF\u5883\uFF0C\u800C\u4E14\u7535\u5B50\u90AE\u4EF6\u3001\u5373\u65F6\u901A\u8BAF\u3001\u793E\u4EA4\u8F6F\u4EF6\u7B49\u4E0E\u5176\u4ED6\u7528\u6237\u7684\u4EA4\u6D41\u65B9\u5F0F\u65E0\u6CD5\u786E\u5B9A\u662F\u5426\u5B8C\u5168\u52A0\u5BC6\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4F7F\u7528\u6B64\u7C7B\u5DE5\u5177\u65F6\u8BF7\u4F7F\u7528\u590D\u6742\u5BC6\u7801\uFF0C\u5E76\u6CE8\u610F\u4FDD\u62A4\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5B89\u5168\u3002\u5982\u679C\u60A8\u5BF9\u6211\u4EEC\u7684\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u53EF\u901A\u8FC7\u672C\u653F\u7B56\u6700\u4E0B\u65B9\u7EA6\u5B9A\u7684\u8054\u7CFB\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC\u3002 \u5982\u60A8\u53D1\u73B0\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4FE1\u606F\u6CC4\u5BC6\uFF0C\u5C24\u5176\u662F\u60A8\u7684\u8D26\u6237\u53CA\u5BC6\u7801\u53D1\u751F\u6CC4\u9732\uFF0C\u8BF7\u60A8\u7ACB\u5373\u901A\u8FC7\u672C\u653F\u7B56\u7B2C\u516B\u6761\u3010\u5982\u4F55\u8054\u7CFB\u6211\u4EEC\u3011\u5C55\u793A\u7684\u8054\u7CFB\u65B9\u5F0F\u8054\u7EDC\u6211\u4EEC\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u91C7\u53D6\u76F8\u5E94\u63AA\u65BD\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u516D\u3001 cookies \u5982\u4F55\u4F7F\u7528"
  ),
  _react2.default.createElement(
    "div",
    null,
    "1. \u4E3A\u5B9E\u73B0\u60A8\u8054\u673A\u4F53\u9A8C\u7684\u4E2A\u6027\u5316\u9700\u6C42\uFF0C\u4F7F\u60A8\u83B7\u5F97\u66F4\u8F7B\u677E\u7684\u8BBF\u95EE\u4F53\u9A8C\uFF0C\u6211\u4EEC\u4F1A\u5728\u60A8\u7684\u8BA1\u7B97\u673A\u6216\u79FB\u52A8\u8BBE\u5907\u4E0A\u53D1\u9001\u4E00\u4E2A\u6216\u591A\u4E2A\u540D\u4E3ACookies\u7684\u5C0F\u6570\u636E\u6587\u4EF6\uFF0C\u6307\u5B9A\u7ED9\u60A8\u7684Cookies \u662F\u552F\u4E00\u7684\uFF0C\u5B83\u53EA\u80FD\u88AB\u5C06Cookies\u53D1\u5E03\u7ED9\u60A8\u7684\u57DF\u4E2D\u7684Web\u670D\u52A1\u5668\u8BFB\u53D6\u3002 \u6211\u4EEC\u5411\u60A8\u53D1\u9001Cookies\u662F\u4E3A\u4E86\u7B80\u5316\u60A8\u91CD\u590D\u767B\u5F55\u7684\u6B65\u9AA4\u3001\u5B58\u50A8\u60A8\u7684\u6D4F\u89C8\u4E60\u60EF\u548C\u504F\u597D\u7B49\u6570\u636E\u8FDB\u800C\u5E2E\u52A9\u60A8\u7B80\u5316\u4E2A\u4EBA\u4FE1\u606F\u7684\u586B\u5199\u3001\u63D0\u4F9B\u60A8\u7684\u670D\u52A1\u504F\u597D\u8BBE\u7F6E\u3001\u5E2E\u52A9\u60A8\u4F18\u5316\u5BF9\u5E7F\u544A\u7684\u9009\u62E9\u4E0E\u4E92\u52A8\u3001\u5E2E\u52A9\u5224\u65AD\u60A8\u7684\u767B\u5F55\u72B6\u6001\u4EE5\u53CA\u8D26\u6237\u6216\u6570\u636E\u5B89\u5168\u3002 "
  ),
  _react2.default.createElement(
    "div",
    null,
    "2. \u6211\u4EEC\u4E0D\u4F1A\u5C06 Cookie \u7528\u4E8E\u672C\u9690\u79C1\u653F\u7B56\u6240\u8FF0\u76EE\u7684\u4E4B\u5916\u7684\u4EFB\u4F55\u7528\u9014\u3002\u60A8\u53EF\u6839\u636E\u81EA\u5DF1\u7684\u504F\u597D\u7BA1\u7406\u6216\u5220\u9664 Cookie\u3002\u60A8\u53EF\u4EE5\u6E05\u9664\u8BA1\u7B97\u673A\u4E0A\u4FDD\u5B58\u7684\u6240\u6709 Cookies\uFF0C\u5927\u90E8\u5206\u7F51\u7EDC\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u63A5\u53D7Cookie\uFF0C\u4F46\u60A8\u901A\u5E38\u53EF\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u6765\u4FEE\u6539\u6D4F\u89C8\u5668\u7684\u8BBE\u7F6E\u4EE5\u62D2\u7EDD Cookie\uFF1B\u53E6\u5916\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u6E05\u9664\u8F6F\u4EF6\u5185\u4FDD\u5B58\u7684\u6240\u6709Cookies\u3002 \u4F46\u5982\u679C\u60A8\u8FD9\u4E48\u505A\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u5728\u6BCF\u4E00\u6B21\u8BBF\u95EE\u6D77\u822A\u767D\u6761\u7F51\u7AD9\u65F6\u4EB2\u81EA\u66F4\u6539\u7528\u6237\u8BBE\u7F6E\uFF0C\u800C\u4E14\u60A8\u4E4B\u524D\u6240\u8BB0\u5F55\u7684\u76F8\u5E94\u4FE1\u606F\u4E5F\u5747\u4F1A\u88AB\u5220\u9664\uFF0C\u5E76\u4E14\u53EF\u80FD\u4F1A\u5BF9\u60A8\u6240\u4F7F\u7528\u670D\u52A1\u7684\u5B89\u5168\u6027\u6709\u4E00\u5B9A\u5F71\u54CD\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u4E03\u3001 \u5982\u4F55\u9009\u62E9\u9000\u51FA\u3001\u5220\u9664\u6216\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6211\u4EEC\u975E\u5E38\u5C0A\u91CD\u60A8\u5BF9\u4E2A\u4EBA\u4FE1\u606F\u7684\u63A7\u5236\u6743\u9650\uFF0C\u5E76\u4E3A\u60A8\u63D0\u4F9B\u4E86\u63A7\u5236\u60A8\u4E2A\u4EBA\u4FE1\u606F\u7684\u65B9\u6CD5\u3002\u60A8\u6709\u6743\u5229\u67E5\u8BE2\u3001\u66F4\u6B63\u3001\u7BA1\u7406\u3001\u5220\u9664\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4FE1\u606F\u5E76\u4FDD\u62A4\u81EA\u5DF1\u7684\u9690\u79C1\u548C\u5B89\u5168\u3002\u60A8\u67E5\u8BE2\u3001\u66F4\u6B63\u3001\u7BA1\u7406\u3001\u5220\u9664\u4E2A\u4EBA\u4FE1\u606F\u7684\u8303\u56F4\u548C\u65B9\u5F0F\u5C06\u53D6\u51B3\u4E8E\u60A8\u4F7F\u7528\u7684\u5177\u4F53\u670D\u52A1\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "1.\u8BBF\u95EE\u6743"
    ),
    " \u9664\u6CD5\u5F8B\u6CD5\u89C4\u89C4\u5B9A\u7684\u4F8B\u5916\u60C5\u51B5\uFF0C\u65E0\u8BBA\u60A8\u4F55\u65F6\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\uFF0C\u6211\u4EEC\u90FD\u4F1A\u529B\u6C42\u8BA9\u60A8\u987A\u5229\u8BBF\u95EE\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u5982\u679C\u60A8\u5E0C\u671B\u8BBF\u95EE\u6216\u7F16\u8F91\u60A8\u5728\u6D77\u822A\u767D\u6761\u7684\u4E2A\u4EBA\u8D44\u6599\u4FE1\u606F\uFF0C\u60A8\u53EF\u4EE5\u5728\u7F51\u9875\u7AEF\u6216APP\u7AEF\u81EA\u884C\u64CD\u4F5C\uFF08\u6D77\u5357\u822A\u7A7AAPP-\u822A\u65C5\u5206\u671F-\u6D77\u822A\u767D\u6761-\u4E2A\u4EBA\u8BBE\u7F6E/\u4E2A\u4EBA\u4FE1\u606F\uFF09\uFF0C\u6216\u8054\u7CFB\u6D77\u822A\u767D\u6761\u5BA2\u670D\u8FDB\u884C\u7F16\u8F91\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "2.\u66F4\u6B63\u6743"
    ),
    " \u5F53\u60A8\u9700\u8981\u66F4\u65B0\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u65F6\uFF0C\u6216\u53D1\u73B0\u6211\u4EEC\u5904\u7406\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u6709\u9519\u8BEF\u65F6\uFF0C\u60A8\u6709\u6743\u4F5C\u51FA\u66F4\u65B0\u6216\u66F4\u6B63\u3002\u60A8\u53EF\u4EE5\u81EA\u884C\u5728\u6D77\u822A\u767D\u6761\u7F51\u9875\u7AEF\u6216APP\u7AEF\u64CD\u4F5C\uFF08\u6D77\u5357\u822A\u7A7AAPP-\u822A\u65C5\u5206\u671F-\u6D77\u822A\u767D\u6761-\u4E2A\u4EBA\u8BBE\u7F6E/\u4E2A\u4EBA\u4FE1\u606F\uFF09\uFF0C\u6216\u8054\u7CFB\u6D77\u822A\u767D\u6761\u5BA2\u670D\u66F4\u6539\u4FE1\u606F\u884C\u4F7F\u60A8\u7684\u66F4\u6B63\u6743\u5229\u5E76\u968F\u65F6\u66F4\u65B0\u6216\u66F4\u6B63\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "3.\u5220\u9664\u6743"
    ),
    " \u60A8\u5728\u6211\u4EEC\u7684\u4EA7\u54C1\u4E0E/\u6216\u670D\u52A1\u9875\u9762\u4E2D\u53EF\u4EE5\u76F4\u63A5\u6E05\u9664\u6216\u5220\u9664\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u7ED1\u5B9A\u7684\u94F6\u884C\u5361\u7B49\uFF08\u6D77\u5357\u822A\u7A7AAPP-\u822A\u65C5\u5206\u671F-\u6D77\u822A\u767D\u6761-\u4E2A\u4EBA\u8BBE\u7F6E/\u4E2A\u4EBA\u4FE1\u606F\uFF09\u3002\u5728\u4EE5\u4E0B\u60C5\u5F62\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u5411\u6211\u4EEC\u63D0\u51FA\u5220\u9664\u4E2A\u4EBA\u4FE1\u606F\u7684\u8BF7\u6C42\uFF1A \uFF081\uFF09\u5982\u679C\u6211\u4EEC\u5904\u7406\u4E2A\u4EBA\u4FE1\u606F\u7684\u884C\u4E3A\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\uFF1B \uFF082\uFF09\u5982\u679C\u6211\u4EEC\u6536\u96C6\u3001\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u5374\u672A\u5F81\u5F97\u60A8\u7684\u540C\u610F\uFF1B \uFF083\uFF09\u5982\u679C\u6211\u4EEC\u5904\u7406\u4E2A\u4EBA\u4FE1\u606F\u7684\u884C\u4E3A\u8FDD\u53CD\u4E86\u4E0E\u60A8\u7684\u7EA6\u5B9A\uFF1B \uFF084\uFF09\u5982\u679C\u6211\u4EEC\u7EC8\u6B62\u670D\u52A1\u53CA\u8FD0\u8425\u3002 \u82E5\u6211\u4EEC\u51B3\u5B9A\u54CD\u5E94\u60A8\u7684\u5220\u9664\u8BF7\u6C42\uFF0C\u6211\u4EEC\u8FD8\u5C06\u540C\u65F6\u901A\u77E5\u4ECE\u6211\u4EEC\u83B7\u5F97\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u7684\u5B9E\u4F53\uFF0C\u8981\u6C42\u5176\u53CA\u65F6\u5220\u9664\uFF0C\u9664\u975E\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\uFF0C\u6216\u8FD9\u4E9B\u5B9E\u4F53\u83B7\u5F97\u60A8\u7684\u72EC\u7ACB\u6388\u6743\u3002\u5F53\u60A8\u4ECE\u6211\u4EEC\u7684\u670D\u52A1\u4E2D\u5220\u9664\u4FE1\u606F\u540E\uFF0C\u6211\u4EEC\u53EF\u80FD\u4E0D\u4F1A\u7ACB \u5373\u5907\u4EFD\u7CFB\u7EDF\u4E2D\u5220\u9664\u76F8\u5E94\u7684\u4FE1\u606F\uFF0C\u4F46\u4F1A\u5728\u5907\u4EFD\u66F4\u65B0\u65F6\u5220\u9664\u8FD9\u4E9B\u4FE1\u606F\u3002 "
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "3.\u5220\u9664\u6743"
    ),
    " \u60A8\u5728\u6211\u4EEC\u7684\u4EA7\u54C1\u4E0E/\u6216\u670D\u52A1\u9875\u9762\u4E2D\u53EF\u4EE5\u76F4\u63A5\u6E05\u9664\u6216\u5220\u9664\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u7ED1\u5B9A\u7684\u94F6\u884C\u5361\u7B49\uFF08\u6D77\u5357\u822A\u7A7AAPP-\u822A\u65C5\u5206\u671F-\u6D77\u822A\u767D\u6761-\u4E2A\u4EBA\u8BBE\u7F6E/\u4E2A\u4EBA\u4FE1\u606F\uFF09\u3002\u5728\u4EE5\u4E0B\u60C5\u5F62\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u5411\u6211\u4EEC\u63D0\u51FA\u5220\u9664\u4E2A\u4EBA\u4FE1\u606F\u7684\u8BF7\u6C42\uFF1A \uFF081\uFF09\u5982\u679C\u6211\u4EEC\u5904\u7406\u4E2A\u4EBA\u4FE1\u606F\u7684\u884C\u4E3A\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\uFF1B \uFF082\uFF09\u5982\u679C\u6211\u4EEC\u6536\u96C6\u3001\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C \u5374\u672A\u5F81\u5F97\u60A8\u7684\u540C\u610F\uFF1B \uFF083\uFF09\u5982\u679C\u6211\u4EEC\u5904\u7406\u4E2A\u4EBA\u4FE1\u606F\u7684\u884C\u4E3A\u8FDD\u53CD\u4E86\u4E0E\u60A8\u7684\u7EA6\u5B9A\uFF1B \uFF084\uFF09\u5982\u679C\u6211\u4EEC\u7EC8\u6B62\u670D\u52A1\u53CA\u8FD0\u8425\u3002 \u82E5\u6211\u4EEC\u51B3\u5B9A\u54CD\u5E94\u60A8\u7684\u5220\u9664\u8BF7\u6C42\uFF0C\u6211\u4EEC\u8FD8\u5C06\u540C\u65F6\u901A\u77E5\u4ECE\u6211\u4EEC\u83B7\u5F97\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u7684\u5B9E\u4F53\uFF0C\u8981\u6C42\u5176\u53CA\u65F6\u5220\u9664\uFF0C \u9664\u975E\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\uFF0C\u6216\u8FD9\u4E9B\u5B9E\u4F53\u83B7\u5F97\u60A8\u7684\u72EC\u7ACB\u6388\u6743\u3002\u5F53\u60A8\u4ECE\u6211\u4EEC\u7684\u670D\u52A1\u4E2D\u5220\u9664\u4FE1\u606F\u540E\uFF0C\u6211\u4EEC\u53EF\u80FD\u4E0D\u4F1A\u7ACB\u5373\u5907\u4EFD\u7CFB\u7EDF\u4E2D\u5220\u9664\u76F8\u5E94\u7684\u4FE1\u606F\uFF0C\u4F46\u4F1A\u5728\u5907\u4EFD\u66F4\u65B0\u65F6\u5220\u9664\u8FD9\u4E9B\u4FE1\u606F\u3002 "
  ),
  _react2.default.createElement(
    "div",
    null,
    "5.\u6CE8\u9500\u6743 \u60A8\u53EF\u4EE5\u901A\u8FC7\u62E8\u6253\u6D77\u822A\u767D\u6761\u4E0A\u516C\u5E03\u7684\u5BA2\u670D\u7535\u8BDD\u7533\u8BF7\u6CE8\u9500\u60A8\u7684\u8D26\u6237\uFF0C\u5982\u5F53\u60A8\u7B26\u5408\u7EA6\u5B9A\u7684\u8D26\u6237\u6CE8\u9500\u6761\u4EF6\uFF0C\u7ECF\u6D77\u822A\u767D\u6761\u5BA1\u6838\u540C\u610F\u540E\u53EF\u6B63\u5F0F\u6CE8\u9500\u4F1A\u5458\u8D26\u6237\u3002 \u4E00\u65E6\u60A8\u6CE8\u9500\u8D26\u6237\uFF0C\u6211\u4EEC\u5C06\u505C\u6B62\u4E3A\u60A8\u63D0\u4F9B\u670D\u52A1\uFF0C\u56E0\u6B64\u8BF7\u60A8\u8C28\u614E\u64CD\u4F5C\u3002\u4F46\u60A8\u77E5\u6089\u5E76\u7406\u89E3\uFF0C\u5728\u60A8\u6CE8\u9500\u8D26\u6237\u524D\u63D0\u4F9B\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u6211\u4EEC\u5C06\u7EE7\u7EED\u4F9D\u7167\u53EF\u9002\u7528\u7684\u6CD5\u5F8B\u6CD5\u89C4\u89C4\u5B9A\u53CA\u672C\u9690\u79C1\u653F\u7B56\u8FDB\u884C\u4FDD\u5B58\u6216\u62AB\u9732\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u516B\u3001 \u9690\u79C1\u534F\u8BAE\u7684\u4FEE\u6539\u4EE5\u53CA\u5982\u4F55\u8054\u7CFB\u6211\u4EEC"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u9690\u79C1\u534F\u8BAE\u7684\u4FEE\u6539"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u4E3A\u7ED9\u60A8\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1\u4EE5\u53CA\u968F\u7740\u6D77\u822A\u767D\u6761\u4E1A\u52A1\u7684\u53D1\u5C55\uFF0C\u672C\u9690\u79C1\u653F\u7B56\u4E5F\u4F1A\u968F\u4E4B\u66F4\u65B0\u3002\u4F46\u672A\u7ECF\u60A8\u660E\u786E\u540C\u610F\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u524A\u51CF\u60A8\u4F9D\u636E\u672C\u9690\u79C1\u653F\u7B56\u6240\u5E94\u4EAB\u6709\u7684\u6743\u5229\u3002\u6211\u4EEC\u4F1A\u901A\u8FC7\u5728\u6D77\u822A\u767D\u6761\u5E73\u53F0\u4E0A\u53D1\u51FA\u66F4\u65B0\u7248\u672C\u5E76\u5728\u751F\u6548\u524D\u901A\u8FC7\u516C\u544A\u6216\u4EE5\u5176\u4ED6\u9002\u5F53\u65B9\u5F0F\u63D0\u9192\u60A8\u76F8\u5173\u5185\u5BB9\u7684\u66F4\u65B0\u3002\u4E5F\u8BF7\u60A8\u8BBF\u95EE\u6D77\u822A\u767D\u6761\u5E73\u53F0\u4EE5\u67E5\u9605\u6700\u65B0\u7684\u9690\u79C1\u653F\u7B56\u3002\u6211\u4EEC\u9F13\u52B1\u60A8\u5728\u6BCF\u6B21\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\u65F6 \u90FD\u67E5\u9605\u6211\u4EEC\u7684\u9690\u79C1\u653F\u7B56\u3002\u5982\u679C\u60A8\u5728\u672C\u653F\u7B56\u66F4\u65B0\u751F\u6548\u540E\u7EE7\u7EED\u4F7F\u7528\u6D77\u822A\u767D\u6761\u670D\u52A1\uFF0C\u5373\u8868\u793A\u60A8\u5DF2\u5145\u5206\u9605\u8BFB\u3001\u7406\u89E3\u5E76\u63A5\u53D7\u66F4\u65B0\u540E\u7684\u653F\u7B56\u5E76\u613F\u610F\u63A5\u53D7\u66F4\u65B0\u540E\u7684\u653F\u7B56\u7EA6\u675F\u3002"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u5982\u4F55\u8054\u7CFB\u6211\u4EEC"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u5982\u679C\u60A8\u6709\u5173\u4E8E\u6211\u4EEC\u548C\u9690\u79C1\u534F\u8BAE\u7684\u95EE\u9898\u6216\u610F\u89C1\uFF0C\u8BF7\u90AE\u4EF6\u81F3bjjbxd@hnair.com\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u4E5D\u3001\u60A8\u7684\u540C\u610F"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u4E00\u65E6\u60A8\u4F7F\u7528\u6D77\u822A\u767D\u6761\u5373\u8868\u793A\u60A8\u540C\u610F\u9075\u5B88\u672C\u201C\u9690\u79C1\u534F\u8BAE\u201D\u4EE5\u53CA\u6211\u4EEC\u7684\u201C\u6761\u6B3E\u4E0E\u6761\u4EF6\u201D\u3002\u5982\u679C\u60A8\u4E0D\u540C\u610F\u6211\u4EEC\u7684\u201C\u9690\u79C1\u534F\u8BAE\u201D\uFF0C\u8BF7\u4E0D\u8981\u5411\u6211\u4EEC\u63D0\u4F9B\u4E2A\u4EBA\u4FE1\u606F\u5E76\u79BB\u5F00\u672C\u670D\u52A1\u5E73\u53F0\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "weight" },
    "\u5341\u3001\u5728\u7EBF\u653F\u7B56"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u672C\u9690\u79C1\u534F\u8BAE\u4E0D\u80FD\u5F71\u54CD\u4E92\u8054\u7F51\u8FD0\u884C\u4E2D\u672C\u8EAB\u5DF2\u7ECF\u5B58\u5728\u7684\u4EFB\u4F55\u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u5185\u5BB9\u5C06\u8D85\u51FA\u6D77\u822A\u767D\u6761\u7684\u63A7\u5236\u8303\u56F4\uFF0C\u56E0\u6B64\u672C\u9690\u79C1\u534F\u8BAE\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u8FDD\u80CC\u9002\u7528\u6CD5\u5F8B\u6216\u884C\u653F\u6CD5\u89C4\u7684\u65B9\u5F0F\u9002\u7528\u4E8E\u8FD9\u4E9B\u5185\u5BB9\u3002\u672C\u5728\u7EBF\u9690\u79C1\u653F\u7B56\u4EC5\u9002\u7528\u4E8E\u901A\u8FC7\u6211\u4EEC\u5E94\u7528\u548C\u7F51\u7AD9\u6536\u96C6\u7684\u4FE1\u606F\uFF0C\u5BF9\u79BB\u7EBF\u6536\u96C6\u7684\u4FE1\u606F\u4E0D\u9002\u7528\u3002"
  )
);

// 借款合同
var loanContract = function loanContract(data) {
  var date = new Date().toLocaleString();
  var aa = date.split(' ');
  var time = aa[0].replace(/\//g, '-');
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { style: { margin: '12px 0', textAlign: 'center', fontSize: '18px', fontWeight: '900' } },
      "\u4E2A\u4EBA\u501F\u6B3E\u989D\u5EA6\u5408\u540C"
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        { className: "title_r" },
        "[\u7248\u672C\u53F7]"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u5408\u540C\u7F16\u53F7\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        { className: "title_l" },
        "\u7279\u522B\u63D0\u9192\uFF1A"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "modal_c" },
      _react2.default.createElement(
        "p",
        null,
        "1.\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\uFF08\u4E0B\u79F0 \u201C\u989D\u5EA6\u6388\u4E88\u4EBA\u201D\u3001\u201C\u6211\u516C\u53F8\u201D\uFF09 \u5C06\u4E3A\u60A8\uFF08\u4EA6\u79F0\u201C\u989D\u5EA6\u7533\u8BF7\u4EBA\u201D\u3001\u201C\u501F\u6B3E\u4EBA\u201D\u3001 \u201C\u7528\u6237\u201D\u3001\u201C\u672C\u4EBA\u201D\uFF09\u63D0\u4F9B\u989D\u5EA6\u6388\u4FE1\uFF0C\u5F85\u60A8\u62E5\u6709\u6211\u516C\u53F8\u7684\u6388\u4FE1\u989D\u5EA6\u540E\uFF0C\u6211\u516C\u53F8\u548C/\u6216\u6211\u516C\u53F8\u4E1A\u52A1\u5408\u4F5C\u673A\u6784\u72EC\u7ACB/\u6216\u5171\u540C\u4E3A\u60A8\u63D0\u4F9B\u672C\u5408 \u540C\u9879\u4E0B\u7684\u4EBA\u6C11\u5E01\u8D37\u6B3E\u670D\u52A1\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u6388\u4FE1\u989D\u5EA6\u9879\u4E0B\u501F\u6B3E\u8FDB\u884C\u652F\u53D6\u7528\u4E8E\u60A8\u7684\u65E5\u5E38\u6D88\u8D39\uFF0C\u6216\u4F7F\u7528\u6388\u4FE1\u989D\u5EA6\u9879\u4E0B\u501F\u6B3E\u76F4\u63A5\u7528\u4E8E\u5411\u60A8\u63D0\u4F9B\u63A5 \u5546\u54C1\uFF08\u542B\u6709\u5F62\u5546\u54C1/\u65E0\u5F62\u5546\u54C1/\u670D\u52A1\uFF0C\u4E0B\u540C\uFF09\u7684\u5546\u6237\u3002\u5177\u4F53\u501F\u6B3E\u4FE1\u606F\u4EE5\u672C\u5408\u540C\u9879\u4E0B\u501F\u6B3E\u5408\u540C\u3001\u501F\u636E\u3001\u9644\u4EF6\u6240\u8F7D\u4FE1\u606F\u4E3A\u51C6\u3002\u501F\u6B3E\u5408\u540C\u3001\u501F\u636E\u3001 \u9644\u4EF6\u662F\u672C\u5408\u540C\u7EC4\u6210\u90E8\u5206\u4E4B\u4E00\uFF0C\u5177\u6709\u540C\u7B49\u7684\u6CD5\u5F8B\u6548\u529B\u3002\u60A8\u5728\u6B64\u786E\u8BA4\u5E76\u540C\u610F\u60A8\u4E0E\u501F\u6B3E\u5408\u540C\u3001\u501F\u636E\u3001\u9644\u4EF6\u4E0A\u6240\u8F7D\u7684\u8D37\u6B3E\u4EBA\u5F62\u6210\u672C\u5408\u540C\u9879\u4E0B\u7684\u501F\u6B3E\u5173\u7CFB\uFF0C\u53D7\u672C\u5408\u540C\u7EA6\u675F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "2.\u5728\u7B7E\u7F72\u672C\u5408\u540C\u4E4B\u524D\uFF0C\u60A8\u5DF2\u8BA4\u771F\u9605\u8BFB\u5E76\u9075\u5B88\u672C\u5408\u540C\u5168\u90E8\u5185\u5BB9\uFF0C\u5E76\u5145\u5206\u7406\u89E3\u5404\u6761\u6B3E\u5185\u5BB9\uFF0C\u6211\u516C\u53F8\u5BF9\u60A8\u5C31\u672C\u5408\u540C\u7591\u60D1\u90E8\u5206\u5DF2\u505A\u8BE6\u7EC6\u89E3\u7B54\uFF0C\u60A8\u786E\u8BA4\u6211\u516C\u53F8\u4E0E\u60A8\u5BF9\u672C\u5408\u540C\u6761\u6B3E\u7684\u7406\u89E3\u5B8C\u5168\u4E00\u81F4\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "3.\u672C\u5408\u540C\u6761\u6B3E\u4E00\u7ECF\u60A8\u70B9\u51FB\u786E\u8BA4\u5373\u89C6\u4E3A\u60A8\u5DF2\u5B8C\u5168\u7406\u89E3\u5E76\u540C\u610F\u672C\u5408\u540C\u5168\u90E8\u6761\u6B3E\uFF08\u5305\u62EC\u6709\u5173\u6743\u5229\u4E49\u52A1\u548C/\u6216\u8D23\u4EFB\u9650\u5236\u3001\u514D\u8D23\u6761\u6B3E\uFF09\uFF0C\u5E76\u89C6\u4E3A\u672C\u5408\u540C\u5DF2\u7531\u6211\u516C\u53F8\u4E0E\u60A8\u53CC\u65B9\u7B7E\u7F72\u751F\u6548\u3002 \u540C\u65F6\uFF0C\u9664\u975E\u60A8\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7\u672C\u5408\u540C\u6240\u6709\u6761\u6B3E\uFF0C\u5426\u5219\u60A8\u65E0\u6743\u4F7F\u7528\u8D37\u6B3E\u670D\u52A1\u3002\u60A8\u7684\u4F7F\u7528\u3001\u767B\u5F55\u7B49\u884C\u4E3A\u5373\u89C6\u4E3A\u60A8\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u63A5\u53D7\u672C\u5408\u540C\u7684\u7EA6\u675F\uFF0C\u672C\u5408\u540C\u5373\u65F6\u751F\u6548\u3002",
        _react2.default.createElement(
          "span",
          { style: { fontWeight: '900' } },
          "\u5982\u60A8\u4E3A\u5DF2\u5A5A\u7684\uFF0C\u70B9\u51FB\u786E\u8BA4\u672C\u5408\u540C\u5373\u89C6\u4E3A\u60A8\u53CA\u60A8\u914D\u5076\u540C\u610F\u501F\u6B3E\uFF0C\u9664\u53EF\u8BC1\u660E\u4E3A\u4E2A\u4EBA\u503A\u52A1\u5916\uFF0C\u89C6\u4E3A\u5171\u540C\u503A\u52A1\u3002\u60A8\u4E0D\u53EF\u64A4\u9500\u5730\u58F0\u660E\u5E76\u627F\u8BFA\u4E0D\u4EE5\u672A\u7ECF\u914D\u5076\u540C\u610F\u63D0\u51FA\u5408\u540C\u4E0D\u6210\u7ACB\u3001\u65E0\u6548\u3001\u4E0D\u5C65\u884C \u6216\u8981\u6C42\u89E3\u9664\u3001\u7EC8\u6B62\u5408\u540C\u7B49\u6297\u8FA9\u6216\u4E3B\u5F20\u3002\u60A8\u5BF9\u6B64\u53EF\u80FD\u5B58\u5728\u7684\u98CE\u9669\u53CA\u540E\u679C\u5DF2\u51C6\u786E\u3001\u6E05\u6670\u5730\u77E5\u6089\u548C\u7406\u89E3\u3002"
        )
      ),
      _react2.default.createElement(
        "p",
        null,
        "4.\u60A8\u5728\u822A\u65C5\u5206\u671F\u6CE8\u518C\u7684\u8D26\u53F7\uFF08\u4E0B\u79F0\u201C\u501F\u6B3E\u8D26\u53F7\u201D\uFF09\u548C\u5BC6\u7801\u662F\u6211\u516C\u53F8\u8BC6\u522B\u60A8\u8EAB\u4EFD\u53CA\u6307\u4EE4\u7684\u552F\u4E00\u6807\u5FD7\uFF0C\u6240\u6709\u4F7F\u7528\u501F\u6B3E\u8D26\u53F7\u548C\u5BC6\u7801\u7684\u64CD\u4F5C\u5747\u89C6\u4E3A\u60A8\u7684\u64CD\u4F5C\u884C\u4E3A\u3001\u5747\u4EE3\u8868\u60A8\u672C\u4EBA\u771F\u5B9E\u610F\u601D\u7684\u8868\u8FBE\uFF0C \u5E76\u7531\u60A8\u672C\u4EBA\u627F\u62C5\u76F8\u5E94\u7684\u6CD5\u5F8B\u540E\u679C\u3002\u60A8\u5E94\u59A5\u5584\u4FDD\u7BA1\u60A8\u7684\u8D26\u53F7\u53CA\u5BC6\u7801\uFF0C\u9632\u6B62\u8D26\u53F7\u53CA\u5BC6\u7801\u6CC4\u9732\uFF0C\u56E0\u8D26\u53F7\u53CA\u5BC6\u7801\u6CC4\u9732\u6240\u9020\u6210\u7684\u635F\u5931\u7531\u60A8\u81EA\u884C\u627F\u62C5\u3002"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "p",
        null,
        "\u989D\u5EA6\u7533\u8BF7\u4EBA\uFF1A",
        data.customerName
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u989D\u5EA6\u6388\u4E88\u4EBA\uFF1A\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u7B7E\u7F72\u65F6\u95F4\uFF1A",
        time
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "p",
        null,
        "\u7533\u8BF7\u4EBA\u989D\u5EA6\u660E\u7EC6"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u989D\u5EA6\u7533\u8BF7\u4EBA\uFF1A",
        data.customerName
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u624B\u673A\u53F7\u7801\uFF1A",
        data.phone
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u8EAB\u4EFD\u8BC1\u53F7\uFF1A",
        data.identityNo
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u7535\u5B50\u90AE\u7BB1\uFF1A",
        data.email
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u901A\u8BAF\u5730\u5740\uFF1A",
        data.contactAddress
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u6388\u4FE1\u989D\u5EA6\uFF1A\u989D\u5EA6\u7533\u8BF7\u4EBA\u53EF\u7533\u8BF7\u7684\u6388\u4FE1\u989D\u5EA6\u4E0D\u8D85\u8FC7\u4EBA\u6C11\u5E01300\u4E07\u5143\uFF0C\u5177\u4F53\u989D\u5EA6\u4EE5\u989D\u5EA6\u6388\u4E88\u4EBA\u7EC8\u5BA1\u610F\u89C1\u4E3A\u51C6\uFF0C\u4E14\u989D\u5EA6\u6388\u4E88\u4EBA\u53EF\u6839\u636E\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u8D44\u4FE1\u60C5\u51B5\u53CA\u6D88\u8D39\u884C\u4E3A\u52A8\u6001\u8C03\u6574 \uFF08\u4E0A\u8C03\u6216\u4E0B\u8C03\uFF09\u3001\u51BB\u7ED3\u6216\u53D6\u6D88\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u6388\u4FE1\u989D\u5EA6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u6388\u4FE1\u989D\u5EA6\u6709\u6548\u671F\uFF1A",
        data.creditBeginTime,
        "\u81F3",
        data.creditEndTime
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u6388\u4FE1\u989D\u5EA6\u8BF4\u660E\uFF1A\u5982\u989D\u5EA6\u7533\u8BF7\u4EBA\u672A\u5728\u989D\u5EA6\u6709\u6548\u671F\u5C4A\u6EE1\u524D30\u5929\u4EE5\u4E66\u9762\u6216\u989D\u5EA6\u6388\u4E88\u4EBA\u8BA4\u53EF\u7684\u5176\u4ED6\u65B9\u5F0F\u660E\u786E\u544A\u77E5\u989D\u5EA6\u6388\u4E88\u4EBA\u5176\u4E0D\u613F\u7EE7\u7EED\u4F7F\u7528\u672C\u5408\u540C\u9879\u4E0B\u6388\u4FE1\u989D\u5EA6\u7684\uFF0C\u989D\u5EA6\u6388\u4E88 \u4EBA\u5C06\u89C6\u4E3A\u989D\u5EA6\u7533\u8BF7\u4EBA\u613F\u610F\u7EE7\u7EED\u4F7F\u7528\u672C\u5408\u540C\u9879\u4E0B\u6388\u4FE1\u989D\u5EA6\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA\u53EF\u81EA\u884C\u51B3\u5B9A\u662F\u5426\u5EF6\u957F\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u989D\u5EA6\u671F\u9650\uFF0C\u5EF6\u957F\u671F\u9650\u7531\u989D\u5EA6\u6388\u4E88\u4EBA\u51B3\u5B9A\uFF0C\u5EF6\u957F\u6B21\u6570\u4E0D\u9650\u3002\u989D\u5EA6 \u671F\u9650\u5EF6\u957F\u540E\uFF0C\u989D\u5EA6\u7533\u8BF7\u4EBA\u4E0E\u989D\u5EA6\u6388\u4E88\u4EBA\u4E0D\u518D\u53E6\u884C\u7B7E\u8BA2\u5408\u540C\uFF0C\u53CC\u65B9\u7684\u6743\u5229\u4E49\u52A1\u5C06\u7EE7\u7EED\u9002\u7528\u672C\u5408\u540C\u53CA\u5176\u968F\u540E\u7684\u4EFB\u4F55\u4FEE\u8BA2\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: "900" } },
        "\u7B2C\u4E00\u6761 \u5B9A\u4E49\u4E0E\u89E3\u91CA"
      ),
      _react2.default.createElement(
        "p",
        null,
        "1.1 \u9664\u53E6\u6709\u7EA6\u5B9A\u5916\uFF0C\u4E0B\u5217\u7528\u8BED\u5177\u6709\u5982\u4E0B\u542B\u4E49\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u4E2A\u4EBA\u6D88\u8D39\u8D37\u6B3E\u201D\uFF1A"
        ),
        "\u662F\u6307\u501F\u6B3E\u4EBA\u5411\u8D37\u6B3E\u4EBA\u7533\u8BF7\uFF0C\u7ECF\u8D37\u6B3E\u4EBA\u5BA1\u6279\u540E\uFF0C\u8D37\u6B3E\u4EBA\u76F4\u63A5\u5411\u501F\u6B3E\u4EBA\u53D1\u653E\u7684\u4EE5\u6D88\u8D39\uFF08\u4E0D\u5305\u62EC\u8D2D\u4E70\u623F\u5C4B\uFF09\u4E3A\u76EE\u7684\u7684\u8D37\u6B3E\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u8D37\u6B3E\u4EBA\u201D\uFF1A"
        ),
        "\u662F\u6307\u5411\u989D\u5EA6\u7533\u8BF7\u4EBA\u53D1\u653E\u4EE5\u6D88\u8D39\uFF08\u4E0D\u5305\u62EC\u8D2D\u4E70\u623F\u5C4B\uFF09\u4E3A\u76EE\u7684\u7684\u8D37\u6B3E\u673A\u6784\uFF0C\u672C\u5408 \u540C\u9879\u4E0B\u8D37\u6B3E\u7531\u989D\u5EA6\u6388\u4E88\u4EBA\u548C/\u6216\u5176\u4E1A\u52A1\u5408\u4F5C\u673A\u6784\u5171\u540C\u6216\u72EC\u7ACB\u5411\u501F\u6B3E\u4EBA\u53D1\u653E\u8D37\u6B3E\uFF0C\u5177\u4F53\u8D37\u6B3E\u4EBA\u53CA\u8D37\u6B3E\u4EBA\u6743\u5229\u4EE5\u672C\u5408\u540C\u9879\u4E0B\u501F\u6B3E\u5408\u540C\u3001\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u989D\u5EA6\u201D\uFF1A"
        ),
        "\u662F\u6307\u989D\u5EA6\u6388\u4E88\u4EBA\u6839\u636E\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u4E2A\u4EBA\u4FE1\u7528\u60C5\u51B5\uFF0C\u4E3A\u989D\u5EA6\u7533\u8BF7\u4EBA\u786E\u5B9A\u7684\u6700\u9AD8\u9650\u989D\u3002\u989D\u5EA6\u53EF\u6839\u636E\u6211\u516C\u53F8\u9700\u8981\u8BBE\u7F6E\u6210\u53EF\u5FAA\u73AF\u4F7F\u7528\u6216\u4E00\u6B21\u6027\u4E0D\u53EF\u5FAA\u73AF\u4F7F\u7528\uFF0C\u53EF\u5FAA\u73AF \u4F7F\u7528\u662F\u6307\u989D\u5EA6\u7533\u8BF7\u4EBA\u6E05\u507F\u56E0\u4F7F\u7528\u989D\u5EA6\u800C\u5F62\u6210\u7684\u503A\u52A1\u540E\uFF0C\u5BF9\u5DF2\u7ECF\u6E05\u507F\u7684\u90E8\u5206\uFF0C\u989D\u5EA6\u7533\u8BF7\u4EBA\u53EF\u518D\u6B21\u4F7F\u7528\u3002\u4E0D\u53EF\u5FAA\u73AF\u4F7F\u7528\u662F\u6307\u989D\u5EA6\u7533\u8BF7\u4EBA\u4F7F\u7528\u989D\u5EA6\u540E\uFF0C\u989D\u5EA6\u9012\u51CF\uFF0C\u4E0D \u56E0\u989D\u5EA6\u7533\u8BF7\u4EBA\u6E05\u507F\u5DF2\u7528\u989D\u5EA6\u5F62\u6210\u7684\u503A\u52A1\u800C\u6062\u590D\u3002\u8BE5\u989D\u5EA6\u975E\u6211\u516C\u53F8\u5BF9\u7528\u6237\u7684\u8D37\u6B3E\u627F\u8BFA\uFF0C\u6211\u516C\u53F8\u6709\u6743\u6839\u636E\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u8D44\u4FE1\u60C5\u51B5\u53CA\u6D88\u8D39\u884C\u4E3A\u8FDB\u884C\u968F\u65F6\u8C03\u6574\uFF08\u4E0A\u8C03\u6216\u4E0B \u8C03\uFF09\u6216\u51BB\u7ED3\u6216\u53D6\u6D88\uFF0C\u4E14\u65E0\u9700\u53E6\u884C\u901A\u77E5\u989D\u5EA6\u7533\u8BF7\u4EBA\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u53EF\u4F7F\u7528\u989D\u5EA6\u201D\uFF1A"
        ),
        "\u662F\u6307\u5F53\u671F\u60A8\u53EF\u4EE5\u4F7F\u7528\u7684\u989D\u5EA6\u3002\u53EF\u4F7F\u7528\u989D\u5EA6\uFF1D\u603B\u989D\u5EA6\uFF0D\u603B\u989D\u5EA6\u9879\u4E0B\u60A8\u5DF2\u7ECF\u652F\u53D6\u4E14\u5C1A\u672A\u7ED3\u6E05\u7684\u5355\u7B14\u501F\u6B3E\u53D1\u653E\u672C\u91D1\u4E4B\u548C\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u989D\u5EA6\u9879\u4E0B\u5355\u7B14\u501F\u6B3E\u201D\uFF1A"
        ),
        "\u662F\u6307\u989D\u5EA6\u7533\u8BF7\u4EBA\u5728\u989D\u5EA6\u6388\u4E88\u4EBA\u6240\u6388\u4E88\u7684\u989D\u5EA6\u6709\u6548\u671F\u5185\u53CA\u53EF\u4F7F\u7528\u989D\u5EA6\u5185\u5411\u8D37\u6B3E\u4EBA\u7533\u8BF7\u7684\u5355\u7B14\u501F\u6B3E\uFF0C\u7ECF\u8D37\u6B3E\u4EBA\u6838\u51C6\u53D1\u653E\u7684\u5355\u7B14\u501F\u6B3E\u5C06\u81EA\u52A8\u751F\u6210\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C \u5355\u7B14\u501F\u6B3E\u5177\u4F53\u8D37\u6B3E\u91D1\u989D\u53CA\u8D37\u6B3E\u8981\u7D20\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u606F\u8D39\u7387\u3001\u671F\u9650\u3001\u652F\u4ED8\u65B9\u5F0F\u7B49\uFF09\u4EE5\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u521D\u59CB\u501F\u6B3E\u672C\u91D1\u201D\uFF1A"
        ),
        "\u662F\u6307\u989D\u5EA6\u9879\u4E0B\u5355\u7B14\u501F\u6B3E\u53D1\u653E\u65F6\u7684\u672C\u91D1\u6570\u989D\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u8D39\u7387\u201D\uFF1A"
        ),
        "\u662F\u6307\u8D37\u6B3E\u4EBA\u53D1\u653E\u8D37\u6B3E\u540E\uFF0C\u501F\u6B3E\u4EBA\u9700\u5411\u8D37\u6B3E\u4EBA\u652F\u4ED8\u7684\u624B\u7EED\u8D39\u4E0E\u8D37\u6B3E\u672C\u91D1\u7684\u6BD4\u7387\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u8FD8\u6B3E\u65E5\u201D\uFF1A"
        ),
        "\u662F\u6307\u672C\u5408\u540C\u7B7E\u7EA6\u53CC\u65B9\u7EA6\u5B9A\u7684\u8D37\u6B3E\u4EBA\u5411\u501F\u6B3E\u4EBA\u53D1\u653E\u67D0\u7B14\u8D37\u6B3E\u540E\u501F\u6B3E\u4EBA\u5E94\u6309\u671F\u5F52\u8FD8\u8D37\u6B3E\u672C\u606F\uFF08\u6309\u5229\u7387\u8BA1\u606F\u65F6\u9002\u7528\uFF09\u3001\u672C\u91D1\u4E0E\u5206\u671F\u624B\u7EED\u8D39\uFF08\u6309\u8D39\u7387\u8BA1\u8D39\u65F6\u9002\u7528\uFF09\u3001\u5176\u4ED6\u8D39\u7528(\u5982\u6709)\u7684\u65E5\u671F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u5230\u671F\u5E94\u4ED8\u6B3E\u9879\u201D\uFF1A"
        ),
        "\u6307\u60A8\u5728\u8FD8\u6B3E\u65E5\u524D\u5E94\u652F\u4ED8\u7684\u5168\u90E8\u91D1\u989D\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u501F\u6B3E\u672C\u91D1\u3001\u5229\u606F\u3001\u903E\u671F\u7F5A\u606F\u3001\u8D39\u7528\u7B49\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u53D7\u6258\u652F\u4ED8\u201D\uFF1A"
        ),
        "\u6307\u8D37\u6B3E\u4EBA\u6839\u636E\u501F\u6B3E\u4EBA\u7684\u652F\u4ED8\u59D4\u6258\uFF0C\u5C06\u8D37\u6B3E\u8D44\u91D1\u76F4\u63A5\u652F\u4ED8\u7ED9\u7B26\u5408\u7EA6\u5B9A\u7528\u9014\u7684\u501F\u6B3E\u4EBA\u4EA4\u6613\u5BF9\u8C61\u7684\u652F\u4ED8\u65B9\u5F0F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u81EA\u4E3B\u652F\u4ED8\u201D\uFF1A"
        ),
        "\u6307\u989D\u8D37\u6B3E\u4EBA\u6839\u636E\u501F\u6B3E\u4EBA\u7684\u63D0\u6B3E\u7533\u8BF7\u5C06\u8D37\u6B3E\u8D44\u91D1\u76F4\u63A5\u53D1\u653E\u5230\u501F\u6B3E\u4EBA\u8D26\u6237\uFF0C\u5E76\u7531\u501F\u6B3E\u4EBA\u81EA\u4E3B\u652F\u4ED8\u7ED9\u7B26\u5408\u7EA6\u5B9A\u7528\u9014\u7684\u501F\u6B3E\u4EBA\u4EA4\u6613\u5BF9\u8C61\u7684\u652F\u4ED8\u65B9\u5F0F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u903E\u671F\u201D\uFF1A"
        ),
        "\u662F\u6307\u501F\u6B3E\u4EBA\u672A\u6309\u7EA6\u5B9A\u7684\u8FD8\u6B3E\u65E5\u5411\u8D37\u6B3E\u4EBA\u8DB3\u989D\u507F\u8FD8\u5DF2\u5230\u671F\u6B3E\u9879\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8D37\u6B3E\u672C\u91D1\u3001\u5229\u606F\u3001\u5206\u671F\u624B\u7EED\u8D39\u3001\u5176\u4ED6\u8D39\u7528\u7B49\uFF09\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u5B9E\u73B0\u503A\u6743\u7684\u8D39\u7528\u201D\uFF1A"
        ),
        "\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u50AC\u6536\u8D39\u7528\u3001\u8BC9\u8BBC\u8D39\uFF08\u6216\u4EF2\u88C1\u8D39\uFF09\u3001\u4FDD\u5168\u8D39\u3001\u516C\u544A\u8D39\u3001\u6267\u884C\u8D39\u3001\u5F8B\u5E08\u8D39\u3001\u5DEE\u65C5\u8D39\u53CA\u5176\u4ED6\u4E3A\u5B9E\u73B0\u503A\u6743\u800C\u652F\u51FA\u7684\u8D39\u7528\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u6CD5\u5F8B\u6CD5\u89C4\u201D\uFF1A"
        ),
        "\u5305\u62EC\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u7684\u6CD5\u5F8B\u3001\u884C\u653F\u6CD5\u89C4\u3001\u6700\u9AD8\u4EBA\u6C11\u6CD5\u9662\u7684\u53F8\u6CD5\u89E3\u91CA\u4EE5\u53CA\u91D1\u878D\u76D1\u7BA1\u673A\u6784\u7684\u89C4\u7AE0\u3001\u89C4\u5B9A\u4E0E\u547D\u4EE4\u3001\u901A\u77E5\u7B49\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { style: { fontWeight: "900" } },
          "\u201C\u672C\u5408\u540C\u201D\uFF1A"
        ),
        "\u5305\u62EC\u989D\u5EA6\u6388\u4E88\u4EBA\u3001\u989D\u5EA6\u7533\u8BF7\u4EBA\u7B7E\u7F72\u7684\u672C\u300A\u4E2A\u4EBA\u501F\u6B3E\u989D\u5EA6\u5408\u540C\u300B\uFF0C\u4EA6\u5305\u62EC\u540E\u7EED\u5BF9\u8BE5\u5408\u540C\u53CA\u9644\u4EF6\u7684\u4EFB\u4F55\u6709\u6548\u4FEE\u8BA2\u548C\u8865\u5145\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: "900" } },
        "\u672C\u5408\u540C\u4E2D\u8D37\u6B3E\u3001\u501F\u6B3E\u4E3A\u540C\u4E00\u542B\u4E49\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: "900" } },
        "\u672C\u5408\u540C\u4E2D\u7684\u6807\u9898\u548C\u4E1A\u52A1\u540D\u79F0\u4EC5\u4E3A\u6307\u4EE3\u7684\u65B9\u4FBF\u800C\u4F7F\u7528\uFF0C\u4E0D\u7528\u4E8E\u5BF9\u6761\u6B3E\u5185\u5BB9\u53CA\u5F53\u4E8B\u4EBA\u6743\u5229\u4E49\u52A1\u7684\u89E3\u91CA\u3002"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "p",
        null,
        "1.\u989D\u5EA6\u7533\u8BF7\u4EBA\u901A\u8FC7\u989D\u5EA6\u6388\u4E88\u4EBA\u4E92\u8054\u7F51\u5E73\u53F0\uFF08\u5305\u62EC\u7F51\u9875\u7AEF\u53CA\u79FB\u52A8\u7EC8\u7AEF\uFF09\u5411\u989D\u5EA6\u6388\u4E88\u4EBA\u7533\u8BF7\u4E2A\u4EBA\u6D88\u8D39\u8D37\u6B3E\u989D\u5EA6\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA\u6709\u6743\u5BA1\u6838\u5E76\u81EA\u4E3B\u51B3\u5B9A\u662F\u5426\u540C\u610F\u8BE5\u989D\u5EA6 \u7533\u8BF7\u3002\u989D\u5EA6\u7533\u8BF7\u4EBA\u6700\u7EC8\u6240\u83B7\u5F97\u7684\u989D\u5EA6\u91D1\u989D\u3001\u671F\u9650\u7B49\u53D6\u51B3\u4E8E\u989D\u5EA6\u6388\u4E88\u4EBA\u7684\u5BA1\u6838\u7ED3\u679C\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "2.\u989D\u5EA6\u6388\u4E88\u4EBA\u6838\u5B9A\u7684\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u501F\u6B3E\u989D\u5EA6\u5E76\u4E0D\u6784\u6210\u8D37\u6B3E\u4EBA\u5BF9\u501F\u6B3E\u4EBA\u7684\u6388\u4FE1\u627F\u8BFA\uFF0C\u501F\u6B3E\u4EBA\u5E94\u9010\u7B14\u5728\u6388\u4FE1\u989D\u5EA6\u6709\u6548\u671F\u5185\u53CA\u53EF\u4F7F\u7528\u6388\u4FE1\u989D\u5EA6\u5185\u5411\u8D37\u6B3E\u4EBA\u7533\u8BF7\u501F\u6B3E\uFF0C \u8D37\u6B3E\u4EBA\u6709\u6743\u6839\u636E\u501F\u6B3E\u4EBA\u7684\u5F53\u671F\u4FE1\u7528\u53CA\u8D37\u6B3E\u4EBA\u5F53\u671F\u53EF\u8D37\u6B3E\u8D44\u91D1\u89C4\u6A21\u81EA\u4E3B\u51B3\u5B9A\u662F\u5426\u5411\u501F\u6B3E\u4EBA\u53D1\u653E\u989D\u5EA6\u9879\u4E0B\u5355\u7B14\u501F\u6B3E\u5E76\u51B3\u5B9A\u5177\u4F53\u8D37\u6B3E\u91D1\u989D\u53CA\u8D37\u6B3E\u8981\u7D20\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u606F\u8D39\u7387\u3001\u671F\u9650\u3001\u652F\u4ED8\u65B9\u5F0F\u7B49\uFF09\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "3.\u8D37\u6B3E\u4EBA\u5728\u6536\u5230\u501F\u6B3E\u4EBA\u7684\u5355\u7B14\u501F\u6B3E\u7533\u8BF7\u540E\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u53D8\u66F4\u501F\u6B3E\u4EBA\u5355\u7B14\u63D0\u6B3E\u91D1\u989D\u4E0A\u9650\u4E0E\u4E0B\u9650\uFF0C\u5E76\u4E14\u65E0\u9700\u53E6\u884C\u901A\u77E5\u501F\u6B3E\u4EBA\u3002\u8D37\u6B3E\u4EBA\u5C06\u8D37\u6B3E\u8D44\u91D1\u76F4\u63A5\u53D1\u653E\u81F3\u501F\u6B3E \u4EBA\u6307\u5B9A\u7684\u4E2A\u4EBA\u94F6\u884C\u8D26\u6237\u3002\u501F\u6B3E\u4EBA\u5E94\u4FDD\u8BC1\u5176\u4E2A\u4EBA\u4FE1\u606F\u771F\u5B9E\u3001\u5B8C\u6574\u3001\u51C6\u786E\u3001\u6709\u6548\u3002\u82E5\u4E59\u65B9\u63D0\u4F9B\u7684\u4FE1\u606F\u6709\u8BEF\u3001\u8D26\u6237\u72B6\u6001\u4E0D\u6B63\u5E38\u3001\u6216\u56E0\u5176\u4ED6\u975E\u8D37\u6B3E\u4EBA\u539F\u56E0\u5BFC\u81F4\u8D37\u6B3E\u4EBA\u653E\u6B3E\u5EF6 \u8FDF\u6216\u5931\u8D25\u6216\u501F\u6B3E\u4EBA\u672A\u5728\u653E\u6B3E\u5F53\u65E5\u6536\u5230\u8D37\u6B3E\u8D44\u91D1\uFF0C\u7532\u65B9\u4E0D\u627F\u62C5\u8D23\u4EFB\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "4.\u989D\u5EA6\u9879\u4E0B\u5355\u7B14\u501F\u6B3E\uFF0C\u4EE5\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\u7684\u8D37\u6B3E\u8D77\u59CB\u65E5\u4E3A\u8D77\u606F\u65E5/\u8BA1\u8D39\u8D77\u59CB\u65E5\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\uFF08\u5305\u62EC \u4F46\u4E0D\u9650\u4E8E\u989D\u5EA6\u63D0\u53D6\u8BB0\u5F55\u3001\u7ED3\u7B97\u8BB0\u5F55\u3001\u8FD8\u6B3E\u8BB0\u5F55\u7B49\uFF0C\u4E0B\u540C\uFF09\u6216\u672C\u5408\u540C\u9644\u4EF6\u8BB0\u8F7D\u4E3A\u51C6\u3002\u8D37\u6B3E\u5229\u7387\u3001\u5206\u671F\u624B\u7EED\u8D39\u8D39\u7387\u3001\u4E00\u6B21\u6027\u8D37\u6B3E\u670D\u52A1\u8D39\u7B49\u6309\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B \u6216\u672C\u5408\u540C\u9644\u4EF6\u7684\u7EA6\u5B9A\u8BA1\u7B97\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u6216\u672C\u5408\u540C\u9644\u4EF6\u8BB0\u8F7D\u7684\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "5.\u5728\u989D\u5EA6\u6709\u6548\u671F\u9650\u5185\uFF0C\u5982\u989D\u5EA6\u6388\u4E88\u4EBA\u53D1\u73B0\u989D\u5EA6\u7533\u8BF7\u4EBA\u4FE1\u7528\u72B6\u51B5\u4E0B\u964D\u3001\u6536\u5165\u80FD\u529B\u4E0D\u5F3A\u3001\u8D37\u6B3E\u8D44\u91D1\u4F7F\u7528\u51FA\u73B0\u5F02\u5E38\u7B49\u60C5\u51B5\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA\u6709\u6743\u8C03\u6574\u6216\u51BB\u7ED3\u6216\u53D6\u6D88\u989D\u5EA6\u7533\u8BF7\u4EBA\u989D\u5EA6\uFF0C\u53D8\u66F4\u989D\u5EA6 \u9879\u4E0B\u8D37\u6B3E\u652F\u4ED8\u65B9\u5F0F\u6216\u8005\u505C\u6B62\u8D37\u6B3E\u8D44\u91D1\u7684\u53D1\u653E\u548C\u652F\u4ED8\uFF0C\u4E14\u65E0\u9700\u53E6\u884C\u901A\u77E5\u989D\u5EA6\u7533\u8BF7\u4EBA\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "6.\u8D37\u6B3E\u652F\u4ED8\u65B9\u5F0F\uFF1A\u672C\u5408\u540C\u9879\u4E0B\u8D37\u6B3E\u652F\u4ED8\u65B9\u5F0F\u5206\u4E3A\u53D7\u6258\u652F\u4ED8\u548C\u81EA\u4E3B\u652F\u4ED8\u3002\u989D\u5EA6\u6388\u4E88\u4EBA\u6709\u6743\u6839\u636E\u501F\u6B3E\u7528\u9014\u548C\u652F\u4ED8\u7684\u5177\u4F53\u91D1\u989D\u6765\u786E\u5B9A\u8D37\u6B3E\u7684\u652F\u4ED8\u65B9\u5F0F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF081\uFF09\u91C7\u7528\u53D7\u6258\u652F\u4ED8\u7684\uFF0C\u501F\u6B3E\u4EBA\u540C\u610F\u8D37\u6B3E\u4EBA\u5C06\u8D37\u6B3E\u8D44\u91D1\u76F4\u63A5\u652F\u4ED8\u81F3\u5411\u501F\u6B3E\u4EBA\u63D0\u4F9B\u5546\u54C1\u6216\u670D\u52A1\u7684\u5546\u6237\u7684\u8D26\u6237\u6216\u8005\u652F\u4ED8\u7ED9\u8BE5\u5546\u6237\u6240\u5728\u7F51\u7EDC\u8D2D\u7269\u5E73\u53F0\u7684\u8D26\u6237\u6216\u652F\u4ED8 \u7ED9\u4E0E\u8BE5\u7F51\u7EDC\u8D2D\u7269\u5E73\u53F0\u6216\u8BE5\u5546\u6237\u76F8\u5173\u8054\u7684\u7B2C\u4E09\u65B9\u652F\u4ED8\u5E73\u53F0\uFF08\u5982\u652F\u4ED8\u5B9D\u3001\u4E2D\u91D1\u652F\u4ED8\u7B49\uFF09\u8D26\u6237\u3002\u8D37\u6B3E\u4EBA\u5B8C\u6210\u4E0A\u8FF0\u53D7\u6258\u652F\u4ED8\u540E\u5373\u89C6\u4E3A\u501F\u6B3E\u4EBA\u5DF2\u5C06\u8D2D\u7269/\u8D2D\u4E70\u670D\u52A1\u6B3E\u9879\u652F\u4ED8\u7ED9\u4E86 \u5546\u6237\u5E76\u89C6\u4E3A\u8D37\u6B3E\u4EBA\u5DF2\u7ECF\u5B8C\u6210\u4E86\u5BF9\u501F\u6B3E\u4EBA\u8D37\u6B3E\u7684\u53D1\u653E\u3002\u8D37\u6B3E\u5177\u4F53\u7684\u652F\u4ED8\u5BF9\u8C61\u3001\u652F\u4ED8\u8D26\u53F7\u7B49\u4EE5\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u4E2D\u7684\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E \u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u6216\u672C\u5408\u540C\u9644\u4EF6\u8BB0\u8F7D\u7684\u4E3A\u51C6\u3002\u6B64\u5916\uFF0C\u501F\u6B3E\u4EBA\u8FD8\u5E94\u6839\u636E\u8D37\u6B3E\u4EBA\u7684\u8981\u6C42\u5411\u8D37\u6B3E\u4EBA\u63D0\u4F9B\u76F8\u5173\u4EA4\u6613\u6587\u4EF6\u6216\u5176\u4ED6\u4EA4\u6613\u8BC1\u660E\u8D44\u6599\uFF0C\u5E76\u4FDD\u8BC1\u6240\u63D0\u4EA4\u7684\u8D44\u6599\u771F\u5B9E\u3001\u5B8C\u6574\u3001\u5408\u6CD5\u3001\u6709\u6548\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF082\uFF09\u91C7\u7528\u81EA\u4E3B\u652F\u4ED8\u7684\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u53D8\u66F4\u501F\u6B3E\u4EBA\u5BF9\u672C\u5408\u540C\u9879\u4E0B\u501F\u6B3E\u989D\u5EA6\u7684\u81EA\u4E3B\u652F\u4ED8\u63D0\u6B3E\u6B21\u6570\u53CA\u5355\u7B14\u63D0\u6B3E\u91D1\u989D\u4E0A\u9650\u4E0E\u4E0B\u9650\uFF0C\u5E76\u4E14\u65E0\u9700\u53E6\u884C\u901A\u77E5\u501F\u6B3E\u4EBA\u3002\u501F\u6B3E\u4EBA\u5E94\u6839\u636E\u8D37 \u6B3E\u4EBA\u7684\u8981\u6C42\u5B9A\u671F\u62A5\u544A\u6216\u544A\u77E5\u8D37\u6B3E\u4EBA\u8D37\u6B3E\u8D44\u91D1\u652F\u4ED8\u60C5\u51B5\uFF0C\u5E76\u5E94\u6839\u636E\u8D37\u6B3E\u4EBA\u7684\u8981\u6C42\u5411\u8D37\u6B3E\u4EBA\u63D0\u4F9B\u7B26\u5408\u672C\u5408\u540C\u7EA6\u5B9A\u7528\u9014\u7684\u76F8\u5173\u8D37\u6B3E\u4F7F\u7528\u652F\u4ED8\u51ED\u8BC1\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6536\u636E\u3001 \u53D1\u7968\u3001\u5546\u5BB6\u51FA\u5177\u7684\u6D88\u8D39\u6E05\u5355\u7B49\uFF09\u3002\u8D37\u6B3E\u4EBA\u6709\u6743\u901A\u8FC7\u8D26\u6237\u5206\u6790\u3001\u51ED\u8BC1\u67E5\u9A8C\u3001\u73B0\u573A\u8C03\u67E5\u7B49\u65B9\u5F0F\u6838\u67E5\u501F\u6B3E\u4EBA\u7684\u8D37\u6B3E\u4F7F\u7528\u662F\u5426\u7B26\u5408\u7EA6\u5B9A\u7528\u9014\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF083\uFF09\u65E0\u8BBA\u91C7\u7528\u53D7\u6258\u652F\u4ED8\u8FD8\u662F\u81EA\u4E3B\u652F\u4ED8\u65B9\u5F0F\uFF0C\u501F\u6B3E\u4EBA\u5E94\u4FDD\u8BC1\u6240\u63D0\u4F9B\u7684\u8D26\u6237\u4FE1\u606F\u771F\u5B9E\u3001\u51C6\u786E\uFF0C\u8D26\u6237\u72B6\u6001\u6B63\u5E38\uFF0C\u82E5\u501F\u6B3E\u4EBA\u63D0\u4F9B\u7684\u8D26\u6237\u4FE1\u606F\u6709\u8BEF\u3001\u8D26\u6237\u72B6\u6001\u4E0D\u6B63\u5E38\u3001 \u6216\u8005\u56E0\u6240\u63D0\u4F9B\u8D26\u6237\u7684\u5F00\u6237\u94F6\u884C\u6C47\u6B3E\u8F6C\u8D26\u7CFB\u7EDF\u5EF6\u8BEF\u3001\u6545\u969C\u6216\u8005\u56E0\u4EBA\u884C\u8DE8\u884C\u8F6C\u8D26\u7CFB\u7EDF\u5EF6\u8BEF\u3001\u6545\u969C\u6216\u8005\u56E0\u7B2C\u4E09\u65B9\u652F\u4ED8\u5E73\u53F0\u652F\u4ED8\u7CFB\u7EDF\u5EF6\u8BEF\u3001\u6545\u969C\u7B49\u539F\u56E0\u5BFC\u81F4\u8D37\u6B3E\u4EBA\u53D1\u653E\u7684 \u8D37\u6B3E\u672A\u80FD\u5728\u7EA6\u5B9A\u7684\u8D37\u6B3E\u8D77\u59CB\u65E5\u5F53\u65E5\u652F\u4ED8\u81F3\u501F\u6B3E\u4EBA\u6307\u5B9A\u7684\u8D26\u6237\uFF0C\u8D37\u6B3E\u4EBA\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF0C\u8D37\u6B3E\u5229\u606F\u3001\u5206\u671F\u624B\u7EED\u8D39\u3001\u8D37\u6B3E\u670D\u52A1\u8D39\u7B49\u4ECD\u7136\u6309\u7EA6\u5B9A\u7684\u8D37\u6B3E\u8D77\u59CB\u65E5\u8D77\u7B97\u3002\u82E5\u56E0 \u4E0A\u8FF0\u539F\u56E0\u5BFC\u81F4\u8D37\u6B3E\u4EBA\u653E\u6B3E\u5931\u8D25\u7684\uFF0C\u501F\u6B3E\u4EBA\u9700\u91CD\u65B0\u7533\u8BF7\u653E\u6B3E\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "7.\u8D37\u6B3E\u53D1\u653E\u540E\uFF0C\u8D37\u6B3E\u4EBA\u6839\u636E\u5728\u672C\u5408\u540C\u7533\u8BF7\u4EBA\u989D\u5EA6\u660E\u7EC6\u4E2D\u6240\u8F7D\u7684\u901A\u8BAF\u4FE1\u606F\uFF08\u5982\u79FB\u52A8\u7535\u8BDD\u3001\u901A\u4FE1\u5730\u5740\u3001\u7535\u5B50\u90AE\u7BB1\u7B49\uFF09\u53EF\u5411\u501F\u6B3E\u4EBA\u53D1\u51FA\u653E\u6B3E\u901A\u77E5\u7B49\u6587\u4EF6\u6216\u4FE1\u606F\u3002\u901A\u8FC7\u624B\u673A \u77ED\u4FE1\u3001\u7535\u5B50\u90AE\u7BB1\u7B49\u7535\u5B50\u6E20\u9053\u901A\u77E5\u501F\u6B3E\u4EBA\u7684\uFF0C\u8BE5\u901A\u77E5\u4E00\u7ECF\u53D1\u51FA\uFF0C\u5373\u89C6\u4E3A\u5DF2\u9001\u8FBE\u501F\u6B3E\u4EBA\uFF1B\u540C\u65F6\u501F\u6B3E\u4EBA\u4E0D\u53EF\u64A4\u9500\u5730\u7684\u6388\u6743\u53CA\u540C\u610F\u8D37\u6B3E\u4EBA\u53EF\u5411\u76F8\u5173\u77ED\u4FE1\u53D1\u9001\u5E73\u53F0\u516C\u53F8\u3001\u901A\u4FE1\u8FD0\u8425\u5546 \u8C03\u53D6\u76F8\u5173\u77ED\u4FE1\u53D1\u9001\u51ED\u8BC1\u3002\u901A\u8FC7\u90AE\u4EF6\u5FEB\u9012\u3001\u6302\u53F7\u4FE1\u7B49\u65B9\u5F0F\u53D1\u9001\u901A\u77E5\u7684\uFF0C\u81EA\u8D37\u6B3E\u4EBA\u5BC4\u51FA\u540E\u7B2C\u4E09\u4E2A\u81EA\u7136\u65E5\u5373\u89C6\u4E3A\u5DF2\u9001\u8FBE\u501F\u6B3E\u4EBA\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "8.\u9664\u975E\u6709\u786E\u5B9E\u4E14\u5145\u5206\u7684\u76F8\u53CD\u8BC1\u636E\uFF0C\u5426\u5219\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u8BB0\u8D26\u51ED\u8BC1\u3001\u6D41\u6C34\u8BB0\u5F55\u7B49\u662F\u672C\u5408\u540C\u9879\u4E0B\u8D37\u6B3E\u53D1\u653E\u53CA\u6B3E\u9879\u507F\u8FD8\u60C5\u51B5\u7684\u6709\u6548\u8BC1\u636E\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "9.\u989D\u5EA6\u7533\u8BF7\u4EBA\u627F\u8BFA\u5408\u89C4\u5408\u6CD5\u4F7F\u7528\u8D37\u6B3E\u8D44\u91D1\uFF0C\u4E14\u53EA\u80FD\u7528\u4E8E\u6D88\u8D39\uFF08\u4E0D\u5305\u62EC\u4E70\u623F\uFF09\uFF0C\u5426\u5219\u5F15\u8D77\u7684\u4E00\u5207\u540E\u679C\u7531\u989D\u5EA6\u7533\u8BF7\u4EBA\u627F\u62C5\u3002\u6B64\u627F\u8BFA\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF081\uFF09\u989D\u5EA6\u9879\u4E0B\u8D37\u6B3E\u8D44\u91D1\u4E0D\u4F1A\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u8FDB\u5165\u8BC1\u5238\u5E02\u573A\u3001\u671F\u8D27\u5E02\u573A\uFF0C\u6216\u7528\u4E8E\u80A1\u672C\u6743\u76CA\u6027\u6295\u8D44\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF082\uFF09\u8D37\u6B3E\u8D44\u91D1\u4E0D\u4F1A\u7528\u4E8E\u751F\u4EA7\u3001\u7ECF\u8425\u6D3B\u52A8\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF083\uFF09\u8D37\u6B3E\u8D44\u91D1\u4E0D\u4F1A\u7528\u4E8E\u623F\u5730\u4EA7\u9879\u76EE\u5F00\u53D1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF084\uFF09\u8D37\u6B3E\u8D44\u91D1\u4E0D\u4F1A\u88AB\u632A\u7528\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "10.\u989D\u5EA6\u9879\u4E0B\u8D37\u6B3E\u606F\u8D39\u7684\u8BA1\u6536\u65B9\u5F0F\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF081\uFF09\u6309\u8D37\u6B3E\u5229\u7387\u8BA1\u606F\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF082\uFF09\u6309\u8D37\u6B3E\u8D39\u7387\u8BA1\u8D39\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF083\uFF09\u4E00\u6B21\u6027\u6536\u53D6\u8D37\u6B3E\u670D\u52A1\u8D39\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF084\uFF09\u5176\u4ED6\u65B9\u5F0F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u6BCF\u7B14\u8D37\u6B3E\u7684\u606F\u8D39\u6807\u51C6\u53CA\u8BA1\u6536\u5177\u4F53\u65B9\u5F0F\u7531\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u989D\u5EA6\u6388\u4E88\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u3001\u672C\u5408\u540C\u9644\u4EF6\u8BB0\u8F7D\u7684\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "11.\u91C7\u7528\u8D37\u6B3E\u5229\u7387\u8BA1\u606F\u7684\uFF0C\u8D37\u6B3E\u5229\u7387\u53CA\u8D77\u606F\u65E5\u4EE5\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u4E2D\u6240\u7EA6\u5B9A\u7684\u8D37\u6B3E\u5229\u7387\u3001\u501F\u6B3E\u8D77\u59CB\u65E5\u4E3A\u51C6\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535 \u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002\u56FD\u5BB6\u53D8\u66F4\u5229\u7387\u786E\u5B9A\u65B9\u5F0F\u3001\u8C03\u6574\u65B9\u5F0F\u548C\u8BA1\u606F\u65B9\u6CD5\u7684\uFF0C\u6309\u56FD\u5BB6\u6709\u5173\u89C4\u5B9A\u6267\u884C\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "12.\u91C7\u7528\u8D37\u6B3E\u8D39\u7387\u8BA1\u8D39\u7684\u4E14\u8D37\u6B3E\u5206\u671F\u507F\u8FD8\u7684\uFF0C\u6BCF\u671F\u624B\u7EED\u8D39=\u521D\u59CB\u501F\u6B3E\u672C\u91D1*\u5206\u671F\u624B\u7EED\u8D39\u671F\u8D39\u7387\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "13.\u91C7\u7528\u4E00\u6B21\u6027\u6536\u53D6\u8D37\u6B3E\u670D\u52A1\u8D39\u7684\uFF0C\u501F\u6B3E\u4EBA\u5E94\u4E8E\u7EA6\u5B9A\u7684\u8FD8\u6B3E\u65E5\u4E00\u6B21\u6027\u652F\u4ED8\u8D37\u6B3E\u670D\u52A1\u8D39\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "14.\u501F\u6B3E\u4EBA\u5728\u989D\u5EA6\u9879\u4E0B\u5355\u7B14\u501F\u6B3E\u7684\u8FD8\u6B3E\u65B9\u5F0F\u7531\u8BE5\u7B14\u501F\u6B3E\u6240\u5BF9\u5E94\u7684\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4EA4\u6613\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A \u51C6\u3002\u501F\u6B3E\u4EBA\u5E94\u6309\u7EA6\u5B9A\u7684\u8FD8\u6B3E\u65B9\u5F0F\u507F\u8FD8\u8D37\u6B3E\u672C\u91D1\u53CA\u5168\u90E8\u5229\u606F\uFF08\u6216\u5206\u671F\u624B\u7EED\u8D39\u3001\u8D37\u6B3E\u670D\u52A1\u8D39\uFF09\u3001\u5176\u4ED6\u8D39\u7528\uFF08\u5982\u6709\uFF09\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "15.\u6309\u8D37\u6B3E\u5229\u7387\u8BA1\u606F\u65F6\uFF0C\u5404\u7C7B\u8FD8\u6B3E\u65B9\u5F0F\u7684\u542B\u4E49\u5982\u4E0B\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF081\uFF09\u7B49\u989D\u672C\u606F\uFF1A\u501F\u6B3E\u4EBA\u5E94\u4E8E\u6BCF\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u4EE5\u76F8\u7B49\u7684\u603B\u91D1\u989D\u507F\u8FD8\u8D37\u6B3E\u672C\u91D1\u548C\u8D37\u6B3E\u5229\u606F\u3001\u8D39\u7528\uFF08\u5982\u6709\uFF09\u3002\u7B49\u989D\u672C\u606F\u8FD8\u6B3E\u8BA1\u7B97\u516C\u5F0F\u5982\u4E0B:"
      ),
      _react2.default.createElement("img", { style: { width: '100%', height: 'auto', margin: '10px 0' }, src: __webpack_require__(184) }),
      _react2.default.createElement(
        "p",
        null,
        "\uFF082\uFF09\u6309\u6708\u4ED8\u606F\uFF0C\u6309\u5B63\u8FD8\u672C\uFF1A\u501F\u6B3E\u4EBA\u5E94\u4E8E\u6BCF\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u507F\u8FD8\u8D37\u6B3E\u5229\u606F\u3001\u8D39\u7528\uFF08\u5982\u6709\uFF09\uFF0C\u5E76\u4E8E\u6BCF\u5B63\u5EA6\u6700\u540E\u4E00\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u7B49\u989D\u507F\u8FD8\u672C\u91D1\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF083\uFF09\u6309\u6708\u4ED8\u606F\uFF0C\u534A\u5E74\u8FD8\u672C\uFF1A\u501F\u6B3E\u4EBA\u5E94\u4E8E\u6BCF\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u507F\u8FD8\u8D37\u6B3E\u5229\u606F\u3001\u8D39\u7528\uFF08\u5982\u6709\uFF09\uFF0C\u5E76\u4E8E\u6BCF\u534A\u5E74\u6700\u540E\u4E00\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u7B49\u989D\u507F\u8FD8\u672C\u91D1\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF084\uFF09\u6309\u6708\u4ED8\u606F\uFF0C\u6309\u5E74\u8FD8\u672C\uFF1A\u501F\u6B3E\u4EBA\u5E94\u4E8E\u6BCF\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u507F\u8FD8\u8D37\u6B3E\u5229\u606F\u3001\u8D39\u7528\uFF08\u5982\u6709\uFF09\uFF0C\u5E76\u4E8E\u6BCF\u5E74\u6700\u540E\u4E00\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u7B49\u989D\u507F\u8FD8\u672C\u91D1\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF085\uFF09\u6309\u6708\u4ED8\u606F\u3001\u5230\u671F\u8FD8\u672C\uFF1A\u501F\u6B3E\u4EBA\u5E94\u4E8E\u6BCF\u4E2A\u6708\u7684\u8FD8\u6B3E\u65E5\u507F\u8FD8\u8D37\u6B3E\u5229\u606F\u3001\u8D39\u7528\uFF08\u5982\u6709\uFF09\uFF0C\u5E76\u4E8E\u8D37\u6B3E\u5230\u671F\u65E5\u507F\u8FD8\u5168\u90E8\u8D37\u6B3E\u672C\u91D1\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF086\uFF09\u5230\u671F\u4E00\u6B21\u6027\u8FD8\u672C\u4ED8\u606F\uFF1A\u501F\u6B3E\u4EBA\u5E94\u4E8E\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\u7684\u8D37\u6B3E\u5230\u671F\u65E5\u4E00\u6B21\u6027\u5F52\u8FD8\u8D37\u6B3E\u672C\u91D1\u3001\u8D37\u6B3E\u5229\u606F\u3001\u8D39\u7528\uFF08\u5982\u6709\uFF09\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF087\uFF09\u5176\u4ED6\u65B9\u5F0F\uFF1A\u4EE5\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "16.\u6309\u8D37\u6B3E\u8D39\u7387\u8BA1\u8D39\u65F6\uFF0C\u6309\u7167\u4EE5\u4E0B\u7EA6\u5B9A\u8FD8\u6B3E\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF081\uFF09\u5206\u671F\u8FD8\u6B3E\u7684\uFF0C\u5728\u8D37\u6B3E\u7684\u8FD8\u6B3E\u671F\u5185\uFF0C\u6BCF\u671F\u7B49\u989D\u507F\u8FD8\u672C\u91D1\u53CA\u5206\u671F\u624B\u7EED\u8D39\u3002\u6BCF\u671F\u5E94\u8FD8\u6B3E\u91D1\u989D=\u8D37\u6B3E\u521D\u59CB\u672C\u91D1\xF7\u5206\u671F\u671F\u6570+\u6BCF\u671F\u5E94\u507F\u8FD8\u7684\u624B\u7EED\u8D39\u3002\u6BCF\u671F\u5E94\u507F\u8FD8\u7684\u624B\u7EED\u8D39=\u8D37\u6B3E\u521D\u59CB\u672C\u91D1\xD7\u5206\u671F\u624B\u7EED\u8D39\u671F\u8D39\u7387\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF082\uFF09\u501F\u6B3E\u4EBA\u5E94\u652F\u4ED8\u7684\u5176\u4ED6\u8D39\u7528\uFF08\u5982\u6709\uFF09\u5177\u4F53\u7531\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "17.\u82E5\u91C7\u7528\u4E00\u6B21\u6027\u6536\u53D6\u8D37\u6B3E\u670D\u52A1\u8D39\u65B9\u5F0F\u7684\uFF0C\u6309\u4EE5\u4E0B\u7EA6\u5B9A\u8FD8\u6B3E\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u8D37\u6B3E\u670D\u52A1\u8D39\u540E\u6536\u6A21\u5F0F\uFF1A\u501F\u6B3E\u4EBA\u4E8E\u7EA6\u5B9A\u7684\u8FD8\u6B3E\u65E5\u4E00\u6B21\u6027\u652F\u4ED8\u8D37\u6B3E\u670D\u52A1\u8D39\u53CA\u507F\u8FD8\u76F8\u5E94\u7684\u8D37\u6B3E\u672C\u91D1\u3002\u8D37\u6B3E\u670D\u52A1\u8D39\u5177\u4F53\u91D1\u989D\u7531\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA \u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u8D37\u6B3E\u670D\u52A1\u8D39\u524D\u6536\u6A21\u5F0F\uFF1A\u501F\u6B3E\u4EBA\u5728\u53D6\u5F97\u8D37\u6B3E\u524D\u5E94\u5148\u652F\u4ED8\u5B8C\u6BD5\u8D37\u6B3E\u670D\u52A1\u8D39\uFF0C\u501F\u6B3E\u4EBA\u4E8E\u7EA6\u5B9A\u7684\u8FD8\u6B3E\u65E5\u4E00\u6B21\u6027\u507F\u8FD8\u76F8\u5E94\u7684\u8D37\u6B3E\u672C\u91D1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "18.\u501F\u6B3E\u4EBA\u5E94\u5728\u6BCF\u671F\u8D37\u6B3E\u7684\u8FD8\u6B3E\u65E5\u524D\u5F52\u8FD8\u5F53\u671F\u5E94\u8FD8\u6B3E\u91D1\u989D\uFF0C\u9996\u671F\u8FD8\u6B3E\u65E5\u671F\u3001\u8FD8\u6B3E\u91D1\u989D\u3001\u8D37\u6B3E\u4EBA\u6307\u5B9A\u8D26\u6237\u4FE1\u606F\u7B49\u7531\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF \u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002\u501F\u6B3E\u4EBA\u8FD8\u6B3E\u8D44\u91D1\u5230\u8FBE\u6307\u5B9A\u8D26\u6237\u540E\uFF0C\u6309\u7167\u5982\u4E0B\u987A\u5E8F\u6E05\u507F\u5404\u9879\u503A\u52A1\uFF1A\u5148\u5230\u671F\u7684\u503A\u52A1\u5148\u507F\u8FD8\uFF1B\u540C\u65F6\u5230\u671F\u7684\u503A\u52A1\u4E2D\uFF0C\u5229\u606F\u4F18\u5148\u4E8E\u672C\u91D1\u507F\u8FD8\uFF1B\u591A\u7B14\u8D37 \u6B3E\u7684\u6B3E\u9879\u540C\u65F6\u5230\u671F\uFF0C\u501F\u6B3E\u4EBA\u7533\u8BF7\u4E86\u63D0\u524D\u8FD8\u6B3E\u7684\u501F\u6B3E\u5408\u540C\u4F18\u5148\u507F\u8FD8\uFF0C\u5269\u4F59\u8D37\u6B3E\u5408\u540C\u6309\u7B7E\u7F72\u65F6\u95F4\u5728\u524D\u7684\u5148\u507F\u8FD8\u3002\u5230\u671F\u5E94\u4ED8\u6B3E\u9879\u5177\u4F53\u6E05\u507F\u987A\u5E8F\u7531\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E \u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u91C7\u7528\u8D37\u6B3E\u5229\u7387\u8BA1\u606F\u7684\uFF0C\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u4F9D\u6B21\u6E05\u507F\uFF1A\uFF081\uFF09\u63D0\u524D\u8FD8\u6B3E\u624B\u7EED\u8D39\uFF08\u5982\u6709\uFF09\uFF1B\uFF082\uFF09\u5176\u4ED6\u4E1A\u52A1\u8D39\u7528\uFF08\u542B\u63D0\u524D\u8FD8\u6B3E\u8FDD\u7EA6\u91D1\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF083\uFF09\u7F5A\u606F\u3001\u590D\u5229\uFF08\u5982\u6709\uFF09\uFF1B\uFF084\uFF09\u5229\u606F\uFF08\u4E0D\u542B\u7F5A\u606F\u3001\u590D\u5229\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF085)\u672C\u91D1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u91C7\u53D6\u8D37\u6B3E\u8D39\u7387\u8BA1\u8D39\u7684\uFF1A\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u4F9D\u6B21\u6E05\u507F\uFF1A\uFF081\uFF09\u63D0\u524D\u8FD8\u6B3E\u624B\u7EED\u8D39\uFF08\u5982\u6709\uFF09\uFF1B\uFF082\uFF09\u5176\u4ED6\u4E1A\u52A1\u8D39\u7528\uFF08\u4E0D\u5305\u62EC\u5206\u671F\u624B\u7EED\u8D39\u53CA\u8D37\u6B3E\u670D\u52A1\u8D39\uFF09\uFF09\uFF1B\uFF083\uFF09\u5206\u671F\u624B\u7EED\u8D39\u6216\u8D37\u6B3E\u670D\u52A1\u8D39\uFF08\u542B\u63D0\u524D\u8FD8\u6B3E\u8FDD\u7EA6\u91D1\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF084)\u672C\u91D1\u3002)\u672C\u91D1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u91C7\u53D6\u4E00\u6B21\u6027\u6536\u53D6\u624B\u7EED\u8D39\u7684\uFF1A\u5219\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u4F9D\u6B21\u6E05\u507F\uFF1A\uFF081\uFF09\u63D0\u524D\u8FD8\u6B3E\u624B\u7EED\u8D39\uFF08\u5982\u6709\uFF09\uFF1B\uFF082\uFF09\u5176\u4ED6\u4E1A\u52A1\u8D39\u7528\uFF08\u4E0D\u5305\u62EC\u63D0\u524D\u8FD8\u6B3E\u624B\u7EED\u8D39\u53CA\u8D37\u6B3E\u670D\u52A1\u8D39\uFF09\uFF1B\uFF083\uFF09\u8D37\u6B3E\u670D\u52A1\u8D39\uFF08\u8D37\u6B3E\u670D\u52A1\u8D39\u540E\u6536\u6A21\u5F0F\u6536\u53D6\uFF0C \u8D37\u6B3E\u670D\u52A1\u8D39\u524D\u6536\u6A21\u5F0F\u4E0D\u6536\u53D6\uFF0C\u542B\u63D0\u524D\u8FD8\u6B3E\u8FDD\u7EA6\u91D1\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF084)\u672C\u91D1\u3002)\u672C\u91D1\u3002)\u672C\u91D1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u501F\u6B3E\u4EBA\u5E94\u786E\u4FDD\u5176\u76F8\u5E94\u94F6\u884C\u8D26\u6237\u4E2D\u5B58\u5165\u6709\u8DB3\u91CF\u7684\u8D44\u91D1\u7528\u4E8E\u507F\u4ED8\uFF0C\u5E76\u901A\u8FC7\u8D37\u6B3E\u4EBA\u5E73\u53F0\u5E76\u4E0D\u53EF\u64A4\u9500\u5730\u6388\u6743\u8D37\u6B3E\u4EBA\u6307\u5B9A\u7684\u4EE3\u7406\u673A\u6784\uFF08\u5305\u62EC\u76F8\u5173\u94F6\u884C\u53CA\u7B2C\u4E09\u65B9\u652F\u4ED8\u673A\u6784\u7B49\uFF09\u4E3B\u52A8\u53D1\u8D77\u6263\u6B3E\uFF0C\u7528\u4E8E\u6E05\u507F\u501F\u6B3E\u4EBA\u5728\u8D37\u6B3E\u4EBA\u5904\u7684\u8D37\u6B3E\u3002\u5982\u56E0\u4F59\u989D \u4E0D\u8DB3\u3001\u8D26\u6237\u72B6\u6001\u4E0D\u6B63\u5E38\u7B49\u4EFB\u4F55\u539F\u56E0\u5BFC\u81F4\u672A\u80FD\u6210\u529F\u6263\u6B3E\uFF0C\u7531\u6B64\u4EA7\u751F\u7684\u903E\u671F\u540E\u679C\u548C\u5176\u4ED6\u4E0D\u5229\u540E\u679C\u7531\u501F\u6B3E\u4EBA\u81EA\u884C\u627F\u62C5\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u5982\u501F\u6B3E\u4EBA\u5C06\u5230\u671F\u5E94\u4ED8\u6B3E\u9879\u901A\u8FC7\u94F6\u884C\u6C47\u6B3E\u81F3\u8D37\u6B3E\u4EBA\u6307\u5B9A\u8D26\u6237\u7528\u4E8E\u6E05\u507F\u501F\u6B3E\u4EBA\u5728\u8D37\u6B3E\u4EBA\u5904\u7684\u5230\u671F\u503A\u52A1\uFF0C\u7531\u6B64\u4EA7\u751F\u7684\u6C47\u6B3E\u624B\u7EED\u8D39\u7531\u501F\u6B3E\u4EBA\u627F\u62C5\u3002\u5982\u56E0\u94F6\u884C\u6C47\u6B3E\u8FD8\u6B3E\u53D1\u751F\u7684\u8D44\u91D1\u5230\u8D26\u4E0D\u53CA\u65F6\u3001\u767B\u8BB0\u8FD8\u6B3E\u4E0D\u53CA\u65F6\u7B49\u5BFC\u81F4\u8D37\u6B3E\u53D1\u751F\u903E\u671F\uFF0C \u7531\u6B64\u4EA7\u751F\u7684\u903E\u671F\u7F5A\u606F\u3001\u903E\u671F\u540E\u679C\u548C\u5176\u4ED6\u4E0D\u5229\u540E\u679C\u7531\u501F\u6B3E\u4EBA\u81EA\u884C\u627F\u62C5\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u5229\u4F46\u65E0\u4E49\u52A1\u6839\u636E\u501F\u6B3E\u4EBA\u6C47\u6B3E\u53D1\u8D77\u65F6\u95F4\u7B49\u56E0\u7D20\u81EA\u4E3B\u914C\u5B9A\u9002\u5F53\u51CF\u514D\u501F\u6B3E\u4EBA\u56E0\u94F6\u884C\u6C47\u6B3E\u8FD8\u6B3E\u6240\u4EA7\u751F\u7684\u903E\u671F\u7F5A\u606F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "19.\u501F\u6B3E\u4EBA\u8981\u6C42\u63D0\u524D\u5F52\u8FD8\u672C\u5408\u540C\u9879\u4E0B\u5168\u90E8\u6216\u90E8\u5206\u501F\u6B3E\u7684\uFF0C\u4E14\u8D37\u6B3E\u4EBA\u5141\u8BB8\u7684\uFF0C\u53EF\u81EA\u884C\u5728\u5BA2\u6237\u7AEF\u6309\u7167\u63D0\u793A\u8FDB\u884C\u63D0\u524D\u8FD8\u6B3E\u7684\u64CD\u4F5C\u3002\u501F\u6B3E\u4EBA\u5DF2\u652F\u4ED8\u7684\u5404\u9879\u8D39\u7528\u3001\u5229\u606F\u7B49\uFF0C\u8D37\u6B3E\u4EBA\u4E0D\u505A\u4EFB\u4F55\u5F62\u5F0F\u7684\u5168\u90E8\u6216\u90E8\u5206\u8FD4\u8FD8\u3002\u501F\u6B3E\u4EBA\u63D0\u524D\u8FD8\u6B3E\u4E0D\u5F97 \u4F4E\u4E8E\u7CFB\u7EDF\u63D0\u793A\u7684\u6700\u4F4E\u8FD8\u6B3E\u989D\uFF0C\u5E76\u652F\u4ED8\u76F8\u5E94\u7684\u63D0\u524D\u8FD8\u6B3E\u624B\u7EED\u8D39\uFF08\u5982\u6709\uFF09\u3001\u63D0\u524D\u8FD8\u6B3E\u8FDD\u7EA6\u91D1\uFF08\u5982\u6709\uFF09\u3002\u501F\u6B3E\u4EBA\u63D0\u524D\u507F\u8FD8\u90E8\u5206\u501F\u6B3E\u7684\uFF0C\u5269\u4F59\u501F\u6B3E\u7684\u8FD8\u6B3E\u65B9\u5F0F\u53CA\u8BA1\u606F\uFF08\u6216\u8BA1\u8D39\uFF09\u65B9\u5F0F\u4E0D\u53D8\uFF0C\u501F\u6B3E\u4EBA\u4ECD\u9700\u5BF9\u5269 \u4F59\u501F\u6B3E\u6309\u7167\u8BE5\u8FD8\u6B3E\u65B9\u5F0F\u8FDB\u884C\u8FD8\u6B3E\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "20.\u91C7\u7528\u8D37\u6B3E\u5229\u7387\u8BA1\u606F\u7684\uFF0C\u8D37\u6B3E\u903E\u671F\u540E\u8D37\u6B3E\u672C\u606F\u53CA\u8D39\u7528\u7684\u507F\u8FD8\u987A\u5E8F\u7531\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u8D37\u6B3E\u903E\u671F90\u5929\u4EE5\u5185\uFF08\u542B90\u5929)\u4E14\u501F\u6B3E\u4EBA\u652F\u4ED8\u7684\u6B3E\u9879\u4E0D\u8DB3\u4EE5\u507F\u8FD8\u501F\u6B3E\u4EBA\u6B20\u8D37\u6B3E\u4EBA\u7684\u5230\u671F\u503A\u52A1\u7684\uFF0C\u5219\u8D37\u6B3E\u672C\u606F\u53CA\u8D39\u7528\u7684\u507F\u8FD8\u987A\u5E8F\u4E3A\uFF081\uFF09\u7F5A\u606F\u3001\u590D\u5229\uFF08\u5982\u6709\uFF09\uFF1B\uFF082\uFF09\u624B\u7EED\u8D39 \uFF08\u5982\u5206\u671F\u624B\u7EED\u8D39\u3001\u8D37\u6B3E\u670D\u52A1\u8D39\u7B49\uFF09\uFF1B\uFF083\uFF09\u5B9E\u73B0\u503A\u6743\u7684\u8D39\u7528\uFF08\u5982\u6709\uFF09\uFF1B\uFF084\uFF09\u5229\u606F\uFF08\u4E0D\u542B\u7F5A\u606F\u3001\u590D\u5229\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF085)\u672C\u91D1\u3002\u8D37\u6B3E\u903E\u671F90\u5929\u4EE5\u4E0A\u4E14\u501F\u6B3E\u4EBA\u652F\u4ED8\u7684\u6B3E\u9879\u4E0D\u8DB3 \u4EE5\u507F\u8FD8\u501F\u6B3E\u4EBA\u6B20\u8D37\u6B3E\u4EBA\u7684\u5230\u671F\u503A\u52A1\u7684\uFF0C\u5219\u8D37\u6B3E\u672C\u606F\u53CA\u8D39\u7528\u7684\u507F\u8FD8\u987A\u5E8F\u4E3A\uFF1A\uFF081\uFF09\u672C\u91D1\uFF1B\uFF082\uFF09\u5229\u606F\uFF08\u4E0D\u542B\u7F5A\u606F\u3001\u590D\u5229\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF083\uFF09\u7F5A\u606F\u3001\u590D\u5229\uFF08\u5982\u6709\uFF09\uFF1B\uFF084\uFF09\u624B\u7EED\u8D39 \uFF08\u5982\u5206\u671F\u624B\u7EED\u8D39\u3001\u8D37\u6B3E\u670D\u52A1\u8D39\u7B49\uFF09\uFF1B\uFF085\uFF09\u5B9E\u73B0\u503A\u6743\u7684\u8D39\u7528\uFF08\u5982\u6709\uFF09\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "21.\u91C7\u7528\u8D37\u6B3E\u8D39\u7387\u8BA1\u8D39\u6216\u6536\u53D6\u4E00\u6B21\u6027\u8D37\u6B3E\u670D\u52A1\u8D39\u7684\uFF0C\u8D37\u6B3E\u903E\u671F\u540E\u8D37\u6B3E\u672C\u91D1\u53CA\u8D39\u7528\u7684\u507F\u8FD8\u987A\u5E8F\u7531\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37 \u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "90\u5929\u4EE5\u5185\uFF08\u542B90\u5929\uFF09\u4E14\u501F\u6B3E\u4EBA\u652F\u4ED8\u7684\u6B3E\u9879\u4E0D\u8DB3\u4EE5\u507F\u8FD8\u501F\u6B3E\u4EBA\u6B20\u8D37\u6B3E\u4EBA\u7684\u5230\u671F\u503A\u52A1\u7684\uFF0C\u5219\u8D37\u6B3E\u672C\u91D1\u53CA\u8D39\u7528\u7684\u507F\u8FD8\u987A\u5E8F\u4E3A \uFF081) \u8D39\u7528\uFF08\u542B\u5B9E\u73B0\u503A\u6743\u7684\u8D39\u7528\uFF08\u5982\u6709\uFF09\u53CA\u5176\u4ED6\u4E1A\u52A1\u8D39\u7528\uFF08\u4E0D\u5305\u62EC\u5206\u671F\u624B\u7EED\u8D39\u53CA\u8D37\u6B3E\u670D\u52A1\u8D39\uFF09\uFF09\uFF1B\uFF082\uFF09\u5206\u671F\u624B\u7EED\u8D39\u6216\u8D37\u6B3E\u670D\u52A1\u8D39\uFF08\uFF08\u542B\u8FDD\u7EA6\u91D1\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF083\uFF09\u672C\u91D1\u3002\u8D37\u6B3E\u903E\u671F90\u5929\u4EE5\u4E0A\u4E14\u501F\u6B3E \u4EBA\u652F\u4ED8\u7684\u6B3E\u9879\u4E0D\u8DB3\u4EE5\u501F\u6B3E\u4EBA\u6B20\u8D37\u6B3E\u4EBA\u7684\u5230\u671F\u503A\u52A1\u7684\uFF0C\u5219\u8D37\u6B3E\u672C\u91D1\u53CA\u8D39\u7528\u7684\u507F\u8FD8\u987A\u5E8F\u4E3A\uFF1A\uFF081\uFF09\u672C\u91D1\uFF1B\uFF082\uFF09\u5206\u671F\u624B\u7EED\u8D39\u6216\u8D37\u6B3E\u670D\u52A1\u8D39\uFF08\u542B\u8FDD\u7EA6\u91D1\uFF08\u5982\u6709\uFF09\uFF09\uFF1B\uFF083\uFF09\u8D39\u7528\uFF08\u542B\u5B9E\u73B0\u503A\u6743\u7684\u8D39\u7528\uFF08\u5982\u6709\uFF09\u53CA \u5176\u4ED6\u4E1A\u52A1\u8D39\u7528\uFF08\u4E0D\u5305\u62EC\u5206\u671F\u624B\u7EED\u8D39\u53CA\u8D37\u6B3E\u670D\u52A1\u8D39\uFF09\uFF09\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "22.\u5728\u4E0D\u5BF9\u5DF2\u5B58\u7EED\u7684\u672C\u5408\u540C\u9879\u4E0B\u4E1A\u52A1\u4E2D\u7684\u501F\u6B3E\u4EBA\u6743\u76CA\u4EA7\u751F\u91CD\u5927\u4E0D\u5229\u5F71\u54CD\u7684\u524D\u63D0\u4E0B\uFF0C\u8D37\u6B3E\u4EBA\u4FDD\u7559\u5BF9\u4E0A\u8FF0\u8BA1\u606F\u3001\u8BA1\u8D39\u4E0E\u8FD8\u6B3E\u89C4\u5219\u8FDB\u884C\u8C03\u6574\u7684\u6743\u5229\u3002\u8BE5\u7B49\u8C03\u6574\u4E00\u7ECF\u8D37\u6B3E\u4EBA\u505A\u51FA\u5E76 \u4EE5\u989D\u5EA6\u6388\u4E88\u4EBA\u5B98\u65B9\u7F51\u7AD9\u516C\u544A\uFF08\u542B\u79FB\u52A8\u7AEF\u516C\u544A\u3001\u7AD9\u5185\u4FE1\u7B49\uFF09\u3001\u6216\u8005\u5BA2\u6237\u670D\u52A1\u70ED\u7EBF\u63D0\u793A\u7B49\u65B9\u5F0F\u516C\u5E03\uFF0C\u6216\u8005\u4EE5\u7535\u8BDD\u6216\u8005\u77ED\u4FE1\u65B9\u5F0F\u901A\u77E5\u501F\u6B3E\u4EBA\uFF0C\u5373\u4E8E\u8D37\u6B3E\u4EBA\u786E\u5B9A\u7684\u751F\u6548\u65E5\u671F\u8D77\u6B63\u5F0F\u751F\u6548\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "23.\u82E5\u501F\u6B3E\u4EBA\u8FD8\u6B3E\u4EA7\u751F\u6EA2\u7F34\u6B3E\uFF0C\u8D37\u6B3E\u4EBA\u5BF9\u8BE5\u6EA2\u7F34\u6B3E\u4E0D\u8BA1\u4ED8\u5229\u606F\u3002\u501F\u6B3E\u4EBA\u53EF\u5728\u6EA2\u7F34\u6B3E\u5230\u8FBE\u8D37\u6B3E\u4EBA\u6307\u5B9A\u8D26\u6237\u768430\u4E2A\u81EA\u7136\u65E5\u5185\u5411\u8D37\u6B3E\u4EBA\u7533\u8BF7\u9886\u56DE\u6EA2\u7F34\u6B3E\uFF0C\u5982\u5728\u7EA6\u5B9A\u671F\u9650\u5185\uFF0C\u501F\u6B3E\u4EBA\u7533\u8BF7\u9886\u56DE\u6EA2 \u7F34\u6B3E\uFF0C\u7ECF\u8D37\u6B3E\u4EBA\u786E\u8BA4\u540E\u5C06\u6EA2\u7F34\u6B3E\u6C47\u5165\u501F\u6B3E\u4EBA\u6307\u5B9A\u7684\u672C\u4EBA\u8D26\u6237\uFF0C\u76F8\u5173\u6C47\u6B3E\u624B\u7EED\u8D39\u7531\u501F\u6B3E\u4EBA\u627F\u62C5\uFF0C\u6C47\u6B3E\u624B\u7EED\u8D39\u7531\u8D37\u6B3E\u4EBA\u5728\u6C47\u6B3E\u65F6\u4ECE\u6EA2\u7F34\u6B3E\u4E2D\u4E88\u4EE5\u6263\u51CF\uFF0C\u5982\u6EA2\u7F34\u6B3E\u4E0D\u8DB3\u4EE5\u652F \u4ED8\u6C47\u6B3E\u624B\u7EED\u8D39\uFF0C\u501F\u6B3E\u4EBA\u5E94\u5148\u884C\u8865\u8DB3\u6C47\u6B3E\u624B\u7EED\u8D39\u540E\u518D\u7531\u8D37\u6B3E\u4EBA\u8FDB\u884C\u6EA2\u7F34\u6B3E\u6C47\u6B3E\u64CD\u4F5C\u3002\u5982\u8D85\u8FC7\u7EA6\u5B9A\u671F\u9650\u672A\u9886\u56DE\u6216\u501F\u6B3E\u4EBA\u653E\u5F03\u9886\u56DE\u6EA2\u7F34\u6B3E\uFF0C\u501F\u6B3E\u4EBA\u4E0D\u53EF\u64A4\u9500\u5730\u540C\u610F\u5C06\u6EA2\u7F34\u6B3E\u65E0\u507F\u8BA9\u6E21\u4E88\u989D\u5EA6\u6388\u4E88\u4EBA\u6240\u6709\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: "900" } },
        "\u7B2C\u4E09\u6761 \u627F\u8BFA\u4E0E\u4FDD\u8BC1"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u9664\u5728\u672C\u5408\u540C\u5176\u4ED6\u6761\u6B3E\u4E2D\u5DF2\u4F5C\u51FA\u7684\u627F\u8BFA\u4E0E\u4FDD\u8BC1\u5916\uFF0C\u989D\u5EA6\u7533\u8BF7\u4EBA\u5728\u6B64\u8FD8\u4F5C\u51FA\u5982\u4E0B\u627F\u8BFA\u4E0E\u4FDD\u8BC1\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "1.\u989D\u5EA6\u7533\u8BF7\u4EBA\u62E5\u6709\u5B8C\u5168\u6743\u5229\u80FD\u529B\u548C\u884C\u4E3A\u80FD\u529B\u7B7E\u7F72\u53CA\u5C65\u884C\u672C\u5408\u540C\uFF0C\u7B7E\u7F72\u672C\u5408\u540C\u662F\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u771F\u5B9E\u610F\u601D\u8868\u793A\u3002\u672C\u5408\u540C\u6784\u6210\u5BF9\u989D\u5EA6\u7533\u8BF7\u4EBA\u5177\u6709\u7EA6\u675F\u529B\u7684\u534F\u8BAE\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA\u53EF\u4EE5\u6839\u636E\u5408\u540C\u6761\u6B3E\u8981\u6C42\u989D\u5EA6\u7533\u8BF7\u4EBA\u5C65\u7EA6\u6216\u5BF9\u989D\u5EA6\u7533\u8BF7\u4EBA\u6267\u884C\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "2.\u989D\u5EA6\u7533\u8BF7\u4EBA\u5177\u6709\u6709\u6548\u7684\u8EAB\u4EFD\u8BC1\u660E\uFF0C\u4FE1\u7528\u826F\u597D\uFF0C\u6709\u80FD\u529B\u6309\u671F\u507F\u8FD8\u8D37\u6B3E\u6B3E\u9879\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "3.\u989D\u5EA6\u7533\u8BF7\u4EBA\u8BA2\u7ACB\u548C\u5C65\u884C\u672C\u5408\u540C\uFF0C\u5E76\u4E0D\u8FDD\u53CD\u4EFB\u4F55\u5BF9\u5176\u6709\u7EA6\u675F\u529B\u7684\u6CD5\u5F8B\u3001\u6CD5\u89C4\u3001\u89C4\u7AE0\u3001\u884C\u653F\u547D\u4EE4\u6216\u751F\u6548\u7684\u53F8\u6CD5\u88C1\u5224/\u4EF2\u88C1\u88C1\u51B3\uFF0C\u4E0D\u8FDD\u53CD\u4EFB\u4F55\u5BF9\u5176\u6709\u7EA6\u675F\u529B\u7684\u5408\u540C\u3001\u534F\u8BAE\u6216\u627F\u8BFA\uFF0C\u4E0D\u4FB5\u72AF\u4EFB\u4F55\u7B2C\u4E09\u65B9\u7684\u5408\u6CD5\u6743\u76CA\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "4.\u989D\u5EA6\u7533\u8BF7\u4EBA\u4FDD\u8BC1\u5411\u8D37\u6B3E\u4EBA\u63D0\u4F9B\u7684\u6240\u6709\u7533\u8BF7\u4FE1\u606F\u662F\u771F\u5B9E\u3001\u5B8C\u6574\u3001\u51C6\u786E\u3001\u5408\u6CD5\u3001\u6709\u6548\u7684\uFF0C\u5E76\u6388\u6743\u8D37\u6B3E\u4EBA\u5728\u989D\u5EA6\u7533\u8BF7\u4EBA\u4FE1\u8D37\u4E1A\u52A1\u7533\u8BF7\u9636\u6BB5\u53CA\u4E1A\u52A1\u5B58\u7EED\u671F\u95F4\u5411\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E2D\u56FD\u4EBA\u6C11\u94F6\u884C\u91D1\u878D\u4FE1\u7528\u4FE1\u606F\u57FA\u7840\u6570\u636E\u5E93\u53CA\u7ECF \u56FD\u52A1\u9662\u6216\u5176\u4ED6\u653F\u5E9C\u6709\u6743\u90E8\u95E8\u6279\u51C6\u5408\u6CD5\u8BBE\u7ACB\u7684\u5176\u4ED6\u5F81\u4FE1\u673A\u6784\u67E5\u8BE2\u3001\u6253\u5370\u3001\u62AB\u9732\u4E0E\u989D\u5EA6\u7533\u8BF7\u4EBA\u76F8\u5173\u7684\u4E2A\u4EBA\u4FE1\u7528\u4FE1\u606F\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u989D\u5EA6\u7533\u8BF7\u4EBA\u540C\u65F6\u6388\u6743\u8D37\u6B3E\u4EBA\u53EF\u5728\u989D\u5EA6\u7533\u8BF7\u4EBA\u4FE1\u8D37\u4E1A\u52A1\u7533\u8BF7\u9636\u6BB5\u53CA\u4E1A\u52A1\u5B58\u7EED\u671F\u95F4\u5411\u8D37\u6B3E\u4EBA\u53CA\u5176\u5173\u8054\u673A\u6784\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5728\u8D44\u91D1\u3001\u7ECF\u8425\u7B49\u65B9\u9762\u5B58\u5728\u76F4\u63A5\u6216\u8005\u95F4\u63A5\u7684\u62E5\u6709\u63A7\u5236\u5173\u7CFB\uFF1B\u76F4\u63A5\u6216\u8005\u95F4\u63A5\u5730 \u540C\u4E3A\u7B2C\u4E09\u8005\u6240\u62E5\u6709\u6216\u8005\u63A7\u5236\uFF1B\u5176\u4ED6\u5728\u5229\u76CA\u4E0A\u76F8\u5173\u8054\u7684\u5173\u7CFB\uFF09\u3001\u5176\u4ED6\u6709\u5173\u673A\u6784\u6216\u5355\u4F4D(\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7ECF\u56FD\u52A1\u9662\u6216\u5176\u4ED6\u653F\u5E9C\u6709\u6743\u90E8\u95E8\u6279\u51C6\u5408\u6CD5\u8BBE\u7ACB\u7684\u5176\u4ED6\u5F81\u4FE1\u673A\u6784\u3001\u516C\u5B89\u3001\u516C\u79EF\u91D1\u3001\u793E\u4FDD\u3001\u7A0E\u52A1\u3001 \u6C11\u653F\u3001\u7269\u6D41\u3001\u901A\u4FE1\u8FD0\u8425\u5546\u3001\u7535\u5B50\u5546\u52A1\u5E73\u53F0\u3001\u4E92\u8054\u7F51\u5E73\u53F0\u7B49\u7B2C\u4E09\u65B9\u673A\u6784\uFF09\u901A\u8FC7\u5408\u6CD5\u6E20\u9053\u4E86\u89E3\u3001\u67E5\u8BE2\u3001\u6253\u5370\u3001\u4FDD\u5B58\u4E0E\u989D\u5EA6\u7533\u8BF7\u4EBA\u76F8\u5173\u7684\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F\u3001\u4E2A\u4EBA\u5F81\u4FE1\u4FE1\u606F\u3001\u8D22\u4EA7\u4FE1\u606F\u3001\u91D1\u878D\u4EA4\u6613\u884C\u4E3A\u4FE1 \u606F\u3001\u8054\u7EDC\u65B9\u5F0F\u3001\u5173\u7CFB\u4EBA\u3001\u8D44\u4FE1\u72B6\u51B5\u3001\u5C31\u4E1A\u60C5\u51B5\u3001\u6536\u5165\u60C5\u51B5\u3001\u5A5A\u59FB\u60C5\u51B5\u3001\u5B66\u5386\u4FE1\u606F\u3001\u5DE5\u4F5C\u5730\u5740\u3001\u5C45\u4F4F\u5730\u5740\u3001\u4F4D\u7F6E\u6570\u636E\u3001\u901A\u8BAF\u884C\u4E3A\u3001\u901A\u8BAF\u4FE1\u606F\u3001\u4E92\u8054\u7F51\u4F7F\u7528\u4FE1\u606F\u3001\u4E92\u8054\u7F51\u4F7F\u7528\u8BBE\u5907\u4FE1\u606F\u3001\u4E92\u8054\u7F51\u4F7F\u7528\u884C\u4E3A\u7B49 \u4FE1\u606F\u5E76\u4FDD\u7559\u76F8\u5173\u6838\u67E5\u8D44\u6599\uFF0C\u5E76\u4FDD\u8BC1\u4E0D\u4F1A\u56E0\u4E0A\u8FF0\u673A\u6784\u6216\u5355\u4F4D\u914D\u5408\u8D37\u6B3E\u4EBA\u63D0\u4F9B\u6709\u5173\u4FE1\u606F\u6216\u786E\u8BA4\u4E8B\u9879\u800C\u5411\u4E0A\u8FF0\u673A\u6784\u6216\u5355\u4F4D\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u63D0\u51FA\u6743\u5229\u4E3B\u5F20\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u989D\u5EA6\u7533\u8BF7\u4EBA\u4E0D\u53EF\u64A4\u9500\u7684\u6388\u6743\u8D37\u6B3E\u4EBA\u5728\u989D\u5EA6\u7533\u8BF7\u4EBA\u4FE1\u8D37\u4E1A\u52A1\u7533\u8BF7\u9636\u6BB5\u53CA\u989D\u5EA6\u9879\u4E0B\u4E1A\u52A1\u5B58\u7EED\u671F\u95F4\u5BF9\u501F\u6B3E\u4EBA\u7684\u76F8\u5173\u4FE1\u606F\u53EF\u7528\u4E8E\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5982\u4E0B\u7528\u9014\uFF1A\u4E0E\u501F\u6B3E\u4EBA\u6388\u4FE1\u7533\u8BF7\u4E0E\u5BA1\u6279\u3001\u8D37\u540E\u7BA1\u7406\u3001\u8D37\u6B3E\u50AC\u6536\u3001\u5E02\u573A\u8C03\u67E5\u53CA\u4FE1\u606F\u6570 \u636E\u5206\u6790\uFF0C\u6216\u7528\u4E8E\u6D89\u53CA\u501F\u6B3E\u4EBA\u4F5C\u4E3A\u627F\u62C5\u5171\u540C\u6216\u8FDE\u5E26\u8D23\u4EFB\u7684\u7B2C\u4E09\u65B9\u7684\u6388\u4FE1\u3001\u8D37\u540E\u7BA1\u7406\u6216\u62C5\u4FDD\u4E1A\u52A1\u3002\u8D37\u6B3E\u4EBA\u627F\u8BFA\u501F\u6B3E\u4EBA\u7684\u76F8\u5173\u4FE1\u606F\u4E0D\u5F97\u7528\u4E8E\u5176\u4ED6\u65E0\u5173\u4E8B\u9879\uFF0C\u4E14\u8D37\u6B3E\u4EBA\u5BF9\u76F8\u5173\u4FE1\u606F\u627F\u62C5\u4FDD\u5BC6\u4E49\u52A1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "5.\u989D\u5EA6\u7533\u8BF7\u4EBA\u8BA2\u7ACB\u548C\u5C65\u884C\u672C\u5408\u540C\uFF0C\u5E76\u4E0D\u8FDD\u53CD\u4EFB\u4F55\u5BF9\u5176\u6709\u7EA6\u675F\u529B\u7684\u56FD\u5BB6\u6CD5\u5F8B\u3001\u6CD5\u89C4\u548C\u89C4\u8303\u6027\u6587\u4EF6\uFF0C\u4E0D\u8FDD\u53CD\u4EFB\u4F55\u5BF9\u5176\u6709\u7EA6\u675F\u529B\u7684\u5408\u540C\u3001\u5408\u540C\u6216\u627F\u8BFA\uFF0C\u4E0D\u4FB5\u72AF\u4EFB\u4F55\u7B2C\u4E09\u65B9\u7684\u5408\u6CD5\u6743\u76CA\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "6.\u622A\u81F3\u672C\u5408\u540C\u751F\u6548\u4E4B\u65E5\uFF0C\u4E0D\u5B58\u5728\u6D89\u53CA\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u4EFB\u4F55\u5211\u4E8B\u3001\u884C\u653F\u3001\u6C11\u4E8B\u8BC9\u8BBC\u7A0B\u5E8F\u3001\u8C03\u89E3\u7A0B\u5E8F\u3001\u4EF2\u88C1\u7A0B\u5E8F\u3001\u884C\u653F\u5904\u7F5A\u7A0B\u5E8F\u6216\u5176\u4ED6\u4E89\u8BAE\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "7.\u672C\u5408\u540C\u9879\u4E0B\u5355\u7B14\u501F\u6B3E\u671F\u9650\u5185\uFF0C\u501F\u6B3E\u4EBA\u5982\u53D1\u751F\u7ECF\u6D4E\u60C5\u51B5\u6076\u5316\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5931\u4E1A\u3001\u5355\u4F4D\u7834\u4EA7\u6216\u4E2A\u4EBA\u8D22\u4EA7\u906D\u53D7\u91CD\u5927\u635F\u5931\u3001\u4E2A\u4EBA\u8EAB\u4F53\u60C5\u51B5\u53D1\u751F\u91CD\u5927\u4E0D\u5229\u53D8\u5316\u7B49\u53EF\u80FD\u5F71\u54CD\u501F\u6B3E\u4EBA\u5C65\u884C\u672C\u5408\u540C\u80FD\u529B\u7684\u4E8B\u9879\uFF0C\u501F\u6B3E\u4EBA \u5C06\u5728\u53D1\u751F\u6216\u53EF\u80FD\u53D1\u751F\u8BE5\u7B49\u4E8B\u9879\u4E4B\u65E5\u8D777\u4E2A\u5DE5\u4F5C\u65E5\u5185\u4E66\u9762\u901A\u77E5\u8D37\u6B3E\u4EBA\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u6839\u636E\u5177\u4F53\u60C5\u51B5\u51B3\u5B9A\u662F\u5426\u63D0\u524D\u8981\u6C42\u501F\u6B3E\u4EBA\u6E05\u507F\u672C\u5408\u540C\u9879\u4E0B\u7684\u90E8\u5206\u6216\u5168\u90E8\u501F\u6B3E\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "8.\u5728\u672C\u5408\u540C\u89E3\u9664\u6216\u7EC8\u6B62\u4E4B\u524D\uFF0C\u989D\u5EA6\u7533\u8BF7\u4EBA\u53D8\u66F4\u59D3\u540D\u3001\u6237\u7C4D\u6240\u5728\u5730\u3001\u7ECF\u5E38\u5C45\u4F4F\u5730\u3001\u901A\u8BAF\u5730\u5740\u3001\u90AE\u653F\u7F16\u7801\u3001\u4F4F\u5B85\u7535\u8BDD\u3001\u5355\u4F4D\u7535\u8BDD\u3001\u7535\u5B50\u90AE\u7BB1\u3001\u624B\u673A\u53F7\u7801\u6216\u5176\u4ED6\u4E2A\u4EBA\u4FE1\u606F\u7684\uFF0C\u5747\u5E94\u53CA\u65F6\u901A\u77E5\u8D37\u6B3E\u4EBA\uFF0C\u5E76\u7ECF\u8D37\u6B3E\u4EBA\u786E \u8BA4\u3002\u82E5\u501F\u6B3E\u4EBA\u4E0D\u5C65\u884C\u4E0A\u8FF0\u901A\u77E5\u4E49\u52A1\uFF0C\u8D37\u6B3E\u4EBA\u6216\u8D37\u6B3E\u4EBA\u59D4\u6258\u7684 \u7B2C\u4E09\u65B9\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u50AC\u6536\u673A\u6784\u7B49\uFF09\u3001\u53F8\u6CD5\u673A\u5173\u3001\u4EF2\u88C1\u673A\u6784\u7B49\u6309\u7167\u501F\u6B3E\u4EBA\u539F\u901A\u8BAF\u5730\u5740\u5BC4\u9001\u3001\u53D1\u9001\u6709\u5173\u901A\u77E5\u3001\u6587\u4EF6\u3001\u53F8\u6CD5\u6587\u4E66\u7684\uFF0C\u89C6\u4E3A\u5DF2\u9001\u8FBE\u3002\u5982\u65E0\u4EBA\u7B7E\u6536\u6216\u8005\u62D2\u6536\u7684\uFF0C\u6587\u4E66\u9000\u56DE\u4E4B\u65E5\u5373\u89C6\u4E3A\u9001\u8FBE\u4E4B\u65E5\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "9.\u501F\u6B3E\u4EBA\u4FDD\u8BC1\u6839\u636E\u8D37\u6B3E\u4EBA\u7684\u8981\u6C42\u5411\u8D37\u6B3E\u4EBA\u63D0\u4F9B\u7B26\u5408\u672C\u5408\u540C\u7EA6\u5B9A\u7528\u9014\u7684\u76F8\u5173\u8D37\u6B3E\u4F7F\u7528\u652F\u4ED8\u51ED\u8BC1\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6536\u636E\u3001\u53D1\u7968\u3001\u5546\u5BB6\u51FA\u5177\u7684\u6D88\u8D39\u6E05\u5355\u7B49\uFF09\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "10.\u989D\u5EA6\u7533\u8BF7\u4EBA\u786E\u8BA4\uFF0C\u65E0\u8BBA\u662F\u989D\u5EA6\u7533\u8BF7\u4EBA\u672C\u4EBA\u6216\u662F\u4EE5\u989D\u5EA6\u7533\u8BF7\u4EBA\u540D\u4E49\u4F7F\u7528\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u767B\u9646\u540E\u8FDB\u884C\u7684\u4E00\u5207\u6D3B\u52A8\u5747\u4EE3\u8868\u989D\u5EA6\u7533\u8BF7\u4EBA\u672C\u4EBA\u7684\u610F\u601D\u5E76\u7531\u989D\u5EA6\u7533\u8BF7\u4EBA\u627F\u62C5\u76F8\u5E94\u7684\u6CD5\u5F8B\u540E\u679C\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u989D\u5EA6\u7533\u8BF7\u4EBA\u627F\u8BFA\u5C06\u59A5\u5584\u4FDD\u7BA1\u672C\u4EBA\u7684\u8D26\u53F7\u3001\u5BC6\u7801\u3001\u7ED1\u5B9A\u7684\u624B\u673A\u53F7\u7801\u3001\u624B\u673A\u6821\u9A8C\u7801\u7B49\u4E0E\u529E\u7406\u53CA\u4F7F\u7528\u501F\u6B3E\u8FC7\u7A0B\u4E2D\u7684\u4E00\u5207\u6709\u5173\u4FE1\u606F\u3002\u989D\u5EA6\u7533\u8BF7\u4EBA\u5E94\u786E\u4FDD\u4E0D\u5411\u5176\u4ED6\u4EFB\u4F55\u4EBA\u6CC4\u9732\u6709\u5173\u8D26\u53F7\u4FE1\u606F\u548C\u5BC6\u7801\u3002\u5BF9\u4E8E \u56E0\u8D26\u53F7\u3001\u5BC6\u7801\u6CC4\u9732\u6240\u81F4\u7684\u635F\u5931\uFF0C\u7531\u989D\u5EA6\u7533\u8BF7\u4EBA\u81EA\u884C\u627F\u62C5\u3002\u5982\u989D\u5EA6\u7533\u8BF7\u4EBA\u53D1\u73B0\u6709\u4ED6\u4EBA\u5192\u7528\u6216\u76D7\u7528\u672C\u4EBA\u8D26\u53F7\u53CA\u5BC6\u7801\u6216\u4EFB\u4F55\u5176\u4ED6\u672A\u7ECF\u5408\u6CD5\u6388\u6743\u4E4B\u60C5\u5F62\u65F6\uFF0C\u5E94\u7ACB\u5373\u901A\u77E5\u989D\u5EA6\u6388\u4E88\u4EBA\uFF0C\u8981\u6C42\u5176\u6682 \u505C\u76F8\u5173\u670D\u52A1\u3002\u540C\u65F6\uFF0C\u989D\u5EA6\u7533\u8BF7\u4EBA\u7406\u89E3\u989D\u5EA6\u6388\u4E88\u4EBA\u5BF9\u76F8\u5E94\u7684\u8BF7\u6C42\u91C7\u53D6\u884C\u52A8\u9700\u8981\u5408\u7406\u671F\u9650\uFF0C\u5728\u6B64\u4E4B\u524D\uFF0C\u9488\u5BF9\u5411\u8BE5\u8D26\u6237\u5DF2\u6267\u884C\u7684\u6307\u4EE4\u53CA/\u6216\u6240\u5BFC\u81F4\u7684\u501F\u6B3E\u4EBA\u635F\u5931\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA\u4E0D\u627F\u62C5\u8D23\u4EFB\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "11.\u501F\u6B3E\u4EBA\u627F\u8BA4\u4E0E\u8D37\u6B3E\u4EBA\u95F4\u501F\u6B3E\u6CD5\u5F8B\u5173\u7CFB\u5B8C\u5168\u72EC\u7ACB\u4E8E\u989D\u5EA6\u7533\u8BF7\u4EBA\u4E0E\u5546\u5BB6\u4E4B\u95F4\u7684\u4E70\u5356\u6216\u670D\u52A1\u7B49\u57FA\u7840\u5408\u540C\u5173\u7CFB\u3002\u8BE5\u57FA\u7840\u5408\u540C\u5173\u7CFB\u7684\u65E0\u6548\u6216\u53D8\u66F4\u5E76\u4E0D\u5F71\u54CD\u501F\u6B3E\u4EBA\u4E0E\u8D37\u6B3E\u4EBA\u501F\u6B3E\u5408\u540C\u7684\u6CD5\u5F8B\u6548\u529B\u3002\u501F\u6B3E\u4EBA\u4E0D\u5F97\u4EE5\u501F\u6B3E\u4EBA\u4E0E\u5546\u5BB6\u4E4B\u95F4\u7684\u4EFB\u4F55\u7EA0\u7EB7\u4E3A\u7531\u62D2\u7EDD\u5C65\u884C\u501F\u6B3E\u5408\u540C\u9879\u4E0B\u4EFB\u4F55\u4E49\u52A1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "12.\u989D\u5EA6\u7533\u8BF7\u4EBA\u4E0D\u5F97\u5229\u7528\u672C\u6388\u4FE1\u989D\u5EA6\u8FDB\u884C\u5077\u9003\u7A0E\u6B3E\u3001\u9003\u5E9F\u503A\u52A1\u3001\u5957\u53D6\u73B0\u91D1\u3001\u6D17\u94B1\u53CA\u5176\u4ED6\u8FDD\u6CD5\u72AF\u7F6A\u6D3B\u52A8\uFF0C\u82E5\u60A8\u5728\u4F7F\u7528\u672C\u6388\u4FE1\u989D\u5EA6\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u76D1\u7BA1\u673A\u5173\u89C4\u5B9A\u7684\u6216\u8D37\u6B3E\u4EBA\u4F9D\u636E\u5176\u4E3B\u89C2\u5224\u65AD\u8BA4\u5B9A\u7684\u98CE\u9669\u7279\u5F81\u65F6\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA \u6709\u6743\u4E0D\u7ECF\u4EFB\u4F55\u5F62\u5F0F\u7684\u4E8B\u5148\u901A\u77E5\u6216\u4E8B\u5148\u786E\u8BA4\u800C\u968F\u65F6\u4E2D\u6B62\u6216\u7EC8\u6B62\u672C\u4FE1\u7528\u989D\u5EA6\u7684\u4F7F\u7528\uFF0C\u60A8\u6709\u4E49\u52A1\u79EF\u6781\u534F\u52A9\u8D37\u6B3E\u4EBA\u8BC6\u522B\u76F8\u5173\u98CE\u9669\uFF0C\u5E76\u627F\u62C5\u56E0\u6B64\u6240\u4EA7\u751F\u7684\u635F\u5931\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: "900" } },
        "\u7B2C\u56DB\u6761 \u8FDD\u7EA6\u6761\u6B3E"
      ),
      _react2.default.createElement(
        "p",
        null,
        "1.\u4EE5\u4E0B\u4EFB\u4E00\u4E8B\u4EF6\u5747\u6784\u6210\u672C\u6761\u6B3E\u6240\u79F0\u8FDD\u7EA6\u4E8B\u4EF6\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF081\uFF09\u501F\u6B3E\u4EBA\u672A\u6309\u7EA6\u5B9A\u7684\u7528\u9014\u4F7F\u7528\u8D37\u6B3E\u6216\u5C06\u8D37\u6B3E\u8D44\u91D1\u7528\u4E8E\u7981\u6B62\u9886\u57DF\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF082\uFF09\u501F\u6B3E\u4EBA\u6CA1\u6709\u6309\u65F6\u8DB3\u989D\u507F\u8FD8\u4EFB\u4E00\u7B14\u8D37\u6B3E\u7684\u8D37\u6B3E\u672C\u91D1\u3001\u5229\u606F\u3001\u5206\u671F\u624B\u7EED\u8D39\u3001\u8D37\u6B3E\u670D\u52A1\u8D39\u6216\u5176\u4ED6\u8D39\u7528\uFF08\u5982\u6709\uFF09\u6216\u5176\u4ED6\u5E94\u4ED8\u6B3E\u9879\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF083\uFF09\u501F\u6B3E\u4EBA\u8FDD\u53CD\u4E0E\u8D37\u6B3E\u4EBA\u6216\u5176\u4ED6\u4EFB\u4F55\u7B2C\u4E09\u65B9\u7B7E\u8BA2\u7684\u5176\u4ED6\u5408\u540C\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6388\u4FE1\u5408\u540C\u3001\u8D37\u6B3E\u5408\u540C\u3001\u62C5\u4FDD\u5408\u540C\u7B49\uFF09\u6216\u53D1\u751F\u5176\u5B83\u507F\u503A\u8D23\u4EFB\u5230\u671F\u4E0D\u80FD\u5C65\u884C\u7684\u60C5\u5F62\uFF0C\u6216\u4E0E\u501F\u6B3E\u4EBA\u76F8\u5173\u7684\u7EA0\u7EB7\u5DF2\u8FDB\u5165\u8BC9\u8BBC/\u4EF2\u88C1\u6216\u5F3A\u5236\u6267\u884C\u7A0B\u5E8F\uFF0C\u6216\u501F\u6B3E\u4EBA\u7684\u623F\u5C4B\u3001\u8F66\u8F86\u7B49\u8D22\u4EA7\u88AB\u53F8\u6CD5\u673A\u5173\u3001\u884C\u653F\u673A\u5173\u67E5\u5C01\u3001\u51BB\u7ED3\u6216\u6263\u62BC\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF084\uFF09\u501F\u6B3E\u4EBA\u672A\u80FD\u5B8C\u5168\u5C65\u884C\u672C\u5408\u540C\u9879\u4E0B\u4EFB\u4F55\u4E49\u52A1\u3001\u8D23\u4EFB\u6216\u8FDD\u53CD\u672C\u5408\u540C\u9879\u4E0B\u4EFB\u4F55\u4E00\u9879\u4FDD\u8BC1\u3001\u627F\u8BFA\u548C\u9648\u8FF0\u7684\u884C\u4E3A\uFF1B/\u4EF2\u88C1\u6216\u5F3A\u5236\u6267\u884C\u7A0B\u5E8F\uFF0C\u6216\u501F\u6B3E\u4EBA\u7684\u623F\u5C4B\u3001\u8F66\u8F86\u7B49\u8D22\u4EA7\u88AB\u53F8\u6CD5\u673A\u5173\u3001\u884C\u653F\u673A\u5173\u67E5\u5C01\u3001\u51BB\u7ED3\u6216\u6263\u62BC\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF085\uFF09\u501F\u6B3E\u4EBA\u5411\u8D37\u6B3E\u4EBA\u63D0\u4F9B\u865A\u5047\u7684\u8EAB\u4EFD\u3001\u4FE1\u606F\u4EE5\u83B7\u53D6\u672C\u5408\u540C\u9879\u4E0B\u8D37\u6B3E\u6216\u5408\u4F5C\u5546\u6237\u7684\u4EA7\u54C1\u6216\u670D\u52A1\uFF0C\u6216\u8005\u501F\u6B3E\u4EBA\u9690\u7792\u771F\u5B9E\u7684\u91CD\u8981\u60C5\u51B5\uFF0C\u6216\u501F\u6B3E\u4EBA\u4E0D\u914D\u5408\u8D37\u6B3E\u4EBA\u7684\u8C03\u67E5\u3001\u5BA1\u67E5\u548C\u68C0\u67E5\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF086\uFF09\u501F\u6B3E\u4EBA\u660E\u786E\u8868\u793A\u6216\u4EE5\u81EA\u5DF1\u7684\u884C\u4E3A\uFF08\u5982\u8F6C\u79FB\u8D44\u4EA7\u7B49\uFF09\u8868\u660E\u5176\u5C06\u4E0D\u5C65\u884C\u672C\u5408\u540C\u9879\u4E0B\u7684\u4E49\u52A1\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF087\uFF09\u5176\u4ED6\u5BF9\u8D37\u6B3E\u4EBA\u503A\u6743\u4EA7\u751F\u4E25\u91CD\u4E0D\u5229\u5F71\u54CD\u7684\u4E8B\u4EF6\u6216\u884C\u4E3A\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "2.\u6709\u8FDD\u7EA6\u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u91C7\u53D6\u4E0B\u5217\u4E00\u79CD\u6216\u591A\u79CD\u63AA\u65BD\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF081\uFF09\u8981\u6C42\u501F\u6B3E\u4EBA\u9650\u671F\u7EA0\u6B63\u8FDD\u7EA6\u884C\u4E3A\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF082\uFF09\u505C\u6B62\u53D1\u653E\u989D\u5EA6\u9879\u4E0B\u5C1A\u672A\u4F7F\u7528\u7684\u8D37\u6B3E\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF083\uFF09\u6709\u6743\u901A\u8FC7\u7535\u8BDD\u3001\u90AE\u4EF6\u3001\u77ED\u4FE1\u7B49\u65B9\u5F0F\u5BA3\u5E03\u989D\u5EA6\u9879\u4E0B\u5DF2\u53D1\u653E\u7684\u8D37\u6B3E\u5168\u90E8\u6216\u90E8\u5206\u63D0\u524D\u5230\u671F\uFF0C\u65E0\u9700\u4E8B\u5148\u5411\u60A8\u53D1\u51FA\u4E66\u9762\u901A\u77E5\u5373\u53EF\u8981\u6C42\u60A8\u63D0\u524D\u5F52\u8FD8\u5DF2\u53D1\u653E\u7684\u5168\u90E8\u6216\u90E8\u5206\u8D37\u6B3E\u672C\u91D1\u5E76\u7ED3\u6E05\u5229\u606F\u3001\u7F5A\u606F\u3001\u590D\u5229\u3001\u8FDD\u7EA6\u91D1\u53CA\u5176\u4ED6\u5E94\u4ED8\u6B3E\u9879\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF084\uFF09\u5BF9\u4E8E\u6309\u5229\u7387\u8BA1\u606F\u7684\u8D37\u6B3E\uFF0C\u501F\u6B3E\u4EBA\u672A\u53CA\u65F6\u8DB3\u989D\u5F52\u8FD8\u4EFB\u4F55\u4E00\u671F\u501F\u6B3E\u672C\u606F\u5373\u89C6\u4E3A\u903E\u671F\uFF0C\u4ECE\u903E\u671F\u4E4B\u65E5\u8D77\uFF0C\u6309\u5B9E\u9645\u903E\u671F\u5929\u6570\u5BF9\u903E\u671F\u501F\u6B3E\u672C\u91D1\u6309\u7167\u903E\u671F\u5229\u7387\u8BA1\u6536\u7F5A\u606F\uFF0C\u5177\u4F53\u903E\u671F\u5229\u7387\u4EE5\u672C\u5408\u540C\u9644 \u4EF6\u6216\u672C\u5408\u540C\u9879\u4E0B\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u76F4\u81F3\u672C\u606F\u6E05\u507F\u4E3A\u6B62\u3002\u672A\u6309\u7EA6\u5B9A\u7684\u7528\u9014\u4F7F\u7528\u8D37\u6B3E\u7684\uFF0C \u4ECE\u8FDD\u53CD\u5408\u540C\u7EA6\u5B9A\u4F7F\u7528\u8D37\u6B3E\u4E4B\u65E5\u8D77\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u5C31\u8FDD\u7EA6\u4F7F\u7528\u7684\u8D37\u6B3E\u6309\u7167\u8FDD\u7EA6\u5229\u7387\u8BA1\u6536\u7F5A\u606F\uFF0C\u5177\u4F53\u8FDD\u7EA6\u5229\u7387\u4EE5\u672C\u5408\u540C\u9879\u4E0B\u9644\u4EF6\u6216\u672C\u5408\u540C\u9879\u4E0B\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C \u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u76F4\u81F3\u672C\u606F\u6E05\u507F\u4E3A\u6B62\u3002\u5BF9\u4E0D\u80FD\u6309\u65F6\u652F\u4ED8\u7684\u5229\u606F\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u6309\u903E\u671F\u7F5A\u606F\u5229\u7387\u8BA1\u6536\u590D\u5229\uFF0C\u5177\u4F53\u903E\u671F\u7F5A\u606F\u5229\u7387\u4EE5\u672C\u5408\u540C\u9644\u4EF6\u6216\u672C\u5408\u540C\u9879\u4E0B \u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF086\uFF09\u5BF9\u4E8E\u6309\u8D39\u7387\u8BA1\u8D39\u7684\u8D37\u6B3E\uFF0C\u501F\u6B3E\u4EBA\u672A\u53CA\u65F6\u8DB3\u989D\u5F52\u8FD8\u4EFB\u4F55\u4E00\u671F\u501F\u6B3E\u672C\u91D1\u53CA\u5F53\u671F\u8D39\u7528\u5373\u89C6\u4E3A\u903E\u671F\uFF0C\u53D1\u751F\u903E\u671F\u7684\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u6839\u636E\u8D37\u6B3E\u672C\u91D1\u6309\u4E00\u5B9A\u6BD4\u4F8B\u6BCF\u65E5\u8BA1\u6536\u8FDD\u7EA6\u91D1/\u6EDE\u7EB3\u91D1\uFF0C\u5177\u4F53\u6BD4\u4F8B\u4EE5\u672C\u5408\u540C \u9879\u4E0B\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u76F4\u81F3\u672C\u91D1\u548C\u624B\u7EED\u8D39\u6E05\u507F\u4E3A\u6B62\u3002\u672A\u6309\u7EA6\u5B9A\u7684\u7528\u9014\u4F7F\u7528\u8D37\u6B3E\u7684\uFF0C\u4ECE\u8FDD\u53CD \u5408\u540C\u7EA6\u5B9A\u4F7F\u7528\u8D37\u6B3E\u4E4B\u65E5\u8D77\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u5C31\u632A\u7528\u8D37\u6B3E\u91D1\u989D\u6309\u4E00\u5B9A\u6BD4\u4F8B\u6BCF\u65E5\u8BA1\u6536\u8FDD\u7EA6\u91D1\uFF0C\u5177\u4F53\u6BD4\u4F8B\u4EE5\u672C\u5408\u540C\u9879\u4E0B\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55 \u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u76F4\u81F3\u672C\u91D1\u548C\u624B\u7EED\u8D39\u6E05\u507F\u4E3A\u6B62\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF087\uFF09\u5BF9\u4E8E\u4E00\u6B21\u6027\u6536\u53D6\u8D37\u6B3E\u670D\u52A1\u8D39\u7684\u8D37\u6B3E\uFF0C\u501F\u6B3E\u4EBA\u672A\u53CA\u65F6\u8DB3\u989D\u652F\u4ED8\u8D37\u6B3E\u672C\u91D1\u6216\uFF08\u53CA\uFF09\u8D37\u6B3E\u670D\u52A1\u8D39\u5373\u89C6\u4E3A\u903E\u671F\uFF0C\u4ECE\u903E\u671F\u4E4B\u65E5\u8D77\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u6839\u636E\u8D37\u6B3E\u672C\u91D1\u6309\u4E00\u5B9A\u6BD4\u4F8B\u6BCF\u65E5\u8BA1\u6536\u8FDD\u7EA6\u91D1/\u6EDE\u7EB3\u91D1\uFF0C\u5177\u4F53 \u6BD4\u4F8B\u4EE5\u672C\u5408\u540C\u9879\u4E0B\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219\u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u76F4\u81F3\u672C\u91D1\u53CA\u8D37\u6B3E\u670D\u52A1\u8D39\u6E05\u507F\u4E3A\u6B62\u3002\u672A\u6309\u7EA6\u5B9A\u7684\u7528 \u9014\u4F7F\u7528\u8D37\u6B3E\u7684\uFF0C\u4ECE\u8FDD\u53CD\u5408\u540C\u7EA6\u5B9A\u4F7F\u7528\u8D37\u6B3E\u4E4B\u65E5\u8D77\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u5C31\u632A\u7528\u8D37\u6B3E\u91D1\u989D\u6309\u4E00\u5B9A\u6BD4\u4F8B\u6BCF\u65E5\u8BA1\u6536\u8FDD\u7EA6\u91D1\uFF0C\u5177\u4F53\u6BD4\u4F8B\u4EE5\u672C\u5408\u540C\u9879\u4E0B\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\u7EA6\u5B9A\uFF0C\u82E5\u65E0\u300A\u4E2A\u4EBA\u5355\u7B14\u501F\u6B3E\u5408\u540C\u300B\uFF0C\u5219 \u4EE5\u8D37\u6B3E\u4EBA\u7CFB\u7EDF\u751F\u6210\u7684\u7535\u5B50\u4FE1\u606F\u8BB0\u5F55\u8BB0\u8F7D\u6216\u672C\u5408\u540C\u9644\u4EF6\u7EA6\u5B9A\u4E3A\u51C6\uFF0C\u76F4\u81F3\u672C\u91D1\u53CA\u8D37\u6B3E\u670D\u52A1\u8D39\u6E05\u507F\u4E3A\u6B62\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF088\uFF09\u5C01\u9501\u3001\u51BB\u7ED3\u6CE8\u518C\u8D26\u53F7\uFF0C\u51BB\u7ED3\u6216\u51CF\u5C11\u6216\u53D6\u6D88\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u989D\u5EA6\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF089\uFF09\u59D4\u6258\u8FD8\u6B3E\u8D26\u6237\u5F00\u6237\u884C\u6216\u7B2C\u4E09\u65B9\u652F\u4ED8\u673A\u6784\u4ECE\u501F\u6B3E\u4EBA\u7684\u8FD8\u6B3E\u8D26\u6237\u4E2D\u6263\u9664\u76F8\u5E94\u91D1\u989D\u4EE5\u6536\u56DE\u76F8\u5173\u8D39\u7528\u3001\u7F5A\u606F\u3001\u590D\u5229\u3001\u8D37\u6B3E\u672C\u91D1\uFF0C\u6216\u4EE5\u5408\u6CD5\u624B\u6BB5\u8FFD\u507F\u501F\u6B3E\u4EBA\u5E94\u4ED8\u6B3E\u9879\uFF0C\u76F4\u81F3\u501F\u6B3E\u4EBA\u5728\u8D37\u6B3E\u4EBA\u5904\u7684\u5230\u671F\u5E94 \u4ED8\u6B3E\u9879\u5168\u90E8\u7ED3\u6E05\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF0810\uFF09\u5982\u8D37\u6B3E\u4EBA\u4E3A\u94F6\u884C\u7C7B\u91D1\u878D\u673A\u6784\uFF0C\u59D4\u6258\u8D37\u6B3E\u4EBA\u4ECE\u501F\u6B3E\u4EBA\u5728\u8D37\u6B3E\u4EBA\u4EFB\u4F55\u8425\u4E1A\u673A\u6784\u5F00\u7ACB\u7684\u8D26\u6237\u4E2D\u6263\u6536\u501F\u6B3E\u4EBA\u5E94\u507F\u4ED8\u7684\u8D37\u6B3E\u672C\u91D1\u3001\u5229\u606F\u3001\u7F5A\u606F\u3001\u590D\u5229\u4EE5\u53CA\u6240\u6709\u5176\u4ED6\u5230\u671F\u5E94\u4ED8\u6B3E\u9879\uFF0C\u76F4\u81F3\u5230\u671F\u5E94\u4ED8\u6B3E\u9879\u5168\u90E8\u7ED3\u6E05\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF0811\uFF09\u5BF9\u501F\u6B3E\u4EBA\u7684\u8FDD\u7EA6\u884C\u4E3A\uFF0C\u6709\u6743\u5C06\u8BE5\u884C\u4E3A\u5411\u5176\u6240\u5728\u5355\u4F4D\u53CA\u5176\u4ED6\u6709\u5173\u5355\u4F4D\u901A\u62A5\uFF0C\u5E76\u5728\u5A92\u4F53\u53CA\u7F51\u7EDC\u5E73\u53F0\u4E0A\u516C\u5F00\u62AB\u9732\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF0812\uFF09\u91C7\u53D6\u516C\u544A\u50AC\u6536\u3001\u59D4\u6258\u7B2C\u4E09\u65B9\u50AC\u6536\u673A\u6784\u50AC\u6536\u3001\u5F8B\u5E08\u4E8B\u52A1\u6240\u50AC\u6536\uFF0C\u63D0\u8D77\u4EF2\u88C1\u3001\u8BC9\u8BBC\u7B49\u65B9\u5F0F\u8FDB\u884C\u6E05\u6536\uFF0C\u7531\u6B64\u5F15\u8D77\u7684\u4E00\u5207\u8D39\u7528\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5F8B\u5E08\u8D39\u3001\u8BC9\u8BBC\u8D39\u3001\u4EF2\u88C1\u8D39\u3001\u516C\u8BC1\u8D39\u3001\u8D22\u4EA7\u4FDD\u5168\u8D39\u3001\u9274\u5B9A\u8D39\u3001\u6267\u884C\u8D39\u3001\u8BC4\u4F30\u8D39\u3001\u62CD\u5356\u8D39\u7B49\uFF09\u7531\u501F\u6B3E\u4EBA\u627F\u62C5\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u501F\u6B3E\u4EBA\u540C\u610F\u8D37\u6B3E\u4EBA\u6709\u6743\u5728\u8FDB\u884C\u50AC\u6536\u548C\u8FFD\u7D22\u503A\u52A1\u7B49\u5DE5\u4F5C\u65F6\uFF0C\u5C06\u501F\u6B3E\u4EBA\u7684\u8EAB\u4EFD\u4FE1\u606F\u3001\u8054\u7EDC\u4FE1\u606F\u53CA\u501F\u6B3E\u4EBA\u62D6\u6B20\u672C\u5408\u540C\u9879\u4E0B\u503A\u52A1\u7684\u76F8\u5173\u4FE1\u606F\u7B49\u63D0\u4F9B\u7ED9\u7B2C\u4E09\u65B9\uFF08\u5305\u62EC\u5F8B\u5E08\u4E8B\u52A1\u6240\u548C\u50AC\u6536\u673A\u6784\uFF09\uFF1B\u4E14\u8D37\u6B3E\u4EBA\u5C06\u7763\u4FC3\u8BE5\u7B49\u7B2C\u4E09\u65B9\u59A5\u5584\u4FDD\u7BA1\u3001\u4FDD\u5BC6\u548C\u8C28\u614E\u4F7F\u7528\u524D\u8FF0\u4FE1\u606F\uFF0C\u4E0D\u5F97\u7528\u4F5C\u59D4\u6258\u50AC\u6536\u548C\u8FFD\u7D22\u503A\u52A1\u4EE5\u5916\u7684\u5176\u4ED6\u7528\u9014\uFF0C\u4EE5\u53CA\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u8FDD\u6CD5\u7684\u65B9\u5F0F\u8FDB\u884C\u50AC\u6536\u548C\u8FFD\u7D22\u503A\u52A1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\uFF0813\uFF09\u91C7\u53D6\u6CD5\u5F8B\u3001\u6CD5\u89C4\u89C4\u5B9A\u7684\u5176\u4ED6\u6551\u6D4E\u63AA\u65BD\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "3.\u501F\u6B3E\u4EBA\u6B7B\u4EA1\u6216\u88AB\u5BA3\u544A\u6B7B\u4EA1\u3001\u5931\u8E2A\u6216\u88AB\u5BA3\u544A\u5931\u8E2A\u3001\u6210\u4E3A\u9650\u5236\u6C11\u4E8B\u884C\u4E3A\u80FD\u529B\u4EBA\u6216\u4E27\u5931\u6C11\u4E8B\u884C\u4E3A\u80FD\u529B\u7684\uFF0C\u5E94\u7531\u501F\u6B3E\u4EBA\u7684\u5408\u6CD5\u7EE7\u627F\u4EBA\u3001\u53D7\u9057\u8D60\u4EBA\u3001\u76D1\u62A4\u4EBA\u6216\u8D22\u4EA7\u4EE3\u7BA1\u4EBA\u5728\u501F\u6B3E\u4EBA\u8D22\u4EA7\u8303\u56F4\u5185\u7EE7\u7EED\u5C65\u884C\u5DF2\u501F\u6B3E\u9879\u7684\u8FD8\u6B3E\u4E49\u52A1\uFF0C\u82E5\u501F\u6B3E\u4EBA\u65E0\u7EE7\u627F\u4EBA\u3001\u53D7\u9057\u8D60\u4EBA\u3001\u76D1\u62A4\u4EBA\u6216\u8D22\u4EA7\u4EE3\u7BA1\u4EBA\uFF0C\u6216\u7EE7\u627F\u4EBA\u3001\u53D7\u9057\u8D60\u4EBA\u3001\u76D1\u62A4\u4EBA\u6216\u8D22\u4EA7\u4EE3\u7BA1\u4EBA\u62D2\u7EDD\u6216\u8005\u6020\u4E8E\u5C65\u884C\u501F\u6B3E\u5408\u540C\u7684\uFF0C \u501F\u6B3E\u4EBA\u6709\u6743\u505C\u6B62\u652F\u4ED8\u989D\u5EA6\u7533\u8BF7\u4EBA\u5C1A\u672A\u4F7F\u7528\u7684\u8D37\u6B3E\uFF0C\u5355\u65B9\u9762\u5BA3\u5E03\u5408\u540C\u9879\u4E0B\u8D37\u6B3E\u63D0\u524D\u5230\u671F\uFF0C\u5E76\u8981\u6C42\u7EE7\u627F\u4EBA\u3001\u53D7\u9057\u8D60\u4EBA\u3001\u76D1\u62A4\u4EBA\u6216\u8D22\u4EA7\u4EE3\u7BA1\u4EBA\u7ACB\u5373\u507F\u8FD8\u6240\u6709\u5230\u671F\u8D37\u6B3E\u672C\u91D1\u5E76\u7ED3\u6E05\u5229\u606F\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u7B2C\u4E94\u6761 \u4E89\u8BAE\u89E3\u51B3"
      ),
      _react2.default.createElement(
        "p",
        null,
        "1.\u672C\u5408\u540C\u7684\u8BA2\u7ACB\u3001\u6548\u529B\u3001\u89E3\u91CA\u3001\u5C65\u884C\u548C\u4E89\u8BAE\u7684\u89E3\u51B3\u5747\u53D7\u4E2D\u56FD\u6CD5\u5F8B\u7BA1\u8F96\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "2.\u672C\u5408\u540C\u9879\u4E0B\u53CA\u4E0E\u4E4B\u6709\u5173\u7684\u4E00\u5207\u4E89\u8BAE\uFF0C\u5E94\u9996\u5148\u534F\u5546\u89E3\u51B3\uFF1B\u534F\u5546\u4E0D\u6210\u7684\uFF0C\u5E94\u5C06\u4E89\u8BAE\u63D0\u4EA4\u81F3\u8D37\u6B3E\u4EBA\u4F4F\u6240\u5730\u6216\u501F\u6B3E\u4EBA\u4F4F\u6240\u5730\u6709\u7BA1\u8F96\u6743\u7684\u4EBA\u6C11\u6CD5\u9662\u7B49\u8BC9\u8BBC\u89E3\u51B3\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u7B2C\u516D\u6761 \u514D\u8D23\u6761\u6B3E"
      ),
      _react2.default.createElement(
        "p",
        null,
        "1.\u8D37\u6B3E\u53D1\u653E\u524D\uFF0C\u5982\u56E0\u56FD\u5BB6\u6709\u5173\u90E8\u95E8\u9881\u5E03\u7684\u6CD5\u5F8B\u3001\u6CD5\u89C4\u3001\u89C4\u7AE0\u3001\u89C4\u5B9A\u3001\u6307\u5F15\u3001\u901A\u77E5\uFF08\u5305\u62EC\u53E3\u5934\u901A\u77E5\uFF09\u3001\u653F\u7B56\u53CA\u5176\u4ED6\u89C4\u8303\u6027\u6587\u4EF6\u5BFC\u81F4\u8D37\u6B3E\u4EBA\u4E0D\u80FD\u53D1\u653E\u672C\u5408\u540C\u9879\u4E0B\u7684\u8D37\u6B3E\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u505C\u6B62\u53D1\u653E \u8D37\u6B3E\u6216\u89E3\u9664\u672C\u5408\u540C\uFF0C\u4E0D\u89C6\u4E3A\u8D37\u6B3E\u4EBA\u8FDD\u7EA6\uFF0C\u8D37\u6B3E\u4EBA\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "2.\u9274\u4E8E\u4E92\u8054\u7F51\u4E4B\u7279\u6B8A\u6027\u8D28\uFF0C\u82E5\u8D37\u6B3E\u4EBA\u8F6F\uFF08\u786C\uFF09\u4EF6\u7CFB\u7EDF\u51FA\u73B0\u4E0B\u5217\u4EFB\u4E00\u72B6\u51B5\u800C\u65E0\u6CD5\u6B63\u5E38\u8FD0\u4F5C\uFF0C\u81F4\u4F7F\u8D37\u6B3E\u4EBA\u7F51\u7EDC\u4E2D\u65AD\u6216\u65E0\u6CD5\u7EE7\u7EED\u5411\u501F\u6B3E\u4EBA\u63D0\u4F9B\u672C\u5408\u540C\u7EA6\u5B9A\u4E4B\u670D\u52A1\u7684\uFF0C\u8D37\u6B3E\u4EBA\u5747\u4E0D\u627F\u62C5\u4EFB\u4F55\u8FDD\u7EA6\u6216\u8D54\u507F\u8D23\u4EFB\uFF0C\u8BE5\u72B6\u51B5\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "(1)\u5728\u8D37\u6B3E\u4EBA\u7F51\u9875\u6216\u79FB\u52A8\u7EC8\u7AEF\u7EF4\u62A4\u6216\u5347\u7EA7\u671F\u95F4\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "(2)\u7535\u4FE1\u8BBE\u5907\u51FA\u73B0\u6545\u969C\u4E0D\u80FD\u8FDB\u884C\u6570\u636E\u4F20\u8F93\u7684\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "(3)\u56E0\u53F0\u98CE\u3001\u5730\u9707\u3001\u6D77\u5578\u3001\u6D2A\u6C34\u3001\u505C\u7535\u3001\u6218\u4E89\u3001\u6050\u6016\u88AD\u51FB\u7B49\u4E0D\u53EF\u6297\u529B\u4E4B\u56E0\u7D20\uFF0C\u9020\u6210\u8D37\u6B3E\u4EBA\u670D\u52A1\u8FD0\u884C\u7CFB\u7EDF\u969C\u788D\u4E0D\u80FD\u6267\u884C\u4E1A\u52A1\u7684\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "(4)\u7531\u4E8E\u9ED1\u5BA2\u653B\u51FB\u3001\u7535\u4FE1\u90E8\u95E8\u3001\u8FD8\u6B3E\u8D26\u6237\u5F00\u6237\u884C\u548C\u5176\u4ED6\u7B2C\u4E09\u65B9\u652F\u4ED8\u673A\u6784\u6709\u4FE1\u606F\u6280\u672F\u4F9D\u8D56\u7684\u76F8\u5173\u90E8\u95E8\u3001\u4F01\u4E8B\u4E1A\u5355\u4F4D\u6280\u672F\u8C03\u6574\u6216\u6545\u969C\u3001\u7F51\u7AD9\u5347\u7EA7\u3001\u94F6\u884C\u65B9\u9762\u7684\u95EE\u9898\u7B49\u539F\u56E0\u800C\u9020\u6210\u7684\u670D\u52A1\u4E2D\u65AD\u6216\u8005\u5EF6\u8FDF\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "(5)\u5176\u4ED6\u975E\u8D37\u6B3E\u4EBA\u539F\u56E0\u5BFC\u81F4\u7684\u6545\u969C\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "3.\u989D\u5EA6\u7533\u8BF7\u4EBA\u4FDD\u8BC1\uFF0C\u4E0D\u5411\u5176\u4ED6\u4EFB\u4F55\u4EBA\u6CC4\u9732\u5728\u6CE8\u518C\u65F6\u5411\u989D\u5EA6\u6388\u4E88\u4EBA\u63D0\u4EA4\u7684\u7535\u5B50\u90AE\u7BB1\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u53CA\u5B89\u5168\u95EE\u9898\u7B54\u6848\u7B49\u4FE1\u606F\uFF0C\u4E0A\u8FF0\u4FE1\u606F\u662F\u989D\u5EA6\u7533\u8BF7\u4EBA\u5728\u989D\u5EA6\u6388\u4E88\u4EBA\u5904\u7684\u552F\u4E00\u8EAB\u4EFD\u8BC6\u522B\u4FE1\u606F\u3002\u989D\u5EA6\u7533\u8BF7\u4EBA\u77E5\u6653\u5E94\u59A5\u5584\u4FDD\u7BA1\u7528\u6237\u540D\u3001\u5BC6\u7801\u53CA\u4E0E \u8D26\u6237\u6709\u5173\u7684\u4E00\u5207\u4FE1\u606F\u3002\u5982\u975E\u56E0\u989D\u5EA6\u6388\u4E88\u4EBA\u539F\u56E0\u9020\u6210\u989D\u5EA6\u7533\u8BF7\u4EBA\u8D26\u6237\u5BC6\u7801\u6216\u76F8\u5173\u4FE1\u606F\u6CC4\u9732\u7684\uFF0C\u7531\u6B64\u5BFC\u81F4\u7684\u989D\u5EA6\u7533\u8BF7\u4EBA\u635F\u5931\u9700\u7531\u989D\u5EA6\u7533\u8BF7\u4EBA\u81EA\u884C\u627F\u62C5\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "4.\u501F\u6B3E\u4EBA\u53D1\u8D77\u7533\u8BF7\u7684\u76F8\u5173\u501F\u94B1\u5E73\u53F0\u80FD\u591F\u5C55\u793A\u6216\u67E5\u8BE2\u501F\u6B3E\u8BB0\u5F55\u3001\u8FD8\u6B3E\u8BA1\u5212\u7684\uFF0C\u5373\u89C6\u4E3A\u8BE5\u7B49\u6587\u4EF6\u5DF2\u7ECF\u9001\u8FBE\u501F\u6B3E\u4EBA\u3002\u501F\u6B3E\u4EBA\u5BF9\u4EE5\u4E0A\u6587\u4EF6\u6709\u5F02\u8BAE\u7684\uFF0C\u5E94\u505C\u6B62\u4F7F\u7528\u672C\u5408\u540C\u9879\u4E0B\u8D37\u6B3E\u5E76\u53CA\u65F6\u4E3B\u52A8\u8054\u7CFB\u8D37\u6B3E \u4EBA\u8FDB\u884C\u8BF4\u660E\u3002\u82E5\u501F\u6B3E\u4EBA\u4F7F\u7528\u8D37\u6B3E\u4EBA\u53D1\u653E\u7684\u8D37\u6B3E\u7684\uFF0C\u89C6\u4E3A\u501F\u6B3E\u4EBA\u5BF9\u501F\u6B3E\u8BB0\u5F55\u3001\u8FD8\u6B3E\u8BA1\u5212\u7B49\u6CD5\u5F8B\u6587\u4EF6\u65E0\u5F02\u8BAE\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "5.\u501F\u6B3E\u4EBA\u901A\u8FC7\u8D37\u6B3E\u4EBA\u7684\u6D88\u8D39\u8D37\u6B3E\u670D\u52A1\u8D2D\u4E70\u5546\u6237\u63D0\u4F9B\u7684\u5546\u54C1\u65F6\uFF0C\u501F\u6B3E\u4EBA\u5BF9\u5546\u6237\u3001\u5546\u54C1\u53CA\u7269\u6D41\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u62C5\u4FDD\u6216\u4FDD\u8BC1\u3002\u6709\u5173\u5546\u54C1\u7684\u8D28\u91CF\u3001\u7269\u6D41\u914D\u9001\u3001\u9000\u6362\u8D27\u3001\u53D1\u7968\u5F00\u5177\u3001\u4EA7\u54C1\u8D23\u4EFB\u548C\u552E\u540E\u670D\u52A1 \u7B49\u6709\u76F8\u5173\u4E8B\u5B9C\u5747\u7531\u5546\u6237\u8D1F\u8D23\uFF0C\u8D37\u6B3E\u4EBA\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002\u82E5\u501F\u6B3E\u4EBA\u4E0E\u5546\u6237\u53CA\u7269\u6D41\u914D\u9001\u65B9\u53D1\u751F\u4E89\u8BAE\uFF0C\u7531\u501F\u6B3E\u4EBA\u4E0E\u5546\u6237\u53CA\u7269\u6D41\u914D\u9001\u65B9\u534F\u5546\u5904\u7406\uFF0C\u8D37\u6B3E\u4EBA\u53EF\u89C6\u60C5\u51B5\u534F\u52A9\u501F\u6B3E\u4EBA\u4E0E\u5546\u6237\u53CA\u7269\u6D41\u914D\u9001\u65B9 \u534F\u5546\uFF0C\u4F46\u8D37\u6B3E\u4EBA\u5BF9\u534F\u5546\u7ED3\u679C\u4E0D\u505A\u4EFB\u4F55\u4FDD\u8BC1\uFF0C\u4EA6\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002\u989D\u5EA6\u7533\u8BF7\u4EBA\u4E0D\u5F97\u4EE5\u4E0E\u5546\u6237\u6216\u7269\u6D41\u914D\u9001\u65B9\u5B58\u5728\u4EFB\u4F55\u4E89\u8BAE\u4E3A\u7531\u62D2\u7EDD\u5411\u989D\u5EA6\u6388\u4E88\u4EBA\u507F\u8FD8\u4EFB\u4F55\u6240\u6B20\u6B3E\u9879\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "6.\u501F\u6B3E\u4EBA\u901A\u8FC7\u8D37\u6B3E\u4EBA\u7684\u6D88\u8D39\u8D37\u6B3E\u670D\u52A1\u8D2D\u4E70\u5546\u6237\u63D0\u4F9B\u7684\u5546\u54C1\u65F6\uFF0C\u8D37\u6B3E\u4EBA\u53EF\u89C6\u60C5\u51B5\u63D0\u4F9B\u4EE3\u4E0B\u8BA2\u5355\u670D\u52A1\uFF0C\u5728\u6B64\u60C5\u5F62\u4E0B\uFF0C\u501F\u6B3E\u4EBA\u4E0E\u8D37\u6B3E\u4EBA\u53CC\u65B9\u4E3A\u59D4\u6258\u5173\u7CFB\uFF0C\u8D37\u6B3E\u4EBA\u4E0D\u5C31\u4EE3\u4E0B\u8BA2\u5355 \u670D\u52A1\u5411\u501F\u6B3E\u4EBA\u6536\u53D6\u59D4\u6258\u8D39\u7528\u3002\u501F\u6B3E\u4EBA\u5728\u6307\u793A\u8D37\u6B3E\u4EBA\u4EE3\u4E0B\u8BA2\u5355\u524D\u5E94\u672C\u7740\u201C\u4E86\u89E3\u5356\u5BB6\u201D\u7684\u539F\u5219\uFF0C\u5BF9\u5546\u6237\u7684\u8BDA\u4FE1\u60C5\u51B5\u3001\u5546\u54C1\u989C\u8272\u3001\u6B3E\u5F0F\u3001\u8D28\u91CF\u53CA\u4EF7\u683C\u3001\u5B58\u8D27\u60C5\u51B5\u3001\u5546\u54C1\u5305\u88C5\u3001\u53D1\u7968\u5F00\u5177\u3001 \u7269\u6D41\u914D\u9001\u670D\u52A1\u3001\u552E\u540E\u670D\u52A1\u653F\u7B56\u7B49\u505A\u5FC5\u8981\u7684\u4E86\u89E3\u5E76\u636E\u6B64\u5BA1\u614E\u9009\u62E9\u5546\u6237\u3002\u56E0\u5546\u6237\u7F3A\u8D27\u3001\u4EF7\u683C\u53D8\u5316\u7B49\u539F\u56E0\uFF0C\u8D37\u6B3E\u4EBA\u4E0D\u4FDD\u8BC1\u80FD\u6839\u636E\u501F\u6B3E\u4EBA\u7684\u59D4\u6258\u6210\u529F\u4E70\u5230\u8D27\u7269\uFF0C\u8D37\u6B3E\u4EBA\u5BF9\u6B64\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23 \u4EFB\uFF0C\u5728\u6B64\u60C5\u5F62\u4E0B\uFF0C\u8D37\u6B3E\u4EBA\u5C06\u65E0\u606F\u8FD4\u8FD8\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u9996\u4ED8\u6B3E\uFF08\u5982\u6709\uFF09\u3002\u6B64\u5916\uFF0C\u56E0\u501F\u6B3E\u4EBA\u59D4\u6258\u8D37\u6B3E\u4EBA\u4EE3\u4E0B\u8BA2\u5355\u7684\u65F6\u95F4\u4E0E\u8D37\u6B3E\u4EBA\u5B9E\u9645\u4E0B\u5355\u7684\u65F6\u95F4\u53EF\u80FD\u5B58\u5728\u95F4\u9694\uFF0C\u8D37\u6B3E\u4EBA\u5B9E\u9645\u4E0B\u5355\u65F6\u7684 \u5546\u54C1\u4EF7\u683C\uFF08\u542B\u90AE\u8D39\uFF09\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5C4A\u65F6\u8D37\u6B3E\u4EBA\u5C06\u5F81\u8BE2\u501F\u6B3E\u4EBA\u610F\u89C1\u6216\u5C06\u8BA2\u5355\u9000\u56DE\u81F3\u501F\u6B3E\u4EBA\uFF0C\u501F\u6B3E\u4EBA\u5BF9\u6B64\u6CA1\u6709\u5F02\u8BAE\u3002\u4F46\u82E5\u5546\u54C1\u4EF7\u683C\uFF08\u542B\u90AE\u8D39\uFF09\u4E0B\u6D6E\u7684\uFF0C\u8D37\u6B3E\u4EBA\u53EF\u76F4\u63A5\u4E0B\u5355\u800C\u65E0\u9700\u53E6\u884C \u83B7\u5F97\u501F\u6B3E\u4EBA\u6388\u6743\uFF0C\u501F\u6B3E\u4EBA\u5BF9\u6B64\u6CA1\u6709\u5F02\u8BAE\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u7B2C\u4E03\u6761 \u9644\u5219"
      ),
      _react2.default.createElement(
        "p",
        null,
        "1. \u672C\u5408\u540C\u53CA\u9644\u4EF6\u7684\u4EFB\u4F55\u6761\u6B3E\u6216\u5185\u5BB9\u88AB\u4F9D\u6CD5\u64A4\u9500\u6216\u88AB\u8BA4\u5B9A\u4E3A\u65E0\u6548\u65F6\uFF0C\u5176\u5B83\u6761\u6B3E\u548C\u5185\u5BB9\u7684\u6548\u529B\u4E0D\u53D7\u5F71\u54CD\uFF0C\u4ECD\u4E3A\u6709\u6548\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "2.\u5728\u8D37\u6B3E\u4EBA\u7684\u503A\u6743\u5C1A\u672A\u5F97\u5230\u5168\u90E8\u6E05\u507F\u524D\uFF0C\u501F\u6B3E\u4EBA\u51FA\u73B0\u903E\u671F\u7B49\u4EFB\u4F55\u8FDD\u7EA6\u884C\u4E3A\u65F6\uFF0C\u8D37\u6B3E\u4EBA\u5728\u4EFB\u4F55\u65F6\u95F4\u6240\u7ED9\u4E88\u7684\u5BBD\u5BB9\u3001\u5BBD\u9650\u6216\u5EF6\u7F13\u884C\u4F7F\u6743\u5229\uFF0C\u5747\u4E0D\u635F\u5BB3\u3001\u5F71\u54CD\u6216\u9650\u5236\u8D37\u6B3E\u4EBA\u5E94\u4EAB\u7684\u4E00\u5207\u6743\u5229\uFF0C\u4EA6\u4E0D\u80FD\u89E3\u91CA\u4E3A\u8D37\u6B3E\u4EBA \u5BF9\u4EFB\u4F55\u8FDD\u7EA6\u884C\u4E3A\u7684\u8BB8\u53EF\uFF0C\u66F4\u4E0D\u80FD\u89C6\u4E3A\u8D37\u6B3E\u4EBA\u653E\u5F03\u73B0\u5728\u6216\u5C06\u6765\u5BF9\u4E0A\u8FF0\u8FDD\u7EA6\u884C\u4E3A\u91C7\u53D6\u884C\u52A8\u7684\u6743\u5229\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "3.\u672A\u7ECF\u8D37\u6B3E\u4EBA\u4E66\u9762\u540C\u610F\uFF0C\u501F\u6B3E\u4EBA\u4E0D\u5F97\u5C06\u672C\u5408\u540C\u9879\u4E0B\u7684\u6743\u5229\u548C\u4E49\u52A1\u8F6C\u8BA9\u7ED9\u4EFB\u4F55\u7B2C\u4E09\u65B9\u3002\u8D37\u6B3E\u4EBA\u6709\u6743\u5C06\u5176\u5728\u672C\u5408\u540C\u9879\u4E0B\u7684\u6743\u5229\uFF08\u5305\u62EC\u8D37\u6B3E\u503A\u6743\u6536\u76CA\u6743\uFF09\u548C\u4E49\u52A1\u5168\u90E8\u6216\u90E8\u5206\u8F6C\u8BA9\u7ED9\u7B2C\u4E09\u65B9\uFF0C\u4E14\u8F6C\u8BA9 \u884C\u4E3A\u65E0\u987B\u5F81\u5F97\u501F\u6B3E\u4EBA\u7684\u540C\u610F\uFF0C\u8D37\u6B3E\u4EBA\u8F6C\u8BA9\u6743\u5229\u65F6\u82E5\u9700\u901A\u77E5\u501F\u6B3E\u4EBA\u7684\uFF0C\u901A\u77E5\u53EF\u4EE5\u4E66\u9762\u3001\u77ED\u4FE1\u3001\u90AE\u4EF6\u7B49\u5F62\u5F0F\u901A\u77E5\u6216\u5728\u8D37\u6B3E\u4EBA\u7F51\u7AD9\u6216\u79FB\u52A8\u7EC8\u7AEF\u6216\u5176\u4ED6\u516C\u5F00\u5A92\u4F53\u4E0A\u53D1\u5E03\u516C\u544A\u7B49\u5F62\u5F0F\u4F5C\u51FA\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u5408\u540C\u6743\u5229\u4E49\u52A1\u8F6C\u8BA9\u540E\uFF0C\u989D\u5EA6\u7533\u8BF7\u4EBA\u540C\u610F\u4E0E\u503A\u6743\u53D7\u8BA9\u4EBA\u4E4B\u95F4\u57FA\u4E8E\u672C\u5408\u540C\u6743\u5229\u4E49\u52A1\u8F6C\u8BA9\u53D1\u751F\u7684\u4E89\u8BAE\u9002\u7528\u672C\u5408\u540C\u7B2C\u4E94\u6761\u7684\u7EA6\u5B9A\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "4.\u989D\u5EA6\u6388\u4E88\u4EBA\u6709\u6743\u968F\u65F6\u5355\u65B9\u9762\u4FEE\u6539\u672C\u5408\u540C\u4E2D\u4E0E\u989D\u5EA6\u7533\u8BF7\u4EBA\u76F8\u5173\u7684\u6743\u5229\u4E49\u52A1\uFF0C\u4E00\u65E6\u5408\u540C\u6761\u6B3E\u53D8\u66F4\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA\u5C06\u5728\u989D\u5EA6\u6388\u4E88\u4EBA\u7F51\u7AD9\u6216\u79FB\u52A8\u7EC8\u7AEF\u8FDB\u884C\u516C\u793A\uFF0C\u9664\u6CD5\u5F8B\u6CD5\u89C4\u6216\u76D1\u7BA1\u89C4\u5B9A\u53E6\u6709\u5F3A\u5236\u6027\u89C4\u5B9A\u5916\uFF0C\u7ECF\u4FEE\u8BA2\u7684\u5185\u5BB9\u4E00\u7ECF\u516C\u793A\uFF0C\u7ACB\u5373\u751F\u6548\u3002\u82E5\u989D\u5EA6\u7533\u8BF7\u4EBA\u4E0D \u540C\u610F\u4FEE\u6539\u672C\u5408\u540C\uFF0C\u5219\u5E94\u5F53\u81EA\u8BE5\u7B49\u544A\u793A\u4E4B\u65E5\u8D77\u7ACB\u6B62\u4F7F\u7528\u672C\u670D\u52A1\u5E76\u5168\u989D\u8FD8\u6E05\u672C\u5408\u540C\u9879\u4E0B\u7684\u5E94\u4ED8\u6B3E\u9879\uFF1B\u5426\u5219\uFF0C\u89C6\u4E3A\u989D\u5EA6\u7533\u8BF7\u4EBA\u540C\u610F\u5E76\u63A5\u53D7\u4FEE\u6539\u540E\u7684\u5408\u540C\u53CA\u9644\u4EF6\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "5.\u65E0\u8BBA\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u8D37\u6B3E\u989D\u5EA6\u662F\u5426\u88AB\u6279\u51C6\u6216\u989D\u5EA6\u671F\u9650\u662F\u5426\u5DF2\u7EC8\u6B62\uFF0C\u989D\u5EA6\u7533\u8BF7\u4EBA\u540C\u610F\u989D\u5EA6\u6388\u4E88\u4EBA\u53EF\u4FDD\u7559\u989D\u5EA6\u7533\u8BF7\u4EBA\u7684\u4E2A\u4EBA\u76F8\u5173\u8D44\u6599\uFF0C\u989D\u5EA6\u6388\u4E88\u4EBA\u53EF\u4E0D\u4E88\u9000\u8FD8\uFF0C\u540C\u65F6\u627F\u8BFA\u5C65\u884C\u4FDD\u5BC6\u4E49\u52A1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "6.\u501F\u6B3E\u4EBA\u540C\u610F\u8D37\u6B3E\u4EBA\u5BF9\u4E0E\u501F\u6B3E\u4EBA\u6C9F\u901A\u7684\u7535\u8BDD\u3001\u8BED\u97F3\u3001\u6587\u5B57\u3001\u56FE\u50CF\u3001\u89C6\u9891\u7B49\u8FDB\u884C\u8BB0\u5F55\uFF0C\u5E76\u4E14\u501F\u6B3E\u4EBA\u540C\u610F\u5C06\u8BE5\u7B49\u6587\u5B57\u3001\u8BED\u97F3\u3001\u56FE\u50CF\u3001\u89C6\u9891\u6587\u4EF6\u7B49\u7528\u4E8E\u8D37\u6B3E\u4EBA\u8BA4\u4E3A\u5408\u9002\u4E14\u5FC5\u8981\u7684\u76EE \u7684\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5C06\u5176\u5728\u9488\u5BF9\u501F\u6B3E\u4EBA\u6216\u4EFB\u4F55\u5176\u4ED6\u4EBA\u7684\u4E89\u8BAE\u89E3\u51B3\uFF08\u5982\u8BC9\u8BBC\u3001\u4EF2\u88C1\u7B49\uFF09\u4E2D\u7528\u4F5C\u8BC1\u636E\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "7.\u9664\u975E\u6709\u786E\u5B9E\u4E14\u5145\u5206\u7684\u76F8\u53CD\u8BC1\u636E\uFF0C\u5426\u5219\u989D\u5EA6\u6388\u4E88\u4EBA\u7CFB\u7EDF\u5185\u90E8\u53CA\u989D\u5EA6\u6388\u4E88\u4EBA\u5408\u4F5C\u673A\u6784\u501F\u94B1\u5E73\u53F0\u751F\u6210\u7684\u8BB0\u8D26\u51ED\u8BC1\u3001\u8D37\u6B3E\u7533\u8BF7\u8BB0\u5F55\u3001\u8FD8\u6B3E\u8BA1\u5212\u7B49\u5747\u662F\u672C\u5408\u540C\u9879\u4E0B\u8D37\u6B3E\u53D1\u653E\u53CA\u672C\u606F\u8D39\u507F\u8FD8\u60C5\u51B5\u7684\u6709\u6548\u8BC1\u636E\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "8.\u672C\u5408\u540C\u9644\u4EF6\u662F\u672C\u5408\u540C\u4E0D\u53EF\u5206\u5272\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u4E0E\u672C\u5408\u540C\u6B63\u6587\u5177\u6709\u540C\u7B49\u7684\u6CD5\u5F8B\u6548\u529B\u3002\u672C\u5408\u540C\u7684\u9644\u4EF6\u5305\u62EC\uFF1A\u4E2A\u4EBA\u5F81\u4FE1\u6388\u6743\u4E66\u3001\u5355\u7B14\u501F\u6B3E\u5408\u540C\u3001\u8FD8\u6B3E\u8BA1\u5212\u8868\u3001\u8D37\u6B3E\u4EBA\u8D37\u6B3E\u8BB0\u5F55\u7B49\u501F\u6B3E\u51ED\u8BC1\u6240\u8F7D\u4FE1\u606F\u4E3A\u51C6\u3002"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "p",
        { style: { textAlign: "center", fontSize: '18px', fontWeight: "500" } },
        "\u4E2A\u4EBA\u5F81\u4FE1\u6388\u6743\u4E66"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u91CD\u8981\u63D0\u793A\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u4E3A\u4E86\u4FDD\u969C\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u60A8\u5E94\u5F53\u9605\u8BFB\u5E76\u9075\u5B88\u672C\u6388\u6743\u4E66\u3002\u8BF7\u60A8\u52A1\u5FC5\u5BA1\u614E\u9605\u8BFB\u3001\u5145\u5206\u7406\u89E3\u672C\u6388\u6743\u4E66\u6761\u6B3E\u5185\u5BB9\uFF0C\u7279\u522B\u662F\u514D\u9664\u6216\u8005\u51CF\u8F7B\u88AB\u6388\u6743\u4EBA\u8D23\u4EFB\uFF0C\u6216\u9650\u5236\u60A8\u6743\u5229\u7684\u6761\u6B3E\uFF0C\u76F8\u5173\u6761\u6B3E\u5C06\u4EE5\u52A0\u7C97\u5F62\u5F0F\u63D0\u793A\u60A8\u5145\u5206\u6CE8\u610F\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u672C\u6388\u6743\u4E66\u4F9D\u636E\u300A\u5F81\u4FE1\u4E1A\u7BA1\u7406\u6761\u4F8B\u300B\u7B49\u6CD5\u5F8B\u6CD5\u89C4\u7684\u76F8\u5173\u89C4\u5B9A\u62DF\u5B9A\uFF0C\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u662F\u4F9D\u636E\u300A\u5F81\u4FE1\u4E1A\u7BA1\u7406\u6761\u4F8B\u300B\u6210\u7ACB\u548C\u8FD0\u8425\u7684\u6301\u724C\u4E2A\u4EBA\u5F81\u4FE1\u673A\u6784\u3002\u9664\u975E\u60A8\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7\u672C\u6388\u6743\u4E66\u6240\u6709\u6761\u6B3E\uFF0C\u5426\u5219\u60A8\u65E0\u6743\u4F7F\u7528\u88AB\u6388\u6743\u4EBA\u670D\u52A1\u5E73\u53F0\u501F\u6B3E\u670D\u52A1\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u672C\u4EBA\u5411",
        _react2.default.createElement(
          "span",
          { style: { textDecoration: 'underline' } },
          "\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\u3001\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8"
        ),
        "\u4F5C\u4EE5\u4E0B\u4E0D\u53EF\u64A4\u9500\u7684\u6388\u6743\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u4E00\u3001\u672C\u4EBA\u540C\u610F",
        _react2.default.createElement(
          "span",
          { style: { textDecoration: 'underline', fontWeight: '400' } },
          "\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8"
        ),
        "\uFF08\u672C\u6587\u7B80\u79F0\u201C\u88AB\u6388\u6743\u4EBA\u201D\uFF09\u5728\u529E\u7406\u4EE5\u4E0B\u6D89\u53CA\u5230\u672C\u4EBA\u6216\u4E0E\u672C\u4EBA\u6709\u5173\u7684\u4E1A\u52A1\u65F6\uFF0C\u53EF\u6309\u7167\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\u901A\u8FC7\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u67E5\u8BE2\u3001\u4F7F\u7528\u672C\u4EBA\u4FE1\u606F\uFF1A"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u2610 \u5BA1\u6838\u672C\u4EBA\u6388\u4FE1\u53CA\u8D37\u6B3E\u7533\u8BF7\u7684\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u2610 \u5BA1\u6838\u672C\u4EBA\u4F5C\u4E3A\u62C5\u4FDD\u4EBA\u6216\u5171\u540C\u8FD8\u6B3E\u4EBA\u7684\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u2610 \u53D7\u7406\u6CD5\u4EBA\u3001\u5176\u4ED6\u7EC4\u7EC7\u6216\u81EA\u7136\u4EBA\u7684\u6388\u4FE1\u3001\u8D37\u6B3E\u7533\u8BF7\u53CA\u8D37\u540E\u98CE\u9669\u7BA1\u7406\u65F6\uFF0C\u9700\u8981\u67E5\u8BE2\u672C\u4EBA\u4F5C\u4E3A\u6CD5\u4EBA\u3001\u5176\u4ED6\u7EC4\u7EC7\u6216\u81EA\u7136\u4EBA\u7684\u6CD5\u5B9A\u4EE3\u8868\u4EBA\u3001\u51FA\u8D44\u4EBA\u6216\u5173\u8054\u65B9\u7684\u4FE1\u7528\u72B6\u51B5\u7684\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u2610 \u53D7\u7406\u672C\u4EBA\u62C5\u4EFB\u6CD5\u5B9A\u4EE3\u8868\u4EBA\u3001\u8D1F\u8D23\u4EBA\u6216\u51FA\u8D44\u4EBA\u7684\u6CD5\u4EBA\u3001\u5546\u6237\u6216\u5176\u4ED6\u7EC4\u7EC7\u7684\u7279\u7EA6\u5546\u6237\u5F00\u6237\u7533\u8BF7\uFF0C\u9700\u8981\u67E5\u8BE2\u672C\u4EBA\u4FE1\u7528\u72B6\u51B5\u7684\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u2610 \u5904\u7406\u8D37\u540E\u7BA1\u7406\u4E8B\u52A1\uFF08\u5305\u62EC\u8D37\u6B3E\u989D\u5EA6\u6388\u4E88\u540E\u5BF9\u989D\u5EA6\u7684\u7BA1\u7406\uFF09\uFF0C\u8FDB\u884C\u8D37\u540E\u98CE\u9669\u7BA1\u7406\uFF1B"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u2610 \u5904\u7406\u672C\u4EBA\u5F81\u4FE1\u5F02\u8BAE\u7684\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u672C\u6388\u6743\u4E66\u6240\u6307\u7684\u672C\u4EBA\u4FE1\u606F\u5305\u62EC\u672C\u4EBA\u57FA\u672C\u4FE1\u606F\u3001\u672C\u4EBA\u4FE1\u8D37\u4FE1\u606F\u4EE5\u53CA\u4E0E\u672C\u4EBA\u4FE1\u7528\u76F8\u5173\u7684\u5176\u4ED6\u4FE1\u606F\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\xA0\xA0\xA0\xA0\xA0\u4E8C\u3001\u4FE1\u606F\u67E5\u8BE2\u671F\u9650"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u672C\u6388\u6743\u4E66\u4E0B\u88AB\u6388\u6743\u4EBA\u5411\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u67E5\u8BE2\u672C\u4EBA\u4FE1\u606F\u7684\u671F\u9650",
        _react2.default.createElement(
          "span",
          { style: { fontWeight: '900' } },
          "\u81EA\u672C\u4EBA\u786E\u8BA4\u672C\u6388\u6743\u627F\u8BFA\u4E4B\u65E5\u8D77\u81F3\u672C\u4EBA\u5728\u88AB\u6388\u6743\u4EBA\u5904\u6240\u6709\u76F8\u5173\u4E1A\u52A1\u7EC8\u7ED3\u4E4B\u65E5\u6B62\u3002"
        )
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u5982\u4E0B\u60C5\u5F62\u89C6\u4E3A\u672C\u4EBA\u4E0E\u88AB\u6388\u6743\u4EBA\u7684\u4E1A\u52A1\u672A\u7EC8\u7ED3\uFF1A\u672C\u4EBA\u5728\u88AB\u6388\u6743\u4EBA\u5904\u6709\u4FE1\u8D37\u4F59\u989D\u6216\u6709\u6388\u4FE1\u989D\u5EA6\uFF1B\u672C\u4EBA\u63D0\u4F9B\u62C5\u4FDD\u7684\u6388\u4FE1\u4E1A\u52A1\u6709\u4FE1\u8D37\u4F59\u989D\u6216\u6709\u6388\u4FE1\u989D\u5EA6\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\xA0\xA0\xA0\xA0\xA0\u4E09\u3001\u672C\u4EBA\u540C\u610F\u88AB\u6388\u6743\u4EBA\u5411\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u62A5\u9001\u672C\u4EBA\u4FE1\u606F\uFF08\u542B\u5386\u53F2\u4FE1\u606F\u3001\u4E0D\u826F\u4FE1\u606F\u3001\u8D1F\u503A\u4FE1\u606F\u53CA\u507F\u503A\u5C65\u7EA6\u80FD\u529B\u5224\u65AD\u4FE1\u606F\u7B49\uFF09\u3002"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u56DB\u3001\u672C\u4EBA\u540C\u610F\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u53EF\u5411\u88AB\u6388\u6743\u4EBA\u548C\u6709\u5173\u90E8\u95E8\u3001\u5355\u4F4D\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u516C\u5B89\u3001\u53F8\u6CD5\u3001\u6559\u80B2\u3001\u5168\u56FD\u516C\u6C11\u8EAB\u4EFD\u8BC1\u53F7\u7801\u67E5\u8BE2\u670D\u52A1\u4E2D\u5FC3\u3001\u901A\u4FE1\u8FD0\u8425\u5546\u3001\u94F6\u8054\u3001\u793E\u4FDD\u3001 \u516C\u79EF\u91D1\u3001\u7A0E\u52A1\u3001\u6C11\u653F\u3001\u7269\u6D41\u3001\u7535\u5B50\u5546\u52A1\u5E73\u53F0\u3001\u4E92\u8054\u7F51\u5E73\u53F0\u3001\u884C\u4E1A \u534F\u4F1A\u7B49\u5408\u6CD5\u7559\u5B58\u672C\u4EBA\u4FE1\u606F\u7684\u7B2C\u4E09\u65B9\u673A\u6784\u7B49\uFF09\u91C7\u96C6\u3001\u67E5\u8BE2\u6216\u9A8C\u8BC1\u672C\u4EBA\u4FE1\u606F\uFF0C\u5E76\u53EF\u5C06\u91C7\u96C6\u6216\u67E5\u8BE2\u5230\u7684\u672C\u4EBA\u4FE1\u606F\u5728\u672C\u6388\u6743\u4E66\u7B2C\u4E00\u6761\u6240\u5217\u7684\u60C5\u5F62\u4E0B\u5411\u88AB\u6388\u6743\u4EBA\u63D0\u4F9B\u3002"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\u4E94\u3001\u6388\u6743\u4EBA\u58F0\u660E"
      ),
      _react2.default.createElement(
        "p",
        { style: { fontWeight: '900' } },
        "\u672C\u4EBA\u5DF2\u77E5\u6089\u5E76\u7406\u89E3\u672C\u6388\u6743\u4E66\u6240\u6709\u5185\u5BB9\uFF08\u7279\u522B\u662F\u52A0\u7C97\u5B57\u4F53\u5185\u5BB9\uFF09\u4EE5\u53CA\u7531\u6B64\u4EA7\u751F\u7684\u6CD5\u5F8B\u6548\u529B\uFF0C\u81EA\u613F\u4F5C\u51FA\u4E0A\u8FF0\u6388\u6743\u3002\u672C\u6388\u6743\u4E66\u662F\u672C\u4EBA\u771F\u5B9E\u7684\u610F\u601D\u8868\u793A\uFF0C\u672C\u4EBA\u540C\u610F\u627F\u62C5\u7531\u6B64\u5E26\u6765\u7684\u4E00\u5207\u6CD5\u5F8B\u540E\u679C\u3002"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null)
    )
  );
};

//宝付协议
var paymentProtocol = _react2.default.createElement(
  "div",
  { className: "paymentProtocol" },
  _react2.default.createElement(
    "div",
    { style: { fontSize: '18px', fontWeight: '800', textAlign: "center" } },
    "\u5B9D\u4ED8\u534F\u8BAE\u8BA4\u8BC1\u652F\u4ED8\u670D\u52A1\u534F\u8BAE"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u534F\u8BAE/\u8BA4\u8BC1\u652F\u4ED8\u670D\u52A1\u534F\u8BAE\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u534F\u8BAE\u201D\uFF09\u662F\u6307\u5B9D\u4ED8\u7F51\u7EDC\u79D1\u6280\uFF08\u4E0A\u6D77\uFF09\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u5B9D\u4ED8\u201D\uFF09\u5411\u7279\u7EA6\u5546\u6237\u53CA\u7279\u7EA6\u5546\u6237\u7684\u7528\u6237 (\u4EE5\u4E0B\u7B80\u79F0\u201C\u7528\u6237\u201D)\u63D0\u4F9B\u534F\u8BAE/\u8BA4\u8BC1\u652F\u4ED8\u670D\u52A1\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u670D\u52A1\u201D\uFF09\uFF0C\u5B8C\u6210\u7279\u7EA6\u5546\u6237\u4E0E\u7528\u6237\u4E4B\u95F4\u7684\u4EA4\u6613\u8D44\u91D1\u5212\u4ED8\u7B49\u76F8\u5173\u4E8B\u9879\u6240\u8BA2\u7ACB\u7684\u6709\u6548\u5408\u7EA6\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u7528\u6237\u901A\u8FC7\u7F51\u7EDC\u9875\u9762\u70B9\u51FB\u786E\u8BA4\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\u9009\u62E9\u63A5\u53D7\u672C\u534F\u8BAE\uFF0C\u5373\u8868\u793A\u7528\u6237\u540C\u610F\u63A5\u53D7\u672C\u534F\u8BAE\u7684\u5168\u90E8\u7EA6\u5B9A\u5185\u5BB9\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u5728\u63A5\u53D7\u672C\u534F\u8BAE\u4E4B\u524D\uFF0C\u8BF7\u7528\u6237\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\u7684\u5168\u90E8\u5185\u5BB9\uFF08\u7279\u522B\u662F\u4EE5\u7C97\u4F53\u4E0B\u5212\u7EBF\u6807\u6CE8\u7684\u5185\u5BB9\uFF09\u3002\u5982\u679C\u7528\u6237\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u7684\u4EFB\u610F\u5185\u5BB9\uFF0C\u6216\u8005\u65E0\u6CD5\u51C6\u786E\u7406\u89E3\u5B9D\u4ED8\u5BF9\u6761\u6B3E\u7684\u89E3\u91CA\uFF0C\u8BF7\u4E0D \u8981\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\uFF1B\u5982\u7528\u6237\u5BF9\u672C\u534F\u8BAE\u5185\u5BB9\u53CA\u9875\u9762\u63D0\u793A\u4FE1\u606F\u6709\u7591\u95EE\uFF0C\u7528\u6237\u53EF\u901A\u8FC7\u5B9D\u4ED8\u7684\u5BA2\u670D\u7535\u8BDD021-68811008\u8FDB\u884C\u54A8\u8BE2\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u4E3A\u7528\u6237\u89E3\u91CA\u548C\u8BF4\u660E\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u5B9D\u4ED8\u7684\u534F\u8BAE/\u8BA4\u8BC1\u652F\u4ED8\u670D\u52A1\uFF0C\u662F\u6307\u7528\u6237\u5728\u4E8B\u5148\u6216\u9996\u7B14\u4EA4\u6613\u65F6\uFF0C\u901A\u8FC7\u7279\u7EA6\u5546\u6237\u7684\u7ECF\u8425\u7F51\u7AD9\u3001\u624B\u673A\u5BA2\u6237\u7AEF\u6216\u76F8\u5173\u4F7F\u7528\u754C\u9762\u8FDB\u884C\u7528\u6237\u4FE1\u606F\u9A8C\u8BC1\uFF0C\u7528\u6237\u8F93\u5165\u7528\u6237\u76F8 \u5173\u8981\u7D20\u4FE1\u606F\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u59D3\u540D\u3001\u5361\u53F7\u3001\u8BC1\u4EF6\u53F7\u3001\u624B\u673A\u53F7\uFF09\u5E76\u7ECF\u7531\u5B9D\u4ED8\u5411\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u63D0\u4F9B\u7528\u6237\u7684\u76F8\u5173\u8981\u7D20\u4FE1\u606F\uFF0C\u7531\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u8FDB\u884C\u6301 \u5361\u4EBA\u4FE1\u606F\u7684\u9A8C\u8BC1\u53CA\u68C0\u67E5\uFF0C\u6821\u9A8C\u901A\u8FC7\u540E\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u786E\u8BA4\u662F\u7528\u6237\u672C\u4EBA\u7684\u771F\u5B9E\u610F\u613F\uFF0C\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u5EFA\u7ACB\u534F\u8BAE/\u8BA4\u8BC1\u652F\u4ED8\u534F\u8BAE \u53F7\u5E76\u8FD4\u56DE\u7ED9\u5B9D\u4ED8\uFF1B\u5728\u534F\u8BAE\u7B7E\u7EA6\u6210\u529F\u524D\u63D0\u4E0B\uFF0C\u7279\u7EA6\u5546\u6237\u6839\u636E\u534F\u8BAE/\u8BA4\u8BC1\u652F\u4ED8\u534F\u8BAE\u53F7\u5411\u5B9D\u4ED8\u53D1\u8D77\u652F\u4ED8\u8BF7\u6C42\uFF0C\u652F\u4ED8\u8BF7\u6C42\u7ECF\u7531 \u5B9D\u4ED8\u8F6C\u63A5\u81F3\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\uFF0C\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u6821\u9A8C\u901A\u8FC7\u540E\u6267\u884C\u652F\u4ED8\u6307\u4EE4\u5E76\u4ECE\u7528\u6237\u7684\u94F6\u884C\u8D26\u6237\u4E2D\u5B8C\u6210\u8D44\u91D1\u6263\u5212\uFF0C\u5212\u6263\u8D44\u91D1\u5C06\u5212\u6263\u81F3 \u5B9D\u4ED8\u7684ACS\u8D26\u6237\uFF0C\u5B9D\u4ED8\u5C06\u6839\u636E\u4E0E\u7279\u7EA6\u5546\u6237\u4E4B\u95F4\u7684\u534F\u8BAE\u8FDB\u884C\u8D44\u91D1\u7ED3\u7B97\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u7528\u6237\u5E94\u59A5\u5584\u4FDD\u7BA1\u5361\u3001\u5361\u53F7\u3001\u5BC6\u7801\u4EE5\u53CA\u7279\u7EA6\u5546\u6237\u7684\u6CE8\u518C\u8D26\u53F7\u3001\u5BC6\u7801\u3001\u6570\u5B57\u8BC1\u4E66\u3001\u9A8C\u8BC1\u7801\u3001\u652F\u4ED8\u76FE\uFF08\u5982\u6709\uFF09\u7B49\u6709\u5173\u7684\u4E00\u5207\u4FE1\u606F\u3002 \u5982\u7528\u6237\u9057\u5931\u94F6\u884C\u5361\u3001\u6CC4\u9732\u8D26\u6237\u5BC6\u7801\u6216\u76F8\u5173\u4FE1\u606F\u7684\uFF0C\u7528\u6237\u5E94\u53CA\u65F6\u901A\u77E5\u53D1\u5361\u884C\u53CA/\u6216\u7279\u7EA6\u5546\u6237\uFF0C\u4EE5\u51CF\u5C11\u53EF\u80FD\u53D1\u751F\u7684\u635F\u5931\u3002",
    _react2.default.createElement(
      "span",
      null,
      "\u56E0\u7528\u6237\u6216\u7528\u6237\u6388 \u6743\u4EBA\u6CC4\u9732\u5BC6\u7801\u3001\u6570\u5B57\u8BC1\u4E66\u3001\u9A8C\u8BC1\u7801\u3001\u4E22\u5931\u94F6\u884C\u5361\u6216\u652F\u4ED8\u76FE\u7B49\u6240\u81F4\u635F\u5931\u9700\u7531\u7528\u6237\u81EA\u884C\u627F\u62C5\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    _react2.default.createElement(
      "span",
      null,
      "\u7528\u6237\u77E5\u6653\u5E76\u540C\u610F\uFF1A"
    ),
    "\u4E3A\u4E86\u7528\u6237\u4F7F\u7528\u534F\u8BAE/\u8BA4\u8BC1\u652F\u4ED8\u670D\u52A1\u5B9E\u73B0\u4EA4\u6613\u76EE\u7684\uFF0C\u7528\u6237\u9700\u63D0\u4F9B\u5F00\u6237\u884C\u540D\u79F0\u3001\u94F6\u884C\u5361\u5361\u53F7\u3001\u94F6\u884C\u5361\u6709\u6548\u671F\u3001\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u53F7\u7801\u3001 \u94F6\u884C\u9884\u7559\u624B\u673A\u53F7\uFF0C\u5B9D\u4ED8\u4F1A\u5C06\u524D\u8FF0\u4FE1\u606F\u4E0E\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u8FDB\u884C\u9A8C\u8BC1\u5E76\u8BB0\u5F55\u7528\u6237\u7684\u4EA4\u6613\u4FE1\u606F\uFF1B\u5B9D\u4ED8\u4F1A\u5C06\u7528\u6237\u7684\u4FE1\u606F\u7528\u4E8E\uFF1A\uFF081\uFF09\u5B9E\u73B0\u534F\u8BAE/\u8BA4\u8BC1\u652F\u4ED8 \u670D\u52A1\u4E4B\u4EA4\u6613\u76EE\u7684\uFF1B\uFF082\uFF09\u7528\u6237\u672C\u4EBA\u53CA\u7279\u7EA6\u5546\u6237\u7684\u4EA4\u6613\u8BA2\u5355\u4FE1\u606F\u67E5\u8BE2\uFF1B\uFF083\uFF09\u8EAB\u4EFD\u9A8C\u8BC1\u3001\u5B89\u5168\u9632\u8303\u3001\u8BC8\u9A97\u76D1\u6D4B\u3001\u9884\u9632\u6216\u7981\u6B62\u975E\u6CD5\u6D3B\u52A8\u3001\u964D\u4F4E\u98CE\u9669\u3001 \u5B58\u6863\u548C\u5907\u4EFD\u7528\u9014\uFF1B\uFF084\uFF09\u6839\u636E\u6CD5\u5F8B\u6CD5\u89C4\u6216\u76D1\u7BA1\u8981\u6C42\u5411\u76F8\u5173\u90E8\u95E8\u8FDB\u884C\u62A5\u544A\uFF1B\uFF085\uFF09\u53D1\u751F\u4E89\u8BAE\u65F6\uFF0C\u5411\u4EA4\u6613\u53CC\u65B9\u6216\u5F8B\u5E08\u53CA\u53F8\u6CD5\u673A\u5173\u3001\u4EF2\u88C1\u673A\u6784\u63D0\u4F9B\u76F8\u5173 \u4EA4\u6613\u4FE1\u606F\uFF1B\uFF086\uFF09\u91C7\u53D6\u8131\u654F\u3001\u53BB\u6807\u8BC6\u5316\u7B49\u65B9\u5F0F\u5BF9\u4FE1\u606F\u8FDB\u884C\u7EFC\u5408\u7EDF\u8BA1\u3001\u5206\u6790\u52A0\u5DE5\uFF0C\u4EE5\u4FBF\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u52A0\u51C6\u786E\u3001\u4E2A\u6027\u3001\u6D41\u7545\u53CA\u4FBF\u6377\u7684\u670D\u52A1\uFF0C\u6216\u5E2E\u52A9\u5B9D\u4ED8 \u8BC4\u4F30\u3001\u6539\u5584\u6216\u8BBE\u8BA1\u670D\u52A1\u53CA\u8FD0\u8425\u6D3B\u52A8\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    _react2.default.createElement(
      "span",
      null,
      "\u7528\u6237\u8BA4\u53EF\u548C\u540C\u610F\uFF1A\u7528\u6237\u8BA4\u53EF\u5E76\u540C\u610F\u7279\u7EA6\u5546\u6237\u6839\u636E\u53CC\u65B9\u4EA4\u6613\u60C5\u51B5\u5411\u5B9D\u4ED8\u53D1\u9001\u652F\u4ED8\u8BF7\u6C42\uFF0C\u5E76\u7531\u5B9D\u4ED8\u8F6C\u63A5\u652F\u4ED8\u8BF7\u6C42\u81F3\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\uFF0C\u5F00\u6237\u94F6\u884C\u6839\u636E\u8F6C\u63A5 \u7684\u652F\u4ED8\u6307\u4EE4\u5B8C\u6210\u4EA4\u6613\u8D44\u91D1\u7684\u5212\u6263\u5E76\u7ECF\u7531\u5B9D\u4ED8\u7684ACS\u8D26\u6237\u7ED3\u7B97\u81F3\u7279\u7EA6\u5546\u6237\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    _react2.default.createElement(
      "span",
      null,
      "\u5B9D\u4ED8\u4EC5\u8F6C\u63A5\u7279\u7EA6\u5546\u6237\u7684\u652F\u4ED8\u6307\u4EE4\u81F3\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u5E76\u7531\u7528\u6237\u7684\u5F00\u6237\u94F6\u884C\u5B8C\u6210\u53CC\u65B9\u7684\u4EA4\u6613\u8D44\u91D1\u5212\u8F6C\uFF0C\u5E76\u4E0D\u4ECB\u5165\u7279\u7EA6\u5546\u6237\u4E0E\u7528\u6237\u4E4B\u95F4\u7684\u4EA4\u6613 \u73AF\u8282\uFF0C\u5982\u53CC\u65B9\u53D1\u751F\u4EA4\u6613\u7EA0\u7EB7\uFF0C\u5E94\u901A\u8FC7\u534F\u5546\u6216\u53F8\u6CD5\u9014\u5F84\u81EA\u884C\u89E3\u51B3\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    _react2.default.createElement(
      "span",
      null,
      "\u7528\u6237\u53EF\u901A\u8FC7\u5B9D\u4ED8\u7684\u5BA2\u670D\u7535\u8BDD\u6838\u5B9E\u4EA4\u6613\u7684\u76F8\u5173\u60C5\u51B5\uFF0C\u5982\u53D1\u73B0\u7279\u7EA6\u5546\u6237\u64C5\u81EA\u53D1\u9001\u65E0\u771F\u5B9E\u4EA4\u6613\u4F9D\u636E\u7684\u652F\u4ED8\u6307\u4EE4\u5E76\u5BFC\u81F4\u7528\u6237\u8D44\u91D1\u635F\u5931\uFF0C\u7528\u6237\u5E94\u7ACB\u5373\u5411 \u516C\u5B89\u673A\u5173\u62A5\u6848\uFF0C\u5E76\u7559\u5B58\u62A5\u6848\u7684\u76F8\u5173\u51ED\u8BC1\uFF0C\u5B9D\u4ED8\u5C06\u79EF\u6781\u914D\u5408\u516C\u5B89\u673A\u5173\u8FDB\u884C\u8C03\u67E5\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    _react2.default.createElement(
      "span",
      null,
      "\u7528\u6237\u540C\u610F\uFF0C"
    ),
    "\u672C\u534F\u8BAE\u9002\u7528\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5927\u9646\u5730\u533A\u6CD5\u5F8B\u3002\u56E0\u5B9D\u4ED8\u4E0E\u7528\u6237\u5C31\u672C\u534F\u8BAE\u7684\u7B7E\u8BA2\u3001\u5C65\u884C\u6216\u89E3\u91CA\u53D1\u751F\u4E89\u8BAE\uFF0C\u53CC\u65B9\u5E94\u52AA \u529B\u53CB\u597D\u534F\u5546\u89E3\u51B3\u3002",
    _react2.default.createElement(
      "span",
      null,
      "\u5982\u534F\u5546\u4E0D\u6210\uFF0C\u5B9D\u4ED8\u548C\u7528\u6237\u540C\u610F\u7531\u5B9D\u4ED8\u4F4F\u6240\u5730\u6CD5\u9662\u7BA1\u8F96\u5BA1\u7406\u53CC\u65B9\u7684\u7EA0\u7EB7\u6216\u4E89\u8BAE\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u672C\u534F\u8BAE\u5185\u5BB9\u5305\u62EC\u534F\u8BAE\u6B63\u6587\u53CA\u6240\u6709\u5B9D\u4ED8\u5DF2\u7ECF\u53D1\u5E03\u7684\u6216\u5C06\u6765\u53EF\u80FD\u53D1\u5E03\u7684\u5B9D\u4ED8\u670D\u52A1\u7684\u4F7F\u7528\u89C4\u5219\u3002\u6240\u6709\u89C4\u5219\u4E3A\u672C\u534F\u8BAE\u4E0D\u53EF\u5206\u5272\u7684\u4E00\u90E8\u5206\uFF0C\u4E0E\u534F\u8BAE\u6B63\u6587\u5177\u6709\u76F8\u540C"
  )
);

//农业银行
var agriculture = _react2.default.createElement(
  "div",
  { className: "agriculture" },
  _react2.default.createElement(
    "div",
    { style: { fontSize: '18px', fontWeight: '800', textAlign: "center" } },
    "\u5FEB\u6377\u652F\u4ED8\u6388\u6743\u6263\u6B3E\u4E09\u65B9\u534F\u8BAE"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u5C0A\u656C\u7684\u5BA2\u6237\uFF1A\u4E3A\u4E86\u7EF4\u62A4\u60A8\u7684\u6743\u76CA\uFF0C\u8BF7\u5728\u7B7E\u7F72\u672C\u534F\u8BAE\u524D\uFF0C\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\u5404\u6761\u6B3E\uFF08\u7279\u522B\u662F\u542B\u6709\u9ED1\u4F53\u5B57\u6807\u9898\u6216\u9ED1\u4F53\u5B57\u6587\u5B57\u7684\u6761\u6B3E\uFF09\uFF0C \u6CE8\u610F\u672C\u534F\u8BAE\u6D89\u53CA\u6570\u91CF\u548C\u8D28\u91CF\u3001\u4EF7\u683C\u6216\u8005\u8D39\u7528\u3001\u5C65\u884C\u671F\u9650\u548C\u65B9\u5F0F\u3001\u5B89\u5168\u6CE8\u610F\u4E8B\u9879\u548C\u98CE\u9669\u8B66\u793A\u3001\u552E\u540E\u670D\u52A1\u3001\u6C11\u4E8B\u8D23\u4EFB\u3001\u7BA1\u8F96\u7B49\u5185\u5BB9\u7684\u6761\u6B3E\u3002 \u8BF7\u5173\u6CE8\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u7684\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u4E86\u89E3\u81EA\u5DF1\u7684\u6743\u5229\u4E49\u52A1\uFF0C\u5408\u7406\u5BA1\u614E\u63D0\u4F9B\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u7EF4\u62A4\u81EA\u8EAB\u5408\u6CD5\u6743\u76CA\u3002\u5982\u60A8\u6709\u7591\u95EE\u6216\u4E0D\u660E\u4E4B\u5904\uFF0C \u8BF7\u54A8\u8BE2\u60A8\u7684\u5F8B\u5E08\u548C\u6709\u5173\u4E13\u4E1A\u4EBA\u58EB\u3002\u5982\u9700\u8FDB\u884C\u4E1A\u52A1\u54A8\u8BE2\u548C\u6295\u8BC9\uFF0C\u8BF7\u62E8\u6253\u519C\u4E1A\u94F6\u884C\u5BA2\u670D\u70ED\u7EBF\uFF1A95599\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content  weight" },
    "\u300A\u5FEB\u6377\u652F\u4ED8\u6388\u6743\u6263\u6B3E\u4E09\u65B9\u534F\u8BAE\u300B\u5DF2\u7ECF\u7531\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\uFF08\u5373\u4E3A\u7532\u65B9\uFF09\u548C\uFF08\u5546\u6237\u540D\u79F0\uFF09\uFF08\u5373\u4E3A\u4E59\u65B9\uFF09\u5171\u540C\u7B7E\u7F72\uFF0C\u60A8\uFF08\u5373\u4E3A\u4E19\u65B9\uFF09\u52FE\u9009\u201C\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F \u300A\u5FEB\u6377\u652F\u4ED8\u6388\u6743\u6263\u6B3E\u4E09\u65B9\u534F\u8BAE\u300B\u201D\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\uFF0C\u5373\u8868\u793A\u60A8\u5DF2\u5168\u90E8\u77E5\u6653\u5E76\u5145\u5206\u7406\u89E3\u672C\u534F\u8BAE\u5185\u5BB9\u548C\u542B\u4E49\uFF0C\u613F\u610F\u9075\u5B88\u672C\u534F\u8BAE\uFF0C\u4E09\u65B9\u610F\u601D\u8868\u793A\u4E00\u81F4\uFF0C \u672C\u534F\u8BAE\u751F\u6548\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E00\u6761  \u5FEB\u6377\u652F\u4ED8\u6388\u6743\u6263\u6B3E\u8BF4\u660E"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u4E19\u65B9\u4E3A\u5728\u4E59\u65B9\u6CE8\u518C\u3001\u5E76\u5728\u4E59\u65B9\u6216\u7532\u65B9\u5BA2\u6237\u7AEF\u6216\u7F51\u9875\u754C\u9762\u7533\u8BF7\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u7684\u5BA2\u6237\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2.\u4E19\u65B9\u4E3A\u5728\u7532\u65B9\u5F00\u7ACB\u94F6\u884C\u8D26\u6237\u7684\u5BA2\u6237\uFF0C\u4E19\u65B9\u9700\u6307\u5B9A\u5176\u5728\u7532\u65B9\u5DF2\u9884\u7559\u624B\u673A\u53F7\u7801\u7684\u94F6\u884C\u8D26\u6237\u4F5C\u4E3A\u6263\u6B3E\u8D26\u6237\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3.\u4E19\u65B9\u6309\u7167\u4E59\u65B9\u548C\u7532\u65B9\u63D0\u4F9B\u7684\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF0C\u5C06\u5176\u5728\u4E59\u65B9\u7684\u6CE8\u518C\u8D26\u6237\u548C\u5728\u7532\u65B9\u7684\u6263\u6B3E\u8D26\u6237\u8FDB\u884C\u7ED1\u5B9A\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "4.\u4E19\u65B9\u5411\u7532\u65B9\u3001\u4E59\u65B9\u505A\u51FA\u5982\u4E0B\u6388\u6743\uFF1A\u4E19\u65B9\u5728\u4E59\u65B9\u6216\u5176\u7279\u7EA6\u5546\u6237\u8D2D\u4E70\u5546\u54C1\u6216\u670D\u52A1\u65F6\u9009\u62E9\u5FEB\u6377\u652F\u4ED8\u7684\uFF0C\u4E19\u65B9\u5411\u4E59\u65B9\u63D0\u4EA4\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u540E\uFF0C \u6388\u6743\u7531\u4E59\u65B9\u5411\u7532\u65B9\u53D1\u8D77\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\uFF0C\u5E76\u6388\u6743\u7532\u65B9\u6839\u636E\u4E59\u65B9\u53D1\u9001\u7684\u6307\u4EE4\u5C06\u4E19\u65B9\u6263\u6B3E\u8D26\u6237\u4E0A\u7684\u8D44\u91D1\u5212\u8F6C\u81F3\u4E59\u65B9\u5728\u7532\u65B9\u5F00\u7ACB\u7684\u5907\u4ED8\u91D1\u8D26\u6237\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E8C\u6761\u3000\u6263\u6B3E\u9002\u7528\u8303\u56F4\u53CA\u652F\u4ED8\u9650\u989D"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    " \u4E09\u65B9\u7ECF\u534F\u5546\u4E00\u81F4\uFF0C\u501F\u8BB0\u5361\u5FEB\u6377\u652F\u4ED8\u5E94\u7528\u4E8E\u8D2D\u4E70\u5546\u54C1\u6216\u670D\u52A1\u7684\u5145\u503C\u4E1A\u52A1\u3001\u6D88\u8D39\u4E1A\u52A1\u3001\u7F34\u8D39\u4E1A\u52A1\u3001\u7406\u8D22\u4E1A\u52A1\u53CA\u8FD8\u6B3E\u7B49\u4E1A\u52A1\uFF0C\u4E0D\u5F97\u5E94\u7528\u4E8E\u8F6C\u8D26\u4E1A\u52A1\u3001 \u878D\u8D44\u4E1A\u52A1\u3001\u4FDD\u8BC1\u91D1\u4E1A\u52A1\u7B49\u3002\u8D37\u8BB0\u5361\u5FEB\u6377\u652F\u4ED8\u4EC5\u9650\u5E94\u7528\u4E8E\u8D2D\u4E70\u5546\u54C1\u6216\u670D\u52A1\u7684\u6D88\u8D39\u4E1A\u52A1\u3001\u7F34\u8D39\u4E1A\u52A1\uFF0C\u4E0D\u5F97\u5E94\u7528\u4E8E\u5145\u503C\u4E1A\u52A1\u3001\u8F6C\u8D26\u4E1A\u52A1\u3001\u878D\u8D44\u4E1A\u52A1\u3001\u7406\u8D22 \u4E1A\u52A1\u3001\u8FD8\u6B3E\u4E1A\u52A1\u53CA\u4FDD\u8BC1\u91D1\u4E1A\u52A1\u7B49\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u9ED8\u8BA4\u4EA4\u6613\u9650\u989D\u5982\u4E0B\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u221A\u25A1\u501F\u8BB0\u5361\u5FEB\u6377\u652F\u4ED8\uFF1A\u65E5\u5355\u7B14\u3001\u65E5\u7D2F\u8BA1\u9650\u989D\u5747\u4E3A\u4EBA\u6C11\u5E015000\u5143                      "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u221A\u25A1\u8D37\u8BB0\u5361\u5FEB\u6377\u652F\u4ED8\uFF1A\u65E5\u5355\u7B14\u9650\u989D\u4EBA\u6C11\u5E0120000\u5143\uFF0C\u65E5\u7D2F\u8BA1\u9650\u989D\u4EBA\u6C11\u5E0150000\u5143      "
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7532\u4E59\u53CC\u65B9\u6709\u6743\u6839\u636E\u6709\u5173\u6CD5\u5F8B\u6CD5\u89C4\u548C\u4E1A\u52A1\u7ECF\u8425\u9700\u8981\u8C03\u6574\u9ED8\u8BA4\u4EA4\u6613\u9650\u989D\uFF0C\u5E76\u7531\u4E59\u65B9\u5728\u5176\u7F51\u7AD9\u76F8\u5173\u9875\u9762\u8FDB\u884C\u516C\u793A\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u4E19\u65B9\u6709\u6743\u901A\u8FC7\u7532\u65B9\u67DC\u9762\u3001\u7F51\u4E0A\u94F6\u884C\u3001\u638C\u4E0A\u94F6\u884C\u7B49\u6E20\u9053\u5728\u4E0A\u8FF0\u9ED8\u8BA4\u4EA4\u6613\u9650\u989D\u8303\u56F4\u5185\u81EA\u4E3B\u4FEE\u6539\u4EA4\u6613\u9650\u989D\uFF0C\u4FEE\u6539\u540E\u4EA4\u6613\u9650\u989D\u4EE5\u4E19\u65B9\u8BBE\u7F6E\u4E3A\u51C6\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E09\u6761\u3000\u6263\u6B3E\u7684\u4EA4\u6613\u9A8C\u8BC1\u65B9\u5F0F"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u5355\u7B14\u91D1\u989D\u4E0D\u8D85\u8FC7200\u5143\u7684\u5C0F\u989D\u652F\u4ED8\u4E1A\u52A1\uFF0C\u7531\u4E59\u65B9\u4EE3\u66FF\u7532\u65B9\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1\u3002\u5355\u7B14\u91D1\u989D\u5728200\u5143\u4EE5\u4E0A\uFF08\u4E0D\u542B200\u5143\uFF09\u7684\u4EA4\u6613\uFF0C\u53CC\u65B9\u7EA6\u5B9A\u91C7\u7528\u4EE5\u4E0B\u65B9\u5F0F\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u7532\u65B9\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1\uFF08\u4E59\u65B9\u4E0D\u5C5E\u4E8E\u201CA\u201D\u7C7B\u652F\u4ED8\u673A\u6784\u65F6\uFF0C\u53EA\u53EF\u9009\u6B64\u9009\u9879\uFF09"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u25A1\u4E59\u65B9\u4EE3\u66FF\u7532\u65B9\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u4E59\u65B9\u4EE3\u66FF\u7532\u65B9\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1\u7684\uFF0C\u4E59\u65B9\u5E94\u5728\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1\u540E\u5411\u7532\u65B9\u53D1\u9001\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2.\u7532\u65B9\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1\u7684\u65B9\u5F0F\u4E3A\uFF1A\u4E59\u65B9\u53D1\u9001\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u65F6\uFF0C\u5C06\u4E19\u65B9\u8EAB\u4EFD\u4FE1\u606F\u548C\u7B7E\u7EA6\u4FE1\u606F\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u7B7E\u7EA6\u7F16\u53F7\u6216\u8D26\u6237\u6240\u6709\u4EBA\u7F16\u53F7\u3001\u8D26\u53F7\uFF09\u4F20\u9001\u7ED9\u7532\u65B9\uFF0C\u7532\u65B9\u6839\u636E\u4E0A\u8FF0\u8981\u7D20 \u5339\u914D\u662F\u5426\u4E3A\u4E19\u65B9\uFF0C\u5E76\u901A\u8FC7\u5411\u4E19\u65B9\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7B49\u65B9\u5F0F\uFF0C\u5B8C\u6210\u4EA4\u6613\u9A8C\u8BC1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3.\u4E59\u65B9\u4EE3\u66FF\u7532\u65B9\u8FDB\u884C\u4EA4\u6613\u9A8C\u8BC1\u7684\u65B9\u5F0F\u4E3A\uFF1A\u4E59\u65B9\u5C06\u91C7\u7528\u9759\u6001\u5BC6\u7801\u3001\u6570\u5B57\u8BC1\u4E66\u3001\u7535\u5B50\u7B7E\u540D\u3001\u4E00\u6B21\u6027\u5BC6\u7801\u6216\u91C7\u7528\u5BA2\u6237\u672C\u4EBA\u751F\u7406\u7279\u5F81\u7B49\u4F5C\u4E3A\u9A8C\u8BC1\u8981\u7D20\u3002\u4E59\u65B9\u5E94\u5F53\u91C7\u7528\u5B89 \u5168\u6709\u6548\u7684\u9A8C\u8BC1\u624B\u6BB5\u6838\u9A8C\u4E19\u65B9\u8EAB\u4EFD\u4FE1\u606F\u53CA\u4EA4\u6613\u4FE1\u606F\uFF0C\u5E76\u901A\u8FC7\u5B89\u5168\u7684\u4EA4\u6613\u6E20\u9053\u4E0E\u4E19\u65B9\u53CA\u7532\u65B9\u4F20\u9012\u6570\u636E\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u4E59\u65B9\u91C7\u7528\u6570\u5B57\u8BC1\u4E66\u3001\u7535\u5B50\u7B7E\u540D\u4F5C\u4E3A\u9A8C\u8BC1\u8981\u7D20\u7684\uFF0C\u6570\u5B57\u8BC1\u4E66\u53CA\u751F\u6210\u7535\u5B50\u7B7E\u540D\u7684\u8FC7\u7A0B\u5E94\u7B26\u5408\u300A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u7535\u5B50\u7B7E\u540D\u6CD5\u300B\u3001\u300A\u91D1\u878D\u7535\u5B50\u8BA4\u8BC1\u89C4\u8303\u300B\uFF08JR/T0118-2015\uFF09\u7B49\u6709\u5173\u89C4\u5B9A\uFF0C \u786E\u4FDD\u6570\u5B57\u8BC1\u4E66\u7684\u552F\u4E00\u6027\u3001\u5B8C\u6574\u6027\u53CA\u4EA4\u6613\u7684\u4E0D\u53EF\u62B5\u8D56\u6027\u3002\u4E59\u65B9\u91C7\u7528\u4E00\u6B21\u6027\u5BC6\u7801\u4F5C\u4E3A\u9A8C\u8BC1\u8981\u7D20\u7684\uFF0C\u5E94\u5F53\u9632\u8303\u4E00\u6B21\u6027\u5BC6\u7801\u83B7\u53D6\u7AEF\u4E0E\u7535\u5B50\u652F\u4ED8\u6307\u4EE4 \u53D1\u8D77\u7AEF\u4E3A\u76F8\u540C\u7269\u7406\u8BBE\u5907\u800C\u5E26\u6765\u7684\u98CE\u9669\uFF0C\u5E76\u5C06\u4E00\u6B21\u6027\u5BC6\u7801\u6709\u6548\u671F\u4E25\u683C\u9650\u5236\u5728\u6700\u77ED\u7684\u5FC5\u8981\u65F6\u95F4\u5185\u3002\u4E59\u65B9\u91C7\u7528\u5BA2\u6237\u672C\u4EBA\u751F\u7406\u7279\u5F81\u4F5C\u4E3A\u9A8C\u8BC1\u8981\u7D20\u7684\uFF0C\u5E94\u5F53 \u7B26\u5408\u56FD\u5BB6\u3001\u91D1\u878D\u884C\u4E1A\u6807\u51C6\u548C\u76F8\u5173\u4FE1\u606F\u5B89\u5168\u7BA1\u7406\u8981\u6C42\uFF0C\u9632\u6B62\u88AB\u975E\u6CD5\u5B58\u50A8\u3001\u590D\u5236\u6216\u91CD\u653E\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u56E0\u4EA4\u6613\u9A8C\u8BC1\u65B9\u5F0F\u3001\u9A8C\u8BC1\u6E20\u9053\u4E0D\u5B89\u5168\u7B49\u539F\u56E0\u7ED9\u7532\u65B9\u6216\u4E19\u65B9\u9020\u6210\u635F\u5931\u7684\uFF0C\u7531\u4E59\u65B9\u627F\u62C5\u8D54\u507F\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u56DB\u6761  \u7532\u65B9\u7684\u6743\u5229\u548C\u4E49\u52A1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u7532\u65B9\u6309\u7167\u4E59\u65B9\u53D1\u9001\u7684\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u5C06\u4E19\u65B9\u6263\u6B3E\u8D26\u6237\u4E0A\u7684\u8D44\u91D1\u6263\u5212\u81F3\u4E59\u65B9\u5728\u7532\u65B9\u5F00\u7ACB\u7684\u5907\u4ED8\u91D1\u8D26\u6237\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2.\u7532\u65B9\u5C0A\u91CD\u548C\u7EF4\u62A4\u4E19\u65B9\u4F5C\u4E3A\u6D88\u8D39\u8005\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u4E25\u683C\u6309\u7167\u6D88\u8D39\u8005\u6743\u76CA\u4FDD\u62A4\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u4FDD\u62A4\u4E19\u65B9\u5408\u6CD5\u6743\u76CA\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "3.\u7532\u65B9\u5BF9\u4EE5\u4E0B\u60C5\u5F62\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\uFF081\uFF09\u4E59\u65B9\u53D1\u9001\u7684\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u4FE1\u606F\u4E0D\u5B8C\u6574\u3001\u4E0D\u660E\u786E\u3001\u5B58\u5728\u4E71\u7801\u7B49\u5BFC\u81F4\u7532\u65B9\u65E0\u6CD5\u6267\u884C\u6307\u4EE4\u7684\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\uFF082\uFF09\u4E59\u65B9\u53D1\u9001\u9519\u8BEF\u7684\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\uFF0C\u7532\u65B9\u636E\u6B64\u6307\u4EE4\u6267\u884C\u540E\u53D1\u751F\u6263\u6B3E\u5DEE\u9519\u7684\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\uFF083\uFF09\u4E19\u65B9\u6263\u6B3E\u8D26\u6237\u7684\u5B58\u6B3E\u4F59\u989D\u4E0D\u8DB3\u6216\u72B6\u6001\u4E3A\u6302\u5931\u3001\u51BB\u7ED3\u3001\u9500\u6237\u7B49\u975E\u6B63\u5E38\u72B6\u6001\u5BFC\u81F4\u6263\u6B3E\u5931\u8D25\u7684\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\uFF084\uFF09\u4E59\u65B9\u672A\u80FD\u6309\u7167\u7532\u65B9\u64CD\u4F5C\u6D41\u7A0B\u6B63\u786E\u64CD\u4F5C\u9020\u6210\u635F\u5931\u7684\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\uFF085\uFF09\u5176\u4ED6\u4E0D\u53EF\u6297\u529B\u6216\u8005\u4E0D\u53EF\u5F52\u8D23\u4E8E\u7532\u65B9\u7684\u60C5\u5F62\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "4.\u4E59\u65B9\u4E0E\u4E19\u65B9\u4E4B\u95F4\u3001\u4E59\u65B9\u4E0E\u5176\u7279\u7EA6\u5546\u6237\u4E4B\u95F4\u6216\u4E59\u65B9\u7279\u7EA6\u5546\u6237\u4E0E\u4E19\u65B9\u4E4B\u95F4\u7684\u57FA\u7840\u4EA4\u6613\u4EA7\u751F\u7684\u7EA0\u7EB7\uFF0C \u7531\u4E59\u65B9\u4E0E\u5176\u7279\u7EA6\u5546\u6237\u5904\u7406\u5E76\u627F\u62C5\u76F8\u5E94\u8D23\u4EFB\uFF0C\u7532\u65B9\u4E0D\u4ECB\u5165\u4E0A\u8FF0\u7EA0\u7EB7\uFF0C\u4E0D\u627F\u62C5\u76F8\u5173\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "5.\u7532\u65B9\u53EF\u6839\u636E\u4E2D\u56FD\u4EBA\u6C11\u94F6\u884C\u6709\u5173\u8D26\u6237\u7BA1\u7406\u7684\u89C4\u5B9A\u7B49\u5916\u90E8\u76D1\u7BA1\u8981\u6C42\uFF0C\u91C7\u53D6\u4E2D\u6B62\u94F6\u884C\u8D26\u6237\u6240\u6709\u4E1A\u52A1\u3001\u6682\u505C\u94F6\u884C\u8D26\u6237\u975E\u67DC\u9762\u4E1A\u52A1\u3001\u964D\u4F4E\u9650\u989D\u7B49\u63AA\u65BD\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E94\u6761  \u4E59\u65B9\u7684\u6743\u5229\u548C\u4E49\u52A1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u4E59\u65B9\u5E94\u5F53\u5728\u7532\u65B9\u5F00\u7ACB\u5907\u4ED8\u91D1\u4E13\u7528\u5B58\u6B3E\u8D26\u6237\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2.\u4E59\u65B9\u5E94\u5F53\u91C7\u53D6\u6709\u6548\u63AA\u65BD\uFF0C\u786E\u4FDD\u4E19\u65B9\u5728\u6267\u884C\u652F\u4ED8\u6307\u4EE4\u524D\u53EF\u5BF9\u6536\u4ED8\u6B3E\u5BA2\u6237\u540D\u79F0\u548C\u8D26\u53F7\u3001\u4EA4\u6613\u91D1\u989D\u7B49\u4EA4\u6613\u4FE1\u606F\u8FDB\u884C\u786E\u8BA4\uFF0C\u5E76\u5728\u652F\u4ED8\u6307\u4EE4\u5B8C\u6210\u540E\u53CA\u65F6 \u5C06\u7ED3\u679C\u901A\u77E5\u4E19\u65B9\u3002\u56E0\u4EA4\u6613\u8D85\u65F6\u3001\u65E0\u54CD\u5E94\u6216\u8005\u7CFB\u7EDF\u6545\u969C\u5BFC\u81F4\u652F\u4ED8\u6307\u4EE4\u65E0\u6CD5\u6B63\u5E38\u5904\u7406\u7684\uFF0C\u4E59\u65B9\u5E94\u5F53\u53CA\u65F6\u63D0\u793A\u4E19\u65B9\uFF1B\u56E0\u4E19\u65B9\u539F\u56E0 \u9020\u6210\u652F\u4ED8\u6307\u4EE4\u672A\u6267\u884C\u3001\u672A\u9002\u5F53\u6267\u884C\u3001\u5EF6\u8FDF\u6267\u884C\u7684\uFF0C\u4E59\u65B9\u5E94\u5F53\u4E3B\u52A8\u901A\u77E5\u4E19\u65B9\u66F4\u6539\u6216\u8005\u534F\u52A9\u4E19\u65B9\u91C7\u53D6\u8865\u6551\u63AA\u65BD\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3.\u4E59\u65B9\u5E94\u786E\u4FDD\u5411\u7532\u65B9\u53D1\u9001\u7684\u4EA4\u6613\u4FE1\u606F\u548C\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u771F\u5B9E\u3001\u51C6\u786E\u3001\u5B8C\u6574\u3001\u6709\u6548\u3002",
    _react2.default.createElement(
      "span",
      { className: " weight" },
      "\u56E0\u4E59\u65B9\u53D1\u9001\u7684\u4EA4\u6613\u4FE1\u606F\u6216\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u4E0D\u771F\u5B9E\u3001\u4E0D\u51C6\u786E\u3001\u4E0D\u5B8C\u6574\u3001 \u65E0\u6548\u5BFC\u81F4\u652F\u4ED8\u9519\u8BEF\u3001\u5931\u8D25\u3001\u5EF6\u8FDF\u7684\uFF0C\u7531\u4E59\u65B9\u627F\u62C5\u8D23\u4EFB\uFF0C\u7ED9\u7532\u65B9\u6216\u4E19\u65B9\u9020\u6210\u635F\u5931\u7684\uFF0C\u4E59\u65B9\u8FD8\u5E94\u4E88\u4EE5\u8D54\u507F\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "4.\u4E59\u65B9\u4E0D\u5F97\u7BE1\u6539\u4E19\u65B9\u6307\u4EE4\uFF0C\u4E0D\u5F97\u5047\u5192\u4E19\u65B9\u6307\u4EE4\uFF0C\u4E5F\u4E0D\u5F97\u589E\u52A0\u6263\u6B3E\u91D1\u989D\uFF1B\u4E59\u65B9\u5982\u5B9E\u65BD\u4E0A\u8FF0\u884C\u4E3A\uFF0C\u81F4\u4F7F\u7532\u65B9\u63D0\u4F9B\u6263\u6B3E\u7B49\u652F\u4ED8\u7ED3\u7B97\u670D\u52A1\u88AB\u4E19\u65B9\u63D0\u51FA\u6743\u5229\u4E3B\u5F20\u7684\uFF0C\u7531\u4E59\u65B9 \u8D1F\u8D23\u5904\u7406\u5E76\u627F\u62C5\u5168\u90E8\u8D23\u4EFB\uFF0C\u7531\u6B64\u7ED9\u4E19\u65B9\u3001\u7532\u65B9\u9020\u6210\u7684\u635F\u5931\u7531\u4E59\u65B9\u8D1F\u8D23\u8D54\u507F\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "5.\u4E59\u65B9\u8D1F\u8D23\u5411\u4E19\u65B9\u63D0\u4F9B\u5546\u54C1\u6216\u8005\u670D\u52A1\u3001\u4E1A\u52A1\u67E5\u8BE2\u3001\u54A8\u8BE2\u3001\u6295\u8BC9\u3001\u6253\u5370\u53CA\u53D1\u9001\u53D1\u7968\u7B49\u7535\u5B50\u5546\u52A1\u670D\u52A1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "6.\u4E59\u65B9\u5E94\u5F53\u4FDD\u8BC1\u4EA4\u6613\u6570\u636E\u7684\u5B89\u5168\u6027\u3001\u4FDD\u5BC6\u6027\u3001\u5B8C\u6574\u6027\uFF0C\u5E76\u5E94\u5F53\u786E\u4FDD\u4EA4\u6613\u4FE1\u606F\u7684\u771F\u5B9E\u6027\u3001\u5B8C\u6574\u6027\u3001\u53EF\u8FFD\u6EAF\u6027\u4EE5\u53CA\u5728\u652F\u4ED8\u5168\u6D41\u7A0B\u4E2D\u7684\u4E00\u81F4\u6027\uFF0C\u4E0D\u5F97\u7BE1\u6539\u6216\u8005\u9690\u533F\u4EA4\u6613\u4FE1\u606F\u3002\u4E59\u65B9\u8D1F\u8D23 \u5904\u7406\u56E0\u5B89\u5168\u8BA4\u8BC1\u4E0D\u8DB3\u800C\u4EA7\u751F\u7684\u5DEE\u9519\u4EA4\u6613\u53CA\u98CE\u9669\u4EA4\u6613\uFF0C\u5E76\u627F\u62C5\u76F8\u5173\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "7.\u4E59\u65B9\u4E0D\u5F97\u5B58\u50A8\u4E19\u65B9\u94F6\u884C\u5361\u7684\u78C1\u9053\u4FE1\u606F\u6216\u82AF\u7247\u4FE1\u606F\u3001\u9A8C\u8BC1\u7801\u3001\u5BC6\u7801\u7B49\u654F\u611F\u4FE1\u606F\uFF0C\u539F\u5219\u4E0A\u4E0D\u5F97\u5B58\u50A8\u94F6\u884C\u5361\u6709\u6548\u671F\u3002\u56E0\u7279\u6B8A\u4E1A\u52A1\u9700\u8981\uFF0C\u786E\u9700\u5B58\u50A8\u4E19 \u65B9\u94F6\u884C\u5361\u6709\u6548\u671F\u7684\uFF0C\u5E94\u5728\u53D6\u5F97\u4E19\u65B9\u7684\u6388\u6743\u3001\u5E76\u7ECF\u7532\u65B9\u540C\u610F\u540E\uFF0C\u4EE5\u52A0\u5BC6\u5F62\u5F0F\u5B58\u50A8\u3002\u4E59\u65B9\u5E94\u5F53\u4EE5\u201C\u6700\u5C0F\u5316\u201D\u539F\u5219\u91C7\u96C6\u3001\u4F7F\u7528\u3001\u5B58\u50A8\u548C\u4F20\u8F93\u4E19\u65B9\u4FE1\u606F\uFF0C\u4E14\u5E94\u4E8B \u5148\u544A\u77E5\u4E19\u65B9\u76F8\u5173\u4FE1\u606F\u7684\u4F7F\u7528\u76EE\u7684\u548C\u8303\u56F4\u5E76\u53D6\u5F97\u4E19\u65B9\u540C\u610F\u3002\u4E59\u65B9\u4E0D\u5F97\u5411\u5176\u4ED6\u673A\u6784\u6216\u4E2A\u4EBA\u63D0\u4F9B\u4E19\u65B9\u4FE1\u606F\uFF0C\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\uFF0C\u4EE5\u53CA\u7ECF\u4E19\u65B9\u672C\u4EBA\u9010\u9879\u786E\u8BA4\u5E76\u6388\u6743\u7684\u9664\u5916\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "8.\u4E59\u65B9\u5E94\u901A\u8FC7\u534F\u8BAE\u7EA6\u5B9A\u7981\u6B62\u5176\u7279\u7EA6\u5546\u6237\u5B58\u50A8\u4E19\u65B9\u94F6\u884C\u5361\u7684\u78C1\u9053\u4FE1\u606F\u6216\u82AF\u7247\u4FE1\u606F\u3001\u9A8C\u8BC1\u7801\u3001\u6709\u6548\u671F\u3001\u5BC6\u7801\u7B49\u4E19\u65B9\u654F\u611F\u4FE1\u606F\uFF0C\u5E76\u91C7\u53D6\u5B9A\u671F\u68C0\u67E5\u3001\u6280\u672F\u76D1\u6D4B\u7B49\u5FC5\u8981\u76D1\u7763\u63AA\u65BD\u3002\u7279\u7EA6 \u5546\u6237\u8FDD\u53CD\u534F\u8BAE\u7EA6\u5B9A\u5B58\u50A8\u4E0A\u8FF0\u654F\u611F\u4FE1\u606F\u7684\uFF0C\u4E59\u65B9\u5E94\u5F53\u7ACB\u5373\u6682\u505C\u6216\u8005\u7EC8\u6B62\u4E3A\u5176\u63D0\u4F9B\u7F51\u7EDC\u652F\u4ED8\u670D\u52A1\uFF0C\u91C7\u53D6\u6709\u6548\u63AA\u65BD\u5220\u9664\u654F\u611F\u4FE1\u606F\u3001\u9632\u6B62\u4FE1\u606F\u6CC4\u9732\uFF0C\u5E76\u4F9D\u6CD5\u627F\u62C5 \u56E0\u76F8\u5173,div>\u4FE1\u606F\u6CC4\u9732\u9020\u6210\u7684\u635F\u5931\u548C\u8D23\u4EFB\uFF0C\u7ED9\u8D26\u6237\u6240\u6709\u4EBA\u6216\u7532\u65B9\u9020\u6210\u635F\u5931\u7684\uFF0C\u4E59\u65B9\u8FD8\u5E94\u4E88\u4EE5\u8D54\u507F\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "9.\u5982\u7532\u4E59\u53CC\u65B9\u5408\u4F5C\u5F00\u5C55\u8D37\u8BB0\u5361\u5FEB\u6377\u5206\u671F\u4E1A\u52A1\u7684\uFF0C\u4E59\u65B9\u5E94\u5728\u5176\u5408\u4F5C\u5546\u6237\u7684\u7F51\u7AD9\u4E0A\uFF0C\u660E\u786E\u544A\u77E5\u4E19\u65B9\u9700\u627F\u62C5\u7684\u5404\u671F\u624B\u7EED\u8D39\u8D39\u7387\u3002\u5408\u4F5C\u671F\u95F4\uFF0C\u7532\u65B9\u6709\u6743\u8C03\u6574\u5411\u4E19\u65B9\u6536\u53D6\u7684\u8D37\u8BB0\u5361\u5FEB\u6377\u5206\u671F\u624B\u7EED\u8D39\uFF0C \u5E76\u5C06\u63D0\u524D___\u4E2A\u5DE5\u4F5C\u65E5\uFF0C\u4EE5\u51FD\u4EF6\u5F62\u5F0F\u901A\u77E5\u4E59\u65B9\u3002\u4E59\u65B9\u5E94\u5728\u6536\u5230\u7532\u65B9\u51FD\u4EF6\u540E\uFF0C\u53CA\u65F6\u901A\u77E5\u5176\u5408\u4F5C\u5546\u6237\u5728\u7F51\u7AD9\u4E0A\u8C03\u6574\u4E19\u65B9\u5206\u671F\u624B\u7EED\u8D39\u8D39\u7387\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "10.\u4E59\u65B9\u5E94\u5F53\u5411\u4E19\u65B9\u5145\u5206\u63D0\u793A\u7F51\u7EDC\u652F\u4ED8\u4E1A\u52A1\u7684\u6F5C\u5728\u98CE\u9669\uFF0C\u53CA\u65F6\u63ED\u793A\u4E0D\u6CD5\u5206\u5B50\u65B0\u578B\u4F5C\u6848\u624B\u6BB5\uFF0C\u5BF9\u4E19\u65B9\u8FDB\u884C\u5FC5\u8981\u7684\u5B89\u5168\u6559\u80B2\uFF0C\u5E76\u5BF9\u9AD8\u98CE\u9669\u4E1A\u52A1\u5728\u64CD\u4F5C \u524D\u3001\u64CD\u4F5C\u4E2D\u8FDB\u884C\u98CE\u9669\u8B66\u793A\u3002\u4E59\u65B9\u4E3A\u4E19\u65B9\u8D2D\u4E70\u5408\u4F5C\u673A\u6784\u7684\u91D1\u878D\u7C7B\u4EA7\u54C1\u63D0\u4F9B\u7F51\u7EDC\u652F\u4ED8\u670D\u52A1\u7684\uFF0C\u5E94\u5F53\u786E\u4FDD\u5408\u4F5C\u673A\u6784\u4E3A\u53D6\u5F97\u76F8\u5E94\u7ECF\u8425\u8D44\u8D28\u5E76\u4F9D\u6CD5\u5F00\u5C55\u4E1A\u52A1\u7684 \u673A\u6784\uFF0C\u5BF9\u76F8\u5173\u91D1\u878D\u7C7B\u4EA7\u54C1\u7684\u5408\u6CD5\u5408\u89C4\u6027\u8FDB\u884C\u5C3D\u804C\u8C03\u67E5\uFF0C\u5E76\u5728\u9996\u6B21\u8D2D\u4E70\u65F6\u5411\u4E19\u65B9\u5C55\u793A\u5408\u4F5C\u673A\u6784\u4FE1\u606F\u548C\u4EA7\u54C1\u4FE1\u606F\uFF0C\u5145\u5206\u63D0\u793A\u76F8\u5173\u8D23\u4EFB\u3001\u6743\u5229\u3001\u4E49\u52A1\u53CA\u6F5C \u5728\u98CE\u9669\uFF0C\u534F\u52A9\u4E19\u65B9\u4E0E\u5408\u4F5C\u673A\u6784\u5B8C\u6210\u534F\u8BAE\u7B7E\u8BA2\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u516D\u6761  \u4E19\u65B9\u7684\u6743\u5229\u548C\u4E49\u52A1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u4E19\u65B9\u5E94\u5F53\u6309\u7167\u4E59\u65B9\u6216\u7532\u65B9\u5728\u5BA2\u6237\u7AEF\u6216\u7F51\u9875\u754C\u9762\u4E0A\u63D0\u4F9B\u7684\u6D41\u7A0B\u63D0\u793A\uFF0C\u6B63\u786E\u6307\u5B9A\u5728\u4E59\u65B9\u7684\u6CE8\u518C\u8D26\u6237\u548C\u5728\u7532\u65B9\u7684\u6263\u6B3E\u8D26\u6237\uFF0C\u5E76\u5C06\u6CE8\u518C\u8D26\u6237\u548C\u6263\u6B3E\u8D26\u6237\u8FDB\u884C\u7ED1\u5B9A\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "2.\u7532\u65B9\u6267\u884C\u4E59\u65B9\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u540E\uFF0C\u4E19\u65B9\u4E0D\u80FD\u8981\u6C42\u53D8\u66F4\u6216\u8005\u64A4\u9500\u7535\u5B50\u652F\u4ED8\u6307\u4EE4\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3.\u4E19\u65B9\u5E94\u5F53\u59A5\u5584\u4FDD\u7BA1\u672C\u4EBA\u5728\u4E59\u65B9\u7684\u6CE8\u518C\u8D26\u6237\u4FE1\u606F\u53CA\u76F8\u5173\u5BC6\u7801\uFF0C\u4E0D\u5F97\u5411\u4ED6\u4EBA\u900F\u9732\uFF0C",
    _react2.default.createElement(
      "span",
      { className: " weight" },
      "\u56E0\u4E19\u65B9\u5BF9\u6CE8\u518C\u8D26\u6237\u4FE1\u606F\u548C\u5BC6\u7801\u4FDD\u7BA1\u4E0D\u5584\u9020\u6210\u7684\u8D44\u91D1\u635F\u5931\uFF0C\u7532\u4E59\u53CC\u65B9\u4E0D\u627F\u62C5\u8D23\u4EFB\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "4.\u4E19\u65B9\u5E94\u59A5\u5584\u4FDD\u7BA1\u672C\u4EBA\u5728\u7532\u65B9\u7684\u94F6\u884C\u8D26\u6237\u5173\u952E\u4FE1\u606F\uFF08\u5BC6\u7801\u3001\u6709\u6548\u671F\u3001CVV2\u7801\u3001\u7ED1\u5B9A\u7684\u624B\u673A\u53F7\u7B49\uFF09\u3001\u7F51\u4E0A\u94F6\u884C\u6570\u5B57\u8BC1\u4E66\u53CA\u5176\u5BC6\u7801\u3001\u8EAB\u4EFD\u8BC1\u4EF6\u4FE1\u606F\uFF0C\u4E0D\u5F97\u6CC4\u9732\u4E0A\u8FF0\u4FE1\u606F\u3002\u56E0\u4E19\u65B9\u4FDD\u7BA1\u4E0D\u5584\u9020\u6210\u7684\u635F\u5931\uFF0C\u7532\u4E59\u53CC\u65B9\u4E0D\u627F\u62C5\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "5.\u4E19\u65B9\u77E5\u6089\u5E76\u540C\u610F\uFF0C\u5BF9\u4E8E\u4E59\u65B9\u4EA4\u6613\u7F51\u7AD9\u548C\u7532\u65B9\u7F51\u4E0A\u652F\u4ED8\u7CFB\u7EDF\u800C\u8A00\uFF0C\u4F7F\u7528\u4E19\u65B9\u62E5\u6709\u7684\u76F8\u5173\u8D26\u6237\u3001\u8BC1\u4E66\u548C\u5BC6\u7801\u5E76\u901A\u8FC7\u9A8C\u8BC1\u540E\u5373\u89C6\u4E3A\u4E19\u65B9\u884C\u4E3A\uFF0C\u884C\u4E3A\u540E\u679C\u7531\u4E19\u65B9\u627F\u62C5\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "6.\u4E19\u65B9\u77E5\u6089\u5E76\u540C\u610F\uFF0C\u529E\u7406\u8D37\u8BB0\u5361\u5206\u671F\u4E1A\u52A1\u9700\u540C\u65F6\u9075\u5B88\u519C\u4E1A\u94F6\u884C\u300A\u5546\u6237\u5206\u671F\u4ED8\u6B3E\u4E1A\u52A1\u6761\u6B3E\u53CA\u7EC6\u5219\u300B\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "7.\u7532\u4E59\u53CC\u65B9\u53EF\u57FA\u4E8E\u6267\u884C\u56FD\u5BB6\u6CD5\u5F8B\u6CD5\u89C4\u3001\u653F\u7B56\u3001\u5916\u90E8\u76D1\u7BA1\u89C4\u5B9A\u3001\u7EF4\u62A4\u5BA2\u6237\u6743\u76CA\u3001\u4FDD\u969C\u4EA4\u6613\u5B89\u5168\u3001\u8FDB\u884C\u7CFB\u7EDF\u5347\u7EA7\u3001\u63D0\u5347\u670D\u52A1\u8D28\u91CF\u7B49\u539F\u56E0\u53D8\u66F4\u672C\u534F\u8BAE\u3001\u6682\u505C\u6216\u7EC8\u6B62\u652F\u4ED8\u7ED3\u7B97\u4E1A\u52A1\u670D\u52A1\uFF0C\u5E76\u901A\u8FC7\u53CC\u65B9\u95E8\u6237\u7F51\u7AD9\u8FDB\u884C\u516C\u793A\u3002\u4E19\u65B9\u4E0D\u540C\u610F\u7684\uFF0C \u53EF\u4EE5\u5728\u5C65\u884C\u672C\u534F\u8BAE\u9879\u4E0B\u5E94\u5C3D\u4E49\u52A1\u540E\u7EC8\u6B62\u670D\u52A1\u3001\u89E3\u9664\u672C\u534F\u8BAE\uFF1B\u5404\u65B9\u534F\u5546\u4E00\u81F4\u7684\uFF0C\u4E5F\u53EF\u53D8\u66F4\u76F8\u5173\u670D\u52A1\u548C\u5BF9\u5E94\u534F\u8BAE\u5185\u5BB9\u3002\u672C\u534F\u8BAE\u4E2D\u201C\u6CD5\u5F8B\u6CD5\u89C4\u201D\u5305\u62EC\u6CD5\u5F8B\u3001\u884C \u653F\u6CD5\u89C4\u3001\u5730\u65B9\u6027\u6CD5\u89C4\u3001\u89C4\u7AE0\u3001\u53F8\u6CD5\u89E3\u91CA\u53CA\u5176\u4ED6\u5177\u6709\u6CD5\u5F8B\u6548\u529B\u7684\u89C4\u5B9A\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E03\u6761  \u5F02\u5E38\u8D26\u52A1\u5904\u7406"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u4E19\u65B9\u53D1\u73B0\u6263\u6B3E\u91D1\u989D\u4E0E\u5176\u4EA4\u6613\u91D1\u989D\u4E0D\u7B26\uFF0C\u6216\u8005\u4EA4\u6613\u975E\u672C\u4EBA\u6388\u6743\u6216\u53C2\u4E0E\u7B49\u5176\u4ED6\u98CE\u9669\u4E8B\u4EF6\u7684\uFF0C\u5E94\u5F53\u53CA\u65F6\u5411\u4E59\u65B9\u8FDB\u884C\u67E5\u8BE2\u6216\u8005\u6295\u8BC9\uFF0C\u5E76\u53EF\u5411\u516C\u5B89\u673A\u5173\u62A5\u6848\u3002\u4E59\u65B9\u53D7\u7406\u6295\u8BC9\u540E\uFF0C\u5C06\u548C\u7532\u65B9\u6838\u5BF9\u6263\u6B3E\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2.\u56E0\u4E59\u65B9\u5B89\u5168\u8BA4\u8BC1\u4E0D\u8DB3\u6216\u5176\u4ED6\u7B49\u539F\u56E0\u9020\u6210\u4E19\u65B9\u8D26\u6237\u6263\u6B3E\u5DEE\u9519\u7684\uFF0C\u7531\u4E59\u65B9\u8D1F\u8D23\u8865\u507F\u4E19\u65B9\u8D44\u91D1\u635F\u5931\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u516B\u6761  \u5BA2\u6237\u4FE1\u606F\u4FDD\u62A4"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "1.\u4E19\u65B9\u6388\u6743\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C\u53EF\u57FA\u4E8E\u4E1A\u52A1\u529E\u7406\u3001\u5C65\u884C\u5408\u540C\u53CA\u5F00\u5C55\u98CE\u9669\u7BA1\u7406\u7684\u9700\u8981\uFF0C\u81EA\u672C\u6388\u6743\u7B7E\u7F72\u4E4B\u65E5\u8D77\uFF0C\u6536\u96C6\u3001\u4F20\u8F93\u3001\u52A0\u5DE5\u3001\u4FDD\u5B58\u3001\u67E5\u8BE2\u548C\u4F7F\u7528\u4E19\u65B9\u4FE1\u606F\uFF08\u5305\u62EC\u8EAB\u4EFD\u4FE1\u606F\u3001\u8D22\u4EA7\u4FE1\u606F\u3001\u8D26\u6237\u4FE1\u606F\u3001\u4FE1\u7528\u4FE1\u606F\u3001\u4EA4\u6613\u4FE1\u606F\u3001\u884D\u751F\u4FE1\u606F\u53CA\u5728\u4E0E\u4E19\u65B9\u5EFA\u7ACB\u4E1A\u52A1\u5173\u7CFB\u8FC7\u7A0B\u4E2D\u83B7\u53D6\u3001\u4FDD\u5B58\u7684\u5176\u4ED6\u4FE1\u606F\uFF09\u3002\u5404\u65B9\u4E1A \u52A1\u5173\u7CFB\u7EC8\u6B62\u540E\uFF0C\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C\u5C06\u4E25\u683C\u4F9D\u7167\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\u548C\u4E0E\u4E19\u65B9\u7684\u7EA6\u5B9A\uFF0C\u4FDD\u5B58\u548C\u5904\u7406\u4E19\u65B9\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2.\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C\u627F\u8BFA\u5C06\u4E25\u683C\u9075\u5B88\u6CD5\u5F8B\u6CD5\u89C4\u89C4\u5B9A\uFF0C\u5728\u6536\u96C6\u3001\u4F7F\u7528\u4E19\u65B9\u4FE1\u606F\u65F6\uFF0C\u9075\u5FAA\u5408\u6CD5\u3001\u6B63\u5F53\u3001\u5FC5\u8981\u7684\u539F\u5219\uFF0C\u5E76\u5728\u4E19\u65B9\u6388\u6743\u7684\u8303\u56F4\u3001\u5185\u5BB9\u548C\u671F\u9650\u5185\u6536\u96C6\u3001\u4F20\u8F93\u3001\u52A0\u5DE5\u3001\u4FDD\u5B58\u3001\u67E5\u8BE2\u548C\u4F7F\u7528\u4E19\u65B9\u4FE1\u606F\u3002\u4E0D\u6CC4\u9732\u3001\u7BE1\u6539\u3001\u6BC1\u635F\u4E19\u65B9\u4FE1\u606F\uFF0C\u4E0D\u51FA\u552E\u6216\u8005\u975E\u6CD5\u5411\u4ED6\u4EBA\u63D0\u4F9B\u4E19\u65B9\u4FE1\u606F\uFF0C\u4E0D\u6536\u96C6\u3001\u67E5\u8BE2\u3001\u4F7F\u7528\u4E0E\u6240\u63D0\u4F9B\u670D\u52A1\u6216\u529E\u7406\u4E1A \u52A1\u65E0\u5173\u7684\u4E19\u65B9\u4FE1\u606F\uFF0C\u4E0D\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\u548C\u5404\u65B9\u7684\u7EA6\u5B9A\u6536\u96C6\u3001\u67E5\u8BE2\u3001\u4F7F\u7528\u4E19\u65B9\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3.\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C\u5C06\u4F9D\u6CD5\u627F\u62C5\u5BA2\u6237\u4FE1\u606F\u5B89\u5168\u4FDD\u62A4\u7684\u6CD5\u5F8B\u8D23\u4EFB\u3002\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\u53CA\u4E0E\u4E19\u65B9\u7684\u7EA6\u5B9A\uFF0C\u8D85\u51FA\u4E19\u65B9\u6388\u6743\u8303\u56F4\u6536\u96C6\u3001\u4F20\u8F93\u3001\u52A0\u5DE5\u3001\u4FDD\u5B58\u3001\u67E5\u8BE2\u548C\u4F7F\u7528\u4E19\u65B9\u4FE1\u606F\u7684\u6CD5\u5F8B\u8D23\u4EFB\u7531\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C\u627F\u62C5\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E5D\u6761  \u534F\u8BAE\u7EC8\u6B62"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u4E19\u65B9\u6709\u6743\u901A\u8FC7\u5728\u7EBF\u89E3\u9664\u6216\u5230\u7532\u65B9\u8425\u4E1A\u7F51\u70B9\u89E3\u9664\u672C\u534F\u8BAE\u3002\u4E19\u65B9\u89E3\u9664\u672C\u534F\u8BAE\u7684\uFF0C\u672C\u534F\u8BAE\u7EC8\u6B62\uFF0C\u4E19\u65B9\u4E0D\u518D\u6388\u6743\u7532\u4E59\u53CC\u65B9\u6839\u636E\u672C\u534F\u8BAE\u8FDB\u884C\u6263\u6B3E"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2.\u7532\u65B9\u548C\u4E59\u65B9\u89E3\u9664\u53CC\u65B9\u4E4B\u95F4\u7B7E\u8BA2\u7684\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u5408\u4F5C\u534F\u8BAE\u7684\uFF0C\u7532\u4E59\u53CC\u65B9\u4E1A\u52A1\u5408\u4F5C\u7EC8\u6B62\uFF0C\u672C\u534F\u8BAE\u81EA\u52A8\u7EC8\u6B62\uFF0C\u7532\u65B9\u548C\u4E59\u65B9\u5C06\u4E0D\u518D\u4E3A\u4E19\u65B9\u529E\u7406\u5FEB\u6377\u652F\u4ED8\u6388\u6743\u6263\u6B3E\u3002\u4E59\u65B9\u5E94\u5728\u5176\u7F51\u7AD9\u4E0A\u516C\u544A\u4E0A\u8FF0\u4E8B\u5B9C\u3002"
  )
);

//招商银行
var attractInvestment = _react2.default.createElement(
  "div",
  { className: "attractInvestment" },
  _react2.default.createElement(
    "div",
    { style: { fontSize: '18px', fontWeight: '800', textAlign: "center" } },
    "\u62DB\u5546\u94F6\u884C\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7EBF\u4E0A\u7528\u6237\u670D\u52A1\u534F\u8BAE"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u7279\u522B\u63D0\u793A\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u62DB\u5546\u94F6\u884C\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7EBF\u4E0A\u7528\u6237\u670D\u52A1\u534F\u8BAE\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u534F\u8BAE\u201D\uFF09\u662F\u62DB\u5546\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u6211\u884C\u201D\u6216\u201C\u62DB\u5546\u94F6\u884C\u201D\uFF09\u4E0E\u4E2A\u4EBA\u7528 \u6237\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u60A8\u201D\uFF09\u5C31\u62DB\u5546\u94F6\u884C\u5FEB\u6377\u652F\u4ED8\u670D\u52A1\u7684\u76F8\u5173\u4E8B\u5B9C\u8FBE\u6210\u7684\u534F\u8BAE\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2\u3001\u62DB\u5546\u94F6\u884C\u5FEB\u6377\u652F\u4ED8\u670D\u52A1\u662F\u62DB\u5546\u94F6\u884C\u4E0E\u5546\u6237\u5408\u4F5C\u63A8\u51FA\u7684\u652F\u4ED8\u4E1A\u52A1\uFF0C\u5373\u51ED\u501F\u60A8\u5728\u5546\u6237\u7AEF\u7684\u6CE8\u518C\u4FE1\u606F\u7ECF\u62DB\u5546\u94F6\u884C\u9A8C\u8BC1\u540E\uFF0C \u65E0\u9700\u62DB\u5546\u94F6\u884C\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u5BC6\u7801\u5373\u53EF\u5B8C\u6210\u7684\u652F\u4ED8\u4EA4\u6613\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3\u3001\u60A8\u901A\u8FC7\u70B9\u51FB\u786E\u8BA4\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\u9009\u62E9\u63A5\u53D7\u672C\u534F\u8BAE\uFF0C\u5373\u8868\u793A\u60A8\u77E5\u6089\u5E76\u540C\u610F\u63A5\u53D7\u672C\u534F\u8BAE\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u786E\u8BA4\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u4E00\u5207\u6CD5\u5F8B\u540E\u679C\u3002\u5728\u786E\u8BA4\u63A5\u53D7\u672C\u534F\u8BAE\u4E4B\u524D\uFF0C\u8BF7\u60A8\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\u7684\u5168\u90E8\u5185\u5BB9\u3002 \u5982\u679C\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u7684\u4EFB\u4F55\u5185\u5BB9\uFF0C\u6216\u8005\u65E0\u6CD5\u51C6\u786E\u7406\u89E3\u76F8\u5173\u6761\u6B3E\u7684\u89E3\u91CA\uFF0C\u8BF7\u4E0D\u8981\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E00\u6761 \u603B\u7AE0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u60A8\u7533\u8BF7\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u65F6\uFF0C\u9700\u5C06\u672C\u4EBA\u7684\u5546\u6237\u6CE8\u518C\u4FE1\u606F\u4E0E\u672C\u4EBA\u540D\u4E0B\u7684\u62DB\u5546\u94F6\u884C\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u5C06\u8BE5\u7ED1\u5B9A\u7684\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u4F5C\u4E3A\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u9879\u4E0B\u7684\u4ED8\u6B3E\u8D26\u6237\u3002\u6210\u529F\u5F00\u901A\u672C\u4E1A\u52A1\u540E\uFF0C \u60A8\u5728\u6307\u5B9A\u5546\u6237\u529E\u7406\u652F\u4ED8\u4E1A\u52A1\u65F6\u4E0D\u9700\u518D\u8DF3\u8F6C\u5230\u6211\u884C\u652F\u4ED8\u9875\u9762\uFF0C\u76F4\u63A5\u901A\u8FC7\u5546\u6237\u7CFB\u7EDF\u5411\u6211\u884C\u53D1\u8D77\u4EA4\u6613\u7533\u8BF7\uFF0C\u5B8C\u6210\u652F\u4ED8\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2\u3001\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u4E2D\uFF0C\u60A8\u6388\u6743\u7531\u5546\u6237\u6536\u96C6\u5E76\u5411\u6211\u884C\u63D0\u4F9B\u60A8\u5728\u7533\u8BF7\u672C\u4E1A\u52A1\u8FC7\u7A0B\u4E2D\u6240\u586B\u5199\u7684\u8981\u7D20\uFF0C\u6211\u884C\u5C06\u5BF9\u60A8\u5728\u94F6\u884C\u7AEF\u9884\u7559\u7684\u8981\u7D20\u4FE1\u606F\u8FDB\u884C\u6821\u5BF9\u6838\u9A8C\u901A\u8FC7\u9A8C\u8BC1\u540E\uFF0C\u4E3A\u60A8\u5728\u6211\u884C\u5F00\u7ACB\u7684\u5BF9\u5E94\u201C\u4E00\u5361\u901A\u201D\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u529F\u80FD\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3\u3001\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u4E2D\uFF0C\u60A8\u6388\u6743\u6307\u5B9A\u5546\u6237\u8D1F\u8D23\u60A8\u76F8\u5173\u4FE1\u606F\u7684\u6536\u96C6\u3001\u8BC6\u522B\u3001\u50A8\u5B58\u548C\u9A8C\u8BC1\u5904\u7406\u3002\u60A8\u6388\u6743\u6307\u5B9A\u5546\u6237\u5728\u4E00\u5B9A\u9650\u989D\u5185\u5C31\u6307\u5B9A\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u5411\u6211\u884C\u53D1\u51FA\u652F\u4ED8\u6263\u6B3E\u6307\u4EE4\uFF0C\u5E76\u6388\u6743\u6211\u884C\u6839\u636E\u8BE5\u5546\u6237\u7684\u4EA4\u6613\u652F\u4ED8\u6307\u4EE4\u76F4\u63A5\u6263\u5212\u60A8\u6307\u5B9A\u7684\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u8D44\u91D1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E8C\u6761 \u6211\u884C\u7684\u6743\u5229\u548C\u4E49\u52A1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u6211\u884C\u4E3A\u60A8\u63D0\u4F9B\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u7535\u5B50\u652F\u4ED8\u670D\u52A1\u3002\u60A8\u6388\u6743\u6211\u884C\u6309\u7167   (\u5546\u6237\u540D\u79F0)  \u5411\u6211\u884C\u63D0\u4EA4\u7684\u652F\u4ED8\u6263\u6B3E\u6307\u4EE4\u53CA\u652F\u4ED8\u6263\u6B3E\u6570\u636E\uFF0C\u76F4\u63A5\u4ECE\u60A8\u6307\u5B9A\u7684\u5FEB\u6377\u652F\u4ED8\u94F6\u884C\u8D26\u53F7\u4E2D\u6263\u7F34\u76F8\u5173\u8D39\u7528\u81F3\u8BE5\u5546\u6237\u6307\u5B9A\u7684\u94F6\u884C\u8D26\u6237\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2\u3001\u5728\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u4E2D\uFF0C\u6D88\u8D39\u4EA4\u6613\u65E0\u9700\u94F6\u884C\u5361\u5BC6\u7801\uFF0C\u60A8\u5411\u6307\u5B9A\u5546\u6237\u53D1\u51FA\u7684\u4EA4\u6613\u6307\u4EE4\u548C\u63D0\u4F9B\u7684\u9A8C\u8BC1\u4FE1\u606F\u4F5C\u4E3A\u60A8\u8FDB\u884C\u5FEB\u6377\u652F\u4ED8\u7B7E\u7EA6\u548C\u4EA4\u6613\u7684\u51ED\u636E\u3002\u60A8\u540C\u610F\u5E76\u6388\u6743\u8BE5\u5FEB\u6377\u652F\u4ED8\u4EA4\u6613\u7684\u6263\u6B3E\u6307\u4EE4\u7ECF\u7531\u5546\u6237\u5411\u6211\u884C\u63D0\u4EA4\u5E76\u4E88\u4EE5\u76F4\u63A5\u6263\u6B3E\u5904\u7406\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3\u3001\u6211\u884C\u63A5\u6536\u5230\u7684\u5546\u6237\u7535\u5B50\u6263\u6B3E\u6307\u4EE4\u4FE1\u606F\u4E0D\u660E\u786E\u3001\u4E0D\u5B8C\u6574\u3001\u4E0D\u6E05\u6670\u6216\u65E0\u6CD5\u8FA8\u8BA4\uFF0C\u5BFC\u81F4\u6211\u884C\u65E0\u6CD5\u6263\u6B3E\uFF0C\u6211\u884C\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF0C\u7531\u60A8\u4E0E\u5546\u6237\u534F\u5546\u89E3\u51B3\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "4\u3001\u6211\u884C\u6709\u6743\u6839\u636E\u4FDD\u969C\u5BA2\u6237\u8D44\u91D1\u4EA4\u6613\u5B89\u5168\u4EE5\u53CA\u6709\u6548\u63A7\u5236\u98CE\u9669\u7684\u539F\u5219\uFF0C\u4FEE\u6539\u6216\u8C03\u6574\u6307\u5B9A\u5546\u6237\u5FEB\u6377\u652F\u4ED8\u7684\u4EA4\u6613\u6B21\u6570\u4E0E\u4EA4\u6613\u91D1\u989D\u9650\u5236\u3001\u6682\u505C\u6216\u7EC8\u6B62\u5411\u7279\u5B9A\u7528\u6237\u63D0\u4F9B\u5FEB\u6377\u652F\u4ED8\u670D\u52A1\u3002\u56E0\u6B64\u5F71\u54CD\u60A8\u4E0E\u5546\u6237\u4EA4\u6613\u7684\uFF0C\u6211\u884C\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "5\u3001\u6211\u884C\u53EF\u6839\u636E\u4E1A\u52A1\u53D1\u5C55\u9700\u8981\uFF0C\u8BBE\u7F6E\u6216\u4FEE\u6539\u652F\u4ED8\u9650\u989D\u3002\u60A8\u5728\u4F7F\u7528\u672C\u670D\u52A1\u65F6\u540C\u65F6\u53D7\u6211\u884C\u548C  (\u5546\u6237\u540D\u79F0)  \u8BBE\u7F6E\u7684\u652F\u4ED8\u9650\u989D\u7684\u7EA6\u675F\u3002\u5982\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\u5927\u4E8E\u652F\u4ED8\u9650\u989D\uFF0C\u6211\u884C\u5C06\u62D2\u7EDD\u6267\u884C\u4EA4\u6613\u6307\u4EE4\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "6\u3001\u6211\u884C\u4E0D\u5BF9\u5546\u6237\u63D0\u4EA4\u7684\u6263\u6B3E\u4EA4\u6613\u6307\u4EE4\u8FDB\u884C\u5B9E\u8D28\u6027\u5BA1\u6838\uFF0C\u4E0D\u8D1F\u8D23\u5BA1\u6838\u5546\u6237\u63D0\u4EA4\u6263\u6B3E\u6307\u4EE4\u7684\u771F\u5B9E\u6027\u3001\u5408\u6CD5\u6027\u3001\u51C6\u786E\u6027\u3002\u60A8\u5982\u5BF9\u6211\u884C\u4F9D\u636E\u5546\u6237\u6307\u4EE4\u8FDB\u884C\u6263\u6B3E\u7684\u884C\u4E3A\u53D1\u751F\u4E89\u8BAE\uFF0C\u5E94\u4E0E\u5546\u6237\u534F\u5546\u89E3\u51B3\uFF0C\u6211\u884C\u4E0D\u627F\u62C5\u76F8\u5173\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E09\u6761 \u60A8\u7684\u6743\u5229\u548C\u4E49\u52A1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u5F00\u901A\u62DB\u5546\u94F6\u884C\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7684\u524D\u63D0\u4E3A\u60A8\u662F\u6211\u884C\u201C\u4E00\u5361\u901A\u201D\u7684\u5408\u6CD5\u6301\u5361\u4EBA\uFF0C\u5E76\u4E14\u662F\u80FD\u591F\u627F\u62C5\u76F8\u5E94\u6CD5\u5F8B\u8D23\u4EFB\u7684\u81EA\u7136\u4EBA\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2\u3001\u60A8\u5411\u6211\u884C\u627F\u8BFA\uFF1A\u60A8\u5DF2\u6388\u6743  (\u5546\u6237\u540D\u79F0)\u6536\u96C6\u672C\u4EBA\u76F8\u5173\u4FE1\u606F\u5E76\u63D0\u4F9B\u7ED9\u6211\u884C\uFF0C\u6388\u6743\u5176\u5411\u6211\u884C\u63D0\u4EA4\u652F\u4ED8\u6263\u6B3E\u6307\u4EE4\u53CA\u652F\u4ED8\u6263\u6B3E\u6570\u636E\uFF0C\u5E76\u4FDD\u8BC1\u901A\u8FC7  (\u5546\u6237\u540D\u79F0)  \u5411\u6211\u884C\u63D0\u4EA4\u7684\u652F\u4ED8 \u6263\u6B3E\u6307\u4EE4\u53CA\u652F\u4ED8\u6263\u6B3E\u6570\u636E\u5747\u4E3A\u60A8\u771F\u5B9E\u610F\u601D\u8868\u793A\uFF0C\u8BE5\u6307\u4EE4\u53CA\u6570\u636E\u771F\u5B9E\u3001\u5408\u6CD5\u3001\u6709\u6548\uFF0C\u60A8\u613F\u610F\u627F\u62C5\u76F8\u5E94\u6CD5\u5F8B\u540E\u679C\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3\u3001\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7531\u7528\u6237\u514D\u8D39\u5F00\u901A\u548C\u4F7F\u7528\uFF0C\u60A8\u65E0\u987B\u5C31\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u5411\u6211\u884C\u6216\u5408\u4F5C\u7684\u5546\u6237\u652F\u4ED8\u4EFB\u4F55\u8D39\u7528\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "4\u3001\u60A8\u7533\u8BF7\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u672C\u4EBA\u5728\u5546\u6237\u7684\u6CE8\u518C\u4FE1\u606F\u4E0E\u672C\u4EBA\u540D\u4E0B\u7684\u62DB\u5546\u94F6\u884C\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u8FDB\u884C\u7ED1\u5B9A\u3002\u82E5\u51FA\u73B0\u6709\u94F6\u884C\u5361\u4E0D\u662F\u60A8\u672C\u4EBA\u8FDB\u884C\u7ED1\u5B9A\u64CD\u4F5C\u884C\u4E3A\u7684\u60C5\u51B5\uFF0C\u56E0\u6B64\u9020\u6210\u635F\u5931\u6216\u5176\u4ED6\u6CD5\u5F8B\u540E\u679C\u7684\uFF0C\u6211\u884C\u5C06\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "5\u3001\u60A8\u7533\u8BF7\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u65F6\u9700\u8BBE\u7F6E\u5FEB\u6377\u652F\u4ED8\u4EA4\u6613\u5BC6\u7801\u3002\u5728\u6BCF\u6B21\u8FDB\u884C\u5FEB\u6377\u652F\u4ED8\u65F6\uFF0C\u60A8\u901A\u8FC7\u8F93\u5165\u652F\u4ED8\u4EA4\u6613\u5BC6\u7801\u548C\u5546\u6237\u7AEF\u53D1\u9001\u7684\u77ED\u4FE1\u9A8C\u8BC1\u7801\uFF0C\u6216\u60A8\u4E0E\u5546\u6237\u7EA6\u5B9A\u7684\u5176\u4ED6\u4EA4\u6613\u9A8C\u8BC1\u65B9\u5F0F\u53D1\u5E03\u6BCF\u7B14\u652F\u4ED8\u6307\u4EE4\u3002\u4E3A\u786E\u4FDD\u60A8\u94F6\u884C\u8D26\u6237\u5B89\u5168\uFF0C \u8BF7\u52FF\u5C06\u8BE5\u5BC6\u7801\u8BBE\u7F6E\u8FC7\u4E8E\u7B80\u5355\uFF08\u5982\u201C111111\u201D\u3001\u201C123456\u201D\u7B49\uFF09\u6216\u4E0E\u60A8\u4E2A\u4EBA\u4FE1\u606F\uFF08\u5982\u51FA\u751F\u65E5\u671F\u3001\u9884\u7559\u624B\u673A\u53F7\u7801\u3001\u8BC1\u4EF6\u53F7\u7801\u7B49\uFF09\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "6\u3001\u60A8\u5E94\u59A5\u5584\u4FDD\u7BA1\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u4EF6\u3001\u94F6\u884C\u8D26\u53F7\u3001\u94F6\u884C\u8D26\u53F7\u5BC6\u7801\u3001\u7F51\u4E0A\u94F6\u884C\u4EA4\u6613\u5BC6\u7801\u3001\u7F51\u4E0A\u94F6\u884C\u767B\u9646\u5BC6\u7801\u3001\u624B\u673A\u52A8\u6001\u9A8C\u8BC1\u7801\u3001\u5FEB\u6377\u652F\u4ED8\u4EA4\u6613\u5BC6\u7801\u7B49\u5B89\u5168\u8BA4\u8BC1\u5DE5\u5177\uFF0C\u4E0D\u5F97\u5C06\u4EE5\u4E0A\u4FE1\u606F\u5411\u4ED6\u4EBA\u900F\u9732\uFF0C\u5426\u5219\u7531\u6B64\u5BFC\u81F4\u7684\u635F\u5931\uFF0C\u6211\u884C\u4E0D\u627F\u62C5\u8D54\u507F\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "7\u3001\u60A8\u5E94\u4FDD\u8BC1\u4E1A\u52A1\u5F00\u901A\u65F6\u5728\u6211\u884C\u9884\u7559\u7684\u624B\u673A\u53F7\u4E3A\u672C\u4EBA\u624B\u673A\u53F7\u7801\uFF0C\u5426\u5219\u7531\u6B64\u5BFC\u81F4\u7684\u635F\u5931\uFF0C\u6211\u884C\u4E0D\u627F\u62C5\u8D54\u507F\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "8\u3001\u60A8\u5E94\u4FDD\u8BC1\u901A\u8FC7\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u53D1\u51FA\u7684\u4EA4\u6613\u53CA\u6263\u6B3E\u6307\u4EE4\u771F\u5B9E\u3001\u5408\u6CD5\u3001\u6709\u6548\u3002\u60A8\u4E0D\u5F97\u5229\u7528\u5FEB\u6377\u4E1A\u52A1\u8FDB\u884C\u5957\u73B0\u3001\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u7B49\u884C\u4E3A\uFF0C\u4E14\u6709\u4E49\u52A1\u914D\u5408\u6211\u884C\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\uFF0C\u4E00\u65E6\u60A8\u62D2\u7EDD\u914D\u5408\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\u6216\u6211\u884C\u8BA4\u4E3A\u60A8\u5B58\u5728\u6216\u6D89\u5ACC\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u3001\u5957\u73B0 \u6216\u4EFB\u4F55\u5176\u4ED6\u975E\u6CD5\u6D3B\u52A8\u3001\u6B3A\u8BC8\u6216\u8FDD\u53CD\u8BDA\u4FE1\u539F\u5219\u7684\u884C\u4E3A\u3001\u6216\u8FDD\u53CD\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\uFF0C\u6211\u884C\u6709\u6743\u91C7\u53D6\u4EE5\u4E0B\u4E00\u79CD\u3001\u591A\u79CD\u6216\u5168\u90E8\u63AA\u65BD\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\uFF081\uFF09\u6682\u505C\u6216\u7EC8\u6B62\u63D0\u4F9B\u672C\u534F\u8BAE\u9879\u4E0B\u5FEB\u6377\u670D\u52A1\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\uFF082\uFF09\u7EC8\u6B62\u672C\u534F\u8BAE\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\uFF083\uFF09\u53D6\u6D88\u60A8\u7684\u94F6\u884C\u5361\u4F7F\u7528\u8D44\u683C\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\uFF084\uFF09\u5176\u4ED6\u6211\u884C\u8BA4\u4E3A\u6709\u52A9\u4E8E\u98CE\u9669\u9632\u8303\u7684\u63AA\u65BD\uFF1B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "9\u3001\u60A8\u7ED1\u5B9A\u6211\u884C\u7684\u201C\u4E00\u5361\u901A\u201D\u8FDB\u884C\u5FEB\u6377\u652F\u4ED8\u64CD\u4F5C\u65F6\u5FC5\u987B\u9075\u5B88\u6211\u884C\u6709\u5173\u7AE0\u7A0B\u3001\u5F00\u6237\u987B\u77E5\u4EE5\u53CA\u76F8\u5E94\u4E1A\u52A1\u89C4\u5B9A\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u56DB\u6761 \u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u6CE8\u9500"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u60A8\u5982\u9700\u53D6\u6D88\u5FEB\u6377\u652F\u4ED8\u529F\u80FD\uFF0C\u53EF\u5411\u6211\u884C\u6216\u5546\u6237\u7AEF\u7533\u8BF7\u529E\u7406\u6CE8\u9500\u3002\u60A8\u5728\u6CE8\u9500\u8BE5\u4E1A\u52A1\u540E\uFF0C\u539F\u7ED1\u5B9A\u7684\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u4F9D\u7136\u6709\u6548\uFF0C \u9664\u5FEB\u6377\u652F\u4ED8\u529F\u80FD\u4EE5\u5916\u7684\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u4E1A\u52A1\u64CD\u4F5C\u4ECD\u7136\u53D7\u62DB\u5546\u94F6\u884C\u6709\u5173\u7AE0\u7A0B\u53CA\u4E1A\u52A1\u89C4\u5B9A\u7684\u7EA6\u675F\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2\u3001\u5728\u6211\u884C\u6E20\u9053\u6CE8\u9500\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u540E\uFF0C\u60A8\u53EF\u91CD\u65B0\u7ED1\u5B9A\u8BE5\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u8FDB\u884C\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3\u3001\u5982\u60A8\u7ED1\u5B9A\u7684\u201C\u4E00\u5361\u901A\u201D\u5361\u9057\u5931\uFF0C\u5E94\u7ACB\u5373\u901A\u77E5\u6211\u884C\u5E76\u6309\u7167\u6709\u5173\u6302\u5931\u7684\u89C4\u5B9A\u529E\u7406\u6302\u5931\uFF0C\u540C\u65F6\u8BF7\u6CE8\u9500\u5FEB\u6377\u652F\u4ED8\u534F\u8BAE\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "4\u3001\u60A8\u5BF9\u7ED1\u5B9A\u5FEB\u6377\u652F\u4ED8\u7684\u201C\u4E00\u5361\u901A\u201D\u8D26\u6237\u7533\u8BF7\u9500\u6237\u65F6\uFF0C\u8BE5\u8D26\u6237\u7684\u5FEB\u6377\u652F\u4ED8\u529F\u80FD\u4E5F\u88AB\u6CE8\u9500\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E94\u6761 \u4E89\u8BAE\u5904\u7406 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u5728\u672C\u534F\u8BAE\u4E0B\u6211\u884C\u4EC5\u5411\u60A8\u63D0\u4F9B\u652F\u4ED8\u7ED3\u7B97\u670D\u52A1\u3002\u60A8\u56E0\u8D2D\u4E70\u6216\u4F7F\u7528 (\u5546\u6237\u540D\u79F0)\u7684\u4EA7\u54C1\u6216\u670D\u52A1\u800C\u4EA7\u751F\u7684\u4E00\u5207\u5173\u4E8E\u4EA7\u54C1\u8D28\u91CF\u3001\u670D\u52A1\u8D28\u91CF\u53CA\u8D39\u7528\u6263\u6536\u7684\u4E89\u8BAE\uFF0C\u5747\u7531\u60A8\u4E0E\u8BE5\u5546\u6237\u81EA\u884C\u534F\u5546\u89E3\u51B3\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2\u3001\u6D89\u53CA\u4F1A\u5458\u4FE1\u606F\u4EE5\u53CA\u4EA4\u6613\u652F\u4ED8\u6307\u4EE4\u771F\u5B9E\u6027\u3001\u51C6\u786E\u6027\uFF0C\u4EE5\u53CA\u652F\u4ED8\u73AF\u8282\u4E2D\u9047\u5230\u7684\u4EFB\u4F55\u95EE\u9898\uFF0C\u7531\u60A8\u4E0E\u5546\u6237\u534F\u8C03\u89E3\u51B3\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3\u3001\u60A8\u627F\u8BFA\u5982\u5BF9\u6263\u6B3E\u9879\u76EE\u3001\u6263\u6B3E\u91D1\u989D\u7B49\u6709\u5F02\u8BAE\uFF0C\u7531\u60A8\u81EA\u884C\u4E0E\u5546\u6237\u534F\u5546\u5904\u7406\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "4\u3001\u5982\u60A8\u6388\u6743\u5546\u6237\u5411\u6211\u884C\u4F20\u9001\u9A8C\u8BC1\u8981\u7D20\u6709\u8BEF\uFF0C\u5BFC\u81F4\u6211\u884C\u4E0D\u80FD\u6309\u7EA6\u5B9A\u6263\u5212\u8D44\u91D1\u6216\u81F4\u4F7F\u60A8\u53CA\u5546\u6237\u53D1\u751F\u635F\u5931\u7684\uFF0C\u6211\u884C\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF0C\u7531\u60A8\u4E0E\u5546\u6237\u534F\u5546\u89E3\u51B3\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u516D\u6761 \u4E0D\u53EF\u6297\u529B "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u7531\u4E8E\u4E0D\u80FD\u9884\u89C1\u3001\u4E0D\u80FD\u514B\u670D\u3001\u4E0D\u80FD\u907F\u514D\u7B49\u4E0D\u53EF\u6297\u529B\u6216\u4E0D\u80FD\u63A7\u5236\u7B49\u5BA2\u89C2\u56E0\u7D20\u5BFC\u81F4\u901A\u8BAF\u6216\u7CFB\u7EDF\u4E2D\u65AD\uFF0C\u4EE5\u81F4\u5F71\u54CD\u201C\u5FEB\u6377\u652F\u4ED8\u201D\u7528\u6237\u6D88\u8D39\u7684\uFF0C\u6211\u884C\u4E0D\u627F\u62C5\u4EFB\u4F55\u6CD5\u5F8B\u8D23\u4EFB\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E03\u6761 \u7279\u522B\u7EA6\u5B9A\u6761\u6B3E "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1\u3001\u62DB\u5546\u94F6\u884C\u5BF9\u672C\u534F\u8BAE\u6709\u6743\u8FDB\u884C\u5FC5\u8981\u7684\u4FEE\u6539\uFF0C\u4FEE\u6539\u7684\u6761\u6B3E\u5BF9\u529E\u7406\u672C\u9879\u4E1A\u52A1\u7684\u6240\u6709\u201C\u5FEB\u6377\u652F\u4ED8\u201D\u7528\u6237\u5747\u6709\u7EA6\u675F\u529B\uFF1B\u5982\u60A8\u4E0D\u540C\u610F\u4FEE\u6539\u6761\u6B3E\uFF0C \u6709\u6743\u6CE8\u9500\u201C\u5FEB\u6377\u652F\u4ED8\u201D\u529F\u80FD\uFF1B\u5982\u60A8\u672A\u53CA\u65F6\u6CE8\u9500\u201C\u5FEB\u6377\u652F\u4ED8\u201D\u529F\u80FD\u7684\uFF0C\u89C6\u540C\u60A8\u8BA4\u53EF\u4FEE\u6539\u540E\u7684\u6761\u6B3E\u5BF9\u60A8\u7684\u7EA6\u675F\u529B\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "2\u3001\u672C\u534F\u8BAE\u9002\u7528\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u3002\u4E3A\u672C\u534F\u8BAE\u4E4B\u76EE\u7684\uFF0C\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u4E0D\u5305\u62EC\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A\u3001 \u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A\u53CA\u53F0\u6E7E\u5730\u533A\u6CD5\u5F8B\u3002\u672A\u5C3D\u4E8B\u5B9C\u9664\u5404\u65B9\u53E6\u6709\u7EA6\u5B9A\u5916\uFF0C\u4F9D\u636E\u62DB\u5546\u94F6\u884C\u4E1A\u52A1\u89C4\u5B9A\u6267\u884C\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3\u3001\u56E0\u5C65\u884C\u672C\u534F\u8BAE\u800C\u4EA7\u751F\u7684\u6216\u4E0E\u672C\u534F\u8BAE\u6709\u5173\u7684\u4EFB\u4F55\u4E89\u8BAE\uFF0C\u5E94\u534F\u5546\u89E3\u51B3\uFF1B\u534F\u5546\u4E0D\u6210\u7684\uFF0C\u4EFB\u4F55\u4E00\u65B9\u53EF\u5411\u62DB\u5546\u94F6\u884C\u4F4F\u6240\u5730\u4EBA\u6C11\u6CD5\u9662\u63D0\u8D77\u8BC9\u8BBC\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "4\u3001\u5982\u6211\u884C\u4E0E (\u5546\u6237\u540D\u79F0)  \u4E1A\u52A1\u5408\u4F5C\u7EC8\u6B62\u7684\uFF0C\u81EA\u7EC8\u6B62\u4E4B\u65E5\u8D77\u672C\u534F\u8BAE\u81EA\u52A8\u5931\u6548\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "5\u3001\u7528\u6237\u786E\u8BA4\uFF1A\u60A8\u786E\u8BA4\u5DF2\u4ED4\u7EC6\u9605\u8BFB\u4E86\u672C\u534F\u8BAE\uFF0C\u5BF9\u672C\u534F\u8BAE\u6761\u6B3E\u7684\u542B\u4E49\u53CA\u76F8\u5E94\u7684\u6CD5\u5F8B\u540E\u679C\u5DF2\u5168\u90E8\u77E5\u6653\u5E76\u5145\u5206\u7406\u89E3\uFF0C\u613F\u610F\u9075\u5B88\u5176\u5168\u90E8\u5185\u5BB9\uFF1B\u6211\u884C\u5DF2\u5E94\u8981\u6C42\u5BF9\u76F8\u5173\u6761\u6B3E\u8FDB\u884C\u4E86\u5145\u5206\u7684\u63D0\u793A\u548C\u8BF4\u660E\u3002"
  )
);

//工商银行
var IndustryAndCommerce = _react2.default.createElement(
  "div",
  { className: "IndustryAndCommerce" },
  _react2.default.createElement(
    "div",
    { style: { fontSize: '18px', fontWeight: '800', textAlign: "center" } },
    "\u4E2D\u56FD\u5DE5\u5546\u94F6\u884C\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u670D\u52A1\u534F\u8BAE"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u5728\u63A5\u53D7\u672C\u534F\u8BAE\u4E4B\u524D\uFF0C\u8BF7\u60A8\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\u7684\u5168\u90E8\u5185\u5BB9\uFF08\u7279\u522B\u662F\u4EE5\u7C97\u4F53\u6807\u6CE8\u7684\u5185\u5BB9\uFF09\u3002\u5982\u6709\u7591\u4E49\u8BF7\u53CA\u65F6\u901A\u8FC7\u5DE5\u5546\u94F6\u884C\u7F51\u7AD9\u6216\u62E8\u6253\u5BA2\u6237\u670D\u52A1\u70ED\u7EBF\uFF0895588\uFF09\u54A8\u8BE2\u3002\u5982\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u7684\u4EFB\u4F55\u5185\u5BB9\uFF0C\u6216\u8005\u4E0D\u80FD\u51C6\u786E\u7406\u89E3\u672C\u534F\u8BAE\u7684\u4EFB\u4F55\u6761\u6B3E\uFF0C\u8BF7\u4E0D\u8981\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u4E3A\u660E\u786E\u53CC\u65B9\u7684\u6743\u5229\u548C\u4E49\u52A1\uFF0C\u89C4\u8303\u53CC\u65B9\u4E1A\u52A1\u884C\u4E3A\uFF0C\u7532\u65B9\uFF08\u4E2A\u4EBA\u5BA2\u6237\uFF09\u3001\u4E59\u65B9\uFF08\u4E2D\u56FD\u5DE5\u5546\u94F6\u884C\uFF09\u672C\u7740\u5E73\u7B49\u4E92\u5229\u7684\u539F\u5219\uFF0C\u5C31\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u76F8\u5173\u4E8B\u5B9C\u8FBE\u6210\u672C\u534F\u8BAE\u3002\u7532\u65B9\u901A\u8FC7\u4E92\u8054\u7F51\uFF08Internet\uFF09\u70B9\u51FB\u786E\u8BA4\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\u9009\u62E9\u63A5\u53D7\u672C\u534F\u8BAE\uFF0C \u5373\u8868\u793A\u7532\u65B9\u540C\u610F\u63A5\u53D7\u672C\u534F\u8BAE\u7684\u5168\u90E8\u7EA6\u5B9A\u5185\u5BB9\uFF0C\u786E\u8BA4\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u4E00\u5207\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E00\u6761 \u4E1A\u52A1\u5B9A\u4E49\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u4E0B\u5217\u7528\u8BED\u5728\u672C\u534F\u8BAE\u4E2D\u7684\u542B\u4E49\u4E3A\uFF1A\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u201C\u5FEB\u6377\u652F\u4ED8\u201D\u662F\u6307\u4E59\u65B9\u4E0E \uFF08\u5546\u6237\u540D\u79F0\uFF09     \u516C\u53F8\u5411\u7532\u65B9\u63D0\u4F9B\u7684\uFF0C\u5C06\u7532\u65B9\u94F6\u884C\u5361\u4E0E\u652F\u4ED8\u8D26\u6237\u7B7E\u7EA6\u7ED1\u5B9A\u540E\uFF0C\u4E59\u65B9\u5373\u53EF\u6839\u636E \uFF08\u5546\u6237\u540D\u79F0\uFF09  \u53D1\u9001\u7684\u6307\u4EE4\uFF0C\u6263\u5212\u7532\u65B9\u94F6\u884C\u5361\u8D26\u6237\u8D44\u91D1\u7684\u652F\u4ED8\u670D\u52A1\u4E1A\u52A1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\"\u5FEB\u6377\u652F\u4ED8\"\u7684\u7B7E\u7EA6\u548C\u4F7F\u7528\u6E20\u9053\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u8BA1\u7B97\u673A\u3001\u624B\u673A\u3001\u7535\u8BDD\u3001\u638C\u4E0A\u7535\u8111\u3001\u7535\u89C6\u3001\u81EA\u52A9\u7EC8\u7AEF\u7B49\u8BBE\u5907\uFF0C\u5177\u4F53\u4EE5\u4E59\u65B9\u53CA \uFF08\u5546\u6237\u540D\u79F0\uFF09     \u63D0\u4F9B\u7684\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u4E3A\u51C6\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\"\u624B\u673A\u53F7\u7801\"\u6307\u7532\u65B9\u5728\u4E59\u65B9\u5F00\u7ACB\u94F6\u884C\u8D26\u6237\u65F6\u9884\u7559\u4FE1\u606F\u4E2D\u7684\u624B\u673A\u53F7\u7801\u6216\u8005\u7532\u65B9\u5728\u4E59\u65B9\u8BA4\u53EF\u7684\u7B2C\u4E09\u65B9\u673A\u6784\uFF08\u4F8B\u5982\u7535\u4FE1\u8FD0\u8425\u5546\u7B49\uFF09\u529E\u7406\u7684\u672C\u4EBA\u624B\u673A\u53F7\u7801\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E8C\u6761 \u6743\u5229\u548C\u4E49\u52A1\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u4E00\u3001\u7532\u65B9\u5E94\u786E\u4FDD\u7528\u4E8E\"\u5FEB\u6377\u652F\u4ED8\"\u7B7E\u7EA6\u7684\u94F6\u884C\u5361\u4E3A\u672C\u4EBA\u6240\u6709\uFF0C\u4FDD\u8BC1\u5728\u7B7E\u7EA6\u8FC7\u7A0B\u4E2D\u63D0\u4F9B\u7684\u4FE1\u606F\u771F\u5B9E\u3001\u51C6\u786E\u3001\u6709\u6548\uFF0C\u786E\u4FDD\u652F\u4ED8\u884C\u4E3A\u5408\u6CD5\u5E76\u672A\u4FB5\u72AF\u4EFB\u4F55\u7B2C\u4E09\u65B9\u5408\u6CD5\u6743\u76CA\uFF0C\u5426\u5219\u56E0\u6B64\u9020\u6210\u4E59\u65B9\u53CA\u5176\u6301\u5361\u4EBA\u635F\u5931\u7684\uFF0C\u7531\u7532\u65B9\u8D1F\u8D23\u8D54\u507F\u5E76\u627F\u62C5\u5168\u90E8\u6CD5\u5F8B\u8D23\u4EFB\u3002\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    _react2.default.createElement(
      "span",
      { className: " weight" },
      "\u4E8C\u3001\u7532\u65B9\u540C\u610F\u5C06\u7B7E\u7EA6\u8FC7\u7A0B\u4E2D\u6240\u586B\u5199\u7684\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u59D3\u540D\u3001\u94F6\u884C\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u3001\u8EAB\u4EFD\u8BC1\u4EF6\u53F7\u7801\u3001\u4FE1\u7528\u5361\u6709\u6548\u671F\u7B49\u8981\u7D20\u7528\u4E8E\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u5E76\u540C\u610F\u5C06\u6307\u5B9A\u94F6\u884C\u5361\u53F7\u4E0E\u7532\u65B9\u5728  \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u5F00\u7ACB\u7684\u6307\u5B9A\u4F1A\u5458\u8D26\u53F7\u5EFA\u7ACB\u7B7E\u7EA6\u5173\u7CFB\u3002\xA0"
    ),
    "\u4E59\u65B9\u6536\u5230  \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u53D1\u9001\u7684\u4E0A\u8FF0\u4FE1\u606F\u540E\uFF0C\u5C06\u4E0A\u8FF0\u4FE1\u606F\u4E0E\u7532\u65B9\u5728\u4E59\u65B9\u9884\u7559\u7684\u5BA2\u6237\u4FE1\u606F\u8FDB\u884C\u6BD4\u5BF9\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u4E59\u65B9\u4E3A\u7532\u65B9\u7B7E\u7EA6\u94F6\u884C\u5361\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u3002",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7532\u65B9\u540C\u610F\u4E59\u65B9\u5C06\u4E0A\u8FF0\u4FE1\u606F\u53D1\u9001\u81F3\u4E59\u65B9\u8BA4\u53EF\u7684\u7B2C\u4E09\u65B9\u673A\u6784\uFF08\u4F8B\u5982\u7535\u4FE1\u8FD0\u8425\u5546\u7B49\uFF09\u8FDB\u884C\u4FE1\u606F\u67E5\u8BE2\u4E0E\u6838\u9A8C\u3002"
    ),
    "\u4E59 \u65B9\u627F\u8BFA\u5BF9\u7532\u65B9\u7B7E\u7EA6\u4FE1\u606F\u4FDD\u5BC6\uFF0C\u4F46\u6CD5\u5F8B\u6CD5\u89C4\u548C\u89C4\u7AE0\u53E6\u6709\u89C4\u5B9A\u6216\u76D1\u7BA1\u90E8\u95E8\u7B49\u6709\u6743\u673A\u5173\u53E6\u6709\u8981\u6C42\u7684\u9664\u5916\u3002",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\xA0\u7532\u65B9\u540C\u610F\u4E59\u65B9\u53EF\u6839\u636E\u4E1A\u52A1\u9700\u8981\u53D8\u66F4\u9A8C\u8BC1\u6D41\u7A0B\u3001\u8981\u7D20\u548C\u9A8C\u8BC1\u6807\u51C6\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u4E09\u3001\"\u5FEB\u6377\u652F\u4ED8\"\u7B7E\u7EA6\u6210\u529F\u540E\uFF0C\u5373\u89C6\u4E3A\u7532\u65B9\u6388\u6743\u4E59\u65B9\u6309\u7167  \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u7684\u4EA4\u6613\u6307\u4EE4\u4ECE\u7B7E\u7EA6\u94F6\u884C\u5361\u4E0A\u4E3B\u52A8\u6263\u5212\u8D44\u91D1\u3002\u5C4A\u65F6\u7532\u65B9\u4E0D\u5E94\u4EE5\u672A\u5728\u4EA4\u6613\u5355\u636E\u4E2D\u7B7E\u540D\u3001\u7B7E\u540D\u4E0D\u7B26\u3001\u975E\u672C\u4EBA\u610F\u613F\u4EA4\u6613\u3001\u672A\u9A8C\u8BC1\u94F6\u884C\u5361\u652F\u4ED8\u5BC6\u7801\u3001\u672A\u9A8C\u8BC1\u94F6\u884C\u5361\u652F\u4ED8\u76FE\u7B49\u539F\u56E0\u8981\u6C42\u4E59\u65B9\u9000\u6B3E\u6216\u627F\u62C5\u5176\u4ED6\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u56DB\u3001\u7532\u65B9\u5E94\u59A5\u5584\u4FDD\u7BA1\u94F6\u884C\u5361\u5F00\u6237\u6237\u540D\u3001\u5F00\u6237\u7C7B\u578B\u3001\u4E0E\u4E4B\u76F8\u5173\u7684\u8BC1\u4EF6\u7C7B\u578B\u53CA\u8BC1\u4EF6\u53F7\u7801\u3001\u624B\u673A\u53F7\u7801\u3001\u56FA\u5B9A\u7535\u8BDD\u3001\u901A\u4FE1\u5730\u5740\u7B49\u76F8\u5173\u4FE1\u606F\uFF0C\u5982\u9057\u5931\u94F6\u884C\u5361\u6216\u6CC4\u9732\u4E0A\u8FF0\u76F8\u5173\u4FE1\u606F\uFF0C\u7532\u65B9\u5E94\u53CA\u65F6\u901A\u77E5\u4E59\u65B9\u5E76\u529E\u7406\u6302\u5931 \u6216\u9500\u6237\u7B49\u76F8\u5173\u624B\u7EED\uFF0C\u51CF\u5C11\u53EF\u80FD\u53D1\u751F\u7684\u635F\u5931\u3002",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\xA0\u6302\u5931\u6216\u9500\u6237\u524D\u7684\u635F\u5931\uFF0C\u4EE5\u53CA\u56E0\u7532\u65B9\u6CC4\u9732\u94F6\u884C\u5361\u5BC6\u7801\u3001\u652F\u4ED8\u673A\u6784\u8D26\u53F7\u5BC6\u7801\u3001\u652F\u4ED8\u673A\u6784\u652F\u4ED8\u5BC6\u7801\u548C\u624B\u673A\u52A8\u6001\u5BC6\u7801\u3001\u6570\u5B57\u8BC1\u4E66\u3001U-KEY\u3001\u4E22\u5931\u94F6\u884C\u5361\u7B49\u6240\u81F4\u635F\u5931\uFF0C\u7531\u7532\u65B9\u81EA\u884C\u627F\u62C5\u3002"
    ),
    "\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u4E94\u3001\u7532\u65B9\u53EF\u901A\u8FC7\u4E59\u65B9\u7F51\u4E0A\u94F6\u884C\u7B49\u6E20\u9053\u81EA\u52A9\u67E5\u8BE2\"\u5FEB\u6377\u652F\u4ED8\"\u4E1A\u52A1\u7B7E\u7EA6\u60C5\u51B5\u5E76\u5BF9\u5361\u8D26\u6237\u652F\u4ED8\u9650\u989D\u8FDB\u884C\u7BA1\u7406\u3002\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u7532\u65B9\u8BBE\u7F6E\u7684\u652F\u4ED8\u9650\u989D\u4E0D\u5E94\u8D85\u8FC7\u4E59\u65B9\u53CA \uFF08\u5546\u6237\u540D\u79F0\uFF09     \u8BBE\u7F6E\u7684\u6700\u5927\u652F\u4ED8\u9650\u989D\uFF0C\u5982\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\u5927\u4E8E\u652F\u4ED8\u9650\u989D\uFF0C\u4E59\u65B9\u6709\u6743\u62D2\u7EDD\u6267\u884C\u4EA4\u6613\u6307\u4EE4\u3002\u4E59\u65B9\u4FDD\u7559\u6839\u636E\u4EA4\u6613\u5B89\u5168\u9700\u8981\u8BBE\u7F6E\u6216\u4FEE\u6539\u6700\u5927\u652F\u4ED8\u9650\u989D\u7684\u6743\u5229\u3002\u4FE1\u7528\u5361\u652F\u4ED8\u9650\u989D\u540C\u65F6\u53D7\u9650\u4E8E\u5361\u4FE1\u7528\u989D\u5EA6\u3002\xA0\u2161\u7C7B\u3001\u2162\u7C7B\u8D26\u6237\u53D7\u8D26\u6237\u81EA\u8EAB\u9650\u989D\u9650\u5236\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u516D\u3001\u7532\u65B9\u4E0D\u5F97\u5229\u7528\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u8FDB\u884C\u5957\u73B0\u3001\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u7B49\u8FDD\u6CD5\u884C\u4E3A\uFF0C\u6709\u4E49\u52A1\u914D\u5408\u4E59\u65B9\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\u3002\u5982\u82E5\u7532\u65B9\u62D2\u7EDD\u914D\u5408\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\u6216\u4E59\u65B9\u8BA4\u4E3A\u5B58\u5728\u6216\u6D89\u5ACC\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u3001\u5957\u73B0\u6216\u4EFB\u4F55\u5176\u4ED6\u975E\u6CD5\u6D3B\u52A8\u3001\u6B3A\u8BC8\u6216\u8FDD\u53CD\u8BDA\u4FE1\u539F\u5219\u7684\u884C\u4E3A\u3001\u6216\u8FDD\u53CD\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\uFF0C\u4E59\u65B9\u6709\u6743\u91C7\u53D6\u4EE5\u4E0B\u4E00\u79CD\u3001\u591A\u79CD\u6216\u5168\u90E8\u63AA\u65BD\uFF1A\uFF081\uFF09\u6682\u505C\u6216\u7EC8\u6B62\u63D0\u4F9B\u672C\u534F\u8BAE\u9879\u4E0B \u5FEB\u6377\u652F\u4ED8\u670D\u52A1\uFF1B\uFF082\uFF09\u7EC8\u6B62\u672C\u534F\u8BAE\uFF1B\uFF083\uFF09\u53D6\u6D88\u7532\u65B9\u7684\u7528\u5361\u8D44\u683C\u3002\u82E5\u56E0\u7532\u65B9\u7684\u524D\u8FF0\u884C\u4E3A\u800C\u7ED9\u4E59\u65B9\u9020\u6210\u635F\u5931\u7684\uFF0C\u7532\u65B9\u5E94\u8D1F\u8D23\u8D54\u507F\u5E76\u627F\u62C5\u5168\u90E8\u6CD5\u5F8B\u8D23\u4EFB\u3002\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E09\u6761 \u6CD5\u5F8B\u9002\u7528\u6761\u6B3E\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u672C\u534F\u8BAE\u7684\u6210\u7ACB\u3001\u751F\u6548\u3001\u5C65\u884C\u548C\u89E3\u91CA\uFF0C\u5747\u9002\u7528\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\uFF08\u9664\u9999\u6E2F\u3001\u6FB3\u95E8\u3001\u53F0\u6E7E\u5730\u533A\u6CD5\u5F8B\uFF09\uFF1B\u6CD5\u5F8B\u65E0\u660E\u6587\u89C4\u5B9A\u7684\uFF0C\u53EF\u9002\u7528\u901A\u884C\u7684\u91D1\u878D\u60EF\u4F8B\u3002\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u672C\u534F\u8BAE\u662F\u4E59\u65B9\u7684\u5176\u4ED6\u65E2\u6709\u534F\u8BAE\u548C\u7EA6\u5B9A\u7684\u8865\u5145\u800C\u975E\u66FF\u4EE3\u6587\u4EF6\uFF0C\u5982\u672C\u534F\u8BAE\u4E0E\u5176\u4ED6\u65E2\u6709\u534F\u8BAE\u548C\u7EA6\u5B9A\u6709\u51B2\u7A81\uFF0C\u5E94\u4EE5\u672C\u534F\u8BAE\u4E3A\u51C6\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u56DB\u6761 \u5DEE\u9519\u548C\u4E89\u8BAE\u7684\u89E3\u51B3\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u4E59\u65B9\u4EC5\u4E3A\u7532\u65B9\u63D0\u4F9B\u5B89\u5168\u53EF\u9760\u7684\u652F\u4ED8\u7ED3\u7B97\u670D\u52A1\uFF0C\u4F9D\u636E  \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u63D0\u4F9B\u7684\u4EA4\u6613\u6307\u4EE4\u5B9E\u65BD\u8D44\u91D1\u6263\u5212\u3002\u5BF9\u4E8E\u56E0\u8D2D\u4E70\u5546\u54C1\u6216\u670D\u52A1\u800C\u4EA7\u751F\u7684\u4E00\u5207\u5173\u4E8E\u5546\u54C1\u3001\u670D\u52A1\u53CA\u8D39\u7528\u6263\u6536\u7684\u4E89\u8BAE\u5747\u7531\u7532\u65B9\u4E0E  \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u81EA\u884C\u534F\u5546\u89E3\u51B3\uFF0C\u4E0E\u4E59\u65B9\u65E0\u5173\u3002\xA0\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u53CC\u65B9\u5728\u5C65\u884C\u672C\u534F\u8BAE\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u53D1\u751F\u4E89\u8BAE\uFF0C\u5E94\u5C3D\u91CF\u534F\u5546\u89E3\u51B3\u3002\u534F\u5546\u4E0D\u6210\u7684\uFF0C\u4EFB\u4F55\u4E00\u65B9\u5747\u5E94\u5411\xA0",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7532\u65B9\u7ED1\u5B9A\u94F6\u884C\u5361\u7684\u5F00\u6237\u884C\u6240\u5728\u5730\u6709\u7BA1\u8F96\u6743\u7684\u4EBA\u6C11\u6CD5\u9662"
    ),
    "\u63D0\u8D77\u8BC9\u8BBC\xA0\xA0\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u4E94\u6761\xA0\u534F\u8BAE\u7684\u7EC8\u6B62"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u7532\u65B9\u53EF\u901A\u8FC7  \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u7F51\u7AD9\u6216\u4E59\u65B9\u7F51\u4E0A\u94F6\u884C\u3001\u624B\u673A\u94F6\u884C\u4E3B\u52A8\u53D1\u8D77\u89E3\u9664\u7B7E\u7EA6\u5173\u7CFB\u7684\u7533\u8BF7\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\"\u5FEB\u6377\u652F\u4ED8\"\u7B7E\u7EA6\u5173\u7CFB\u4E00\u65E6\u89E3\u9664\uFF0C\u672C\u534F\u8BAE\u5373\u544A\u7EC8\u6B62\u3002\u534F\u8BAE\u7EC8\u6B62\u524D\u5DF2\u53D1\u9001\u4E59\u65B9\u5904\u7406\u7684\u4EA4\u6613\u6307\u4EE4\u4ECD\u6709\u6548\uFF0C\u7532\u65B9\u5E94\u627F\u62C5\u76F8\u5E94\u540E\u679C\u3002\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u5982\u56E0\u7B7E\u7EA6\u5361/\u6298\u6CE8\u9500\u3001\u8865\uFF08\u6362\uFF09\u5361/\u6298\u7B49\u4EFB\u4F55\u539F\u56E0\u5BFC\u81F4\u5361/\u6298\u53F7\u53D8\u66F4\uFF0C\u987B\u91CD\u65B0\u7B7E\u8BA2\"\u5FEB\u6377\u652F\u4ED8\"\u7B7E\u7EA6\u5173\u7CFB\u3002\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u516D\u6761\xA0\u534F\u8BAE\u7684\u6548\u529B\xA0\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u672C\u534F\u8BAE\u4E0E\u672C\u884C\u501F\u8BB0\u5361\u6216\u8D37\u8BB0\u5361\u7AE0\u7A0B\u6216\u534F\u8BAE\u76F8\u51B2\u7A81\u90E8\u5206\uFF0C\u4EE5\u672C\u534F\u8BAE\u4E3A\u51C6\u3002\xA0"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7532\u65B9\u540C\u610F\uFF0C\u4E59\u65B9\u6709\u6743\u53D8\u66F4\u3001\u6682\u505C\u672C\u534F\u8BAE\u9879\u4E0B\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u670D\u52A1\uFF0C\u6709\u6743\u4FEE\u6539\u3001\u7EC8\u6B62\u672C\u534F\u8BAE\uFF0C\u5E76\u4E8E\u6267\u884C\u524D\u901A\u8FC7\u4E59\u65B9\u7F51\u7AD9\u6216\u5176\u4ED6\u4EFB\u4F55\u5F62\u5F0F\u8FDB\u884C\u516C\u544A\u3002\u4FEE\u6539\u672C\u534F\u8BAE\u7684\u516C\u544A\u5230\u671F\u540E\u7532\u65B9\u7EE7\u7EED\u529E\u7406\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7684\uFF0C\u89C6\u540C\u63A5\u53D7\u6709 \u5173\u672C\u534F\u8BAE\u3001\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u670D\u52A1\u7684\u4FEE\u6539\u5185\u5BB9\u3002\u7532\u65B9\u4E0D\u540C\u610F\u7684\uFF0C\u53EF\u4EE5\u7EC8\u6B62\u672C\u534F\u8BAE\u3002\xA0"
  )
);

//建设银行
var construction = _react2.default.createElement(
  "div",
  { className: "construction" },
  _react2.default.createElement(
    "div",
    { style: { fontSize: '18px', fontWeight: '800', textAlign: "center" } },
    "\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C\u603B\u5BF9\u603B\u5FEB\u6377\u5BA2\u6237\u6388\u6743\u534F\u8BAE"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C\u603B\u5BF9\u603B\u5FEB\u6377\u5BA2\u6237\u6388\u6743\u534F\u8BAE\uFF08\u4EE5\u4E0B\u7B80\u79F0\"\u672C\u534F\u8BAE\"\uFF09\u662F\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u7532\u65B9\u201D\uFF09\u4E0E\u4E2A\u4EBA\u5BA2\u6237 \uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u4E59\u65B9\u201D\uFF09\u5C31\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C\u603B\u5BF9\u603B\u5FEB\u6377\u7535\u5B50\u652F\u4ED8\u670D\u52A1\u7684\u76F8\u5173\u4E8B\u5B9C\u8FBE\u6210\u7684\u534F\u8BAE\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u4E00\u6761"
    ),
    " \u603B\u5BF9\u603B\u5FEB\u6377\u4E1A\u52A1\u662F\u6307\u6301\u6709\u7532\u65B9\u6D3B\u671F\u50A8\u84C4\u8D26\u6237\u6216\u4FE1\u7528\u5361\u8D26\u6237\u7684\u4E59\u65B9\uFF0C\u901A\u8FC7\u7F51\u94F6\u76FE\u6216\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7B49\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u9A8C\u8BC1\u8D26\u53F7\u3001\u6237\u540D\u3001\u8BC1\u4EF6\u53F7\u3001\u624B\u673A\u53F7\u7B49\u8EAB\u4EFD\u4FE1\u606F\u540E\uFF0C\u6388\u6743\u6307\u5B9A\u5546\u6237\u5728\u4E00\u5B9A\u9650\u989D\u5185\u5C31\u8BE5\u94F6\u884C\u8D26\u6237\u5411\u7532\u65B9\u53D1\u51FA\u6263\u6B3E\u6307\u4EE4\uFF0C\u5E76\u6388\u6743\u7532\u65B9\u6839\u636E\u5546\u6237\u6307\u4EE4\u4ECE\u8BE5\u94F6\u884C\u8D26\u6237\u5185\u6263\u6B3E\u7684\u652F\u4ED8\u65B9\u5F0F\u3002 \u4E59\u65B9\u5728\u6307\u5B9A\u5546\u6237\u529E\u7406\u652F\u4ED8\u4E1A\u52A1\u65F6\u4E0D\u9700\u518D\u8DF3\u8F6C\u5230\u7532\u65B9\u652F\u4ED8\u9875\u9762\uFF0C\u76F4\u63A5\u901A\u8FC7\u5546\u6237\u7CFB\u7EDF\u5411\u7532\u65B9\u53D1\u8D77\u4EA4\u6613\u7533\u8BF7\uFF0C\u5B8C\u6210\u652F\u4ED8\uFF08\u542B\u5206\u671F\uFF09\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "\u7532\u4E59\u53CC\u65B9\u540C\u610F\uFF0C\u4E0A\u8FF0\u6388\u6743\u7684\u524D\u63D0\u662F\uFF0C\u7531\u5546\u6237\u6536\u96C6\u5E76\u5411\u7532\u65B9\u63D0\u4F9B\u7684\u4E59\u65B9\u5728\u7533\u8BF7\u672C\u4E1A\u52A1\u8FC7\u7A0B\u4E2D\u6240\u586B\u5199\u7684\u8981\u7D20\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u59D3\u540D\u3001 \u8EAB\u4EFD\u8BC1\u4EF6\u53F7\u3001\u94F6\u884C\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u7B49\uFF0C\u901A\u8FC7\u7532\u65B9\u7684\u6821\u5BF9\u6838\u9A8C\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u4E8C\u6761"
    ),
    " \u7532\u65B9\u7684\u6743\u5229\u548C\u4E49\u52A1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "1.\u7532\u65B9\u4E3A\u4E59\u65B9\u63D0\u4F9B\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u7535\u5B50\u652F\u4ED8\u670D\u52A1\u3002\u4E59\u65B9\u6388\u6743\u7532\u65B9\u6309\u7167   (\u5546\u6237\u540D\u79F0)  \u5411\u7532\u65B9\u63D0\u4EA4\u7684\u652F\u4ED8\u6263\u6B3E\u6307\u4EE4\u53CA\u652F\u4ED8\u6263\u6B3E\u6570\u636E\uFF0C\u76F4\u63A5\u4ECE\u4E59\u65B9\u6307\u5B9A\u7684\u94F6\u884C\u8D26\u53F7\u4E2D\u6263\u7F34\u76F8\u5173\u8D39\u7528\u81F3\u8BE5\u5546\u6237\u6307\u5B9A\u7684\u94F6\u884C\u8D26\u6237\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "2.\u4E59\u65B9\u7ECF   (\u5546\u6237\u540D\u79F0)  \u5411\u7532\u65B9\u63D0\u4EA4\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u4EF6\u53F7\u3001\u94F6\u884C\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u7B49\u4FE1\u606F\uFF0C\u7532\u65B9\u6821\u5BF9\u6838\u9A8C\u540E\u5EFA\u7ACB\u4E59\u65B9\u94F6\u884C\u8D26\u53F7\u4E0E\u5546\u6237\u7F51\u7AD9\u7528\u6237\u53F7\u7684\u7ED1\u5B9A\u652F\u4ED8\u5173\u7CFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "3.\u7532\u65B9\u4E0D\u5BF9\u5546\u6237\u63D0\u4EA4\u7684\u6263\u6B3E\u4EA4\u6613\u6307\u4EE4\u8FDB\u884C\u5B9E\u8D28\u6027\u5BA1\u6838\uFF0C\u4E0D\u8D1F\u8D23\u5BA1\u6838\u5546\u6237\u63D0\u4EA4\u6263\u6B3E\u6307\u4EE4\u7684\u771F\u5B9E\u6027\u3001\u5408\u6CD5\u6027\u3001\u51C6\u786E\u6027\u3002\u4E59\u65B9\u5982\u5BF9\u7532\u65B9\u4F9D\u636E\u5546\u6237\u6307\u4EE4\u8FDB\u884C\u6263\u6B3E\u7684\u884C\u4E3A\u53D1\u751F\u4E89\u8BAE\uFF0C\u5E94\u4E0E\u5176\u6388\u6743\u5546\u6237\u534F\u5546\u89E3\u51B3\uFF0C\u7532\u65B9\u4E0D\u627F\u62C5\u76F8\u5173\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "4. \u7532\u65B9\u53EF\u6839\u636E\u4E1A\u52A1\u53D1\u5C55\u9700\u8981\uFF0C\u8BBE\u7F6E\u6216\u4FEE\u6539\u652F\u4ED8\u9650\u989D\u3002\u4E59\u65B9\u5728\u4F7F\u7528\u672C\u670D\u52A1\u65F6\u9700\u540C\u65F6\u53D7\u7532\u65B9\u548C  (\u5546\u6237\u540D\u79F0)  \u8BBE\u7F6E\u7684\u652F\u4ED8\u9650\u989D\u7684\u7EA6\u675F\u3002\u5982\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\u5927\u4E8E\u652F\u4ED8\u9650\u989D\uFF0C\u7532\u65B9\u5C06\u62D2\u7EDD\u6267\u884C\u4EA4\u6613\u6307\u4EE4\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "5.\u4E3A\u4FDD\u62A4\u4E59\u65B9\u6743\u76CA\uFF0C\u63A7\u5236\u4E1A\u52A1\u98CE\u9669\uFF0C\u7532\u65B9\u6709\u6743\u968F\u65F6\u53D8\u66F4\u4E59\u65B9\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u540E\u901A\u8FC7\u7532\u65B9\u8FDB\u884C\u7535\u5B50\u652F\u4ED8\u65F6\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u5F0F\uFF0C\u4F8B\u5982\u7532\u65B9\u53EF\u8981\u6C42\u4E59\u65B9\u5728\u9009\u62E9\u5FEB \u6377\u652F\u4ED8\u65F6\u5E94\u5F53\u901A\u8FC7\u7532\u65B9\u7F51\u4E0A\u94F6\u884C\u6216\u8D26\u53F7\u9A8C\u8BC1\uFF0C\u6216\u8005\u4F7F\u7528\u7F51\u94F6\u76FE\u6216\u8005\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7B49\u65B9\u5F0F\u4F5C\u4E3A\u6821\u9A8C\u6807\u51C6\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u4E09\u6761"
    ),
    " \u4E59\u65B9\u7684\u6743\u5229\u548C\u4E49\u52A1"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "1.\u4E59\u65B9\u5E94\u5148\u62E5\u6709\u7532\u65B9\u501F\u8BB0\u5361\uFF08\u6298\uFF09\u6216\u8D37\u8BB0\u5361\u94F6\u884C\u8D26\u53F7\uFF0C\u5E76\u9075\u5B88\u300A\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u7535\u5B50\u94F6\u884C\u4E2A\u4EBA\u5BA2\u6237\u670D\u52A1\u534F\u8BAE\u300B\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "2.\u4E59\u65B9\u5411\u7532\u65B9\u627F\u8BFA:\u5176\u5DF2\u6388\u6743 (\u5546\u6237\u540D\u79F0)   \u5411\u7532\u65B9\u63D0\u4EA4\u652F\u4ED8\u6263\u6B3E\u6307\u4EE4\u53CA\u652F\u4ED8\u6263\u6B3E\u6570\u636E\uFF1B\u4E59\u65B9\u4FDD\u8BC1 (\u5546\u6237\u540D\u79F0)   \u5411\u7532\u65B9\u63D0\u4EA4\u7684\u652F\u4ED8\u6263\u6B3E\u6307\u4EE4\u53CA\u652F\u4ED8 \u6263\u6B3E\u6570\u636E\u5747\u4E3A\u4E59\u65B9\u771F\u5B9E\u610F\u613F\u8868\u793A\uFF0C\u8BE5\u6307\u4EE4\u53CA\u6570\u636E\u771F\u5B9E\u3001\u5408\u6CD5\u4E14\u6709\u6548\uFF0C\u4E59\u65B9\u613F\u610F\u627F\u62C5\u76F8\u5173\u6CD5\u5F8B\u540E\u679C"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "3. \u4E59\u65B9\u5728\u4F7F\u7528\u672C\u670D\u52A1\u65F6\u9700\u540C\u65F6\u53D7\u7532\u65B9\u548C  (\u5546\u6237\u540D\u79F0)  \u8BBE\u7F6E\u7684\u652F\u4ED8\u9650\u989D\u7684\u7EA6\u675F\u3002\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u652F\u4ED8\u91D1\u989D\u4E0D\u5E94\u8D85\u8FC7\u7532\u65B9\u6216  (\u5546\u6237\u540D\u79F0)  \u8BBE\u7F6E\u7684\u652F\u4ED8\u9650\u989D\uFF08\u4EE5\u8F83\u5C11 \u8005\u4E3A\u51C6\uFF0C\u4EE5\u4E0B\u7B80\u79F0\u201C\u652F\u4ED8\u9650\u989D\u201D\uFF09\u3002\u5982\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\u5927\u4E8E\u652F\u4ED8\u9650\u989D\uFF0C\u7532\u65B9\u5C06\u62D2\u7EDD\u6267\u884C\u4EA4\u6613\u6307\u4EE4\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "4.\u4E59\u65B9\u5E94\u59A5\u5584\u4FDD\u7BA1\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u4EF6\u3001\u94F6\u884C\u8D26\u53F7\u3001\u94F6\u884C\u8D26\u53F7\u5BC6\u7801\u3001\u7F51\u4E0A\u94F6\u884C\u4EA4\u6613\u5BC6\u7801\u3001\u7F51\u4E0A\u94F6\u884C\u767B\u9646\u5BC6\u7801\u3001\u624B\u673A\u52A8\u6001\u9A8C\u8BC1\u7801\u3001\u7F51\u94F6\u5BA2\u6237\u53F7\u4EE5\u53CA\u7F51\u94F6\u76FE\u7B49\u5B89\u5168\u8BA4\u8BC1\u5DE5\u5177\uFF0C\u4E0D\u5F97\u5C06\u672C\u4EBA\u94F6\u884C\u5BC6\u7801\u3001\u624B\u673A\u52A8\u6001\u9A8C\u8BC1\u7801\u7B49\u4FE1\u606F\u5411\u4ED6\u4EBA\u900F\u9732\uFF0C\u5426\u5219\u7531\u6B64\u5BFC\u81F4\u7684\u4E59\u65B9\u635F\u5931\uFF0C\u7532\u65B9\u4E0D\u627F\u62C5\u8D54\u507F\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "5.\u4E59\u65B9\u5E94\u4FDD\u8BC1\u4E1A\u52A1\u5F00\u901A\u65F6\u5728\u7532\u65B9\u9884\u7559\u7684\u624B\u673A\u53F7\uFF08\u5F00\u6237\u4EE5\u53CA\u5F00\u901A\u7F51\u94F6\u3001\u624B\u673A\u94F6\u884C\u7B49\u7535\u5B50\u6E20\u9053\u65F6\u9884\u7559\u7684\u624B\u673A\u53F7\u7801\uFF09\u4E3A\u672C\u4EBA\u624B\u673A\u53F7\u7801\uFF0C\u5426\u5219\u7531\u6B64\u5BFC\u81F4\u7684\u4E59\u65B9\u635F\u5931\uFF0C\u7532\u65B9\u4E0D\u627F\u62C5\u8D54\u507F\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "6\uFF0E\u4E59\u65B9\u4E0D\u5F97\u5229\u7528\u603B\u5BF9\u603B\u5FEB\u6377\u4E1A\u52A1\u8FDB\u884C\u5957\u73B0\u3001\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u7B49\u884C\u4E3A\uFF0C\u4E14\u6709\u4E49\u52A1\u914D\u5408\u7532\u65B9\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\uFF0C\u4E00\u65E6\u4E59\u65B9\u62D2\u7EDD\u914D\u5408\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\u6216\u7532\u65B9\u8BA4\u4E3A\u4E59\u65B9\u5B58\u5728\u6216\u6D89\u5ACC\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u3001\u5957\u73B0\u6216\u4EFB\u4F55\u5176\u4ED6\u975E\u6CD5\u6D3B\u52A8\u3001\u6B3A\u8BC8\u6216\u8FDD\u53CD\u8BDA\u4FE1\u539F\u5219\u7684\u884C\u4E3A\u3001\u6216\u8FDD\u53CD\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\uFF0C\u7532\u65B9\u6709\u6743\u91C7\u53D6\u4EE5\u4E0B\u4E00\u79CD\u3001\u591A\u79CD\u6216\u5168\u90E8\u63AA\u65BD\uFF1A\uFF081\uFF09\u6682\u505C\u6216\u7EC8\u6B62\u63D0\u4F9B\u672C\u534F\u8BAE\u9879\u4E0B\u603B\u5BF9\u603B\u5FEB\u6377\u670D\u52A1\uFF1B\uFF082\uFF09\u7EC8\u6B62\u672C\u534F\u8BAE\uFF1B\uFF083\uFF09\u53D6\u6D88\u4E59\u65B9\u7684\u94F6\u884C\u5361\u4F7F\u7528\u8D44\u683C\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u56DB\u6761"
    ),
    " \u5728\u672C\u534F\u8BAE\u4E0B\u7532\u65B9\u4EC5\u5411\u4E59\u65B9\u63D0\u4F9B\u652F\u4ED8\u7ED3\u7B97\u670D\u52A1\u3002\u4E59\u65B9\u56E0\u8D2D\u4E70\u6216\u4F7F\u7528 (\u5546\u6237\u540D\u79F0)   \u7684\u4EA7\u54C1\u6216\u670D\u52A1\u800C\u4EA7\u751F\u7684\u4E00\u5207\u5173\u4E8E\u4EA7\u54C1\u8D28\u91CF\u3001\u670D\u52A1\u8D28\u91CF\u53CA\u8D39\u7528\u6263\u6536\u7684\u4E89\u8BAE\uFF0C\u5747\u7531\u4E59\u65B9\u4E0E (\u5546\u6237\u540D\u79F0)   \u81EA\u884C\u534F\u5546\u89E3\u51B3\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u4E94\u6761"
    ),
    " \u7532\u4E59\u53CC\u65B9\u5728\u5C65\u884C\u672C\u534F\u8BAE\u7684\u8FC7\u7A0B\u4E2D\u5982\u53D1\u751F\u4E89\u8BAE\uFF0C\u5E94\u534F\u5546\u89E3\u51B3\uFF1B\u534F\u5546\u4E0D\u6210\u7684\uFF0C\u5411\u7532\u65B9\u4F4F\u6240\u5730\u4EBA\u6C11\u6CD5\u9662\u63D0\u8D77\u8BC9\u8BBC\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "\u672C\u534F\u8BAE\u9002\u7528\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u3002\u4E3A\u672C\u534F\u8BAE\u4E4B\u76EE\u7684\uFF0C\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u4E0D\u5305\u62EC\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A\u3001\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A\u53CA\u53F0\u6E7E\u5730\u533A\u6CD5\u5F8B\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u516D\u6761"
    ),
    " \u7279\u522B\u7EA6\u5B9A\u6761\u6B3E\u5982\u4E0B\uFF1A"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "1. \u4E59\u65B9\u627F\u8BFA\u5728\u6307\u5B9A\u7684\u94F6\u884C\u4ED8\u6B3E\u8D26\u6237\u4E2D\u4FDD\u7559\u8DB3\u591F\u7684\u4F59\u989D\uFF0C\u5E76\u4FDD\u6301\u8D26\u6237\u5904\u4E8E\u6B63\u5E38\u72B6\u6001\u3002\u56E0\u4ED8\u6B3E\u8D26\u6237\u4F59\u989D\u4E0D\u8DB3\u3001\u8D26\u6237\u88AB\u51BB\u7ED3\u3001\u9500\u6237\u7B49\u539F\u56E0\u800C\u5BFC\u81F4\u7684\u65E0\u6CD5\u6210\u529F\u652F\u4ED8\u8D39\u7528\u53CA\u6240\u9020\u6210\u7684\u4E00\u5207\u7ECF\u6D4E\u7EA0\u7EB7\u548C\u8FDD\u7EA6\u8D23\u4EFB\u3001\u635F\u5931\u7B49\u5168\u90E8\u6CD5\u5F8B\u540E\u679C\u4E59\u65B9\u81EA\u62C5\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "2. \u4E59\u65B9\u652F\u4ED8\u8D39\u7528\u7684\u53D1\u7968\u7B49\u7531 (\u5546\u6237\u540D\u79F0)   \u63D0\u4F9B\uFF0C\u7532\u65B9\u65E0\u9700\u534F\u52A9\u4F20\u9012\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    "3. \u4E59\u65B9\u627F\u8BFA\u5982\u5BF9\u6263\u8D39\u9879\u76EE\u3001\u6263\u8D39\u91D1\u989D\u7B49\u6709\u5F02\u8BAE\uFF0C\u5C06\u81EA\u884C\u4E0E\u6536\u6B3E\u65B9\u534F\u5546\u5904\u7406\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "4. \u7532\u65B9\u63A5\u6536\u5230\u7684\u5546\u6237\u7535\u5B50\u6263\u6B3E\u6307\u4EE4\u3001\u4FE1\u606F\u4E0D\u660E\u786E\u3001\u4E0D\u5B8C\u6574\u3001\u4E0D\u6E05\u6670\u6216\u65E0\u6CD5\u8FA8\u8BA4\uFF0C\u5BFC\u81F4\u7532\u65B9\u65E0\u6CD5\u6263\u6B3E\uFF0C\u7532\u65B9\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF0C\u7531\u4E59\u65B9\u4E0E\u5176\u6388\u6743\u5546\u6237\u534F\u5546\u89E3\u51B3\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "5.\u5982\u4E59\u65B9\u6388\u6743\u5546\u6237\u5411\u7532\u65B9\u4F20\u9001\u7684\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u4EF6\u53F7\u3001\u94F6\u884C\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u7B49\u7B49\u4FE1\u606F\u6709\u8BEF\uFF0C\u5BFC\u81F4\u7532\u65B9\u4E0D\u80FD\u6309\u7EA6\u5B9A\u6263\u5212\u8D44\u91D1\u6216\u81F4\u4F7F\u4E59\u65B9\u53CA\u5546 \u6237\u53D1\u751F\u635F\u5931\u7684\uFF0C\u7532\u65B9\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF0C\u7531\u4E59\u65B9\u4E0E\u5176\u6388\u6743\u5546\u6237\u534F\u5546\u89E3\u51B3\u3002 "
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u4E03\u6761"
    ),
    " \u4E0D\u53EF\u6297\u529B"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u56E0\u4E0D\u53EF\u6297\u529B\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7532\u65B9\u4E0D\u80FD\u9884\u89C1\u3001\u4E0D\u80FD\u907F\u514D\u5E76\u4E0D\u80FD\u514B\u670D\u7684\u6218\u4E89\u3001\u66B4\u52A8\u3001\u81EA\u7136\u707E\u5BB3\u3001\u653F\u5E9C\u884C\u4E3A\u3001\u793E\u4F1A\u4E8B\u4EF6\u3001\u9ED1\u5BA2\u653B\u51FB\u3001\u4F9B\u7535\u3001\u901A\u8BAF\u3001\u4EA4\u6613\u7CFB\u7EDF\u6545\u969C\u7B49\u5BA2\u89C2\u60C5\u51B5\uFF09\u5BFC\u81F4\u4E59\u65B9\u635F\u5931\u7684\uFF0C \u7532\u65B9\u5C06\u89C6\u60C5\u51B5\u534F\u52A9\u4E59\u65B9\u89E3\u51B3\u6216\u63D0\u4F9B\u5FC5\u8981\u7684\u5E2E\u52A9\u3002\u6839\u636E\u4E0D\u53EF\u6297\u529B\u7684\u5F71\u54CD\uFF0C\u7532\u65B9\u90E8\u5206\u6216\u5168\u90E8\u514D\u9664\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u516B\u6761 \u4E59\u65B9\u9009\u62E9\u5E76\u70B9\u51FB\u672C\u534F\u8BAE\u4E0B\u65B9\u201C\u540C\u610F\u201D\u6309\u94AE\u540E\uFF0C\u89C6\u540C\u63A5\u6536\u5E76\u540C\u610F\u4E0E\u7532\u65B9\u7B7E\u8BA2\u300A\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C\u603B\u5BF9\u603B\u5FEB\u6377\u5BA2\u6237\u6388\u6743\u534F\u8BAE\u300B\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content " },
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u7B2C\u4E5D\u6761"
    ),
    " \u5982\u7532\u65B9\u4E0E (\u5546\u6237\u540D\u79F0)   \u4E1A\u52A1\u5408\u4F5C\u7EC8\u6B62\u540E\uFF0C\u81EA\u7EC8\u6B62\u4E4B\u65E5\u8D77\u672C\u534F\u8BAE\u81EA\u52A8\u5931\u6548\u3002\u4E59\u65B9\u5982\u9700\u6CE8\u9500\u603B\u5BF9\u603B\u5FEB\u6377\u4E1A\u52A1\uFF0C\u4E59\u65B9\u53EF\u4EE5\u901A\u8FC7\u5546\u6237\u7AEF\u53D1\u8D77\u6CE8\u9500\u7533\u8BF7\uFF0C\u4E1A\u52A1\u6CE8\u9500\u81EA\u7532\u65B9\u540C\u610F\u5E76\u5728\u94F6\u884C\u7CFB\u7EDF\u4E2D\u8BBE\u7F6E\u6210\u529F\u540E\u751F\u6548\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u7B2C\u5341\u6761 \u4E59\u65B9\u786E\u8BA4\uFF1A\u5DF2\u4ED4\u7EC6\u9605\u8BFB\u4E86\u672C\u534F\u8BAE\uFF0C\u5E76\u7279\u522B\u6CE8\u610F\u4E86\u5B57\u4F53\u52A0\u9ED1\u7684\u6761\u6B3E\uFF0C\u5BF9\u672C\u534F\u8BAE\u6761\u6B3E\u7684\u542B\u4E49\u53CA\u76F8\u5E94\u7684\u6CD5\u5F8B\u540E\u679C\u5DF2\u5168\u90E8\u77E5\u6653\u5E76\u5145\u5206\u7406\u89E3\uFF0C\u613F\u610F\u9075\u5B88\u5176\u5168\u90E8\u5185\u5BB9\uFF1B\u7532\u65B9\u5DF2\u5E94\u8981\u6C42\u5BF9\u76F8\u5173\u6761\u6B3E\u8FDB\u884C\u4E86\u5145\u5206\u7684\u63D0\u793A\u548C\u8BF4\u660E\u3002"
  )
);

//中国银行
var BankOfChina = _react2.default.createElement(
  "div",
  { className: "BankOfChina" },
  _react2.default.createElement(
    "div",
    { style: { fontSize: '18px', fontWeight: '800', textAlign: "center" } },
    "\u4E2D\u56FD\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u501F\u8BB0\u5361\u5FEB\u6377\u652F\u4ED8\u670D\u52A1\u534F\u8BAE\uFF08\u603B\u884C\u7248\uFF09"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "\u8BF7\u5BA2\u6237\u8BA4\u771F\u9605\u8BFB\u672C\u534F\u8BAE\u6587\u672C\uFF0C\u5982\u6709\u7591\u4E49\uFF0C\u8BF7\u53CA\u65F6\u62E8\u6253\u4E2D\u56FD\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u5BA2\u6237\u670D\u52A1\u70ED\u7EBF95566\u54A8\u8BE2\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "1.\u4E2D\u56FD\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u501F\u8BB0\u5361\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u201D\uFF09\u662F\u4E2D\u56FD\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u4E2D\u56FD\u94F6\u884C\u201D\uFF09\u548C \uFF08\u5546\u6237\u540D\u79F0\uFF09   \u516C\u53F8\u8054\u5408\u4E3A\u4E2D\u56FD\u94F6\u884C\u501F\u8BB0\u5361\u6301\u5361\u5BA2\u6237\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u5BA2\u6237\u201D\uFF09\u901A\u8FC7    \uFF08\u5546\u6237\u540D\u79F0\uFF09        \u8D26\u6237\u8D2D\u4E70\u5546\u54C1\u652F\u4ED8\u8D27\u6B3E\u7684\u4E00\u9879\u7535\u5B50 \u94F6\u884C\u670D\u52A1\u4E1A\u52A1\uFF0C\u51E1\u662F\u6301\u6709\u4E2D\u56FD\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u5728\u4E2D\u56FD\u5927\u9646\u5730\u533A\u53D1\u884C\u7684\u501F\u8BB0\u5361\u4E14\u540C\u65F6\u4E3A  \uFF08\u5546\u6237\u540D\u79F0\uFF09   \u7528\u6237\u7684\u5BA2\u6237\uFF0C\u5747\u53EF\u7533\u8BF7\u8BE5\u4E1A\u52A1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "2.\u5BA2\u6237\u901A\u8FC7\u4E92\u8054\u7F51\uFF08Internet\uFF09\u5728 \uFF08\u5546\u6237\u540D\u79F0\uFF09     \u7F51\u7AD9\u6216\u5BA2\u6237\u7AEF\uFF0C\u9009\u62E9\u5728\u7EBF\u4E0E\u4E2D\u56FD\u94F6\u884C\u7B7E\u8BA2\u672C\u670D\u52A1\u534F\u8BAE\uFF0C\u5C06\u6307\u5B9A\u7684\u501F\u8BB0\u5361\u4E0E\u6B64\u65F6\u767B\u5F55\u7684\u8D26\u6237\u8FDB\u884C\u5173\u8054\uFF0C\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u529F\u80FD\uFF0C\u5E76\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u4E00\u5207\u8D23\u4EFB\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "3.\u5BA2\u6237\u540C\u610F\uFF0C\u4E2D\u56FD\u94F6\u884C\u4EE5 \uFF08\u5546\u6237\u540D\u79F0\uFF09     \u4F20\u9001\u81F3\u4E2D\u56FD\u94F6\u884C\u7684\u6237\u540D\u3001\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u7B49\u8EAB\u4EFD\u8981\u7D20\u4F5C\u4E3A\u786E\u8BA4\u5BA2\u6237\u8EAB\u4EFD\u3001\u4E3A\u5BA2\u6237\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7684\u552F\u4E00\u8BC1\u636E\u3002",
    _react2.default.createElement(
      "span",
      { style: { color: 'red' } },
      "\u4E2D\u56FD\u94F6\u884C\u6BD4\u5BF9\u6237\u540D\u3001\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u4E0E\u5BA2\u6237\u5728\u94F6\u884C\u9884\u7559\u4FE1\u606F\u4E00\u81F4\u540E\uFF0C\u901A\u8FC795566\u53D1\u9001\u624B\u673A\u52A8\u6001\u5BC6\u7801\u81F3\u5BA2\u6237\u9884\u7559\u624B\u673A\u53F7\u4E0A\uFF0C\u5E76\u5BF9  \uFF08\u5546\u6237\u540D\u79F0\uFF09 \u4F20\u9001\u7684\u5BA2\u6237\u586B\u5199\u7684\u624B\u673A\u52A8\u6001\u5BC6\u7801\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E00\u81F4\u901A\u8FC7\u540E\uFF0C\u5B8C\u6210\u5BA2\u6237\u6307\u5B9A\u7684\u501F\u8BB0\u5361\u4E0E\u6B64\u65F6\u6240\u767B\u5F55\u8D26\u6237\u7684\u5173\u8054\u3002"
    ),
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u5BA2\u6237\u987B\u4FDD\u8BC1\u5728\u4E2D\u56FD\u94F6\u884C\u9884\u7559\u624B\u673A\u53F7\u7801\u4E3A\u672C\u4EBA\u624B\u673A\u53F7\u7801\u5E76\u786E\u4FDD\u5176\u51C6\u786E\u6027"
    ),
    "\u3002\u57FA\u4E8E\u63D0\u9AD8\u4EA4\u6613\u5B89\u5168\u7684\u76EE\u7684\uFF0C\u4E2D\u56FD\u94F6\u884C\u6709\u6743\u53D8\u66F4\u4E0A\u8FF0 \u8EAB\u4EFD\u8981\u7D20\u3002\u5BA2\u6237\u987B\u59A5\u5584\u4FDD\u7BA1\u672C\u4EBA\u4E2D\u56FD\u94F6\u884C\u501F\u8BB0\u5361\u4FE1\u606F\uFF0C\u672C\u4EBA\u8EAB\u4EFD\u4FE1\u606F\u3001\u624B\u673A\u52A8\u6001\u5BC6\u7801\u3001\u5B89\u5168\u8BA4\u8BC1\u5DE5\u5177\u7B49\u654F\u611F\u4FE1\u606F\uFF0C\u4E0D\u5F97\u5C06\u654F\u611F\u4FE1\u606F\u5411\u4ED6\u4EBA\u900F\u9732\u3002",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u56E0\u5BA2\u6237\u94F6\u884C\u9884\u7559\u4FE1\u606F\u9519\u8BEF\uFF0C\u6216\u4E2A\u4EBA\u4FE1\u606F\u3001\u624B\u673A\u7B49\u4FDD\u7BA1\u4E0D\u5584\u4EA7\u751F\u7684\u98CE\u9669\u53CA\u635F\u5931\u7531\u5BA2\u6237\u672C\u4EBA\u627F\u62C5\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "4.\u5F00\u901A\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u540E\uFF0C\u5BA2\u6237\u540C\u610F\u5E76\u6388\u6743\u4E2D\u56FD\u94F6\u884C\u5728\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u670D\u52A1\u8303\u56F4\u5185\uFF0C\u5C06\u5176\u6240\u5173\u8054\u501F\u8BB0\u5361\u7684\u539F\u6709\u652F\u4ED8\u9A8C\u8BC1\u65B9\u5F0F\u53D8\u66F4\u4E3A\u6309\u7167 \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u516C\u53F8\u53D1\u9001\u7684\u4EA4\u6613\u6307\u4EE4\u4ECE\u5BA2\u6237\u6307\u5B9A\u7684\u501F\u8BB0\u5361\u8D26\u6237\u4E2D\u652F\u4ED8\u76F8\u5E94\u6B3E\u9879\u3002\u5BA2\u6237\u9700\u5728\u5176\u7ED1\u5B9A\u7684\u501F\u8BB0\u5361\u7684\u4F59\u989D\u5185\u8FDB\u884C\u652F\u4ED8\uFF0C\u5426\u5219\u4E2D\u56FD\u94F6\u884C\u6709\u6743\u62D2\u7EDD\u6267\u884C\u4EA4\u6613\u6307\u4EE4\u201D\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "5.\u5BA2\u6237\u540C\u610F\u5E76\u6388\u6743\u4E2D\u56FD\u94F6\u884C\u5F00\u901A\u514D\u8D39\u7684\u8D26\u6237\u53D8\u52A8\u5373\u65F6\u901A\u77E5\u670D\u52A1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "6.\u4E2D\u56FD\u94F6\u884C\u53EF\u6839\u636E\u4E1A\u52A1\u53D1\u5C55\u9700\u8981\uFF0C\u8BBE\u7F6E\u6216\u4FEE\u6539\u652F\u4ED8\u9650\u989D\uFF0C\u5BA2\u6237\u5BF9\u6B64\u65E0\u5F02\u8BAE\uFF0C\u5BA2\u6237\u529E\u7406\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u65F6\u9700\u540C\u65F6\u53D7\u4E2D\u56FD\u94F6\u884C\u548C  \uFF08\u5546\u6237\u540D\u79F0\uFF09   \u8BBE\u7F6E\u7684\u652F\u4ED8\u9650\u989D\u7684\u7EA6\u675F\u3002\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u652F\u4ED8\u91D1\u989D\u4E0D\u5E94\u8D85\u8FC7 \u4E2D\u56FD\u94F6\u884C\u6216  \uFF08\u5546\u6237\u540D\u79F0\uFF09   \u8BBE\u7F6E\u7684\u652F\u4ED8\u9650\u989D\uFF08\u4EE5\u8F83\u4F4E\u8005\u4E3A\u51C6\uFF09\u3002\u5982\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\u5927\u4E8E\u89C4\u5B9A\u7684\u652F\u4ED8\u9650\u989D\uFF0C\u4E2D\u56FD\u94F6\u884C\u5C06\u62D2\u7EDD\u6267\u884C\u4EA4\u6613\u6307\u4EE4\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "7.\u672C\u534F\u8BAE\u9879\u4E0B\uFF0C\u4E2D\u56FD\u94F6\u884C\u4EC5\u63D0\u4F9B\u901A\u8FC7  \uFF08\u5546\u6237\u540D\u79F0\uFF09   \u53D1\u751F\u7684\u652F\u4ED8\u7ED3\u7B97\u670D\u52A1\u3002",
    _react2.default.createElement(
      "span",
      { className: "weight" },
      "\u5BA2\u6237\u56E0\u901A\u8FC7  \uFF08\u5546\u6237\u540D\u79F0\uFF09 \u8D2D\u4E70\u5546\u54C1\u800C\u4EA7\u751F\u7684\u4E00\u5207\u5173\u4E8E\u5546\u54C1\u6216\u670D\u52A1\u8D28\u91CF\u3001\u5546\u54C1\u4EA4\u4ED8\uFF0C\u4EA4\u6613\u6B3E\u9879\u6263\u6536\u4E0E\u5212\u4ED8\u7684\u4E89\u8BAE\u5747\u7531\u5BA2\u6237\u4E0E\u5546\u6237\u6216\u5546\u54C1/\u670D\u52A1\u7684\u5B9E\u9645\u9500\u552E\u5546\u81EA\u884C\u534F\u5546\u89E3\u51B3\u3002"
    )
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "8.\u5BA2\u6237\u4E0D\u5F97\u5229\u7528\u4E2D\u56FD\u94F6\u884C\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u8FDB\u884C\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u3001\u8BC8\u9A97\u3001\u6050\u6016\u878D\u8D44\u7B49\u884C\u4E3A\uFF0C\u4E14\u6709\u4E49\u52A1\u914D\u5408\u4E2D\u56FD\u94F6\u884C\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\uFF0C\u4E00\u65E6\u5BA2\u6237\u62D2\u7EDD\u914D\u5408\u8FDB\u884C\u76F8\u5173\u8C03\u67E5\u6216\u4E2D\u56FD\u94F6\u884C\u8BA4\u4E3A\u5BA2\u6237\u5B58\u5728\u6216\u6D89\u5ACC\u865A\u5047\u4EA4\u6613\u3001\u6D17\u94B1\u3001\u5957\u73B0\u6216\u4EFB\u4F55\u5176\u4ED6\u975E\u6CD5\u6D3B\u52A8\u3001\u6B3A\u8BC8\u6216\u8FDD\u53CD\u8BDA\u4FE1\u539F\u5219\u7684\u884C\u4E3A\u3001\u6216\u8FDD\u53CD\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\uFF0C \u4E2D\u56FD\u94F6\u884C\u6709\u6743\u91C7\u53D6\u4EE5\u4E0B\u4E00\u79CD\u3001\u591A\u79CD\u6216\u5168\u90E8\u63AA\u65BD\uFF1A\uFF081\uFF09\u6682\u505C\u6216\u7EC8\u6B62\u63D0\u4F9B\u672C\u534F\u8BAE\u9879\u4E0B\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u670D\u52A1\uFF1B\uFF082\uFF09\u7EC8\u6B62\u672C\u534F\u8BAE\uFF1B\uFF083\uFF09\u53D6\u6D88\u5BA2\u6237\u7684\u7528\u5361\u8D44\u683C\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "9.\u5BA2\u6237\u540C\u610F\u4E2D\u56FD\u94F6\u884C\u5C31\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7684\u5F00\u5C55\uFF0C\u5411 \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u63D0\u4F9B\u5BA2\u6237\u7559\u5B58\u5728\u4E2D\u56FD\u94F6\u884C\u7684\u6237\u540D\u3001\u94F6\u884C\u5361\u53F7\u3001\u8BC1\u4EF6\u7C7B\u578B\u3001\u8BC1\u4EF6\u53F7\u7801\u3001\u624B\u673A\u53F7\u7801\u7B49\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "10.\u5BA2\u6237\u53EF\u4EE5\u767B\u5F55\u4E2D\u56FD\u94F6\u884C\u5B98\u65B9\u7F51\u7AD9\u64A4\u9500\u672C\u4EBA\u540D\u4E0B\u6307\u5B9A\u501F\u8BB0\u5361\u4E0E \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u8D26\u6237\u5173\u8054\u7684\u5FEB\u6377\u652F\u4ED8\u529F\u80FD\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "11.\u4E2D\u56FD\u94F6\u884C\u7CFB\u7EDF\u5347\u7EA7\u3001\u4E1A\u52A1\u53D8\u5316\u3001\u6536\u8D39\u53D8\u66F4\uFF0C\u6216\u6839\u636E\u4E1A\u52A1\u53D1\u5C55\u9700\u8981\u4FEE\u6539\u672C\u534F\u8BAE\uFF0C\u4E2D\u56FD\u94F6\u884C\u5C06\u63D0\u524D\u8FDB\u884C\u516C\u544A\u3002\u82E5\u5BA2\u6237\u6709\u5F02\u8BAE\uFF0C\u6709\u6743\u9009\u62E9\u64A4\u9500\u76F8\u5173\u670D\u52A1\uFF0C\u82E5\u5BA2\u6237\u9009\u62E9\u7EE7\u7EED\u63A5\u53D7\u8BE5\u670D\u52A1\u7684\uFF0C\u89C6\u4E3A\u5BA2\u6237\u540C\u610F\u5E76\u63A5\u53D7\u76F8\u5173\u4E1A\u52A1\u6216\u534F\u8BAE\u6309\u53D8\u66F4\u6216\u4FEE\u6539\u540E\u7684\u5185\u5BB9\u6267\u884C\u3002 \u53CC\u65B9\u540C\u610F\uFF0C\u672C\u534F\u8BAE\u6240\u79F0\u516C\u544A\u5747\u6307\u5728\u4E2D\u56FD\u94F6\u884C\u7F51\u70B9\u3001\u4E2D\u56FD\u94F6\u884C\u7F51\u7AD9\u3010http://www.boc.cn\u3011\u3001\u7535\u5B50\u94F6\u884C\u6E20\u9053\u7B49\u8FDB\u884C\u516C\u544A\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "12.\u5BA2\u6237\u5E94\u6309\u4E2D\u56FD\u94F6\u884C\u516C\u5E03\u7684\u6536\u8D39\u8981\u6C42\u6309\u65F6\u8DB3\u989D\u652F\u4ED8\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u670D\u52A1\u8D39\u53CA\u5176\u4ED6\u5404\u7C7B\u76F8\u5173\u8D39\u7528\uFF0C \u4E2D\u56FD\u94F6\u884C\u516C\u544A\u53D8\u66F4\u6536\u8D39\u8981\u6C42\u7684\uFF0C\u5BA2\u6237\u5728\u516C\u544A\u6267\u884C\u540E\u7EE7\u7EED\u529E\u7406\u5FEB\u6377\u652F\u4ED8\u4E1A\u52A1\u7684\uFF0C\u89C6\u540C\u63A5\u53D7\u53D8\u66F4\u5185\u5BB9\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "13.\u9009\u62E9\u6253\u52FE\u7684\u5BA2\u6237\uFF0C\u89C6\u540C\u5DF2\u901A\u8BFB\u4E0A\u8FF0\u6761\u6B3E\uFF0C\u5BF9\u6761\u6B3E\u7684\u5185\u5BB9\u53CA\u5176\u540E\u679C\u5DF2\u5145\u5206\u7406\u89E3\uFF0C\u5BF9\u6240\u6709\u5185\u5BB9\u5747\u65E0\u5F02\u8BAE\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content" },
    "14.\u672C\u534F\u8BAE\u5728\u5BA2\u6237\u5728  \uFF08\u5546\u6237\u540D\u79F0\uFF09    \u7F51\u7AD9\u9875\u9762\u70B9\u51FB\u201C\u786E\u8BA4\u5F00\u901A\u5E76\u4ED8\u6B3E\u201D\u540E\u751F\u6548\u3002\u672C\u534F\u8BAE\u7684\u751F\u6548\u3001\u5C65\u884C\u53CA\u89E3\u91CA\u5747\u4F7F\u7528\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\uFF08\u4E3A\u672C\u534F\u8BAE\u4E4B\u76EE\u7684\uFF0C\u4E0D\u542B\u4E2D\u56FD\u9999\u6E2F\u3001\u6FB3\u95E8\u3001\u53F0\u6E7E\u5730\u533A\u6CD5\u5F8B\uFF09\u3002"
  )
);

//用户授权委托书
var userAuthorization = _react2.default.createElement(
  "div",
  { className: "userAuthorization" },
  _react2.default.createElement(
    "div",
    { style: { fontSize: '18px', fontWeight: '800', textAlign: "center", margin: '30px 0 15px' } },
    "\u7528\u6237\u6388\u6743\u59D4\u6258\u4E66"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "\u672C\u6388\u6743\u59D4\u6258\u4E66\u4E00\u7ECF\u70B9\u51FB\u786E\u8BA4\uFF0C\u5373\u89C6\u4E3A\u60A8\uFF08\u4EE5\u4E0B\u53EF\u7B80\u79F0\u201C\u501F\u6B3E\u4EBA\u201D\uFF09\u5DF2\u5B8C\u5168\u7406\u89E3\u5E76\u540C\u610F\u6388\u6743\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u53EF\u7B80\u79F0\u201C\u8D37\u6B3E\u4EBA\u201D\uFF09\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C, \u60A8\u5BF9\u6B64\u53EF\u80FD\u5B58\u5728\u7684\u98CE\u9669\u53CA\u540E\u679C\u5DF2\u51C6\u786E\u3001\u6E05\u6670\u5730\u77E5\u6089\u548C\u7406\u89E3\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "1. \u501F\u6B3E\u4EBA\u540C\u610F\u5E76\u6388\u6743\u8D37\u6B3E\u4EBA\u53CA\u805A\u5B9D\u532F\u5E73\u53F0\u8FD0\u8425\u65B9\uFF0C\u5728\u8D37\u6B3E\u4EBA\u53D1\u653E\u8D37\u6B3E\u4E4B\u65F6\uFF0C\u6709\u6743\u51BB\u7ED3\u501F\u6B3E\u4EBA\u5728\u805A\u5B9D\u532F\u5E73\u53F0\u7684\u8D26\u6237\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u94F6\u884C\u5B58\u7BA1\u8D26\u6237\u7B49\uFF09\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "2. \u501F\u6B3E\u4EBA\u540D\u4E0B\u7684\u805A\u5B9D\u532F\u6295\u8D44\u4EA7\u54C1\u5728\u8D37\u6B3E\u4EBA\u7684\u8D37\u6B3E\u672C\u606F\u53CA\u5404\u9879\u8D39\u7528\u672A\u5B8C\u5168\u6E05\u507F\u524D\u63D0\u524D\u5151\u4ED8\u6216\u90E8\u5206\u5151\u4ED8\u7684\uFF0C\u5219\u5BF9\u5E94\u7684\u5151\u4ED8\u6B3E\u9879\u5C06\u4F5C\u4E3A\u4FDD\u8BC1\u91D1\u4E3A\u501F\u6B3E\u4EBA\u8D37\u6B3E\u672C \u606F\u53CA\u5404\u9879\u8D39\u7528\u63D0\u4F9B\u62C5\u4FDD\u3002\u8D37\u6B3E\u4EBA\u5C31\u8BE5\u5151\u4ED8\u6B3E\u9879\u4EAB\u6709\u4F18\u4E8E\u5176\u4ED6\u4EFB\u4F55\u503A\u6743\u4EBA\u7684\u53D7\u507F\u6743\u3002\u501F\u6B3E\u4EBA\u5E94\u5F53\u5C06\u5151\u4ED8\u8D44\u91D1\u4F18\u5148\u7528\u4E8E\u6E05\u507F\u501F\u6B3E\u4EBA\u5728\u8D37\u6B3E\u4EBA\u5904\u7684\u672A\u7ED3\u6E05\u8D37\u6B3E\u672C\u606F\u53CA\u5404\u9879\u8D39\u7528\uFF0C \u5E76\u4E0E\u8D37\u6B3E\u4EBA\u534F\u5546\u63D0\u524D\u5F52\u8FD8\u8D37\u6B3E\u4E8B\u5B9C\u3002\u5728\u53CC\u65B9\u5C31\u63D0\u524D\u5F52\u8FD8\u8D37\u6B3E\u4E8B\u5B9C\u672A\u8FBE\u6210\u4E00\u81F4\u524D\uFF0C\u501F\u6B3E\u4EBA\u4FDD\u8BC1\u4E0D\u5BF9\u5176\u6295\u8D44\u4EA7\u54C1\u7684\u5151\u4ED8\u6B3E\u9879\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F\u7684\u63D0\u73B0\u548C\u4F7F\u7528\uFF0C\u8D37\u6B3E\u4EBA\u4E0D\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F \u7684\u8D26\u6237\u89E3\u51BB\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u94F6\u884C\u5B58\u7BA1\u8D26\u6237\uFF09\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "3. \u501F\u6B3E\u4EBA\u540C\u610F\u5E76\u6388\u6743\u8D37\u6B3E\u4EBA\uFF0C\u5728\u501F\u6B3E\u4EBA\u8D37\u6B3E\u5B58\u7EED\u671F\u95F4\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u6839\u636E\u501F\u6B3E\u4EBA\u7684\u8D44\u4FE1\u60C5\u51B5\u53CA\u5C65\u7EA6\u60C5\u51B5\u51BB\u7ED3\u3001\u6263\u5212\u501F\u6B3E\u4EBA\u5728\u805A\u5B9D\u532F\u5E73\u53F0\u7684\u8D26\u6237 \uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u94F6\u884C\u5B58\u7BA1\u8D26\u6237\u7B49\uFF09\u53CA\u8D26\u6237\u5185\u8D44\u91D1\u7528\u4E8E\u507F\u8FD8\u501F\u6B3E\u4EBA\u672A\u5F52\u8FD8\u7684\u8D37\u6B3E\u672C\u606F\u53CA\u5404\u9879\u8D39\u7528\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "4. \u501F\u6B3E\u4EBA\u540C\u610F\u4EE5\u5176\u672C\u4EBA\u6301\u6709\u7684\u5728\u805A\u5B9D\u532F\u5E73\u53F0\u7684\u5168\u90E8\u6295\u8D44\u4EA7\u54C1\u6240\u5BF9\u5E94\u7684\u672C\u606F\u7B49\u5168\u90E8\u6536\u76CA\u4F5C\u4E3A\u5411\u8D37\u6B3E\u4EBA\u8D37\u6B3E\u7684\u8865\u5145\u8FD8\u6B3E\u6765\u6E90\u3002 \u501F\u6B3E\u4EBA\u6301\u6709\u7684\u5168\u90E8\u6295\u8D44\u4EA7\u54C1\u5728\u501F\u6B3E\u4EBA\u672A\u6E05\u507F\u5168\u90E8\u8D37\u6B3E\u672C\u606F\u524D\u4E0D\u5F97\u8F6C\u8BA9\u6216\u63D0\u524D\u8D4E\u56DE\u3002\u82E5\u501F\u6B3E\u4EBA\u6301\u6709\u7684\u4F5C\u4E3A\u8D37\u6B3E\u8865\u5145\u8FD8\u6B3E\u6765\u6E90\u7684\u6295\u8D44\u4EA7\u54C1 \u7684\u4EF7\u503C\u53D1\u751F\u4E86\u4E0D\u5229\u4E8E\u8D37\u6B3E\u4EBA\u53D8\u5316\u7684\uFF0C\u6216\u8005\u5BF9\u5E94\u5151\u4ED8\u6B3E\u9879\u5728\u8D37\u6B3E\u672A\u507F\u8FD8\u4E4B\u524D\u88AB\u53F8\u6CD5\u673A\u5173\u6216\u6CD5\u5F8B\u89C4\u5B9A\u7684\u5176\u4ED6\u673A\u5173\u91C7\u53D6\u51BB\u7ED3\u3001\u6263\u5212\u7B49\u63AA\u65BD\u7684\uFF0C \u8D37\u6B3E\u4EBA\u6709\u6743\u8981\u6C42\u501F\u6B3E\u4EBA\u63D0\u4F9B\u5176\u4ED6\u8FD8\u6B3E\u6765\u6E90\uFF0C\u5E76\u63D0\u4F9B\u76F8\u5E94\u7684\u62C5\u4FDD\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "5. \u501F\u6B3E\u4EBA\u540C\u610F\u8D37\u6B3E\u4EBA\u5BF9\u6295\u8D44\u4EA7\u54C1\u8F6C\u8BA9\u7684\u6240\u5F97\u4EF7\u6B3E\u4EAB\u6709\u4F18\u4E8E\u5176\u4ED6\u4EFB\u4F55\u503A\u6743\u4EBA\u7684\u53D7\u507F\u6743\u3002\u82E5\u501F\u6B3E\u4EBA\u672A\u5C65\u884C\u8D37\u6B3E\u5408\u540C\u4E49\u52A1\uFF0C \u6216\u5176\u6240\u6301\u6709\u5E76\u4F5C\u4E3A\u8865\u5145\u8FD8\u6B3E\u6765\u6E90\u7684\u6295\u8D44\u4EA7\u54C1\u903E\u671F\u6216\u4EF7\u503C\u51CF\u5C11\u7B49\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u8981\u6C42\u501F\u6B3E\u4EBA\u901A\u8FC7\u5728\u805A\u5B9D\u532F\u5E73\u53F0\u8F6C\u8BA9\u5176\u6295\u8D44\u4EA7\u54C1\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "6. \u501F\u6B3E\u4EBA\u540C\u610F\u6309\u8D37\u6B3E\u4EBA\u8981\u6C42\u8F6C\u8BA9\u5904\u7F6E\u6295\u8D44\u4EA7\u54C1\u65F6\uFF0C\u5E94\u51C6\u786E\u3001\u5B8C\u6574\u5730\u8BA4\u8BC6\u5230\uFF0C\u901A\u8FC7\u8F6C\u8BA9\u7684\u65B9\u5F0F\u5904\u7F6E\u6295\u8D44\u4EA7\u54C1\u53EF\u80FD\u5B58\u5728 \u4E00\u5B9A\u60C5\u51B5\u4E0B\u4F4E\u4E8E\u672C\u606F\u6216\u5176\u4ED6\u6536\u76CA\u7684\u98CE\u9669\uFF0C\u501F\u6B3E\u4EBA\u5BF9\u6B64\u4E88\u4EE5\u8BA4\u53EF\u4E14\u627F\u8BFA\u4E0D\u4EE5\u6B64\u63D0\u51FA\u6B3A\u8BC8\u3001\u8BEF\u5BFC\u3001\u4FB5\u6743\u3001\u8D54\u507F\u3001\u7533\u8BF7\u64A4\u9500\u6216\u65E0\u6548\u7B49\u6297\u8FA9\u6216\u4E3B\u5F20\u3002\u8F6C\u8BA9\u5B8C\u6BD5\u540E\uFF0C\u8F6C\u8BA9\u6240\u5F97\u4EF7\u6B3E\u6309\u672C\u5408\u540C\u7EA6\u5B9A\u8FDB\u884C\u8FD8\u6B3E\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight" },
    "7\uFF0E\u5982\u4F5C\u4E3A\u501F\u6B3E\u4EBA\u8D37\u6B3E\u8865\u5145\u8FD8\u6B3E\u6765\u6E90\u7684\u6295\u8D44\u4EA7\u54C1\u53D1\u751F\u5EF6\u671F\u5151\u4ED8\u3001\u90E8\u5206\u5151\u4ED8\u3001\u90E8\u5206\u5EF6\u671F\u5151\u4ED8\u3001\u4E0D\u5151\u4ED8\u7B49\u60C5\u5F62\uFF0C\u501F\u6B3E\u4EBA\u5E94\u53CA\u65F6\u63D0\u4F9B\u5176\u4ED6\u8FD8\u6B3E\u6765\u6E90\u53CA\u76F8\u5E94\u62C5\u4FDD\u3002 \u5BF9\u501F\u6B3E\u4EBA\u65E0\u6CD5\u6309\u671F\u8DB3\u989D\u507F\u8FD8\u8D37\u6B3E\u672C\u606F\uFF08\u542B\u8D39\u7528\uFF09\u6240\u4EA7\u751F\u7684\u7F5A\u606F\u3001\u8FDD\u7EA6\u91D1\u7B49\u60C5\u51B5\uFF0C\u8D37\u6B3E\u4EBA\u6709\u6743\u6309\u7EA6\u5B9A\u8FDB\u884C\u901A\u62A5\u3001\u62AB\u9732\u548C\u8FFD\u507F\u3002"
  ),
  _react2.default.createElement(
    "div",
    { className: "content weight", style: { textAlign: 'right', paddingRight: '50px' } },
    "\u6388\u6743\u4EBA\u7B7E\u7AE0\uFF1A"
  )
);

//隐私协议 旧版
var privacyProtocol2 = _react2.default.createElement(
  "div",
  { className: "declare_centent" },
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA0\u4E3A\u5C0A\u91CD\u548C\u4FDD\u62A4\u6240\u6709\u4F7F\u7528\u670D\u52A1\u7528\u6237\u7684\u9690\u79C1\uFF0C\u672C\u9690\u79C1\u534F\u8BAE\u5C06\u544A\u8BC9\u60A8\u6211\u4EEC\u5982\u4F55\u6536\u96C6\u3001\u4F7F\u7528\u3001\u5B58\u50A8\u3001\u5206\u4EAB\u6709\u5173\u60A8\u7684\u4FE1\u606F\uFF0C\u4EE5\u53CA\u6211\u4EEC\u5982\u4F55\u4FDD\u62A4\u8FD9\u4E9B\u4FE1\u606F\u7684\u5B89\u5168\u3002 \u60A8\u6210\u4E3A\u822A\u65C5\u5206\u671F\u7528\u6237\u524D\u52A1\u5FC5\u4ED4\u7EC6\u9605\u8BFB\u672C\u9690\u79C1\u534F\u8BAE\u5E76\u540C\u610F\u6240\u6709\u6761\u6B3E\u3002\u672C\u9690\u79C1\u534F\u8BAE\u4F5C\u4E3A\u672C\u5E94\u7528\u6CE8\u518C\u534F\u8BAE\u7684\u9644\u4EF6\uFF0C\u5728\u60A8\u6CE8\u518C\u6210\u4E3A\u672C\u5E94\u7528\u7528\u6237\u540E\u7ACB\u5373\u751F\u6548\uFF0C \u5E76\u5BF9\u60A8\u53CA\u672C\u5E94\u7528\u4EA7\u751F\u7EA6\u675F\u529B\u3002\u672C\u5E94\u7528\u8FD0\u8425\u8005\u4E3A\uFF1A",
    _react2.default.createElement(
      "span",
      null,
      "\u5317\u4EAC\u805A\u5B9D\u5C0F\u989D\u8D37\u6B3E\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u805A\u5B9D\u5C0F\u8D37\u201D\uFF09"
    ),
    "\uFF0C\u6CE8\u518C\u5730\u5740\uFF1A",
    _react2.default.createElement(
      "span",
      null,
      "\u5317\u4EAC\u5E02\u623F\u5C71\u533A\u897F\u6F5E\u8857\u9053\u957F\u8679\u897F\u8DEF73\u53F71\u5E622\u5C42"
    ),
    "\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA0\u4E00\u3001 \u6211\u4EEC\u6536\u96C6\u7528\u6237\u7684\u54EA\u4E9B\u4FE1\u606F"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u6211\u4EEC\u53EF\u80FD\u6536\u96C6\u5E76\u5B58\u50A8\u60A8\u5728\u4F7F\u7528\u822A\u65C5\u5206\u671F\u5E73\u53F0\u63D0\u4F9B\u7684\u6D88\u8D39\u91D1\u878D\u670D\u52A1\uFF08\u5305\u62EC\u822A\u65C5\u5206\u671FAPP\u63D0\u4F9B\u7684\u670D\u52A1\u53CA\u6D77\u5357\u822A\u7A7AAPP\u91CC\u7684\u6D77\u822A\u767D\u6761\u670D\u52A1\uFF0C\u4EE5\u4E0B\u7B80\u79F0\u201C\u822A\u65C5\u5206\u671F\u670D\u52A1\u201D\uFF09\u65F6\u5411\u6211\u4EEC\u63D0\u4F9B\u7684\u4EFB\u4F55\u4FE1\u606F\uFF0C \u5305\u62EC\u60A8\u5728\u6211\u4EEC\u9875\u9762\u4E2D\u5728\u7EBF\u586B\u5199\u4FE1\u606F\u6216\u5C31\u822A\u65C5\u5206\u671F\u670D\u52A1\u4E0E\u6211\u4EEC\u8054\u7CFB\u65F6\u6240\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u4EE5\u53CA\u60A8\u5728\u4F7F\u7528\u6211\u4EEC\u670D\u52A1\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5173\u4E8E\u60A8\u7684\u4EA4\u6613\u4FE1\u606F\u53CA\u7B2C\u4E09\u65B9\u5F81\u4FE1\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA01.\u4E3A\u4E86\u5B8C\u6210\u4F1A\u5458\u8D26\u6237\u7684\u521B\u5EFA\u3001\u5173\u8054\u6216\u767B\u5F55\uFF0C\u6211\u4EEC\u5C06\u6536\u96C6\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u6216\u6D77\u5357\u822A\u7A7AAPP\u521B\u5EFA\u822A\u65C5\u5206\u671F\u670D\u52A1\u4F1A\u5458\u8D26\u6237\u65F6\u5411\u822A\u65C5\u5206\u671F\u5E73\u53F0\u63D0\u4F9B\u7684\u5404\u7C7B\u4FE1\u606F\uFF0C \u5982",
    _react2.default.createElement(
      "span",
      null,
      "\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u53F7\u3001\u94F6\u884C\u5361\u53F7\u3001\u91D1\u9E4F\u4F1A\u5458\u5361\u53F7\u3001\u624B\u673A\u53F7\u7801\u3001\u8054\u7CFB\u5730\u5740\u3001\u7535\u5B50\u90AE\u7BB1\u3001\u6307\u7EB9\u4FE1\u606F\u3001\u9762\u90E8\u7279\u5F81\u4FE1\u606F\u3001\u7B49\u4FE1\u606F"
    ),
    "\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA02.\u4E3A\u4E86\u63D0\u9AD8\u60A8\u4F7F\u7528\u6211\u4EEC\u670D\u52A1\u7684\u5B89\u5168\u6027\uFF0C\u9632\u6B62\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u88AB\u4E0D\u6CD5\u5206\u5B50\u83B7\u53D6\uFF0C\u540C\u65F6\u4E5F\u662F\u4E3A\u4E86\u63D0\u9AD8\u822A\u65C5\u5206\u671F\u5E73\u53F0\u7684\u670D\u52A1\u8D28\u91CF\u548C\u7528\u6237\u4F53\u9A8C\uFF0C \u6211\u4EEC\u4F1A\u63A5\u53D7\u5E76\u8BB0\u5F55\u60A8\u4F7F\u7528\u7684\u8BBE\u5907\u76F8\u5173\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u8BBE\u5907\u4FE1\u606F\u5305\u62EC\uFF1A",
    _react2.default.createElement(
      "span",
      null,
      "\u8BBE\u5907\u5C5E\u6027\u4FE1\u606F"
    ),
    "\uFF08\u5982\u8BBE\u5907\u54C1\u724C\u53CA\u578B\u53F7\u3001\u8BBE\u5907\u5C4F\u5E55\u89C4\u683C\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u3001\u8BBE\u5907\u8BBE\u7F6E\u3001\u552F\u4E00\u8BBE\u5907\u6807\u8BC6\u7B26\u7B49\u8F6F\u786C\u4EF6\u7279\u5F81\u4FE1\u606F\uFF09\u3001",
    _react2.default.createElement(
      "span",
      null,
      "\u8BBE\u5907\u4F4D\u7F6E\u4FE1\u606F"
    ),
    "\uFF08\u5982\u901A\u8FC7GPS\u3001\u84DD\u7259\u6216WIFI\u4FE1\u53F7\u83B7\u5F97\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF09\u3001",
    _react2.default.createElement(
      "span",
      null,
      "\u8BBE\u5907\u8FDE\u63A5\u4FE1\u606F"
    ),
    "\uFF08IP\u5730\u5740\u3001\u6D4F\u89C8\u5668\u7684\u7C7B\u578B\u3001\u7535\u4FE1\u8FD0\u8425\u5546\u3001\u4F7F\u7528\u7684\u8BED\u8A00\u3001\u8BBF\u95EE\u65E5\u671F\u548C\u65F6\u95F4\u53CA\u60A8\u9700\u6C42\u7684\u7F51\u9875\u8BB0\u5F55\u7B49\uFF09\u53CA",
    _react2.default.createElement(
      "span",
      null,
      "\u7528\u6237\u884C\u4E3A\u4FE1\u606F"
    ),
    "\uFF08\u5E7F\u544A\u8DDF\u8E2AID\u3001\u5E7F\u544A\u70B9\u51FB\u60C5\u51B5\u3001\u9875\u9762\u70B9\u51FB\u9891\u6B21\u3001\u9875\u9762\u505C\u7559\u65F6\u95F4\u3001\u8BBF\u95EE\u8DEF\u5F84\u7B49\uFF09\u3002\u5BF9\u4E8E\u4ECE\u60A8\u7684\u5404\u79CD\u8BBE\u5907\u4E0A\u6536\u96C6\u5230\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u5B83\u4EEC\u8FDB\u884C\u5173\u8054\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u80FD\u5728\u60A8\u7684\u8BBE\u5907\u4E0A\u4E3A\u60A8\u63D0\u4F9B\u4E00\u81F4\u7684\u670D\u52A1\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA03.",
    _react2.default.createElement(
      "span",
      null,
      "\u5F53\u60A8\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u670D\u52A1\u65F6"
    ),
    "\uFF0C\u60A8\u9700\u8FDB\u884C\u6388\u4FE1\u3001\u652F\u7528\u3001\u8FD8\u6B3E\u3001\u63D0\u989D\u3001\u4EE5\u53CA\u66F4\u6362\u3001\u89E3\u7ED1\u94F6\u884C\u5361\u7B49\u64CD\u4F5C\uFF0C\u6211\u4EEC\u548C/\u6216\u6211\u4EEC\u59D4\u6258\u7684\u7B2C\u4E09\u65B9\u6E20\u9053\u5C06\u6536\u96C6\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F\uFF0C \u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u59D3\u540D/\u540D\u79F0\u3001\u8BC1\u4EF6\u53F7\u7801\u3001\u8BC1\u4EF6\u7C7B\u578B\u3001\u4F4F\u6240\u5730\u3001\u7535\u8BDD\u53F7\u7801\u3001\u94F6\u884C\u8D26\u6237\u8BA4\u8BC1\u4FE1\u606F\u3001\u751F\u7269\u7279\u5F81\u4EE5\u53CA\u5176\u4ED6\u8EAB\u4EFD\u4FE1\u606F\uFF1B\u60A8\u5728\u7533\u8BF7\u3001\u4F7F\u7528\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u65F6\u6240\u63D0\u4F9B\u4EE5\u53CA\u5F62\u6210\u7684\u4EFB\u4F55\u6570\u636E \u548C\u4FE1\u606F\uFF1B\u60A8\u5728\u822A\u65C5\u5206\u671FAPP\u5173\u8054\u516C\u53F8\u548C\u5408\u4F5C\u4F19\u4F34\u5904\u4E2D\u7559\u5B58\u4EE5\u53CA\u5F62\u6210\u7684\u4EFB\u4F55\u6570\u636E\u548C\u4FE1\u606F\uFF1B\u60A8\u7684\u4FE1\u7528\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u5F81\u4FE1\u8BB0\u5F55\u548C\u4FE1\u7528\u62A5\u544A\uFF1B\u60A8\u7684\u8D22\u4EA7\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u8D22\u7A0E\u4FE1\u606F \u3001\u623F\u4EA7\u4FE1\u606F\u3001\u8F66\u8F86\u4FE1\u606F\u3001\u516C\u79EF\u91D1\u4FE1\u606F\u3001\u793E\u4FDD\u4FE1\u606F\u3001\u57FA\u91D1\u3001\u4FDD\u9669\u3001\u80A1\u7968\u3001\u4FE1\u6258\u3001\u503A\u5238\u7B49\u6295\u8D44\u7406\u8D22\u4FE1\u606F\u548C\u8D1F\u503A\u4FE1\u606F\u7B49\uFF1B\u60A8\u5728\u884C\u653F\u673A\u5173\u3001\u53F8\u6CD5\u673A\u5173\u7559\u5B58\u7684\u4EFB\u4F55\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6237\u7C4D\u4FE1\u606F/\u5DE5\u5546 \u4FE1\u606F\u3001\u8BC9\u8BBC\u4FE1\u606F\u3001\u6267\u884C\u4FE1\u606F\u548C\u8FDD\u6CD5\u72AF\u7F6A\u4FE1\u606F\u7B49\uFF1B\u4E0E\u60A8\u7533\u8BF7\u6216\u4F7F\u7528\u7684\u822A\u65C5\u5206\u671FAPP\u670D\u52A1\u76F8\u5173\u7684\u3001\u60A8\u7559\u5B58\u7684\u5176\u4ED6\u81EA\u7136\u4EBA\u3001\u6CD5\u4EBA\u548C\u7EC4\u7EC7\u7684\u5176\u4ED6\u76F8\u5173\u4FE1\u606F\uFF1B\u60A8\u8BBF\u95EE\u822A\u65C5\u5206\u671FAPP\u7F51\u7AD9\u53CA\u5176\u76F8\u5173\u7F51\u7AD9\u3001 \u79FB\u52A8\u8BBE\u5907\u5BA2\u6237\u7AEF\u65F6\uFF0C\u6216\u4F7F\u7528\u672C\u670D\u52A1\u65F6\u7684\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u8BA1\u7B97\u673AIP\u5730\u5740\u3001\u8BBE\u5907\u6807\u8BC6\u7B26\u3001\u786C\u4EF6\u578B\u53F7\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u3001\u60A8\u7684\u4F4D\u7F6E\u7B49\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA04.\u4E3A\u4F7F\u60A8\u5728\u822A\u65C5\u5206\u671F\u7684\u670D\u52A1\u4F53\u9A8C\u66F4\u4E3A\u4FBF\u6377\u3001\u987A\u7545\uFF0C\u4EE5\u4E0B\u822A\u65C5\u5206\u671F\u5F53\u524D\u5DF2\u7ECF\u63D0\u4F9B\u7684\u529F\u80FD\u4E2D\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u60A8\u53EF\u9009\u62E9\u662F\u5426\u6388\u6743\u6211\u4EEC\u5F00\u901A\u4EE5\u4E0B\u6743\u9650\uFF1A",
    _react2.default.createElement("br", null),
    "\xA0\xA0\xA0\xA0\xA0(i)",
    _react2.default.createElement(
      "span",
      null,
      "\u57FA\u4E8E\u76F8\u518C\u7684\u529F\u80FD"
    ),
    "\uFF1A\u60A8\u53EF\u4F7F\u7528\u7528\u6237\u53CD\u9988\u56FE\u50CF\u4E0A\u4F20\u7B49\u670D\u52A1\uFF1B",
    _react2.default.createElement("br", null),
    "\xA0\xA0\xA0\xA0\xA0(ii)",
    _react2.default.createElement(
      "span",
      null,
      "\u57FA\u4E8E\u5730\u7406\u4F4D\u7F6E\u7684\u529F\u80FD"
    ),
    "\uFF1A\u60A8\u53EF\u5F00\u542F\u5B9A\u4F4D\u670D\u52A1\uFF0C\u4EE5\u4FBF\u822A\u65C5\u5206\u671F\u6216\u8005\u822A\u65C5\u5206\u671F\u7684\u5408\u4F5C\u673A\u6784\u66F4\u597D\u5730\u9075\u5B88\u76D1\u7BA1\u89C4\u5B9A\u5C65\u884C\u53CD\u6D17\u94B1\u548C\u53EF\u7591\u4EA4\u6613\u62A5\u9001\u7B49\u4E49\u52A1\uFF1B",
    _react2.default.createElement("br", null),
    "\xA0\xA0\xA0\xA0\xA0(iii)",
    _react2.default.createElement(
      "span",
      null,
      "\u57FA\u4E8E\u6307\u7EB9\u7684\u529F\u80FD"
    ),
    "\uFF1A\u60A8\u53EF\u6388\u6743\u8C03\u53D6\u60A8\u4F7F\u7528\u7684\u8BBE\u5907\u7684\u6307\u7EB9\u9A8C\u8BC1\u7CFB\u7EDF\uFF0C\u5E2E\u52A9\u822A\u65C5\u5206\u671F\u6216\u8005\u822A\u65C5\u5206\u671F\u7684\u5408\u4F5C\u673A\u6784\u5B8C\u6210\u4E2A\u4EBA\u8EAB\u4EFD\u8BC6\u522B\u3001\u767B\u5F55\u3001\u9A8C\u8BC1\u3001\u786E\u6743\u7B49\u6307\u4EE4\u64CD\u4F5C\u3002 \u4E0A\u8FF0\u529F\u80FD\u53EF\u80FD\u9700\u8981\u60A8\u5728\u60A8\u7684\u8BBE\u5907\u4E2D\u5411\u6211\u4EEC\u5F00\u542F\u60A8\u7684\u76F8\u518C\u3001\u5730\u7406\u4F4D\u7F6E\uFF08\u5B9A\u4F4D\uFF09\u7B49\u529F\u80FD\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u4EE5\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u6240\u6D89\u53CA\u7684\u4FE1\u606F\u7684\u6536\u96C6\u548C\u4F7F\u7528\u3002\u60A8\u786E\u8BA4\u5E76\u540C\u610F\u5F00\u542F\u8FD9\u4E9B\u6743\u9650\u5373\u4EE3\u8868\u60A8\u6388\u6743 \u6211\u4EEC\u53EF\u4EE5\u6536\u96C6\u548C\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u5B9E\u73B0\u4E0A\u8FF0\u529F\u80FD\uFF1B\u60A8\u4E5F\u53EF\u4EE5\u9075\u5FAA\u60A8\u4F7F\u7528\u8BBE\u5907\u7684\u64CD\u4F5C\u7CFB\u7EDF\u6307\u793A\u53D6\u6D88\u8FD9\u4E9B\u6388\u6743\uFF0C\u5219\u6211\u4EEC\u5C06\u4E0D\u518D\u7EE7\u7EED\u6536\u96C6\u548C\u4F7F\u7528\u60A8\u7684\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u4E5F\u65E0\u6CD5\u4E3A\u60A8\u63D0\u4F9B\u4E0A\u8FF0\u4E0E\u8FD9\u4E9B\u6388\u6743\u6240 \u5BF9\u5E94\u7684\u529F\u80FD\uFF0C\u4F46\u8FD9\u4E0D\u4F1A\u5BF9\u60A8\u4F7F\u7528\u822A\u65C5\u5206\u671F\u5176\u4ED6\u670D\u52A1\u4EA7\u751F\u5F71\u54CD\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA0\u4E8C\u3001 \u7528\u6237\u4FE1\u606F\u5982\u4F55\u4F7F\u7528"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u6211\u4EEC\u6536\u96C6\u60A8\u4FE1\u606F\u7684\u76EE\u7684\u4E3B\u8981\u662F\u4E3A\u4E86\u5411\u60A8\u63D0\u4F9B\u5B89\u5168\u3001\u9AD8\u6548\u4EE5\u53CA\u4E2A\u6027\u5316\u7684\u670D\u52A1\u4F53\u9A8C\u3002\u6211\u4EEC\u4F1A\u51FA\u4E8E\u4EE5\u4E0B\u76EE\u7684\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1A",
    " "
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA01\u3001\u8FDB\u884C\u5B9E\u540D\u5236\u7BA1\u7406 "
  ),
  _react2.default.createElement(
    "p",
    null,
    _react2.default.createElement(
      "span",
      null,
      "\u60A8\u5728\u4F7F\u7528\u822A\u65C5\u5206\u671F\u670D\u52A1\u65F6\u6211\u4EEC\u9700\u8981\u9996\u5148\u8BA4\u8BC1\u60A8\u8EAB\u4EFD\u7684\u771F\u5B9E\u6027\uFF0C\u4E3A\u6B64\u60A8\u9700\u8981\u63D0\u4F9B\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F\u3001\u94F6\u884C\u5361\u4FE1\u606F\u3001\u9762\u90E8\u7279\u5F81\u53CA\u624B\u673A\u53F7\u3002"
    ),
    "\u6211\u4EEC\u4F1A\u5C06\u4E0A\u8FF0\u4FE1\u606F\u63D0\u4EA4\u7ED9\u5408\u6CD5\u6301\u6709\u60A8\u4E0A\u8FF0\u4FE1\u606F\u7684\u7B2C\u4E09\u65B9\u8EAB\u4EFD\u9A8C\u8BC1\u673A\u6784\uFF0C\u4EE5\u4FBF\u5BF9\u60A8\u6240\u63D0\u4F9B\u4FE1\u606F\u7684\u51C6\u786E\u6027\u8FDB\u884C\u6838\u5BF9\u3002\u5982\u679C\u60A8\u4E0D\u63D0\u4F9B\u4E0A\u8FF0\u4FE1\u606F\u5219 \u65E0\u6CD5\u4F7F\u7528\u6839\u636E\u4E2D\u56FD\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u5FC5\u987B\u8FDB\u884C\u5B9E\u540D\u5236\u7BA1\u7406\u7684\u76F8\u5173\u91D1\u878D\u670D\u52A1\uFF0C\u5177\u4F53\u5305\u62EC\uFF1A\u4FE1\u8D37\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA02\u3001\u4E3A\u5411\u60A8\u63D0\u4F9B\u66F4\u6709\u9488\u5BF9\u6027\u7684\u670D\u52A1"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u5728\u60A8\u4F7F\u7528\u822A\u65C5\u5206\u671F\u670D\u52A1\u7684\u8FC7\u7A0B\u4E2D\u5411\u60A8\u53D1\u9001\u670D\u52A1\u72B6\u6001\u7684\u901A\u77E5\u53CA\u5176\u4ED6\u5546\u4E1A\u6027\u7535\u5B50\u4FE1\u606F\u6216\u5411\u60A8\u63D0\u4F9B\u4E0E\u60A8\u66F4\u52A0\u76F8\u5173\u7684\u5E7F\u544A\u3002\u5982\u4E0D\u9700\u8981\u822A\u65C5\u5206\u671F\u5E73\u53F0\u63A8\u9001\u76F8\u5173\u4FE1\u606F\uFF0C\u60A8\u53EF\u8054\u7CFB\u822A\u65C5\u5206\u671F\u5E73\u53F0\u53D6\u6D88\u3001 \u9000\u8BA2\u8BE5\u4FE1\u606F\u63A8\u9001\u670D\u52A1\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA03\u3001\u4E3A\u5411\u60A8\u63D0\u4F9B\u9002\u5408\u4E8E\u60A8\u7684\u670D\u52A1"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u4E3A\u5411\u60A8\u63D0\u4F9B\u9002\u5408\u4E8E\u60A8\u7684\u670D\u52A1\uFF0C\u5E76\u6301\u7EED\u7EF4\u62A4\u3001\u6539\u5584\u3001\u4F18\u5316\u8FD9\u4E9B\u670D\u52A1\uFF0C\u5BF9\u60A8\u7684\u4FE1\u606F\u8FDB\u884C\u5206\u6790\u548C\u5904\u7406\uFF0C\u6216\u5C06\u60A8\u7684\u4FE1\u606F\u7528\u4E8E\u6570\u636E\u5EFA\u6A21\u3002",
    " "
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA04\u3001\u4E3A\u60A8\u63D0\u4F9B\u60A8\u9009\u62E9\u7684\u822A\u65C5\u5206\u671F\u76F8\u5173\u670D\u52A1",
    " "
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u5728\u60A8\u4F7F\u7528\u822A\u65C5\u5206\u671F\u5E73\u53F0\u4E0A\u7684\u670D\u52A1\u65F6\uFF0C\u60A8\u540C\u610F\u5E76\u6388\u6743\u822A\u65C5\u5206\u671F\u5E73\u53F0\u5C06\u60A8\u7684\u4FE1\u606F\u7528\u4E8E\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5982\u4E0B\u7528\u9014\uFF1A\u521B\u5EFA\u6570\u636E\u5206\u6790\u6A21\u578B\uFF0C \u4E3A\u60A8\u63D0\u4F9B\u9002\u5408\u4E8E\u60A8\u7684\u670D\u52A1\uFF0C\u5E76\u7EF4\u62A4\u3001\u6539\u8FDB\u8FD9\u4E9B\u670D\u52A1\uFF1B\u6BD4\u8F83\u4FE1\u606F\u7684\u51C6\u786E\u6027\u5E76\u4E0E\u7B2C\u4E09\u65B9\u8FDB\u884C\u9A8C\u8BC1\uFF1B\u4E3A\u4F7F\u60A8\u77E5\u6653\u822A\u65C5\u5206\u671F\u670D\u52A1\u60C5\u51B5\u6216\u4E86\u89E3\u822A\u65C5\u5206\u671F\u670D\u52A1\uFF0C \u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u3001\u822A\u65C5\u5206\u671F\u7684\u7AD9\u5185\u4FE1/\u7CFB\u7EDF\u4FE1\u606F\u3001\u624B\u673A\u77ED\u4FE1\u548C\u4F20\u771F\u7B49\u65B9\u5F0F\u5411\u60A8\u53D1\u9001\u670D\u52A1\u72B6\u6001\u7684\u901A\u77E5\u3001\u8425\u9500\u6D3B\u52A8\u53CA\u5176\u4ED6\u5546\u4E1A\u6027\u7535\u5B50\u4FE1\u606F\uFF1B\u9884\u9632\u6216\u963B\u6B62\u975E\u6CD5\u7684\u6D3B\u52A8\uFF1B\u7ECF\u60A8\u8BB8\u53EF\u7684\u5176\u4ED6\u7528\u9014\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA05\u3001\u63D0\u4F9B\u5BA2\u6237\u670D\u52A1\u53CA\u8FDB\u884C\u6295\u8BC9\u5904\u7406",
    " "
  ),
  _react2.default.createElement(
    "p",
    null,
    _react2.default.createElement(
      "span",
      null,
      "\u6211\u4EEC\u7684\u5BA2\u670D\u7CFB\u7EDF\u4F1A\u4F7F\u7528\u60A8\u7684\u8D26\u53F7\u4FE1\u606F\u548C\u4EA4\u6613\u4FE1\u606F"
    ),
    "\u3002\u4E3A\u4FDD\u8BC1\u60A8\u7684\u8D26\u53F7\u5B89\u5168\uFF0C\u6211\u4EEC\u7684\u547C\u53EB\u4E2D\u5FC3\u5BA2\u670D\u548C\u5728\u7EBF\u5BA2\u670D\u4F1A\u4F7F\u7528\u60A8\u7684\u8D26\u53F7\u4FE1\u606F\u4E0E\u60A8\u6838\u9A8C\u60A8\u7684\u8EAB\u4EFD\u3002 \u5F53\u60A8\u9700\u8981\u6211\u4EEC\u63D0\u4F9B\u4E0E\u60A8\u4EA4\u6613\u4FE1\u606F\u76F8\u5173\u7684\u5BA2\u670D\u4E0E\u552E\u540E\u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u5C06\u4F1A\u67E5\u8BE2\u60A8\u7684\u4EA4\u6613\u4FE1\u606F\u3002 \u4E3A\u4E86\u4FDD\u8BC1\u60A8\u53CA\u4ED6\u4EBA\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u5982\u60A8\u88AB\u4ED6\u4EBA\u6295\u8BC9\u6216\u6295\u8BC9\u4ED6\u4EBA\uFF0C\u6211\u4EEC\u4F1A\u5C06\u60A8\u7684",
    _react2.default.createElement(
      "span",
      null,
      "\u59D3\u540D\u53CA\u8EAB\u4EFD\u8BC1\u53F7\u7801"
    ),
    "\u3001\u6295\u8BC9\u76F8\u5173\u5185\u5BB9\u63D0\u4F9B\u7ED9\u6D88\u8D39\u8005\u6743\u76CA\u4FDD\u62A4\u90E8\u95E8\u53CA\u76D1\u7BA1\u673A\u5173\uFF0C\u4EE5\u4FBF\u53CA\u65F6\u89E3\u51B3\u6295\u8BC9\u7EA0\u7EB7\uFF0C \u4F46\u6CD5\u5F8B\u6CD5\u89C4\u660E\u786E\u7981\u6B62\u63D0\u4F9B\u7684\u9664\u5916\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA06\u3001\u6539\u8FDB\u6211\u4EEC\u7684\u4EA7\u54C1\u4EE5\u4E3A\u60A8\u63D0\u4F9B\u66F4\u4E3A\u4E2A\u6027\u5316\u7684\u670D\u52A1"
  ),
  _react2.default.createElement(
    "p",
    null,
    _react2.default.createElement(
      "span",
      null,
      "\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u60A8\u7684\u4EA4\u6613\u4FE1\u606F\u3001\u6D4F\u89C8\u4FE1\u606F\u3001\u60A8\u7684\u5173\u6CE8\u4FE1\u606F\u8FDB\u884C\u6570\u636E\u5206\u6790\u4EE5\u5F62\u6210\u7528\u6237\u753B\u50CF\uFF0C\u7528\u6765\u5C06\u60A8\u611F\u5174\u8DA3\u7684\u4EA7\u54C1\u6216\u670D\u52A1\u4FE1\u606F\u5C55\u793A\u7ED9\u60A8\u3002"
    ),
    "\u6211\u4EEC\u8FD8\u53EF\u80FD\u4E3A\u4E86\u63D0\u4F9B\u670D\u52A1\u53CA\u6539\u8FDB\u670D\u52A1\u8D28\u91CF\u7684\u5408\u7406\u9700\u8981\u800C\u83B7\u5F97\u60A8\u4E0E\u5BA2\u670D\u8054\u7CFB\u65F6\u60A8\u63D0\u4F9B\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u60A8\u53C2\u4E0E\u95EE\u5377\u8C03\u67E5\u65F6\u5411\u6211\u4EEC\u53D1\u9001\u7684\u95EE\u5377\u7B54\u590D\u4FE1\u606F\u3002 \u5BF9\u4E8E\u4ECE\u60A8\u7684\u5404\u79CD\u8BBE\u5907\u4E0A\u6536\u96C6\u5230\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u5B83\u4EEC\u8FDB\u884C\u5173\u8054\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u80FD\u5728\u8FD9\u4E9B\u8BBE\u5907\u4E0A\u4E3A\u60A8\u63D0\u4F9B\u4E00\u81F4\u7684\u670D\u52A1\u3002\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u6765\u81EA\u67D0\u9879\u670D\u52A1\u7684\u4FE1\u606F\u4E0E\u6765\u81EA\u5176\u4ED6\u670D\u52A1\u7684\u4FE1\u606F\u7ED3\u5408\u8D77\u6765\uFF0C \u4EE5\u4FBF\u4E3A\u60A8\u63D0\u4F9B\u670D\u52A1\u3001\u4E2A\u6027\u5316\u5185\u5BB9\u548C\u5EFA\u8BAE\u3002\u4E0E\u4E2A\u6027\u5316\u670D\u52A1\u76F8\u5173\u7684\u753B\u50CF\u4FE1\u606F\u5C06\u6309\u7167\u672C\u9690\u79C1\u653F\u7B56\u4E0E\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u540C\u7B49\u4FDD\u62A4\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    " ",
    "\xA0\xA0\xA0\xA0\xA07\u3001\u4FDD\u969C\u4EA4\u6613\u5B89\u5168\u6240\u5FC5\u987B\u7684\u529F\u80FD",
    " "
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u4E3A\u63D0\u9AD8\u60A8\u4F7F\u7528\u6211\u4EEC\u7684\u4EA7\u54C1\u4E0E/\u6216\u670D\u52A1\u65F6\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\uFF0C\u66F4\u51C6\u786E\u5730\u9884\u9632\u9493\u9C7C\u7F51\u7AD9\u6B3A\u8BC8\u548C\u4FDD\u62A4\u8D26\u6237\u5B89\u5168\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u901A\u8FC7\u4E86\u89E3\u60A8\u7684\u6D4F\u89C8\u4FE1\u606F\u3001\u4EA4\u6613\u4FE1\u606F\u3001\u60A8\u5E38\u7528\u7684\u8F6F\u4EF6\u4FE1\u606F\u3001 \u8BBE\u5907\u4FE1\u606F\u7B49\u624B\u6BB5\u6765\u5224\u65AD\u60A8\u7684\u8D26\u53F7\u98CE\u9669\uFF0C\u5E76\u53EF\u80FD\u4F1A\u8BB0\u5F55\u4E00\u4E9B\u6211\u4EEC\u8BA4\u4E3A\u6709\u98CE\u9669\u7684\u94FE\u63A5\uFF08\u201CURL\u201D\uFF09\uFF1B\u6211\u4EEC\u4E5F\u4F1A\u6536\u96C6\u60A8\u7684\u8BBE\u5907\u4FE1\u606F\u5BF9\u4E8E\u822A\u65C5\u5206\u671F\u7CFB\u7EDF\u95EE\u9898\u8FDB\u884C\u5206\u6790\u3001\u7EDF\u8BA1\u6D41\u91CF\u5E76\u6392\u67E5 \u53EF\u80FD\u5B58\u5728\u7684\u98CE\u9669\u3001\u5728\u60A8\u9009\u62E9\u5411\u6211\u4EEC\u53D1\u9001\u5F02\u5E38\u4FE1\u606F\u65F6\u4E88\u4EE5\u6392\u67E5\u3002\u5982\u679C\u60A8\u4E0D\u63D0\u4F9B\u4E0A\u8FF0\u4FE1\u606F\uFF0C\u6211\u4EEC\u5219\u65E0\u6CD5\u5728\u60A8\u4F7F\u7528\u822A\u65C5\u5206\u671F\u670D\u52A1\u8FC7\u7A0B\u4E2D\u5BF9\u60A8\u7684\u670D\u52A1\u53CA\u8D26\u53F7\u5B89\u5168\u8FDB\u884C\u4FDD\u62A4\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    " \u4E09\u3001\u7528\u6237\u4FE1\u606F\u7684\u5B58\u50A8"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    " 1.\xA0\u4FDD\u5B58\u5730\u57DF"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    " ",
    "\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5C06\u50A8\u5B58\u4E8E\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5883\u5185\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    " 2.\xA0\u4FDD\u5B58\u671F\u9650"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u6839\u636E\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\uFF0C\u7F51\u7EDC\u501F\u8D37\u4E1A\u52A1\u4E2D\u501F\u8D37\u5408\u540C\u5E94\u81F3\u5C11\u4FDD\u5B58\u81F3\u5408\u540C\u5230\u671F\u540E\u4E94\u5E74\uFF0C\u4FE1\u606F\u62AB\u9732\u5185\u5BB9\u5E94\u81EA\u62AB\u9732\u4E4B\u65E5\u8D77\u4FDD\u5B58\u81F3\u5C11\u4E94\u5E74\u3002 \u56E0\u6B64\uFF0C\u9664\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\u5916\uFF0C\u6211\u4EEC\u5C06\u6C38\u4E45\u4FDD\u5B58\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u4EE5\u53CA\u76F8\u5173\u501F\u8D37\u4E1A\u52A1\u6570\u636E\u3002 \u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u7ECF\u533F\u540D\u5316\u5904\u7406\u540E\u5C06\u5F62\u6210\u53EF\u4EE5\u4F7F\u7528\u53CA\u6D41\u901A\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u5BF9\u6B64\u7C7B\u6570\u636E\u7684\u4FDD\u5B58\u53CA\u5904\u7406\u65E0\u9700\u53E6\u884C\u901A\u77E5\u5E76\u5F81\u5F97\u60A8\u7684\u540C\u610F\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    " ",
    "\xA0\xA0\xA0\xA0\xA0\u56DB\u3001 \u7528\u6237\u4FE1\u606F\u662F\u5426\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\uFF08\u4E00\uFF09\u5171\u4EAB "
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u6211\u4EEC\u627F\u8BFA\u4F1A\u6839\u636E\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u53CA\u76D1\u7BA1\u89C4\u5B9A\u5BF9\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF08\u5305\u62EC\u60A8\u4E3B\u52A8\u63D0\u4F9B\u7684\u548C\u6211\u4EEC\u6536\u96C6\u3001\u8BB0\u5F55\u7684\u6240\u6709\u6570\u636E\u3001\u4FE1\u606F\u3001\u8D44\u6599\u548C\u76F8\u5E94\u7684\u4EA4\u6613\u884C\u4E3A\u8BB0\u5F55\u3001\u4EA4\u6613\u6587\u4EF6\uFF0C\u4E0B\u540C\uFF09 \u627F\u62C5\u4FDD\u5BC6\u4E49\u52A1\uFF0C\u5728\u4E0D\u900F\u9732\u5355\u4E2A\u60A8\u9690\u79C1\u8D44\u6599\u7684\u524D\u63D0\u4E0B\uFF0C\u672C\u5E73\u53F0\u6709\u6743\u5BF9\u6574\u4E2A\u60A8\u6570\u636E\u5E93\u8FDB\u884C\u5206\u6790\u5E76\u5BF9\u60A8\u6570\u636E\u5E93\u8FDB\u884C\u5546\u4E1A\u4E0A\u7684\u5229\u7528\u3002\u4F46\u4E3A\u4E86\u5411\u60A8\u63D0\u4F9B\u66F4\u591A\u5143\u5316\u3001\u4E2A\u6027\u5316\u3001\u4F18\u8D28 \u7684\u670D\u52A1\uFF0C",
    _react2.default.createElement(
      "span",
      null,
      "\u822A\u65C5\u5206\u671F\u5E73\u53F0\u53EF\u80FD\u4F1A\u901A\u8FC7\u4E0E\u7B2C\u4E09\u65B9\u8FDB\u884C\u5408\u4F5C\u6765\u4E3A\u60A8\u63D0\u4F9B\u76F8\u5173\u670D\u52A1\uFF0C\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u5982\u8BE5\u7B2C\u4E09\u65B9\u540C\u610F\u627F\u62C5\u4E0E\u822A\u65C5\u5206\u671F\u5E73\u53F0\u540C\u7B49\u7684\u4FDD\u62A4\u60A8\u9690\u79C1\u7684\u8D23\u4EFB\uFF0C\u5E76\u4E14\u83B7\u5F97\u60A8\u4E8B \u5148\u540C\u610F\u548C\u6388\u6743\uFF0C\u5219\u89C6\u4E3A\u60A8\u540C\u610F\u822A\u65C5\u5206\u671F\u5E73\u53F0\u53EF\u5C06\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u548C\u8D44\u6599\u63D0\u4F9B\u7ED9\u8BE5\u7B2C\u4E09\u65B9\uFF0C\u7531\u7B2C\u4E09\u65B9\u8FDB\u884C\u68C0\u7D22\u3001\u52A0\u5DE5\u3001\u5904\u7406\u3001\u9A8C\u8BC1\u53CA\u7559\u5B58"
    ),
    "\u3002\u8BE5\u7B2C\u4E09\u65B9\u5305\u62EC\u822A\u65C5\u5206\u671F\u5173\u8054\u516C\u53F8 \uFF0C\u6280\u672F\u670D\u52A1\u7C7B\u5408\u4F5C\u4F19\u4F34\uFF0C\u5E7F\u544A\u3001\u6570\u636E\u5206\u6790\u7C7B\u5408\u4F5C\u4F19\u4F34\uFF0C\u91D1\u878D\u3001\u5F81\u4FE1\u670D\u52A1\u7C7B\u5408\u4F5C\u4F19\u4F34\u4EE5\u53CA\u503A\u6743\u6536\u8D2D\u3001\u8FFD\u7D22\u7C7B\u5408\u4F5C\u4F19\u4F34\u7B49\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA01.\u5728\u60A8\u901A\u8FC7\u822A\u65C5\u5206\u671F\u5E73\u53F0\u89E6\u53D1\u3001\u7533\u8BF7\u3001\u4F7F\u7528\u822A\u65C5\u5206\u671F\u5173\u8054\u65B9\u6216\u5408\u4F5C\u673A\u6784\u670D\u52A1\u6216\u901A\u8FC7\u822A\u65C5\u5206\u671F\u5173\u8054\u65B9\u6216\u5408\u4F5C\u670D\u52A1\u673A\u6784\u89E6\u53D1\u3001\u7533\u8BF7\u3001\u4F7F\u7528\u822A\u65C5\u5206\u671F\u670D\u52A1\u65F6\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u60A8\u5728\u7B26\u5408\u6CD5 \u5F8B\u548C\u76D1\u7BA1\u89C4\u5B9A\u7684\u524D\u63D0\u4E0B\u66F4\u4FBF\u6377\u5730\u63A5\u53D7\u822A\u65C5\u5206\u671F\u53CA\u822A\u65C5\u5206\u671F\u5173\u8054\u65B9\u6216\u8005\u5408\u4F5C\u673A\u6784\u63D0\u4F9B\u7684\u670D\u52A1\uFF0C\u9700\u8981\u5C06\u60A8\u4EAB\u53D7\u670D\u52A1\u6240\u5FC5\u987B\u63D0\u4F9B\u7684\u4E2A\u4EBA\u4FE1\u606F\u5728\u4E0A\u8FF0\u673A\u6784\u4E4B\u95F4\u5171\u4EAB\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA02.\u60A8\u5728\u672C\u5E73\u53F0\u6240\u7B7E\u8BA2\u7684\u5408\u540C\u5747\u91C7\u7528\u7535\u5B50\u5408\u540C\u3001\u7535\u5B50\u7B7E\u540D\u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5E73\u53F0\u8FD0\u8425\u65B9\u9700\u5C06\u60A8\u7684\u59D3\u540D\u53CA\u8EAB\u4EFD\u8BC1\u53F7\u7801\u7B49\u76F8\u5173\u4E2A\u4EBA\u4FE1\u606F\u63D0\u4F9B\u7ED9\u7B2C\u4E09\u65B9\u7535\u5B50\u7B7E\u7EA6\u670D\u52A1\u673A\u6784\u4EE5\u5B8C\u6210\u7535\u5B50\u7B7E\u540D\uFF0C \u5BF9\u6B64\u60A8\u77E5\u6089\u5E76\u540C\u610F\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA03.\u5728\u60A8\u8FDD\u53CD\u4E0E\u822A\u65C5\u5206\u671F\u6216\u822A\u65C5\u5206\u671F\u5408\u4F5C\u673A\u6784\u6216\u8005\u5173\u8054\u65B9\u7B7E\u7F72\u7684\u76F8\u5173\u534F\u8BAE\u65F6\uFF0C\u5411\u60A8\u7684\u4EA4\u6613\u5BF9\u624B\u3001\u76F8\u5173\u4E1A\u52A1\u7684\u5408\u4F5C\u94F6\u884C\u3001\u6D88\u8D39\u91D1\u878D\u516C\u53F8\u3001\u5C0F\u989D\u8D37\u6B3E\u516C\u53F8\u3001\u62C5\u4FDD\u673A\u6784\u3001\u4FDD\u9669\u673A\u6784 \u4EE5\u53CA\u767E\u884C\u5F81\u4FE1\u6709\u9650\u516C\u53F8\u7B49\u63D0\u4F9B\u60A8\u5728\u76F8\u5173\u534F\u8BAE\u9879\u4E0B\u7684\u5C65\u7EA6\u548C\u8FDD\u7EA6\u4FE1\u606F\uFF1B\u540C\u65F6\u4E3A\u5EFA\u7ACB\u4FE1\u7528\u4F53\u7CFB\uFF0C\u60A8\u540C\u610F\u5E76\u6388\u6743\u5728\u7B26\u5408\u76F8\u5173\u6CD5\u5F8B\u89C4\u5B9A\u7684\u524D\u63D0\u4E0B\u5C06\u60A8\u7684\u4FE1\u7528\u4FE1\u606F\u548C\u4E0D\u826F\u4FE1\u606F\u53D1\u9001\u5F81\u4FE1\u673A\u6784 \u4E14\u4E0D\u518D\u53E6\u884C\u901A\u77E5\u60A8\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA04.\u9664\u6CD5\u5F8B\u53E6\u6709\u89C4\u5B9A\u5916\uFF0C\u4E3A\u4E86\u63D0\u5347\u4FE1\u606F\u5904\u7406\u6548\u7387\uFF0C\u964D\u4F4E\u4FE1\u606F\u5904\u7406\u6210\u672C\uFF0C\u6216\u63D0\u9AD8\u4FE1\u606F\u5904\u7406\u51C6\u786E\u6027\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u59D4\u6258\u6709\u80FD\u529B\u7684\u6570\u636E\u670D\u52A1\u673A\u6784\u4EE3\u8868\u6211\u4EEC\uFF0C\u5728\u9075\u5FAA\u672C\u9690\u79C1\u653F\u7B56\u4EE5\u53CA\u6388\u6743\u8303\u56F4 \u7684\u60C5\u51B5\u4E0B\u5BF9\u60A8\u7684\u4FE1\u606F\u8FDB\u884C\u52A0\u5DE5\u3001\u5206\u6790\u3001\u5904\u7406\uFF0C\u4EE5\u534F\u52A9\u5BF9\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u4EA4\u53C9\u9A8C\u8BC1\u3001\u8BC4\u4F30\u60A8\u7684\u4FE1\u7528\u72B6\u51B5\u3001\u5C65\u7EA6\u80FD\u529B\u548C\u98CE\u9669\u627F\u53D7\u6C34\u5E73\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA05.\u4E3A\u4E86\u4F9D\u6CD5\u5408\u89C4\u5F00\u5C55\u4E1A\u52A1\u5E76\u8BC4\u4F30\u6211\u4EEC\u7684\u8D22\u52A1\u4E0E\u98CE\u9669\u80FD\u529B\uFF0C\u5411\u6211\u4EEC\u8058\u8BF7\u7684\u5BA1\u8BA1\u3001\u6CD5\u5F8B\u7B49\u5916\u90E8\u4E13\u4E1A\u987E\u95EE\u62AB\u9732\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u5E76\u8981\u6C42\u5176\u6309\u7167\u76F8\u5173\u6CD5\u5F8B\u89C4\u5B9A\u548C\u76D1\u7BA1\u8981\u6C42\u5904\u7406\u60A8\u7684\u4FE1\u606F\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA06.\u5F53\u60A8\u56E0\u4F7F\u7528\u822A\u65C5\u5206\u671F\u670D\u52A1\u53D1\u751F\u4E89\u8BAE\u65F6\uFF0C\u4E3A\u4E86\u4FDD\u62A4\u60A8\u53CA\u4E0E\u8BE5\u7B14\u4EA4\u6613\u6709\u5173\u7684\u5176\u4ED6\u7528\u6237\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u60A8\u7684\u59D3\u540D\u53CA\u6709\u6548\u8BC1\u4EF6\u53F7\u7801\u3001\u8054\u7CFB\u65B9\u5F0F\u548C\u4E0E\u4E89\u8BAE\u76F8\u5173\u7684\u4FE1\u606F\u63D0\u4F9B\u7ED9 \u4E0E\u8BE5\u7B14\u4EA4\u6613\u6709\u5173\u7684\u5176\u4ED6\u7528\u6237\u3001\u76D1\u7BA1/\u884C\u653F\u673A\u5173\u6216\u60A8\u4E0E\u4E89\u8BAE\u76F8\u5173\u65B9\u534F\u8BAE\u7EA6\u5B9A\u7684\u5176\u4ED6\u4E89\u8BAE\u89E3\u51B3\u673A\u6784\uFF0C\u4EE5\u4FBF\u53CA\u65F6\u89E3\u51B3\u7EA0\u7EB7\uFF0C\u4F46\u6CD5\u5F8B\u6CD5\u89C4\u660E\u786E\u7981\u6B62\u63D0\u4F9B\u7684\u9664\u5916\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA07.\u672C\u5E73\u53F0\u6709\u4E49\u52A1\u6839\u636E\u6709\u5173\u6CD5\u5F8B\u8981\u6C42\u5411\u53F8\u6CD5\u673A\u5173\u548C\u653F\u5E9C\u90E8\u95E8\u63D0\u4F9B\u60A8\u7684\u4E2A\u4EBA\u8D44\u6599\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA08.\u5176\u4ED6\u83B7\u5F97\u60A8\u4E8B\u5148\u6388\u6743\u540C\u610F\u7684\u60C5\u5F62\u3002 \u822A\u65C5\u5206\u671F\u5173\u8054\u65B9\u3001\u5408\u4F5C\u673A\u6784\u5728\u672A\u5F97\u5230\u60A8\u7684\u660E\u793A\u540C\u610F\u6216\u6388\u6743\u4EE5\u524D\u65E0\u6743\u5C06\u5171\u4EAB\u7684\u4E2A\u4EBA\u4FE1\u606F\u7528\u4E8E\u672C\u9690\u79C1\u653F\u7B56\u7EA6\u5B9A\u8303\u56F4\u4EE5\u5916\u7684\u5176\u4ED6\u4EFB\u4F55\u7528\u9014\u3002 \u672C\u5E73\u53F0\u5BF9\u60A8\u7684\u8D44\u6599\u7684\u62AB\u9732\uFF1A\u867D\u7136\u672C\u5E73\u53F0\u91C7\u7528\u884C\u4E1A\u6807\u51C6\u60EF\u4F8B\u4EE5\u4FDD\u62A4\u60A8\u7684\u4E2A\u4EBA\u8D44\u6599\uFF0C",
    _react2.default.createElement(
      "span",
      null,
      "\u9274\u4E8E\u6280\u672F\u9650\u5236\uFF0C\u672C\u5E73\u53F0\u4E0D\u80FD\u786E\u4FDD\u60A8\u7684\u5168\u90E8\u79C1\u4EBA\u901A\u8BAF\u53CA\u5176\u4ED6\u8D44\u6599\u4E0D\u4F1A\u901A\u8FC7\u672C\u9690\u79C1\u89C4\u5219\u4E2D\u672A\u5217\u660E \u7684\u9014\u5F84\u6CC4\u9732\u51FA\u53BB"
    ),
    "\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    " \uFF08\u4E8C\uFF09\u8F6C\u8BA9"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u6211\u4EEC\u4E0D\u4F1A\u5C06\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u8F6C\u8BA9\u7ED9\u4EFB\u4F55\u516C\u53F8\u3001\u7EC4\u7EC7\u53CA\u81EA\u7136\u4EBA\uFF0C\u4F46\u4EE5\u4E0B\u60C5\u51B5\u9664\u5916\uFF1A \xA0\xA0\xA0\xA0\xA01.\u968F\u7740\u6211\u4EEC\u4E1A\u52A1\u7684\u6301\u7EED\u53D1\u5C55\uFF0C\u6211\u4EEC\u6709\u53EF\u80FD\u8FDB\u884C\u5408\u5E76\u3001\u6536\u8D2D\u3001\u8D44\u4EA7\u8F6C\u8BA9\u6216\u7C7B\u4F3C\u7684\u4EA4\u6613\uFF0C \u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u6709\u53EF\u80FD\u4F5C\u4E3A\u6B64\u7C7B\u4EA4\u6613\u7684\u4E00\u90E8\u5206\u800C\u88AB\u8F6C\u79FB\u3002\u6211\u4EEC\u5C06\u5728\u8F6C\u79FB\u524D\u901A\u77E5\u60A8\uFF0C\u5E76\u8981\u6C42\u65B0\u7684\u6301\u6709\u60A8\u4E2A\u4EBA\u4FE1\u606F\u7684\u516C\u53F8\u3001\u7EC4\u7EC7\u7EE7\u7EED\u53D7\u672C\u653F\u7B56\u7684\u7EA6\u675F\u3002\u5982\u53D8\u66F4\u4E2A\u4EBA\u4FE1\u606F\u4F7F\u7528\u76EE\u7684\u65F6\uFF0C\u6211 \u4EEC\u5C06\u8981\u6C42\u8BE5\u516C\u53F8\u3001\u7EC4\u7EC7\u91CD\u65B0\u53D6\u5F97\u60A8\u7684\u660E\u786E\u540C\u610F\u3002 \xA0\xA0\xA0\xA0\xA02.\u4E8B\u5148\u83B7\u5F97\u60A8\u7684\u660E\u786E\u540C\u610F\u6216\u6388\u6743\u7684\u60C5\u51B5\u4E0B\u5411\u7B2C\u4E09\u65B9\u8F6C\u8BA9\u3002 \xA0\xA0\xA0\xA0\xA03.\u6839\u636E\u6CD5\u5F8B\u6CD5\u89C4\u6216\u5F3A\u5236\u6027\u7684\u884C\u653F\u6216\u53F8\u6CD5\u8981\u6C42\u800C\u8F6C\u8BA9\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\uFF08\u4E09\uFF09\u516C\u5F00\u62AB\u9732"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u6211\u4EEC\u4EC5\u4F1A\u5728\u4EE5\u4E0B\u60C5\u51B5\u4E0B\uFF0C\u4E14\u91C7\u53D6\u7B26\u5408\u4E1A\u754C\u6807\u51C6\u7684\u5B89\u5168\u9632\u62A4\u63AA\u65BD\u7684\u524D\u63D0\u4E0B\uFF0C\u624D\u4F1A\u516C\u5F00\u62AB\u9732\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1A"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA01\u3001\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u5728\u60A8\u660E\u786E\u540C\u610F\u7684\u62AB\u9732\u65B9\u5F0F\u4E0B\u62AB\u9732\u60A8\u6240\u6307\u5B9A\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1B"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA02\u3001\u6839\u636E\u6CD5\u5F8B\u3001\u6CD5\u89C4\u7684\u8981\u6C42\u3001\u5F3A\u5236\u6027\u7684\u884C\u653F\u6267\u6CD5\u6216\u53F8\u6CD5\u8981\u6C42\u6240\u5FC5\u987B\u63D0\u4F9B\u60A8\u4E2A\u4EBA\u4FE1\u606F\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u4F9D\u636E\u6240\u8981\u6C42\u7684\u4E2A\u4EBA\u4FE1\u606F\u7C7B\u578B\u548C\u62AB\u9732\u65B9\u5F0F\u516C\u5F00\u62AB\u9732\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002 \u5728\u7B26\u5408\u6CD5\u5F8B\u6CD5\u89C4\u7684\u524D\u63D0\u4E0B\uFF0C\u5F53\u6211\u4EEC\u6536\u5230\u4E0A\u8FF0\u62AB\u9732\u4FE1\u606F\u7684\u8BF7\u6C42\u65F6\uFF0C\u6211\u4EEC\u4F1A\u8981\u6C42\u5FC5\u987B\u51FA\u5177\u4E0E\u4E4B\u76F8\u5E94\u7684\u6CD5\u5F8B\u6587\u4EF6\uFF0C\u5982\u4F20\u7968\u6216\u8C03\u67E5\u51FD\u3002\u6211\u4EEC\u575A\u4FE1\uFF0C\u5BF9\u4E8E\u8981\u6C42\u6211\u4EEC\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C \u5E94\u8BE5\u5728\u6CD5\u5F8B\u5141\u8BB8\u7684\u8303\u56F4\u5185\u5C3D\u53EF\u80FD\u4FDD\u6301\u900F\u660E\u3002\u6211\u4EEC\u5BF9\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u8FDB\u884C\u4E86\u614E\u91CD\u7684\u5BA1\u67E5\uFF0C\u4EE5\u786E\u4FDD\u5176\u5177\u5907\u5408\u6CD5\u4F9D\u636E\uFF0C\u4E14\u4EC5\u9650\u4E8E\u6267\u6CD5\u90E8\u95E8\u56E0\u7279\u5B9A\u8C03\u67E5\u76EE\u7684\u4E14\u6709\u5408\u6CD5\u6743\u5229\u83B7\u53D6\u7684\u6570\u636E\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA0\u4E94\u3001 \u7528\u6237\u4FE1\u606F\u5982\u4F55\u4FDD\u62A4"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u4E3A\u4E86\u4FDD\u969C\u60A8\u8BBF\u95EE\u6211\u4EEC\u65F6\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u91C7\u53D6\u4E86\u5404\u79CD\u5B89\u5168\u63AA\u65BD\u3002\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5904\u4E8E\u5404\u79CD\u5B89\u5168\u7F51\u7EDC\u7684\u4FDD\u62A4\uFF0C\u53EA\u6709\u5C11\u6570\u62E5\u6709\u7279\u6B8A\u8BBF\u95EE\u6743\u9650\u7684\u4EBA\u58EB\u624D\u80FD\u8BBF\u95EE\u8BE5\u4FE1\u606F\uFF0C \u800C\u4E14\u6211\u4EEC\u8981\u6C42\u4ED6\u4EEC\u5BF9\u4FE1\u606F\u4FDD\u5BC6\u3002 \u5982\u679C\u60A8\u5BF9\u6211\u4EEC\u7684\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u53EF\u901A\u8FC7\u672C\u653F\u7B56\u6700\u4E0B\u65B9\u7EA6\u5B9A\u7684\u8054\u7CFB\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC\u3002",
    _react2.default.createElement(
      "span",
      null,
      "\u5982\u60A8\u53D1\u73B0\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4FE1\u606F\u6CC4\u5BC6\uFF0C \u5C24\u5176\u662F\u60A8\u7684\u8D26\u6237\u53CA\u5BC6\u7801\u53D1\u751F\u6CC4\u9732\uFF0C\u8BF7\u60A8\u7ACB\u5373\u901A\u8FC7\u672C\u653F\u7B56\u7B2C\u516B\u6761\u3010\u5982\u4F55\u8054\u7CFB\u6211\u4EEC\u3011\u5C55\u793A\u7684\u8054\u7CFB\u65B9\u5F0F\u8054\u7EDC\u6211\u4EEC\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u91C7\u53D6\u76F8\u5E94\u63AA\u65BD"
    ),
    "\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\u516D\u3001 cookies \u5982\u4F55\u4F7F\u7528"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA01\u3001\u4E3A\u5B9E\u73B0\u60A8\u8054\u673A\u4F53\u9A8C\u7684\u4E2A\u6027\u5316\u9700\u6C42\uFF0C\u4F7F\u60A8\u83B7\u5F97\u66F4\u8F7B\u677E\u7684\u8BBF\u95EE\u4F53\u9A8C\uFF0C\u6211\u4EEC\u4F1A\u5728\u60A8\u7684\u8BA1\u7B97\u673A\u6216\u79FB\u52A8\u8BBE\u5907\u4E0A\u53D1\u9001\u4E00\u4E2A\u6216\u591A\u4E2A\u540D\u4E3ACookies\u7684\u5C0F\u6570\u636E\u6587\u4EF6\uFF0C \u6307\u5B9A\u7ED9\u60A8\u7684Cookies \u662F\u552F\u4E00\u7684\uFF0C\u5B83\u53EA\u80FD\u88AB\u5C06Cookies\u53D1\u5E03\u7ED9\u60A8\u7684\u57DF\u4E2D\u7684Web\u670D\u52A1\u5668\u8BFB\u53D6\u3002\u6211\u4EEC\u5411\u60A8\u53D1\u9001Cookies\u662F\u4E3A\u4E86\u7B80\u5316\u60A8\u91CD\u590D\u767B\u5F55\u7684\u6B65\u9AA4\u3001\u5B58\u50A8\u60A8\u7684\u6D4F\u89C8 \u4E60\u60EF\u548C\u504F\u597D\u7B49\u6570\u636E\u8FDB\u800C\u5E2E\u52A9\u60A8\u7B80\u5316\u4E2A\u4EBA\u4FE1\u606F\u7684\u586B\u5199\u3001\u63D0\u4F9B\u60A8\u7684\u670D\u52A1\u504F\u597D\u8BBE\u7F6E\u3001\u5E2E\u52A9\u60A8\u4F18\u5316\u5BF9\u5E7F\u544A\u7684\u9009\u62E9\u4E0E\u4E92\u52A8\u3001\u5E2E\u52A9\u5224\u65AD\u60A8\u7684\u767B\u5F55\u72B6\u6001\u4EE5\u53CA\u8D26\u6237\u6216\u6570\u636E\u5B89\u5168\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA02\u3001\u6211\u4EEC\u4E0D\u4F1A\u5C06 Cookie \u7528\u4E8E\u672C\u9690\u79C1\u653F\u7B56\u6240\u8FF0\u76EE\u7684\u4E4B\u5916\u7684\u4EFB\u4F55\u7528\u9014\u3002\u60A8\u53EF\u6839\u636E\u81EA\u5DF1\u7684\u504F\u597D\u7BA1\u7406\u6216\u5220\u9664 Cookie\u3002\u60A8\u53EF\u4EE5\u6E05\u9664\u8BA1\u7B97\u673A\u4E0A\u4FDD\u5B58\u7684\u6240\u6709 Cookies\uFF0C \u5927\u90E8\u5206\u7F51\u7EDC\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u63A5\u53D7Cookie\uFF0C\u4F46\u60A8\u901A\u5E38\u53EF\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u6765\u4FEE\u6539\u6D4F\u89C8\u5668\u7684\u8BBE\u7F6E\u4EE5\u62D2\u7EDD Cookie\uFF1B\u53E6\u5916\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u6E05\u9664\u8F6F\u4EF6\u5185\u4FDD\u5B58\u7684\u6240\u6709Cookies\u3002 \u4F46\u5982\u679C\u60A8\u8FD9\u4E48\u505A\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u5728\u6BCF\u4E00\u6B21\u8BBF\u95EE\u822A\u65C5\u5206\u671F\u7F51\u7AD9\u65F6\u4EB2\u81EA\u66F4\u6539\u7528\u6237\u8BBE\u7F6E\uFF0C\u800C\u4E14\u60A8\u4E4B\u524D\u6240\u8BB0\u5F55\u7684\u76F8\u5E94\u4FE1\u606F\u4E5F\u5747\u4F1A\u88AB\u5220\u9664\uFF0C\u5E76\u4E14\u53EF\u80FD\u4F1A\u5BF9\u60A8\u6240\u4F7F\u7528\u670D\u52A1\u7684\u5B89\u5168\u6027\u6709\u4E00\u5B9A\u5F71\u54CD\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA0\u4E03\u3001 \u5982\u4F55\u9009\u62E9\u9000\u51FA\u3001\u5220\u9664\u6216\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u6211\u4EEC\u975E\u5E38\u5C0A\u91CD\u60A8\u5BF9\u4E2A\u4EBA\u4FE1\u606F\u7684\u63A7\u5236\u6743\u9650\uFF0C\u5E76\u4E3A\u60A8\u63D0\u4F9B\u4E86\u63A7\u5236\u60A8\u4E2A\u4EBA\u4FE1\u606F\u7684\u65B9\u6CD5\u3002\u60A8\u6709\u6743\u5229\u67E5\u8BE2\u3001\u66F4\u6B63\u3001\u7BA1\u7406\u3001\u5220\u9664\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4FE1\u606F\u5E76\u4FDD\u62A4\u81EA\u5DF1\u7684\u9690\u79C1\u548C\u5B89\u5168\u3002 \u60A8\u67E5\u8BE2\u3001\u66F4\u6B63\u3001\u7BA1\u7406\u3001\u5220\u9664\u4E2A\u4EBA\u4FE1\u606F\u7684\u8303\u56F4\u548C\u65B9\u5F0F\u5C06\u53D6\u51B3\u4E8E\u60A8\u4F7F\u7528\u7684\u5177\u4F53\u670D\u52A1\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    _react2.default.createElement(
      "span",
      null,
      "\xA0\xA0\xA0\xA0\xA01.\u8BBF\u95EE\u6743 "
    ),
    "\u9664\u6CD5\u5F8B\u6CD5\u89C4\u89C4\u5B9A\u7684\u4F8B\u5916\u60C5\u51B5\uFF0C\u65E0\u8BBA\u60A8\u4F55\u65F6\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\uFF0C\u6211\u4EEC\u90FD\u4F1A\u529B\u6C42\u8BA9\u60A8\u987A\u5229\u8BBF\u95EE\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u5982\u679C\u60A8\u5E0C\u671B\u8BBF\u95EE\u6216\u7F16\u8F91\u60A8\u5728\u822A\u65C5\u5206\u671F\u7684\u4E2A\u4EBA\u8D44\u6599\u4FE1\u606F\uFF0C \u60A8\u53EF\u4EE5\u5728\u7F51\u9875\u7AEF\u6216APP\u7AEF\u81EA\u884C\u64CD\u4F5C\uFF0C\u6216\u8054\u7CFB\u822A\u65C5\u5206\u671F\u5BA2\u670D\u8FDB\u884C\u7F16\u8F91\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    _react2.default.createElement(
      "span",
      null,
      "\xA0\xA0\xA0\xA0\xA02.\u66F4\u6B63\u6743 "
    ),
    "\u5F53\u60A8\u9700\u8981\u66F4\u65B0\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u65F6\uFF0C\u6216\u53D1\u73B0\u6211\u4EEC\u5904\u7406\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u6709\u9519\u8BEF\u65F6\uFF0C\u60A8\u6709\u6743\u4F5C\u51FA\u66F4\u65B0\u6216\u66F4\u6B63\u3002\u60A8\u53EF\u4EE5\u81EA\u884C\u5728\u822A\u65C5\u5206\u671F\u7F51\u9875\u7AEF\u6216APP\u7AEF\u64CD\u4F5C\uFF0C \u6216\u8054\u7CFB\u822A\u65C5\u5206\u671F\u5BA2\u670D\u66F4\u6539\u4FE1\u606F\u884C\u4F7F\u60A8\u7684\u66F4\u6B63\u6743\u5229\u5E76\u968F\u65F6\u66F4\u65B0\u6216\u66F4\u6B63\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    _react2.default.createElement(
      "span",
      null,
      "\xA0\xA0\xA0\xA0\xA03.\u5220\u9664\u6743"
    ),
    "\u60A8\u5728\u6211\u4EEC\u7684\u4EA7\u54C1\u4E0E/\u6216\u670D\u52A1\u9875\u9762\u4E2D\u53EF\u4EE5\u76F4\u63A5\u6E05\u9664\u6216\u5220\u9664\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u7ED1\u5B9A\u7684\u94F6\u884C\u5361\u7B49\u3002\u5728\u4EE5\u4E0B\u60C5\u5F62\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u5411\u6211\u4EEC\u63D0\u51FA\u5220\u9664\u4E2A\u4EBA\u4FE1\u606F\u7684\u8BF7\u6C42\uFF1A \uFF081\uFF09\u5982\u679C\u6211\u4EEC\u5904\u7406\u4E2A\u4EBA\u4FE1\u606F\u7684\u884C\u4E3A\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\uFF1B \uFF082\uFF09\u5982\u679C\u6211\u4EEC\u6536\u96C6\u3001\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u5374\u672A\u5F81\u5F97\u60A8\u7684\u540C\u610F\uFF1B \uFF083\uFF09\u5982\u679C\u6211\u4EEC\u5904\u7406\u4E2A\u4EBA\u4FE1\u606F\u7684\u884C\u4E3A\u8FDD\u53CD\u4E86\u4E0E\u60A8\u7684\u7EA6\u5B9A\uFF1B \uFF084\uFF09\u5982\u679C\u6211\u4EEC\u7EC8\u6B62\u670D\u52A1\u53CA\u8FD0\u8425\u3002 \u82E5\u6211\u4EEC\u51B3\u5B9A\u54CD\u5E94\u60A8\u7684\u5220\u9664\u8BF7\u6C42\uFF0C\u6211\u4EEC\u8FD8\u5C06\u540C\u65F6\u901A\u77E5\u4ECE\u6211\u4EEC\u83B7\u5F97\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u7684\u5B9E\u4F53\uFF0C\u8981\u6C42\u5176\u53CA\u65F6\u5220\u9664\uFF0C\u9664\u975E\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\uFF0C \u6216\u8FD9\u4E9B\u5B9E\u4F53\u83B7\u5F97\u60A8\u7684\u72EC\u7ACB\u6388\u6743\u3002 \u5F53\u60A8\u4ECE\u6211\u4EEC\u7684\u670D\u52A1\u4E2D\u5220\u9664\u4FE1\u606F\u540E\uFF0C\u6211\u4EEC\u53EF\u80FD\u4E0D\u4F1A\u7ACB\u5373\u5907\u4EFD\u7CFB\u7EDF\u4E2D\u5220\u9664\u76F8\u5E94\u7684\u4FE1\u606F\uFF0C\u4F46\u4F1A\u5728\u5907\u4EFD\u66F4\u65B0\u65F6\u5220\u9664\u8FD9\u4E9B\u4FE1\u606F\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA04.\u64A4\u9500\u6743 \u60A8\u53EF\u4EE5\u901A\u8FC7\u8BBE\u5907\u7CFB\u7EDF\u6743\u9650\u8BBE\u7F6E\u6216\u901A\u8FC7\u822A\u65C5\u5206\u671F\u63D0\u4F9B\u7684\u8054\u7CFB\u65B9\u5F0F\u8981\u6C42\u64A4\u56DE\u90E8\u5206\u6216\u5168\u90E8\u6388\u6743\u3002\u5F53\u60A8\u64A4\u56DE\u540C\u610F\u6216\u6388\u6743\u540E\uFF0C\u6211\u4EEC\u65E0\u6CD5\u7EE7\u7EED\u4E3A\u60A8\u63D0\u4F9B\u64A4\u56DE\u540C\u610F\u6216\u6388\u6743 \u6240\u5BF9\u5E94\u7684\u670D\u52A1\uFF0C\u4E5F\u5C06\u4E0D\u518D\u5904\u7406\u60A8\u76F8\u5E94\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u4F46\u60A8\u64A4\u56DE\u540C\u610F\u6216\u6388\u6743\u7684\u51B3\u5B9A\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u6B64\u524D\u57FA\u4E8E\u60A8\u7684\u540C\u610F\u6216\u6388\u6743\u800C\u5F00\u5C55\u7684\u4E2A\u4EBA\u4FE1\u606F\u5904\u7406\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\xA0\xA0\xA0\xA0\xA05.\u6CE8\u9500\u6743 \u60A8\u53EF\u4EE5\u901A\u8FC7\u62E8\u6253\u822A\u65C5\u5206\u671F\u4E0A\u516C\u5E03\u7684\u5BA2\u670D\u7535\u8BDD\u7533\u8BF7\u6CE8\u9500\u60A8\u7684\u8D26\u6237\uFF0C\u5982\u5F53\u60A8\u7B26\u5408\u7EA6\u5B9A\u7684\u8D26\u6237\u6CE8\u9500\u6761\u4EF6\uFF0C\u7ECF\u822A\u65C5\u5206\u671F\u5BA1\u6838\u540C\u610F\u540E\u53EF\u6B63\u5F0F\u6CE8\u9500\u4F1A\u5458\u8D26\u6237\u3002 \u4E00\u65E6\u60A8\u6CE8\u9500\u8D26\u6237\uFF0C\u6211\u4EEC\u5C06\u505C\u6B62\u4E3A\u60A8\u63D0\u4F9B\u670D\u52A1\uFF0C \u56E0\u6B64\u8BF7\u60A8\u8C28\u614E\u64CD\u4F5C\u3002\u4F46\u60A8\u77E5\u6089\u5E76\u7406\u89E3\uFF0C\u5728\u60A8\u6CE8\u9500\u8D26\u6237\u524D\u63D0\u4F9B\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u6211\u4EEC\u5C06\u7EE7\u7EED\u4F9D\u7167\u53EF\u9002\u7528\u7684\u6CD5\u5F8B\u6CD5\u89C4\u89C4\u5B9A\u53CA\u672C\u9690\u79C1\u653F\u7B56\u8FDB\u884C\u4FDD\u5B58\u6216\u62AB\u9732\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA0\u516B\u3001 \u9690\u79C1\u534F\u8BAE\u7684\u4FEE\u6539\u4EE5\u53CA\u5982\u4F55\u8054\u7CFB\u6211\u4EEC"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u9690\u79C1\u534F\u8BAE\u7684\u4FEE\u6539"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u4E3A\u7ED9\u60A8\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1\u4EE5\u53CA\u968F\u7740\u822A\u65C5\u5206\u671F\u4E1A\u52A1\u7684\u53D1\u5C55\uFF0C\u672C\u9690\u79C1\u653F\u7B56\u4E5F\u4F1A\u968F\u4E4B\u66F4\u65B0\u3002\u4F46\u672A\u7ECF\u60A8\u660E\u786E\u540C\u610F\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u524A\u51CF\u60A8\u4F9D\u636E\u672C\u9690\u79C1\u653F\u7B56\u6240\u5E94\u4EAB\u6709\u7684\u6743\u5229\u3002 \u6211\u4EEC\u4F1A\u901A\u8FC7\u5728\u822A\u65C5\u5206\u671F\u5E73\u53F0\u4E0A\u53D1\u51FA\u66F4\u65B0\u7248\u672C\u5E76\u5728\u751F\u6548\u524D\u901A\u8FC7\u516C\u544A\u6216\u4EE5\u5176\u4ED6\u9002\u5F53\u65B9\u5F0F\u63D0\u9192\u60A8\u76F8\u5173\u5185\u5BB9\u7684\u66F4\u65B0\uFF0C\u4E5F\u8BF7\u60A8\u8BBF\u95EE\u822A\u65C5\u5206\u671F\u4EE5\u4FBF\u53CA\u65F6\u4E86\u89E3\u6700\u65B0\u7684\u9690\u79C1\u653F\u7B56\u3002"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u5982\u4F55\u8054\u7CFB\u6211\u4EEC"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u5982\u679C\u60A8\u6709\u5173\u4E8E\u6211\u4EEC\u548C\u9690\u79C1\u534F\u8BAE\u7684\u95EE\u9898\u6216\u610F\u89C1\uFF0C\u8BF7\u90AE\u4EF6\u81F3bjjbxd@hnair.com\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA0\u4E5D\u3001\u60A8\u7684\u540C\u610F"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u4E00\u65E6\u60A8\u4F7F\u7528\u822A\u65C5\u5206\u671F\u5373\u8868\u793A\u60A8\u540C\u610F\u9075\u5B88\u672C\u201C\u9690\u79C1\u534F\u8BAE\u201D\u4EE5\u53CA\u6211\u4EEC\u7684\u201C\u6761\u6B3E\u4E0E\u6761\u4EF6\u201D\u3002\u5982\u679C\u60A8\u4E0D\u540C\u610F\u6211\u4EEC\u7684\u201C\u9690\u79C1\u534F\u8BAE\u201D\uFF0C\u8BF7\u4E0D\u8981\u5411\u6211\u4EEC\u63D0\u4F9B\u4E2A\u4EBA\u4FE1\u606F\u5E76\u79BB\u5F00\u672C\u5E94\u7528\u3002"
  ),
  _react2.default.createElement(
    "span",
    { style: { display: "block" } },
    "\xA0\xA0\xA0\xA0\xA0\u5341\u3001\u5728\u7EBF\u653F\u7B56"
  ),
  _react2.default.createElement(
    "p",
    null,
    "\u672C\u9690\u79C1\u534F\u8BAE\u4E0D\u80FD\u5F71\u54CD\u4E92\u8054\u7F51\u8FD0\u884C\u4E2D\u672C\u8EAB\u5DF2\u7ECF\u5B58\u5728\u7684\u4EFB\u4F55\u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u5185\u5BB9\u5C06\u8D85\u51FA\u822A\u65C5\u5206\u671F\u7684\u63A7\u5236\u8303\u56F4\uFF0C\u56E0\u6B64\u672C\u9690\u79C1\u534F\u8BAE\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u8FDD\u80CC\u9002\u7528\u6CD5\u5F8B\u6216\u884C \u653F\u6CD5\u89C4\u7684\u65B9\u5F0F\u9002\u7528\u4E8E\u8FD9\u4E9B\u5185\u5BB9\u3002\u672C\u5728\u7EBF\u9690\u79C1\u653F\u7B56\u4EC5\u9002\u7528\u4E8E\u901A\u8FC7\u6211\u4EEC\u5E94\u7528\u548C\u7F51\u7AD9\u6536\u96C6\u7684\u4FE1\u606F\uFF0C\u5BF9\u79BB\u7EBF\u6536\u96C6\u7684\u4FE1\u606F\u4E0D\u9002\u7528\u3002"
  )
);

exports.default = {
  serviceProtocol: serviceProtocol,
  privacyProtocol: privacyProtocol,
  loanContract: loanContract,
  paymentProtocol: paymentProtocol,
  agriculture: agriculture,
  attractInvestment: attractInvestment,
  IndustryAndCommerce: IndustryAndCommerce,
  construction: construction,
  BankOfChina: BankOfChina,
  userAuthorization: userAuthorization

};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
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
		module.hot.accept(128, function() {
			var newContent = __webpack_require__(128);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaAAAAA4CAYAAAC7dCzDAAAAAXNSR0IArs4c6QAAABxpRE9UAAAAAgAAAAAAAAAcAAAAKAAAABwAAAAcAAAI0W+t5ZUAAAidSURBVHgB7F3ZseJIEMQuDMIeDFg7+FlTnjFsp1oJSVJ9cLzHsUWEpq6sqlYKVNGCmdkc85UMJAPJQDKQDLyAgc0LembLZCAZSAaSgWTgmAMo3wTJQDKQDCQDL2EgB9BLaM+myUAykAwkAzmA8j2QDCQDyUAy8BIGcgC9hPZsmgwkA5/EwM9+e9xs98efYNGH3ea42R3OkZ/9cbvZHLd7oA/HXdHj3J/jfsvcVd/sSoa8TrX2pc72uP+p9dBuWdOKP+yQh1iRh13pfai1vZ6Ufgc1B9A7XIVcQzKQDLw5A7i5b49bDAwMlKuj3PjXYXEd2xx1Pl2caBkWGwyW/SqvJhwHTpWbbVnDRW8MpXUYIbbdHXflqMOIQ/Ci41sZOYDe6nLkYpKBZOATGMCup+5wgtViEJWJc9jvy1F2ThcD4zyMlp3TKSbDjdPqaqBtj7vdWq9gTjugBVcGD3Zipd62DCLvCZtlgxW/zJUD6GXUZ+NkIBn4BAbqjR43d+wsymvZtXAXtPrWE6lDRYZJeWy3XwfDKV+wl0OsPoa79OkO6LyzOQ+Ytf8y9MoQWgba2h8TZx1i7zh8QEMOoPXNkCIZSAaSgTYDZRAs3wFhIJSbPoaQPg7TO/wyDLADKjuW8nysDqXLQYU+17uo9gCqA0cGUOl32gHxMd6h7ryWobPD4CvfWTF29WivfaZ/GckB9JdsZ69kIBn4UAYwgMrOYn2Utdz81x8l1EFQvov5t/744Lw7KbskDIL1eyOdUQsJ6+7kAs9d1okl3QGhHnc5sgO72JFVP3ZR+GFCfSx3PfxO5V+s5AB68QV49/b4cOhLbdUVA70Va/k9v1cjwqrvlh6ad4uOHqOjVU/zIkxv/b1YVOudfHreLb21XsVHmB4vvVhUK/bVQcDHaDqAFL/sasqNf4ubPwYUhgwfw8kEQv62fEeER2ZVlgGGHQzfV8DagMIPDOqPIOSHBxxYC3atwT7rYLp8pKerfb1+eXd5/XpyBW/EQPTBVR90Hr5sxWms5VcM9VuwnnNPLmvMyFF9j8PWo9fDcx07ijv+EfuZvUa1PA5bj955eK5jR3HgmxjeyBtf7nONu3/0ERgekdWBscyDdZhc6nWonQbEgtmVX8ThRwR113IedHg8J9/tlPXWndd5d1Mf9VXOdgfUXvHLz7edkfewcwC9x3V4u1XwQ4WFUXfpi/a42sTCN/u6BYuajnfb+z4S/6tc9Jk9nnl+EZ9e/1b7GzjrnnPZwXAXsyu7m/PfBapZdWDU3QvrVJ9eY4nb9zfLgFl3N6dhg12WPIKrg6fWq4ONf78ofwVHzlO+OQO8UVBGy+3FgI/i8PlBrPtHtq8J+OjV8hPbirf8o7yZeFRbfaqznspRfAY7U6OFafnR997YPbnaS3U9f+qj+K044lM+xkD8qX2sZmZ/CQOjDy3jlDht6H6QDsURy5hLreExt73uo/FRPdTX9bV0XwftqL76qFMyD1J9qnusldPD9XKYh57ed5THOHN7kliXUU/1UafUfPWpDozbLZ/WS/15DOQAeh6X/8tK+ABHH2InwzFuK54xl4qBjrhiaLt0rNdhXGWEUR/7qk91jft63Eae41nL/ZpLjOernzrrUNLfkj3cb8SwDq0LvXdEeJ5Lrw4xnj/jV0zqz2EgB9BzePzKKr0bAGN+4vSrVAz8oxcxLkd5jDOP9qy8JW+EbcXhj2LqUx1rv9Vuna/XaeGinor1OrBbRy9PY72erN3DR2tS/Cjew2os9ecyML4bWD+/kBYOTc9xO0x6grPVp+VHy17sCUv6qBIjLkbx6GRHORpv6VFd9Wme+ns6cyh7WMRGuFYcfh7aQ/Et3fv2cFpb8zTHMWr3cL8R0zXqOuhHT++rdktnPmv2cBGGvpS/w8DLBxDeEH7wVP3N4ji3mUep+fRBtvzERHHvFWGY/y3Sz3HGjnjSPNWdJ4+NbOQDM3t4P9ozfYilnOlJLCX7uEScPtXVRz98fiCGl+Or99rfwhHfq/VozNfutq5Be3HNlBpTXeP0ew/FqA48XpGvRvLPZzNw1wCKLqj7uFD3qw0MbH2N7B4WMa3vOnO9x2wecazz7dJ5GtnKh2MZu8UfYSMfa1POYEbYUY174syhxBqoU6qPa3R5L1braA31U+/FfyOGvlFd+igVF/m4fpf3Yr1O2s9l4PLuP6itF3EAvQh7ntqqI2lka2HHaiyqRR/y9KDf890/6hflf7LPz3dkK1/EUkYxcuMY2NER4bXubLyFo59S10UfZS8GjMfVVp31VDIOeesR1VGf6uyjPtVb8ZZfcyN9lOdxtVXv1Qbu1kPrjfooNvXHGZgeQLwwMxfXl8Vc+tVWHXG3meOyh0PMD+Z73sjWvFZNYr5ZkidyEJ0rMYhFOn2UUQ31zeJa/VjrljrM6cmZeopR3dca9XG8Y0Zxx99rex/YfszW9lpRnmJUB9Ztz380znqjOsSlfA4D0wOI7fQCqR7F1QesHjMxYlyyDvzRGhxP27Fusx7ra1x14lj3myW58HNs+Ykb8eVx5qmcwRCv2JZO7KNS67dq9TC9GOo9Gm+t6R7/aC2zNWfq9DC9GNbwaHymxuy5Jm6egYcGUHTRojeC+9RWXevBz0NPh3hKzSGOeSoZi/CMEa+26+xLefl/g5zXzH8PkPmfJp2L1vpPPKwA5qlfda3T8hMzEwfmloO175W3rKnVo1VDz6OVC38rv5fzythovTPn3aoxk/uJnL3yev1l7+kBpBd6VueJRHiNUYcEVl9qt/QoT2u4rnUYUx90tbU+/ZTM/ybJ809523BLvpKvfA9c3zt798bLu30PucZAcO8Vxd2nNnQ/tD6xlIy1bK+ldiuXfkitG+n0UWpu6slAMpAMJAPzDPSnidXxm67bgM/4FKN6lO9xLqnlZzyqxVgrN/LT15Lf+giOXKVMBpKBZOC3GPgPAAD//8wk6woAAAXlSURBVO2b4ZGjMAyFUxcFUQ8FXB35c6WkGE6y/IhQbONkgdkjLzOcjSTL8JHxWzncbX7jc7vdXqKjrXSuttKhyUrxfpLoh69m9zkRg7bki/k01h8lv88DP1sSIAESIIH3CLwqSmO8X5i3+o00i0tzxE+0xXPE99h9DPqxRT608Ou57/vzaMdYtiRAAiRAAv0EXhWgf2wxsrQ4RxvO0fpE3oY+Wh/X04/jts41p8b4A/P0jEUsWxIgARIggW0CuwkQFu04ZVy44Y92jIcdrY/3MaV+Kdbb0PdtaR744UMLu7Ylm/ezTwLfROAxDfNtmOZH4abvo/xRN96fnsc0D/KH3jBp9H0e9Y++4tjHPA0Ym/u3UUa4z5JrkjzDPD0sn06XrinH30cdpz5p76PMfbfcMZ9Lze7xBHYToOMvlTOQAAn8XgK6uA/zoIIRdhHsXBb+LBYlv9en1T2KWNxUWKbcvigcBMfa2yDXsJpfRSmLkfqGcR7lMDGCCK5m5MmJBChAJ8LmVCTwLQS06rEKp3DHKkSiOPdpkkMqp5Vg3GaIUaqcFp8TNwS8CNowj2POJzFLBZTiRHi0EpN8gwhRnFPPkbZwxTQdRIACdBBYpiWBbyFgC70u7lpZyCdVLaiEsi3DMFFxYiJbb1MWhmW8i12LmG3DrW2+AnpWNk+ByfMn0RMRSoKW51fFySJG8cnQT24oQCcD53QkcE0CIgTpdxwVBFn0VYT8dphf4ZMYaAUkFYvsj5korYVKGb1WUXUBMsFxAiTzLRUQtvHuVnkl0RlV+OQ3K/hetvau+ZR+211RgH7bE+H1kMB/SUAFSCqLvJWVFv/8YoEJgfwW89dePnhWJ1IlqRDk3428RiUEuTpZxaPKWhj5CkjzocpxFdiqIjO7VlH6YoJty72K35KenUMJUIAOxcvkJNBPYL3QYgFdt7VsfmwpRv21T8tXG/NqNyHANpoXIB+bqhpZ+Add/FWgVGSwDecUSMcP8huRbplZKwKmFUzaQhMmGhsESl8wsJcg3IsHEKwUm3NgnixM6y09f7XsH02g/q08embmJ4ELENhn8TYQW7miX8/90cIZx8bYLb/GV2OwkFd+3Mc1jn/8FphukZlgJD3IYrLum6gtApFiRnkjTl8isKrlKXS6Ped+25HrtcrrWd3YVp8xG++aO8en17cjEZ6fQYACdAZlznFJAtUF+cO73crX8rd8ejner/3eI96KzxN9m+dSwaCKGaW6ef5fIBtpgmHVC3KZzV+v84ffb5LA5OpmERutstwWnAmP5TNhw/8v4ltwYH5mSwE6kzbnuhSB2mJcs+vNf+r7ZKyfy/dLD2HLjzG9cYhnWyZAjsaFAlT+ftBKAk0CpQVEbThqg0vjEIuxrRaxsS3l9Tb00frx3ub7GhPPazafj/06AeWJox71PR4K0Pc8a97pjgRKCzPSH+HT3D4vFrFaW4ovXV8cj5g4vsfuY9hvE/DPsh15bS8F6NrPl3d3EIHWAhJ9cZH35/7y4jjv037Nj3yt+Dj23XOfO471vm/qg3urrfEgQyNDAap9Q2gngQaB1gJyhE8vpZZX7Tj8Jfv4Wj/mbcUht4+Bje17BMjQeFGA3vveMJoEEoHWAvITn45tHRE/5oqtxsHm+94Gu9rioT79xPiaLQXzn24CJa7dgy8USAG60MPkrZxHoLWAHOHTOyvlhQ2tjyvZaoQ+ja3lo71NwPNuR17bSwG69vPl3R1IoLaI1Oxbl7I1Lvr9ue+X5oFf23cPnw95vI399wmQozGjAL3/3eEIEkgE4iJSWth7UcVcpXE+xvc1Np7H8T/1I99WHsSxLRNQfvEoR36HlQL0Hc+Zd3kQgb0W5J48rZiWT2/9p/6eHAchZtoLE6AAXfjh8tb+DwI94qAxrbiaD+NqfhDa8iOOLQnsSYACtCdN5iIBEiABEugmQAHqRsVAEiABEiCBPQlQgPakyVwkQAIkQALdBChA3agYSAIkQAIksCcBCtCeNJmLBEiABEigm8A/r9/eB7ae3LUAAAAASUVORK5CYII="

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-button {\n  display: block;\n  outline: 0 none;\n  -webkit-appearance: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0;\n  text-align: center;\n  font-size: 18px;\n  height: 47px;\n  line-height: 47px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  white-space: nowrap;\n  color: #000;\n  background-color: #fff;\n  border: 1PX solid #ddd;\n  border-radius: 5px; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button {\n    position: relative;\n    border: none; }\n  html:not([data-scale]) .am-button::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 10px;\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    pointer-events: none; } }\n\n.am-button-borderfix:before {\n  -webkit-transform: scale(0.49) !important;\n  -ms-transform: scale(0.49) !important;\n  transform: scale(0.49) !important; }\n\n.am-button.am-button-active {\n  background-color: #ddd; }\n\n.am-button.am-button-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  opacity: 0.6; }\n\n.am-button-primary {\n  color: #fff;\n  background-color: #108ee9;\n  border: 1PX solid #108ee9;\n  border-radius: 5px; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-primary {\n    position: relative;\n    border: none; }\n  html:not([data-scale]) .am-button-primary::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 10px;\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    pointer-events: none; } }\n\n.am-button-primary.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #0e80d2; }\n\n.am-button-primary.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4; }\n\n.am-button-ghost {\n  color: #108ee9;\n  background-color: transparent;\n  border: 1PX solid #108ee9;\n  border-radius: 5px; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost {\n    position: relative;\n    border: none; }\n  html:not([data-scale]) .am-button-ghost::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 10px;\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    pointer-events: none; } }\n\n.am-button-ghost.am-button-active {\n  color: rgba(16, 142, 233, 0.6);\n  background-color: transparent;\n  border: 1PX solid rgba(16, 142, 233, 0.6);\n  border-radius: 5px; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-active {\n    position: relative;\n    border: none; }\n  html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(16, 142, 233, 0.6);\n    border-radius: 10px;\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    pointer-events: none; } }\n\n.am-button-ghost.am-button-disabled {\n  color: rgba(0, 0, 0, 0.1);\n  border: 1PX solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  opacity: 1; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-disabled {\n    position: relative;\n    border: none; }\n  html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    pointer-events: none; } }\n\n.am-button-warning {\n  color: #fff;\n  background-color: #e94f4f; }\n\n.am-button-warning.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #d24747; }\n\n.am-button-warning.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4; }\n\n.am-button-inline {\n  display: inline-block;\n  padding: 0 15px; }\n\n.am-button-inline.am-button-icon {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.am-button-small {\n  font-size: 13px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 15px; }\n\n.am-button-icon {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.am-button > .am-button-icon {\n  margin-right: 0.5em; }\n", ""]);

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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getToken = getToken;
exports.getH5Token = getH5Token;
exports.setToken = setToken;
exports.setH5Token = setH5Token;
exports.clearToken = clearToken;
exports.clearH5Token = clearH5Token;
exports.getDeviceType = getDeviceType;
exports.setDeviceType = setDeviceType;
exports.getDeviceId = getDeviceId;
exports.setDeviceId = setDeviceId;
exports.getShowTitle = getShowTitle;
exports.setShowTitle = setShowTitle;
/* 用于存取token */
function getToken() {
    if (window) {
        return window.localStorage.getItem('Apptoken') ? window.localStorage.getItem('Apptoken') : '';
    }
    throw '非浏览器浏览';
}

function getH5Token() {
    if (window) {
        return window.localStorage.getItem('h5Token') ? window.localStorage.getItem('h5Token') : '';
    }
    throw '非浏览器浏览';
}

function setToken(token) {
    if (window) {
        window.localStorage.setItem('Apptoken', token);
    } else {
        throw "非浏览器浏览";
    }
}

function setH5Token(token) {
    if (window) {
        window.localStorage.setItem('h5Token', token);
    } else {
        throw "非浏览器浏览";
    }
}

function clearToken() {
    if (window) {
        window.localStorage.setItem('Apptoken', "");
    } else {
        throw "非浏览器浏览";
    }
}

function clearH5Token() {
    if (window) {
        window.localStorage.setItem('h5Token', "");
    } else {
        throw "非浏览器浏览";
    }
}

/* 用于存取设备系统信息 */
function getDeviceType() {
    if (window) {
        return window.localStorage.getItem('appdeviceType');
    }
    throw '非浏览器浏览';
}

function setDeviceType(token) {
    if (window) {
        window.localStorage.setItem('appdeviceType', token);
    } else {
        throw "非浏览器浏览";
    }
}

/* 用于存取设备识别码信息 */
function getDeviceId() {
    if (window) {
        if (window.localStorage.getItem('appDeviceId')) {
            return window.localStorage.getItem('appDeviceId');
        } else {
            setDeviceId(('' + Math.random()).split('.').join(''));
            return window.localStorage.getItem('appDeviceId');
        }
    }
    throw '非浏览器浏览';
}

function setDeviceId(id) {
    if (window) {
        window.localStorage.setItem('appDeviceId', id);
    } else {
        throw "非浏览器浏览";
    }
}

function getShowTitle() {
    if (window) {
        if (!window.localStorage.getItem('showTitle')) {
            window.localStorage.setItem('showTitle', 'h5');
        }
        return window.localStorage.getItem('showTitle');
    } else {
        throw "非浏览器浏览";
    }
}

function setShowTitle(type) {
    if (window) {
        window.localStorage.setItem('showTitle', type);
    } else {
        throw "非浏览器浏览";
    }
}

exports.default = {
    getToken: getToken,
    getH5Token: getH5Token,
    setToken: setToken,
    setH5Token: setH5Token,
    clearToken: clearToken,
    clearH5Token: clearH5Token,
    getDeviceType: getDeviceType,
    setDeviceType: setDeviceType,
    getDeviceId: getDeviceId,
    setDeviceId: setDeviceId,
    getShowTitle: getShowTitle,
    setShowTitle: setShowTitle
};

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVNJREFUWAntmLFKA0EQhmeWEzFIJIjiAySQ4jpfQsHm6ryKnW/gA9ilDtjoS6S7IpA0diKIcAoqQsb5l73OOE32SDHTXDG7+3/8M839TFqvk0n/46u5kbVcMNFIiPSTv1REVGvJgR97R3x9cnf/zhHms5mLyDA/wmYFZl4dHvTPi+hMglHiN71SC/F689XtdZgk6GulujSAIWAp1LRLSABmn/bGZ7PZy/Yk7Zeeq+r0m34WgAJLIKF2VHXXMMBNmnVEV5bQLnBXY/rLs1YbLJjhTpUDWeNwh9whywGr7zvkDlkOWH3fIXfIcsDq+w65Q5YDVt93yB2yHLD6vkOmQ4hEcCj9+Fvns/RbbbAEJVkllRI//lkU/3k0aZY4os4sC2J+0NQBIdUAKcRTddVpHKOaMY4BEIKrnQuswvF02iC5UrpbZo3X0k6BOHdBK2qqNhjA8gu7aHdjJbQZtwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgtJREFUWAnt2D1Lw0AYB/DnjlKrhhR8qzj6sunkpiAOIgqCVMWln0BwdHCo710ERRQdXAoO/QIu+g3UwcHXpR2ctSLUSluhPZ+nEmhtzjRpmiy9Je1dcv9fL2nuOAZY3kMhNZ1N7YiCmGIAAwIAD/UvGCIwK844u2zxs3Bn9PyTFTGZ1K0Qor/+BHkCYyyhNKvDvDgyLmOISQNCFo6fpuVuh1vQgiBw9VaV/WS0cKce4LJgyReycEmba9UNkNHQuzJCXFGgY2UV1Nlghc9xEGECmxFoHRkF/8KiuyAN4+3tA5HPQ/L40D3QX8zb3i5kbq7dAeljriowVKH/DHk84Al0615gttIMRgoKrG9Dz8kpKBOTZvPLzjeLkYIKX2l8h3NoW1q2jLKCkYKSB/uQfXwAXKNYQlnFSEHiOwevkS1LqFowUhA1WEHVivkXZBZlB8YQVC3KLkxVICOUnRjKYi/BGVyoVVeYtwm6whvgGxyiRTl8nEVBGRsHbW76nQ7038DVJZgEUaelKC2EJko7MNSf/tShJekcS/991GwnhvozdcvoAq3QSKlz85B7foLs/Z1WXfPRMqjmZEkHpm+ZpB/bqhsgo6HktCVidJJT7WThuBOUcCrQKAdHJo4gdmF0olPttHHFFZ+6RptFToXKcoobVmjh7bFYinauUHeEC8S4k88UZRUzMZsMZPkBZsYipLItvV0AAAAASUVORK5CYII="

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames2 = __webpack_require__(6);

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(17);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _icon = __webpack_require__(23);

var _icon2 = _interopRequireDefault(_icon);

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

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return React.createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3['default'])(this, Button);
        return (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Button, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                inline = _a.inline,
                disabled = _a.disabled,
                icon = _a.icon,
                loading = _a.loading,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                onClick = _a.onClick,
                restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);
            var iconType = loading ? 'loading' : icon;
            var wrapCls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-primary', type === 'primary'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-ghost', type === 'ghost'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-warning', type === 'warning'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-small', size === 'small'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-inline', inline), (0, _defineProperty3['default'])(_classnames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classnames, prefixCls + '-icon', !!iconType), _classnames));
            var kids = React.Children.map(children, insertSpace);
            var iconEl = void 0;
            if (typeof iconType === 'string') {
                iconEl = React.createElement(_icon2['default'], { 'aria-hidden': 'true', type: iconType, size: size === 'small' ? 'xxs' : 'md', className: prefixCls + '-icon' });
            } else if (iconType) {
                var rawCls = iconType.props && iconType.props.className;
                var cls = (0, _classnames3['default'])('am-icon', prefixCls + '-icon', size === 'small' ? 'am-icon-xxs' : 'am-icon-md');
                iconEl = React.cloneElement(iconType, {
                    className: rawCls ? rawCls + ' ' + cls : cls
                });
            }
            // use div, button native is buggy @yiminghe
            return React.createElement(
                _rmcFeedback2['default']
                // tslint:disable-next-line:jsx-no-multiline-js
                ,
                { activeClassName: activeClassName || (activeStyle ? prefixCls + '-active' : undefined), disabled: disabled, activeStyle: activeStyle },
                React.createElement(
                    'a',
                    (0, _extends3['default'])({ role: 'button', className: wrapCls }, restProps, { onClick: disabled ? undefined : onClick, 'aria-disabled': disabled }),
                    iconEl,
                    kids
                )
            );
        }
    }]);
    return Button;
}(React.Component);

Button.defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {}
};
exports['default'] = Button;
module.exports = exports['default'];

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

__webpack_require__(24);

__webpack_require__(52);

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
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
		module.hot.accept(22, function() {
			var newContent = __webpack_require__(22);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.15';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // with lookup (in case of e.g. prototype pollution), and strip newlines if any.
      // A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/[\r\n]/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      // Like with sourceURL, we take care to not check the option's prototype,
      // as this configuration is a code injection vector.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76), __webpack_require__(54)(module)))

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".hnaIous {\n  position: relative; }\n  .hnaIous .banner {\n    width: 100vw; }\n  .hnaIous .maxLimit {\n    position: absolute;\n    top: 250px;\n    left: 23px;\n    height: 194px;\n    background: #ffffff;\n    border: 1px solid #f1f1f1;\n    border-radius: 6px; }\n    .hnaIous .maxLimit p {\n      font-size: 14px;\n      color: #444d54;\n      line-height: 20px;\n      text-align: center;\n      margin: 1.152rem 0 0.85333rem 0; }\n    .hnaIous .maxLimit span {\n      display: block;\n      font-size: 40px;\n      color: #454f55;\n      text-align: center;\n      font-weight: bolder; }\n    .hnaIous .maxLimit div {\n      width: 9.728rem;\n      height: 1px;\n      background: #e35b51;\n      border-radius: 3.5px;\n      margin: 0.34133rem 2.176rem 1.45067rem 2.176rem; }\n    .hnaIous .maxLimit b {\n      display: block;\n      text-align: center;\n      line-height: 14px;\n      font-size: 10px;\n      color: #9b9b9b; }\n  .hnaIous .my-radio {\n    position: absolute;\n    bottom: 84px;\n    width: 100%;\n    font-size: 12px;\n    line-height: 17px;\n    padding: 0 44px;\n    color: #454f55;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .hnaIous .my-radio img {\n      height: 15px;\n      margin-right: 8px; }\n    .hnaIous .my-radio span {\n      font-size: 12px;\n      letter-spacing: 0;\n      line-height: 17px;\n      text-align: left; }\n      .hnaIous .my-radio span b {\n        color: #e1514c; }\n    .hnaIous .my-radio .protocol {\n      color: #e1514c;\n      text-align: center; }\n  .hnaIous .next {\n    display: block;\n    background: #e1514c;\n    width: 13.61067rem;\n    height: 1.87733rem;\n    border: none;\n    border-radius: 16px 0 16px 0;\n    position: absolute !important;\n    left: 28px;\n    bottom: 26px;\n    color: #fff;\n    font-size: 17px;\n    line-height: 44px;\n    text-align: center; }\n  .hnaIous .next::before {\n    border: none !important; }\n  .hnaIous .am-button-disabled {\n    background: #bdbdbd; }\n\n.am-modal-wrap .am-modal-header .am-modal-title {\n  margin-top: 0.42667rem;\n  font-size: 17px;\n  color: #444d54;\n  letter-spacing: -0.41px;\n  text-align: center;\n  font-weight: 900; }\n\n.am-modal-wrap .am-modal-title {\n  height: 22px;\n  line-height: 22px; }\n\n.am-modal-wrap .am-modal-popup {\n  height: 80%; }\n\n.am-modal-wrap .am-modal-body {\n  color: #444d54;\n  overflow: auto; }\n  .am-modal-wrap .am-modal-body .modal_content {\n    position: fixed;\n    top: 28%;\n    bottom: 0;\n    overflow-y: scroll;\n    width: 14.72rem;\n    height: auto;\n    -webkit-overflow-scrolling: touch; }\n  .am-modal-wrap .am-modal-body .title {\n    margin: 0 0.64rem;\n    position: fixed;\n    bottom: 44px; }\n\n.hint {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  width: 100%;\n  height: 100%; }\n  .hint .back_wrap {\n    width: 100%;\n    height: 80%;\n    position: absolute;\n    bottom: 0;\n    background: #fff;\n    padding: 45px 8px 0 12px; }\n  .hint .back_title {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n    font-size: 18px;\n    font-weight: 900;\n    color: #000; }\n  .hint .back_content {\n    width: 100%;\n    font-size: 14px;\n    line-height: 22px;\n    letter-spacing: 2px;\n    padding-bottom: 100px;\n    overflow-y: scroll;\n    height: 100%; }\n\n.footer {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  height: 44px;\n  background: #fff;\n  -webkit-overflow-scroll: touch; }\n  .footer .no {\n    display: inline-block;\n    text-align: center;\n    font-size: 17px;\n    line-height: 17px;\n    letter-spacing: -0.41px;\n    padding: 13.5px 0;\n    border: 1px solid #f1f1f1;\n    flex: 1;\n    color: #444d54;\n    width: 50%; }\n  .footer .yes {\n    width: 50%;\n    text-align: center;\n    display: inline-block;\n    background: #e1514c;\n    font-size: 17px;\n    line-height: 17px;\n    color: #ffffff;\n    letter-spacing: -0.41px;\n    padding: 13.5px 0;\n    flex: 1;\n    border-radius: 0; }\n  .footer .yes::before {\n    border: none !important; }\n  .footer .am-button-disabled {\n    background: #bdbdbd; }\n\n.am-navbar-light .am-navbar-title {\n  color: #444d54;\n  font-size: 17px; }\n\n.am-modal-close {\n  top: 0.42667rem; }\n  .am-modal-close .am-modal-close-x {\n    margin: 0.128rem; }\n", ""]);

// exports


/***/ })

},[1029]);