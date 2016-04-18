(function () {

    class ImageEditorModalComponent {
        show = false;
        url;
        description;
        //(args: {$image: Image}) => void
        onSubmit;

        close() {
            this.show = 'false';
            this.url = '';
            this.description = '';
        };

        submit() {
            this.onSubmit({$image: {url: this.url.toLwoerCase(), text: this.description}});
            this.close();
        };
    }


    angular.module('imageShare').component('imageEditorModal', {
        templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
        scope: {
            show: '=',
            onSubmit: '&'
        },
        controller: ImageEditorModalComponent
    });

})();