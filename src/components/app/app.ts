import imageListOptions from '../imageList/imageListComponent';
import ApiService from '../../services/apiService';
import imageEditorModalOptions from '../imageEditorModal/imageEditorModalComponent';
import {UpgradeAdapter} from "angular2/upgrade";
import IComponentOptions = angular.IComponentOptions;

const upgradeAdapter = new UpgradeAdapter();

angular.module('imageShare', ['ngComponentRouter'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: '<ng-outlet></ng-outlet>',
        $routeConfig: [
            {path: '/home', name: 'ImageList', component: 'imageList', useAsDefault: true}
        ]
    })
    .service('api', ApiService)
    .component('imageList', imageListOptions)
    .component('imageEditorModal', imageEditorModalOptions);


upgradeAdapter.bootstrap(document.documentElement, ['imageShare']);