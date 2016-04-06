class ImageEditorModalCtrl {
    image:string;
    show:boolean;
    onSubmit:(args: {$image: string}) => void;


    submit() {
        this.onSubmit({$image: this.image});
        this.image = null;
        this.show = false;
    }

    cancel() {
        this.image = null;
        this.show = false;
    }
}

export default {
    templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
    controller: ImageEditorModalCtrl,
    bindings: {
        show: '=',
        onSubmit: '&'
    }
};