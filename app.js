/**
 * Created by Log on 2016/3/18.
 */
var app = angular.module("appToDoList", []);
app.controller("appCtrl", function($scope) {
    $scope.missionList = ["100", "200"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addToDoItem) {
            $scope.errortext = "Your input can not be empty.";
            return;
        }
        if ($scope.missionList.indexOf($scope.addToDoItem) == -1) {
            $scope.missionList.push($scope.addToDoItem);
        } else {
            $scope.errortext = "The task is already in your TodoList.";
        }
    };
    $scope.removeItem = function (index_deletedItem) {
        $scope.errortext = "";
        $scope.missionList.splice(index_deletedItem, 1);
    };
});