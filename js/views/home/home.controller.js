define([
	'angularAMD',
	], function(angularAMD) {
		'use strict';
		angularAMD.controller('homeController', ['$scope', '$location', '$state', '$http', function($scope, $location, $state, $http) {
			

			$http.get('wordpress/api/get_page/?slug=' + $location.url())
			.success(function(data, status, headers, config){
				$scope.page = data.page;
			})
			.error(function(data, status, headers, config){
				window.alert("We have been unable to access the feed :-(");
			});
		}]);

	});