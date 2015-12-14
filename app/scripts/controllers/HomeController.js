angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', '$location', function ($scope, HomeService, $sessionStorage, $location) {
    	$scope.title = "Data from middleware";

      $scope.login = function(user){
        HomeService.Login(user).then(function(response, location){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          if($sessionStorage.currentUser.scope=='admin'){
            $location.path('/admin');
          }else{
            $location.path('/regular');
          }
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
