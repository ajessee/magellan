export function formModule() {

  document.addEventListener("turbolinks:load", function(){
    console.log('Form Module')
    const leadContactDetailsPage = document.getElementById('lead-update-route')
    if (leadContactDetailsPage) {
      const leadRailsForm = document.getElementById('final-lead-form-submit')
      const leadRailsFormSubmitButton = document.getElementById('final-lead-form-submit')
      const handleSubmit = function (attributeMap, mapFormData, e){
        e.preventDefault();
        const railsFormData = new FormData( e.target.parentElement );
        const zohoFormData = mapFormData(railsFormData, attributeMap)

        const XHR = new XMLHttpRequest();

        // Define what happens on successful data submission
        XHR.addEventListener( 'load', function( event ) {
          console.log( 'Yeah! Data sent and response loaded.' );
        } );

        // Define what happens in case of error
        XHR.addEventListener(' error', function( event ) {
          console.log( 'Oops! Something went wrong.' );
        } );

        // Add the required HTTP header for form data POST requests
        
        // Set up our request
        XHR.open( 'POST', 'https://www.zohoapis.com/crm/v2/leads' );
        
        XHR.setRequestHeader( 'Content-Type', 'multipart/form-data; charset=UTF-8' );

        // Send our FormData object; HTTP headers are set automatically
        XHR.send( zohoFormData );
      }
      const attributeMap = {
        first_name: {
          rails: "lead[first_name]",
          zoho: "Name_First"
        },
        last_name: {
          rails: "lead[last_name]",
          zoho: "Name_Last"
        },
        email: {
          rails: "lead[email]",
          zoho: "Email"
        },
        phone: {
          rails: "lead[phone]",
          zoho: "PhoneNumber_countrycode"
        },
        phone: {
          rails: "lead[phone]",
          zoho: "PhoneNumber_countrycode"
        },
        street_number: {
          rails: "lead[street_number]",
          zoho: "Address_AddressLine1"
        },
        route: {
          rails: "lead[route]",
          zoho: "Address_AddressLine1"
        },
        city: {
          rails: "lead[locality]",
          zoho: "Address_City"
        },
        state: {
          rails: "lead[administrative_area_level_1]",
          zoho: "Address_Region"
        },
        country: {
          rails: "lead[country]",
          zoho: "Address_Country"
        },
        zip_code: {
          rails: "lead[postal_code]",
          zoho: "Address_ZipCode"
        },
        sale_time_frame: {
          rails: "lead[sale_time_frame]",
          zoho: "Dropdown"
        },
        sale_target_price: {
          rails: "lead[sale_target_price]",
          zoho: "SingleLine"
        },
        seller_owner: {
          rails: "lead[seller_owner]",
          zoho: "DecisionBox"
        },
        details: {
          rails: "lead[details]",
          zoho: "MultiLine"
        },
        lead_source: {
          rails: "lead[lead_source]",
          zoho: "SingleLine1"
        },
        lead_status: {
          rails: "lead[lead_status]",
          zoho: "SingleLine2"
        },
      }
      const mapFormData = function(railsFormData, attributeMap) {
        const zohoFormData = new FormData();
        let address1 = "";
        for (let a in attributeMap) {
          if (a == "street_number") {
            address1 += (railsFormData.get(attributeMap[a].rails) + " ")
          } else if (a == "route") {
            address1 += railsFormData.get(attributeMap[a].rails)
            zohoFormData.set(attributeMap[a].zoho, address1)
          } else {
            const railsValue = railsFormData.get(attributeMap[a].rails)
            zohoFormData.set(attributeMap[a].zoho, railsValue)
          }
        }
        return zohoFormData;
      }
      leadRailsFormSubmitButton.addEventListener('click', handleSubmit.bind(null, attributeMap, mapFormData))
    }
    
  });

}

