class FaqsController < ApplicationController
  def index
    @faqs = if params[:query].present?
              Faq.active.where('question LIKE ?', "%#{params[:query]}%")
            else
              Faq.active
            end
  end
end
