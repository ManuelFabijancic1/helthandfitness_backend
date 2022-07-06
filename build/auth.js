"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongodb = _interopRequireDefault(require("mongodb"));

var _db = _interopRequireDefault(require("./db.js"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var db;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _db["default"])();

        case 2:
          db = _context.sent;
          db.collection('users').createIndex({
            username: 1
          }, {
            unique: true
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
var _default = {
  registerUser: function registerUser(userData) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var db, doc, result;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _db["default"])();

            case 2:
              db = _context2.sent;
              _context2.t0 = userData.username;
              _context2.next = 6;
              return _bcrypt["default"].hash(userData.password, 8);

            case 6:
              _context2.t1 = _context2.sent;
              doc = {
                username: _context2.t0,
                password: _context2.t1
              };
              _context2.prev = 8;
              _context2.next = 11;
              return db.collection('users').insertOne(doc);

            case 11:
              result = _context2.sent;

              if (!(result && result.insertedId)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt("return", result.insertedId);

            case 14:
              _context2.next = 20;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t2 = _context2["catch"](8);

              if (!(_context2.t2.name == 'MongoError' && _context2.t2.code == 11000)) {
                _context2.next = 20;
                break;
              }

              throw new Error('Username already exists');

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[8, 16]]);
    }))();
  },
  authenticateUser: function authenticateUser(username, password) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var db, user, token;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _db["default"])();

            case 2:
              db = _context3.sent;
              _context3.next = 5;
              return db.collection("users").findOne({
                username: username
              });

            case 5:
              user = _context3.sent;
              _context3.t0 = user && user.password;

              if (!_context3.t0) {
                _context3.next = 11;
                break;
              }

              _context3.next = 10;
              return _bcrypt["default"].compare(password, user.password);

            case 10:
              _context3.t0 = _context3.sent;

            case 11:
              if (!_context3.t0) {
                _context3.next = 17;
                break;
              }

              delete user.password;
              token = _jsonwebtoken["default"].sign(user, process.env.JWT_SECRET, {
                algorithm: "HS512",
                expiresIn: "1 week"
              });
              return _context3.abrupt("return", {
                token: token,
                username: user.username
              });

            case 17:
              throw new Error("Cannot authenticate!");

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  verify: function verify(req, res, next) {
    try {
      var authorization = req.headers.authorization.split(' ');
      var type = authorization[0];
      var token = authorization[1];

      if (type !== "Bearer") {
        res.status(401).send();
        return false;
      } else {
        req.jwt = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
        return next();
      }
    } catch (e) {
      res.status(401).send();
      return false;
    }
  }
};
exports["default"] = _default;