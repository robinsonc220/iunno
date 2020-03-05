# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

User.destroy_all
Meal.destroy_all
Order.destroy_all
Restaurant.destroy_all


# RESTAURANTS

r1 = Restaurant.create!(name: "Good Eats", phone: 2121234567, address: "126 Front St.", city_town: "Brooklyn", state: "New York", zip_code: 11201, latitude: 40.7025831, longitude: -73.9867043, cuisine: "American", img_url: "https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Restaurant-icon.png")
r2 = Restaurant.create!(name: "Edible Stuff", phone: 6461234567, address: "81 Washington St.", city_town: "Brooklyn", state: "New York", zip_code: 11201, latitude: 40.7025789, longitude: -73.9867094, cuisine: "????", img_url: "http://icons.iconarchive.com/icons/iconsmind/outline/256/Plates-icon.png")
r3 = Restaurant.create!(name: "Conrad's Food Shack", phone: 6461230727, address: "25 Jay St.", city_town: "Brooklyn", state: "New York", zip_code: 11201, latitude: 40.7020058, longitude: -73.987038, cuisine: "Burgers", img_url: "http://icons.iconarchive.com/icons/chrisbanks2/cold-fusion-hd/128/Restaurant-Story-icon.png")
r4 = Restaurant.create!(name: "Organic Treehouse", phone: 7181202767, address: "189 Bridge St.", city_town: "Brooklyn", state: "New York", zip_code: 11201, latitude: 40.698488, longitude: -73.9876887, cuisine: "Organic, Vegan", img_url: "http://icons.iconarchive.com/icons/aha-soft/desktop-buffet/256/Salad-icon.png")
r5 = Restaurant.create!(name: "Lunch Truck", phone: 7181294367, address: "72 Hudson Ave.", city_town: "Brooklyn", state: "New York", zip_code: 11201, latitude: 40.702755, longitude: -73.9814386, cuisine: "Lunch Specials", img_url: "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-35/128/Restaurant-Empire-2-1-icon.png")

# USERS

u1 = User.create!(first_name: "Kobe", last_name: "Bryant", billing_zip: 24242, security_code: 123, email: "mamba@gmail.com", password: "password1", cc_num: 1111222233334444, exp_date: 1220, phone: 7181234567, address: "81 Prospect St.", city_town: "Brooklyn", state: "New York", zip_code: 11201)
u2 = User.create!(first_name: "Lebron", last_name: "James", billing_zip: 23623, security_code: 321, email: "king@gmail.com", password: "password2", cc_num: 4444333322221111, exp_date: 1120, phone: 3471234567, address: "80 Pearl St.", city_town: "Brooklyn", state: "New York", zip_code: 11201)
u3 = User.create!(first_name: "Michael", last_name: "Jordan", billing_zip: 23231, security_code: 111, email: "goat@msn.com", password: "password3", cc_num: 5555666677778888, exp_date: 1222, phone: 9171234567, address: "117 Front St.", city_town: "Brooklyn", state: "New York", zip_code: 11201)

# MEALS

