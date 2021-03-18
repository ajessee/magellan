export function navbarModule() {

  document.addEventListener("turbolinks:load", function(){
    console.log('Nav Bar Module')
    const homeLandingPage = document.getElementById('home-route')
    const faqLandingPage = document.getElementById('faq-route')
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

    const formatPhoneNumber = function(e) {
      e.target.setCustomValidity('')
      let phone = e.target.value.replace(/\D/g, '');
      if (e.target.value.length > 14) {
        e.target.value = e.target.value.slice(0, -1)
        phone = e.target.value
      }
      const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
      if (match) {
        phone = `(${match[1]}${match[2] ? ') ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
      }
      e.target.value = phone
      if (!e.target.validity.valid) {
        if (e.target.value.length == 0) {
          e.target.setCustomValidity('Please enter a phone number so we can call you with your offer!')
        } else {
          e.target.setCustomValidity('Please enter a valid phone number so we can call you with your offer!')
        }
      } 
    }

    const resizePage = function(navbarHeader, section, isMainSection, scrollMarginSections){
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
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
      const phoneInput = document.getElementById('lead_phone')
      phoneInput.setCustomValidity('Please enter a phone number so we can call you with your offer!')
      phoneInput.addEventListener('input', formatPhoneNumber)
      resizePage(navbarHeader, heroSection, true, [howItWorksSection, aboutUsSection, differentSection, testimonialsSection])
    } else if (faqLandingPage) {
      console.log('FAQ Page Loaded')
      const faqSection = document.getElementById('faq-section')
      faqSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      resizePage(navbarHeader, faqSection, false, [])
    } else if (leadCapturedPage) {
      console.log('Thank You Page Loaded')
      const thankYouSection = document.getElementById('thank-you-section')
      thankYouSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      resizePage(navbarHeader, thankYouSection, false, [])
    } else if (badRequestPage) {
      console.log('Bad Request')
      const badRequestSection = document.getElementById('bad-request-section')
      badRequestSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      resizePage(navbarHeader, badRequestSection, false, [])
    } else if (forbiddenPage) {
      console.log('Forbidden Request')
      const forbiddenSection = document.getElementById('forbidden-section')
      forbiddenSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      resizePage(navbarHeader, forbiddenSection, false, [])
    } else if (serverErrorPage) {
      console.log('Server Error')
      const serverErrorSection = document.getElementById('server-error-section')
      serverErrorSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      resizePage(navbarHeader, serverErrorSection, false, [])
    } else if (notFoundPage) {
      console.log('Not Found Request')
      const notFoundSection = document.getElementById('not-found-section')
      notFoundSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      resizePage(navbarHeader, notFoundSection, false, [])
    } else if (unauthorizedPage) {
      console.log('Unauthorized Request')
      const unauthorizedSection = document.getElementById('unauthorized-section')
      unauthorizedSection.style.minHeight = (window.innerHeight - navbarHeaderHeight - footerSectionHeight) + 'px';
      resizePage(navbarHeader, unauthorizedSection, false, [])
    }

    mobileMenuButton.addEventListener('click', function(e){
      e.preventDefault();
      toggleMobileMenu();
    })

    mainLink.addEventListener('click', function(e){
      e.preventDefault();
      if (homeLandingPage) {
        html.scrollIntoView({behavior: "smooth", block: "start"})
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

    // Pulled out now that not using multi page form flow. Here to add back in if needed.
    
    // const formatPrice = function(e) {
    //   if (e.target.value != "") {
    //     e.target.value = e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //   }
    // }

    // const setEmailErrorMessage = function(e) {
    //   e.target.setCustomValidity('')
    //   if (!e.target.validity.valid && e.target.value.length > 0) {
    //     e.target.setCustomValidity('Please enter a valid email address so we can send you your offer!')
    //   } else if (!e.target.validity.valid && e.target.value.length == 0) {
    //     e.target.setCustomValidity('Please enter an email address so we can send you your offer!')
    //   } else if (e.target.validity.valid) {
    //     e.target.setCustomValidity('')
    //   }
    // }

  });

}

