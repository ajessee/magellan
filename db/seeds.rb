# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Site.create(subdomain: 'www', domain: 'homebuyerwithaheart.com', namespace: 'home_buyer_with_a_heart', submit_form_button_text: "Get Your Cash Offer")
Site.create(subdomain: 'www', domain: 'foreclosuresolutionsinc.com', namespace: 'foreclosure_solutions', submit_form_button_text: "Contact Us")
Site.create(subdomain: 'magellan-investments', domain: 'herokuapp.com', namespace: 'home_buyer_with_a_heart', submit_form_button_text: "Get Your Cash Offer")
Site.create(subdomain: '', domain: 'localhost', namespace: 'home_buyer_with_a_heart', submit_form_button_text: "Get Your Cash Offer")
