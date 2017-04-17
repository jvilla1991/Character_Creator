(function() {
    require.config({
        baseUrl: "",

        paths: {
            "angular": "../javascript/angular.min.js",
            "angular-route": "../javascript/angular-route.js",
            "lodash": "../javascript/lodash.js",
            "cc": "app"
        },

        shim: {
            "angular": {
                exports: "angular"
            }
        }
    });

    require(["cc", "routeconfig"], function(app) {
        app.init();
    });
})();