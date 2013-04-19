class EntriesController < ApplicationController

  # Show the current users' entries for the week of the given date
  def index
    date = params.has_key?(:date) ? Date.parse(params[:date]) : Date.today
    @entries = Entry.for_user_in_week_of( current_user, date, :build_missing => true )
  end

  # Create a new entry
  def create
    @entry = Entry.new(params[:entry])
    @entry.user = current_user
    @entry.save
    render :action => :show
  end

  # Modify an entry
  def update
    @entry = Entry.find(params[:id])
    @entry.join = params[:join]
    @entry.save
    render :action => :show
  end

end
