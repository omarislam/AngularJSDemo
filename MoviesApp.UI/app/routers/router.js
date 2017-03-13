app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .state('details', {
            url: '/details/:movieId',
            templateUrl: 'views/details.html',
            controller: 'DetailsController',
            controllerAs:'vm',
            resolve: {
                commentsArray: function ($stateParams, comments) {
                    var com = comments.getComments($stateParams.movieId);
                    console.log("here" + com);
                    return com;
                }
            }
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })


    .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'views/about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller
            'columnTwo@about': {
                templateUrl: 'views/table-data.html',
                controller: 'AboutController'
            }
        }

    });

});