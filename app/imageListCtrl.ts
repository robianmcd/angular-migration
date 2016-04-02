import ApiService from "./apiService";

export default class ImageListCtrl {
    api: ApiService;
    images: any[];
    showModal: boolean;
    
    constructor(api) {
        var self = this;
        this.api = api;
        api.getImages().then(function (images) {
            self.images = images;
        });
    }

    addImage() {
        this.showModal = true;
    }
    
    uploadNewImage(image) {
        var self = this;

        this.api.createImage(image).then(function(createdImage) {
            self.images.unshift(createdImage);
        });
    }
}