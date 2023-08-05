var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when(
        '/',
        {
            templateUrl: 'src/views/home.html',
            controller: RouterControllers
        }
    )
    .when(
        '/cuser',
        {
            templateUrl: 'src/views/cuser.html',
            controller: RouterControllers
        }
    )
    .when(
        '/contact',
        {
            templateUrl: 'src/views/contact.html',
            controller: RouterControllers
        }
    )
    .when(
        '/bookingNomar/:id',
        {
            templateUrl: 'src/views/booking.html',
            controller: BookingNomarControllers,
        }
    )
    .when(
        '/bookingPro/:id',
        {
            templateUrl: 'src/views/booking.html',
            controller: BookingProControllers,
        }
    )
    .when(
        '/cuser/register',
        {
            templateUrl: 'src/views/register.html',
            controller: RouterControllers
        }
    )
   
});

myApp.run(function($rootScope, $location, $anchorScroll) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash('top');
        $anchorScroll();
    });
});

 