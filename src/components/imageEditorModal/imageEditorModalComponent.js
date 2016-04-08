System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ImageEditorModalCtrl;
    return {
        setters:[],
        execute: function() {
            ImageEditorModalCtrl = (function () {
                function ImageEditorModalCtrl() {
                }
                ImageEditorModalCtrl.prototype.submit = function () {
                    this.onSubmit({ $image: this.image });
                    this.image = null;
                    this.show = false;
                };
                ImageEditorModalCtrl.prototype.cancel = function () {
                    this.image = null;
                    this.show = false;
                };
                return ImageEditorModalCtrl;
            }());
            exports_1("default",{
                templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
                controller: ImageEditorModalCtrl,
                bindings: {
                    show: '=',
                    onSubmit: '&'
                }
            });
        }
    }
});
