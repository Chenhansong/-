//tab栏页面跳转

(function($) {
	$(document).ready(function() {
		//默认选中首页样式
		
		var home = document.getElementById("hometab");
		home.src = "icons/homed.png";

		//主页
		$('#hometab').on('click', function() {
			window.location.href = "index.html";
		});

		$('#bettingtab').on('click', function() {
			window.location.href = "betting.html";
		});

		$('#yongtab').on('click', function() {
			window.location.href = "yong.html";
		});

		$('#proxytab').on('click', function() {
			window.location.href = "proxy.html";
		});

		$('#servertab').on('click', function() {
			$(location).attr('href', 'server.html');
		});
	})
})(jQuery)