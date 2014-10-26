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
            'kakao.png',
            'facebook.png',
            'login.png',
            'signup.png',
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
                    animationLoop: false,
                    smoothHeight: true
                });
                $('.box-img').colorbox({
                    rel:'box-img',
                    transition:"fade",
                    innerWidth:"90%",
                    innerHeight:"90%",
                    current: "",
                    next: "",
                    previous: "",
                    close: "",
                    onLoad:function(){
                        var idx = $(this).attr("content").trim();
//                        alert(val("12"));
                        $('.flexslider').flexslider(Number(idx));
                    }
                });
            }
        }
    }).directive('repeatDone', function () {
        return function (scope, element, attrs) {

        };
    });
