class CreateParentsTable < ActiveRecord::Migration
  def change
    create_table :parents do |t|
      t.string :facebook_id, presence: true, uniqueness: true
      t.string :token, presence: true, uniqueness: true
      t.timestamps(null: false)
    end
  end
end
