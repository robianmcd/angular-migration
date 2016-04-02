System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ImageListCtrl;
    return {
        setters:[],
        execute: function() {
            ImageListCtrl = (function () {
                function ImageListCtrl(api) {
                    var self = this;
                    this.api = api;
                    api.getImages().then(function (images) {
                        self.images = images;
                    });
                }
                ImageListCtrl.prototype.addImage = function () {
                    this.showModal = true;
                };
                ImageListCtrl.prototype.uploadNewImage = function (image) {
                    var self = this;
                    this.api.createImage(image).then(function (createdImage) {
                        self.images.unshift(createdImage);
                    });
                };
                return ImageListCtrl;
            }());
            exports_1("default", ImageListCtrl);
        }
    }
});
