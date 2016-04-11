import ApiService from "../../services/apiService";
import {HTTP_PROVIDERS} from "angular2/http";
import "rxjs/add/operator/map";
import {ImageList} from "../imageList/imageListComponent";
import {Component} from "angular2/core";
import {RouteConfig, Route, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({path: '/home', name: 'ImageList', component: ImageList, useAsDefault: true})
])
class App {

}

bootstrap(App, [HTTP_PROVIDERS, ApiService, ROUTER_PROVIDERS]);