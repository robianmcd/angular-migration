(function(){
    angular.module('imageShare').directive('imageEditorModal', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/components/imageEditorModal/imageEditorModal.html',
            scope: {
                show: '=',
                onSubmit: '&'
            },
            link: function(scope) {

                scope.close = function () {
                    scope.show = false;
                    scope.url = '';
                    scope.description = '';
                };

                scope.submit = function() {
                    scope.onSubmit({$image: {url: scope.url, description: scope.description}});
                    scope.close();
                };
            }
        };
    });

})();