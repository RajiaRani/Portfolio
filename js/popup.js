/* ------------------------- Portfolio Item Details Popup ---------------------------------- */

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")) {
       // console.log("View");
       togglePortfolioPopup();
       document.querySelector(".portfolio-popup").scrollTo(0,0);
       portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main-content").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    //console.log(e.target);
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem){
  //console.log(portfolioItem);
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}