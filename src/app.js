'use strict';

/*global app $*/

var Router = require('./router');
var MainView = require('./views/main');
var domReady = require('domready');


module.exports = {

  moveit: function () {

    var self = window.app = this;

    // init our URL handlers and the history tracker
    this.router = new Router();

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
