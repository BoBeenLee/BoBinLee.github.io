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
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).controller('HomeCtrl', function ($scope) {
        $scope.init = function () {
            // rumble
            $('.rumble').jrumble({
                x: 15,
                y: 5,
                rotation: 4,
                speed: 120
            });
            $('.rumble').trigger('startRumble');
            //  alert(jQuery(".category-content").html());
        }
    });


