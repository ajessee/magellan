export function navbarModule() {

  document.addEventListener("turbolinks:load", function(){
    console.log('Nav Bar Module')
    const homeLandingPage = document.getElementById('home-route')
    const faqLandingPage = document.getElementById('faq-route')
    const leadContactInfoPage = document.getElementById('lead-create-route')
    const leadContactDetailsPage = document.getElementById('lead-update-route')
    const leadCapturedPage = document.getElementById('lead-captured-route')
    const badRequestPage = document.getElementById('bad-request-route')
    const forbiddenPage = document.getElementById('forbidden-route')
    const serverErrorPage = document.getElementById('server-error-route')
    const notFoundPage = document.getElementById('not-found-route')
    const unauthorizedPage = document.getElementById('unauthorized-route')
    const navbarHeader = document.getElementById('navbar-header')
    const footerSection = document.getElementById('footer-section')
    let navbarHeaderHeight = navbarHeader.offsetHeight
    let footerSectionHeight = footerSection.offsetHeight
    const html = document.querySelector('html') 
    const mainLink = document.getElementById('main-link')
    const howItWorksLink = document.getElementById('how-it-works-link')
    const aboutUsLink = document.getElementById('about-us-link')
    const differentLink = document.getElementById('different-link')
    const testimonialsLink = document.getElementById('testimonials-link')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const howItWorksSection = document.getElementById('stress-free-selling-section')
    const heroSection = document.getElementById('landing-section')
    const aboutUsSection = document.getElementById('about-us-section')
    const differentSection = document.getElementById('what-makes-us-different')
    const testimonialsSection = document.getElementById('testimonials-section')

    const handleResize = function(navbarHeader, section, isMainSection, scrollMarginSections){
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
      handleResize(navbarHeader, heroSection, true, [howItWorksSection, aboutUsSection, differentSection, testimonialsSection])
    } else if (faqLandingPage) {
      console.log('FAQ Page Loaded')
      const faqSection = document.getElementById('faq-section')
      faqSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, faqSection, false, [])
    } else if (leadContactInfoPage) {
      console.log('Lead Contact Info Page Loaded')
      const leadContactInfoSection = document.getElementById('lead-contact-info-section')
      leadContactInfoSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, leadContactInfoSection, false, [])
    } else if (leadContactDetailsPage) {
      console.log('Lead Contact Details Page Loaded')
      const leadContactDetailsSection = document.getElementById('lead-contact-details-section')
      leadContactDetailsSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      window.addEventListener('resize', handleResize.bind(null, navbarHeader, leadContactDetailsSection, false, []));
      handleResize(navbarHeader, leadContactDetailsSection, false, [])
    } else if (leadCapturedPage) {
      console.log('Thank You Page Loaded')
      const thankYouSection = document.getElementById('thank-you-section')
      thankYouSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, thankYouSection, false, [])
    } else if (badRequestPage) {
      console.log('Bad Request')
      const badRequestSection = document.getElementById('bad-request-section')
      badRequestSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, badRequestSection, false, [])
    } else if (forbiddenPage) {
      console.log('Forbidden Request')
      const forbiddenSection = document.getElementById('forbidden-section')
      forbiddenSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, forbiddenSection, false, [])
    } else if (serverErrorPage) {
      console.log('Server Error')
      const serverErrorSection = document.getElementById('server-error-section')
      serverErrorSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, serverErrorSection, false, [])
    } else if (notFoundPage) {
      console.log('Not Found Request')
      const notFoundSection = document.getElementById('not-found-section')
      notFoundSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, notFoundSection, false, [])
    } else if (unauthorizedPage) {
      console.log('Unauthorized Request')
      const unauthorizedSection = document.getElementById('unauthorized-section')
      unauthorizedSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      handleResize(navbarHeader, unauthorizedSection, false, [])
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
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage || leadCapturedPage || badRequestPage || forbiddenPage || serverErrorPage || notFoundPage || unauthorizedPage) {
        Turbolinks.visit('/')
      }
    })
    howItWorksLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        howItWorksSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage || leadCapturedPage || badRequestPage || forbiddenPage || serverErrorPage || notFoundPage || unauthorizedPage) {
        Turbolinks.visit('/#stress-free-selling-section')
      }
    })
    aboutUsLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        aboutUsSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage || leadCapturedPage || badRequestPage || forbiddenPage || serverErrorPage || notFoundPage || unauthorizedPage) {
        Turbolinks.visit('/#about-us-section')
      }
    })
    differentLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        differentSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage || leadCapturedPage || badRequestPage || forbiddenPage || serverErrorPage || notFoundPage || unauthorizedPage) {
        Turbolinks.visit('/#what-makes-us-different')
      }
    })
    testimonialsLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        testimonialsSection.scrollIntoView({behavior: "smooth"})
        toggleMobileMenu();
      } else if (faqLandingPage || leadContactInfoPage || leadContactDetailsPage || leadCapturedPage || badRequestPage || forbiddenPage || serverErrorPage || notFoundPage || unauthorizedPage) {
        Turbolinks.visit('/#testimonials-section')
      }
      
    })
  });

}

