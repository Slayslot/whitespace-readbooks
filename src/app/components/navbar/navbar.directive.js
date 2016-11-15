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
    function NavbarController($document,AnimateService) {
      var vm = this;
      vm.menuopen = false;

      vm.menuClick = function(){
        var navBar = angular.element($document[0].querySelector('.navbar'));
        if(vm.menuopen){
          vm.menuopen = false;
          navBar.removeClass('fixthis');
        }else{
          vm.menuopen = true;
          navBar.addClass('fixthis');
        }
      }

      vm.sideOpen = function(){
        var sideBar = angular.element($document[0].querySelector('.side-nav'));
        sideBar.removeClass('close');
        AnimateService.animateCss('slideInRight','.side-nav');
        sideBar.addClass('open');
      }
    }
  }

})();
