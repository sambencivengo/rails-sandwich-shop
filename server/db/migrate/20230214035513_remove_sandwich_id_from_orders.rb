class RemoveSandwichIdFromOrders < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :sandwich_id, :integer
  end
end
