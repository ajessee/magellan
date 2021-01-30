export function navbarModule() {
  document.addEventListener("DOMContentLoaded", function(){
    console.log('NavBar Module')
    const navbarHeader = document.getElementById('navbar-header')
    let navbarHeaderHeight = navbarHeader.offsetHeight
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
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const parallax1 = document.getElementById('parallax-1')
    const parallax2 = document.getElementById('parallax-2')
    const parallax3 = document.getElementById('parallax-3')

    
    const handleResize = function(navbarHeader, navbarHeaderHeight, heroSection){
      navbarHeaderHeight = navbarHeader.offsetHeight;
      heroSection.style.marginTop = navbarHeaderHeight + 'px';
      heroSection.style.height = (window.innerHeight - navbarHeaderHeight) + 'px'
    }
    
    window.addEventListener('resize', handleResize.bind(null, navbarHeader, navbarHeaderHeight, heroSection));
    
    handleResize(navbarHeader, navbarHeaderHeight, heroSection)

    mobileMenuButton.addEventListener('click', function(e){
      e.preventDefault();
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('md:block')
    })
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
      aboutUsSection.scrollIntoView({behavior: "smooth", block: "start"})
    })
    differentLink.addEventListener('click', function(e){
      e.preventDefault();
      differentSection.scrollIntoView({behavior: "smooth", block: "center"})
    })
    faqLink.addEventListener('click', function(e){
      e.preventDefault();
      faqSection.scrollIntoView({behavior: "smooth", block: "center"})
    })
    testimonialsLink.addEventListener('click', function(e){
      e.preventDefault();
      testimonialsSection.scrollIntoView({behavior: "smooth"})
    })

  });

}

