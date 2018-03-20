
// addLoadEvent(dianji);

var treeNodes=[];
var root=document.getElementsByClassName('first')[0];
var timer=null;
var button1=document.getElementById('btn-pre');
var button2=document.getElementById('btn-mid');
var button3=document.getElementById('btn-pos');

// function addLoadEvent(func){
//   var oldonload=window.onload;
//   if(typeof window.onload!='function'){
//     window.onload=func;
//   }else{
//     window.onload=function(){
//       oldonload();
//       func();
//     }
//   }
// }
window.onload=function(){

  button1.onclick=function(){
    reset();
    prevScan(root);
    changeStyle();
  };
   button2.onclick=function(){
    reset();
    midScan(root);
    changeStyle();
  };
   button3.onclick=function(){
    reset();
    postScan(root);
    changeStyle();

  };
}

function changeStyle(){
      var i=0;
      treeNodes[i].style.backgroundColor="#F34949";
      timer=setInterval(function(){
          i++;
          if(i<treeNodes.length){
              treeNodes[i-1].style.backgroundColor="white";
              treeNodes[i].style.backgroundColor="#F34949";
          }else{
              clearInterval(timer);
              treeNodes[i].style.backgroundColor="white";
          }
      },500)
}


function prevScan(node){
     if(node!==null){
      treeNodes.push(node);
      prevScan(node.firstElementChild);
      prevScan(node.lastElementChild);
     }
}

function midScan(node){
  if(node!==null){
    midScan(node.firstElementChild);
    midScan(node.lastElementChild);
    treeNodes.push(node);
  }

}

function postScan(node){
     if(node!==null){
    postScan(node.firstElementChild);
    postScan(node.lastElementChild);
    treeNodes.push(node);
  }
}

function reset(){
      treeNodes=[];
      clearInterval(timer);
      var divs= document.getElementsByTagName("div");
      for(var i=0;i<divs.length;i++){
          divs[i].style.backgroundColor="white";
      }
    }
