var resetBtn=document.getElementById("reset");
divClick();
resetBtn.addEventListener('click',()=>{
    divClick();
});

function divClick(){
    let div1=document.getElementById("image1");
    let div2=document.getElementById("image2");
    let div3=document.getElementById("image3");
    let div4=document.getElementById("image4");
    let div5=document.getElementById("image5");
    let div6=document.getElementById("image6");
    div1.setAttribute("src","img/think.jpg");
    div1.setAttribute("class","img-thumbnail p-2");
    div2.setAttribute("src","img/think.jpg");
    div2.setAttribute("class","img-thumbnail p-2");
    div3.setAttribute("src","img/think.jpg");
    div3.setAttribute("class","img-thumbnail p-2");
    div4.setAttribute("src","img/think.jpg");
    div4.setAttribute("class","img-thumbnail p-2");
    div5.setAttribute("src","img/think.jpg");
    div5.setAttribute("class","img-thumbnail p-2");
    div6.setAttribute("src","img/think.jpg");
    div6.setAttribute("class","img-thumbnail p-2");

    var count=0;
    var k= Math.floor((Math.random()*6)+1);

    div1.addEventListener('click',()=>{
        if(count<2 && k==1){
            div1.setAttribute("src","img/correct.png");
            div1.setAttribute("class","img-thumbnail p-2");
            count=2;
        }
        else{
            if(count<2){
                
                div1.setAttribute("src","img/incorrect.png");
                div1.setAttribute("class","img-thumbnail p-2");
                if(count==1){
                    myFunction();
                }
            }
            count++;
        }
    });
    div2.addEventListener('click',()=>{
        if(count<2 && k==2){
            div2.setAttribute("src","img/correct.png");
            div2.setAttribute("class","img-thumbnail p-2");
            count=2;
        }
        else{
            if(count<2){
                div2.setAttribute("src","img/incorrect.png");
                div2.setAttribute("class","img-thumbnail p-2");
                if(count==1){
                    myFunction();
                }
            }
            count++;
        }
    });
    div3.addEventListener('click',()=>{
        if(count<2 && k==3){
            div3.setAttribute("src","img/correct.png");
            div3.setAttribute("class","img-thumbnail p-2");
            count=2;
        }
        else{
            if(count<2){
                div3.setAttribute("src","img/incorrect.png");
                div3.setAttribute("class","img-thumbnail p-2");
                if(count==1){
                    myFunction();
                }
            }
            count++;
        }
    });
    div4.addEventListener('click',()=>{
        if(count<2 && k==4){
            div4.setAttribute("src","img/correct.png");
            div4.setAttribute("class","img-thumbnail p-2");
            count=2;
        }
        else{
            if(count<2){
                div4.setAttribute("src","img/incorrect.png");
                div4.setAttribute("class","img-thumbnail p-2");
                if(count==1){
                    myFunction();
                }
            }
            count++;
        }
    });
    div5.addEventListener('click',()=>{
        if(count<2 && k==5){
            div5.setAttribute("src","img/correct.png");
            div5.setAttribute("class","img-thumbnail p-2");
            count=2;
        }
        else{
            if(count<2){
                div5.setAttribute("src","img/incorrect.png");
                div5.setAttribute("class","img-thumbnail p-2");
                if(count==1){
                    myFunction();
                }
            }
            count++;
        }
    });
    div6.addEventListener('click',()=>{
        if(count<2 && k==6){
            div6.setAttribute("src","img/correct.png");
            div6.setAttribute("class","img-thumbnail p-2");
            count=2;
        }
        else{
            if(count<2){
                div6.setAttribute("src","img/incorrect.png");
                div6.setAttribute("class","img-thumbnail p-2");
                if(count==1){
                    myFunction();
                }
            }
            count++;
        }
    });
    
}


function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});
