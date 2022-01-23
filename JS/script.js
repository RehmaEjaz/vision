/*@font-face {
    font-family: 'Roboto';
    src: url('../fonts/robotbold/Roboto-Bold.woff2') format('woff2'),
        url('../fonts/robotbold/Roboto-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
*/








document.querySelector("body").style.margin ="0px";

document.querySelector("body").style.padding ="0px";
document.querySelector("body").style.boxSizing="border-box";

 
var cont=document.querySelector(".container");
	cont.style.width ="1170px";
	cont.style.marginTop = "0px";
	cont.style.marginBottom = "0";
	cont.style.marginLeft = "auto";
	cont.style.marginRight = "auto";
	cont.style.backgroundColor = "#ffff";

document.querySelector("#logo").style.width ="70%";
document.querySelector("#logo").style.paddingTop ="20px";



var si = document.getElementById('sicons');
si.style.backgroundImage = "url('IMAGES/list.png')";
si.style.width = "660px";
si.style.height = "40px";

var header = document.querySelector(".header_main");
header.style.display = "flex";
header.style.justifyContent = "space-around";

  
  var a =document.querySelectorAll("a"); 
 for( var x=0; x<a.length; x++){
 	a[x].style.color = "#4b4b4b";
 	a[x].style.textDecoration = "none";
 	a[x].style.paddingTop = "20px";
 	a[x].style.marginRight = "20px";
 }
 var img = document.querySelector(".main_content");
 img.style.backgroundImage = "url('IMAGES/img3.jpg')";
 img.style.width = "100%";
 img.style.height = "500px";


var inner = document.querySelector(".main_content_header");
inner.style.marginLeft ="110px";
inner.style.paddingTop ="90px";
inner.style.marginTop ="25px";

var head = document.querySelectorAll(".head");
head[0].style.backgroundColor = "#1b9cff";
head[0].style.color = "white";
head[0].style.fontSize = "28px";

head[0].style.width = "40%";
head[1].style.backgroundColor = "#1b9cff";
head[1].style.color = "white";
head[1].style.width = "43%";
head[1].style.padding = "5px";

var para = document.querySelector("#para");
para.style.fontSize = "14px";
para.style.lineHeight= "28px";
para.style.color = "#5e6165";
var btn = document.querySelector("button");
btn.style.backgroundColor = "#00aab4";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.padding = "10px";
 

var im = document.querySelector("#im");
im.style.float = "right";
im.style.marginTop = "99px";
im.style.marginRight = "120px";
var sect = document.querySelector(".content_inner");
sect.style.display = "flex";
sect.style.gap= "25px";
sect.style.margin = "90px";

sect.style.justifyContent = "center";
var image1= document.querySelectorAll(".img1");
image1[0].style.border ="10px solid #1b9cff";
image1[0].style.backgroundColor ="#1b9cff";
image1[0].style.borderRadius ="50%";
image1[0].style.width ="12%";
image1[0].style.position ="absolute";
image1[1].style.backgroundColor ="#1b9cff";
image1[1].style.position ="absolute";
image1[1].style.border ="10px solid #1b9cff";
image1[1].style.width ="12%";
image1[1].style.borderRadius ="50%";

image1[2].style.position ="absolute";
image1[2].style.backgroundColor ="#1b9cff";
image1[2].style.border ="10px solid #1b9cff";
image1[2].style.borderRadius ="50%";
image1[2].style.width ="12%";
image1[2].style.position ="absolute";
image1[3].style.backgroundColor ="#1b9cff";
image1[3].style.border ="10px solid #1b9cff";
image1[3].style.width ="12%";
image1[3].style.borderRadius ="50%";
image1[3].style.position ="absolute";
image1[0].style.left ="40%";
image1[0].style.top ="-40px";
image1[1].style.left ="40%";
image1[1].style.top ="-40px";
image1[2].style.left ="40%";
image1[2].style.top ="-40px";
image1[3].style.left ="40%";
image1[3].style.top ="-40px";


var para1= document.querySelectorAll(".para1");
para1[0].style.fontSize = "12px";
para1[0].style.lineHeight = "18px";
para1[1].style.fontSize = "12px";
para1[1].style.lineHeight = "18px";
para1[2].style.fontSize = "12px";
para1[2].style.lineHeight = "18px";
para1[3].style.fontSize = "12px";
para1[3].style.lineHeight = "18px";
para1[0].style.color ="#5f5f5f";
para1[1].style.color ="#5f5f5f";
para1[2].style.color ="#5f5f5f";
para1[3].style.color ="#5f5f5f";

