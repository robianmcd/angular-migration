import ImageListCtrl from './imageListCtrl';
import ApiService from './apiService';
import imageEditorModalCdo from './imageEditorModalDirective';
import IComponentOptions = angular.IComponentOptions;


export default angular.module('imageShare', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/images', {
                templateUrl: 'app/imageList.html',
                controller: 'ImageListCtrl as ctrl'
            })
            .otherwise({
                redirectTo: '/images'
            });
    }])
    .controller('ImageListCtrl', ImageListCtrl)
    .service('api', ApiService)
    .component('imageEditorModal', imageEditorModalCdo);

angular.bootstrap(document, ['imageShare']);