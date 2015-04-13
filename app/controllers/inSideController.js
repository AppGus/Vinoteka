(function () {
    
    var InsideCtrl = function ($scope, winesFactory, ngDialog) {
        
            $scope.addWine = function(newWine) {
            winesFactory.addWine(newWine)
            };     
            
    };

    angular.module('winesApp')
        .controller('InsideCtrl', InsideCtrl);

}());