locbean.controller('startCtrl', function($scope, $state, $rootScope, $ionicPlatform, $cordovaBeacon){

	console.log('startCtrl');

	$scope.goResult = function(){
		// $state.go('result');
		// $scope.requestAlwaysAuthorization();
		// $scope.startMonitoringForRegion();
	};


	  var brIdentifier = 'ibeacon';
	  var brUuid = '01122334-4556-6778-899a-abbccddeeff0';
	  var brMajor = null;
	  var brMinor = null;
	  var brNotifyEntryStateOnDisplay = true;


	    $scope.didStartMonitoringForRegionLog = '';
	    $scope.didDetermineStateForRegionLog = '';
	    $scope.didRangeBeaconsInRegionLog = '';

	    $scope.requestAlwaysAuthorization = function() {
	    	console.log(":::::::::::::::: requestAlwaysAuthorization:::::::::");
	      	$cordovaBeacon.requestAlwaysAuthorization();
	    };

	    $scope.startMonitoringForRegion = function() {
	      	console.log("::::::::::::: startMonitoringForRegion :::::::::");
	      // $cordovaBeacon.startMonitoringForRegion($cordovaBeacon.createBeaconRegion(
	      	
	      //   brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
	      // ));
	    };
	    $scope.startRangingBeaconsInRegion = function() {
	    	console.log("::::::::: startRangingBeaconsInRegion ::::::::");
	      // $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
	      //   brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
	      // ));
	    };

	    $scope.stopMonitoringForRegion = function() {
	      // $cordovaBeacon.stopMonitoringForRegion($cordovaBeacon.createBeaconRegion(
	      //   brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
	      // ));
	    };
	    $scope.stopRangingBeaconsInRegion = function() {
	      // $cordovaBeacon.stopRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
	      //   brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
	      // ));
	    };

	    // $scope.clearLogs = function() {
	    //   $scope.didStartMonitoringForRegionLog = '';
	    //   $scope.didDetermineStateForRegionLog = '';
	    //   $scope.didRangeBeaconsInRegionLog = '';
	    // };

	    // // ========== Events

	    // $rootScope.$on("$cordovaBeacon:didStartMonitoringForRegion", function (event, pluginResult) {
	    //   $scope.didStartMonitoringForRegionLog += '-----' + '\n';
	    //   $scope.didStartMonitoringForRegionLog += JSON.stringify(pluginResult) + '\n';
	    //   console.log(":::::::::::::::::::::: didStartMonitoringForRegion :::::::::::::::::");
	    //   alert(":::::::::::::::::::::: didStartMonitoringForRegion :::::::::::::::::");
	    // });

	    // $rootScope.$on("$cordovaBeacon:didDetermineStateForRegion", function (event, pluginResult) {
	    //   $scope.didDetermineStateForRegionLog += '-----' + '\n';
	    //   $scope.didDetermineStateForRegionLog += JSON.stringify(pluginResult) + '\n';
	    //   console.log(":::::::::::::::::::::: didDetermineStateForRegion :::::::::::::::::");
	    //   alert(":::::::::::::::::::::: didDetermineStateForRegion :::::::::::::::::");
	    // });

	    // $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function (event, pluginResult) {
	    //   $scope.didRangeBeaconsInRegionLog += '-----' + '\n';
	    //   $scope.didRangeBeaconsInRegionLog += JSON.stringify(pluginResult) + '\n';
	    //   console.log(":::::::::::::::::::::: didRangeBeaconsInRegion :::::::::::::::::");
	    //   alert(":::::::::::::::::::::: didRangeBeaconsInRegion :::::::::::::::::");
	    // });

	    // =========/ Events


});