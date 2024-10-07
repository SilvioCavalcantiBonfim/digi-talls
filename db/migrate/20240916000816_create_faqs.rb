class CreateFaqs < ActiveRecord::Migration[7.0]
  def change
    create_table :faqs do |t|
      t.string :question, null: false
      t.text :answer, null: false
      t.boolean :is_active, null: false, default: false

      t.timestamps
    end
  end
end
