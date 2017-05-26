'use strict'
var app = app || {};

(function(module) {

const viewArticles = [];

//nav button functionality
viewArticles.mainNav = function() {
  $('#aboutMe').hide();
  $('li.tab').on('click', function(event){
    event.preventDefault();
    //show all articles and hide about
    let dataContent = $(this).data('content')
    if(dataContent === 'home') {
      $('#aboutMe').hide();
      $('article').fadeIn();
    }
    //show about and hide all articles
    else if (dataContent === 'about') {
      $('article').hide();
      $('#aboutMe').fadeIn();
    }
    //hide all articles and about and show only those with category blog
    else if (dataContent === 'blog') {
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

viewArticles.shortenText = function () {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('#articles').on('click', '.read-more', function(event){
    event.preventDefault();
    if($(this).html() === 'Read more →') {
      $(this).parent().addClass('bart', 100);
      $(this).prev().children().fadeIn(500);
      $(this).html('Read less ←');
      $(this).blur();
    } else if ($(this).html() === 'Read less ←') {
      $(this).parent().removeClass('bart', 100)
      $('.article-body *:nth-of-type(n+2)').fadeOut(500);
      $(this).html('Read more →');
      $(this).blur();
    }
  });
};

//hamburger functionality
viewArticles.hamburgerTab = function () {
  $('.fa-bars').on('click', function(){
    $('li').toggleClass('fabtab');
  });
}

viewArticles.initIndexPage = function(){
  app.Article.articles.map(function(article){
    $('#articles').append(article.toHtml());
  });
  viewArticles.mainNav();
  viewArticles.shortenText();
  viewArticles.hamburgerTab();

  $('h2').after(`<h3>${app.Article.eCount()} e\'s used total</h3>`);
  console.log(app.Article.eCount());
}
module.viewArticles = viewArticles;
})(app);
