'use strict'

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.handleAboutNav = function() {
    $('article').hide();
    $('#aboutMe').hide();
    $('#aboutMe').fadeIn();
  };

  module.aboutController = aboutController;
})(app);
