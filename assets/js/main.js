/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// JavaScript for smooth animation on hover
document.querySelectorAll('.experience__data').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Add a class to trigger the animation on hover
        item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
        // Remove the class after the hover is gone
        item.classList.remove('hovered');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const professions = ["AI/ML Developer", "Software Developer"];
    let currentProfessionIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let element = document.getElementById('typed-profession');
    let speed = 150;
 
    function typeWriter() {
       const fullText = professions[currentProfessionIndex];
       
       if (isDeleting) {
          currentText = fullText.substring(0, currentText.length - 1);
          element.classList.remove('underline'); // Remove underline while deleting
       } else {
          currentText = fullText.substring(0, currentText.length + 1);
          if (currentText === fullText) {
             element.classList.add('underline'); // Add underline when text is fully typed
          }
       }
 
       element.innerHTML = currentText;
 
       if (!isDeleting && currentText === fullText) {
          setTimeout(() => isDeleting = true, 1000);
       } else if (isDeleting && currentText === '') {
          isDeleting = false;
          currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
       }
 
       setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
    }
 
    typeWriter();
 });
 
 document.addEventListener("DOMContentLoaded", function () {
    const requestCVButton = document.getElementById('request-cv-button');
    const closeFormButton = document.getElementById('close-form');
    const cvExplanation = document.getElementById('cv-explanation');
    const emailForm = document.getElementById('email-form');
    const submitEmailButton = document.getElementById('submit-email');
    const emailInput = document.getElementById('cv-email');
    const cvFeedback = document.getElementById('cv-feedback');

    // Show explanation, form, and close button on Request CV click
    requestCVButton.addEventListener('click', function () {
        cvExplanation.classList.add('show-element'); // Show the explanation
        emailForm.style.display = 'flex'; // Show the email input form
        closeFormButton.style.display = 'inline'; // Show the close button
    });

    // Handle form submission to Web3Forms
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        const email = emailInput.value;
        if (validateForm()) {
          const formData = new FormData(emailForm);
          fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              body: formData
          }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    cvFeedback.innerHTML = `Thank you! Your request has been sent. I’ll review it and respond shortly.`;
                    cvFeedback.style.color = 'green';
                    emailForm.reset();
                } else {
                    cvFeedback.innerHTML = `There was an issue with your request. Please try again.`;
                    cvFeedback.style.color = 'red';
                }
            })
            .catch(error => {
                cvFeedback.innerHTML = `Error: Unable to send request. Try again later.`;
                cvFeedback.style.color = 'red';
            });
      } else {
          cvFeedback.innerHTML = `Please fill all fields with valid information.`;
          cvFeedback.style.color = 'red';
      }
    });
    // Close the form and hide explanation on "X" click
    closeFormButton.addEventListener('click', function () {
        cvExplanation.classList.remove('show-element'); // Hide the explanation
        emailForm.style.display = 'none'; // Hide the email input form
        closeFormButton.style.display = 'none'; // Hide the close button
        cvFeedback.innerHTML = ''; // Clear any feedback message
    });

    // Validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    // Add to existing validateEmail function or create new one
    function validateForm() {
      const email = emailInput.value.trim();
      const name = document.querySelector('[name="name"]').value.trim();
      const affiliation = document.querySelector('[name="affiliation"]').value.trim();
      const message = document.querySelector('[name="message"]').value.trim();

      if (!validateEmail(email)) return false;
      if (!name || !affiliation || !message) return false;

    return true;
    }
});




 document.addEventListener("DOMContentLoaded", function () {
    const phrases = ["Artificial Intelligence", "Machine Learning", "Software Development"];
    let currentPhraseIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingElement = document.getElementById('typing-text');
    let speed = 150; // Base speed for typing and deleting
 
    function typeWriter() {
       const fullText = phrases[currentPhraseIndex];
       
       if (isDeleting) {
          currentText = fullText.substring(0, currentText.length - 1); // Remove one character
       } else {
          currentText = fullText.substring(0, currentText.length + 1); // Add one character
       }
 
       typingElement.innerHTML = currentText;
 
       // If the word is fully typed, pause, then start deleting
       if (!isDeleting && currentText === fullText) {
          setTimeout(() => isDeleting = true, 1000); // Pause before deleting
       }
       // If the word is fully deleted, move to the next word
       else if (isDeleting && currentText === '') {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Cycle through phrases
       }
 
       // Set typing speed, slightly faster when deleting
       let typingSpeed = isDeleting ? speed / 2 : speed;
       setTimeout(typeWriter, typingSpeed); // Call the function again with the calculated speed
    }
 
    typeWriter(); // Start the typing animation
 });
 
 
 
  
document.addEventListener('DOMContentLoaded', function() {
    const infoSection = document.querySelector('.info__container');
    const aboutImg = document.querySelector('.about__img');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
  
    observer.observe(infoSection);
    observer.observe(aboutImg);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const certificateLists = document.querySelectorAll('.certificate-list');
  
    // Initially, only show the programming certificates
    certificateLists.forEach(list => {
      if (list.classList.contains('programming')) {
        list.style.display = 'flex'; // Set to flex instead of grid
      } else {
        list.style.display = 'none';
      }
    });
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const category = button.getAttribute('data-category');
        certificateLists.forEach(list => {
          if (list.classList.contains(category)) {
            list.style.display = 'flex'; // Set to flex instead of grid
          } else {
            list.style.display = 'none';
          }
        });
      });
    });
  });
 

  // Add event listener to the form submission
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjust for your header height
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); 

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top', distance: '60px', duration: 2500, delay: 400,
})
sr.reveal('.home__data, .experience, .skills, .contact__container')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.work__card, .services__card', {interval: 100})
sr.reveal('.about__content', {origin: 'right'})
sr.reveal('.about__img', {origin: 'left'})