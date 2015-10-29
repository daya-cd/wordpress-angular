define([
    'angularAMD'
], function(angularAMD) {

    'use strict';

    angularAMD.controller('headerController', ['$scope', '$rootScope', '$location', '$state', function($scope, $rootScope, $location, $state) {

        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.navs = [{
            name: 'Home',
            route: 'home'
        }, {
            name: 'About',
            route: 'about'
        },
        {
            name: 'Blog',
            route: 'blog'
        }];
    }]);
});