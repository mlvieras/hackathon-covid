class Business < ApplicationRecord
  enum type: %i[Delivery SmallBusiness]

  validates :name, :email, :description, :type, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
