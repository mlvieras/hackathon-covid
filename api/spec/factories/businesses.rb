FactoryBot.define do
  factory :business do
    name { Faker::Restaurant.name }
    type { %w[Delivery SmallBusiness].sample }
    phone_numbers { Faker::Company.duns_number }
    email { Faker::Internet.email }
    instagram_url { Faker::Internet.url(host: 'instagram.com') }
    facebook_url { Faker::Internet.url(host: 'twitter.com') }
    description { Faker::Restaurant.description }
    verified { Faker::Boolean.boolean }
    tags { Faker::Restaurant.type }
    availability_hours { Faker::Restaurant.description }
  end
end
