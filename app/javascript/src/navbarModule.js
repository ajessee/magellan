export function navbarModule() {

  document.addEventListener("turbolinks:load", function(){
    console.log('Nav Bar Module')
    const homeLandingPage = document.getElementById('home-route')
    const faqLandingPage = document.getElementById('faq-route')
    const leadContactInfoPage = document.getElementById('lead-create-route')
    const leadContactDetailsPage = document.getElementById('lead-update-route')
    const navbarHeader = document.getElementById('navbar-header')
    const footerSection = document.getElementById('footer-section')
    let navbarHeaderHeight = navbarHeader.offsetHeight
    let footerSectionHeight = footerSection.offsetHeight
    const html = document.querySelector('html') 
    const mainLink = document.getElementById('main-link')
    const howItWorksLink = document.getElementById('how-it-works-link')
    const aboutUsLink = document.getElementById('about-us-link')
    const differentLink = document.getElementById('different-link')
    const faqLink = document.getElementById('faq-link')
    const testimonialsLink = document.getElementById('testimonials-link')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const howItWorksSection = document.getElementById('stress-free-selling-section')
    const heroSection = document.getElementById('landing-section')
    const aboutUsSection = document.getElementById('about-us-section')
    const differentSection = document.getElementById('what-makes-us-different')
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
    } else if (leadContactInfoPage) {
      console.log('Lead Contact Info Page Loaded')
      const leadContactDetailsSection = document.getElementById('lead-contact-info-section')
      leadContactDetailsSection.style.height = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      window.addEventListener('resize', handleResize.bind(null, navbarHeader, navbarHeaderHeight, leadContactDetailsSection, false, []));
      handleResize(navbarHeader, navbarHeaderHeight, leadContactDetailsSection, false, [])
    } else if (leadContactDetailsPage) {
      console.log('Lead Contact Details Page Loaded')
      const leadContactInfoSection = document.getElementById('lead-contact-details-section')
      leadContactInfoSection.style.height = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      window.addEventListener('resize', handleResize.bind(null, navbarHeader, navbarHeaderHeight, leadContactInfoSection, false, []));
      handleResize(navbarHeader, navbarHeaderHeight, leadContactInfoSection, false, [])
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
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage) {
        Turbolinks.visit('/')
      }
    })
    howItWorksLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        howItWorksSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage) {
        Turbolinks.visit('/#stress-free-selling-section')
      }
    })
    aboutUsLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        aboutUsSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage) {
        Turbolinks.visit('/#about-us-section')
      }
    })
    differentLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        differentSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage) {
        Turbolinks.visit('/#what-makes-us-different')
      }
    })
    testimonialsLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        testimonialsSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage) {
        Turbolinks.visit('/#testimonials-section')
      }
      
    })
  });

}

