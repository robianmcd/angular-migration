 
export default {
    templateUrl: 'app/imageEditorModal.html',
    controller: ImageEditorModalCtrl,
    bindings: {
        show: '=',
        onSubmit: '&'
    }
};

class ImageEditorModalCtrl {
    image:string;
    show:boolean;
    onSubmit:(args: {$image: string}) => void;


    submit(valid) {
        if (valid) {
            this.onSubmit({$image: this.image});
            this.image = null;
            this.show = false;
        }
    }

    cancel() {
        this.image = null;
        this.show = false;
    }

}