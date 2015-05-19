var express, homeRouter, i18n, i18nOptions, path;

path = require('path');

express = require('express');

homeRouter = require('express-promise-router')();

i18nOptions = {
  path: '../../locales/__lng__/__ns__.json',
  fallbackLng: 'en',
  fallbackNamespace: 'home'
};

i18n = require('i18n-future').middleware(i18nOptions);

homeRouter.use(i18n);

homeRouter.use(function(req, res, next) {
  res.locals.translate = function() {
    return req.translate;
  };
  return next();
});

homeRouter.get('/', function(req, res) {
  return res.render('index', {
    title: 'My App'
  });
});

module.exports = homeRouter;