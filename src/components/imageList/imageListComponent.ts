import ApiService from "../../services/apiService";

class ImageListCtrl {
    images: string[];
    showModal: boolean;
    
    constructor(private api: ApiService) {
        api.getImages().subscribe((images) => {
            this.images = images;
        });
    }

    addImage() {
        this.showModal = true;
    }
    
    uploadNewImage(image) {
        this.api.createImage(image).subscribe(createdImage => {
            this.images.unshift(createdImage);
        });
    }
}

export default {
    templateUrl: 'src/components/imageList/imageList.html',
    controller: ImageListCtrl
};