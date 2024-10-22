# frozen_string_literal: true
module Shared
  class ErrorsController < ApplicationController
    def bad_request
      @error_message = flash[:error_message]
      flash.clear
      @error_code = "400"
      respond_to do |format|
        format.html { render(status: 400) }
      end
    end

    def unauthorized
      @error_message = flash[:error_message]
      flash.clear
      @error_code = "401"
      respond_to do |format|
        format.html { render(status: 401) }
      end
    end

    def forbidden
      @error_message = flash[:error_message]
      flash.clear
      @error_code = "403"
      respond_to do |format|
        format.html { render(status: 403) }
      end
    end

    def not_found
      @error_message = flash[:error_message]
      flash.clear
      @error_code = "404"
      respond_to do |format|
        format.html { render(status: 404) }
      end
    end

    def internal_server_error
      @error_message = flash[:error_message]
      flash.clear
      @error_code = "500"
      respond_to do |format|
        format.html { render(status: 500) }
      end
    end
  end
end
