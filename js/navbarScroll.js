/* =======================================
   * Navbar links active state on scroll
   ========================================== */
   const navbarlinks = document.querySelectorAll("#navbar .scrollto");
  const updateNavbarLinksActive = () =>{
    let position = window.scrollY+200;

    navbarlinks.forEach( link => {
      const sectionSelector = link.getAttribute("href");
      if( !sectionSelector.startsWith("#") || sectionSelector === "#"){
        return;
      }
      const section = document.querySelector(sectionSelector);
      if(!section){
        return;
      }
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
// Attach the updateNavbarLinksActive function to scroll and load events
window.addEventListener('scroll', updateNavbarLinksActive);
window.addEventListener('load', updateNavbarLinksActive);
