$(function () {
	$(".del").on('click', fucntion (event) {
		var target = event.target;
		var id = target.data('id');
		var $tr = $('.item-id-' + id);
		
		$.ajax({
			type:"DELETE",
			url:"/admin/list?id=" + id,
			async:true
		}).done(function (results) {
			if (results.success === 1) {
				if ($tr.length > 0) {
					$tr.remove();
				}
			}
		});
	});
});