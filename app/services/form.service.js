(function () {
  'use strict';

  angular
    .module('myApp')
    .factory('FormService', ['$http', FormService]);
  var formInfo = {};
  var textInfo = {};

  function FormService($http) {
    var formService = {
      getDx: getDx,
      submitForm: submitForm,
      getInstructions: getInstructions,
    };

    return formService;

    ////////////////
    function getDx() {
      return $http.get('https://contextual-a2h2.herokuapp.com/test')
        .then(getDxSuccess)
    }

    function getDxSuccess(response) {
      return response;
    }

    function getInstructions(formInfo) {
      formInfo = {
        "id": formInfo.id,
        "firstName": formInfo.firstName,
        "lastName": formInfo.lastName,
        "birthDate": formInfo.birthDate,
        "startDate": formInfo.startDate,
        "endDate": formInfo.endDate,
        "diagnosis": formInfo.diagnosis
      }

      return $http.post('https://contextual-a2h2.herokuapp.com/submit_API', formInfo)
        .then(instructionsSuccess)
    }

    function instructionsSuccess(response) {
      return response;
    }

    function submitForm(textInfo) {
      textInfo = {
        "id": textInfo.id,
        "phoneNumber": textInfo.phoneNumber,
        "textMessage": textInfo.textMessage
      }

      return $http.post('https://contextual-a2h2.herokuapp.com/message_API', textInfo)
        .then(submitSuccess)
    }

    function submitSuccess(response) {
      return response;
    }

  }
})();


