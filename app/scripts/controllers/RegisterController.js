angular.module('AngularScaffold.Controllers')
  .controller('RegisterController', ['$scope', 'RegisterService', '$sessionStorage', function ($scope, RegisterService, $sessionStorage) {
    $scope.register = function(){
      var user = {username: $scope.user.username, password:  $scope.user.password, customer: $scope.user.customer, scope: $scope.user.scope};
      RegisterService.Register(user).then(function(response){
        alert('Registered in correctly!');
      }).catch(function(err){
        console.log(err);
        alert(err.data.error + " " + err.data.message);
      })
    }
  }]);
