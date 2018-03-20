window.onload=function(){
    leftin();
    rightin();
    leftout();
    rightout();
    deleted();
}

function leftin(){
    var leftin=document.getElementById('left-in');
    var number=document.getElementById('input');
    leftin.onclick=function(e){
    	e.preventDefault();
    	if(isNaN(number.value)||number.value==""){
    		alert('数字不可为空！');
    	}
    	else{
    	var dv=document.getElementById('dv-number');
    	var span=document.createElement('span');
    	span.className='number';
    	dv.insertBefore(span, dv.childNodes[0]);
    	span.innerHTML=parseInt(number.value);
    }
   }
}

function rightin(){
    var rightin=document.getElementById('right-in');
    var number=document.getElementById('input');
    rightin.onclick=function(e){
    	e.preventDefault();
    	if(isNaN(number.value)||number.value==""){
    		alert('数字不可为空！');
    	}
    	else{
    	var dv=document.getElementById('dv-number');
    	var span=document.createElement('span');
    	span.className='number';
    	dv.insertBefore(span, null);
    	span.innerHTML=parseInt(number.value);
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
		//兼容火狐浏览器
		var event = window.event || e;
		if(event.target.nodeName.toLowerCase()=="span"){
		    dvnumber.removeChild(event.target);
		}
	})
}

