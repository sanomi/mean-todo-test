'use strict';

var app = angular.module('APP_NAME');

app.service('Todo', function($http) {

  this.list = function() {
    return $http.get('/todos');
  };

  this.add = function(todo) {
    return $http.post('/todos', todo);
  };

  this.toggleComplete = function(todo) {
    return $http.put('/todos/' + todo._id + '/toggle');
  };

  this.delete = function(todo) {
    return $http.delete('/todos/' + todo._id);
  };

});
