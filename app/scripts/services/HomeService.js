angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
	var baseUrl = "https://atlasbackend.herokuapp.com/";
		return {
				Login: function(payload){
					return $http.post(baseUrl+"v1/login", payload);
				}
	    };
}]);
