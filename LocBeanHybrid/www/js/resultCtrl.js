locbean.controller('resultCtrl',  function($scope, $rootScope, $ionicPlatform, $cordovaBeacon){
	console.log('resultCtrl');
	
	 var brIdentifier = 'ibeacon';
	  var brUuid = '01122334-4556-6778-899a-abbccddeeff0';
	  var brMajor = null;
	  var brMinor = null;
	  var brNotifyEntryStateOnDisplay = true;

	 $scope.beacons = {};

    $ionicPlatform.ready(function() {

        $cordovaBeacon.requestWhenInUseAuthorization();

        $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
            var uniqueBeaconKey;
            for(var i = 0; i < pluginResult.beacons.length; i++) {
                uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
            }
            $scope.$apply();
        });

        $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("ibeacon", "01122334-4556-6778-899a-abbccddeeff0"));

    });
});