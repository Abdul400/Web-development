
//definition of variables

const myButtons= document.getElementsByClassName('btn'),
      myPar=document.getElementsByClassName('par'),
      btn1= document.getElementById('btn1'),
      btn2= document.getElementById('btn2'),
      btn3= document.getElementById('btn3'),
      btn4= document.getElementById('btn4'),
      btn5= document.getElementById('btn5'),
      par1= document.getElementById('par1'),
      par2=document.getElementById('par2'),
      par3=document.getElementById('par3'),
      par4=document.getElementById('par4'),
      par5=document.getElementById('par5'),
      q1= document.getElementById('q1'),
      q2= document.getElementById('q2'),
      q3= document.getElementById('q3'),
      q4= document.getElementById('q4'),
      q5= document.getElementById('q5');
    
//conversion of HTML collection to an array and saving it into a variable;
    var myBtns =Array.from(myButtons),
        myArray =Array.from(myPar);
    

    console.log(myBtns);
    console.log(myArray);
/*
    function check(){
        myBtns.forEach(item =>{
            item.addEventListener('click', () => {
                myArray.forEach(thing => {
                    if(thing.classList.contains('visible')){
                        thing.classList.remove('visible');
                    }
                    else if (!thing.classList.contains('visible')){
                        thing.classList.add('visible');
                    }
                })
            })
        })
    }
*/

//btn1 logic
btn1.addEventListener('click', function(event){ //adding event listener
   btn1.classList.toggle('click'); // toggling the arrow background image on the 'click' for all classes
   btn2.classList.remove('click');
   btn3.classList.remove('click');
   btn4.classList.remove('click');
   btn5.classList.remove('click');

   //logic for opening and closing on click event
        if(!par1.classList.contains('visible')){
            par1.classList.add('visible');
            //function for checking if the other paragraphs are visible and making them invisible by removing class of 'visible'
            function check1 () {if (par2.classList.contains('visible')||par3.classList.contains('visible')||par4.classList.contains('visible')||par5.classList.contains('visible')) {
                par2.classList.remove('visible');
                par3.classList.remove('visible');
                par4.classList.remove('visible');
                par5.classList.remove('visible');
                }
            }
            check1();
        }
        else if (par1.classList.contains('visible')) {
            par1.classList.remove('visible');
           // check();
        }
    })

//btn2 logic
btn2.addEventListener('click', function(event){
    btn2.classList.toggle('click');
    btn1.classList.remove('click');
    btn3.classList.remove('click');
    btn4.classList.remove('click');
    btn5.classList.remove('click');

//logic for opening and closing on click event
    if(!par2.classList.contains('visible')){
        par2.classList.add('visible');
        //function for checking if the other paragraphs are visible and making them invisible by removing class of 'visible'
        function check1 () {if (par1.classList.contains('visible')||par3.classList.contains('visible')||par4.classList.contains('visible')||par5.classList.contains('visible')) {
            par1.classList.remove('visible');
            par3.classList.remove('visible');
            par4.classList.remove('visible');
            par5.classList.remove('visible');
            }
        }
        check1();
    }
    else if (par2.classList.contains('visible')) {
        par2.classList.remove('visible')
       // check();
    }
    })

//btn3 logic
btn3.addEventListener('click', function(event){
    btn3.classList.toggle('click');
    btn2.classList.remove('click');
    btn1.classList.remove('click');
    btn4.classList.remove('click');
    btn5.classList.remove('click');

//logic for opening and closing on click event
    if(!par3.classList.contains('visible')){
        par3.classList.add('visible');
        //function for checking if the other paragraphs are visible and making them invisible by removing class of 'visible'
        function check1 () {if (par2.classList.contains('visible')||par1.classList.contains('visible')||par4.classList.contains('visible')||par5.classList.contains('visible')) {
            par2.classList.remove('visible');
            par1.classList.remove('visible');
            par4.classList.remove('visible');
            par5.classList.remove('visible');
            }
        }
        check1();
    }
    else if (par3.classList.contains('visible')) {
        par3.classList.remove('visible')
       // check();
    }
})

