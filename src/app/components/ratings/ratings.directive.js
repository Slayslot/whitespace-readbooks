(function() {
  'use strict';

  angular
    .module('readbooks')
    .directive('bookRating', acmeRatings);

  /** @ngInject */
  function acmeRatings() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/ratings/ratings.html',
      controller: RatingsController,
      controllerAs: 'ratings',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function RatingsController() {
    }
  }

})();
