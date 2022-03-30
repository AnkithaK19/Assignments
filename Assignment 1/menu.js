(function (){
  'use strict';
  angular.module('lunchmenu',[])
  .controller('lunchitemsmenu',lunchitemsmenu);
  lunchitemsmenu.$inject=['$scope'];
  function lunchitemsmenu($scope)
  {
    $scope.menu="";
    $scope.check_too_much = function () {
      var dish = $scope.menu.split(',');
      if ($scope.menu == "")
      {
        $scope.messages = "PLEASE ENTER THE DATA";
      }
      else
      {
        $scope.messages = dish.length <= 3 ? "ENJOY!" : "TOO MUCH!";
      }
    };
  };
})();
