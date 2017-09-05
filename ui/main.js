console.l0g('Loaded!');
//change the text of the main -text.div

var element =document.getelementByid (main-text);

element.innerhtml ='new value';
//move the image
var img =document.getelementbyid('madi');
var marginleft=0;
function moveright () {
marginleft = marginleft+10;
img.stylemarginleft = marginleft+"px";
 }
img.onclick = function (){
    var interval = setinterval  (moveright,100);
}
