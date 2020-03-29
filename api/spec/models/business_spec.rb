require 'rails_helper'

RSpec.describe Business, type: :model do
  let(:business) { build(:business) }

  describe 'validations' do
    it 'is valid with valid attributes' do
      expect(business).to be_valid
    end

    it 'is not valid if name is missing' do
      business.name = nil
      expect(business).not_to be_valid
    end

    it 'is not valid if email is missing' do
      business.email = nil
      expect(business).not_to be_valid
    end

    it 'is not valid with an invalid email' do
      business.email = %w[test testxmartlabs.com @xmartlabs.com].sample
      expect(business).not_to be_valid
    end

    it 'is not valid if description is missing' do
      business.description = nil
      expect(business).not_to be_valid
    end

    it 'is not valid if type is missing' do
      business.type = nil
      expect(business).not_to be_valid
    end
  end
end
