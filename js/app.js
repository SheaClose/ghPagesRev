angular
  .module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    /* Set home route */
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: `../views/home.html`,
        controller: 'mainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: `../views/about.html`,
        controller: 'secondaryCtrl'
      });
  });
