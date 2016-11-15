(function() {
  'use strict';

  angular
    .module('readbooks')
    .directive('mainNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($log) {
      var vm = this;
      vm.menuopen = false;

      vm.menuClick = function(){
        if(vm.menuopen){
          vm.menuopen = false;
        }else{
          vm.menuopen = true;
        }
        $log.info(vm.menuopen);
      }
    }
  }

})();
