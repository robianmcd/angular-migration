(function(){
    var app = angular.module('imageShare', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {

        $routeProvider
            .when('/images', {
                template: '<image-list></image-list>'
            })
            .otherwise({
                redirectTo: '/images'
            });
    }]);
})();

