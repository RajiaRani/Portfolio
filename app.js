// let infoLinks = document.getElementsByClassName("info-links");
// let bodyContents = document.getElementsByClassName("body-content");
// function opentab(tabname){
//     for(let infoLink of infoLinks){
//         infoLink.classList.remove("active-link");

//         for(bodyContent of bodyContents){
//             bodyContent.classList.remove("active-tab");
//         }
//         event.currentTarget.classList.add("active-link");
//         document.getElementById(tabname).classList.add("active-tab");
//     }
// }

document.querySelector('.navbar').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault(); // Prevent the default anchor action
        
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.style.display = 'none';
        });
        
        const sectionId = e.target.getAttribute('href').substring(1) + '-content';
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.style.display = 'block'; // Show the selected section
        }
    }
});



function changeContent(page) {
    // Hide all content sections
    document.querySelectorAll('.pageContent').forEach(function(pageContent) {
        pageContent.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(page).style.display = 'block';
}



   
