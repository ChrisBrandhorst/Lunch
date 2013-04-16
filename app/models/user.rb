class User < ActiveRecord::Base
  attr_accessible :username, :email

  before_create :generate_activation_token

  has_many :entries

  # Gets the display name for this user
  def name
    if self[:name].blank?
      (self[:email] || "").split('@')[0].split('.').map(&:capitalize).join(' ')
    else
      self[:name]
    end
  end

  # Whether this client is activated
  def is_activated?
    return self.activation_token.nil?
  end


  protected

  def generate_activation_token
    self.activation_token = loop do
      random_token = SecureRandom.urlsafe_base64
      break random_token unless User.where(activation_token: random_token).exists?
    end
  end

end
