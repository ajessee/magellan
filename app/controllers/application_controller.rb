class ApplicationController < ActionController::Base
  include ErrorsHelper
  include MessagesHelper
  include CookiesHelper
  include SessionsHelper
  include SitesHelper
  before_action :find_site
end
