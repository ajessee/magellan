# frozen_string_literal: true
module SitesHelper
  def find_site
    req = if request.subdomain == "www"
      request.host[4..-1]
    else
      request.host
    end
    
    @site = Site.find_by(domain: req) || Site.find_by(subdomain: request.subdomain)
    
    # For local testing, update namespace when switching sites
    if params["namespace"] && params["namespace"] != @site.namespace
      @site.namespace = params["namespace"]
      @site.save
    end

     # For local testing, update submit form button text when switching sites
    if params["submit_form_button_text"] && params["submit_form_button_text"] != @site.submit_form_button_text
      @site.submit_form_button_text = params["submit_form_button_text"]
      @site.save
    end

    redirect_to(root_url(subdomain: "www")) unless @site
  end
end
