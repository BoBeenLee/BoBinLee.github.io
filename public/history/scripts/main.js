'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.contents = [
      {
        name: '학과 홈페이지',
        url: 'views/contents/softhome.html'
      },
      {
        name: '경진대회시스템',
        url: 'views/contents/competition.html'
      },
      {
        name: '하우스',
        url: 'views/contents/house.html'
      },
      {
        name: '성공회알람앱',
        url: 'views/contents/skhualarm.html'
      },
      {
        name: '입학상담앱',
        url: 'views/contents/skhucalc.html'
      },
      {
        name: '중간지점앱',
        url: 'views/contents/intersection.html'
      }
    ];

    $scope.bottomMenus = [
      {
        name: "home",
        img: "images/main/home_icon.svg"
      },
      {
        name: "about me",
        img: "images/main/me_icon.svg"
      },
      {
        name: "portfolio",
        img: "images/main/port_icon.svg"
      },
      {
        name: "contact",
        img: "images/main/contact_icon.svg"
      }
    ];

    $scope.content = null;
    $scope.selectedIndex = 0;

    $scope.init = function () {
      // sausage
      $(window).sausage({
        content: function (i, $page) {
          // $page.find('.side-tag').first().text()
          var sausageSpan = '<span class="sausage-span"><img width="28" height="28" src="' + $scope.bottomMenus[i].img + '" /></span>'
          return sausageSpan;
        }
      });

      // rumble
      $('.rumble').jrumble({
        x: 15,
        y: 5,
        rotation: 4,
        speed: 120
      });
      $('.rumble').trigger('startRumble');

      // settings
      $scope.setContent(0);
    };

//        $scope.resizeAdjustments = function() {
//            if ($window.innerWidth < 768 && !$scope.isMobile) {
//                $scope.isMobile = true;
//            }
//            if($window.innerWidth >= 768 && $scope.isMobile){
//                $scope.isMobile = false;
//            }
//        }
//        $window.onresize = function () {
//            $scope.resizeAdjustments();
//        }
    $scope.onBottomMenuClick = function (index) {
      angular.element(".sausage-set .sausage:nth-of-type(" + index + ")").trigger("click");
    }

    $scope.setContent = function (index) {
      $scope.selectedIndex = index;
      $scope.content = $scope.contents[index];
    };
  });
