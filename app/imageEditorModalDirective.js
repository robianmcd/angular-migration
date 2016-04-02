System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ImageEditorModalCtrl;
    return {
        setters:[],
        execute: function() {
            exports_1("default",{
                templateUrl: 'app/imageEditorModal.html',
                controller: ImageEditorModalCtrl,
                bindings: {
                    show: '=',
                    onSubmit: '&'
                }
            });
            ImageEditorModalCtrl = (function () {
                function ImageEditorModalCtrl() {
                }
                ImageEditorModalCtrl.prototype.submit = function (valid) {
                    if (valid) {
                        this.onSubmit({ $image: this.image });
                        this.image = null;
                        this.show = false;
                    }
                };
                ImageEditorModalCtrl.prototype.cancel = function () {
                    this.image = null;
                    this.show = false;
                };
                return ImageEditorModalCtrl;
            }());
        }
    }
});
