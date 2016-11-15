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
    function TabsContoller() {
      var vm = this;
      vm.active = 0;

      vm.iterateActive = function(toNum){
        vm.active=toNum;
      }
    }
  }

})();
