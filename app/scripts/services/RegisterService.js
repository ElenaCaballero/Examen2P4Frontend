angular.module('AngularScaffold.Services').factory('RegisterService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "https://elena-caballero-backend.herokuapp.com/";
		return {
        Register: function(payload){
          return $http.post(baseUrl+"v1/register", payload);
        }
	    };
}]);
