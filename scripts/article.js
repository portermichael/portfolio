'use strict';

var articles = [];

function Article (allArticlesObj) {
  this.title = allArticlesObj.title
  this.linkedUrl = allArticlesObj.linkedUrl
  this.createdDate = allArticlesObj.createdDate
  this.lastEditedDate = allArticlesObj.lastEditedDate
  this.category = allArticlesObj.category
  this.articleContent = allArticlesObj.articleContent
}

Article.prototype.toHtml = function() {
  var articleTemplate = $('#articleTemplate').html();
  var compileArticle = Handlebars.compile(articleTemplate);

  this.daysAgo = parseInt(Math.floor((new Date() - new Date(this.createdDate))/60/60/24/1000));
  this.publishStatus = this.createdDate ? `published ${this.daysAgo} days ago` : '(draft)';

  return compileArticle(this);
};

allArticles.sort(function(a, b){
  return (new Date(b.lastEditedDate) - new Date (a.lastEditedDate));
});

allArticles.forEach(function(articleObj) {
  articles.push(new Article(articleObj));
});

articles.forEach(function(article){
  $('#articles').append(article.toHtml());
});