//btn4 logic
btn4.addEventListener('click', function(event){
    btn4.classList.toggle('click');
    btn2.classList.remove('click');
    btn3.classList.remove('click');
    btn1.classList.remove('click');
    btn5.classList.remove('click');

//logic for opening and closing on click event    
    if(!par4.classList.contains('visible')){
        par4.classList.add('visible');
        //function for checking if the other paragraphs are visible and making them invisible by removing class of 'visible'
        function check1 () {if (par2.classList.contains('visible')||par3.classList.contains('visible')||par1.classList.contains('visible')||par5.classList.contains('visible')) {
            par2.classList.remove('visible');
            par3.classList.remove('visible');
            par1.classList.remove('visible');
            par5.classList.remove('visible');
            }
        }
        check1();
    }
    else if (par4.classList.contains('visible')) {
        par4.classList.remove('visible')
       // check();
    }
    
})

//btn5 logic
btn5.addEventListener('click', function(event){
    btn5.classList.toggle('click');
    btn2.classList.remove('click');
    btn3.classList.remove('click');
    btn4.classList.remove('click');
    btn1.classList.remove('click');

//logic for opening and closing on click event
    if(!par5.classList.contains('visible')){
        par5.classList.add('visible');
        //function for checking if the other paragraphs are visible and making them invisible by removing class of 'visible'
        function check1 () {if (par2.classList.contains('visible')||par3.classList.contains('visible')||par4.classList.contains('visible')||par1.classList.contains('visible')) {
            par2.classList.remove('visible');
            par3.classList.remove('visible');
            par4.classList.remove('visible');
            par1.classList.remove('visible');
            }
        }
        check1();
    }
    else if (par5.classList.contains('visible')) {
        par5.classList.remove('visible')
       // check();
    }
})

window.addEventListener('resize', ()=> {document.location.reload(false);}) 

function ChangeImg(){
    var   main =document.getElementById('container1'),
          body =document.getElementById('main'),
          myBox=document.getElementById('box'),
          right = document.getElementById('right'),
          left = document.getElementById('left'),
          mobileImg = document.createElement('img'),
          mobileImg1 =document.createElement('img');
          
          
          mobileImg.src = "./images/illustration-woman-online-mobile.svg";
          mobileImg.style.width = '52%';
          mobileImg.style.zIndex = '1';
          mobileImg.style.position = 'absolute';
          mobileImg.style.left = '18vw';
          mobileImg.style.top = '-20vw';
          
          mobileImg1.src = "./images/bg-pattern-mobile.svg";
          mobileImg1.style.width = '52%';
          mobileImg1.style.zIndex = '2';
          mobileImg1.style.position = 'absolute';
          mobileImg1.style.left = '18vw';
          mobileImg1.style.top = '5vw';

          console.log(mobileImg1)
          console.log(mobileImg)
          console.log(body);

        //window check function
        function widthChk() {
           // console.log('hi')
            return window.innerWidth;
        }

        function hgtChk() {
            return window.innerHeight;
        }
            
        

        if (widthChk() < 430) {
            //console.log("hello")
            main.removeChild(left);
            main.appendChild(mobileImg);
            main.appendChild(mobileImg1);
            body.removeChild(myBox);

            right.style.position='relative';
            right.style.top ='15vh';
        }

        else if(widthChk() > 430) {
            main.removeChild(mobileImg);
        }

        else if (hgtChk() < 649 ) {
            mobileImg.style.height = '15vh';
        }
  
}

//calling the function
window.onload= ChangeImg();
        

/*
//logic for changing background in mobile
function ChangeImg(){
    var main =document.getElementById('main'),
          mobileImg = document.createElement('img');
          
          mobileImg.src = "./images/illustration-woman-online-mobile.svg";
          mobileImg.style.width = '20vh';
          mobileImg.style.zIndex = '1';
          mobileImg.style.position = 'relative';
          mobileImg.style.left = '-50%'
          mobileImg.style.top = '-43.5%'
      
        //console.log(window.innerWidth);

        //window check function
        function widthChk() {
           // console.log('hi')
            return window.innerWidth;
        }
            
        
         widthChk();

        if (widthChk() < 430) {
            //console.log("hello")
            main.appendChild(mobileImg);
        }

        else if(widthChk() > 430) {
            main.removeChild(mobileImg);
        }
  
}*/

/*
window.addEventListener('resize', ()=> {
    return ChangeImg()
})*/
/*
//logic for making background responsive
window.addEventListener('resize', ()=> {

        var main =document.getElementById('main'),
          mobileImg = document.createElement('img');
          mobileImg.src = "./images/illustration-woman-online-mobile.svg";

        function widthChk() {
            console.log('hiiiii')
            return window.innerWidth;
        } 
        
        if (widthChk() < 430) {
            console.log("helloooooo")
            main.appendChild(mobileImg);
        }

        else if(widthChk() > 430) {
            main.removeChild(mobileImg);
        }
    })


*/





