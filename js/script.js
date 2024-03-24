/* ============= TYPING ANIMATION =============== */
let typed = new Typed(".typing", {
  strings: ["", "web deginer", "Web Developer ", "Software Eng"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
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





/* ============================== SEE MORE FUNCTION =============================== */
// document.addEventListener('DOMContentLoaded', function () {
//   // Attach click event listeners to all 'see-more-link' elements
//   document.querySelectorAll('.see-more-link').forEach(function(link) {
//       link.addEventListener('click', function(event) {
//           event.preventDefault(); // Prevent the default anchor link behavior

//           // Find the nearest ancestor of the link which is a 'timeline-item'
//           const timelineItem = this.closest('.timeline-item');
//           // Within this 'timeline-item', find the '.more-text' element to toggle
//           const moreText = timelineItem.querySelector('.more-text');

//           // Toggle the visibility of the '.more-text' content
//           if (moreText.style.display === 'none' || moreText.style.display === '') {
//               moreText.style.display = 'block'; // Show the content
//               this.textContent = 'See Less'; // Optionally change the link text to 'See Less'
//           } else {
//               moreText.style.display = 'none'; // Hide the content
//               this.textContent = 'See More'; // Change back the link text to 'See More'
//           }
//       });
//   });
// });