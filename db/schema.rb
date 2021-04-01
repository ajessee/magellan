# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_31_175943) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "leads", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "lead_source"
    t.string "lead_status"
    t.string "street_number"
    t.string "route"
    t.string "locality"
    t.string "administrative_area_level_1"
    t.string "country"
    t.string "postal_code"
    t.string "sale_time_frame"
    t.string "sale_target_price"
    t.boolean "seller_owner"
    t.string "details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "address_line_2"
  end

  create_table "sites", force: :cascade do |t|
    t.string "domain"
    t.string "subdomain"
    t.string "namespace"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "submit_form_button_text"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.text "details"
    t.string "email"
    t.string "password_digest"
    t.string "remember_digest"
    t.string "activation_digest"
    t.boolean "activated"
    t.datetime "activated_at"
    t.string "reset_digest"
    t.datetime "reset_sent_at"
    t.integer "role"
    t.string "ip_address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
