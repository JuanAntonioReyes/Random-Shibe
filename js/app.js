$(document).ready(function() {

	var shibeContainer = $('#shibeContainer');

	// Get new shibe button click event
	var btnGetNew = $("#btnGetNew");
	btnGetNew.click(getNewShibe);

	function getNewShibe(e){
		// Make the ajax request
		$.ajax({
			url: 'http://shibe.online/api/shibes?count=1',
			type: 'GET',
			dataType: 'JSON',
			success: handleCheckSuccess,
			error: handleError
		})
	}

	function handleCheckSuccess(response) {
		//console.log(response[0]);

		var imageUrl = response[0];
		var shibeImg = '<img id="shibePhoto" src="' + imageUrl + '" class="img-fluid">';
		shibeContainer.html(shibeImg);
	}

	function handleError(response) {
		console.log("SOMETHING WENT WRONG - ERROR");
	}

})