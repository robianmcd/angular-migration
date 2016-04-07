import ApiService from "../../services/apiService";
import imageEditorModalOptions from "../imageEditorModal/imageEditorModalComponent";
import {Http, HTTP_PROVIDERS} from "angular2/http";
import "rxjs/add/operator/map";
import {ImageList} from "../imageList/imageListComponent";
import IComponentOptions = angular.IComponentOptions;
import {adapter} from "../../adapter";

adapter.addProvider(HTTP_PROVIDERS);


angular.module('imageShare', ['ngComponentRouter'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: '<ng-outlet></ng-outlet>',
        $routeConfig: [
            {path: '/home', name: 'ImageList', component: 'imageList', useAsDefault: true}
        ]
    })
    .service('api', ApiService)
    .directive('imageList', <ng.IDirectiveFactory>adapter.downgradeNg2Component(ImageList))
    .component('imageEditorModal', imageEditorModalOptions)

    .factory('http', adapter.downgradeNg2Provider(Http));

adapter.upgradeNg1Provider('api', {asToken: ApiService});

adapter.bootstrap(document.documentElement, ['imageShare']);