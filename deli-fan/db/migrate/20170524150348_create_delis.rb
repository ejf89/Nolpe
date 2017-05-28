class CreateDelis < ActiveRecord::Migration[5.1]
  def change
    create_table :delis do |t|
      t.string :name
      t.string :address
      t.integer :rating
      t.boolean :cat
      t.boolean :beer

      t.timestamps
    end
  end
end
