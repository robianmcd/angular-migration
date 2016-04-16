(function () {
    angular.module('imageShare').component('imageEditorModal', {
        templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
        bindings: {
            show: '=',
            onSubmit: '&'
        },
        controller: ImageEditorModalComponent
    });

    function ImageEditorModalComponent() {

    }

    ImageEditorModalComponent.prototype.close = function() {
        this.show = false;
        this.url = '';
        this.description = '';
    };

    ImageEditorModalComponent.prototype.submit = function() {
        this.onSubmit({$image: {url: this.url, description: this.description}});
        this.close();
    };

})();