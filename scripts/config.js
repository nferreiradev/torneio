/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.sample', {
            url: "/sample",
            templateUrl: "views/sample.html",
            data: { pageTitle: 'Sample view' }
        })
        .state('index.sample2', {
            url: "/sample2",
            templateUrl: "views/sample2.html",
            data: { pageTitle: 'Sample2 view' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.torneio', {
            url: "/torneio",
            templateUrl: "views/torneio.html",
            data: { pageTitle: 'Torneio' }
        })
      
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });