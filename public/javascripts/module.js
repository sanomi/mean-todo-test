'use strict';

var app = angular.module('APP_NAME', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', { url: '/', templateUrl: '/templates/home.html', controller: 'homeCtrl' })
    .state('todos', { url: '/todos', templateUrl: '/templates/todos.html', controller: 'todoCtrl'})

  $urlRouterProvider.otherwise('/');
});
