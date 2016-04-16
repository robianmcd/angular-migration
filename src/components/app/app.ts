import ApiService from "../../services/apiService";
import {adapter} from "../../adapter";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {ImageListComponent} from "../imageList/imageListComponent";

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

app
    .service('api', ApiService)
    .directive('imageList', adapter.downgradeNg2Component(ImageListComponent))

    .factory('http', adapter.downgradeNg2Provider(Http));

adapter.addProvider(HTTP_PROVIDERS);
adapter.upgradeNg1Provider('api', {asToken: ApiService});


adapter.bootstrap(document.documentElement, ['imageShare']);
