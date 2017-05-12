'use strict'

var viewArticles = [];

//load articles from template

//separate articles based on category

//load about button

//nav button functionality
viewArticles.mainNav = function() {
  $('#aboutMe').hide();
  $('li.tab').on('click', function(){
    event.preventDefault();
    var dataContent = $(this).data('content')
    if(dataContent === 'home') {
      //show articles and hide about
      $('#articles').show();
      $('#aboutMe').hide();
    } else if (dataContent === 'about') {
      //show about and hide articles
      $('#aboutMe').show();
      $('#articles').hide();
    } else if (dataContent === 'blog') {
      //hide all articles
      $('#articles').hide();
      $('#aboutMe').hide();
      //show articles with category blog
      $('#articles').each(function(){
        if($(this).data('category') === 'blog')
          $(this).show();
      });
    } else if (dataContent === 'project') {
    //hide all articles
      $('#articles').hide();
      $('#aboutMe').hide();
    //show articles with category project
      $('#articles').each(function(){
        if($(this).data('category') === 'project')
          $(this).show();
    });
  }
  });
};

viewArticles.shortenText = function () {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('#articles').on('click', '.read-more', function(event){
    event.preventDefault();
    if($(this).html() === 'Read on →') {
      $(this).prev().children().show();
      $(this).html('Show less ←');
      $(this).blur();
    } else if ($(this).html() === 'Show less ←') {
      $('.article-body *:nth-of-type(n+2)').hide();
      $(this).html('Read on →');
      $(this).blur();
    }
  });
};

$(document).ready(function() {
  viewArticles.mainNav();
});
