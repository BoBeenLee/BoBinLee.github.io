'use strict';

/**
 * @ngdoc overview
 * @name meanstackApp
 * @description
 * # meanstackApp
 *
 * Main module of the application.
 */
angular
    .module('meanstackApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ]).config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/post', {
                templateUrl: '../views/post.html',
                controller: 'PostCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    }).controller('HomeCtrl', function ($scope) {
        $scope.menus = [{url : '/', name : 'Me'}, {url : '/#/post', name : 'Post'}];
        $scope.selectedIndex = -1; // Whatever the default selected index is, use -1 for no selection

        $scope.menuClicked = function ($index) {
            $(window).sausage("destroy");
            $scope.selectedIndex = $index;
        };

        $scope.init = function () { }
    });


