(function() {
   
    var winesFactory = function ($http) {
    
        var factory = [];
        
        factory.getWines = function () {
            return $http.get('/wines');
        };
            
        factory.getWine = function(wineId) {
            return $http.get('/wines/' + wineId);
        };

        
        factory.deleteWine = function(wineId) {
            return $http.delete('/wines/' + wineId);
        }
        
        factory.addWine = function(newWine) {
            return $http.post('/wines/' + JSON.stringify(newWine));
        }
        
        return factory;   
    };
    
    angular.module('winesApp').factory('winesFactory', winesFactory);

}());
 