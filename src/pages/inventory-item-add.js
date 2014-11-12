'use strict';

/*global app*/
var View = require('ampersand-view');
var ItemForm = require('../forms/item');
var template = require('../templates/inventory-item-add.dom');

module.exports = View.extend({

  pageTitle: 'Add an item to the Inventory',
  template: template,
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new ItemForm({
          el: el,

          submitCallback: function (data) {

            data = this.prepareData(data);

            app.items.add(data)
            app.navigate('/inventory');
          }
        });
      }
    }
  }

});
