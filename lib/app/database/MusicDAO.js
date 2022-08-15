"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicDAO = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Artist = require("../models/Artist");

var _Album = require("../models/Album");

var _Track = require("../models/Track");

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var MusicDAO = /*#__PURE__*/function () {
  function MusicDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, MusicDAO);
    (0, _defineProperty2.default)(this, "pool", void 0);
    this.pool = mysql.createPool({
      host: host,
      port: port,
      user: username,
      password: password,
      database: 'music'
    });
  }

  (0, _createClass2.default)(MusicDAO, [{
    key: "findAlbums",
    value: function findAlbums(artist, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context.next = 6;
                  return connection.query('SELECT * FROM ALBUM WHERE ARTIST=?', [artist]);

                case 6:
                  result1 = _context.sent;
                  x = 0;

                case 8:
                  if (!(x < result1.length)) {
                    _context.next = 19;
                    break;
                  }

                  albumId = result1[x].ID;
                  tracks = [];
                  _context.next = 13;
                  return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);

                case 13:
                  result2 = _context.sent;

                  for (y = 0; y < result2.length; ++y) {
                    tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                  }

                  albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, tracks, result1[x].IMAGE_NAME));

                case 16:
                  ++x;
                  _context.next = 8;
                  break;

                case 19:
                  callback(albums);

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "findArtists",
    value: function findArtists(callback) {
      var artists = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context2.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context2.next = 6;
                  return connection.query('SELECT * FROM ALBUM');

                case 6:
                  result1 = _context2.sent;

                  for (x = 0; x < result1.length; ++x) {
                    artists.push(new _Artist.Artist(result1[x].ID, result1[x].ARTIST));
                  }

                  callback(artists);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "findAllAlbums",
    value: function findAllAlbums(callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context3.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context3.next = 6;
                  return connection.query('SELECT * FROM ALBUM');

                case 6:
                  result1 = _context3.sent;

                  for (x = 0; x < result1.length; ++x) {
                    albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].TRACKS, result1[x].IMAGE));
                  }

                  callback(albums);

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "findAlbumByID",
    value: function findAlbumByID(albumId, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var result1;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context4.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context4.next = 6;
                  return connection.query('SELECT * FROM ALBUM WHERE ID=?', albumId);

                case 6:
                  result1 = _context4.sent;
                  callback(new _Album.Album(result1[0].ID, result1[0].TITLE, result1[0].ARTIST, result1[0].DESCRIPTION, result1[0].YEAR, result1[0].TRACKS, result1[0].IMAGE));

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "findAlbumByNameAndID",
    value: function findAlbumByNameAndID(name, albumId, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(err, connection) {
          var result1;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context5.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context5.next = 6;
                  return connection.query('SELECT * FROM ALBUM WHERE ID=? AND ARTIST=?', [albumId, name]);

                case 6:
                  result1 = _context5.sent;
                  callback(new _Album.Album(result1[0].ID, result1[0].TITLE, result1[0].ARTIST, result1[0].DESCRIPTION, result1[0].YEAR, result1[0].TRACKS, result1[0].IMAGE));

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "findAlbumsByArtist",
    value: function findAlbumsByArtist(search, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context6.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context6.next = 6;
                  return connection.query('SELECT * FROM ALBUM WHERE ARTIST=?', [search]);

                case 6:
                  result1 = _context6.sent;
                  x = 0;

                case 8:
                  if (!(x < result1.length)) {
                    _context6.next = 19;
                    break;
                  }

                  albumId = result1[x].ID;
                  tracks = [];
                  _context6.next = 13;
                  return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);

                case 13:
                  result2 = _context6.sent;

                  for (y = 0; y < result2.length; ++y) {
                    tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                  }

                  albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].TRACKS, result1[x].IMAGE));

                case 16:
                  ++x;
                  _context6.next = 8;
                  break;

                case 19:
                  callback(albums);

                case 20:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "findAlbumsByDescription",
    value: function findAlbumsByDescription(search, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context7.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context7.next = 6;
                  return connection.query("SELECT * FROM ALBUM WHERE DESCRIPTION LIKE ?", ['%' + search + '%']);

                case 6:
                  result1 = _context7.sent;

                  for (x = 0; x < result1.length; ++x) {
                    albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].TRACKS, result1[x].IMAGE));
                  }

                  callback(albums);

                case 9:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x13, _x14) {
          return _ref7.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "create",
    value: function create(album, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(err, connection) {
          var result1;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context8.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context8.next = 6;
                  return connection.query("INSERT INTO `album`(`ID`, `TITLE`, `ARTIST`, `YEAR`, `DESCRIPTION`) VALUES (?,?,?,?,?)", [album.Id, album.Title, album.Artist, album.Year, album.Description]);

                case 6:
                  result1 = _context8.sent;

                  if (result1 == undefined) {
                    callback(-1);
                  } else {
                    callback(1);
                  }

                case 8:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x15, _x16) {
          return _ref8.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "update",
    value: function update(album, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(err, connection) {
          var sql, data, result1;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context9.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  sql = "UPDATE `album` SET ID=?,TITLE=?,ARTIST=?,YEAR=?,DESCRIPTION=? WHERE ID=?";
                  data = [Number(album.Id), album.Title, album.Artist, Number(album.Year), album.Description, Number(album.Id)];
                  _context9.next = 8;
                  return connection.query(sql, data);

                case 8:
                  result1 = _context9.sent;
                  console.log('Rows affected:', result1.affectedRows);
                  callback(result1.affectedRows);

                case 11:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x17, _x18) {
          return _ref9.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "delete",
    value: function _delete(artist, target, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(err, connection) {
          var sqlTracks, sql, dataTracks, data, result, result1;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context10.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  sqlTracks = "DELETE FROM track WHERE ALBUM_ID=?";
                  sql = "DELETE FROM album WHERE ID=? AND ARTIST=?";
                  dataTracks = [sqlTracks];
                  data = [Number(target), artist];
                  _context10.next = 10;
                  return connection.query(sqlTracks, dataTracks);

                case 10:
                  result = _context10.sent;
                  _context10.next = 13;
                  return connection.query(sql, data);

                case 13:
                  result1 = _context10.sent;
                  console.log('Rows affected:', result1.affectedRows);
                  callback(result1.affectedRows);

                case 16:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x19, _x20) {
          return _ref10.apply(this, arguments);
        };
      }());
    }
  }]);
  return MusicDAO;
}();

