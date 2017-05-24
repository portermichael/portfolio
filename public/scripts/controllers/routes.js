'use strict'
var app = app || {};

page('/', app.articleController.handleArticleNav);
page('/about', app.aboutController.handleAboutNav);

page();
