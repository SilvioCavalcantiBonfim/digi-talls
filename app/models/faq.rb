class Faq < ApplicationRecord
  validates :question, presence: true, length: { minimum: 3 }
  validates :answer, presence: true, length: { minimum: 3 }

  validates :is_active, inclusion: { in: [true, false] }

  include Activable
end
