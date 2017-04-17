"use strict";
(function() {
    define(["angular", "cc"], function(angular, cc) {
        cc.controller("homeController", homeController);

        function homeController($scope) {
            $scope.x = 100;
        };
    });
})();