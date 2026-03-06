/* 
   Notes: All logic is written in Vanilla JS to avoid external dependencies.
*/

// --- MOBILE NAVIGATION LOGIC ---
// Grabbing the menu icon and the actual list of links
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.onclick = function() {
    // Toggling the 'active' class we created in CSS to show/hide the menu
    navMenu.classList.toggle('active');
    
    // Changing the icon so the user knows how to close the menu
    if (navMenu.classList.contains('active')) {
        mobileMenu.innerHTML = "✕"; // Show "X" when open
    } else {
        mobileMenu.innerHTML = "☰"; // Show hamburger when closed
    }
};

// --- USER EXPERIENCE FIX ---
// If a user clicks a link on mobile, the menu should close automatically
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navMenu.classList.remove('active');
        mobileMenu.innerHTML = "☰";
    };
});

// --- FORM HANDLING ---
const form = document.getElementById('internshipForm');
const feedback = document.getElementById('form-feedback');

form.onsubmit = function(e) {
    e.preventDefault(); // Stop the page from refreshing on submit
    
    const name = document.getElementById('name').value;
    
    // Providing immediate feedback so the user knows it worked
    feedback.innerHTML = "Thanks " + name + ", your message was sent locally!";
    feedback.style.color = "#3498db";
    
    form.reset(); // Clear the inputs after success
};

// --- SCROLL TO TOP FEATURE ---
const topBtn = document.getElementById('backToTop');

// Tracking the scroll position to show the button only when needed
window.onscroll = function() {
    // If the user scrolls down more than 300px, show the button
    if (window.pageYOffset > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Smoothly sliding back to the top when clicked
topBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
