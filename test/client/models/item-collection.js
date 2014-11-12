'use strict';
var path = require('path');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

var rewire = require('rewire');

var fixtures;
var fakes;
var underTest;

var modulePath = 'client/models/item-collection';
var ItemCollection = rewire(path.resolve(modulePath));
chai.use(sinonChai);

describe(modulePath, function() {

  beforeEach(function() {

    underTest = new ItemCollection();
    fakes = sinon.sandbox.create();

    fixtures = [
      {room: 'bedroom 1', description: '', weight: 10, fragile: true},
      {room: 'bedroom 1', description: '', weight: 30, fragile: true},
      {room: 'bedroom 2', description: '', weight: 10, fragile: true},
      {room: 'bedroom 1', description: '', weight: 20, fragile: false},
      {room: 'bedroom 2', description: '', weight: 20, fragile: false},
      {room: 'bedroom 3', description: '', weight: 30, fragile: true},
      {room: 'bedroom 2', description: '', weight: 30, fragile: true},
      {room: 'bedroom 3', description: '', weight: 40, fragile: false},
      {room: 'bedroom 2', description: '', weight: 40, fragile: false},
      {room: 'bedroom 1', description: '', weight: 40, fragile: false},
      {room: 'bedroom 3', description: '', weight: 10, fragile: true},
      {room: 'bedroom 3', description: '', weight: 20, fragile: false},
    ];

    underTest.add(fixtures);

  });

  afterEach(function() {

    fakes.restore();
    underTest = null;
    fixtures = null;

  });


  describe('#getHeaviestItems', function () {

    it('should group, sort and limit the items in the collection', function () {

      var items = underTest.getHeaviestItems();

      expect(items[0].serialize()).to.deep.equal({room: 'bedroom 1', description: '', weight: 40, fragile: false});
      expect(items[1].serialize()).to.deep.equal({room: 'bedroom 1', description: '', weight: 30, fragile: true});
      expect(items[2].serialize()).to.deep.equal({room: 'bedroom 2', description: '', weight: 40, fragile: false});
      expect(items[3].serialize()).to.deep.equal({room: 'bedroom 2', description: '', weight: 30, fragile: true});
      expect(items[4].serialize()).to.deep.equal({room: 'bedroom 3', description: '', weight: 40, fragile: false});
      expect(items[5].serialize()).to.deep.equal({room: 'bedroom 3', description: '', weight: 30, fragile: true});

    });

  });


  describe('#getFragileItems', function () {

    it('should return only the fragile items', function () {

      var items = underTest.getFragileItems();

      expect(items.length).to.be.equal(6);

      for (var i = 0, l = items.length;  i < l; i++) {

        expect(items[i].fragile).to.be.true;

      }

    });

  });

  describe('#getUncategorisedItems', function () {

    it('should only return those items which do not return in #getHeaviestItems and #getFragileItems', function () {

      var items = underTest.getUncategorisedItems();

      expect(items.length).to.be.equal(3);

      for (var i = 0, l = items.length;  i < l; i++) {

        expect(items[i].fragile).to.be.false;
        expect(items[i].weight <= 20).to.be.true;

      }

    });

  });


});
