'use strict';

/*global app $*/

var Router = require('./router');
var MainView = require('./views/main');
var domReady = require('domready');
var ItemCollection = require('./models/item-collection');


module.exports = {

  moveit: function () {

    var self = window.app = this;

    // init our URL handlers and the history tracker
    this.router = new Router();

    //  create our collection
    this.items = new ItemCollection();

    var fixtures = [
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

    this.items.add(fixtures);


    // wait for document ready to render our main view
    // this ensures the document has a body, etc.
    domReady(function () {

        // init our main view
        var mainView = self.view = new MainView({
            el: document.body
        });

        // ...and render it
        mainView.render();

        // we have what we need, we can now start our router and show the appropriate page
        self.router.history.start({pushState: true, root: '/'});
    });
  },

  // This is how you navigate around the app.
  // this gets called by a global click handler that handles
  // all the <a> tags in the app.
  // it expects a url without a leading slash.
  // for example: "costello/settings".
  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;
    this.router.history.navigate(url, {trigger: true});
  }
};

// lets move it
module.exports.moveit();
