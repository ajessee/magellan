class UserMailer < ApplicationMailer
  def account_activation(user)
    @user = user
    mail from: 'welcome@buyyourhousetexas.com', to: user.email, subject: 'Welcome to buyyourhousetexas.com'
  end

  def password_reset(user)
    @user = user
    mail from: 'help@buyyourhousetexas.com', to: user.email, subject: 'Password Reset'
  end
end
