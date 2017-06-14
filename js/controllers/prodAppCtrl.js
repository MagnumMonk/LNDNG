app.controller('prodAppCtrl',
function prodAppCtrl($scope) {
  $scope.products = [
    {
      name: 'some product',
      price: 4.99
    },
    {
      name: 'another product',
      price: 2.99
    },
    {
      name: 'top product',
      price: 9.99
    },
    {
      name: 'deluxe product',
      price: 19.99
    },
    {
      name: 'some other product',
      price: 7.99
    }
  ];
});
