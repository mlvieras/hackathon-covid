class Business < ApplicationRecord
  enum type: %i[Delivery SmallBusiness]

  validates :name, :email, :description,
            :phone_numbers, :type, :availability_hours, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
