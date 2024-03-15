function showSection(sectionId) {
    // Hide all sections and reset opacity
    document.querySelectorAll('.content-section').forEach(function(section) {
        section.style.display = 'none';
        section.style.opacity = 0;
    });

    // Use setTimeout to allow the display change to take effect before fading in
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
    setTimeout(() => selectedSection.style.opacity = 1, 10); // Short delay before starting the opacity transition
}




