# frozen_string_literal: true

# O ApplicationMailer é a classe base para todos os mailers na aplicação.
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
