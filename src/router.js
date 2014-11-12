'use strict';

/*global app*/
var Router = require('ampersand-router');
var InventoryPage = require('./pages/inventory');
var InventoryAddPage = require('./pages/inventory-item-add');
var InventoryEditPage = require('./pages/inventory-item-edit');
var ManifestPage = require('./pages/manifest');


module.exports = Router.extend({
  routes: {
    '': 'inventory',
    'inventory': 'inventory',
    'inventory/add': 'inventoryAdd',
    'inventory/:id': 'inventoryEdit',
    'manifest': 'manifest',
    '(*path)': 'catchAll'
  },

  // ------- ROUTE HANDLERS ---------
  inventory: function () {
    this.trigger('page', new InventoryPage({
      collection: app.items
    }));
  },

  inventoryAdd: function () {
    this.trigger('page', new InventoryAddPage());
  },

  inventoryEdit: function (id) {
    this.trigger('page', new InventoryEditPage({
      id: id
    }));
  },

  manifest: function () {
    this.trigger('page', new ManifestPage({
      collection: app.items
    }));
  },

  catchAll: function () {
    this.redirectTo('');
  }
});
