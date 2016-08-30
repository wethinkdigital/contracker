(function(){

	angular
	.module('contracker')
	.controller('recruitersCtrl',recruitersCtrl);


	recruitersCtrl.$inject = ['recruitersServ'];


	function recruitersCtrl(recruitersServ){

		var vm = this;
		vm.pageTitle = 'app1';
		vm.thisrecruiter = {};

		vm.recruiterFields = new recruitersServ.recruiterObj({});

		vm.createRecruiter = createRecruiter;
		vm.recruiters = recruitersServ.getAll();
		vm.getRecruiter = getRecruiter;
		vm.updateRecruiter = updateRecruiter;
		vm.deleteRecruiter = deleteRecruiter;


		function getRecruiter(key){
			vm.thisRecruiter = recruitersServ.getRecruiter(key);
		}	

		function createRecruiter() {
			recruitersServ.createRecruiter(vm.thisRecruiter);
			vm.thisRecruiter = {};
		}

		function updateRecruiter(){
			return recruitersServ.updateRecruiter(vm.thisRecruiter);
		}

		function deleteRecruiter(key){
			vm.thisRecruiter = {};
			return recruitersServ.deleteRecruiter(key);
		}

	}




})();