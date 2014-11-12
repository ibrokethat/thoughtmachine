'use strict';

var AmpState = require('ampersand-state');

module.exports = AmpState.extend({

  props: {

    room: {
      type: 'string',
      values: [
        'master bedroom',
        'bedroom 1',
        'bedroom 2',
        'bedroom 3',
        'kitchen',
        'living room',
        'bathroom'
      ]
    },

    description: {
      type: 'string',
      required: true
    },

    weight: {
      type: 'number',
      required: true
    },

    fragile: {
      type: 'boolean',
      default: false
    }

  },


  destroy: function () {

    if (this.collection) {
      this.collection.remove(this);
    }
  }

});
