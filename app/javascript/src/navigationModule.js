export function navigationModule() {

  document.addEventListener("turbolinks:load", function(){

    console.log('Navigation Module')

    const homeLandingPage = document.getElementById('home-route')
    const html = document.querySelector('html') 
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const getOfferButtons = document.querySelectorAll('.get-offer-buttons')
    const mainGetOfferButton = document.getElementById('final-lead-form-submit')
    const pageLinks = document.querySelectorAll("a[id$='link']")

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

    const toggleMobileMenu = function() {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('md:block')
    }

    if (homeLandingPage) {
      console.log('Home Page Loaded')
      const phoneInput = document.getElementById('lead_phone')
      phoneInput.setCustomValidity('Please enter a phone number so we can call you with your offer!')
      phoneInput.addEventListener('input', formatPhoneNumber)
    } 
    
    mobileMenuButton.addEventListener('click', function(e){
      e.preventDefault();
      toggleMobileMenu();
    })

    pageLinks.forEach(function(link){
      link.addEventListener('click', function(e){
        let targetElement = e.target
        if (e.target.tagName !== 'A') {
          targetElement = e.target.closest('a')
        }
        if (targetElement.id.includes('faq')) {
          return
        }
        e.preventDefault();
        let sectionName = targetElement.id.replace('link', 'section')
        let sectionPage = targetElement.id.includes('home') ? document.querySelector('html') : document.getElementById(sectionName)
        let sectionPath = targetElement.id.includes('home') ? `/` : `/#${sectionName}`
        if (homeLandingPage) {
          sectionPage.scrollIntoView({behavior: "smooth", block: "start"})
        } else {
          Turbolinks.visit(sectionPath)
        }
      })
    })

    getOfferButtons.forEach(button => {
      button.addEventListener('click', function(e){
        e.preventDefault();
        if (homeLandingPage) {
          setTimeout(function() {
            mainGetOfferButton.click()
        }, 1000);
          html.scrollIntoView({behavior: "smooth", block: "start"})
        } else {
          Turbolinks.visit('/')
        }
      })
    })

  });

}

