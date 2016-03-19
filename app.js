/**
 * Created by Log on 2016/3/18.
 */
//var app = angular.module("appToDoList", []);
var app = angular.module("appToDoList", ['ngCookies'] );
app.controller("appCtrl", function($cookieStore, $scope) {
    $scope.taskList = ["100", "200"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addToDoItem) {
            $scope.errortext = "Your input can not be empty.";
            return;
        }
        if ($scope.taskList.indexOf($scope.addToDoItem) == -1) {
            $scope.taskList.push($scope.addToDoItem);
        } else {
            $scope.errortext = "The task is already in your TodoList.";
        }
    };
    $scope.removeItem = function (index_deletedItem) {
        $scope.errortext = "";
        $scope.taskList.splice(index_deletedItem, 1);
    };

});
