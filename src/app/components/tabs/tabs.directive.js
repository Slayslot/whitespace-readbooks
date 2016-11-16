(function() {
  'use strict';

  angular
    .module('readbooks')
    .directive('genreTabs', acmeTabs);

  /** @ngInject */
  function acmeTabs() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/tabs/tabs.html',
      controller: TabsContoller,
      controllerAs: 'tabs',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TabsContoller(CardsService, $scope) {
      var vm = this;
      vm.active = CardsService.getNum();

      $scope.$on('handleChange', function() {
        vm.active = CardsService.getNum();
      });

      vm.iterateActive = function(toNum, genre){
        vm.active=toNum;
        CardsService.pushtoCards(genre);
      }
    }
  }

})();
