// aca va como va a arrancar el servidor
//const express = require('express');
import express from 'express';
// instalado como dependencia principal del proyecto 
// hace que se carge automaticamente scripts en este caso el index.js que esta dentro de la carpeta src
// 
import consign from 'consign';


const app = express();

consign({
    cwd: __dirname
})
  .include('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)

