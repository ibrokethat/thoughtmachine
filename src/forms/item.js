'use strict';

var FormView = require('ampersand-form-view');
var SelectView = require('ampersand-select-view');
var InputView = require('ampersand-input-view');
var CheckboxView = require('ampersand-checkbox-view');


module.exports = FormView.extend({

  prepareData: function (data) {
    data.weight = parseFloat(data.weight);
    return data;
  },

  fields: function () {
    return [
      new SelectView({
        label: 'Room',
        name: 'room',
        value: this.model ? this.model.room : 'master bedroom',
        options: [
          'master bedroom',
          'bedroom 1',
          'bedroom 2',
          'bedroom 3',
          'kitchen',
          'living room',
          'bathroom'
        ],
        required: false,
        parent: this
      }),
      new InputView({
        label: 'Description',
        name: 'description',
        value: this.model ? this.model.description || '' : '',
        required: true,
        placeholder: 'Description',
        parent: this
      }),
      new InputView({
        label: 'Weight',
        name: 'weight',
        value: this.model ? this.model.weight || '' : '',
        required: true,
        placeholder: 'Weight',
        parent: this
      }),
      new CheckboxView({
        label: 'Fragile',
        name: 'fragile',
        value: this.model ? this.model.fragile : false,
        parent: this
      })
    ];
  }
});
