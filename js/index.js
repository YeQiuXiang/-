// 首先可以将整体封装成一个匿名自运行函数
(function(){
	// 规定每张图片出于的位置和状态
	var states = [
		{ Zindex: 1, width: 120, height: 150, top: 69, left: 134, opacity: 0.2 },
		{ Zindex: 2, width: 130, height: 170, top: 59, left: 0, opacity: 0.5 },
		{ Zindex: 3, width: 170, height: 218, top: 24, left: 110, opacity: 0.7 },
		{ Zindex: 4, width: 224, height: 288, top: 0, left: 263, opacity: 1 },
		{ Zindex: 3, width: 170, height: 218, top: 24, left: 470, opacity: 0.7 },
		{ Zindex: 2, width: 130, height: 170, top: 59, left: 620, opacity: 0.5 },
		{ Zindex: 1, width: 120, height: 150, top: 69, left: 500, opacity: 0.2 }
	]

	// 将状态和位置赋给li
	var lis = $('#box li');
	function Eachs() {
		lis.each(function (index, ele) {
			var state = states[index];
			// $(ele).css({
			// 	'z-index':state.Zindex,
			// 	'width':state.width,
			// 	'height':state.height,
			// 	'top':state.top,
			// 	'left':state.left,
			// 	'opaityity':state.opaity
			// })
			// $(ele).css('z-index', state.Zindex).finish().animate(state, 1000);
			$(ele).css('z-index', state.Zindex).finish().animate(state, 1000).find('img').css('opacity', state.opacity);
		})
	}
	Eachs(states);

	// 上一张
	function Prev() {
		// var pre=states[0];
		// console.log(pre);
		var pre = states.shift();
		states.push(pre);
		// 可不带参
		Eachs();
	}
	// 下一张
	function Next() {
		// var nex=states[6];
		var nex = states.pop();
		states.unshift(nex);
		Eachs();
	}

	// 自动轮播
	var time = null;
	function autoPlay() {
		time = setInterval(function () {
			Next();
		}, 1500)
	}
	autoPlay();
	// 停止轮播
	$('#box section').add('#box li').hover(function () {
		clearInterval(time);
	}, function () {
		autoPlay();
	})
})()

// 变量的作用域问题：
// 1.全局域[window]  2.函数域[function]
// 1.全局域：从页面被打开之后到页面关闭之前都是始终存在的
// 2.函数域：存在函数被调用的一瞬间（也不一定，考虑到闭包的存在）

// 闭包作用：可以保留函数的作用域（所以move可以使用当前自运行函数中的states）
// 闭包产生的必要条件：函数里面套函数（内层的函数要使用外部函数的变量）

// 全局变量会产生闭包：
// 不会，因为全局变量存在全局域


