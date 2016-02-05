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
      var regex = new RegExp("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b");
      if (!regex.test($scope.contact.email)){
        alert("Verify the contact input");
      }else{
        $http.post('/contactlist', $scope.contact).success(function(response){
          console.log(response);
          refresh();
        });
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
      var regex = new RegExp("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b");
      if (!regex.test($scope.editContact.email)){
        alert("Verify the contact input");
      }else{
        $http.put('/contactlist/' + id, $scope.editContact[index]).success(function(response){
          refresh();
        });
      }
    };
    $scope.deselect = function() {
    	$scope.contact = "";
    }

}]);//End of AppCtrl

function edit(id){
  // $("#"+id).
}
