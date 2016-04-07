import ApiService from "../../services/apiService";
import {Component} from "angular2/core";
import {adapter} from "../../adapter";

@Component({
    templateUrl: 'src/components/imageList/imageList.html',
    selector: 'image-list',
    directives: [adapter.upgradeNg1Component('imageEditorModal')]
})
export class ImageList {
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