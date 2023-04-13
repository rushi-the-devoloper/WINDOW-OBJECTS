let x = document.getElementById("btn1");
let link = "https:www.facebook.com";
let link2 = "https://www.google.com";
let features= "height=500px,width=500px,left=300,top=500";
let win= 
x.addEventListener("click",function(){
  win=  window.open(link,"google",features)
})

let y = document.getElementById("btn2");
y.addEventListener("click",function(){
  win= window.open(link2, "google",features)
})

let z = document.getElementById("btn3");
z.addEventListener('click',function(){
    win.close();
})