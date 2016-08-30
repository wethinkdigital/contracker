(function(){

	angular
	.module('contracker')
	.directive('recruiterModal',recruiterModal)
	.directive('deleteRecruiterModal',deleteRecruiterModal);

	function recruiterModal(){
		
		var directive = {
			replace: 'true',
			templateUrl: 'app/recruiters/templates/recruitermodal.directive.html'
		};

		return directive;

	}

	function deleteRecruiterModal(){
		
		var directive = {
			replace: 'true',
			templateUrl: 'app/recruiters/templates/deleterecruitermodal.directive.html'
		};

		return directive;

	}


})();