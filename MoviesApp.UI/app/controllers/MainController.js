(function () {
    app = angular.module("moviesApp");

    var MainController = function ($scope, $location, movies) {

        $scope.MainTitle = "Now in the Movie DB";
        $scope.movieSortBy = "Title";
        $scope.searchQuery = "";

        var onMoviesCompelete = function (data) {
            console.log(data);

            $scope.movies = data;

        };
        var onError = function (response) {
            console.log(response);
            $scope.error = "Could not get service";
        };
        
        movies.getAllMovies().then(onMoviesCompelete, onError);

        //var movie = {
        //    Title : "Inside Out",
        //    Url: "http://arablionz.tv/wp-content/uploads/2016/11/jurassic-world-19_zpspmjvw0rb.jpg",
        //    Downloads : 100,
        //    Views : 2543
        //};

        //$scope.movie = movie;

        //var movie1 = {
        //    Title: "Inside Out",
        //    Url: "http://arablionz.tv/wp-content/uploads/2016/11/jurassic-world-19_zpspmjvw0rb.jpg",
        //    Downloads: 100,
        //    Views: 2543
        //};

        //$scope.movie1 = movie1;

        //$scope.search = function (username) {
        //    $location.path("/user/" + username);

        //};

    }
    app.controller("MainController", MainController);
}());