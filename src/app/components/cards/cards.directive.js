(function() {
  'use strict';

  angular
    .module('readbooks')
    .directive('bookCards', acmeCards);

  /** @ngInject */
  function acmeCards() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/cards/cards.html',
      controller: CardsController,
      controllerAs: 'cards',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CardsController(ProgressBarService,CardsService, $scope) {
      var vm = this;
      vm.genre = CardsService.getGenre();
      vm.render = CardsService.fetch();
      $scope.$on('handleBroadcast', function() {
        vm.genre = CardsService.getGenre();
      });

      vm.genreChange = function(toNum){
        CardsService.pushtoTabs(toNum);
      }
      ProgressBarService.stop();
    }
  }

})();
