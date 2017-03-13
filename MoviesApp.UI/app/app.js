
//Using normal angular routing and ng-view
//var app = angular.module("moviesApp", ["ngRoute"]);

//    app.config(function ($routeProvider) {

//        $routeProvider
//        .when("/", {
//            templateUrl: "/views/main.html",
//            controller: "MainController"
//        }).when("/main", {
//            templateUrl: "/views/main.html",
//            controller: "MainController"
//        })
//        .otherwise({
//            redirectTo: "/main"
//        });
//    });



var app = angular.module("moviesApp", ['ngResource','ui.router']);
