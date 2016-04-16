import ApiService from "../../services/apiService";
import {Component} from "angular2/core";
import {ImageEditorModalComponent} from "../imageEditorModal/imageEditorModalComponent";

@Component({
    templateUrl: 'src/components/imageList/imageList.html',
    selector: 'image-list',
    directives: [ImageEditorModalComponent]
})
export class ImageListComponent {
    images: Image[];
    showModal: boolean;

    constructor(private api: ApiService) {
        api.getImages().subscribe((images) => {
            this.images = images;
        });
    }

    addImage() {
        this.showModal = true;
    };

    uploadNewImage(image) {
        this.api.createImage(image).subscribe((createdImage) => {
            this.images.unshift(createdImage);
        });
    };
}