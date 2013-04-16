class EntriesController < ApplicationController

  # Show the current users' entries for the week of the given date
  def index
    date = params.has_key?(:date) ? Date.parse(params[:date]) : Date.today
    @entries = Entry.for_user_in_week_of( current_user, date, :build_missing => true )
  end

  # 
  def create
  end

  # 
  def update
  end

end
