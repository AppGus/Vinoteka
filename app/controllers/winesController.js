(function () {
    

	var WinesController = function ($scope, $log, $window, $rootScope, ngDialog, winesFactory) {
		$scope.sortBy = 'winery';
		$scope.reverse = false;
        $scope.wines = [];
    
        $rootScope.winery = '';
        $rootScope.grape = '';
        

        
        function init () {
            winesFactory.getWines()
                .success(function(wines) {
                         $scope.wines = wines;
                         })
                .error(function(data, status, headers, config) {
            //handle error
            })   
        }
        
        init();

		$scope.doSort = function (propName) {
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
        
        $scope.openDefault = function () {
            ngDialog.open({ 
                template: 'app/views/ngDialog.html',
                controller: 'InsideCtrl',
                className: 'ngdialog-theme-default'
            });
        };
        
        $scope.deleteWine = function(wineId) {
            winesFactory.deleteWine(wineId)
                .success(function(status) {
                    if (status) {
                        for (var i=0, len=$scope.wines.length; i<len; i++) {
                            if ($scope.wines[i].id === wineId) {
                                $scope.wines.splice(i,1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete wine');
                    }
                })
                .error(function(data, status, header, config) {  
                    $log.log(data.error + '' + status)
            });
        }

        
/*     
        $rootScope.$on('ngDialog.opened', function (e, $dialog) {
            console.log('ngDialog opened: ' + $dialog.attr('id'));
        });

        $rootScope.$on('ngDialog.closed', function (e, $dialog) {
            console.log('ngDialog closed: ' + $dialog.attr('id'));
        });
*/
        $rootScope.$on('ngDialog.closing', function (e, $dialog) {
            console.log('ngDialog closing: ' + $dialog.attr('id'));
            winesFactory.getWines()
            .success(function(wines) {
                     $scope.wines = wines;
                     })
            .error(function(data, status, headers, config) {
        //handle error
        })   
        });

	};


    angular.module('winesApp')
		.controller('WinesController', WinesController);
    
}());