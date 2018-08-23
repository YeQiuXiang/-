// 规定每张图片出于的位置和状态
var states=[
	{Zindex:1,width:120,height:150,top:69,left:134,opacity:0.2},
	{Zindex:2,width:130,height:170,top:59,left:0,opacity:0.5},
	{Zindex:3,width:170,height:218,top:24,left:110,opacity:0.7},
	{Zindex:4,width:224,height:288,top:0,left:263,opacity:1},
	{Zindex:3,width:170,height:218,top:24,left:470,opacity:0.7},
	{Zindex:2,width:130,height:170,top:59,left:620,opacity:0.5},
	{Zindex:1,width:120,height:150,top:69,left:500,opacity:0.2}
]

// 将状态和位置赋给li
var lis=$('#box li');
function Eachs(){
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
		$(ele).css('z-index', state.Zindex).finish().animate(state, 1000).find('img').css('opacity',state.opacity);
	})
}
Eachs(states);

// 上一张
function Prev(){
	// var pre=states[0];
	// console.log(pre);
	var pre=states.shift();
	states.push(pre);
	// 可不带参
	Eachs();
}
// 下一张
function Next(){
	// var nex=states[6];
	var nex=states.pop();
	states.unshift(nex);
	Eachs();
}

// 自动轮播
var time=null;
function  autoPlay(){
	time=setInterval(function(){
		Next();
	},1500)
}
autoPlay();
// 停止轮播
$('#box section').add('#box li').hover(function(){
	clearInterval(time);
},function(){
	autoPlay();
})

// 封装为插件，能够使得只有使用这个插件，就能被重复的使用的效果，会产生怎样的问题？
// 1.插件中最好不要用到id，原因：插件是为了能够被重复使用，也就是说在一个页面上肯会重复调用，会造成页面的冲突，并且id具有唯一性的特性
// 2.变量命名和方法命名：states、time、move(),用户在使用这个插件的时候，可能还会引入自己创建的文件，也有这样的命名，那么就会产生冲突
// 3.标签class的值的问题：prev，next。这些class命名太大众化，大多编写者都会使用这样的命名，势必会造成冲突
// 4.插件的文件命名问题：index.js,index.css,命名太大众化，比如：JQuery.Slide.js