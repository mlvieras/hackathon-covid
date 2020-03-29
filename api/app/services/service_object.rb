class ServiceObject
  class << self
    def call(*args)
      service= new(*args)
      service.call
      service
    end
  end

  attr_reader :status, :result, :exceptions, :error_code, :error_details

  def success?
    @status == :success
  end

  def error?
    @status == :error
  end

  def exception?
    @status == :exception
  end

  private

  def success!(new_result = nil)
    @status = :success
    @result = new_result unless new_result.nil?
  end

  def error!(error_code = nil, error_details = nil)
    @status = :error
    @error_code = error_code if error_code.present?
    @error_details = details if error_details.present?
  end

  def add_exception!(exception)
    @status = :exception
    @exceptions = @exceptions.nil? ? [exception.message] : @exceptions.push(exception.message)
  end

  def logger
    Rails.logger || Logger.new(STDOUT)
  end
end
