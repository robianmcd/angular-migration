import ApiService from "../../services/apiService";
import {Component, ChangeDetectorRef} from "angular2/core";
import {adapter} from "../../adapter";

@Component({
    templateUrl: 'src/components/imageList/imageList.html',
    selector: 'image-list',
    directives: [adapter.upgradeNg1Component('imageEditorModal')]
})
export class ImageList {
    images: string[];
    showModal: boolean;

    constructor(private api: ApiService, private cd: ChangeDetectorRef) {
        api.getImages().subscribe((images) => {
            this.images = images;
        });
    }

    addImage() {
        this.showModal = true;
    }

    uploadNewImage(event) {
        this.api.createImage(event.$image).subscribe(createdImage => {
            this.images.unshift(createdImage);
            this.cd.detectChanges();
        });
    }
}