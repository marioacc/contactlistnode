var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    $scope.editContact =[];
    var refresh = function() {

    	$http.get("/contactlist").success(function(response){
    	console.log("I got the data I requested");
    	$scope.contactlist = response;

    	});
    };
    refresh();
    $scope.showEdit= true;

    $scope.editing = function() {
      return !$scope.showEdit;
    };

    $scope.addContact = function(isValid) {
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if (re.test($scope.contact.email)){
          $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            refresh();
          });

        }else {
          alert("Verify your form");
        }

    };
    $scope.remove = function(id){
    	$http.delete('/contactlist/' +id).success(function(response){
    		refresh();
    	});
    };
    $scope.edit = function(id,contact){
    	contact.show=true;
    };

    $scope.update = function(id, index, isValid) {
      var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
      if (re.test($scope.editContact[index].email)){
        $http.put('/contactlist/' + id, $scope.editContact[index]).success(function(response){
          refresh();
        });
      }else{
        alert("Verify your form");
      }
    };
    $scope.deselect = function() {
    	$scope.contact = "";
    };

}]);//End of AppCtrl

function edit(id){
  // $("#"+id).
}
