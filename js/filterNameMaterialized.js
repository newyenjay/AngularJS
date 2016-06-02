var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', function ($scope, $http){

  $http.get('http://api.randomuser.me/?results=24').success(function(data) {
    $scope.users = data.results;
  }).error(function(data, status) {
    alert('get data error!');
  });

  $scope.removeUser = function(user){
     $scope.users.splice($scope.users.indexOf(user),1);
  };

  $scope.modalDetails = function(user){
     $scope.user = user;
     $('#modalDetails').openModal();
  };

});
