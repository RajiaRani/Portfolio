/* ============= TYPING ANIMATION =============== */
let typed = new Typed(".typing", {
    strings : ["","web deginer", "Web Developer ", "Software Eng"],
    typeSpeed : 100,
    BackSpeed : 60,
    loop : true,
});

/* =============================== 
    Active Section 
 ============================================= */
document.addEventListener("click", (e)=> {
    if(e.target.classList.contains("link-item")&& e.target.hash !== ""){
        const hash = e.target.hash;
        //console.log(hash);
        document.querySelector(".overlay").classList.add("active"); // activate overlay to prevent multiple clicks
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            //console.log("true");
            toggleNavbar();
        } else {
            //console.log("false");
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=> {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500)
    }
});