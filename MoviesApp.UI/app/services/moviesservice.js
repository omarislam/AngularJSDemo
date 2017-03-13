(function () {
    var movies = function ($http,API) {
        var getAllMovies = function () {
            return $http.get(API.getMoviesApiURL())
            .then(function (response) {
                return response.data;
            });
        };

      
        return {
            getAllMovies: getAllMovies,
        }

    };

    app.factory("movies", movies);
}());