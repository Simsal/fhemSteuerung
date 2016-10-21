angular.module('starter.controllers', [])

.controller('WonzimmerController', function($scope, FhemData) {

  $scope.status = {};

  $scope.status.wz_stkd_fernseher = false;

  $scope.status.wz_stkd_router = false;

  $scope.status.wz_fensterkontakt_links = false;

  $scope.status.wz_fensterkontakt_rechts = false;

  $scope.$on('$ionicView.enter', function(e) {
    FhemData.getStatus('WZ_Stkd_Fernseher').then(function(response) {
      if (response.localeCompare("on") == '0') {
        $scope.status.wz_stkd_fernseher = true;
      }
    })

    FhemData.getStatus('WZ_Stkd_Router').then(function(response) {
      if (response.localeCompare("on") == '0') {
        $scope.status.wz_stkd_router = true;
      }
    })

    FhemData.getStatus('WZ_Fensterkontakt_links').then(function(response) {
      if (response.localeCompare("Open") == '0') {
        $scope.status.wz_fensterkontakt_links = true;
      }
    })

    FhemData.getStatus('WZ_Fensterkontakt_rechts').then(function(response) {

      if (response.localeCompare("Open") == '0') {
        $scope.status.wz_fensterkontakt_rechts = true;
      }
    })
  });

  $scope.toggleSocket = function(deviceName, newStatus) {

    var status = '';
    if (newStatus) {
      status = 'on';
    } else {
      status = 'off';
    }
    FhemData.changeStatus(deviceName, status).then(function(response) {
      //do something with response

      _this.data = response.data;
    }).catch(function(response) {
      //handle the error
    });
  }

})

.controller('SchlafzimmerController', function($scope, FhemData) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.status = {};

  $scope.status.sz_fensterkontakt = false;

  $scope.status.bz_fensterkontakt = false;

  $scope.$on('$ionicView.enter', function(e) {

    FhemData.getStatus('SZ_Fensterkontakt').then(function(response) {
      if (response.localeCompare("Open") == '0') {
        $scope.status.sz_fensterkontakt = true;
      }
    })

    FhemData.getStatus('BZ_Fensterkontakt').then(function(response) {
      if (response.localeCompare("Open") == '0') {
        $scope.status.bz_fensterkontakt = true;
      }
    })
  });

})

.controller('HomeStatusController', function($scope, FhemData) {
  $scope.homeStatus = '';

  $scope.$on('$ionicView.enter', function(e) {

    FhemData.getStatus('HomeStatus').then(function(response) {
      $scope.homeStatus = response;
    })
  });

  $scope.changeHomeStatus = function(value) {
    console.log(value);
    FhemData.changeHomeStatus(value).then(function(response) {
      //do something with response

      _this.data = response.data;
    }).catch(function(response) {
      //handle the error
    });
  }
})

.controller('ArbeitszimmerController', function($scope, FhemData) {

  $scope.status = {};
  $scope.status.az_stkd_pc_simon = false;
  $scope.status.az_fensterkontakt = false;

  $scope.$on('$ionicView.enter', function(e) {
    FhemData.getStatus('AZ_Stkd_PC_Simon').then(function(response) {
      if (response.localeCompare("on") == '0') {
        $scope.status.az_stkd_pc_simon = true;
      }
    })

    FhemData.getStatus('AZ_Fensterkontakt').then(function(response) {
      if (response.localeCompare("Open") == '0') {
        $scope.status.az_fensterkontakt = true;
      }
    })
  });
  $scope.toggleSocket = function(deviceName, newStatus) {

    var status = '';
    if (newStatus) {
      status = 'on';
    } else {
      status = 'off';
    }
    FhemData.changeStatus(deviceName, status).then(function(response) {
      //do something with response

      _this.data = response.data;
    }).catch(function(response) {
      //handle the error
    });
  }
});
