(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter){
    $scope.lunchItems = '';

    $scope.checkIfTooMuch = function(){
      var lunchItems = $scope.lunchItems;

      if (!lunchItems) {
        $scope.message = "Please enter data first!";
        $scope.msg_ok = false;
      }
      else {
        var thing = lunchItems.split(',');
        var ruth = thing.length;
        var lunchRefined = [];

        //To filter empty entries
        for(var i=0; i<ruth; i++){
          if(thing[i] == "" || thing[i] == " "){
            //do nothing
          }
          else {
            lunchRefined.push(thing[i]);
          }
        }

        var noOfItems = lunchRefined.length;
        if (noOfItems > 3) {
          $scope.message = "Too much!";
          $scope.msg_ok = true;
        }
        else if (noOfItems <= 0) {
          $scope.message = "Please enter data first!";
          $scope.msg_ok = false;
        }
        else {
          $scope.message = "Enjoy!";
          $scope.msg_ok = true;
        }
      }
    }

  }

})();
