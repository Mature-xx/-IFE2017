

var treeNodes=[];
var root=document.getElementsByClassName('first')[0];
var timer=null;
var button1=document.getElementById('btn-pre');
var button2=document.getElementById('btn-mid');
var button4=document.getElementById('btn-search');
var input=document.getElementById('input');
var divs= document.getElementsByTagName("div");

window.onload=function(){

  button1.onclick=function(){
    initialize(); 
    traverseDF(root);
    changeStyle();
  };
   button2.onclick=function(){
    initialize();
    traverseBF(root);
    changeStyle();
  };
  button4.onclick=function(){
    
    var txt = document.getElementsByTagName("input")[0].value;
    initialize();
    traverseDF(root);
    if(txt != ""){
      changeStyle(txt);
    }else{
      alert("请输入要查询的字符。");
} 

  }
}

//深度优先遍历
  function traverseDF(node){
    if(node != null){
      treeNodes.push(node);
      for(var i = 0; i < node.children.length; i++){
        traverseDF(node.children[i]);
      }
    }
  }
  //广度优先遍历
  function traverseBF(node){
    if(node != null){
      treeNodes.push(node);
      traverseBF(node.nextElementSibling);
      node = treeNodes[index++];
      traverseBF(node.firstElementChild);
    } 
  }

  function changeStyle(txt){
    //若第一次搜索就匹配成功，则不再查询。
    var i = 0;
    if(treeNodes[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") == txt){
      treeNodes[i].style.backgroundColor = "#00f";
    }else{
      treeNodes[i].style.backgroundColor = "#f00";
      timer = setInterval(function(){
        i++;
        if(i < treeNodes.length){
          treeNodes[i-1].style.backgroundColor = "#fff";  
          if(treeNodes[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") == txt){
            treeNodes[i].style.backgroundColor = "#00f";
            clearInterval(timer);
          }else{
            treeNodes[i].style.backgroundColor = "#f00";
          }
        }else{
          clearInterval(timer);
          treeNodes[treeNodes.length-1].style.backgroundColor = "#fff";
          if(txt != null){
            alert("未搜索到该字符。");
          }
        }
      },500);
    }
  }

  function initialize(){
    //每次调用广度优先遍历都要初始化index值，否则广度优先遍历只能执行一次，因为index是全局变量。
    index = 0;
    treeNodes = [];
    clearInterval(timer);
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++){
      divs[i].style.backgroundColor = "#fff";
    }
}
