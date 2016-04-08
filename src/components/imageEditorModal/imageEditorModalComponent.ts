import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
    selector: 'image-editor-modal'
})
export class ImageEditorModal {
    image = {url: '', description: ''};
    @Input() show: boolean;
    @Output() onSubmit = new EventEmitter();


    submit() {
        this.onSubmit.emit(this.image);
        this.image = null;
        this.show = false;
    }

    cancel() {
        this.image = null;
        this.show = false;
    }
}
