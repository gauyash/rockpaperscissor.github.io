let btnEls=document.querySelectorAll(".btn");
let playerHand=document.querySelector(".player-hands img");
let compHand=document.querySelector(".comp-hands img");
let playerPoints=document.querySelector(".player-points");
let compPoints=document.querySelector(".comp-points");



const rps=["rock","paper","scissors"];

function random(){
    return Math.floor(Math.random()*rps.length);
}


let player="";
let comp="";

btnEls.forEach((btns)=>{
    btns.addEventListener("click",()=>{
        playerHand.src=`img/rock.jpg`;
        compHand.src=`img/rock.jpg`;
        playerHand.classList.add("addAni1");
        compHand.classList.add("addAni2");
        setTimeout(()=>{
            comp=rps[random()];
            player=btns.textContent.toLowerCase();
            playerHand.src=`img/${player}.jpg`;
            compHand.src=`img/${comp}.jpg`;
            playerHand.classList.remove("addAni1");
            compHand.classList.remove("addAni2");
            
            check();
        },2000)


    })
})


function check(){
    switch (player) {
        case "rock":
            if(comp=="rock"){
                console.log("tie");
            }
            else if(comp=="paper"){
                compPoints.textContent++;
                
            }
            else{
                playerPoints.textContent++;
            }
            break;
    
        case "paper":
            if(comp=="rock"){
                playerPoints.textContent++;
            }
            else if(comp=="paper"){
                console.log("tie");
            }
            else{
                compPoints.textContent++;
            }
            break;
    
        case "scissors":
            if(comp=="rock"){
                compPoints.textContent++;
            }
            else if(comp=="paper"){
                playerPoints.textContent++;
            }
            else{
                console.log("tie");
            }
            break;
    
        default:
            break;
    }
}