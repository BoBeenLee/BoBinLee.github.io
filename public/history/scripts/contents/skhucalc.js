'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('SkhucalcCtrl', function ($scope) {
    $scope.images = [
      'main.png',
      'type1.png',
      'type2.png',
      'input1.png',
      'input2.png',
      'result1.png',
      'result2.png',
      'mail.png'
    ];

    $scope.init = function () {
      $scope.isOne = false;
    };

    $scope.refresh = function () {
      if (!$scope.isOne) {
        $scope.isOne = true;

        $('.slides').bxSlider({
          auto: false,
          adaptiveHeight: true,
          mode: 'fade'
        });
        $('.box-img').colorbox({
          rel: 'box-img',
          transition: "fade",
          innerWidth: "90%",
          innerHeight: "90%",
          current: "",
          next: "",
          previous: "",
          onLoad: function () {
//                        var idx = $(this).attr("content").trim();
////                        alert(val("12"));
//                        $('.flexslider').flexslider(Number(idx));
          },
          onComplete: function () {
            $('#cboxLoadedContent img').on("click", function () {
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