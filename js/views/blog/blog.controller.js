define([
	'angularAMD',
	], function(angularAMD) {
		'use strict';
		angularAMD.controller('blogController', ['$scope', '$location', '$state', '$http', function($scope, $location, $state, $http,$routeParams) {
			
			

			var url = $http.get('wordpress/api/get_posts');

			url
			.success(function(data, status, headers, config){
				// console.log(data);

				$scope.posts = data.posts;
				$scope.paging = data;

				// // $scope.page = $routeParams.page;
				// $scope.next = parseInt($routeParams.page)+1;
				// $scope.prev = parseInt($routeParams.page)-1;
				
			})
			.error(function(data, status, headers, config){
				window.alert("We have been unable to access the feed :-(");
			});

		}]);

	});