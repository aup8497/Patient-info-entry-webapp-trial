var app = angular.module('patientInfo',['ngRoute']);

app.config(  function($routeProvider) {

	   $routeProvider
	  .when('/', {
	    templateUrl: 'index.ejs',
	    controller: 'HomeController'
	    })  		//dont use ";" here or else youll get error
	  // .when('/patients' , {
	  //   templateUrl: 'patients.html',  //this is the html content
	  //   controller: 'patientsController'	// this is the node content
	  //   })

	  });


		app.controller( 'HomeController' ,function($scope , $http){  //the parameters are basicallly services which we are using
			$scope.submitForm = function(){
				//console.log($scope.newMeow);//this logs the variable newMeow in the console

                //add conditions and change these
                console.log("came here");
				if(  (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test( $scope.dob ) ) ) {
					$scope.dobtrue = false;
				}
				else if(  (/^\d+$/.test($scope.age)) ){
					$scope.agetrue=false;
				}else if( false ){
                    //this next line is sending the data to the server
                    $http.post('/patientsInfo', { firstname: $scope.firstName , lastname: $scope.lastName , age: $scope.age ,dob: $scope.dob , gender:$scope.Gender ,phone:$scope.phone , info: $scope.pInfo }).then(function(){
                        alert('succes!!');
                        // $scope.newMeow = '' ;//after submitting clears the string in the text input
                    });
                }else{
                    alert("info not entered properly,try again !!");
                }

			};


		});