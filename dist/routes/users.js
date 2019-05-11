"use strict";

module.exports = function (app) {
  var Users = app.db.models.Users;
  app.get('/users/:id', function (req, res) {
    Users.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email']
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app["delete"]('/users/:id', function (req, res) {
    Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.post('/users', function (req, res) {
    Users.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
};