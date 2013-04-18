class ApplicationController < ActionController::Base
  protect_from_forgery

  # Main index renders nothing
  def index
    render :nothing => true, :layout => true
  end

  # Returns whether a user is logged in in this session
  def user_logged_in?
    current_user.is_a?(User)
  end

  # Returns the currently logged in user for this session
  def current_user
    # TODO: remove auto login
    session[:user_id] = User.first().id
    # session.delete(:user_id)
    session[:user_id].nil? ? nil : User.find(session[:user_id])
  end

end