m1 = Meal.create!(name: "Pizza Pie", description: "18 inch Round Pie", price: 18, img_url: "https://images.squarespace-cdn.com/content/v1/54ef7974e4b0b86cc0e9f609/1447691697739-DF0VX8BGD463R4W7BAM1/ke17ZwdGBToddI8pDm48kKgqD-4k_zri3RCMU6DPdel7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUFGqFK7qIbtXlh_VW7rxPQNHwaB83bLMkwOgtl-tTzdlSKOujZwx0Oboy8Pet2Qrg/IMG_5534+%282%29.JPG?", restaurant_id: r1.id)
m2 = Meal.create!(name: "Burger & Fries", description: "Angus Beef Steakburger, Ground In-House Daily w/ a Side of Natural Cut Fries", price: 10, img_url: "https://image.businessinsider.com/5b9c185d2badb9745e58d5c9?width=1000&format=jpeg&auto=webp", restaurant_id: r1.id)
m3 = Meal.create!(name: "Fish Taco", description: "Taco w/ Roasted Arctic Char, Bay Flakes & Yuzu Mayo", price: 5, img_url:"https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg", restaurant_id: r2.id)
m4 = Meal.create!(name: "Hummus Veggie Wrap", description: "Hummus, Cucumber, Green Peppers, Red Onions, Lettuce, Tomato, & Olives", price: 9, img_url: "https://www.foodiecrush.com/wp-content/uploads/2015/05/Hummus-Veggie-Wrap-foodiecrush.com-16-1.jpg", restaurant_id: r2.id)
m5 = Meal.create!(name: "Chicken Caesar Salad", description: "Grilled Chicken, Romaine, Croutons, Parmesan Cheese, & Creamy Caesar Dressing", price: 8, img_url: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F", restaurant_id: r1.id)
m6 = Meal.create!(name: "Reuben", description: "Choice of Pastrami or Corned Beef. Melted Swiss Cheese, Sauerkraut & Russian Dressing Served on a Grilled Rye Bread", price: 9, img_url: "https://stripedspatula.com/wp-content/uploads/2019/03/reuben-sandwich-recipe-5.jpg", restaurant_id: r2.id)
m7 = Meal.create!(name: "Grilled Chicken Quesadilla", description: "Grilled chicken, cheddar cheese with salsa, sour cream & guacamole.", price: 11, img_url: "https://hips.hearstapps.com/vidthumb/images/delish-grilled-chicken-quesadillas-1-1530305348.jpg", restaurant_id: r1.id)
m8 = Meal.create!(name: "Single Organic Vegan Non GMO Cage Free Wild Caught French Fry", description: "The Fountain of Youth", price: 100, img_url: "https://i.imgur.com/sdrVsyv.jpg", restaurant_id: r2.id)
m9 = Meal.create!(name: "Italian Panini", description: "Lemon Grilled Chicken, Pesto Sauce, Roasted Peppers, & Fresh Mozzarella on Pressed European Flat Bread.", price: 8, img_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/10/1/VB0311H_Italiana-Panini_s4x3.jpg.rend.hgtvcom.826.620.suffix/1470981821370.jpeg", restaurant_id: r2.id)
m10 = Meal.create!(name: "Avocado B.L.T.", description: "Avocado, Bacon, Lettuce, Tomatoes, & Mayo Served on a Roll.", price: 8, img_url: "https://www.jocooks.com/wp-content/uploads/2012/03/avocado-blt-1-2-1-500x500.jpg", restaurant_id: r1.id)
m11 = Meal.create!(name: "Greek Omelette", description: "Served with scrambled eggs, Kalamata olives, feta, and tomatoes.", price: 9, img_url: "https://www.olivetomato.com/wp-content/uploads/2016/02/SAM4952-1.jpg", restaurant_id: r5.id)
m12 = Meal.create!(name: "Eggplant Parmesan", description: "Homemade fresh breaded eggplant, marinara sauce, fresh grated pure Parmesan and fresh mozzarella cheese, served on a hero bread.", price: 11, img_url: "https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg", restaurant_id: r3.id)
m13 = Meal.create!(name: "Tuscan Wrap", description: "Boar's Head Tuscan turkey with melted smoked Gouda cheese, spinach and pesto sauce.", price: 10, img_url: "https://assets.kraftfoods.com/recipe_images/opendeploy/113233_640x428.jpg", restaurant_id: r3.id)
m14 = Meal.create!(name: "Philly Cheese Steak Sandwich", description: "Grilled beef steak, roasted multicolored bell peppers, grilled onions and your choice of melted cheeses, served on hero bread.", price: 8, img_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/16/0/tm1b67_philly_steak_sandwich.jpg.rend.hgtvcom.826.620.suffix/1547587334190.jpeg", restaurant_id: r4.id)
m15 = Meal.create!(name: "Buffalo Wings Platter", description: "Served with choice of sauce and choice of French fries or onion rings.", price: 8, img_url: "https://i.pinimg.com/originals/ec/13/36/ec133669103fab039bac419370a835ab.jpg", restaurant_id: r5.id)


# ORDERS

o1 = Order.create!(user_id: u1.id, meal_id: m1.id)
o2 = Order.create!(user_id: u2.id, meal_id: m8.id)
o3 = Order.create!(user_id: u3.id, meal_id: m4.id)
o4 = Order.create!(user_id: u1.id, meal_id: m2.id)
o5 = Order.create!(user_id: u2.id, meal_id: m7.id)
o6 = Order.create!(user_id: u3.id, meal_id: m10.id)
o7 = Order.create!(user_id: u1.id, meal_id: m3.id)
o8 = Order.create!(user_id: u2.id, meal_id: m6.id)
o9 = Order.create!(user_id: u3.id, meal_id: m9.id)
o10 = Order.create!(user_id: u1.id, meal_id: m14.id)
o11 = Order.create!(user_id: u2.id, meal_id: m12.id)
o12 = Order.create!(user_id: u3.id, meal_id: m11.id)
o13 = Order.create!(user_id: u1.id, meal_id: m13.id)
o14 = Order.create!(user_id: u2.id, meal_id: m5.id)
o15 = Order.create!(user_id: u3.id, meal_id: m15.id)



# ORDER_MEALS

om1 = OrderMeal.create!(order_id: o1.id, meal_id: m1.id)
om2 = OrderMeal.create!(order_id: o2.id, meal_id: m8.id)
om3 = OrderMeal.create!(order_id: o3.id, meal_id: m4.id)
om4 = OrderMeal.create!(order_id: o4.id, meal_id: m2.id)
om5 = OrderMeal.create!(order_id: o5.id, meal_id: m7.id)
om6 = OrderMeal.create!(order_id: o6.id, meal_id: m10.id)




