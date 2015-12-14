angular.module('AngularScaffold.Services').factory('GiftService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "https://elena-caballero-backend.herokuapp.com/";
		return {
        RegisterGift: function(payload){
          return $http.post(baseUrl+"v1/registergifts", payload);
        }
	    };
}]);
