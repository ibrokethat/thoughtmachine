'use strict';

var View = require('ampersand-view');
var ItemView = require('../views/item');
var template = require('../templates/inventory.dom');


module.exports = View.extend({

  template: template,

  render: function () {

    this.renderWithTemplate(this);

    this.renderCollection(this.collection, ItemView, this.queryByHook('item-container'));

  }

});
