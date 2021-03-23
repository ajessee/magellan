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
        gtag('event', 'autocomplete_field_filled')
      })

      nameField.addEventListener('change', function(e){
        gtag('event', 'name_field_filled')
      })

      phoneField.addEventListener('change', function(e){
        gtag('event', 'phone_field_filled')
      })

      leadForm.addEventListener('submit', function(e){
        gtag('event', 'get_offer_form_submitted')
      })

      getOfferButtons.forEach(button => {
        button.addEventListener('click', function(e){
          gtag('event', 'prelim_get_offer_button')
        })
      })
    }

  })

}