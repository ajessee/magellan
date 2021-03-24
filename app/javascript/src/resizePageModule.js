export function resizePageModule() {

  document.addEventListener("turbolinks:load", function(){

    console.log('Resize Page Module')

    const navbarHeader = document.getElementById('navbar-header')
    const navbarHeaderHeight = navbarHeader.offsetHeight
    const parallaxSections = document.querySelectorAll('.parallax')
    const mainRouteSections = document.querySelectorAll("div[id$='route']")
    const subSections = document.querySelectorAll("section[id$='section']")

    mainRouteSections.forEach(function(section){
      let navbarHeaderHeightString = navbarHeaderHeight + 'px';
      section.style.marginTop = navbarHeaderHeightString
    })

    subSections.forEach(function(section){
      let navbarHeaderHeightString = navbarHeaderHeight + 'px';
      section.style.scrollMargin = navbarHeaderHeightString
    })

    parallaxSections.forEach(function(section){
      let navbarHeaderHeightString = navbarHeaderHeight + 'px';
      section.style.backgroundPosition = `center ${navbarHeaderHeightString}`
      if (section.id == 'landing-section') {
        let formContainer = section.querySelector('#landing-form-container')
        formContainer.style.position = 'absolute'
        formContainer.style.top = navbarHeaderHeightString
      }
    })

  });

}

