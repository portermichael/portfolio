'use strict'

var app = app || {};

(function(module) {
  const navController = {};
//nav button functionality
  navController.mainNav = function() {
    $('#aboutMe').hide();
    $('li.tab').on('click', function(event){
      event.preventDefault();
      //show all articles and hide about
      let dataContent = $(this).data('content')
      if (dataContent === 'blog') {
        $('article').hide();
        $('#aboutMe').hide();
        $('article').map(function(){
          if ($(this).data('category') === 'Blog') {
            $(this).fadeIn();
          }
        });
      }
      //hide all articles and about and show only those with category blog
      else if (dataContent === 'projects') {
        $('article').hide();
        $('#aboutMe').hide();
        $('article').map(function(){
          if ($(this).data('category') === 'Github') {
            $(this).fadeIn();
          }
        });
      }
    });
  };

  module.navController = navController;
})(app);
