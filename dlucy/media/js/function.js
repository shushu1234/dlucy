//获取th里面的值
//a代表数组，Ttr代表某个tr
function Th_T(Ttr){
	var a=new Array();
	Ttr.each(function(){
		    var i=0;
			$(this).find("td").each(function(){
			    a[i]=$(this).text();
			    i++;
			})
		});
	return a;
}
//返回数组个数
function array_num(aa){//aa为传入的数组
	for(var i in aa){
		i++;
	}
	return i;
}
//a代表整点
function time_change(a){
	a=a+':'+'00';
	return a;
}