var card = document.querySelectorAll(".card");
card[0].style.width = "25%";
card[0].style.position = "relative";

card[0].style.border = "1px solid grey";
card[1].style.position = "relative";
card[1].style.border = "1px solid grey";
card[1].style.width = "25%";
card[2].style.position = "relative";
card[2].style.width = "25%";
card[2].style.border = "1px solid grey";
card[3].style.position = "relative";
card[3].style.width = "25%";
card[3].style.border = "1px solid grey";
card[0].style.textAlign = "center";
card[1].style.textAlign = "center";
card[2].style.textAlign = "center";
card[3].style.textAlign = "center";
card[0].style.backgroundColor = "#fafafa";
card[1].style.backgroundColor = "#fafafa";
card[2].style.backgroundColor = "#fafafa";
card[3].style.backgroundColor = "#fafafa";
var heading = document.querySelectorAll(".heading");
heading[0].style.fontSize= "14px";
heading[1].style.fontSize= "14px";
heading[2].style.fontSize ="14px";
heading[3].style.fontSize= "14px";
heading[0].style.color= "#4f4f4f";
heading[1].style.color= "#4f4f4f";
heading[2].style.color ="#4f4f4f";
heading[3].style.color= "#4f4f4f";
var hcont = document.querySelectorAll(".header_content");
hcont[0].style.padding = "10px";
hcont[1].style.padding = "10px";
hcont[2].style.padding = "10px";
hcont[3].style.padding = "10px";
var bg =document.querySelector(".main_background");
bg.style.backgroundImage = "url('IMAGES/scene1.jpg')";
bg.style.width = "95%";
 bg.style.height = "350px";
 bg.style.color = "#cccccc";
 bg.style.padding = "30px";
 bg.style.textAlign = "center";
 var para2 = document.querySelectorAll(".para2");
 para2[0].style.fontSize = "14px";
 para2[1].style.fontSize = "14px";
 para2[1].style.lineHeight = "24px";
  para2[0].style.lineHeight = "24px";
  var btn = document.querySelector(".btn");
btn.style.backgroundColor = "#00aab4";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.padding = "10px";
var s =document.querySelector("#demo");
s.style.color = "#00aab4";
 var ser = document.querySelector(".services");
 ser.style.textAlign = "center";
   ser.style.textAlign = "center";
   ser.style.color = "#4f4f4f";
    
var mains = document.querySelector(".main_services");
mains.style.display = "flex";
mains.style.justifyContent ="center";
mains.style.margin="60px";
mains.style.gap="25px";
var service = document.querySelectorAll(".services_content");
service[0].style.width = "21%";
service[0].style.padding = "23px 0";
service[1].style.padding = "23px 0";
service[2].style.padding = "23px 0";
service[3].style.padding = "23px 0";
service[1].style.width = "21%";
service[2].style.width = "21%";
service[3].style.width = "21%";
service[0].style.border = "1px solid grey";
service[1].style.border = "1px solid grey";
service[2].style.border = "1px solid grey";
service[3].style.border = "1px solid grey";

service[0].style.textAlign = "center";
service[1].style.textAlign = "center";
service[2].style.textAlign = "center";
service[3].style.textAlign = "center";
var head2 = document.querySelectorAll(".heading1");
head2[0].style.fontSize = "20px";
head2[1].style.fontSize = "20px";
head2[2].style.fontSize = "20px";
head2[3].style.fontSize = "20px";
head2[0].style.color = "#4f4f4f";
head2[1].style.color = "#4f4f4f";
head2[2].style.color = "#4f4f4f";
head2[3].style.color = "#4f4f4f";
var paragraph= document.querySelectorAll(".para3");
paragraph[0].style.fontSize = "12px";
paragraph[0].style.lineHeight = "18px";
paragraph[0].style.color ="#5f5f5f";

paragraph[1].style.fontSize = "12px";
paragraph[1].style.color ="#5f5f5f";
paragraph[1].style.lineHeight = "18px";
paragraph[2].style.fontSize = "12px";
paragraph[2].style.color ="#5f5f5f";
paragraph[2].style.lineHeight = "18px";
paragraph[3].style.fontSize = "12px";
paragraph[3].style.lineHeight = "18px";


