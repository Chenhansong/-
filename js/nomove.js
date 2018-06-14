(function($) {
	$(document).ready(function() {
		//禁止滚动
		document.body.addEventListener('touchmove', function(e) {
			e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
		}, {
			passive: false
		});
		
	});
})(jQuery)