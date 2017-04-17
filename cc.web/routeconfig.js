"use strict";
(function() {
    define([
        "angular",
        "angular-route",
        "cc",
        "controllers/home/homeController"
    ], function (
        angular,
        angularRoute,
        cc
    ) {
        cc.config(["$routeProvider", "$locationProvider",
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/home", { templateUrl: "views/home/home.html", controller: "homeController" })
            }
        ]);
    });
})();