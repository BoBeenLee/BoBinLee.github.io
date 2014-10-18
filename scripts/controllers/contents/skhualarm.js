'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
    .controller('SkhuAlarmCtrl', function ($scope) {
        $scope.images = [
            'main.png',
            'facebook.png',
            'skhubrd.png',
            'qna.png',
            'menu.png',
            'calendar.png',
            'alarm.png'
        ];

        $scope.init = function () {
        }

        $scope.refresh = function (last) {
            if (last) {
                $('.flexslider').flexslider({
                    animation: "slide",
                    animationLoop: false,
                    smoothHeight: true
                });
                // zoom
                $('.zoom').zoom({
                    magnify : 1,
                    on: 'click' });
            }
        }
    }).directive('repeatDone', function () {
        return function (scope, element, attrs) {

        };
    });
