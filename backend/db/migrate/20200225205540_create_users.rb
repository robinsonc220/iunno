class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.integer :security_code
      t.integer :billing_zip
      t.string :email
      t.string :password_digest
      t.bigint :cc_num
      t.integer :exp_date
      t.bigint :phone
      t.string :address
      t.string :city_town
      t.string :state
      t.integer :zip_code

      t.timestamps
    end
  end
end
