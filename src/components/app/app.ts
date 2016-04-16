import ApiService from "../../services/apiService";
import {imageListOptions} from "../imageList/imageListComponent";
import {imageEditorModalOptions} from "../imageEditorModal/imageEditorModalComponent";
import {adapter} from "../../adapter";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import 'rxjs/add/operator/map';

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
    .component('imageList', imageListOptions)
    .component('imageEditorModal', imageEditorModalOptions)

    .factory('http', adapter.downgradeNg2Provider(Http));

adapter.addProvider(HTTP_PROVIDERS);


adapter.bootstrap(document.documentElement, ['imageShare']);
