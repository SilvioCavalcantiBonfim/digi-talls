class FaqsController < ApplicationController
  def index
    @faqs = Faq.active
  end
end
