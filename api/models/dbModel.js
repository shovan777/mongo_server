'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Lat: {
    type: Number,
    required: 'Kindly enter the latitude'
  },
  Lng: {
    type: Number,
    required: 'Kindly enter the longitude'
  },
});

module.exports = mongoose.model('Locations', LocationSchema);
