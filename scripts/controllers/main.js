'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
    .controller('MainCtrl', function ($scope) {
        $scope.contents = [
            {
                name: '학과 홈페이지',
                url: '/views/contents/softhome.html'
            },
            {
                name: '경진대회시스템',
                url: '/views/contents/competition.html'
            },
            {
                name: '하우스',
                url: '/views/contents/house.html'
            },
            {
                name: '성공회알람앱',
                url: '/views/contents/skhualarm.html'
            }
        ];
        $scope.content = null;

        $scope.init = function init() {
            // $(window).stellar();
            // sausage
            $(window).sausage({
                content: function (i, $page) {
                    return '<span class="sausage-span">' + $page.find('.side-tag').first().text() + '</span>';
                }
            });
            // settings
            $scope.setContent(0);
        };

        $scope.setContent = function (index) {
            $scope.content = $scope.contents[index];
        };
    });
