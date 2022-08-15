"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Track = /*#__PURE__*/function () {
  function Track(id, number, title, lyrics) {
    (0, _classCallCheck2.default)(this, Track);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "number", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "lyrics", "");
    this.id = id;
    this.number = number;
    this.title = title;
    this.lyrics = lyrics;
  }

  (0, _createClass2.default)(Track, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(value) {
      this.id = value;
    }
  }, {
    key: "Number",
    get: function get() {
      return this.number;
    },
    set: function set(value) {
      this.number = value;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    },
    set: function set(value) {
      this.title = value;
    }
  }, {
    key: "Lyrics",
    get: function get() {
      return this.lyrics;
    },
    set: function set(value) {
      this.lyrics = value;
    }
  }]);
  return Track;
}();

exports.Track = Track;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFjayIsImlkIiwibnVtYmVyIiwidGl0bGUiLCJseXJpY3MiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvVHJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRyYWNrIFxyXG57XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBnZXQgSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgSWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbnVtYmVyOiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBnZXQgTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGdldCBUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBseXJpY3M6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgZ2V0IEx5cmljcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmx5cmljcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgTHlyaWNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmx5cmljcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgbnVtYmVyOm51bWJlciwgdGl0bGU6c3RyaW5nLCBseXJpY3M6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5seXJpY3MgPSBseXJpY3M7XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxLO0VBK0JULGVBQVlDLEVBQVosRUFBdUJDLE1BQXZCLEVBQXNDQyxLQUF0QyxFQUFvREMsTUFBcEQsRUFBb0U7SUFBQTtJQUFBLDBDQTdCL0MsQ0FBQyxDQTZCOEM7SUFBQSw4Q0F0QjNDLENBQUMsQ0FzQjBDO0lBQUEsNkNBZjVDLEVBZTRDO0lBQUEsOENBUjNDLEVBUTJDO0lBQ2hFLEtBQUtILEVBQUwsR0FBVUEsRUFBVjtJQUNBLEtBQUtDLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtDLE1BQUwsR0FBY0EsTUFBZDtFQUNIOzs7O1NBakNELGVBQXdCO01BQ3BCLE9BQU8sS0FBS0gsRUFBWjtJQUNILEM7U0FDRCxhQUFjSSxLQUFkLEVBQTZCO01BQ3pCLEtBQUtKLEVBQUwsR0FBVUksS0FBVjtJQUNIOzs7U0FFRCxlQUE0QjtNQUN4QixPQUFPLEtBQUtILE1BQVo7SUFDSCxDO1NBQ0QsYUFBa0JHLEtBQWxCLEVBQWlDO01BQzdCLEtBQUtILE1BQUwsR0FBY0csS0FBZDtJQUNIOzs7U0FFRCxlQUEyQjtNQUN2QixPQUFPLEtBQUtGLEtBQVo7SUFDSCxDO1NBQ0QsYUFBaUJFLEtBQWpCLEVBQWdDO01BQzVCLEtBQUtGLEtBQUwsR0FBYUUsS0FBYjtJQUNIOzs7U0FFRCxlQUE0QjtNQUN4QixPQUFPLEtBQUtELE1BQVo7SUFDSCxDO1NBQ0QsYUFBa0JDLEtBQWxCLEVBQWlDO01BQzdCLEtBQUtELE1BQUwsR0FBY0MsS0FBZDtJQUNIIn0=