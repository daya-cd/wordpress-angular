define(['common'], function(angularAMD) {
	'use strict';
	var app = angular.module('app', ['ui.router', 'ngResource', 'ngAnimate','ngSanitize']);
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', angularAMD.route({
				url: '/home',
				templateUrl: 'js/views/home/home.tpl.html',
				controllerUrl: 'js/views/home/home.controller.js'
			}))
			.state('about', angularAMD.route({
				url: '/about',
				templateUrl: 'js/views/about/about.tpl.html',
				controllerUrl: 'js/views/about/about.controller.js'
			}))
			.state('blog', angularAMD.route({
				url: '/blog',
				templateUrl: 'js/views/blog/blog.tpl.html',
				controllerUrl: 'js/views/blog/blog.controller.js'
			}))
			.state('/blog/:category/:post', angularAMD.route({
				url: '/blog/:category/:post',
				templateUrl: 'js/views/post/post.tpl.html',
				controllerUrl: 'js/views/post/post.controller.js'
			}))


		$urlRouterProvider.otherwise('/home');

	}]);

	return angularAMD.bootstrap(app);
});