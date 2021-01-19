class ApplicationController < ActionController::Base
  include ErrorsHelper
  include MessagesHelper
  include CookiesHelper
  include SessionsHelper
end
