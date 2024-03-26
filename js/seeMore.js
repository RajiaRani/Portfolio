// Get all "See More" buttons
document.addEventListener('DOMContentLoaded', function () {
    const seeMoreButtons = document.querySelectorAll('.seeMore');
  
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const moreContent = this.previousElementSibling;
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                this.textContent = 'See Less';
            } else {
                moreContent.style.display = 'none';
                this.textContent = 'See More';
            }
        });
    });
  });