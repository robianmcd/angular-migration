var IMAGES_URL = 'https://image-share.herokuapp.com/api/images';

export default class ApiService {
    $http: ng.IHttpService;
    $q: ng.IQService;
    
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getImages() {
        return this.$http.get(IMAGES_URL).then(function (response) {
            return response.data;
        });
    }

    createImage(image) {
        return this.$http.post(IMAGES_URL, image).then(function (response) {
            return response.data;
        });
    }
}