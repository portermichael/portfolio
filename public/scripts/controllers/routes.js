'use strict'
var app = app || {};

page('/', app.articleController.handleArticleNav);
page('/about', app.aboutController.handleAboutNav);
page('/blog', app.blogController.handleBlogNav);
page('', app.githubController.hangleGithubNav);
page();
