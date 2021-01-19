# frozen_string_literal: true

module MessagesHelper
  def store_message(message)
    session[:notification_message] = message
  end

  def fetch_message
    message = session[:notification_message]
    session.delete(:notification_message)
    message
  end

  def notification_message?
    if session[:notification_message]
      true
    else
      false
    end
  end
end
