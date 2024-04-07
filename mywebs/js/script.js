function menuDropDown(){
    var micon = document.querySelector(".menu-icon");
    var navList = document.querySelector("#main-navlist");
    
       if(navList.style.height != "160px"){
       navList.style.height = "160px"
      } 
    else{
       navList.style.height = "0px"
    }
   
}

    var sldb1 = document.querySelector(".psi1");
    var sldb2 = document.querySelector(".psi2");
    var sldb3 = document.querySelector(".psi3");
    var sld1 = document.querySelector(".prev1");
    var sld2 = document.querySelector(".prev2");
    var sld3 = document.querySelector(".prev3");

     function slide1(){
        var sld1 = document.querySelector(".prev1");
        var sld2 = document.querySelector(".prev2");
        var sld3 = document.querySelector(".prev3");
    

        sld1.style.display = "block";
        sld2.style.display = "none";
        sld3.style.display = "none";
    }
    function slide2(){
        var sld1 = document.querySelector(".prev1");
        var sld2 = document.querySelector(".prev2");
        var sld3 = document.querySelector(".prev3");    

        sld1.style.display = "none";
        sld2.style.display = "block";
        sld3.style.display = "none";
    }
    function slide3(){
        var sld1 = document.querySelector(".prev1");
        var sld2 = document.querySelector(".prev2");
        var sld3 = document.querySelector(".prev3");
    
        sld1.style.display = "none";
        sld2.style.display = "none";
        sld3.style.display = "block";
    }

    function slidingShowForNp(){
        var sld1 = document.querySelector(".prev1");
        var sld2 = document.querySelector(".prev2");
        var sld3 = document.querySelector(".prev3");
               if(sld1.style.display != "none"){
                sld1.style.display = "none";
                sld2.style.display = "block";
                sld3.style.display = "none";

                document.querySelector('.psi2').style.color = 'white'; document.querySelector('.psi1').style.color = 'rgb(167, 145, 145)'; document.querySelector('.psi3').style.color = 'rgb(167, 145, 145)';
               }
               else if(sld3.style.display != "none"){
                sld3.style.display = "none";
               sld2.style.display = "none";
               sld1.style.display = "block";

               document.querySelector('.psi1').style.color = 'white'; document.querySelector('.psi2').style.color = 'rgb(167, 145, 145)'; document.querySelector('.psi3').style.color = 'rgb(167, 145, 145)';
              }
               else if(sld2.stylsplay != "none"){
                sld1.style.display = "none";
                sld2.style.display = "none";
                sld3.style.display = "block";

                document.querySelector('.psi3').style.color = 'white'; document.querySelector('.psi2').style.color = 'rgb(167, 145, 145)'; document.querySelector('.psi1').style.color = 'rgb(167, 145, 145)';
               }
               
    }

    let intervalId = setInterval(slidingShowForNp, 5000);

    //This function sends the product ID to the order form

function orderNow(value,cost){
    document.querySelector("#id-name").value = value;
    document.querySelector('.order-form-sub-page').style.display = 'block';
    document.querySelector('.total-cost').innerText = cost;
    document.querySelector('#total-cost').value = cost + " " + "ETB";
    document.querySelector('.cos-for-1piece').innerText = cost;
     
}
function quntityIn(){
    let cost = document.querySelector('.cos-for-1piece').innerText;
    let newCost = Number(cost);
   let quan =  document.querySelector('#pro-quan').value;
   let quans = Number(quan);
    var total = quans * newCost;
    document.querySelector('.total-cost').innerText = total;
    document.querySelector('#total-cost').value = total + "" + " ETB";
}


