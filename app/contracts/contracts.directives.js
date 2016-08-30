(function(){

	angular
	.module('contracker')
	.directive('contractModal',contractModal)
	.directive('deleteContractModal',deleteContractModal);

	function contractModal(){
		
		var directive = {
			replace: 'true',
			templateUrl: 'app/contracts/templates/contractmodal.directive.html'
		};

		return directive;

	}

	function deleteContractModal(){
		
		var directive = {
			replace: 'true',
			templateUrl: 'app/contracts/templates/deletecontractmodal.directive.html'
		};

		return directive;

	}


})();