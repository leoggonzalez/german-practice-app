class ChangeTypeName < ActiveRecord::Migration[6.0]
  def change
    remove_column :words, :type, :word_type
  end
end
