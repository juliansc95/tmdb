define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var MovieDetailTwoController = function($scope, TMDBAPIService, $routeParams ) {


            $scope.view   = {
                details: {},
                url: '',
            };

            var api = TMDBAPIService.Movie();
            api.movie.movie($routeParams.id).then( function ( response ) {
                $scope.view.details = response.data;
                $scope.view.url = 'https://www.youtube.com/embed/'+ response.data.videos.results[0].key;
                console.log($scope.view.url);
            });

        };

        MovieDetailTwoController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return MovieDetailTwoController;
    }
);