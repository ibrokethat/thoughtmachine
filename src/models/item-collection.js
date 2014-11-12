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

var ItemCollection = AmpCollection.extend({

  model: Item,


  //  ensures the collection is sorted by room
  comparator: function (model) {

    return model.room;
  },


  //  retrieve the two heaviest items per room
  //  wrapping the response in a new Collection may be better done using
  //  a sub collection
  getHeaviestItems: function () {

    var rooms = groupBy(this.models, 'room');

    rooms = map(rooms, function (room, k) {
      return first(sortBy(room, 'weight').reverse(), 2);
    });

    return new ItemCollection(flatten(rooms));
  },


  //  retrieve only the fragile items
  //  wrapping the response in a new Collection may be better done using
  //  a sub collection
  getFragileItems: function () {

    return new ItemCollection(where(this.models, {fragile: true}));
  },


  //  retrieve the rest
  //  wrapping the response in a new Collection may be better done using
  //  a sub collection
  getUncategorisedItems: function () {

    var rooms = groupBy(this.models, 'room');

    rooms = map(rooms, function (room) {
      return where(rest(sortBy(room, 'weight').reverse(), 2), {fragile: false});
    });

    return new ItemCollection(flatten(rooms));
  }


});

module.exports = ItemCollection;
