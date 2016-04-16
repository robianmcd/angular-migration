import ApiService from "../../services/apiService";
import {adapter} from "../../adapter";
import {Component} from "angular2/core";

@Component({
    templateUrl: 'src/components/imageList/imageList.html',
    selector: 'image-list',
    directives: [adapter.upgradeNg1Component('imageEditorModal')]
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

    uploadNewImage(event) {
        this.api.createImage(event.$image).subscribe((createdImage) => {
            this.images.unshift(createdImage);
        });
    };
}