paragraph[3].style.color ="#5f5f5f";
var btn1 = document.querySelectorAll(".btn1");
btn1[0].style.backgroundColor = "#00aab4";
btn1[0].style.color = "#fff";
btn1[0].style.border = "none";
btn1[0].style.padding = "10px";
btn1[0].style.borderRadius = "5px";
btn1[1].style.backgroundColor = "#00aab4";
btn1[1].style.color = "#fff";
btn1[1].style.border = "none";
btn1[1].style.padding = "10px";
btn1[1].style.borderRadius = "5px";
btn1[2].style.borderRadius = "5px";
btn1[3].style.borderRadius = "5px";
btn1[2].style.backgroundColor = "#00aab4";
btn1[2].style.color = "#fff";
btn1[2].style.border = "none";
btn1[2].style.padding = "10px";
btn1[3].style.backgroundColor = "#00aab4";
btn1[3].style.color = "#fff";
btn1[3].style.border = "none";
btn1[3].style.padding = "10px";
var ex = document.querySelector("input");
ex.style.backgroundColor ="#44a731";
ex.style.color ="#fff";
ex.style.padding ="10px";
ex.style.border ="none";
ex.style.fontWeight ="bold";
document.querySelector(".exclusive").style.textAlign= "center";
var ss = document.querySelector(".section_service");
ss.style.display = "flex";
 var sl = document.querySelector(".services_left");
sl.style.backgroundImage = "url('IMAGES/map.jpg')";
sl.style.width ="40%";
sl.style.height = "329px";
sl.style.color = "#fff";
var head5 =document.getElementById("head5");
head5.style.textAlign = "center";



 var slr = document.querySelector(".service_left_right");
 slr.style.float = "right";
 slr.style.width ="50%";
 slr.style.fontSize="15px";
  slr.style.lineHeight="30px";
 var sll = document.querySelector(".service_left_left");
 sll.style.float = "left";
  sll.style.paddingLeft="90px";
  sll.style.fontSize="15px";
  sll.style.lineHeight="30px";
var sr =document.querySelector(".services_right");
sr.style.backgroundColor = "#00a9da";
sr.style.width = "60%";
sr.style.color = "#fff";
document.querySelector(".head3").style.paddingLeft="29px";

 var srl = document.querySelector(".services_right_left");
 srl.style.float = "left";
 srl.style.width = "60%";
 srl.style.fontSize="12px";
  srl.style.lineHeight="30px";

  var srr = document.querySelector(".services_right_right");
  srr.style.fontSize="12px";
  srr.style.lineHeight="30px";

  var mn = document.querySelector(".fix");
  mn.style.display = "flex";
  mn.style.justifyContent="center";
  mn.style.gap = "10px";
  var pli =document.querySelectorAll(".prefooter_list");
  pli[0].style.display ="flex";
  pli[0].style.padding =" 5px 37px";
   pli[1].style.padding ="5px 37px";
  pli[0].style.backgroundColor ="#fff";
   pli[0].style.listStyle ="none";
  pli[1].style.display ="flex";
  pli[1].style.backgroundColor ="#fff";
  pli[1].style.listStyle ="none";
  var para4 =document.querySelectorAll(".para4");
  para4[0].style.float ="right";
  para4[0].style.color = "#00a9da";
  para4[1].style.float ="right";
   para4[1].style.color = "#00a9da";
   var img3 = document.getElementById("img3");
   img3.style.borderRadius = "50%";
   img3.style.width = "53px";
   var img5 = document.getElementById("img5");
   img5.style.width = "53px";
 
   var head4 =document.querySelectorAll(".head4");
   head4[0].style.fontSize = "14px";
   head4[1].style.fontSize = "14px";
   head4[1].style.color = "#606060";
   head4[0].style.color = "#606060";
   var para5 =document.querySelectorAll(".para5");
  para5[0].style.color ="#606060";
  para5[1].style.color = "#606060";
  para5[1].style.fontSize = "12px";
    para5[0].style.fontSize = "12px";

var pfoot = document.querySelector(".prefooter");
pfoot.style.backgroundCor = "#f1f1f1";
pfoot.style.marginBottom = "60px";
var header1 =document.querySelector("#head6");
header1.style.marginTop = 0;

header1.style.paddingTop = "40px";
header1.style.textAlign = "center";
header1.style.fontSize= "40px";
header1.style.color= "#4f4f4f";
var pri = document.querySelectorAll(".prefooter_inner");
pri[0].style.marginTop = "0";
document.getElementById("fimg").style.float = "right";

var container =document.querySelector("#contain");
container.style.margin = "0 111px";


var footer = document.querySelector("footer");
footer.style.backgroundColor = "#23323a";
var mfoot =document.querySelector("#fix");

mfoot.style.display = "flex";
mfoot.style.paddingTop = "10px";

mfoot.style.justifyContent = "space-around";
var forms = document.querySelector(".forms");


