(function(){
    angular.module('imageShare').directive('imageEditorModal', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
            link: function(scope) {

                scope.close = function () {
                    scope.showModal = false;
                    scope.url = '';
                    scope.description = '';
                };

                scope.submit = function() {
                    scope.uploadNewImage({url: scope.url, description: scope.description});
                    scope.close();
                };
            }
        };
    });

})();