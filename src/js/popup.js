var app = angular.module('extension', ['ngClipboard']);
app.controller('extensionCtrl', ['$scope', 'ngClipboard', function($scope, ngClipboard) {
  $scope.direction = true;
  $scope.updateOutput = function() {
    if ($scope.text == undefined || $scope.text.length == 0)
      $scope.output = undefined;
    else
      $scope.output = $scope.direction ? window.atob($scope.text) : window.btoa($scope.text);
  };
  $scope.toClipboard = function(param) {
    if (param == undefined || param.length == 0)
      Materialize.toast('Empty field not copied.', 2000);
    else
      Materialize.toast(ngClipboard.toClipboard(param) ? 'Result copied to clipboard.' :
        'Unexpected error, please roll over and die.', 2000);


  };
}]);
