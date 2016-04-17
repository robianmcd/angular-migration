import ApiService from "../../services/apiService";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/add/operator/map';
import {ImageListComponent} from "../imageList/imageListComponent";
import {ROUTER_DIRECTIVES, RouteConfig, Route, ROUTER_PROVIDERS} from "angular2/router";
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({path: '/home', name: 'ImageList', component: ImageListComponent, useAsDefault: true})
])
class App {

}

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ApiService]);
