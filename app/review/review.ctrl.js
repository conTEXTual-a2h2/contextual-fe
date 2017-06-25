(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('ReviewController', ['$state', ReviewController]);

  function ReviewController($state) {
    var vm = this;


    activate();

    ////////////////

    function activate() { }
  }
})();