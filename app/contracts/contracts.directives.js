(function(){

	angular
	.module('contracker')
	.directive('contractModal',contractModal);

	function contractModal(){
		
		var directive = {
			replace: 'true',
			templateUrl: '/app/contracts/templates/contractmodal.directive.html'
		};

		return directive;

	}


})();