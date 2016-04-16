import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
    selector: 'image-editor-modal'
})
export class ImageEditorModalComponent {
    url: string;
    description: string;
    
    @Input() show: boolean;
    @Output() showChange = new EventEmitter();
    @Output() onSubmit = new EventEmitter();

    close() {
        this.showChange.emit(false);
        this.url = '';
        this.description = '';
    };

    submit() {
        this.onSubmit.emit({url: this.url, description: this.description});
        this.close();
    };
}