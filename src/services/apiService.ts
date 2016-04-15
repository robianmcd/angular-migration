(function () {
    var IMAGES_URL = 'https://image-share.herokuapp.com/api/images';

    angular.module('imageShare').factory('api', function($http: ng.IHttpService) {
        function getImages() {
            return $http.get(IMAGES_URL).then((response) => {
                return response.data;
            });
        }

        function createImage(image) {
            return $http.post(IMAGES_URL, image).then((response) => {
                return response.data;
            });
        }

        return {
            getImages: getImages,
            createImage: createImage
        };
    });

})();