'use strict';

var _ = require('underscore');
var AmpCollection = require('ampersand-collection');
var Item = require('./item');

var groupBy = _.groupBy;
var map = _.map;
var sortBy = _.sortBy;
var first = _.first;
var rest = _.rest;
var flatten = _.flatten;
var where = _.where;

module.exports = AmpCollection.extend({

  model: Item,


  //  ensures the collection is sorted by room
  comparator: function (model) {

    return model.room;
  },


  //  retrieve the two heaviest items per room
  getHeaviestItems: function () {

    var rooms = groupBy(this.models, 'room');

    rooms = map(rooms, function (room, k) {
      return first(sortBy(room, 'weight').reverse(), 2);
    });

    return flatten(rooms);
  },


  //  retrieve only the fragile items
  getFragileItems: function () {

    return where(this.models, {fragile: true});
  },


  //  retrieve the rest
  getUncategorisedItems: function () {

    var rooms = groupBy(this.models, 'room');

    rooms = map(rooms, function (room) {
      return where(rest(sortBy(room, 'weight').reverse(), 2), {fragile: false});
    });

    return flatten(rooms);
  }


});
