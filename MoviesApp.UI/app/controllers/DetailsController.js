//http://stackoverflow.com/questions/12111936/angularjs-performs-an-options-http-request-for-a-cross-origin-resource
(function () {
    app = angular.module("moviesApp");

    var DetailsController = function ($stateParams, details,comments, commentsArray) {
        //vm == $Scope
        var vm = this;
        vm.Id = $stateParams.movieId;
        console.log(vm.Id);

        vm.commentsArray = commentsArray;

        var newComment = {
            Name:'',
            Email:'',
            Comment:''
        };

        vm.newComment = newComment;

        vm.SaveComment = function (newComment) {
            newComment.MovieId = vm.Id;
            comments.addComment(newComment);
            //Have to check response here before pushing to array
            vm.commentsArray.push(newComment);
        };

        vm.vote = function (rating) {
            vm.movie.Rating = rating;
            details.updateMovie(vm.Id, vm.movie);
        };

      
        var onMovieCompelete = function (data) {
            console.log(data);
            vm.movie = data;

        };
        var onError = function (response) {
            console.log(response);
            vm.error = "Could not get service";
        };

        details.getMovie(vm.Id).then(onMovieCompelete, onError);

    };
    app.controller("DetailsController", DetailsController);

}());