(function () {

	var DetailsController = function ($scope, $log, $routeParams, winesFactory) {
        var wineId = $routeParams.wineId;
        $scope.wine = null;
        
        function init () {
            winesFactory.getWine(wineId)
                .success(function(wine) {
                         $scope.wine = wine;
                         })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
            });   
        }
        
        init();          
	};

	angular.module('winesApp')
		.controller('DetailsController', DetailsController);

}());