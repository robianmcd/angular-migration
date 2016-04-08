System.register(["../../services/apiService", "../imageEditorModal/imageEditorModalComponent", "angular2/http", "rxjs/add/operator/map", "../imageList/imageListComponent", "../../adapter"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var apiService_1, imageEditorModalComponent_1, http_1, imageListComponent_1, adapter_1;
    return {
        setters:[
            function (apiService_1_1) {
                apiService_1 = apiService_1_1;
            },
            function (imageEditorModalComponent_1_1) {
                imageEditorModalComponent_1 = imageEditorModalComponent_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (imageListComponent_1_1) {
                imageListComponent_1 = imageListComponent_1_1;
            },
            function (adapter_1_1) {
                adapter_1 = adapter_1_1;
            }],
        execute: function() {
            adapter_1.adapter.addProvider(http_1.HTTP_PROVIDERS);
            angular.module('imageShare', ['ngComponentRouter'])
                .value('$routerRootComponent', 'app')
                .component('app', {
                template: '<ng-outlet></ng-outlet>',
                $routeConfig: [
                    { path: '/home', name: 'ImageList', component: 'imageList', useAsDefault: true }
                ]
            })
                .service('api', apiService_1.default)
                .directive('imageList', adapter_1.adapter.downgradeNg2Component(imageListComponent_1.ImageList))
                .component('imageEditorModal', imageEditorModalComponent_1.default)
                .factory('http', adapter_1.adapter.downgradeNg2Provider(http_1.Http));
            adapter_1.adapter.upgradeNg1Provider('api', { asToken: apiService_1.default });
            adapter_1.adapter.bootstrap(document.documentElement, ['imageShare']);
        }
    }
});
