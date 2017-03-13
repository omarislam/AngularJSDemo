(function () {
    var details = function ($resource, API) {
        var getMovie = function (id) {
            return $resource(API.getMoviesApiResourceURL(), {
                //'update': { method: 'PUT' },
                //'query': { method: 'GET', isArray: true },
                'get': { method: 'GET', isArray: false },
                //'save': { method: 'POST' },
                //'remove': { method: 'DELETE' },
                //'delete': { method: 'DELETE' }
            })
            .get({ id: id })
            .$promise
            .then(function (response) {
                console.log(response);
                return response;
            });
        };


        var updateMovie = function (id,movie) {
            return $resource(API.getMoviesApiResourceURL(), null, {
                'update': { method: 'PUT' }
            })
            .update({ id: id }, movie)
            .$promise
            .then(function (response) {
                console.log(response);
                return response;
            });
        };




        return {
            getMovie: getMovie,
            updateMovie: updateMovie
        }

    };

    app.factory("details", details);
}());