"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var generateRandomNumber = function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);

    this.color;
  }

  _createClass(Color, [{
    key: "setRandomColor",
    value: function setRandomColor() {
      this.color = "RGB ".concat(generateRandomNumber(0, 255), ", ").concat(generateRandomNumber(0, 255), ", ").concat(generateRandomNumber(0, 255));
    }
  }]);

  return Color;
}();

var randomColor = new Color();
randomColor.setRandomColor();
console.log(randomColor);
