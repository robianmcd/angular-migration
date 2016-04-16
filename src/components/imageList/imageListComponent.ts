import ApiService from "../../services/apiService";
class ImageListComponent {
    images: Image[];
    showModal: boolean;

    constructor(private api: ApiService) {
        api.getImages().then((images) => {
            this.images = images;
        });
    }

    addImage() {
        this.showModal = true;
    };

    uploadNewImage(image) {
        this.api.createImage(image).then((createdImage) => {
            this.images.unshift(createdImage);
        });
    };
}

const imageListOptions = {
    templateUrl: 'src/components/imageList/imageList.html',
    controller: ImageListComponent
};

export {ImageListComponent, imageListOptions}
