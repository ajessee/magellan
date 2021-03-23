export function resizePageModule() {

  document.addEventListener("turbolinks:load", function(){
    console.log('Resize Page Module')
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
    const howItWorksSection = document.getElementById('stress-free-selling-section')
    const heroSection = document.getElementById('landing-section')
    const aboutUsSection = document.getElementById('about-us-section')
    const differentSection = document.getElementById('what-makes-us-different')
    const testimonialsSection = document.getElementById('testimonials-section')

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

    if (homeLandingPage) {
      console.log('Home Page Loaded')
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

  });

}

