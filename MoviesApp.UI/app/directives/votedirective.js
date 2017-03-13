app.directive('voteDirective', function () {
    return {
        restrict: 'E',
        scope: {
            color1: '=',
            updateFn: '&'
        },
        // object is passed while making the call
        templateUrl: "views/votedirective.html",
        replace: true,
        link: function (scope, elm, attrs) {

        }
}
});