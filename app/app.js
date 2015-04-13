(function () {

	var app = angular.module('winesApp', ['ngRoute', 'ngDialog']);
    
    app.config (function($routeProvider) {
        $routeProvider
            .when('/', {
                  controller: 'WinesController',
                  templateUrl: 'app/views/wines.html'
             })
             .when('/details/:wineId', {
                  controller: 'DetailsController',
                  templateUrl: 'app/views/details.html'
             })
            .otherwise( { redirectTo: '/' });
    });

}());