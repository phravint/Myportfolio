// Smooth scrolling for 'Read More' buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load particles.js configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded');
});

// Add hover effects for skill boxes
document.querySelectorAll('.skill-box, .project').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.05)';
        box.style.boxShadow = '0 0 15px rgba(0, 255, 204, 0.7)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = 'none';
    });
});


// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const formData = new FormData(this);

//     fetch('send_mail.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('responseMessage').innerHTML = '<p>Email sent successfully!</p>';
//         this.reset(); // Reset the form after successful submission
//     })
//     .catch(error => {
//         document.getElementById('responseMessage').innerHTML = '<p>Failed to send email. Please try again.</p>';
//         console.error('Error:', error);
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');

    function handleScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.8) {
            aboutSection.classList.add('show');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-in-view');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
