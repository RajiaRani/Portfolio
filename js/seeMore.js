// Get all "See More" buttons
document.addEventListener("DOMContentLoaded", function() {
    const seeMoreLinks = document.querySelectorAll(".seeMore");

    seeMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag

            const moreContent = this.previousElementSibling; // Get the previous sibling, which is the hidden content

            if (moreContent.style.display === "none" || moreContent.style.display === "") {
                moreContent.style.display = "block";
                this.textContent = "See Less";
            } else {
                moreContent.style.display = "none";
                this.textContent = "See More";
            }
        });
    });
});
