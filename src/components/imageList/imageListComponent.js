System.register(["../../services/apiService", "angular2/core", "../../adapter"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var apiService_1, core_1, adapter_1;
    var ImageList;
    return {
        setters:[
            function (apiService_1_1) {
                apiService_1 = apiService_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (adapter_1_1) {
                adapter_1 = adapter_1_1;
            }],
        execute: function() {
            ImageList = (function () {
                function ImageList(api, cd) {
                    var _this = this;
                    this.api = api;
                    this.cd = cd;
                    api.getImages().subscribe(function (images) {
                        _this.images = images;
                    });
                }
                ImageList.prototype.addImage = function () {
                    this.showModal = true;
                };
                ImageList.prototype.uploadNewImage = function (event) {
                    var _this = this;
                    this.api.createImage(event.$image).subscribe(function (createdImage) {
                        _this.images.unshift(createdImage);
                        _this.cd.detectChanges();
                    });
                };
                ImageList = __decorate([
                    core_1.Component({
                        templateUrl: 'src/components/imageList/imageList.html',
                        selector: 'image-list',
                        directives: [adapter_1.adapter.upgradeNg1Component('imageEditorModal')]
                    }), 
                    __metadata('design:paramtypes', [apiService_1.default, core_1.ChangeDetectorRef])
                ], ImageList);
                return ImageList;
            }());
            exports_1("ImageList", ImageList);
        }
    }
});
