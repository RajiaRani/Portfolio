let infoLinks = document.querySelectorByClassName("info-links");
let bodyContents = document.querySelectorByClassName("body-content");
function opentab(tabname){
    for(let infoLink of infoLinks){
        infoLink.classList.remove("active-link");

        for(bodyContent of bodyContents){
            bodyContent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
}