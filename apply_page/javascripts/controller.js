'use strict';

angular.module('feaPayment.controllers',['socialNetworkApi'])
.controller('paymentCtrl',['$scope', '$q', 'facebookApi', function($scope, $q, facebookApi) {

  //payment API
  $scope.creditCardApi = 'http://fea.tw/credit';
  $scope.atmApi = 'http://fea.tw/atm';

  //payment default
  $scope.bankCode = ['TAISHIN', 'HUANAN', 'ESUN', 'FUBON', 'BOT', 'CHINATRUST', 'FIRST'];
  $scope.price =[600, 900, 1200];

  var appId = '329424167209772';
  var deferred = $q.defer();

  facebookApi.initFbApi(appId);

  $scope.fbLogin = function() {
    facebookApi.getMe();
  };

  $scope.setTicketType = function(type) {
    if(type >= 0 && type < price.length) {
      $scope.priceSelected = price[type];
    }
  };

}]);