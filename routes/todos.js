'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

router.get('/', function(req, res) {
  Todo.find({}, function(err, todos) {
    if(err) {
      res.status(400).send({error: err});
    } else {
      res.send(todos);
    }
  });
});

router.post('/', function(req, res) {
  var todo = new Todo(req.body);
  todo.save(function(err, savedTodo) {
    if(err) {
      res.status(400).send({error: err});
    } else {
      res.send(savedTodo);
    }
  });
});

router.put('/:id/toggle', function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if(err) {
      res.status(400).send({error: err});
    } else {
      todo.isComplete = !todo.isComplete;
      todo.save(function(err, savedTodo) {
        res.send();
      });
    }
  });
});

router.delete('/:id', function(req, res) {
  Todo.findByIdAndRemove(req.params.id, function(err, deletedTodo) {
    if(err) {
      res.status(400).send({error: err});
    } else {
      res.send(deletedTodo);
    }
  });
});

module.exports = router;
