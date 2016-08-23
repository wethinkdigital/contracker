(function(){

	angular
	.module('contracker')
	.controller('contractsCtrl',contractsCtrl);


	contractsCtrl.$inject = ['contractsServ'];


	function contractsCtrl(contractsServ){

		var vm = this;
		vm.pageTitle = 'Contracts';
		vm.newContract = {};
		vm.viewContract = {};
		vm.updateContract = updateContract;
		vm.deleteContract = deleteContract;

		vm.contracts = contractsServ.getAll();
		vm.getContract = getContract;

		vm.createContract = createContract;

		

		function getContract(key){
			vm.viewContract = contractsServ.getContract(key);
		}	

		function createContract() {
			var newContract = contractsServ.createContract(vm.newContract);
			vm.newContract = {};
			return newContract;
		}

		function updateContract(){
			return contractsServ.updateContract(vm.viewContract);
		}

		function deleteContract(key){
			return contractsServ.deleteContract(key);
		}

	}




})();