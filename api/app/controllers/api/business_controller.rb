class Api::BusinessController < ApplicationController
  def index
    business_data = Api::BusinessService.call
    render json: business_data.result
  end
end
