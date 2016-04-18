const IMAGES_URL = 'https://image-share.herokuapp.com/api/images';

export default class ApiService {
    constructor(private $http: ng.IHttpService) {
    }

    getImages(): ng.IPromise<Image[]> {
        return this.$http.get(IMAGES_URL).then((response) => {
            return response.data;
        });
    }

    createImage(image): ng.IPromise<Image> {
        return this.$http.post(IMAGES_URL, image).then((response) => {
            return response.data;
        });
    }
}
