"use strict";

var _express = _interopRequireDefault(require("express"));

var _consign = _interopRequireDefault(require("consign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// aca va como va a arrancar el servidor
//const express = require('express');
// instalado como dependencia principal del proyecto 
// hace que se carge automaticamente scripts en este caso el index.js que esta dentro de la carpeta src
// 
var app = (0, _express["default"])();
(0, _consign["default"])({
  cwd: __dirname
}).include('libs/config.js').then('db.js').then('libs/middlewares.js').then('routes').then('libs/boot.js').into(app);