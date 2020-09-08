class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :name
      t.string :name_en
      t.string :type
      t.string :gender
      t.string :definition

      t.timestamps
    end
  end
end
