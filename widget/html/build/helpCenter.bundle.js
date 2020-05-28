webpackJsonp([28],{

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navBar = __webpack_require__(26);

var _navBar2 = _interopRequireDefault(_navBar);

var _icon = __webpack_require__(23);

var _icon2 = _interopRequireDefault(_icon);

var _stringify = __webpack_require__(34);

var _stringify2 = _interopRequireDefault(_stringify);

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

__webpack_require__(27);

__webpack_require__(24);

__webpack_require__(47);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antdMobile = __webpack_require__(59);

__webpack_require__(25);

__webpack_require__(1103);

var _linkConfig = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelpCenter = function (_React$Component) {
  (0, _inherits3.default)(HelpCenter, _React$Component);

  function HelpCenter(props) {
    (0, _classCallCheck3.default)(this, HelpCenter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HelpCenter.__proto__ || (0, _getPrototypeOf2.default)(HelpCenter)).call(this, props));

    _this.getIssue = function () {
      //请求问题列表
      window.api.ajax({
        url: (0, _linkConfig.getLink)() + (0, _linkConfig.getApi)("helpCenterList"),
        method: 'post',
        dataType: 'json',
        headers: {
          "Content-Type": 'application/json'
        },
        data: {
          body: {
            page: 1,
            limit: 40
          }
        }
      }, function (res, err) {
        if (res.code == '200') {
          _this.setState({
            question: res.data.list
          });
        } else {
          _toast2.default.info(res.message, 3);
        }
      });
    };

    _this.showDetails = function (id) {
      //请求问题详情
      _this.setState({
        showDetails: true
      });
      window.api.ajax({
        url: (0, _linkConfig.getLink)() + (0, _linkConfig.getApi)("helpCenterGet") + id,
        method: 'get',
        dataType: 'json'
      }, function (res, err) {
        if (res.code == '200') {
          console.log((0, _stringify2.default)(res));
          _this.setState({
            questionContent: res.data
          });
        } else {
          _toast2.default.info(res.message, 3);
        }
        if (err) {
          _toast2.default.info(err.body.message);
        }
      });
    };

    _this.goBack = function () {
      //返回上一页
      window.api.closeFrame();
    };

    _this.state = {
      question: [], //问题
      questionContent: {}, //问题内容 
      showDetails: false //显示详情
    };
    return _this;
  }

  (0, _createClass3.default)(HelpCenter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var that = this;
      window.apiready = function () {
        that.getIssue();
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          question = _state.question,
          questionContent = _state.questionContent,
          showDetails = _state.showDetails;


      var Question = _react2.default.createElement(
        "div",
        { className: "modal" },
        question.map(function (item, index) {
          return _react2.default.createElement(
            "div",
            { key: index, className: "modal_content", onClick: function onClick() {
                return _this2.showDetails(item.id);
              } },
            _react2.default.createElement(
              "div",
              { className: "title" },
              "\u3010\u95EE\u9898\u3011",
              item.questionTitle
            ),
            _react2.default.createElement(
              "div",
              { className: "time" },
              item.createTime
            )
          );
        })
      );

      var QuestionContent = _react2.default.createElement(
        "div",
        { className: "QuestionContent" },
        _react2.default.createElement(
          _navBar2.default,
          {
            mode: "light",
            icon: _react2.default.createElement(_icon2.default, { type: "left", color: "#333333" }),
            onLeftClick: function onLeftClick() {
              return _this2.setState({ showDetails: false });
            },
            style: {
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 1,
              fontSize: "18px",
              color: "#444D54"
            }
          },
          questionContent.questionTitle
        ),
        _react2.default.createElement(
          "div",
          { className: "Content" },
          questionContent.questionContent
        )
      );

      return _react2.default.createElement(
        "div",
        { className: "helpCenter" },
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
          "\u5E2E\u52A9\u4E2D\u5FC3"
        ),
        !showDetails ? Question : QuestionContent
      );
    }
  }]);
  return HelpCenter;
}(_react2.default.Component);

HelpCenter.displayName = "HelpCenter";
HelpCenter.propTypes = {};
HelpCenter.defaultProps = {};
exports.default = HelpCenter;


_reactDom2.default.render(_react2.default.createElement(HelpCenter, null), document.getElementById("helpCenter"));

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
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
		module.hot.accept(580, function() {
			var newContent = __webpack_require__(580);
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

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

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".am-toast-notice-content .am-toast-text {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.helpCenter {\n  width: 100%;\n  padding-top: 2.13333rem;\n  height: 100%;\n  background: #fff;\n  color: #444D54; }\n  .helpCenter .modal {\n    width: 100%;\n    padding: 0 15px; }\n  .helpCenter .modal_content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    border-bottom: 1px solid #EDEDED;\n    height: 2.13333rem; }\n  .helpCenter .time {\n    color: #444D54; }\n  .helpCenter .Content {\n    font-size: 14px;\n    padding: 0 15px;\n    line-height: 20px; }\n", ""]);

// exports


/***/ })

},[1102]);