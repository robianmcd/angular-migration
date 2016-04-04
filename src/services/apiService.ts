const IMAGES_URL = 'https://image-share.herokuapp.com/api/images';

export default class ApiService {
    
    constructor(private $http: ng.IHttpService) {
        
    }

    getImages(): ng.IPromise<string[]> {
        return this.$http.get(IMAGES_URL).then(response => response.data);
    }

    createImage(image): ng.IPromise<string> {
        return this.$http.post(IMAGES_URL, image).then(response => response.data);
    }
}