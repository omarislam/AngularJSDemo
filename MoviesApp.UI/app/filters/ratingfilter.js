app.filter('ratings', function () {

    return function (rating) {
        switch (rating) {
            case 1: return "images/rating1.png";
            case 5: return "images/rating.png";

        }
    };

});;