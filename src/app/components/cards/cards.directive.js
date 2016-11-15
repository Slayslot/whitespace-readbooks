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
    function CardsController() {
    }
  }

})();
