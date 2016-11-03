from unittest import main, TestCase
# from sqlalchemy.orm import sessionmaker
# from models import Recipe, Ingredient, Cuisine

class TestModels (TestCase):

	# def test_recipe_1(self):
	# 	Session = sessionmaker()
	# 	session = Session()
	# 	recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5)
	# 	session.add(recipe)
	# 	session.commit()
	# 	result = session.query(Recipe).one()
	# 	self.assertEqual(result.title, "Chicken Sandwich")

	# def test_recipe_2(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5)
	# 	recipe2 = Recipe(title = "Chicken Pot Pie", servings = 2, calories = 750, steps = 8)
	# 	session.add(recipe)
	# 	session.add(recipe2)

	# 	result = session.query(Recipe)
	# 	self.assertEqual(result.count(), 2)

	# def test_recipe_3(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	cuisine = Cuisine(title="American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 5.0, continent = "North America", averageCalories = 1000)
	# 	recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5 )
	# 	recipe.cuisine = cuisine
	# 	session.add(recipe)
	# 	session.commit()
		
	# 	result = session.query(Recipe).one()
	# 	self.assertEqual(result.cuisine.title, cuisine.title)		


	# def test_cuisine_1(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	cuisine = Cuisine(title = "American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 4, continent = "North America", averageCalories = 750)
	# 	session.add(cuisine)
	# 	session.commit()
	# 	result = session.query(Cuisine).one()
	# 	self.assertEqual(result.title, "American")

	# def test_cuisine_2(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	cuisine = Cuisine(title = "American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 4, continent = "North America", averageCalories = 750)
	# 	cuisine2 = Cuisine(title = "Indian", numberOfRecipes = 2, averageNumberOfIngredientsPerRecipe = 8, continent = "India", averageCalories = 600)
	# 	session.add(cuisine)
	# 	session.add(cuisine2)

	# 	result = session.query(Cuisine)
	# 	self.assertEqual(result.count(), 2)

	# def test_cuisine_3(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5 )
	# 	cuisine = Cuisine(title = "American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 4, continent = "North America", averageCalories = 750)
	# 	cuisine.recipe = [recipe]
	# 	session.add(recipe)
	# 	session.add(cuisine)
	# 	session.commit()

	# 	result = session.query(Cuisine).one()
	# 	self.assertEqual(result.recipe.title, recipe.title)


	# def test_ingredient_1(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	ingredient = Ingredient(title = "Lettuce", serving_size = "One leaf", total_weight = "500g", brand = "Nature", category = "Vegetable")
	# 	session.add(ingredient)
	# 	session.commit()
	# 	result = session.query(Ingredient).one()
	# 	self.assertEqual(result.title, "Lettuce")

	# def test_ingredient_2(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	ingredient = Ingredient(title = "Lettuce", serving_size = "One leaf", total_weight = "500g", brand = "Nature", category = "Vegetable")
	# 	ingredient2 = Ingredient(title = "Pickles", serving_size = "5 slices", total_weight = "750g", brand = "Nature", category = "Vegetable")
	# 	session.add(ingredient)
	# 	session.add(ingredient2)
	# 	session.commit()

	# 	result = session.query(Ingredient)
	# 	self.assertEqual(result.count(), 2)

	# def test_ingredient_3(self):
	# 	Session = sessionmaker()
	# 	session = Session()

	# 	recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5)
	# 	ingredient = Ingredient(title = "Lettuce", serving_size = "One leaf", total_weight = "500g", brand = "Nature", category = "Vegetable")
	# 	ingredient.recipesUsedIn = [recipe]
	# 	session.add(recipe)
	# 	session.add(ingredient)

	# 	result = session.query(Ingredient).one()
	# 	self.assertEqual(result.recipesUsedIn[0].title, recipe.title)

   
if __name__ == "__main__" :
	main()
