'use strict';

/*global app*/
var View = require('ampersand-view');
var ItemForm = require('../forms/item');
var template = require('../templates/inventory-item-edit.dom');

module.exports = View.extend({

  pageTitle: 'Edit an item in the inventory',
  template: template,
  initialize: function (spec) {
    this.model = app.items.get(spec.id, 'cid');
  },
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        var model = this.model;
        return new ItemForm({
          el: el,
          model: this.model,

          submitCallback: function (data) {

            data = this.prepareData(data);

            model.set(data)
            app.navigate('/inventory');
          }
        });
      }
    }
  }

});
