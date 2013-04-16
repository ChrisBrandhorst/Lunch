class Entry < ActiveRecord::Base

  belongs_to      :user
  attr_accessible :date, :join

  # Gets the lunchweek date range the given date falls into
  def self.date_range_for_date(date)
    start_of_lunchweek  = date - date.days_to_week_start(:monday).days
    end_of_lunchweek    = start_of_lunchweek + 4.days
    start_of_lunchweek..end_of_lunchweek
  end

  # Get the users' entries for the week of the given date
  def self.for_user_in_week_of(user, date, options = {})
    range   = self.date_range_for_date(date)
    entries = self.where( :user_id => user, :date => range.first.beginning_of_day..range.last.end_of_day ).order(:date)

    if options[:build_missing]
      range.map{ |d| entries.detect{ |e| e.date == d } || user.entries.build(:date => d) }
    else
      entries
    end

  end

end
