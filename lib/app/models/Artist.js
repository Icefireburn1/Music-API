"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artist = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Artist = /*#__PURE__*/function () {
  function Artist(id, name) {
    (0, _classCallCheck2.default)(this, Artist);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    this.id = id;
    this.name = name;
  }

  (0, _createClass2.default)(Artist, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }]);
  return Artist;
}();

exports.Artist = Artist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcnRpc3QiLCJpZCIsIm5hbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL0FydGlzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXJ0aXN0XHJcbntcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgbmFtZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElkKCk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgSWQoaWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTmFtZSgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbiAgICBzZXQgTmFtZShuYW1lOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBYUEsTTtFQUtULGdCQUFZQyxFQUFaLEVBQXVCQyxJQUF2QixFQUNBO0lBQUE7SUFBQSwwQ0FKcUIsQ0FBQyxDQUl0QjtJQUFBLDRDQUh1QixFQUd2QjtJQUNJLEtBQUtELEVBQUwsR0FBVUEsRUFBVjtJQUNBLEtBQUtDLElBQUwsR0FBWUEsSUFBWjtFQUNIOzs7O1NBRUQsZUFDQTtNQUNJLE9BQU8sS0FBS0QsRUFBWjtJQUNILEM7U0FDRCxhQUFPQSxFQUFQLEVBQ0E7TUFDSSxLQUFLQSxFQUFMLEdBQVVBLEVBQVY7SUFDSDs7O1NBRUQsZUFDQTtNQUNJLE9BQU8sS0FBS0MsSUFBWjtJQUNILEM7U0FDRCxhQUFTQSxJQUFULEVBQ0E7TUFDSSxLQUFLQSxJQUFMLEdBQVlBLElBQVo7SUFDSCJ9