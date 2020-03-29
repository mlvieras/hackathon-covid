require 'rails_helper'

RSpec.describe "Api::Businesses", type: :request do
  
  describe 'GET #index' do
    let(:json_response) { @last_json_response ||= JSON.parse(response.body, symbolize_names: true) }
    let(:first_object) { json_response[0] }

    before(:each) do
      get '/api/business'
    end

    it 'return success' do
      expect(response).to be_successful
    end

    it 'returns a list of objects' do
      expect(json_response).to be_an_instance_of(Array)
    end

    it "returns the object's tag as an array" do
      expect(first_object[:tags]).to be_an_instance_of(Array)
    end
  end
end
