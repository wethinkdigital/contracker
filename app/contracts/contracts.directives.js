(function(){

	angular
	.module('contracker')
	.directive('contractModal',contractModal)
	.directive('deleteModal',deleteModal);

	function contractModal(){
		
		var directive = {
			replace: 'true',
			templateUrl: '/app/contracts/templates/contractmodal.directive.html'
		};

		return directive;

	}

	function deleteModal(){
		
		var directive = {
			replace: 'true',
			templateUrl: '/app/contracts/templates/deletemodal.directive.html'
		};

		return directive;

	}


})();