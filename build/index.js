"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _db = _interopRequireDefault(require("./db.js"));

var _mongodb = _interopRequireDefault(require("mongodb"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT;
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
app.use(_express["default"].json()); //arms

app.get('/arms/athome/beginner', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.collection('arms').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context.sent;
            _context.next = 8;
            return cursor.toArray();

          case 8:
            result = _context.sent;
            res.json(result);

          case 10:
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
app.get('/arms/athome/intermidiate', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context2.sent;
            _context2.next = 5;
            return db.collection('arms').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context2.sent;
            _context2.next = 8;
            return cursor.toArray();

          case 8:
            result = _context2.sent;
            res.json(result);

          case 10:
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
app.get('/arms/athome/Advanced', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context3.sent;
            _context3.next = 5;
            return db.collection('arms').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context3.sent;
            _context3.next = 8;
            return cursor.toArray();

          case 8:
            result = _context3.sent;
            res.json(result);

          case 10:
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
app.get('/arms/ingym/beginner', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context4.sent;
            _context4.next = 5;
            return db.collection('arms').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context4.sent;
            _context4.next = 8;
            return cursor.toArray();

          case 8:
            result = _context4.sent;
            res.json(result);

          case 10:
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
app.get('/arms/ingym/intermidiate', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context5.sent;
            _context5.next = 5;
            return db.collection('arms').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context5.sent;
            _context5.next = 8;
            return cursor.toArray();

          case 8:
            result = _context5.sent;
            res.json(result);

          case 10:
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
app.get('/arms/ingym/advanced', /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context6.sent;
            _context6.next = 5;
            return db.collection('arms').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context6.sent;
            _context6.next = 8;
            return cursor.toArray();

          case 8:
            result = _context6.sent;
            res.json(result);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()); //abs

app.get('/abs/athome/beginner', /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context7.sent;
            _context7.next = 5;
            return db.collection('abs').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context7.sent;
            _context7.next = 8;
            return cursor.toArray();

          case 8:
            result = _context7.sent;
            res.json(result);

          case 10:
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
app.get('/abs/athome/intermidiate', /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context8.sent;
            _context8.next = 5;
            return db.collection('abs').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context8.sent;
            _context8.next = 8;
            return cursor.toArray();

          case 8:
            result = _context8.sent;
            res.json(result);

          case 10:
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
app.get('/abs/athome/Advanced', /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context9.sent;
            _context9.next = 5;
            return db.collection('abs').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context9.sent;
            _context9.next = 8;
            return cursor.toArray();

          case 8:
            result = _context9.sent;
            res.json(result);

          case 10:
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
app.get('/abs/ingym/beginner', /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context10.sent;
            _context10.next = 5;
            return db.collection('abs').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context10.sent;
            _context10.next = 8;
            return cursor.toArray();

          case 8:
            result = _context10.sent;
            res.json(result);

          case 10:
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
app.get('/abs/ingym/intermidiate', /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context11.sent;
            _context11.next = 5;
            return db.collection('abs').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context11.sent;
            _context11.next = 8;
            return cursor.toArray();

          case 8:
            result = _context11.sent;
            res.json(result);

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());
app.get('/abs/ingym/advanced', /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context12.sent;
            _context12.next = 5;
            return db.collection('abs').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context12.sent;
            _context12.next = 8;
            return cursor.toArray();

          case 8:
            result = _context12.sent;
            res.json(result);

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}()); //legs

app.get('/legs/athome/beginner', /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context13.sent;
            _context13.next = 5;
            return db.collection('legs').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context13.sent;
            _context13.next = 8;
            return cursor.toArray();

          case 8:
            result = _context13.sent;
            res.json(result);

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());
app.get('/legs/athome/intermidiate', /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context14.sent;
            _context14.next = 5;
            return db.collection('legs').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context14.sent;
            _context14.next = 8;
            return cursor.toArray();

          case 8:
            result = _context14.sent;
            res.json(result);

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());
app.get('/legs/athome/Advanced', /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context15.sent;
            _context15.next = 5;
            return db.collection('legs').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context15.sent;
            _context15.next = 8;
            return cursor.toArray();

          case 8:
            result = _context15.sent;
            res.json(result);

          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());
app.get('/legs/ingym/beginner', /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context16.sent;
            _context16.next = 5;
            return db.collection('legs').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context16.sent;
            _context16.next = 8;
            return cursor.toArray();

          case 8:
            result = _context16.sent;
            res.json(result);

          case 10:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());
app.get('/legs/ingym/intermidiate', /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context17.sent;
            _context17.next = 5;
            return db.collection('legs').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context17.sent;
            _context17.next = 8;
            return cursor.toArray();

          case 8:
            result = _context17.sent;
            res.json(result);

          case 10:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}());
app.get('/legs/ingym/advanced', /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context18.sent;
            _context18.next = 5;
            return db.collection('legs').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context18.sent;
            _context18.next = 8;
            return cursor.toArray();

          case 8:
            result = _context18.sent;
            res.json(result);

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}()); //back

app.get('/back/athome/beginner', /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context19.sent;
            _context19.next = 5;
            return db.collection('back').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context19.sent;
            _context19.next = 8;
            return cursor.toArray();

          case 8:
            result = _context19.sent;
            res.json(result);

          case 10:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());
app.get('/back/athome/intermidiate', /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context20.sent;
            _context20.next = 5;
            return db.collection('back').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context20.sent;
            _context20.next = 8;
            return cursor.toArray();

          case 8:
            result = _context20.sent;
            res.json(result);

          case 10:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}());
app.get('/back/athome/Advanced', /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context21.sent;
            _context21.next = 5;
            return db.collection('back').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context21.sent;
            _context21.next = 8;
            return cursor.toArray();

          case 8:
            result = _context21.sent;
            res.json(result);

          case 10:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}());
app.get('/back/ingym/beginner', /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context22.sent;
            _context22.next = 5;
            return db.collection('back').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context22.sent;
            _context22.next = 8;
            return cursor.toArray();

          case 8:
            result = _context22.sent;
            res.json(result);

          case 10:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function (_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}());
app.get('/back/ingym/intermidiate', /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context23.sent;
            _context23.next = 5;
            return db.collection('back').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context23.sent;
            _context23.next = 8;
            return cursor.toArray();

          case 8:
            result = _context23.sent;
            res.json(result);

          case 10:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function (_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}());
app.get('/back/ingym/advanced', /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context24.sent;
            _context24.next = 5;
            return db.collection('back').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context24.sent;
            _context24.next = 8;
            return cursor.toArray();

          case 8:
            result = _context24.sent;
            res.json(result);

          case 10:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function (_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}()); //chest

app.get('/chest/athome/beginner', /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context25.sent;
            _context25.next = 5;
            return db.collection('chest').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context25.sent;
            _context25.next = 8;
            return cursor.toArray();

          case 8:
            result = _context25.sent;
            res.json(result);

          case 10:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));

  return function (_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}());
app.get('/chest/athome/intermidiate', /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context26.sent;
            _context26.next = 5;
            return db.collection('chest').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context26.sent;
            _context26.next = 8;
            return cursor.toArray();

          case 8:
            result = _context26.sent;
            res.json(result);

          case 10:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  return function (_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}());
app.get('/chest/athome/Advanced', /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context27.sent;
            _context27.next = 5;
            return db.collection('chest').find({
              exercize_type: "At_home",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context27.sent;
            _context27.next = 8;
            return cursor.toArray();

          case 8:
            result = _context27.sent;
            res.json(result);

          case 10:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));

  return function (_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}());
app.get('/chest/ingym/beginner', /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context28.sent;
            _context28.next = 5;
            return db.collection('chest').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Beginner"
            });

          case 5:
            cursor = _context28.sent;
            _context28.next = 8;
            return cursor.toArray();

          case 8:
            result = _context28.sent;
            res.json(result);

          case 10:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));

  return function (_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}());
app.get('/chest/ingym/intermidiate', /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context29.sent;
            _context29.next = 5;
            return db.collection('chest').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Intermidiate"
            });

          case 5:
            cursor = _context29.sent;
            _context29.next = 8;
            return cursor.toArray();

          case 8:
            result = _context29.sent;
            res.json(result);

          case 10:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));

  return function (_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}());
app.get('/chest/ingym/advanced', /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(req, res) {
    var db, cursor, result;
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return (0, _db["default"])();

          case 2:
            db = _context30.sent;
            _context30.next = 5;
            return db.collection('chest').find({
              exercize_type: "In-gym",
              exerciye_dificulty: "Advanced"
            });

          case 5:
            cursor = _context30.sent;
            _context30.next = 8;
            return cursor.toArray();

          case 8:
            result = _context30.sent;
            res.json(result);

          case 10:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));

  return function (_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}());
app.listen(port, function () {
  return console.log("Slu\u0161am na portu ".concat(port, "!"));
});