(function(){
	'use strict';
	angular.module('cosmic-angular', [ 'ngRoute','cosmic-angular-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();