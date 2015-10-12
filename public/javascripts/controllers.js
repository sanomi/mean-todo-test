'use strict';

var app = angular.module('APP_NAME');

app.controller('homeCtrl', function($scope) {
});

app.controller('todoCtrl', function($scope, Todo) {
  $scope.todos = [];
  Todo.list()
  .then(function(res) {
    $scope.todos = res.data;
  });

  $scope.add = function(todo) {
    Todo.add(todo)
    .then(function(res) {
      $scope.todos.push(res.data);
    }, function(err) {
      console.error(err);
    })
  };

  $scope.toggleComplete = function(todo) {
    Todo.toggleComplete(todo)
    .then(function(res) {
      console.log(res);
    });
  };

  $scope.delete = function(todo) {
    Todo.delete(todo)
    .then(function(res) {
      $scope.todos = $scope.todos.filter(function(t) {
        return t._id !== todo._id;
      });
    }, function(err) {
      console.error(err);
    });
  };

});