exports.MusicDAO = MusicDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNdXNpY0RBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBvb2wiLCJteXNxbCIsImNyZWF0ZVBvb2wiLCJ1c2VyIiwiZGF0YWJhc2UiLCJhcnRpc3QiLCJjYWxsYmFjayIsImFsYnVtcyIsImdldENvbm5lY3Rpb24iLCJlcnIiLCJjb25uZWN0aW9uIiwicmVsZWFzZSIsInF1ZXJ5IiwidXRpbCIsInByb21pc2lmeSIsInJlc3VsdDEiLCJ4IiwibGVuZ3RoIiwiYWxidW1JZCIsIklEIiwidHJhY2tzIiwicmVzdWx0MiIsInkiLCJwdXNoIiwiVHJhY2siLCJOVU1CRVIiLCJUSVRMRSIsIkxZUklDUyIsIkFsYnVtIiwiQVJUSVNUIiwiREVTQ1JJUFRJT04iLCJZRUFSIiwiSU1BR0VfTkFNRSIsImFydGlzdHMiLCJBcnRpc3QiLCJUUkFDS1MiLCJJTUFHRSIsIm5hbWUiLCJzZWFyY2giLCJhbGJ1bSIsIklkIiwiVGl0bGUiLCJZZWFyIiwiRGVzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJzcWwiLCJkYXRhIiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImFmZmVjdGVkUm93cyIsInRhcmdldCIsInNxbFRyYWNrcyIsImRhdGFUcmFja3MiLCJyZXN1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvZGF0YWJhc2UvTXVzaWNEQU8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aXN0IH0gZnJvbSBcIi4uL21vZGVscy9BcnRpc3RcIjtcclxuaW1wb3J0IHsgQWxidW0gfSBmcm9tIFwiLi4vbW9kZWxzL0FsYnVtXCI7XHJcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4uL21vZGVscy9UcmFja1wiO1xyXG5cclxuaW1wb3J0ICogYXMgbXlzcWwgZnJvbSBcIm15c3FsXCI7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNdXNpY0RBT1xyXG57XHJcbiAgICBwcml2YXRlIHBvb2w6IG15c3FsLlBvb2w7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdDpzdHJpbmcsIHBvcnQ6bnVtYmVyLCB1c2VybmFtZTpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgaG9zdDogaG9zdCxcclxuICAgICAgICAgICAgcG9ydDogcG9ydCxcclxuICAgICAgICAgICAgdXNlcjogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICdtdXNpYydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEFsYnVtcyhhcnRpc3Q6c3RyaW5nLCBjYWxsYmFjazogYW55KSBcclxuICAgIHtcclxuICAgICAgICBsZXQgYWxidW1zOkFsYnVtW10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFMQlVNIFdIRVJFIEFSVElTVD0/JywgW2FydGlzdF0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0wOyB4IDwgcmVzdWx0MS5sZW5ndGg7ICsreClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsYnVtSWQgPSByZXN1bHQxW3hdLklEO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrczpUcmFja1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0MiA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gVFJBQ0sgV0hFUkUgQUxCVU1fSUQ9PycsIFthbGJ1bUlkXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5PTA7IHkgPCByZXN1bHQyLmxlbmd0aDsgKyt5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKG5ldyBUcmFjayhyZXN1bHQyW3ldLklELCByZXN1bHQyW3ldLk5VTUJFUiwgcmVzdWx0Mlt5XS5USVRMRSwgcmVzdWx0Mlt5XS5MWVJJQ1MpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bShyZXN1bHQxW3hdLklELCByZXN1bHQxW3hdLlRJVExFLCByZXN1bHQxW3hdLkFSVElTVCwgcmVzdWx0MVt4XS5ERVNDUklQVElPTiwgcmVzdWx0MVt4XS5ZRUFSLCB0cmFja3MsIHJlc3VsdDFbeF0uSU1BR0VfTkFNRSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRBcnRpc3RzKGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFydGlzdHM6QXJ0aXN0W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFMQlVNJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPTA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpc3RzLnB1c2gobmV3IEFydGlzdChyZXN1bHQxW3hdLklELHJlc3VsdDFbeF0uQVJUSVNUKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soYXJ0aXN0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRBbGxBbGJ1bXMoY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICBsZXQgYWxidW1zOkFsYnVtW10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFMQlVNJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPTA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGJ1bXMucHVzaChuZXcgQWxidW0ocmVzdWx0MVt4XS5JRCwgcmVzdWx0MVt4XS5USVRMRSwgcmVzdWx0MVt4XS5BUlRJU1QsIHJlc3VsdDFbeF0uREVTQ1JJUFRJT04sIHJlc3VsdDFbeF0uWUVBUiwgcmVzdWx0MVt4XS5UUkFDS1MsIHJlc3VsdDFbeF0uSU1BR0UpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2soYWxidW1zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEFsYnVtQnlJRChhbGJ1bUlkOm51bWJlciwgY2FsbGJhY2s6IGFueSkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFsYnVtczpBbGJ1bVtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBBTEJVTSBXSEVSRSBJRD0/JywgYWxidW1JZCk7XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgQWxidW0ocmVzdWx0MVswXS5JRCwgcmVzdWx0MVswXS5USVRMRSwgcmVzdWx0MVswXS5BUlRJU1QsIHJlc3VsdDFbMF0uREVTQ1JJUFRJT04sIHJlc3VsdDFbMF0uWUVBUiwgcmVzdWx0MVswXS5UUkFDS1MsIHJlc3VsdDFbMF0uSU1BR0UpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGZpbmRBbGJ1bUJ5TmFtZUFuZElEKG5hbWU6c3RyaW5nLCBhbGJ1bUlkOm51bWJlciwgY2FsbGJhY2s6IGFueSkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFsYnVtczpBbGJ1bVtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBBTEJVTSBXSEVSRSBJRD0/IEFORCBBUlRJU1Q9PycsIFthbGJ1bUlkLCBuYW1lXSk7XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgQWxidW0ocmVzdWx0MVswXS5JRCwgcmVzdWx0MVswXS5USVRMRSwgcmVzdWx0MVswXS5BUlRJU1QsIHJlc3VsdDFbMF0uREVTQ1JJUFRJT04sIHJlc3VsdDFbMF0uWUVBUiwgcmVzdWx0MVswXS5UUkFDS1MsIHJlc3VsdDFbMF0uSU1BR0UpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEFsYnVtc0J5QXJ0aXN0KHNlYXJjaDpzdHJpbmcsIGNhbGxiYWNrOmFueSkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFsYnVtczpBbGJ1bVtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBBTEJVTSBXSEVSRSBBUlRJU1Q9PycsIFtzZWFyY2hdKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9MDsgeCA8IHJlc3VsdDEubGVuZ3RoOyArK3gpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbGJ1bUlkID0gcmVzdWx0MVt4XS5JRDtcclxuICAgICAgICAgICAgICAgIGxldCB0cmFja3M6VHJhY2tbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeT0wOyB5IDwgcmVzdWx0Mi5sZW5ndGg7ICsreSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaChuZXcgVHJhY2socmVzdWx0Mlt5XS5JRCwgcmVzdWx0Mlt5XS5OVU1CRVIsIHJlc3VsdDJbeV0uVElUTEUsIHJlc3VsdDJbeV0uTFlSSUNTKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdDFbeF0uSUQsIHJlc3VsdDFbeF0uVElUTEUsIHJlc3VsdDFbeF0uQVJUSVNULCByZXN1bHQxW3hdLkRFU0NSSVBUSU9OLCByZXN1bHQxW3hdLllFQVIsIHJlc3VsdDFbeF0uVFJBQ0tTLCByZXN1bHQxW3hdLklNQUdFKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRBbGJ1bXNCeURlc2NyaXB0aW9uKHNlYXJjaDpzdHJpbmcsIGNhbGxiYWNrOmFueSlcclxuICAgIHtcclxuICAgICAgICBsZXQgYWxidW1zOkFsYnVtW10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBBTEJVTSBXSEVSRSBERVNDUklQVElPTiBMSUtFID9cIiwgWyclJytzZWFyY2grJyUnXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPTA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdDFbeF0uSUQsIHJlc3VsdDFbeF0uVElUTEUsIHJlc3VsdDFbeF0uQVJUSVNULCByZXN1bHQxW3hdLkRFU0NSSVBUSU9OLCByZXN1bHQxW3hdLllFQVIsIHJlc3VsdDFbeF0uVFJBQ0tTLCByZXN1bHQxW3hdLklNQUdFKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZShhbGJ1bTpBbGJ1bSwgY2FsbGJhY2s6YW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeShcIklOU0VSVCBJTlRPIGBhbGJ1bWAoYElEYCwgYFRJVExFYCwgYEFSVElTVGAsIGBZRUFSYCwgYERFU0NSSVBUSU9OYCkgVkFMVUVTICg/LD8sPyw/LD8pXCIsIFthbGJ1bS5JZCwgYWxidW0uVGl0bGUsIGFsYnVtLkFydGlzdCwgYWxidW0uWWVhciwgYWxidW0uRGVzY3JpcHRpb25dKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxID09IHVuZGVmaW5lZCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGFsYnVtOkFsYnVtLCBjYWxsYmFjazphbnkpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3FsID0gXCJVUERBVEUgYGFsYnVtYCBTRVQgSUQ9PyxUSVRMRT0/LEFSVElTVD0/LFlFQVI9PyxERVNDUklQVElPTj0/IFdIRVJFIElEPT9cIjtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gW051bWJlcihhbGJ1bS5JZCksIGFsYnVtLlRpdGxlLCBhbGJ1bS5BcnRpc3QsIE51bWJlcihhbGJ1bS5ZZWFyKSwgYWxidW0uRGVzY3JpcHRpb24sIE51bWJlcihhbGJ1bS5JZCldO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KHNxbCwgZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm93cyBhZmZlY3RlZDonLCByZXN1bHQxLmFmZmVjdGVkUm93cyk7XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQxLmFmZmVjdGVkUm93cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoYXJ0aXN0OnN0cmluZywgdGFyZ2V0Om51bWJlciwgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNxbFRyYWNrcyA9IFwiREVMRVRFIEZST00gdHJhY2sgV0hFUkUgQUxCVU1fSUQ9P1wiO1xyXG4gICAgICAgICAgICB2YXIgc3FsID0gXCJERUxFVEUgRlJPTSBhbGJ1bSBXSEVSRSBJRD0/IEFORCBBUlRJU1Q9P1wiO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGFUcmFja3MgPSBbc3FsVHJhY2tzXTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBbTnVtYmVyKHRhcmdldCksIGFydGlzdF07XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeShzcWxUcmFja3MsIGRhdGFUcmFja3MpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoc3FsLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb3dzIGFmZmVjdGVkOicsIHJlc3VsdDEuYWZmZWN0ZWRSb3dzKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdDEuYWZmZWN0ZWRSb3dzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OzsrQ0FKQSxvSjs7SUFNYUEsUTtFQUlULGtCQUFZQyxJQUFaLEVBQXlCQyxJQUF6QixFQUFzQ0MsUUFBdEMsRUFBdURDLFFBQXZELEVBQ0E7SUFBQTtJQUFBO0lBQ0ksS0FBS0MsSUFBTCxHQUFZQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUI7TUFDekJOLElBQUksRUFBRUEsSUFEbUI7TUFFekJDLElBQUksRUFBRUEsSUFGbUI7TUFHekJNLElBQUksRUFBRUwsUUFIbUI7TUFJekJDLFFBQVEsRUFBRUEsUUFKZTtNQUt6QkssUUFBUSxFQUFFO0lBTGUsQ0FBakIsQ0FBWjtFQU9IOzs7O1dBRUQsb0JBQWtCQyxNQUFsQixFQUFpQ0MsUUFBakMsRUFDQTtNQUNJLElBQUlDLE1BQWMsR0FBRyxFQUFyQjtNQUVBLEtBQUtQLElB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