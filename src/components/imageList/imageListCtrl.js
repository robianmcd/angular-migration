(function() {
    angular.module('imageShare').controller('ImageListCtrl', ImageListCtrl);
    
    function ImageListCtrl(api) {
        var self = this;
        this.api = api;

        api.getImages().then(function(images) {
            self.images = images;
        });
    }

    ImageListCtrl.prototype.addImage = function() {
        this.showModal = true;
    };

    ImageListCtrl.prototype.uploadNewImage = function(image) {
        var self = this;
        this.api.createImage(image).then(function(createdImage) {
            self.images.unshift(createdImage);
        });
    };
})();
