'use strict';
module.exports.router = (app) => {
  var location = require('../controllers/dbController');

  // todoList Routes
  app.route('/location')
    .get(location.list_all_locations)
    .post(location.create_a_location);


  app.route('/location/:locationId')
    .get(location.read_a_location)
    .put(location.update_a_location)
    .delete(location.delete_a_location);
};
