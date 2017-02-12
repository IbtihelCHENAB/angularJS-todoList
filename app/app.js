'use strict';

var demoApp = angular.module('app', [
    'todoList'
]);


var todoList = angular.module('todoList',[]);



todoList.controller('todoCtrl', ['$scope',
    function ($scope) {

        var todos = $scope.todos = [];

        // Add todo
        $scope.addTodo = function () {
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            todos.push({                
                title: newTodo,
                completed: false
            });
            $scope.newTodo = '';
        };

        // Delete todo
        $scope.removeTodo = function (todo) {
            todos.splice(todos.indexOf(todo), 1);
        };

        // Select / Unselect All todos
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = !completed;
            });
        };

        // Unselect all completed Todos
        $scope.clearCompletedTodos = function () {
            $scope.todos = todos = todos.filter(function (todo) {
                return !todo.completed;
            });
        };
    }
]);