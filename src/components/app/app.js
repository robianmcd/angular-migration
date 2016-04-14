(function(){
    var app = angular.module('imageShare', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/images', {
                templateUrl: 'src/components/imageList/imageList.html',
                controller: 'ImageListCtrl as $ctrl'
            })
            .otherwise({
                redirectTo: '/images'
            });
    }]);
})();

