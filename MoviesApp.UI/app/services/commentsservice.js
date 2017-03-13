(function () {
    var comments = function ($resource, API) {
        var getComments = function (movieId) {
            return $resource(API.getCommentsApiResourceURL(), {
                'query': { method: 'GET', isArray: true },
            })
            .query({ id: movieId })
            .$promise
            .then(function (response) {
                console.log(response);
                return response;
            });
        };

        var addComment = function (comment) {
            return $resource(API.getCommentsApiResourceURL(), null, {
                'addcomment': { method: 'POST' }
            })
            .addcomment(comment)
            .$promise
            .then(function (response) {
                console/log("Add Comment")
                console.log(response);
                return response;
            });
        };


        return {
            getComments: getComments,
            addComment: addComment
        }

    };

    app.factory("comments", comments);
}());