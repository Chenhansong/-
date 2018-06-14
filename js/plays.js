var getWhoClick = "gold5"; //看谁被点击了 作用是拼接图片地址
//用户下注动画
(function($) {
	$(document).ready(function() {

		function bett(imgsrc) {
			var num = $('#golds').val();
			num++;　
			var bethtml = '<img src="img/' + getWhoClick + '.png" style="border-radius: 50%;transition: all ease 1s;position: fixed;opacity:1;height: 0.6rem;width: 0.6rem;top:500px;left:200px;" class="goldseleted chip remove" id="gold' + num + '"/>';

			$('#golds').val(num);

			$("#bet").append(bethtml);

			function rdx() {
				return Math.floor(Math.random() * 42 + 13);
			}

			function rdy() {
				return Math.floor(Math.random() * 4 + 8);
			}
			var endX = parseInt($("#" + imgsrc).offset().left + rdx());
			var endY = parseInt($("#" + imgsrc).offset().top + rdy());

			$('#gold' + num).animate({
				"left": endX,
				"top": endY
			}, 300);

		}
		window.bett = bett;

		var divposi, imgposi;
		$(document).on('click', '.chip', function() { //需要得到元素的四个点的位置来判断	
			imgposi = document.getElementById(this.id).getBoundingClientRect();
			for(var x = 1; x < 4; x++) {
				divposi = document.getElementById("Kind1-" + x).getBoundingClientRect();
				if(divposi.left < imgposi.left && divposi.right > imgposi.right && divposi.bottom > imgposi.bottom && divposi.top < imgposi.top) {
					bett('Kind1-' + x);
					return;
				}
			}
			for(var x = 1; x < 5; x++) {
				divposi = document.getElementById("Kind2-" + x).getBoundingClientRect();
				if(divposi.left < imgposi.left && divposi.right > imgposi.right && divposi.bottom > imgposi.bottom && divposi.top < imgposi.top) {
					bett('Kind2-' + x);
					return;
				}
			}
			for(var x = 1; x < 5; x++) {
				divposi = document.getElementById("Kind3-" + x).getBoundingClientRect();
				if(divposi.left < imgposi.left && divposi.right > imgposi.right && divposi.bottom > imgposi.bottom && divposi.top < imgposi.top) {
					bett('Kind3-' + x);
					return;
				}
			}
		});

		//金币选中

		$('#gold5').addClass("goldseleted");

		$('#gold5').on('click', function() {
			getWhoClick = "gold5";
			$('#gold5').addClass("goldseleted");
			$('#gold500,#gold10,#gold50,#gold100,#gold1k').removeClass("goldseleted");
		});

		$('#gold10').on('click', function() {
			getWhoClick = "gold10";
			$('#gold10').addClass("goldseleted");
			$('#gold5,#gold500,#gold50,#gold100,#gold1k').removeClass("goldseleted");
		});

		$('#gold50').on('click', function() {
			getWhoClick = "gold50";
			$('#gold50').addClass("goldseleted");
			$('#gold5,#gold10,#gold500,#gold100,#gold1k').removeClass("goldseleted");
		});

		$('#gold100').on('click', function() {
			getWhoClick = "gold100";
			$('#gold100').addClass("goldseleted");
			$('#gold5,#gold10,#gold50,#gold500,#gold1k').removeClass("goldseleted");
		});

		$('#gold500').on('click', function() {
			getWhoClick = "gold500";
			$('#gold500').addClass("goldseleted");

			$('#gold5,#gold10,#gold50,#gold100,#gold1k').removeClass("goldseleted");
		});

		$('#gold1k').on('click', function() {
			getWhoClick = "gold1k";
			$('#gold1k').addClass("goldseleted");

			$('#gold5,#gold10,#gold50,#gold100,#gold500').removeClass("goldseleted");
		});

		//帮助弹出层按钮
		$('#helping').on('click', function() {
			$('#helping').addClass("helpseleted");
			$('#backing,#voice,#oldbeting').removeClass("helpseleted");
			layer.open({
				title: false,
				type: 2,
				area: ['100%', '60%'],
				offset: '1.8rem',
				anim: 'dowm',
				style: 'position:fixed;',
				content: 'pages/help.html',
				shadeClose: true,
				scrollbar: false,
				closeBtn: 0
			});
		});

		//背景音乐控制按钮
		$('#voice').on('click', function() {
			$('#voice').addClass("helpseleted");
			$('#backing,#helping,#oldbeting').removeClass("helpseleted");
			var bgm = document.getElementById("bgmmusic");
			var img = document.getElementById("voice");
			if(bgm.muted) {
				bgm.muted = false;
				img.src = "img/voiceon.png";

			} else {
				bgm.muted = true;
				img.src = "img/voicedown.png";
			}
		});

		//走势图弹出层
		$('#oldbtn').on('click', function() {
			$('#oldbeting').addClass("helpseleted");
			$('#backing,#voice,#helping').removeClass("helpseleted");
			layer.open({
				title: false,
				type: 2,
				area: ['100%', '76%'],
				offset: '1.46rem',
				anim: 'dowm',
				style: 'position:fixed;',
				content: 'pages/oldbet.html',
				shadeClose: true,
				scrollbar: false,
				closeBtn: 0
			})
		});
		//下注撤销按钮
		$('#backing').on('click', function() {
			$('#backing').addClass("helpseleted");
			$('#voice,#helping,#oldbeting').removeClass("helpseleted");

			var num = $('#golds').val();

			$('.remove').remove();
			$('#golds').val(0);
		});
	});
})(jQuery)