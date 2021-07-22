"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

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
      _ref$Direction = _ref.Direction,
      Direction = _ref$Direction === void 0 ? "left" : _ref$Direction,
      _ref$Circle = _ref.Circle,
      Circle = _ref$Circle === void 0 ? true : _ref$Circle,
      _ref$Padding = _ref.Padding,
      Padding = _ref$Padding === void 0 ? "1vmax" : _ref$Padding;
  var Id1 = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15);
  var Id2 = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15);

  var findNumber = function findNumber(param) {
    var num = param.match(/(\d+)/);
    return num[0];
  };

  var findUnit = function findUnit(param) {
    var unit = param.replace(findNumber(param), "");
    return unit;
  };

  var HoverAnimationBox = (0, _react.useRef)(null);
  var HoverAnimationInnerBox = (0, _react.useRef)(null);
  var box1 = (0, _react.useRef)(null);
  var box2 = (0, _react.useRef)(null);
  var boxSize = "".concat(Number(findNumber(IconSize)) + Number(findNumber(Padding)) + Number(findNumber(Padding))).concat(findUnit(IconSize));
  (0, _react.useEffect)(function () {
    var Icon1 = document.querySelector(".HoverAnimationIcon".concat(Id1).concat(Id1));
    var Icon2 = document.querySelector(".HoverAnimationIcon".concat(Id2).concat(Id2));
    HoverAnimationBox.current.style.boxShadow = "0 0 1px 5px ".concat(Color);
    HoverAnimationBox.current.style.boxSizing = "border-box";

    if (Direction === "left") {
      HoverAnimationInnerBox.current.style.display = "flex";
    }

    if (Direction === "right") {
      HoverAnimationInnerBox.current.style.display = "flex";
      HoverAnimationInnerBox.current.style.transform = "translateX(-".concat(boxSize, ")");
    }

    if (Direction === "down") {
      HoverAnimationInnerBox.current.style.transform = "translateY(-".concat(boxSize, ")");
      Icon1.style.marginTop = "1px";
      Icon1.style.marginBottom = "-5px";
    }

    if (Direction === "up") {
      HoverAnimationInnerBox.current.style.transform = "translateY(0)";
      Icon1.style.marginTop = "1px";
      Icon1.style.marginBottom = "-5px";
    }

    HoverAnimationBox.current.addEventListener("mouseover", function () {
      if (Direction === "left") {
        HoverAnimationInnerBox.current.style.transform = "translateX(-".concat(boxSize, ")");
      }

      if (Direction === "right") {
        HoverAnimationInnerBox.current.style.transform = "translateX(0)";
      }

      if (Direction === "up") {
        HoverAnimationInnerBox.current.style.transform = "translateY(-".concat(boxSize, ")");
      }

      if (Direction === "down") {
        HoverAnimationInnerBox.current.style.transform = "translateY(0)";
      }

      HoverAnimationBox.current.style.boxShadow = "0 0 1px 0.7vmax ".concat(BackgroundColor);
      Icon1.style.color = BackgroundColor;
      Icon1.style.backgroundColor = Color;
      Icon2.style.color = BackgroundColor;
      Icon2.style.backgroundColor = Color;
    });
    HoverAnimationBox.current.addEventListener("mouseleave", function () {
      if (Direction === "left") {
        HoverAnimationInnerBox.current.style.transform = "translateX(0)";
      }

      if (Direction === "right") {
        HoverAnimationInnerBox.current.style.transform = "translateX(-".concat(boxSize, ")");
      }

      if (Direction === "up") {
        HoverAnimationInnerBox.current.style.transform = "translateY(0)";
      }

      if (Direction === "down") {
        HoverAnimationInnerBox.current.style.transform = "translateY(-".concat(boxSize, ")");
      }

      HoverAnimationBox.current.style.boxShadow = "0 0 1px 0.3vmax ".concat(Color);
      Icon1.style.color = Color;
      Icon1.style.backgroundColor = BackgroundColor;
      Icon2.style.color = Color;
      Icon2.style.backgroundColor = BackgroundColor;
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
    ref: HoverAnimationInnerBox,
    style: {
      transition: "all ".concat(Transition, "s")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: box1
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "HoverAnimationIcon".concat(Id1).concat(Id1),
    style: {
      cursor: "pointer",
      fontSize: IconSize,
      color: Color,
      transition: "all ".concat(Transition, "s"),
      backgroundColor: BackgroundColor,
      padding: Padding
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    ref: box2
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "HoverAnimationIcon".concat(Id2).concat(Id2),
    style: {
      cursor: "pointer",
      fontSize: IconSize,
      color: Color,
      transition: "all ".concat(Transition, "s"),
      backgroundColor: BackgroundColor,
      padding: Padding
    }
  }))));
};

var _default = HoverAnimation;
exports["default"] = _default;