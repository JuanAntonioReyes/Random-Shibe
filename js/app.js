$(document).ready(function() {

	var shibeContainer = $('#shibeContainer');

	// Get new shibe button click event
	var btnGetNew = $("#btnGetNew");
	btnGetNew.click(getNewShibe);

	function getNewShibe(e){
		var loadingText = 'Loading...';
		shibeContainer.html(loadingText);

		var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
		var apiUrl = 'http://shibe.online/api/shibes?count=1';

		fetch(corsAnywhere + apiUrl)
		.then(response => {
		  return response.json();
		}).then(data => {
		  handleCheckSuccess(data);
		}).catch(err => {
		  handleError(err);
		});
	}

	function handleCheckSuccess(response) {
		//console.log(response[0]);
		var imageUrl = response[0];
		var shibeImg = '<img id="shibePhoto" src="' + imageUrl + '" class="img-fluid">';
		shibeContainer.html(shibeImg);
	}

	function handleError(err) {
		console.log("SOMETHING WENT WRONG - ERROR");
	}

})