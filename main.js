let meaningText = document.querySelector(".Meaning");

let finalM = document.querySelector(".finalM")

window.addEventListener("scroll",function() {
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value > 750) {
        meaningText.style.animation = "disappear 1s ease-out forwards";

    } else if (value < 300) {
        meaningText.style.animation = "disappear 1s ease-out forwards";
    } else {
        meaningText.style.animation = "slide 1s ease-out";
    }

    if( value > 1800 ) {
        finalM.style.animation="unappear 0.5s ease-out forwards";
    } else if (value < 1250){
        finalM.style.animation="unappear 0.5s ease-out forwards";
    } else{
        finalM.style.animation="appear 0.5s ease-out";
    }
    
});
