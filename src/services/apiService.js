System.register(["angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var IMAGES_URL, ApiService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            IMAGES_URL = 'https://image-share.herokuapp.com/api/images';
            ApiService = (function () {
                function ApiService(http) {
                    this.http = http;
                }
                ApiService.prototype.getImages = function () {
                    return this.http.get(IMAGES_URL)
                        .map(function (res) { return res.json(); });
                };
                ApiService.prototype.createImage = function (image) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(IMAGES_URL, JSON.stringify(image), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                return ApiService;
            }());
            exports_1("default", ApiService);
        }
    }
});
