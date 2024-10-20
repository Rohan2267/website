var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home.html"
    })
    .when("/about", {
        templateUrl: "about.html"
    })
    .when("/portfolio", {
        templateUrl: "portfolio.html"
    })
    .when("/contact", {
        templateUrl: "contact.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});






