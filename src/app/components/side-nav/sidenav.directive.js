(function() {
  'use strict';

  angular
    .module('readbooks')
    .directive('sideNav', acmeSide);

  /** @ngInject */
  function acmeSide() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/side-nav/sidenav.html',
      controller: SideController,
      controllerAs: 'sidenav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SideController($document, AnimateService) {
      var vm = this;

      vm.close = function(){
        var sideBar = angular.element($document[0].querySelector('.side-nav'));
        AnimateService.animateCss('slideOutRight','.side-nav');
        sideBar.removeClass('open');
        sideBar.addClass('close');
      }
    }
  }

})();
