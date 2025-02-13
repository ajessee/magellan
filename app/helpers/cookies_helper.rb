# frozen_string_literal: true

module CookiesHelper
  # Stores the URL of the original referer URL (Used to cache page location on logout)
  def store_referer_location
    session[:forwarding_url] = request.referer
  end

  # Stores the URL if GET request
  def store_location
    session[:forwarding_url] = request.original_url if request.get?
  end

  # Get stored location if it exists
  def fetch_location
    session[:forwarding_url]
  end

  # Get stored location if exists
  def clear_location
    session.delete(:forwarding_url) if session[:forwarding_url]
  end
end
