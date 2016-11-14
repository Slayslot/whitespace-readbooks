(function() {
  'use strict';

  angular
    .module('readbooks')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.info("Not your best moment peeking into others code, eh?");
  }

})();
