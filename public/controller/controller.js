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

    $scope.addContact = function() {
    	console.log($scope.contact);
    	$http.post('/contactlist', $scope.contact).success(function(response){
    		console.log(response);
    		refresh();
    	});
    };
    $scope.remove = function(id){
    	console.log(id);
    	$http.delete('/contactlist/' +id).success(function(response){
    		refresh();
    	});
    };
    $scope.edit = function(id,contact){
    	console.log(id);
    	contact.show=true;
    };
    $scope.update = function(id, index) {
    	console.log($scope.editContact[index].name);
    	$http.put('/contactlist/' + id, $scope.editContact[index]).success(function(response){
    		refresh();
    	});

    };
    $scope.deselect = function() {
    	$scope.contact = "";
    }

}]);//End of AppCtrl

function edit(id){
  // $("#"+id).
}
