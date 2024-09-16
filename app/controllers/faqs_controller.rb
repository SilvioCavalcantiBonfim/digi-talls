class FaqsController < ApplicationController
  def active
    @faqs = Faq.active
  end
end
