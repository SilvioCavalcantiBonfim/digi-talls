# frozen_string_literal: true

# O ApplicationHelper fornece métodos auxiliares para serem utilizados nas views
module ApplicationHelper
  def first_letter(string)
    string[0].upcase if string.present?
  end
end
