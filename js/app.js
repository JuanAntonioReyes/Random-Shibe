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
		console.log(response);
	}

	function handleError(response) {
		console.log("SOMETHING WENT WRONG - ERROR");
	}

})