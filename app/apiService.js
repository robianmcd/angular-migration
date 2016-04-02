System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IMAGES_URL, ApiService;
    return {
        setters:[],
        execute: function() {
            IMAGES_URL = 'https://image-share.herokuapp.com/api/images';
            ApiService = (function () {
                function ApiService($http, $q) {
                    this.$http = $http;
                    this.$q = $q;
                }
                ApiService.prototype.getImages = function () {
                    return this.$http.get(IMAGES_URL).then(function (response) {
                        return response.data;
                    });
                };
                ApiService.prototype.createImage = function (image) {
                    return this.$http.post(IMAGES_URL, image).then(function (response) {
                        return response.data;
                    });
                };
                return ApiService;
            }());
            exports_1("default", ApiService);
        }
    }
});
