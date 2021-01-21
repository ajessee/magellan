document.addEventListener("DOMContentLoaded", function(){
  const howItWorksLink = document.getElementById('how-it-works-link')
  const howItWorksSection = document.getElementById('how-it-works-section')
  const faqLink = document.getElementById('faq-link')
  const faqSection = document.getElementById('faq-section')
  const testimonialsLink = document.getElementById('testimonials-link')
  const testimonialsSection = document.getElementById('testimonials-section')
  const contactLink = document.getElementById('contact-link')
  const contactSection = document.getElementById('contact-section')
  
  howItWorksLink.addEventListener('click', function(e){
    e.preventDefault();
    howItWorksSection.scrollIntoView({behavior: "smooth"})
  })
  faqLink.addEventListener('click', function(e){
    e.preventDefault();
    faqSection.scrollIntoView({behavior: "smooth"})
  })
  testimonialsLink.addEventListener('click', function(e){
    e.preventDefault();
    testimonialsSection.scrollIntoView({behavior: "smooth"})
  })
  contactLink.addEventListener('click', function(e){
    e.preventDefault();
    contactSection.scrollIntoView({behavior: "smooth"})
  })
});

