var app = angular.module('employeesApp', []);

app.controller('employeesController', function($scope){
	$scope.employees = [
	    {'firstname': 'Peter', 'lastname':  'Griffen', 'dept': 'R&D', 'hired': '4/23/2014' ,'ID': 21, 'pic':'http://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png'},
	    {'firstname': 'Eric', 'lastname': 'Cartman', 'dept': 'HR', 'hired': '5/9/2006','ID': 87, 'pic': 'http://upload.wikimedia.org/wikipedia/en/thumb/7/77/EricCartman.png/220px-EricCartman.png'},
	    {'firstname': 'Dora', 'lastname': 'Explorer', 'dept': 'R&D', 'hired': '6/13/2004','ID': 13, 'pic': 'http://cdn.pjmedia.com/lifestyle/files/2014/03/550px-doratheexplorer-color-step-11.jpg'},
	    {'firstname': 'Daniel', 'lastname': 'Tanner', 'dept': 'R&D', 'hired': '11/24/2009','ID': 45, 'pic':'http://i.huffpost.com/gen/1213342/thumbs/o-DANNY-TANNER-facebook.jpg'},
	    {'firstname': 'Optimus', 'lastname': 'Prime', 'dept': 'R&D', 'hired': '8/22/2004','ID': 19, 'pic': 'http://i.imgur.com/YtUtRaM.jpg'},
	    {'firstname': 'Homer', 'lastname': 'Simpson', 'dept': 'Marketing', 'hired': '4/15/2013','ID': 22, 'pic': 'http://4.bp.blogspot.com/_mtjEKB2K9F0/S9asQvp9q_I/AAAAAAAAAGc/2FaJZW5xhOw/s1600/Homer-original.jpg'},
	    {'firstname': 'Sir', 'lastname': 'Pounce', 'dept': 'Meowketing', 'hired': '2/12/2011','ID': 29, 'pic' : 'http://i565.photobucket.com/albums/ss95/animalswithlightsabers/trent_with_lightsaber.jpg'}
	];

	$scope.selectedEmployee = $scope.employees[0];
	$scope.selectedIndex = 0;

	$scope.employeeClicked = function(index){
		$scope.selectedIndex = index;
		$scope.selectedEmployee = $scope.employees[index];
	};
});