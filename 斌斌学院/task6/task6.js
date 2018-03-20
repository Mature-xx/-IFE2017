window.onload=function(){
    leftin();
    rightin();
    leftout();
    rightout();
    deleted();
    chaxun();
}

function leftin(){
    var leftin=document.getElementById('left-in');
    var txt=document.getElementById('text');
    leftin.onclick=function(e){
    	e.preventDefault();
    	if(txt.value==""){
    		alert('文本不可为空！');
    	}
    	else{
    	var dv=document.getElementById('dv-number');
        var artxt=txt.value.toString().split(/[,\s、\;:\r]/);   	
       for(var i=0;i<artxt.length;i++){
        var span=document.createElement('span');
    	span.className='number';
    	dv.insertBefore(span, dv.childNodes[0]);
    	span.innerHTML=artxt[i];
      }
    }
   }
}

function rightin(){
    var rightin=document.getElementById('right-in');
    var txt=document.getElementById('text');
    rightin.onclick=function(e){
    	e.preventDefault();
              if(txt.value==""){
            alert('文本不可为空！');
    	}
    	else{
    	var dv=document.getElementById('dv-number');
        var artxt=txt.value.toString().split(/[,\s、\;:\r]/); 
         for(var i=0;i<artxt.length;i++){
    	var span=document.createElement('span');
    	span.className='number';
    	dv.insertBefore(span, null);
    	span.innerHTML=artxt[i];
    }
    }
   }
}

function leftout(){
    var leftout=document.getElementById('left-out');
    leftout.onclick=function(e){
    	e.preventDefault();	
    	var span=document.getElementsByTagName('span');
    	if (confirm("确认删除"+span[0].innerHTML+"吗？")) {
			span[0].remove();
		}
    }
   }

 function rightout(){
    var rightout=document.getElementById('right-out');
    rightout.onclick=function(e){
    	e.preventDefault();	
    	var span=document.getElementsByTagName('span');
    	if (confirm("确认删除"+span[span.length-1].innerHTML+"吗？")) {
			span[0].remove(span.length-1);
		}
    }
  }

  function deleted(){
	var dvnumber = document.getElementById("dv-number");
	dvnumber.addEventListener("click",function(e){
		//兼容火狐浏览器,iE浏览器需要用srcelement  可调用EventUtil
		var event = window.event || e;
		if(event.target.nodeName.toLowerCase()=="span"){
		    dvnumber.removeChild(event.target);
		}
	})
}
   
 function chaxun(){
      var cxt=document.getElementById('inp-search');//查询框
      var cx=document.getElementById('search');//查询按钮
      var dv=document.getElementById("dv-number")
      cx.onclick=function(e){
         e.preventDefault();
         var cxtxt=cxt.value.trim();
         if(cxtxt==""){
            alert('查询内容不能为空！');
         }
         else{
             var span=document.getElementById('dv-number').getElementsByTagName('span');
             var listarr=[];
             for(var i=0;i<span.length;i++){
                listarr.push(span[i].innerText);
             }
             dv.innerHTML=listarr.map(function(d){
                 d=d.replace(cxtxt,"<b>"+cxtxt+"</b>");
                 return "<span class='number'>"+d+"</span>";
             }).join('');
             console.log(listarr);
         }
      }
    
 }
