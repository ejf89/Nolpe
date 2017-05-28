# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

deli1 = Deli.create(name: "Fancy Deli", address: "10 Broadway", rating: 5, beer: false, cat: true)
deli2 = Deli.create(name: "Number One Deli", address: "18 Broadway", rating: 1, beer: true, cat: true)
