# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Faq.delete_all

Faq.create!([
              { question: 'What is the return policy?', answer: 'You can return any product within 30 days of purchase.',
                is_active: true },
              { question: 'How can I contact customer service?',
                answer: 'You can contact customer service via email at support@example.com or call 123-456-7890.', is_active: true },
              { question: 'Do you offer international shipping?',
                answer: 'Yes, we offer international shipping to over 50 countries.', is_active: false }
            ])