forms.style.display = "block";
      forms.style.width ="300px";
      forms.style.height = "40px";
      forms.style.borderRadius= "5px";
      forms.style.border = "none";
      forms.style.outline = "none";
      forms.style.lineHeight = "40px";
      forms.style.paddingTop = "40px";

  

      forms.style.marginBottom = "20px";
      var fl = document.querySelector(".footer_list");
      fl.style.fontSize = "12px";
      fl.style.lineHeight = "34px";
         fl.style.color = "#5f5f5f";
         fl.style.listStyle ="none";
         var ll = document.querySelector(".icons");
      ll.style.fontSize = "12px";
      ll.style.lineHeight = "24px";
         ll.style.color = "#5f5f5f";
         ll.style.listStyle ="none";
         var header2 = document.querySelectorAll(".header2");
        header2[0].style.fontSize = "18px";
      header2[0].style.lineHeight = "24px";
         header2[0].style.color = "#fff";
           header2[0].style.paddingLeft = "34px";
           header2[0].style.fontSize = "18px";
      header2[1].style.lineHeight = "24px";
         header2[1].style.color = "#fff";
           header2[1].style.paddingLeft = "34px";
           var btn2 = document.querySelector("#btn2");
btn2.style.backgroundColor = "#00aab4";
btn2.style.color = "#fff";
btn2.style.border = "none";
btn2.style.padding = "10px";
btn2.style.borderRadius = "5px";
btn2.style.fontSize = "11px";
btn2.style.width = "100px";
var fill = document.querySelectorAll(".fill");
        fill[0].style.fontSize = "12px";
      fill[0].style.lineHeight = "24px";
         fill[0].style.backgroundColor = "transparent";
           fill[0].style.border = "1px solid #5f5f5f";
        fill[0].style.padding = "5px";
        fill[0].style.marginBottom = "8px";
        fill[0].style.display = "block";
        fill[0].style.width = "75%";
              fill[1].style.marginBottom = "8px";
      fill[1].style.fontSize = "12px";
      fill[1].style.lineHeight = "24px";
      fill[1].style.backgroundColor = "transparent";
      fill[1].style.border = "1px solid #5f5f5f";
      fill[1].style.padding = "5px";
      fill[1].style.display = "block";
      fill[1].style.width = "75%";
      fill[2].style.marginBottom = "8px";     
      fill[2].style.fontSize = "12px";
      fill[2].style.lineHeight = "24px";
      fill[2].style.backgroundColor = "transparent";
      fill[2].style.border = "1px solid #5f5f5f";
      fill[2].style.padding = "5px";
      fill[2].style.display = "block";
      fill[2].style.width = "75%";
          
      fill[3].style.fontSize = "12px";
      fill[3].style.lineHeight = "24px";
      fill[3].style.backgroundColor = "transparent";
      fill[3].style.border = "1px solid #5f5f5f";
      fill[3].style.padding = "5px";
      fill[3].style.display = "block";
      fill[3].style.width = "75%";
      fill[3].style.marginBottom = "8px";
          
          fill[4].style.marginBottom = "10px";    
      fill[4].style.fontSize = "12px";
      fill[4].style.lineHeight = "24px";
      fill[4].style.backgroundColor = "transparent";
      fill[4].style.border = "1px solid #5f5f5f";
      fill[4].style.padding = "10px";
        fill[4].style.display = "block";
          fill[4].style.width = "75%";
          
   var span =document.querySelectorAll(".text1");
  span[0].style.marginLeft ="15px"; 
  span[1].style.marginLeft ="15px"; 
  span[2].style.marginLeft ="15px"; 
  span[3].style.marginLeft ="15px";
  span[4].style.marginLeft ="15px";    
  span[5].style.marginLeft ="15px";    
  span[6].style.marginLeft ="15px";           
          
 var sicons2 = document.querySelector(".sicons2");
 sicons2.style.display = "flex";
 sicons.style.fontSize ="13px";
 sicons.style.color ="#fff";
  sicons2.style.fontFamily ="Roboto";
  sicons2.style.justifyContent ="space-evenly";
  sicons2.style.listStyle = "none";
  sicons2.style.padding = "10px 25px";
  sicons2.style.margin = "0";         
 var nav2 = document.querySelector(".navigation");
 nav2.style.display = "flex"; 
 nav2.style.justifyContent = "space-evenly";
 nav2.style.fontSize ="13px";
  nav2.style.fontFace ="url('/fonts/robotbold/Roboto-Bold.woff2') format('woff2')')";
 nav2.style.fontFamily ="Roboto";
 nav2.style.fontWeight= "bold";
 nav2.style.listStyle = "none";
 nav2.style.padding = "20px 25px";
 nav2.style.margin = "0";         
    
                   
          