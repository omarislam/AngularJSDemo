app.factory('API', function () {
    var baseUrl = "http://localhost:22529/api/";
    var data = {
        MoviesApiURL: baseUrl+'Movies/',
        MoviesApiResourceURL: baseUrl+'Movies/:id',
        CommentsApiResourceURL: baseUrl+'Comments/:id'

    };

    return {
        getMoviesApiURL: function () {
            return data.MoviesApiURL;
        },
        getMoviesApiResourceURL: function () {
            return data.MoviesApiResourceURL;
        },
        getCommentsApiResourceURL: function () {
            return data.CommentsApiResourceURL;
        },

        
       
    };
});