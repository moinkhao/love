// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("鱼鱼在考虑一下呗");
	   }else if(Dianji==2){
		   		alert("你是我见过的最善良可爱的女孩纸");
		   		
	   }else if(Dianji==3){
		   		alert("一生一世爱你");
		   		
	   }else if(Dianji==4){
		   		alert("陪你一起看星星");
		   		
	  }else if(Dianji==5){
		   		alert("陪你一起看花海");
	  }else if(Dianji==6){
		   		alert("我都这样说了");
	  }else if(Dianji==7){
		   		alert("是不是不给面子啊");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("鱼鱼终于同意了，我爱你，嘻嘻嘻");
	}
	

}
