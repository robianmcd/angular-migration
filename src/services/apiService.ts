import {Http, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";

const IMAGES_URL = 'https://image-share.herokuapp.com/api/images';

export default class ApiService {
    
    constructor(private http: Http) {

    }

    getImages(): Observable<string[]> {
        return this.http.get(IMAGES_URL)
            .map(res => res.json());
    }

    createImage(image): Observable<string> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(IMAGES_URL, JSON.stringify(image), {headers: headers})
            .map(res => res.json());
    }
}