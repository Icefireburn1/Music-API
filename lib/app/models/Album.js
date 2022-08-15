"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Album = /*#__PURE__*/function () {
  function Album(id, title, artist, description, year, tracks, image) {
    (0, _classCallCheck2.default)(this, Album);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "artist", "");
    (0, _defineProperty2.default)(this, "description", "");
    (0, _defineProperty2.default)(this, "year", -1);
    (0, _defineProperty2.default)(this, "tracks", void 0);
    (0, _defineProperty2.default)(this, "image", void 0);
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.year = year;
    this.tracks = tracks;
    this.image = image;
  }

  (0, _createClass2.default)(Album, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(value) {
      this.id = value;
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
    key: "Artist",
    get: function get() {
      return this.artist;
    },
    set: function set(value) {
      this.artist = value;
    }
  }, {
    key: "Description",
    get: function get() {
      return this.description;
    },
    set: function set(value) {
      this.description = value;
    }
  }, {
    key: "Year",
    get: function get() {
      return this.year;
    },
    set: function set(value) {
      this.year = value;
    }
  }, {
    key: "Tracks",
    get: function get() {
      return this.tracks;
    },
    set: function set(value) {
      this.tracks = value;
    }
  }, {
    key: "Image",
    get: function get() {
      return this.image;
    },
    set: function set(value) {
      this.image = value;
    }
  }]);
  return Album;
}();

exports.Album = Album;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbGJ1bSIsImlkIiwidGl0bGUiLCJhcnRpc3QiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJ0cmFja3MiLCJpbWFnZSIsInZhbHVlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL21vZGVscy9BbGJ1bS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL1RyYWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxidW0gXHJcbntcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIGdldCBJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBJZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBnZXQgVGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgVGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXJ0aXN0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGdldCBBcnRpc3QoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnRpc3Q7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IEFydGlzdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hcnRpc3QgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgZ2V0IERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IERlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHllYXI6IG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIGdldCBZZWFyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgWWVhcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy55ZWFyID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRyYWNrczogVHJhY2tbXTtcclxuICAgIHB1YmxpYyBnZXQgVHJhY2tzKCk6IFRyYWNrW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgVHJhY2tzKHZhbHVlOiBUcmFja1tdKSB7XHJcbiAgICAgICAgdGhpcy50cmFja3MgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaW1hZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgSW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgSW1hZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsIHRpdGxlOnN0cmluZywgYXJ0aXN0OnN0cmluZywgZGVzY3JpcHRpb246c3RyaW5nLCB5ZWFyOm51bWJlciwgdHJhY2tzOlRyYWNrW10sIGltYWdlOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsSztFQW9EVCxlQUFZQyxFQUFaLEVBQXVCQyxLQUF2QixFQUFxQ0MsTUFBckMsRUFBb0RDLFdBQXBELEVBQXdFQyxJQUF4RSxFQUFxRkMsTUFBckYsRUFBcUdDLEtBQXJHLEVBQ0E7SUFBQTtJQUFBLDBDQW5EcUIsQ0FBQyxDQW1EdEI7SUFBQSw2Q0E1Q3dCLEVBNEN4QjtJQUFBLDhDQXJDeUIsRUFxQ3pCO0lBQUEsbURBOUI4QixFQThCOUI7SUFBQSw0Q0F2QnVCLENBQUMsQ0F1QnhCO0lBQUE7SUFBQTtJQUNJLEtBQUtOLEVBQUwsR0FBVUEsRUFBVjtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtDLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0MsS0FBTCxHQUFhQSxLQUFiO0VBQ0g7Ozs7U0ExREQsZUFBd0I7TUFDcEIsT0FBTyxLQUFLTixFQUFaO0lBQ0gsQztTQUNELGFBQWNPLEtBQWQsRUFBNkI7TUFDekIsS0FBS1AsRUFBTCxHQUFVTyxLQUFWO0lBQ0g7OztTQUVELGVBQTJCO01BQ3ZCLE9BQU8sS0FBS04sS0FBWjtJQUNILEM7U0FDRCxhQUFpQk0sS0FBakIsRUFBZ0M7TUFDNUIsS0FBS04sS0FBTCxHQUFhTSxLQUFiO0lBQ0g7OztTQUVELGVBQTRCO01BQ3hCLE9BQU8sS0FBS0wsTUFBWjtJQUNILEM7U0FDRCxhQUFrQkssS0FBbEIsRUFBaUM7TUFDN0IsS0FBS0wsTUFBTCxHQUFjSyxLQUFkO0lBQ0g7OztTQUVELGVBQWlDO01BQzdCLE9BQU8sS0FBS0osV0FBWjtJQUNILEM7U0FDRCxhQUF1QkksS0FBdkIsRUFBc0M7TUFDbEMsS0FBS0osV0FBTCxHQUFtQkksS0FBbkI7SUFDSDs7O1NBRUQsZUFBMEI7TUFDdEIsT0FBTyxLQUFLSCxJQUFaO0lBQ0gsQztTQUNELGFBQWdCRyxLQUFoQixFQUErQjtNQUMzQixLQUFLSCxJQUFMLEdBQVlHLEtBQVo7SUFDSDs7O1NBRUQsZUFBNkI7TUFDekIsT0FBTyxLQUFLRixNQUFaO0lBQ0gsQztTQUNELGFBQWtCRSxLQUFsQixFQUFrQztNQUM5QixLQUFLRixNQUFMLEdBQWNFLEtBQWQ7SUFDSDs7O1NBRUQsZUFBMkI7TUFDdkIsT0FBTyxLQUFLRCxLQUFaO0lBQ0gsQztTQUNELGFBQWlCQyxLQUFqQixFQUFnQztNQUM1QixLQUFLRCxLQUFMLEdBQWFDLEtBQWI7SUFDSCJ9