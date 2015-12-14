angular.module('AngularScaffold.Controllers')
  .controller('UserController', ['$scope', 'UserService','$rootScope', '$sessionStorage', function ($scope, UserService, $rootScope, $sessionStorage) {
    $scope.user = {};
    $scope.$sessionStorage = $sessionStorage;
    $scope.array = [];
    $scope.text="Hola";

    $scope.currentConnections = function(user){
      $scope.array.push(user);
      console.log('HELLO THERE HELLEN');
      UserService.currentConnections(user).then(function(response){
        $sessionStorage.currentUser = response.data;
        $scope.user = {};

        $scope.array.push("Hellen");
        console.log('HELLO THERE HELLEN');
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.connectionsWeekly = function(user){
      UserService.connectionsWeekly(user).then(function(response){
        $sessionStorage.currentUser = response.data;
        $scope.user = {};
        console.log("USUARIO "+user+" RESPONSE DATA "+response.data);
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }
  }]);
