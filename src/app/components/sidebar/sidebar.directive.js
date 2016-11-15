(function() {
  'use strict';

  angular
    .module('readbooks')
    .directive('sideBar', acmeSidebar);

  /** @ngInject */
  function acmeSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: SidebarController,
      controllerAs: 'side',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController() {
    }
  }

})();
