/* ============= TYPING ANIMATION =============== */
let typed = new Typed(".typing", {
    strings : ["","web deginer", "Web Developer ", "Software Eng"],
    typeSpeed : 100,
    BackSpeed : 60,
    loop : true,
});



/* ----------------------- About Tabs --------------------- */
const tabContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabContainer.addEventListener("click", handleTabClick);



function handleTabClick(e) {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
      tabContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const target = e.target.getAttribute("data-target");
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
    }
  }

  


