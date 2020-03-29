require './app/services/service_object'

class Api::BusinessService < ServiceObject
  DUMMY_DATA = [{
    name: 'FirstViandas',
    type: :business,
    phone_numbers: '098574839',
    email: 'first@business.com',
    instagram_url: 'http://instagram.com/rk.jbhlkwv',
    facebook_url: 'http://facebook.com/wpoiehboi2',
    description: 'This is an awesome place to take a fresh dinner!',
    tags: ['restaurant', 'coffee', 'brreakfast'],
    availability_hours: 'De 10 a 20 hrs.'
  }, {
    name: 'SecondBurgers',
    type: :delivery,
    phone_numbers: '24587968',
    email: 'mega@burger.com',
    instagram_url: 'https://www.instagram.com/asdqwezsdqw',
    facebook_url: 'http://facebook.com/wejhiu2',
    description: 'The best megaburger in town!',
    tags: ['happiness', 'dinner', 'burger'],
    availability_hours: 'De 18 a 20 hrs.'
  }]

  def initialize
  end

  def call
    success!(DUMMY_DATA)
  end
end
