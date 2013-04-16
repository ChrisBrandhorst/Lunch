class SessionController < ApplicationController

  # Check if logged in
  def show
    render :status => :forbidden, :nothing => true and return unless user_logged_in?
    @user = current_user
  end

  # Logout
  def destroy
    session.delete :user_id
  end






  # Login
  def create

    # If a username is sent, get the corresponding user
    if username = params[:username]
      user = User.find_by_username("#{params[:username]}")

      if user
        # Check if activated
        if user.is_activated?
          session[:user_id] = user.id
          status = :ok
        else
          status = :unauthorized
          text = "Not yet activated"
        end
      else
        # Else, create the user and set activation mail
        User.create(:username => params[:username], :email => "#{params[:username]}#{USER_EMAIL_SUFFIX}")
        status = :created
        text = "Activation mail sent"
      end
    # Invalid login
    else
      status = :bad_request
    end
    
    render :status => status, :text => text
  end



end
