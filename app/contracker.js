(function(){

	'use strict';

	angular
	.module('contracker',[

		"firebase",
		"ui.router"
		
	])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");
		//
		// Now set up the states
		$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "/app/contracts/templates/contracts.html"
		})
		.state('recruiters', {
			url: "/recruiters",
			templateUrl: "/app/recruiters/templates/recruiters.html"
		});



	});

})();