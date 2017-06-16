app.controller('prodAppCtrl',
function prodAppCtrl($scope) {
  $scope.products = [
    {
      name: 'Some Product',
      price: 1.99,
      icon: 'img/prod1.jpg'
    },
    {
      name: 'Low Product',
      price: 2.99,
      icon: 'img/prod2.jpg'
    },
    {
      name: 'Mid Product',
      price: 4.99,
      icon: 'img/prod6.jpg'
    },
    {
      name: 'Another Product',
      price: 7.99,
      icon: 'img/prod7.jpg'
    },
    {
      name: 'Top Product',
      price: 9.99,
      icon: 'img/prod3.jpg'
    },
    {
      name: 'Premium Product',
      price: 19.99,
      icon: 'img/prod4.jpg'
    },
    {
      name: 'Deluxe Product',
      price: 29.99,
      icon: 'img/prod5.jpg'
    }
  ];
});
