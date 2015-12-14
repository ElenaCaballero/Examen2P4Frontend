angular.module('AngularScaffold.Controllers')
  .controller('GiftController', ['$scope', 'GiftService', '$sessionStorage', '$location', function ($scope, GiftService, $sessionStorage, $location) {
    	$scope.title = "Gifts";

      $scope.registerGift = function(){
        var gift = {nombre: $scope.gift.nombre, descripcion:  $scope.gift.descripcion, peso: $scope.gift.peso, destinatario: $scope.gift.destinatario, status: $scope.gift.status};
        GiftService.RegisterGift(gift).then(function(response){
          alert('Registered in correctly!');
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }

}]);