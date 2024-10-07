module Activable
  extend ActiveSupport::Concern
  included do
    scope :active, -> { where(is_active: true) }
    scope :inactive, -> { where(is_active: false) }
  end
end
