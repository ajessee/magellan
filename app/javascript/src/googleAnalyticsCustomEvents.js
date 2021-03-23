// https://developers.google.com/analytics/devguides/collection/ga4/tag-guide#custom_events
export function googleAnalyticsCustomEvents() {

  document.addEventListener("turbolinks:load", function(){

    const homeLandingPage = document.getElementById('home-route')

    if (homeLandingPage) {

      const getOfferButtons = document.querySelectorAll('.get-offer-buttons')
      const leadForm = document.getElementById('lead-form')
      const autoCompleteField = document.getElementById("autocomplete")
      const nameField = document.getElementById('lead_first_name')
      const phoneField = document.getElementById('lead_phone')

      autoCompleteField.addEventListener('place_changed', function(e){
        gtag('event', 'select_content', {'content_type': 'Address field autocompleted'})
      })

      nameField.addEventListener('change', function(e){
        gtag('event', 'select_content', {'content_type': 'Name field filled out'})
      })

      phoneField.addEventListener('change', function(e){
        gtag('event', 'select_content', {'content_type': 'Phone field filled out'})
      })

      leadForm.addEventListener('submit', function(e){
        gtag('event', 'generate_lead')
      })

      getOfferButtons.forEach(button => {
        button.addEventListener('click', function(e){
          gtag('event', 'select_content', {'content_type': 'Clicked on get offer button in sections'})
        })
      })
    }

  })

}