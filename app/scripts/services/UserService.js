angular.module('AngularScaffold.Services').factory('UserService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "https://atlasbackend.herokuapp.com/";
		return {
			usageMonthly: function(payload){
        return $http.get(baseUrl+"v1/currentconnections",payload);
      },
      weeklyUsage: function(payload){
        return $http.get(baseUrl+"v1/currentconnections",payload);
      },
      monthlyUsage: function(payload){
        return $http.get(baseUrl+"v1/currentconnections",payload);
      },
      currentConnections: function(payload){
        return $http.get(baseUrl+"v1/currentconnections",payload);
      },
      connectionsWeekly: function(payload){
        return $http.get(baseUrl+"v1/currentconnections",payload);
    	}
	  };
}]);
