import ApiService from "../../services/apiService";
import {HTTP_PROVIDERS} from "angular2/http";
import "rxjs/add/operator/map";
import {ImageList} from "../imageList/imageListComponent";
import IComponentOptions = angular.IComponentOptions;
import {adapter} from "../../adapter";

adapter.addProvider(HTTP_PROVIDERS);
adapter.addProvider(ApiService);


angular.module('imageShare', ['ngComponentRouter'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: '<ng-outlet></ng-outlet>',
        $routeConfig: [
            {path: '/home', name: 'ImageList', component: 'imageList', useAsDefault: true}
        ]
    })
    .directive('imageList', adapter.downgradeNg2Component(ImageList));

adapter.bootstrap(document.documentElement, ['imageShare']);