'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('userDropdownController', ['$scope', DropdownCtrl])
  .controller('zoneDropdownController', ['$scope', DropdownCtrl])
  .controller('navController', ['$scope', NavCtrl])
  .controller('clockController',['$scope','$interval',ClockCtrl]);

  function NavCtrl($scope){
  	$scope.activeServices = [
  		{name:"security",icon:"shield"},
  		{name:"music",icon:"music"},
  		{name:"lighting",icon:"lightbuld-o"},
  		{name:"notifications",icon:"bell"},
  		{name:"messaging",icon:"comments"}
  	];

  }

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
