(function(){

	angular
	.module('contracker')
	.controller('contractsCtrl',contractsCtrl);


	contractsCtrl.$inject = ['contractsServ'];


	function contractsCtrl(contractsServ){

		var vm = this;
		vm.pageTitle = 'App1';
		vm.thisContract = {};

		vm.createContract = createContract;
		vm.contracts = contractsServ.getAll();
		vm.getContract = getContract;
		vm.updateContract = updateContract;
		vm.deleteContract = deleteContract;


		function getContract(key){
			vm.thisContract = contractsServ.getContract(key);
		}	

		function createContract() {
			contractsServ.createContract(vm.thisContract);
			vm.thisContract = {};
		}

		function updateContract(){
			return contractsServ.updateContract(vm.thisContract);
		}

		function deleteContract(key){
			return contractsServ.deleteContract(key);
		}

	}




})();