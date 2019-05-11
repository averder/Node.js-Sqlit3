"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (app) {
  //Settings
  app.set('port', process.env.PORT || 3000); //middlewares : es una funcion que se ejecutra antes de recibir una url , antes de procesar datos

  app.use(_express["default"].json());
};