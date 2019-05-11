"use strict";

module.exports = function (app) {
  // antes de inicializar el servidor crea las tablas
  app.db.sequelize.sync().done(function () {
    // inicializa el servidor 
    app.listen(app.get('port'), function () {
      console.log('Server on port', app.get('port'));
    });
  });
};