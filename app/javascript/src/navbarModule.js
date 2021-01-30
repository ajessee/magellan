export function navbarModule() {

  document.addEventListener("turbolinks:load", function(){
    console.log('Nav Bar Module')
    const homeLandingPage = document.getElementById('home-route')
    const faqLandingPage = document.getElementById('faq-route')
    const navbarHeader = document.getElementById('navbar-header')
    let navbarHeaderHeight = navbarHeader.offsetHeight
    const html = document.querySelector('html') 
    const mainLink = document.getElementById('main-link')
    const howItWorksLink = document.getElementById('how-it-works-link')
    const aboutUsLink = document.getElementById('about-us-link')
    const differentLink = document.getElementById('different-link')
    const faqLink = document.getElementById('faq-link')
    const testimonialsLink = document.getElementById('testimonials-link')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const howItWorksSection = document.getElementById('how-it-works-section')
    const heroSection = document.getElementById('hero-section')
    const aboutUsSection = document.getElementById('about-us-section')
    const differentSection = document.getElementById('different-section')
    const testimonialsSection = document.getElementById('testimonials-section')
    const parallax1 = document.getElementById('parallax-1')
    const parallax2 = document.getElementById('parallax-2')
    const parallax3 = document.getElementById('parallax-3')

    const handleResize = function(navbarHeader, navbarHeaderHeight, section, isMainSection, scrollMarginSections){
      navbarHeaderHeight = navbarHeader.offsetHeight;
      let navbarHeaderHeightString = navbarHeaderHeight + 'px';
      section.style.marginTop = navbarHeaderHeightString
      if (isMainSection) {
        section.style.height = (window.innerHeight - navbarHeaderHeight) + 'px';
      }
      if (scrollMarginSections) {
        scrollMarginSections.forEach(scrollSection => {
          scrollSection.style.scrollMargin = navbarHeaderHeightString
        });
      }
    }

    const toggleMobileMenu = function() {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('md:block')
    }


    if (homeLandingPage) {
      console.log('Home Page Loaded')
      window.addEventListener('resize', handleResize.bind(null, navbarHeader, navbarHeaderHeight, heroSection, true, [howItWorksSection, aboutUsSection, differentSection, testimonialsSection]));
      handleResize(navbarHeader, navbarHeaderHeight, heroSection, true, [howItWorksSection, aboutUsSection, differentSection, testimonialsSection])

    } else if (faqLandingPage) {
      console.log('FAQ Page Loaded')
      const faqSection = document.getElementById('faq-section')
      window.addEventListener('resize', handleResize.bind(null, navbarHeader, navbarHeaderHeight, faqSection, false, []));
      handleResize(navbarHeader, navbarHeaderHeight, faqSection, false, [])
    }

    mobileMenuButton.addEventListener('click', function(e){
      e.preventDefault();
      toggleMobileMenu();
    })

    mainLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        html.scrollIntoView({behavior: "smooth", block: "start"})
        toggleMobileMenu();
      } else if (faqLandingPage) {
        Turbolinks.visit('/')
      }
    })
    howItWorksLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        howItWorksSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage) {
        Turbolinks.visit('/#how-it-works-section')
      }
    })
    aboutUsLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        aboutUsSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage) {
        Turbolinks.visit('/#about-us-section')
      }
    })
    differentLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        differentSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage) {
        Turbolinks.visit('/#different-section')
      }
    })
    testimonialsLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        testimonialsSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage) {
        Turbolinks.visit('/#testimonials-section')
      }
      
    })
  });

}

