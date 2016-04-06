import imageListOptions from '../imageList/imageListComponent';
import ApiService from '../../services/apiService';
import imageEditorModalOptions from '../imageEditorModal/imageEditorModalComponent';
import {UpgradeAdapter} from "angular2/upgrade";
import IComponentOptions = angular.IComponentOptions;
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

const upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.addProvider(HTTP_PROVIDERS);

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
    .component('imageEditorModal', imageEditorModalOptions)

    .factory('http', upgradeAdapter.downgradeNg2Provider(Http));


upgradeAdapter.bootstrap(document.documentElement, ['imageShare']);