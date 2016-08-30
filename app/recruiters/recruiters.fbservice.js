(function(){

	angular
	.module('contracker')
	.service('recruitersServ',recruitersServ);


	recruitersServ.$inject = ['$firebaseAuth','$firebaseObject','$firebaseArray'];


	function recruitersServ($firebaseAuth,$firebaseObject,$firebaseArray){

		var service = {
			recruiterObj: recruiterObj,
			getAll: getRecruiters,
			getRecruiter: getRecruiter,
			createRecruiter: createRecruiter,
			updateRecruiter: updateRecruiter,
			deleteRecruiter: deleteRecruiter,
		};

		return service;

		function recruiterObj(data){

			this.metrics = data.metrics || {};

		}

		function getRecruiters(){
			var ref = firebase.database().ref().child('recruiters');
			return $firebaseArray(ref);
		}

		function getRecruiter(key){
			var ref = firebase.database().ref().child('recruiters/'+key);
			return $firebaseObject(ref);
		}

		function createRecruiter(data){
			var createRecruiter = new this.recruiterObj(data);
			var newPostKey = firebase.database().ref('recruiters/').push().key;
			firebase.database().ref('recruiters/'+newPostKey).set(createRecruiter);
			return newPostKey;
		}

		function updateRecruiter(data){
			var updateRecruiter = new this.recruiterObj(data);
			firebase.database().ref('recruiters/'+data.$id).update(updateRecruiter);
		}
		
		function deleteRecruiter(key){
			firebase.database().ref('recruiters/'+key).remove();
		}

	}

})();