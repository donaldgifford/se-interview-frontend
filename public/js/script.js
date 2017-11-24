$(window).on("load", function() {
	$.ajax({
      		url: $('#apiUrl').val(),
      		type: "GET",
		contentType: 'text/plain',
      		success: function(data){
        		$('#apiStatus').html('<span style="color:lightgreen;">UP</span>');
			if (data.db.status == 'UP')
			{
				$('#dbStatus').html('<span style="color:lightgreen;">UP</span>');
			}
			else
			{
				$('#dbStatus').html('<span style="color:red;">DOWN</span>');
			}
      		},
      		error:function(jqXHR, textStatus, errorThrown) {
			$('#apiStatus').html('<span style="color:red;">DOWN</span>');
			$('#dbStatus').html('<span style="color:red;">DOWN</span>');
      		}
    	});
});
