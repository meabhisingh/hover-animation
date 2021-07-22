"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./HoverAnimation2.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HoverAnimation = function HoverAnimation(_ref) {
  var Icon = _ref.Icon,
      _ref$IconSize = _ref.IconSize,
      IconSize = _ref$IconSize === void 0 ? "2vmax" : _ref$IconSize,
      _ref$Color = _ref.Color,
      Color = _ref$Color === void 0 ? "white" : _ref$Color,
      _ref$BackgroundColor = _ref.BackgroundColor,
      BackgroundColor = _ref$BackgroundColor === void 0 ? "rgb(25,25,25)" : _ref$BackgroundColor,
      _ref$Transition = _ref.Transition,
      Transition = _ref$Transition === void 0 ? 0.5 : _ref$Transition,
      _ref$Circle = _ref.Circle,
      Circle = _ref$Circle === void 0 ? true : _ref$Circle,
      _ref$Padding = _ref.Padding,
      Padding = _ref$Padding === void 0 ? "1vmax" : _ref$Padding,
      _ref$Pace = _ref.Pace,
      Pace = _ref$Pace === void 0 ? "medium" : _ref$Pace;
  var Id = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15);

  var findNumber = function findNumber(param) {
    var num = param.match(/(\d+)/);
    return num[0];
  };

  var findUnit = function findUnit(param) {
    var unit = param.replace(findNumber(param), "");
    return unit;
  };

  var HoverAnimationBox = (0, _react.useRef)(null);
  var box1 = (0, _react.useRef)(null);
  var boxSize = "".concat(Number(findNumber(IconSize)) + Number(findNumber(Padding)) + Number(findNumber(Padding))).concat(findUnit(IconSize));
  var speed;

  if (Pace === "medium") {
    speed = "1.5s";
  }

  if (Pace === "slow") {
    speed = "2s";
  }

  if (Pace === "slowest") {
    speed = "2.5s";
  }

  if (Pace === "fast") {
    speed = "1s";
  }

  if (Pace === "fastest") {
    speed = "0.5s";
  }

  (0, _react.useEffect)(function () {
    var Icon1 = document.querySelector(".HoverAnimationIcon".concat(Id).concat(Id));
    HoverAnimationBox.current.style.boxShadow = "0 0 1px 5px ".concat(Color);
    HoverAnimationBox.current.addEventListener("mouseover", function () {
      HoverAnimationBox.current.style.animation = "HoverAnimationGlowOn  ".concat(speed, " linear infinite ");
      Icon1.style.color = BackgroundColor;
      Icon1.style.backgroundColor = Color;
    });
    HoverAnimationBox.current.addEventListener("mouseleave", function () {
      Icon1.style.color = Color;
      Icon1.style.backgroundColor = BackgroundColor;
      HoverAnimationBox.current.style.animation = "HoverAnimationGlowOff 1s ";
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "HoverAnimationBox",
    ref: HoverAnimationBox,
    style: {
      borderRadius: Circle ? "100%" : "0",
      width: boxSize,
      height: boxSize,
      transition: "all ".concat(Transition, "s"),
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: box1
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "HoverAnimationIcon".concat(Id).concat(Id),
    style: {
      cursor: "pointer",
      borderRadius: Circle ? "100%" : "0",
      fontSize: IconSize,
      color: Color,
      transition: "all ".concat(Transition, "s"),
      backgroundColor: BackgroundColor,
      padding: Padding
    }
  })));
};

var _default = HoverAnimation;
exports["default"] = _default;