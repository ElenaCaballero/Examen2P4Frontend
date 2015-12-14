angular.module('AngularScaffold.Controllers')
  .controller('NavbarController', ['AuthService', '$scope', '$rootScope', '$sessionStorage', '$location',  function (authService, $scope, $rootScope, $sessionStorage, $location) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
          $location.path('/home');
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.registernew = function(){
        $location.path('/register');
      }

      $scope.registergifts = function(){
        $location.path('/registergifts');
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }
}]);
