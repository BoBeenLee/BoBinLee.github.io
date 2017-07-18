'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('PostCtrl', function ($scope) {
        $scope.posts = [
            {
                title: '자바 초기화',
                url: '/views/articles/141926-java-init.html'
            },
            {
                title: '경진대회시스템',
                url: '/views/contents/competition.html'
            },
            {
                title: '하우스',
                url: '/views/contents/house.html'
            },
            {
                title: '성공회알람앱',
                url: '/views/contents/skhualarm.html'
            }
        ];
        $scope.post = null;

        $scope.setPost = function (index) {
            $scope.post = $scope.posts[index];
        }

        $scope.init = function init() {

        };
  });
