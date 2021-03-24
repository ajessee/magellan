# frozen_string_literal: true
module SitesHelper
  def find_site
    req = if request.subdomain == "www"
      request.host[4..-1]
    else
      request.host
    end

    @site = Site.find_by(domain: req) || Site.find_by(subdomain: request.subdomain)

    if params["namespace"] && params["namespace"] != @site.namespace
      @site.namespace = params["namespace"]
      @site.save
    end

    redirect_to(root_url(subdomain: "www")) unless @site
  end
end
