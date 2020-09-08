class AddWordTypeName < ActiveRecord::Migration[6.0]
  def change
    add_column :words, :word_type, :string
  end
end
