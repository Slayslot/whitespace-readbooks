(function() {
  'use strict';

  angular
    .module('readbooks')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/home');

    $stateProvider
    .state('base-home', {
      abstract: true,
      url: '',
      templateUrl: 'app/main/base.home.html'
    })
    .state('home', {
      url: '/home',
      parent: 'base-home',
      templateUrl: 'app/views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
  }

})();
