class FaqsController < ApplicationController
  def index
    @faqs = Faq.active
  end

  def show
    @faqs = Faq.all
  end
end
