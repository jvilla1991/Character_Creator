"use strict";
(function() {
    define(["angular" ], function(angular) {
        var ccApp = angular.module("ccApp", ["ngRoute"]);

        ccApp.init = function() {
            angular.bootstrap(document, ["ccApp"]);
        };

        return ccApp;
    });
})();