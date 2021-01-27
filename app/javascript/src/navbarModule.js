export function navbarModule() {
  document.addEventListener("DOMContentLoaded", function(){
    console.log('NavBar Module')
    const navbarHeader = document.getElementById('navbar-header')
    const navbarHeaderHeight = navbarHeader.offsetHeight
    const html = document.querySelector('html') 
    const mainLink = document.getElementById('main-link')
    const heroSection = document.getElementById('hero-section')
    const howItWorksLink = document.getElementById('how-it-works-link')
    const howItWorksSection = document.getElementById('how-it-works-section')
    const aboutUsLink = document.getElementById('about-us-link')
    const aboutUsSection = document.getElementById('about-us-section')
    const differentLink = document.getElementById('different-link')
    const differentSection = document.getElementById('different-section')
    const faqLink = document.getElementById('faq-link')
    const faqSection = document.getElementById('faq-section')
    const testimonialsLink = document.getElementById('testimonials-link')
    const testimonialsSection = document.getElementById('testimonials-section')
    const contactLink = document.getElementById('contact-link')
    const contactSection = document.getElementById('contact-section')
    let previousScrollPostion = window.pageYOffset

    // heroSection.style.marginTop = navbarHeaderHeight + 'px';

    mainLink.addEventListener('click', function(e){
      e.preventDefault();
      html.scrollIntoView({behavior: "smooth", block: "start"})
    })
    howItWorksLink.addEventListener('click', function(e){
      e.preventDefault();
      howItWorksSection.scrollIntoView({behavior: "smooth", block: "center"})
    })
    aboutUsLink.addEventListener('click', function(e){
      e.preventDefault();
      aboutUsSection.scrollIntoView({behavior: "smooth", block: "center"})
    })
    differentLink.addEventListener('click', function(e){
      e.preventDefault();
      differentSection.scrollIntoView({behavior: "smooth", block: "center"})
    })
    faqLink.addEventListener('click', function(e){
      e.preventDefault();
      faqSection.scrollIntoView({behavior: "smooth", block: "center"})
    })
    // testimonialsLink.addEventListener('click', function(e){
    //   e.preventDefault();
    //   testimonialsSection.scrollIntoView({behavior: "smooth"})
    // })
    // contactLink.addEventListener('click', function(e){
    //   e.preventDefault();
    //   contactSection.scrollIntoView({behavior: "smooth"})
    // })

    document.addEventListener('scroll', function(e) {
      let currentScrollPostion = window.pageYOffset;
      // debugger
      if (currentScrollPostion > 0) {

        navbarHeader.classList.remove('bg-transparent')
        navbarHeader.classList.add('bg-white', 'shadow')
      } else {
        
        navbarHeader.classList.remove('bg-white', 'shadow')
        navbarHeader.classList.add('bg-transparent')
      }
      previousScrollPostion = currentScrollPostion
    });
  });

}

