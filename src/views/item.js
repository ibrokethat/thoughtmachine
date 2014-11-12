'use strict';

var BaseView = require('./base');
var template = require('../templates/item.dom');

module.exports = BaseView.extend({

  template: template,

  events: {
    'click [data-hook~=delete]': 'deleteItem'
  },

  deleteItem: function () {

    this.model.destroy();
  }

});
