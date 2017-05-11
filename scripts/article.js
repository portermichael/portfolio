'use strict';

var articles = [];

function Article (allArticlesObj) {
  this.title = allArticlesObj.title
  this.githubUrl = allArticlesObj.githubUrl
  this.initialDate = allArticlesObj.initialDate
  this.lastEditedDate = allArticlesObj.lastEditedDate
  this.category = allArticlesObj.category
  this.articleContent = allArticlesObj.articleContent
};

Article.prototype.toHtml = function(){
  var $newArticle = $('.template').clone();
  $newArticle.find('.template h3').html('frog');
  $newArticle.find('.article-body').html(this.articleContent)

  return $newArticle
};

allArticles.forEach(function(articleObj) {
  articles.push(new Article(articleObj));
});

articles.forEach(function(article){
  $('#template').append(article.toHtml);
});
