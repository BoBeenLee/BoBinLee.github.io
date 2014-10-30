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
            $scope.isOne = false;
        };

        $scope.refresh = function () {
            if (!$scope.isOne) {
                $scope.isOne = true;

                $('.slides').bxSlider({
                    auto: true,
                    adaptiveHeight: true,
                    mode: 'fade'
                });
                $('.box-img').colorbox({
                    rel:'box-img',
                    transition:"fade",
                    innerWidth:"90%",
                    innerHeight:"90%",
                    current: "",
                    next: "",
                    previous: "",
                    onLoad:function(){
//                        var idx = $(this).attr("content").trim();
////                        alert(val("12"));
//                        $('.flexslider').flexslider(Number(idx));
                    },
                    onComplete:function(){
                        $('#cboxLoadedContent img').on("click", function(){
                            $.colorbox.close();
                        });
                    }
                });
            }
        }
    }).directive('repeatDone', function () {
        return function (scope, element, attrs) {

        };
    });
