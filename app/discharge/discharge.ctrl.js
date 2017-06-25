(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('DischargeController', ['FormService', '$timeout', DischargeController]);

  function DischargeController(FormService, $timeout) {
    var vm = this;
    var conditions = {
      "COPD": [
        "step 1 for COPD",
        "step 2 for COPD",
        "step 3 for COPD"
      ],

      "CHF": [
        "step 1 for CHF",
        "step 2 for CHF",
        "step 3 for CHF"
      ],

      "Diabetes": [
        "step 1 for Diabetes",
        "step 2 for Diabetes",
        "step 3 for Diabetes"
      ],

      "postSurgery": [
        "step 1 for postSurgery",
        "step 2 for postSurgery",
        "step 3 for postSurgery"
      ]
    }
    var dx = ['ALL', "COPD", 'CHF', 'Diabetes', 'Post Surgery'];

    vm.diagnosis = dx;
    vm.form = {};
    vm.checkAllFunc = checkAllFunc;

    vm.form.days = {
      "sunday": false,
      "monday": false,
      "tuesday": false,
      "wednesday": false,
      "thursday": false,
      "friday": false
    }

    function checkAllFunc() {
      console.log('Function running')
      for (var i = 0; i < vm.form.days.length; i++) {
        if (vm.checkAll) {
          vm.form.days[i] = true;
        } else {
          day = false;
        }
      }
    }

    vm.showModel = showModel;
    vm.selected = vm.diagnosis[0];
    vm.submitForm = submitForm;
    vm.submitting = false;
    vm.instructions = getInstructions;
    vm.form.textMessage = '';
    vm.form.phoneNumber = '+17329102907';
    vm.maxlengthError = vm.form.textMessage.length > 300 ? true : false;

    function showModel() {
      console.log('MODEL', vm.selected);
      console.log('TEXT', vm.form.textMessage)
    }

    function submitForm() {
      vm.submitting = true;
      $timeout(function () {
        FormService.submitForm(vm.form)
          .then(submitSuccess)
          .catch(submitError)
      }, 1000)

    }

    function submitSuccess(response) {
      vm.submitting = false;
      vm.form = {
        phoneNumber: '+17329102907'
      };
      console.log('Submit success', respone);
    }

    function submitError(error) {
      vm.submitting = false;
      console.log('Error submitting info', error)
    }

    function getInstructions() {
      FormService.getInstructions(vm.form)
        .then(instructionsSuccess)
        .catch(instructionsError)
      console.log('This is not working')
      console.log('FORM DATA', vm.form)
    }

    function instructionsSuccess(response) {
      console.log('SUBMIT RESPONSE', response);
      vm.form.textMessage = response.data.instructions[0];
    }

    function instructionsError(error) {
      console.log('SUBMIT ERROR', error)
    }

    getDx();

    function getDx() {
      FormService.getDx()
        .then(getDxSuccess)
        .catch(getDxError)
    }

    function getDxSuccess(response) {
      console.log('CONTROLLER', response.data)
    }

    function getDxError(error) {
      console.log('CONTROLLER ERROR', error)
    }

  }
})();