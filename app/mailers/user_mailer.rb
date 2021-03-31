class UserMailer < ApplicationMailer
  def account_activation(user)
    @user = user
    mail from: 'welcome@foreclosuresolutionsinc.com', to: user.email, subject: 'Welcome to foreclosuresolutionsinc.com'
  end

  def password_reset(user)
    @user = user
    mail from: 'help@foreclosuresolutionsinc.com', to: user.email, subject: 'Password Reset'
  end
end
