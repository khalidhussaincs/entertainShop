/**
 * Created by HP on 12/30/2015.
 */
angular.module("entertainShop")
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/login.html'
                    //controller: 'AddOrderController'
                })
                .when('/dashboard', {
                    templateUrl: 'views/dashbaord.html',
                    controller: 'dashboardCtrl'
                })

                .when('/leptop', {
                    templateUrl: 'views/leptop.html',
                    controller: 'leptopCtrl'
                })

                .otherwise({
                    redirectTo: '/'
                });
        }]);