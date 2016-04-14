(function(){
    angular.module('imageShare').directive('imageEditorModal', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
            scope: {
                show: '=',
                onSubmit: '&'
            },
            controller: ImageEditorModalCtrl,
            controllerAs: '$ctrl',
            bindToController: true
        };
    });

    function ImageEditorModalCtrl() {

    }

    ImageEditorModalCtrl.prototype.close = function() {
        this.show = false;
        this.url = '';
        this.description = '';
    };

    ImageEditorModalCtrl.prototype.submit = function() {
        this.onSubmit({$image: {url: this.url, description: this.description}});
        this.close();
    };

})();