/**
 * Created by Log on 2016/3/18.
 */
//var app = angular.module("appToDoList", []);
var app = angular.module("appToDoList", ['ngCookies']);
app.controller("appCtrl", function($scope, $cookies) {

    $scope.taskList = [];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addToDoItem) {
            $scope.errortext = "Your input can not be empty.";
            return;
        }
        if ($scope.taskList.indexOf($scope.addToDoItem) == -1) {
            $scope.taskList.push($scope.addToDoItem);
            storeTasksInCookie();
            
        } else {
            $scope.errortext = "The task is already in your TodoList.";
        }
    };
    
    var storeTasksInCookie = function(){
        var now = new Date(),
        exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
        $cookies.put("taskList", $scope.taskList, {'expires': exp})
       
    };

    var getTasksInCookie = function(){
        return $cookies.get("taskList");
    };
    
    
    $scope.removeItem = function (index_deletedItem) {
        $scope.errortext = "";
        $scope.taskList.splice(index_deletedItem, 1);
        $scope.storeTasksInCookie();
    };

});
