class CreateSandwiches < ActiveRecord::Migration[7.0]
  def change
    create_table :sandwiches do |t|
      t.string :name
      t.integer :price
      t.boolean :is_best_seller

      t.timestamps
    end
  end
end
