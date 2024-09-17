class Admin::FaqsController < ApplicationController
  before_action :set_faq, only: %i[destroy]
  def index
    @faqs = Faq.all
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_faq
    @faq = Faq.find(params[:id])
  end
end
