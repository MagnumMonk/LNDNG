var prodApp = angular.module('prodApp', []);

prodApp.controller('ProdAppCtrl',
 function ProdAppCtrl($scope) {
  $scope.friendslist = [
    {
      name:'loser',
      age: 6
   },
   {
     name:'loser',
     age: 6
  }
  ];

});
