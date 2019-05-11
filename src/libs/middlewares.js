import express from 'express';
module.exports = app =>{
//Settings
app.set('port', process.env.PORT || 3000);
//middlewares : es una funcion que se ejecutra antes de recibir una url , antes de procesar datos
app.use(express.json());
};