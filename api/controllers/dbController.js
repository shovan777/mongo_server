'use strict';


var mongoose = require('mongoose'),
  Location = mongoose.model('Locations');

exports.list_all_locations = (req, res) => {
  Task.find({}, (err, location) => {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.create_a_location = (req, res) => {
  var new_location = new Location(req.body);
  new_task.save((err, location) => {
    if (err)
      res.send(err);
    res.json(location);
  });
};


exports.read_a_location = (req, res) => {
  Task.findById(req.params.locationId, (err, location) => {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.update_a_location = (req, res) => {
  Task.findOneAndUpdate({_id: req.params.locationId}, req.body, {new: true}, (err, location) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_location = (req, res) => {


  Task.remove({
    _id: req.params.locationId
  }, function(err, location) {
    if (err)
      res.send(err);
    res.json({ message: 'Location successfully deleted' });
  });
};
