(function(){

	angular
	.module('contracker')
	.service('contractsServ',contractsServ);


	contractsServ.$inject = ['$firebaseAuth','$firebaseObject','$firebaseArray'];


	function contractsServ($firebaseAuth,$firebaseObject,$firebaseArray){

		var service = {
			contractObj: contractObj,
			getAll: getContracts,
			getContract: getContract,
			createContract: createContract,
			updateContract: updateContract,
			deleteContract: deleteContract,
		};

		return service;

		function contractObj(data){

			this.metrics = data.metrics || {};
			this.recruiter = data.recruiter || {};
			this.client = data.client || {};

		}

		function getContracts(){
			var ref = firebase.database().ref().child('contracts');
			return $firebaseArray(ref);
		}

		function getContract(key){
			var ref = firebase.database().ref().child('contracts/'+key);
			return $firebaseObject(ref);
		}

		function createContract(data){
			var createContract = new this.contractObj(data);
			var newPostKey = firebase.database().ref('contracts/').push().key;
			firebase.database().ref('contracts/'+newPostKey).set(createContract);
			return newPostKey;
		}

		function updateContract(data){
			var updateContract = new this.contractObj(data);
			firebase.database().ref('contracts/'+data.$id).update(updateContract);
		}
		
		function deleteContract(key){
			firebase.database().ref('contracts/'+key).remove();
		}

	}

})();