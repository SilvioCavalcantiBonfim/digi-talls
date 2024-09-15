# frozen_string_literal: true

# O modelo User gerencia os dados dos usuários da aplicação e está relacionado à autenticação.
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
