(function () {

    class ImageEditorModalComponent {
        show: boolean = false;
        url: string;
        description: string;
        onSubmit: (args: {$image: Image}) => void;
        
        close() {
            this.show = false;
            this.url = '';
            this.description = '';
        };
    
        submit() {
            this.onSubmit({$image: {url: this.url, description: this.description}});
            this.close();
        };
    }

    
    angular.module('imageShare').component('imageEditorModal', {
        templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
        bindings: {
            show: '=',
            onSubmit: '&'
        },
        controller: ImageEditorModalComponent
    });

})();