'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('homeController', ['$scope', HomeCtrl])
  .controller('userDropdownController', ['$scope', DropdownCtrl])
  .controller('zoneDropdownController', ['$scope', DropdownCtrl])
  .controller('navController', ['$scope','$http', NavCtrl])
  .controller('clockController',['$scope','$interval',ClockCtrl])
  .controller('securityController',['$scope', SecurityCtrl])
  .controller('lightingController',['$scope', LightingCtrl])
  .controller('musicController',['$scope', MusicCtrl]);

function NavCtrl($scope,ISY){
  $scope.activeServices = [
  	{name:"security",icon:"shield",status:"armed",link:"security"},
  	{name:"music",icon:"music",status:"",link:"music"},
  	{name:"lighting",icon:"lightbulb-o",status:"",link:"lighting"},
  ];

  $scope.notifications = [
    {name:"notifications",icon:"bell",status:"",link:""},
    {name:"messaging",icon:"comments",status:"",link:""}
  ];

  $scope.alerts = [
    {}
  ];
  $scope.isy = null;
  //ISY.defaults.headers.common['Authorization'] = 'Basic ' + btoa('admim:drPepper21');
  delete ISY.defaults.headers.common['Accept'];
  ISY.defaults.headers.common['Content-Type']='text/plain';
  console.log(ISY.defaults.headers);
  ISY.get('https://192.168.3.123/rest/batteryPoweredWrites').success(function(data,status,headers,config){$scope.isy = data;}).error(function(data,status,headers,config){$scope.isy = 'error';});


}

function HomeCtrl($scope){}

function SecurityCtrl($scope){}

function LightingCtrl($scope){}

function MusicCtrl($scope){}

function DropdownCtrl($scope) {
  	$scope.users = [
	    'Brett',
	    'Juliana',
	    'Callie'
	  ];
	  $scope.zones = [
	    'Master Bedroom',
	    'Living Room',
	    'Office'
	  ];
	  $scope.currentUser = $scope.users[0];
	  $scope.currentZone = $scope.zones[0];
	  $scope.status = {
	    isopen: false
	  };

	  $scope.toggled = function(open) {

	  };

	  $scope.toggleDropdown = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.status.isopen = !$scope.status.isopen;
	  };

	  $scope.dropSelected = function($index,$target){
	  		var tmp = 'current' + $target.replace(/s$/,"").replace(/^(.)/,function(l){return l.toUpperCase()});
	  		$scope[	tmp] = $scope[$target][$index];
	  }
  }

  function ClockCtrl($scope,$interval){
	$scope.currentTimeString ='';
	clock($scope);
	$interval(clock,5000);

	function clock(){
			var currentTime = new Date ( );
			var currentHours = currentTime.getHours ( );
			var currentMinutes = currentTime.getMinutes ( );
			currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
			var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
			currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
			currentHours = ( currentHours == 0 ) ? 12 : currentHours;
			$scope.currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
		}
	
  }
