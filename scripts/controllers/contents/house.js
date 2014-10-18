'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
    .controller('HouseCtrl', function ($scope) {
        $scope.images = [
            'main.png',
            'list.png',
            'write1.png',
            'write2.png',
            'write3.png',
            'read1.png',
            'read2.png',
            'mypage.png',
            'setting.png'
        ];

        $scope.init = function () {
        }

        $scope.refresh = function (last) {
            if (last) {
                $('.flexslider').flexslider({
                    animation: "slide",
                    animationLoop: false
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
