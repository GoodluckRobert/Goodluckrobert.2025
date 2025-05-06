document.addEventListener('DOMContentLoaded', function() {
    // Example: Adding a simple animation to the header on scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header_container');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Example: Adding functionality to the "View More" buttons
    const viewButtons = document.querySelectorAll('.view-button');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('More details coming soon!'); // Replace with actual functionality
        });
    });
});