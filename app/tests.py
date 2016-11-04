from unittest import main, TestCase
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Recipe, Ingredient, Cuisine
from config import test_db

class TestModels (TestCase):

	def setUp(self):
		self.engine = create_engine("postgresql://" + test_db['USER'] + ":" + test_db['PASSWORD'] + "@" + test_db['IP'] + "/" + test_db['DATABASE'])
		self.sess = sessionmaker(bind=self.engine)

	def test_recipe_1(self):
		session = self.sess()

		recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5)
		session.add(recipe)
		session.commit()
		result = session.query(Recipe).first()
		self.assertEqual(result.title, "Chicken Sandwich")
		session.delete(recipe)
		session.commit()

	def test_recipe_2(self):
		session = self.sess()

		recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5)
		recipe2 = Recipe(title = "Chicken Pot Pie", servings = 2, calories = 750, steps = 8)
		session.add(recipe)
		session.add(recipe2)

		session.commit()
		result = session.query(Recipe)
		self.assertEqual(result.count(), 2)
		session.delete(recipe)
		session.delete(recipe2)
		session.commit()

	def test_recipe_3(self):
		session = self.sess()

		cuisine = Cuisine(title="American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 5.0, continent = "North America", averageCalories = 1000)
		recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5 )
		recipe.cuisine = cuisine
		session.add(recipe)
		session.add(cuisine)
		session.commit()
		
		result = session.query(Recipe).first()
		self.assertEqual(result.title, recipe.title)		
		session.delete(recipe)
		session.delete(cuisine)
		session.commit()

	def test_cuisine_1(self):
		 
		session = self.sess()

		cuisine = Cuisine(title = "American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 4, continent = "North America", averageCalories = 750)
		session.add(cuisine)
		session.commit()
		result = session.query(Cuisine).one()
		self.assertEqual(result.title, "American")
		session.delete(cuisine)
		session.commit()

	def test_cuisine_2(self):
		 
		session = self.sess()

		cuisine = Cuisine(title = "American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 4, continent = "North America", averageCalories = 750)
		cuisine2 = Cuisine(title = "Indian", numberOfRecipes = 2, averageNumberOfIngredientsPerRecipe = 8, continent = "India", averageCalories = 600)
		session.add(cuisine)
		session.add(cuisine2)
		session.commit()
		result = session.query(Cuisine)
		self.assertEqual(result.count(), 2)
		session.delete(cuisine)
		session.delete(cuisine2)
		session.commit()

	def test_cuisine_3(self):
		 
		session = self.sess()

		recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5 )
		cuisine = Cuisine(title = "American", numberOfRecipes = 1, averageNumberOfIngredientsPerRecipe = 4, continent = "North America", averageCalories = 750)
		recipe.cuisine = cuisine
		session.add(recipe)
		session.add(cuisine)
		session.commit()

		result = session.query(Recipe).one()
		self.assertEqual(result.cuisine.title, cuisine.title)
		session.delete(recipe)
		session.delete(cuisine)
		session.commit()

	def test_ingredient_1(self):
		 
		session = self.sess()

		ingredient = Ingredient(title = "Lettuce", serving_size = "One leaf", total_weight = "500g", brand = "Nature", category = "Vegetable")
		session.add(ingredient)
		session.commit()
		result = session.query(Ingredient).one()
		self.assertEqual(result.title, "Lettuce")
		session.delete(ingredient)
		session.commit()

	def test_ingredient_2(self):
		 
		session = self.sess()

		ingredient = Ingredient(title = "Lettuce", serving_size = "One leaf", total_weight = "500g", brand = "Nature", category = "Vegetable")
		ingredient2 = Ingredient(title = "Pickles", serving_size = "5 slices", total_weight = "750g", brand = "Nature", category = "Vegetable")
		session.add(ingredient)
		session.add(ingredient2)
		session.commit()

		result = session.query(Ingredient)
		self.assertEqual(result.count(), 2)
		session.delete(ingredient)
		session.delete(ingredient2)
		session.commit()

	def test_ingredient_3(self):
		 
		session = self.sess()

		recipe = Recipe(title = "Chicken Sandwich", servings = 4, calories = 1000, steps = 5)
		ingredient = Ingredient(title = "Lettuce", serving_size = "One leaf", total_weight = "500g", brand = "Nature", category = "Vegetable")
		ingredient.recipesUsedIn = [recipe]
		session.add(recipe)
		session.add(ingredient)
		session.commit()

		result = session.query(Ingredient).one()
		self.assertEqual(result.recipesUsedIn[0].title, recipe.title)
		session.delete(recipe)
		session.delete(ingredient)
		session.commit()

if __name__ == "__main__":	
	main()
