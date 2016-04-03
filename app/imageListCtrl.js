System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ImageListCtrl;
    return {
        setters:[],
        execute: function() {
            ImageListCtrl = (function () {
                function ImageListCtrl(api) {
                    var _this = this;
                    this.api = api;
                    api.getImages().then(function (images) {
                        _this.images = images;
                    });
                }
                ImageListCtrl.prototype.addImage = function () {
                    this.showModal = true;
                };
                ImageListCtrl.prototype.uploadNewImage = function (image) {
                    var _this = this;
                    this.api.createImage(image).then(function (createdImage) {
                        _this.images.unshift(createdImage);
                    });
                };
                return ImageListCtrl;
            }());
            exports_1("default", ImageListCtrl);
        }
    }
});
