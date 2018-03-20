window.onload=function(){
    leftin();
    rightin();
    leftout();
    rightout();
    deleted();
    bubbleSort();
}

function leftin(){
    var leftin=document.getElementById('left-in');
    var number=document.getElementById('input');
    leftin.onclick=function(e){
    	e.preventDefault();
    	if(isNaN(number.value)||number.value==""){
    		alert('数字不可为空！');
    	}else if(parseInt(number.value)<10||parseInt(number.value)>100){
            alert('数字为1-100！');
        }
    	else{
    	var dv=document.getElementById('dv-number');
        if (dv.getElementsByTagName("span").length>60) {
                alert("最多只能有60个小框")
            }  
        else{
        	var span=document.createElement('span');
            var height = number.value+"px";
        	span.className='number';
        	dv.insertBefore(span, dv.childNodes[0]);
        	span.innerHTML=parseInt(number.value);
        }
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
    	}else if(parseInt(number.value)<10||parseInt(number.value)>100){
            alert('数字为1-100！');
        }
    	else{
    	var dv=document.getElementById('dv-number');
         if (dv.getElementsByTagName("span").length>60) {
                alert("最多只能有60个小框")
            }  
        else{
            var span=document.createElement('span');
            var height = number.value+"px";
            span.className='number';
            dv.insertBefore(span, dv.childNodes[length-1]);
            span.innerHTML=parseInt(number.value);
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
		//兼容火狐浏览器
		var event = window.event || e;
		if(event.target.nodeName.toLowerCase()=="span"){
		    dvnumber.removeChild(event.target);
		}
	})
}

function bubbleSort(){
    var bubblesort = document.getElementById("paixu");
    bubblesort.onclick = function(e){
        e.preventDefault();
        var dvnumbersp = document.getElementById("dv-number").getElementsByTagName("span");
        var i = dvnumbersp.length;
        var exchangorder;
        //假设有i个元素，则在最复杂情况下要进行i-1次循环遍历，使用while循环语句共遍历了i次;
        while(i>0){
            for (var j = 0; j < i-1; j++) {
                if (dvnumbersp[j].style.height > dvnumbersp[j+1].style.height) {
                    exchangorder = dvnumbersp[j].style.height;
                    dvnumbersp[j].style.height = dvnumbersp[j+1].style.height;
                    dvnumbersp[j+1].style.height = exchangorder;
                }
            }
            i--;
        }
    }
}

