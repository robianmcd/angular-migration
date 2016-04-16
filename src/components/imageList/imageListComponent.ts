(function() {
    angular.module('imageShare').component('imageList', {
        templateUrl: 'src/components/imageList/imageList.html',
        controller: ImageListComponent
    });

    function ImageListComponent(api) {
        var self = this;
        this.api = api;

        api.getImages().then(function(images) {
            self.images = images;
        });
    }

    ImageListComponent.prototype.addImage = function() {
        this.showModal = true;
    };

    ImageListComponent.prototype.uploadNewImage = function(image) {
        var self = this;
        this.api.createImage(image).then(function(createdImage) {
            self.images.unshift(createdImage);
        });
    };
})();
