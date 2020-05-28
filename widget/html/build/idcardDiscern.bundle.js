webpackJsonp([22],{

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _activityIndicator = __webpack_require__(330);

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

var _button = __webpack_require__(49);

var _button2 = _interopRequireDefault(_button);

var _navBar = __webpack_require__(26);

var _navBar2 = _interopRequireDefault(_navBar);

var _icon = __webpack_require__(23);

var _icon2 = _interopRequireDefault(_icon);

var _toast = __webpack_require__(46);

var _toast2 = _interopRequireDefault(_toast);

var _stringify = __webpack_require__(34);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _modal = __webpack_require__(84);

var _modal2 = _interopRequireDefault(_modal);

__webpack_require__(331);

__webpack_require__(51);

__webpack_require__(27);

__webpack_require__(24);

__webpack_require__(47);

__webpack_require__(88);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _loginToken = __webpack_require__(33);

var _antdMobile = __webpack_require__(59);

__webpack_require__(1050);

__webpack_require__(25);

var _linkConfig = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var operation = _modal2.default.operation;
var alert = _modal2.default.alert;

var IdcardDiscern = function (_React$Component) {
  (0, _inherits3.default)(IdcardDiscern, _React$Component);

  function IdcardDiscern(props) {
    (0, _classCallCheck3.default)(this, IdcardDiscern);

    var _this = (0, _possibleConstructorReturn3.default)(this, (IdcardDiscern.__proto__ || (0, _getPrototypeOf2.default)(IdcardDiscern)).call(this, props));

    _this.uploadIdcardFrontImg = function () {
      _this.openTips("ID_CARD_1");
    };

    _this.uploadIdcardBackImg = function () {
      _this.openTips("ID_CARD_2");
    };

    _this.openTips = function (str) {
      operation([{ text: "选择照片", onPress: function onPress() {
          return _this.getChoice("Choice", str);
        } }, { text: "照相机", onPress: function onPress() {
          return _this.getCamera("camera", str);
        } }, { text: "相册", onPress: function onPress() {
          return _this.getAlbum("album", str);
        } }, { text: "取消", onPress: function onPress() {
          return _this.getcancel("cancel", str);
        } }]);
    };

    _this.getcancel = function (str, type) {};

    _this.getCamera = function (str, type) {
      //调用相机
      var hasPermission = _this.state.hasPermission && _this.state.hasPermission({ list: ["camera", 'photos'] });
      if (hasPermission[0].granted && hasPermission[1].granted) {
        _this.uploadImg(str, type);
      } else {
        // 申请权限
        alert("权限申请", '为保证您正常地使用此功能，需要获取您的相机使用权限，请允许。', [{ text: "返回", onPress: function onPress() {} }, {
          text: "去允许",
          onPress: function onPress() {
            _this.state.requestPermission && _this.state.requestPermission({ list: ["camera", 'photos'], code: 1 }, function (ret) {});
          }
        }]);
      }
    };

    _this.getAlbum = function (str, type) {
      //调用相册
      var hasPermission = _this.state.hasPermission && _this.state.hasPermission({ list: ["photos"] });
      // console.log(JSON.stringify(hasPermission))
      if (hasPermission[0].granted) {
        _this.uploadImg(str, type);
      } else {
        // 申请权限
        alert("权限申请", "为保证您正常地使用此功能，需要获取您的相册权限，请允许。", [{ text: "取消", onPress: function onPress() {} }, {
          text: "去允许",
          onPress: function onPress() {
            _this.state.requestPermission && _this.state.requestPermission({ list: ["photos"], code: 1 }, function (ret) {});
          }
        }]);
      }
    };

    _this.uploadImg = function (str, type) {
      var that = _this;
      window.api.getPicture({
        sourceType: str,
        // encodingType: "png",
        mediaValue: "pic",
        // destinationType: "url",
        destinationType: "base64",
        quality: 99,
        targetWidth: 1280,
        targetHeight: 800
      }, function (ret, err) {
        if (ret) {
          // console.log("地址："+JSON.stringify(ret))
          // const url = ret.data
          // that.getFNImageClip(url)
          if (type === "ID_CARD_1") {
            that.setState({
              cardPhoto1: ret.base64Data
            }, function () {
              that.authCode();
            });
          } else {
            that.setState({
              cardPhoto2: ret.base64Data
            }, function () {
              that.authCode();
            });
          }
        }
      });
    };

    _this.authCode = function () {
      if (_this.state.cardPhoto1 !== "" && _this.state.cardPhoto2 !== "") {
        _this.setState({
          disabled: false
        });
      } else {
        _this.setState({
          disabled: true
        });
      }
    };

    _this.goback = function () {
      if (window.api) {
        window.api.closeFrame();
      }
    };

    _this.goFaceRecognition = function () {
      var that = _this;
      var cardPhoto1 = that.state.cardPhoto1.substr(that.state.cardPhoto1.indexOf(",") + 1);
      var cardPhoto2 = that.state.cardPhoto2.substr(that.state.cardPhoto2.indexOf(",") + 1);
      // console.log(JSON.stringify(cardPhoto1))
      // console.log(JSON.stringify(cardPhoto2))
      var data1 = {
        file: cardPhoto1,
        fileType: "ID_CARD_1"
      };
      var data2 = {
        file: cardPhoto2,
        fileType: "ID_CARD_2"
      };
      that.setState({
        animating: true
      });
      window.api.ajax({
        url: (0, _linkConfig.getLink)() + (0, _linkConfig.getApi)("ocrIdCard"),
        method: "post",
        headers: {
          "Content-Type": "application/json",
          appToken: (0, _loginToken.getToken)()
        },
        dataType: "json",
        data: {
          body: (0, _stringify2.default)(data1)
        }
      }, function (ret, err) {
        // console.log(JSON.stringify(ret))
        // console.log(JSON.stringify(err))

        if (ret == undefined || err && err.code == 0 || err && err.code == '0') {
          _toast2.default.info('上传失败，请重新上传正面，保证图片的清晰度，光亮度', 4);
          that.setState({
            animating: false
          });
        }
        if (ret.code == "200" || ret.code == 200) {
          window.api.ajax({
            url: (0, _linkConfig.getLink)() + (0, _linkConfig.getApi)("ocrIdCard"),
            method: "post",
            headers: {
              "Content-Type": "application/json",
              appToken: (0, _loginToken.getToken)()
            },
            dataType: "json",
            data: {
              body: (0, _stringify2.default)(data2)
            }
          }, function (res, error) {
            // console.log(JSON.stringify(res))
            // console.log(JSON.stringify(error))
            if (ret == undefined || ret == 'undefined' || error && error.code == 0 || error && error.code == '0') {
              _toast2.default.info('上传失败，请重新上传反面，保证图片的清晰度，光亮度', 4);
              that.setState({
                animating: false
              });
            }

            if (res.code == "200") {
              that.setState({
                animating: false
              });
              window.api.openFrame({
                name: "faceRecognition",
                url: "./faceRecognition.html",
                rect: {
                  w: "auto",
                  marginTop: window.api.safeArea.top,
                  marginBottom: window.api.safeArea.bottom
                },
                useWKWebView: true,
                historyGestureEnabled: true
              });
            } else {
              that.setState({
                animating: false
              });
              if (error) {
                _toast2.default.info("请求失败", 3);
              } else {
                _toast2.default.info(res.message, 3);
              }
            }
          });
        } else {
          that.setState({
            animating: false
          });
          if (err) {
            _toast2.default.info("请求失败", 3);
          } else {
            _toast2.default.info(ret.message, 3);
          }
        }
      });
    };

    _this.state = {
      deviceType: (0, _loginToken.getShowTitle)(),
      hasPermission: null,
      permissionList: null,
      requestPermission: null,
      cardPhoto1: "",
      cardPhoto2: "",
      disabled: true,
      animating: false
      // FNImageClip: null
    };
    return _this;
  }

  (0, _createClass3.default)(IdcardDiscern, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var that = this;
      window.apiready = function () {
        var hasPermission = window.api.hasPermission; // 相机权限检查
        var requestPermission = window.api.requestPermission;
        // const FNImageClip = api.require('FNImageClip');
        that.setState({
          hasPermission: hasPermission,
          requestPermission: requestPermission
          // FNImageClip,
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var animating = this.state.animating;

      return _react2.default.createElement(
        "div",
        {
          className: "rateCalc",
          style: { minHeight: "100%", backgroundColor: "#FFF" }
        },
        _react2.default.createElement(
          _navBar2.default,
          {
            mode: "light",
            icon: _react2.default.createElement(_icon2.default, { type: "left", color: "#333333" }),
            onLeftClick: function onLeftClick() {
              return _this2.goback();
            },
            style: {
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 1,
              fontSize: "18px",
              color: "#444D54",
              borderBottom: "1px solid #EFEFEF"
            }
          },
          "\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u7167\u7247"
        ),
        _react2.default.createElement("div", { style: { height: "45px" } }),
        _react2.default.createElement(
          "div",
          { className: "header-nav" },
          "请上传" + "本人身份证照片"
        ),
        _react2.default.createElement(
          "div",
          { className: "idImg" },
          this.state.cardPhoto1 === "" ? _react2.default.createElement("img", {
            src: __webpack_require__(1051),
            alt: "",
            onClick: this.uploadIdcardFrontImg
          }) : _react2.default.createElement("img", {
            src: this.state.cardPhoto1,
            alt: "",
            onClick: this.uploadIdcardFrontImg
          }),
          this.state.cardPhoto2 === "" ? _react2.default.createElement("img", {
            src: __webpack_require__(1052),
            alt: "",
            onClick: this.uploadIdcardBackImg
          }) : _react2.default.createElement("img", {
            src: this.state.cardPhoto2,
            alt: "",
            onClick: this.uploadIdcardBackImg
          })
        ),
        _react2.default.createElement(
          "div",
          {
            className: "worning"
          },
          "\u8BF7\u4FDD\u8BC1\u8BC1\u4EF6\u5728\u6709\u6548\u671F\u9650\u5185"
        ),
        _react2.default.createElement(
          _button2.default,
          {
            disabled: this.state.disabled,
            className: "next",
            onClick: function onClick() {
              return alert("照片上传", '是否上传身份证照片？', [{ text: "返回", onPress: function onPress() {} }, {
                text: "确定",
                onPress: function onPress() {
                  _this2.goFaceRecognition();
                }
              }]);
            }
          },
          "\u786E\u8BA4\u4E0A\u4F20"
        ),
        _react2.default.createElement("div", { style: { height: "30px" } }),
        _react2.default.createElement(_activityIndicator2.default, { toast: true, animating: animating }),
        animating && _react2.default.createElement(
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
  return IdcardDiscern;
}(_react2.default.Component);

IdcardDiscern.displayName = "RateCalc";
IdcardDiscern.propTypes = {};
IdcardDiscern.defaultProps = {};


_reactDom2.default.render(_react2.default.createElement(IdcardDiscern, null), document.getElementById("idcard"));

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(563);
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
		module.hot.accept(563, function() {
			var newContent = __webpack_require__(563);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fdfd2008d64a2084eaf6eed317ed55de.png";

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "60398a489d3d449bf603cc2a182821ef.png";

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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalComponent = undefined;

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(11);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames3 = __webpack_require__(6);

var _classnames4 = _interopRequireDefault(_classnames3);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _rmcDialog = __webpack_require__(132);

var _rmcDialog2 = _interopRequireDefault(_rmcDialog);

var _rmcFeedback = __webpack_require__(17);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

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

var ModalComponent = exports.ModalComponent = function (_React$Component) {
    (0, _inherits3['default'])(ModalComponent, _React$Component);

    function ModalComponent() {
        (0, _classCallCheck3['default'])(this, ModalComponent);
        return (0, _possibleConstructorReturn3['default'])(this, (ModalComponent.__proto__ || Object.getPrototypeOf(ModalComponent)).apply(this, arguments));
    }

    return ModalComponent;
}(React.Component);

var Modal = function (_ModalComponent) {
    (0, _inherits3['default'])(Modal, _ModalComponent);

    function Modal() {
        (0, _classCallCheck3['default'])(this, Modal);
        return (0, _possibleConstructorReturn3['default'])(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Modal, [{
        key: 'renderFooterButton',
        value: function renderFooterButton(button, prefixCls, i) {
            var buttonStyle = {};
            if (button.style) {
                buttonStyle = button.style;
                if (typeof buttonStyle === 'string') {
                    var styleMap = {
                        cancel: {},
                        'default': {},
                        destructive: { color: 'red' }
                    };
                    buttonStyle = styleMap[buttonStyle] || {};
                }
            }
            var onClickFn = function onClickFn(e) {
                e.preventDefault();
                if (button.onPress) {
                    button.onPress();
                }
            };
            return React.createElement(
                _rmcFeedback2['default'],
                { activeClassName: prefixCls + '-button-active', key: i },
                React.createElement(
                    'a',
                    { className: prefixCls + '-button', role: 'button', style: buttonStyle, onClick: onClickFn },
                    button.text || 'Button'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this,
                _classnames2;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                wrapClassName = _a.wrapClassName,
                transitionName = _a.transitionName,
                maskTransitionName = _a.maskTransitionName,
                style = _a.style,
                platform = _a.platform,
                _a$footer = _a.footer,
                footer = _a$footer === undefined ? [] : _a$footer,
                operation = _a.operation,
                animated = _a.animated,
                transparent = _a.transparent,
                popup = _a.popup,
                animationType = _a.animationType,
                restProps = __rest(_a, ["prefixCls", "className", "wrapClassName", "transitionName", "maskTransitionName", "style", "platform", "footer", "operation", "animated", "transparent", "popup", "animationType"]);
            var btnGroupClass = (0, _classnames4['default'])(prefixCls + '-button-group-' + (footer.length === 2 && !operation ? 'h' : 'v'), prefixCls + '-button-group-' + (operation ? 'operation' : 'normal'));
            var footerDom = footer.length ? React.createElement(
                'div',
                { className: btnGroupClass, role: 'group' },
                footer.map(function (button, i) {
                    return (
                        // tslint:disable-next-line:jsx-no-multiline-js
                        _this3.renderFooterButton(button, prefixCls, i)
                    );
                })
            ) : null;
            var transName = void 0;
            var maskTransName = void 0;
            if (animated) {
                // tslint:disable-next-line:prefer-conditional-expression
                if (transparent) {
                    transName = maskTransName = 'am-fade';
                } else {
                    transName = maskTransName = 'am-slide-up';
                }
                if (popup) {
                    transName = animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
                    maskTransName = 'am-fade';
                }
            }
            var wrapCls = (0, _classnames4['default'])(wrapClassName, (0, _defineProperty3['default'])({}, prefixCls + '-wrap-popup', popup));
            var cls = (0, _classnames4['default'])(className, (_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-transparent', transparent), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-popup', popup), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-popup-' + animationType, popup && animationType), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-android', platform === 'android'), _classnames2));
            return React.createElement(_rmcDialog2['default'], (0, _extends3['default'])({}, restProps, { prefixCls: prefixCls, className: cls, wrapClassName: wrapCls, transitionName: transitionName || transName, maskTransitionName: maskTransitionName || maskTransName, style: style, footer: footerDom }));
        }
    }]);
    return Modal;
}(ModalComponent);

exports['default'] = Modal;

Modal.defaultProps = {
    prefixCls: 'am-modal',
    transparent: false,
    popup: false,
    animationType: 'slide-down',
    animated: true,
    style: {},
    onShow: function onShow() {},

    footer: [],
    closable: false,
    operation: false,
    platform: 'ios'
};

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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = closest;
function closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    var p = el;
    while (p) {
        if (matchesSelector.call(p, selector)) {
            return p;
        }
        p = p.parentElement;
    }
    return null;
}
module.exports = exports["default"];

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-modal {\n  position: relative; }\n\n.am-modal:not(.am-modal-transparent):not(.am-modal-popup) {\n  width: 100%;\n  height: 100%; }\n\n.am-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.am-modal-mask-hidden {\n  display: none; }\n\n.am-modal-wrap {\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  z-index: 999;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transform: translateZ(1px);\n  transform: translateZ(1px); }\n\n.am-modal-wrap-popup {\n  display: block; }\n\n.am-modal-transparent {\n  width: 270px; }\n\n.am-modal-transparent .am-modal-content {\n  border-radius: 7px;\n  padding-top: 15px; }\n\n.am-modal-transparent .am-modal-content .am-modal-body {\n  padding: 0 15px 15px; }\n\n.am-modal-popup {\n  position: fixed;\n  left: 0;\n  width: 100%; }\n\n.am-modal-popup-slide-down {\n  top: 0; }\n\n.am-modal-popup-slide-up {\n  bottom: 0; }\n\n.am-modal-popup .am-modal-content {\n  padding-bottom: env(safe-area-inset-bottom); }\n\n.am-modal-title {\n  margin: 0;\n  font-size: 18px;\n  line-height: 1;\n  color: #000;\n  text-align: center; }\n\n.am-modal-header {\n  padding: 6px 15px 15px; }\n\n.am-modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 0;\n  background-clip: padding-box;\n  text-align: center;\n  height: 100%;\n  overflow: hidden; }\n\n.am-modal-close {\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n  outline: none;\n  position: absolute;\n  right: 15px;\n  z-index: 999;\n  height: 21px;\n  width: 21px; }\n\n.am-modal-close-x {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'30'%20height%3D'30'%20viewBox%3D'0%200%2030%2030'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%20%3Cdefs%3E%3C%2Fdefs%3E%20%3Cg%20id%3D'ALL-ICON'%20stroke%3D'none'%20stroke-width%3D'1'%20fill%3D'none'%20fill-rule%3D'evenodd'%3E%20%3Cg%20id%3D'Rectangle-283-%2B-Rectangle-283'%20fill%3D'%23888888'%3E%20%3Crect%20id%3D'Rectangle-283'%20transform%3D'translate(14.849242%2C%2014.849242)%20rotate(-315.000000)%20translate(-14.849242%2C%20-14.849242)%20'%20x%3D'-5.1507576'%20y%3D'13.8492424'%20width%3D'40'%20height%3D'2'%3E%3C%2Frect%3E%20%3Crect%20id%3D'Rectangle-283'%20transform%3D'translate(14.849242%2C%2014.849242)%20scale(-1%2C%201)%20rotate(-315.000000)%20translate(-14.849242%2C%20-14.849242)%20'%20x%3D'-5.1507576'%20y%3D'13.8492424'%20width%3D'40'%20height%3D'2'%3E%3C%2Frect%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E\"); }\n\n.am-modal-body {\n  font-size: 15px;\n  color: #888;\n  height: 100%;\n  line-height: 1.5;\n  overflow: auto; }\n\n.am-modal-button-group-h {\n  position: relative;\n  border-top: 1PX solid #ddd;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-modal-button-group-h {\n    border-top: none; }\n  html:not([data-scale]) .am-modal-button-group-h::before {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    -webkit-transform-origin: 50% 50%;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scaleY(0.5);\n    -ms-transform: scaleY(0.5);\n    transform: scaleY(0.5); } }\n\n@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-modal-button-group-h::before {\n    -webkit-transform: scaleY(0.33);\n    -ms-transform: scaleY(0.33);\n    transform: scaleY(0.33); } }\n\n.am-modal-button-group-h .am-modal-button {\n  -webkit-touch-callout: none;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #108ee9;\n  font-size: 18px;\n  height: 50px;\n  line-height: 50px;\n  display: block;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.am-modal-button-group-h .am-modal-button:first-child {\n  color: #000; }\n\n.am-modal-button-group-h .am-modal-button:last-child {\n  position: relative;\n  border-left: 1PX solid #ddd; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-modal-button-group-h .am-modal-button:last-child {\n    border-left: none; }\n  html:not([data-scale]) .am-modal-button-group-h .am-modal-button:last-child::before {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    width: 1PX;\n    height: 100%;\n    -webkit-transform-origin: 100% 50%;\n    -ms-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scaleX(0.5);\n    -ms-transform: scaleX(0.5);\n    transform: scaleX(0.5); } }\n\n@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-modal-button-group-h .am-modal-button:last-child::before {\n    -webkit-transform: scaleX(0.33);\n    -ms-transform: scaleX(0.33);\n    transform: scaleX(0.33); } }\n\n.am-modal-button-group-v .am-modal-button {\n  -webkit-touch-callout: none;\n  position: relative;\n  border-top: 1PX solid #ddd;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #108ee9;\n  font-size: 18px;\n  height: 50px;\n  line-height: 50px;\n  display: block;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-modal-button-group-v .am-modal-button {\n    border-top: none; }\n  html:not([data-scale]) .am-modal-button-group-v .am-modal-button::before {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    -webkit-transform-origin: 50% 50%;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scaleY(0.5);\n    -ms-transform: scaleY(0.5);\n    transform: scaleY(0.5); } }\n\n@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-modal-button-group-v .am-modal-button::before {\n    -webkit-transform: scaleY(0.33);\n    -ms-transform: scaleY(0.33);\n    transform: scaleY(0.33); } }\n\n.am-modal-button-active {\n  background-color: #ddd; }\n\n.am-modal-input-container {\n  margin-top: 9px;\n  border: 1PX solid #ddd;\n  border-radius: 3px; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-modal-input-container {\n    position: relative;\n    border: none; }\n  html:not([data-scale]) .am-modal-input-container::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 6px;\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    pointer-events: none; } }\n\n.am-modal-input {\n  height: 36px;\n  line-height: 1; }\n\n.am-modal-input:nth-child(2) {\n  position: relative;\n  border-top: 1PX solid #ddd; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-modal-input:nth-child(2) {\n    border-top: none; }\n  html:not([data-scale]) .am-modal-input:nth-child(2)::before {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    -webkit-transform-origin: 50% 50%;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scaleY(0.5);\n    -ms-transform: scaleY(0.5);\n    transform: scaleY(0.5); } }\n\n@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-modal-input:nth-child(2)::before {\n    -webkit-transform: scaleY(0.33);\n    -ms-transform: scaleY(0.33);\n    transform: scaleY(0.33); } }\n\n.am-modal-input input {\n  position: relative;\n  border: 0;\n  width: 98%;\n  height: 34px;\n  top: 1PX;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0; }\n\n.am-modal-input input::-webkit-input-placeholder {\n  font-size: 14px;\n  color: #ccc;\n  padding-left: 8px; }\n\n.am-modal-input input::-moz-placeholder {\n  font-size: 14px;\n  color: #ccc;\n  padding-left: 8px; }\n\n.am-modal-input input::-ms-input-placeholder {\n  font-size: 14px;\n  color: #ccc;\n  padding-left: 8px; }\n\n.am-modal-input input::placeholder {\n  font-size: 14px;\n  color: #ccc;\n  padding-left: 8px; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content {\n  border-radius: 0; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-header {\n  padding: 9px 24px 12px; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-header .am-modal-title {\n  text-align: left;\n  font-size: 21px;\n  color: #000; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body {\n  color: #000;\n  text-align: left;\n  padding: 0 24px 15px; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body .am-modal-input-container {\n  border: 0;\n  border-bottom: 1PX solid #ddd; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body .am-modal-input-container:before {\n  display: none !important; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body .am-modal-input-container {\n    border-bottom: none; }\n  html:not([data-scale]) .am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body .am-modal-input-container::after {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    -webkit-transform-origin: 50% 100%;\n    -ms-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scaleY(0.5);\n    -ms-transform: scaleY(0.5);\n    transform: scaleY(0.5); } }\n\n@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body .am-modal-input-container::after {\n    -webkit-transform: scaleY(0.33);\n    -ms-transform: scaleY(0.33);\n    transform: scaleY(0.33); } }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body .am-modal-input-container .am-modal-input:first-child {\n  border-top: 0; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-body .am-modal-input-container .am-modal-input:first-child:before {\n  display: none !important; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer {\n  padding-bottom: 12px; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-h {\n  overflow: hidden;\n  border-top: 0;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 0 12px; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-h:before {\n  display: none !important; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-h .am-modal-button {\n  -webkit-box-flex: initial;\n  -webkit-flex: initial;\n  -ms-flex: initial;\n  flex: initial;\n  margin-left: 3px;\n  padding: 0 15px;\n  height: 48px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-h .am-modal-button:first-child {\n  color: #777; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-h .am-modal-button:last-child {\n  border-left: 0; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-h .am-modal-button:last-child:before {\n  display: none !important; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-v.am-modal-button-group-normal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  overflow: hidden;\n  padding: 0 12px; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-v.am-modal-button-group-normal .am-modal-button {\n  border-top: 0;\n  padding: 0 15px;\n  margin-left: 3px;\n  height: 48px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-v.am-modal-button-group-normal .am-modal-button:before {\n  display: none !important; }\n\n.am-modal.am-modal-transparent.am-modal-android .am-modal-content .am-modal-footer .am-modal-button-group-operation .am-modal-button {\n  text-align: start;\n  padding-left: 15px; }\n\n.am-modal.am-modal-operation .am-modal-content {\n  border-radius: 7px;\n  height: auto;\n  padding-top: 0; }\n\n.am-modal.am-modal-operation .am-modal-content .am-modal-body {\n  padding: 0 !important; }\n\n.am-modal.am-modal-operation .am-modal-content .am-modal-button {\n  color: #000;\n  text-align: left;\n  padding-left: 15px; }\n\n.am-modal-alert-content,\n.am-modal-propmt-content {\n  zoom: 1;\n  overflow: hidden; }\n", ""]);

// exports


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(18);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(181);
exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-toast-notice-content .am-toast-text {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.rateCalc {\n  position: relative; }\n  .rateCalc .header-nav {\n    color: #444d54;\n    font-size: 0.68267rem;\n    letter-spacing: -0.39px;\n    text-align: center;\n    padding: 0.85333rem 0 0.59733rem; }\n  .rateCalc .idImg {\n    margin: 0 1.17333rem; }\n    .rateCalc .idImg img {\n      display: block;\n      width: 13.65333rem;\n      height: 8.53333rem;\n      margin-bottom: 0.64rem; }\n  .rateCalc .worning {\n    font-size: 0.59733rem;\n    color: #e1514c;\n    letter-spacing: -0.34px;\n    text-align: center;\n    margin-top: 50px; }\n  .rateCalc .next {\n    display: block;\n    background: #e1514c;\n    width: 13.61067rem;\n    height: 1.87733rem;\n    border: none;\n    border-radius: 16px 0 16px 0;\n    padding: 0.576rem 0;\n    color: #fff;\n    font-size: 17px;\n    line-height: 17px;\n    text-align: center;\n    margin: 0.512rem 1.19467rem 0; }\n  .rateCalc .next::before {\n    border: none !important; }\n  .rateCalc .am-button-disabled {\n    background: #bdbdbd;\n    color: #e63232; }\n  .rateCalc .title {\n    font-size: 0.59733rem;\n    color: #e1514c;\n    letter-spacing: -0.34px;\n    text-align: center; }\n  .rateCalc .am-activity-indicator-content {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0);\n    border-radius: 0px; }\n  .rateCalc .am-activity-indicator-spinner {\n    background-image: url(" + escape(__webpack_require__(333)) + ");\n    width: 86px;\n    height: 86px;\n    background-size: 100%;\n    border-radius: 8px; }\n\n.loader_wrap {\n  width: 118px;\n  height: 118px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin: -47px 0 0 -59px;\n  border-radius: 14px;\n  background-color: #171717;\n  font-size: 14px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center; }\n\n.loader_img {\n  width: 25px;\n  height: 25px;\n  background-image: url(" + escape(__webpack_require__(334)) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: 10px; }\n\n.loader_text {\n  position: relative;\n  bottom: -26px;\n  color: #fff; }\n\n.am-navbar-light .am-navbar-title {\n  color: #444d54;\n  font-size: 0.72533rem; }\n\n.am-modal-content {\n  background-color: rgba(0, 0, 0, 0); }\n\n.am-modal-transparent {\n  width: 100%;\n  position: fixed;\n  bottom: 18px;\n  box-sizing: border-box; }\n\n.am-modal-header {\n  background: #fff;\n  padding-top: 20px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px; }\n\n.am-modal-transparent .am-modal-content .am-modal-body {\n  background: #fff; }\n\n.am-modal-button-group-h .am-modal-button:first-child, .am-modal-button-group-h .am-modal-button {\n  background: #fff !important;\n  margin-bottom: 65% !important; }\n\n.am-modal-button-group-h .am-modal-button:last-child {\n  border-bottom-right-radius: 8px; }\n\n.am-modal-button-group-h .am-modal-button:first-child {\n  border-bottom-left-radius: 8px; }\n\n.am-modal.am-modal-operation .am-modal-content .am-modal-button {\n  text-align: center;\n  font-size: 22px;\n  height: 60px;\n  line-height: 55px; }\n\n.am-modal-alert-content {\n  height: 40px;\n  line-height: 40px; }\n\n.am-modal.am-modal-operation .am-modal-content .am-modal-button:nth-of-type(1) {\n  font-size: 15px;\n  color: gray;\n  width: 100%;\n  background: white;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px; }\n\n.am-modal.am-modal-operation .am-modal-content .am-modal-button:nth-of-type(2) {\n  color: red;\n  width: 100%;\n  background: white; }\n\n.am-modal.am-modal-operation .am-modal-content .am-modal-button:nth-of-type(3) {\n  color: #0b74ca;\n  width: 100%;\n  background: white;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px; }\n\n.am-modal.am-modal-operation .am-modal-content .am-modal-button:nth-of-type(4) {\n  color: #0b74ca;\n  background: white;\n  width: 100%;\n  top: 10px;\n  height: 60px;\n  border-radius: 10px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px; }\n", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alert = __webpack_require__(85);

var _alert2 = _interopRequireDefault(_alert);

var _Modal = __webpack_require__(30);

var _Modal2 = _interopRequireDefault(_Modal);

var _operation = __webpack_require__(86);

var _operation2 = _interopRequireDefault(_operation);

var _prompt = __webpack_require__(87);

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Modal2['default'].alert = _alert2['default'];
_Modal2['default'].prompt = _prompt2['default'];
_Modal2['default'].operation = _operation2['default'];
exports['default'] = _Modal2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = alert;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(15);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _closest = __webpack_require__(35);

var _closest2 = _interopRequireDefault(_closest);

var _Modal = __webpack_require__(30);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function alert(title, message) {
    var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ text: '确定' }];
    var platform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ios';

    var closed = false;
    if (!title && !message) {
        // console.log('Must specify either an alert title, or message, or both');
        return {
            close: function close() {}
        };
    }
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    var footer = actions.map(function (button) {
        // tslint:disable-next-line:only-arrow-functions
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            if (closed) {
                return;
            }
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    closed = true;
                    close();
                })['catch'](function () {});
            } else {
                closed = true;
                close();
            }
        };
        return button;
    });
    var prefixCls = 'am-modal';
    function onWrapTouchStart(e) {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        var pNode = (0, _closest2['default'])(e.target, '.' + prefixCls + '-footer');
        if (!pNode) {
            e.preventDefault();
        }
    }
    ReactDOM.render(React.createElement(
        _Modal2['default'],
        { visible: true, transparent: true, title: title, transitionName: 'am-zoom', closable: false, maskClosable: false, footer: footer, maskTransitionName: 'am-fade', platform: platform, wrapProps: { onTouchStart: onWrapTouchStart } },
        React.createElement(
            'div',
            { className: prefixCls + '-alert-content' },
            message
        )
    ), div);
    return {
        close: close
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = operation;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(15);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _closest = __webpack_require__(35);

var _closest2 = _interopRequireDefault(_closest);

var _Modal = __webpack_require__(30);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function operation() {
    var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{ text: '确定' }];
    var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ios';

    var closed = false;
    var prefixCls = 'am-modal';
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    var footer = actions.map(function (button) {
        // tslint:disable-next-line:only-arrow-functions
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            if (closed) {
                return;
            }
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    closed = true;
                    close();
                })['catch'](function () {});
            } else {
                closed = true;
                close();
            }
        };
        return button;
    });
    function onWrapTouchStart(e) {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        var pNode = (0, _closest2['default'])(e.target, '.am-modal-footer');
        if (!pNode) {
            e.preventDefault();
        }
    }
    ReactDOM.render(React.createElement(_Modal2['default'], { visible: true, operation: true, transparent: true, prefixCls: prefixCls, transitionName: 'am-zoom', closable: false, maskClosable: true, onClose: close, footer: footer, maskTransitionName: 'am-fade', className: 'am-modal-operation', platform: platform, wrapProps: { onTouchStart: onWrapTouchStart } }), div);
    return {
        close: close
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = prompt;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(15);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _closest = __webpack_require__(35);

var _closest2 = _interopRequireDefault(_closest);

var _Modal = __webpack_require__(30);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function prompt(title, message, callbackOrActions) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
    var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var placeholders = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ['', ''];
    var platform = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'ios';

    var closed = false;
    defaultValue = typeof defaultValue === 'string' ? defaultValue : typeof defaultValue === 'number' ? '' + defaultValue : '';
    if (!callbackOrActions) {
        // console.log('Must specify callbackOrActions');
        return {
            close: function close() {}
        };
    }
    var prefixCls = 'am-modal';
    var data = {
        text: defaultValue
    };
    function onChange(e) {
        var target = e.target;
        var inputType = target.getAttribute('type');
        if (inputType !== null) {
            data[inputType] = target.value;
        }
    }
    // hotfix issue: https://github.com/ant-design/ant-design-mobile/issues/2177
    function onClick(e) {
        var target = e.currentTarget || e.target;
        if (target) {
            target.focus();
        }
    }
    function onBlurFixWechat() {
        // https://github.com/ant-design/ant-design-mobile/issues/3137
        if (/MicroMessenger/.test(navigator.userAgent)) {
            document.body.scrollTop = document.body.scrollTop;
        }
    }
    var inputDom = void 0;
    var focusFn = function focusFn(input) {
        setTimeout(function () {
            if (input) {
                input.focus();
            }
        }, 500);
    };
    switch (type) {
        case 'login-password':
            inputDom = React.createElement(
                'div',
                { className: prefixCls + '-input-container' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement(
                        'label',
                        null,
                        React.createElement('input', { type: 'text', defaultValue: data.text, ref: function ref(input) {
                                return focusFn(input);
                            }, onClick: onClick, onChange: onChange, placeholder: placeholders[0], onBlur: onBlurFixWechat })
                    )
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement(
                        'label',
                        null,
                        React.createElement('input', { type: 'password', defaultValue: data.password, onClick: onClick, onChange: onChange, placeholder: placeholders[1], onBlur: onBlurFixWechat })
                    )
                )
            );
            break;
        case 'secure-text':
            inputDom = React.createElement(
                'div',
                { className: prefixCls + '-input-container' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement(
                        'label',
                        null,
                        React.createElement('input', { type: 'password', defaultValue: data.password, ref: function ref(input) {
                                return focusFn(input);
                            }, onClick: onClick, onChange: onChange, placeholder: placeholders[0], onBlur: onBlurFixWechat })
                    )
                )
            );
            break;
        case 'default':
        default:
            inputDom = React.createElement(
                'div',
                { className: prefixCls + '-input-container' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement(
                        'label',
                        null,
                        React.createElement('input', { type: 'text', defaultValue: data.text, ref: function ref(input) {
                                return focusFn(input);
                            }, onClick: onClick, onChange: onChange, placeholder: placeholders[0], onBlur: onBlurFixWechat })
                    )
                )
            );
    }
    var content = React.createElement(
        'div',
        null,
        message,
        inputDom
    );
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    function handleConfirm(callback) {
        if (typeof callback !== 'function') {
            return;
        }
        var _data$text = data.text,
            text = _data$text === undefined ? '' : _data$text,
            _data$password = data.password,
            password = _data$password === undefined ? '' : _data$password;

        var callbackArgs = type === 'login-password' ? [text, password] : type === 'secure-text' ? [password] : [text];
        return callback.apply(undefined, callbackArgs);
    }
    var actions = void 0;
    if (typeof callbackOrActions === 'function') {
        actions = [{
            text: '取消',
            onPress: function onPress() {}
        }, {
            text: '确定',
            onPress: function onPress() {
                handleConfirm(callbackOrActions);
            }
        }];
    } else {
        actions = callbackOrActions.map(function (item) {
            return {
                text: item.text,
                onPress: function onPress() {
                    return handleConfirm(item.onPress);
                }
            };
        });
    }
    var footer = actions.map(function (button) {
        // tslint:disable-next-line:only-arrow-functions
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            if (closed) {
                return;
            }
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    closed = true;
                    close();
                })['catch'](function () {});
            } else {
                closed = true;
                close();
            }
        };
        return button;
    });
    function onWrapTouchStart(e) {
        // exclude input element for focus
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        var pNode = (0, _closest2['default'])(e.target, '.' + prefixCls + '-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    ReactDOM.render(React.createElement(
        _Modal2['default'],
        { visible: true, transparent: true, prefixCls: prefixCls, title: title, closable: false, maskClosable: false, transitionName: 'am-zoom', footer: footer, maskTransitionName: 'am-fade', platform: platform, wrapProps: { onTouchStart: onWrapTouchStart } },
        React.createElement(
            'div',
            { className: prefixCls + '-propmt-content' },
            content
        )
    ), div);
    return {
        close: close
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

__webpack_require__(89);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
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
		module.hot.accept(36, function() {
			var newContent = __webpack_require__(36);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[1049]);