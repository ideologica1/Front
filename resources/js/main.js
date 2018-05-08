$(document).ready( function() {
	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
	});

	$('.btn-file :file').on('fileselect', function(event, label) {

		var input = $(this).parents('.input-group').find(':text'),
		log = label;

		if( input.length ) {
			input.val(log);
		} else {
			if( log ) ;
		}

	});
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#img-upload').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}

	$("#imgInp").change(function(){
		readURL(this);
	}); 	
});

function searchViaAjax() {
        $.ajax({
            url: 'http://localhost:8080/create', // url where to submit the request
            type: "POST", // type of action POST || GET
            dataType: 'multipart/form-data', // data type
            data: $("#search-form").serialize(), // post data || get data
            success: function (data) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(data);
                $('#response').html(data.response);
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
}
