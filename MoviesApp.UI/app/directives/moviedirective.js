app.directive('movieDirective', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: "views/moviedirective.html",
        scope: {
            movie: "=movie"
        }

    };

});