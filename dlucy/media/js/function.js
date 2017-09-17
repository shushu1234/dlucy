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
