(function() {
    angular.module('imageShare').controller('ImageListCtrl', function($scope, api) {
        api.getImages().then(function(images) {
            $scope.images = images;
        });
        
        $scope.addImage = function() {
            $scope.showModal = true;
        };
        
        $scope.uploadNewImage = function(image) {
            api.createImage(image).then(function(createdImage) {
                $scope.images.unshift(createdImage);
            });
        };
    });
})();
