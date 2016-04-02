System.register(['./imageListCtrl', './apiService', './imageEditorModalDirective'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var imageListCtrl_1, apiService_1, imageEditorModalDirective_1;
    return {
        setters:[
            function (imageListCtrl_1_1) {
                imageListCtrl_1 = imageListCtrl_1_1;
            },
            function (apiService_1_1) {
                apiService_1 = apiService_1_1;
            },
            function (imageEditorModalDirective_1_1) {
                imageEditorModalDirective_1 = imageEditorModalDirective_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('imageShare', ['ngRoute'])
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
                .controller('ImageListCtrl', imageListCtrl_1.default)
                .service('api', apiService_1.default)
                .component('imageEditorModal', imageEditorModalDirective_1.default));
            angular.bootstrap(document, ['imageShare']);
        }
    }
});
