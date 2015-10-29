define([
	'angularAMD',
	], function(angularAMD) {
		'use strict';
		angularAMD.controller('postController', ['$scope', '$location', '$state', '$http', function($scope, $location, $state, $http) {
			
			

            console.log($state.params.post);

			$http.get('wordpress/api/get_post/?slug=' + $state.params.post)
			.success(function(data, status, headers, config){
				$scope.post = data;
				$scope.comments = data.post.comments;


				// $rootScope.title = data.post.title;
			})
			.error(function(data, status, headers, config){
				window.alert("We have been unable to access the feed :-(");
			})

		}]);

	});