let share_bnt = document.querySelector(".active-state");
let share_icon = document.querySelector(".share-icon");

share_icon.addEventListener("click", function(){

        if(share_bnt.attributes[1].value === "on"){
            share_bnt.style.opacity = "0";
            share_icon.style.backgroundColor = "hsl(210, 46%, 95%)";
            share_icon.style.filter = "unset";
            share_bnt.attributes[1].value = "off";
        }
        else if(share_bnt.attributes[1].value === "off"){
            share_bnt.style.opacity = "1";
            share_icon.style.backgroundColor = "hsl(210deg 15.61% 17.57%)";
            share_icon.style.filter = "brightness(3)";
            share_bnt.attributes[1].value = "on";
        }
});
