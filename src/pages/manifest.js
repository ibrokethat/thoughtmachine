'use strict';

var View = require('ampersand-view');
var ItemView = require('../views/item');
var template = require('../templates/manifest.dom');

module.exports = View.extend({

  template: template,

  render: function () {

    this.renderWithTemplate(this);

    this.renderCollection(this.collection.getHeaviestItems(), ItemView, this.queryByHook('heaviest-item-container'));
    this.renderCollection(this.collection.getFragileItems(), ItemView, this.queryByHook('fragile-item-container'));
    this.renderCollection(this.collection.getUncategorisedItems(), ItemView, this.queryByHook('other-item-container'));

  }

});
