class Faq < ApplicationRecord
  validate :question, presence: true, length: { minimum: 3 }
  validate :answer, presence: true, length: { minimum: 3 }
  validate :is_active, presence: true
end
