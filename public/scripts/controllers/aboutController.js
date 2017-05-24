'use strict'

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.handleAboutNav = function() {
    $('.content').hide();
    $(`#about`).fadeIn();
  };

  module.aboutController = aboutController;
})(app);
