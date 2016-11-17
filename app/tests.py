from unittest import main, TestCase
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Recipe, Ingredient, Cuisine
from config import test_db

class TestModels (TestCase):

    def setUp(self):
        self.engine = create_engine("postgresql://" + test_db['USER'] + ":" + test_db['PASSWORD'] + "@" + test_db['IP'] + "/" + test_db['DATABASE'])
        self.sess = sessionmaker(bind=self.engine)

        session = self.sess()
        session.query(Recipe).delete()
        session.query(Ingredient).delete()
        session.query(Cuisine).delete()
        session.commit()

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

    def test_recipe_4(self):
        session = self.sess()

        cuisine = Cuisine(title="Jolly",
                            numberOfRecipes = 1,
                            averageNumberOfIngredientsPerRecipe = 1.0,
                            continent = "Jollyland",
                            averageCalories = 1)

        recipe = Recipe(title = "Jolly Rancher",
                        servings = 10,
                        calories = 1,
                        steps = 1)

        recipe.cuisine = cuisine
        session.add(recipe)
        session.add(cuisine)
        session.commit()
        
        result = session.query(Recipe).first()
        self.assertEqual(result.title, recipe.title)        
        session.delete(recipe)
        session.delete(cuisine)
        session.commit()

    def test_recipe_5(self):
        session = self.sess()

        cuisine = Cuisine(title="Saltese",
                            numberOfRecipes = 1,
                            averageNumberOfIngredientsPerRecipe = 10.0,
                            continent = "Reddit",
                            averageCalories = 5000)

        recipe = Recipe(title = "losing",
                        servings = 10,
                        calories = 1,
                        steps = 1)

        recipe.cuisine = cuisine
        session.add(recipe)
        session.add(cuisine)
        session.commit()
        
        result = session.query(Recipe).first()
        self.assertEqual(result.title, recipe.title)        
        session.delete(recipe)
        session.delete(cuisine)
        session.commit()

    def test_recipe_6(self):
        session = self.sess()

        cuisine = Cuisine(title="Jamaican",
                            numberOfRecipes = 1,
                            averageNumberOfIngredientsPerRecipe = 10.0,
                            continent = "North America",
                            averageCalories = 5000)

        recipe = Recipe(title = "jamacian masala",
                        servings = 10,
                        calories = 1,
                        steps = 1)

        recipe.cuisine = cuisine
        session.add(recipe)
        session.add(cuisine)
        session.commit()
        
        result = session.query(Recipe).first()
        self.assertEqual(result.title, recipe.title)        
        session.delete(recipe)
        session.delete(cuisine)
        session.commit()

    def test_recipe_7(self):
        session = self.sess()

        recipe = Recipe(title = "Ravioli", readyInMinutes = 40, servings = 3, calories = 500, numberOfSteps = 2, steps = "boil water. put ravioli in it. eat it")
        session.add(recipe)
        session.commit()

        result = session.query(Recipe).first()

        self.assertEqual(result.title, "Ravioli")
        self.assertEqual(result.readyInMinutes, 40)
        self.assertEqual(result.servings, 3)
        self.assertEqual(result.calories, 500)
        self.assertEqual(result.numberOfSteps, 2)
        self.assertEqual(result.steps, "boil water. put ravioli in it. eat it")

        session.delete(recipe)
        session.commit()
        
    def test_recipe_8(self):
        session = self.sess()

        recipe = Recipe(title = "Powerpuff Girls", readyInMinutes = 1, servings = 3, calories = 0, numberOfSteps = 4, steps = "Add sugar, add spice, add everything nice, accidentally add an extra ingredient to the concotion -- Chemical X")
        session.add(recipe)
        session.commit()

        result = session.query(Recipe).first()

        self.assertEqual(result.title, "Powerpuff Girls")

        session.delete(recipe)
        session.commit()
        
    def test_recipe_9(self):
        session = self.sess()

        recipe = Recipe(title = "Rowdyruff Boys", readyInMinutes = 1, servings = 3, calories = 0, numberOfSteps = 4, steps = "Add snips, add snails, add puppy-dog tails, add Chemical X")
        session.add(recipe)
        session.commit()

        result = session.query(Recipe).first()

        self.assertEqual(result.title, "Rowdyruff Boys")

        session.delete(recipe)
        session.commit()

    def test_recipe_10(self):
        session = self.sess()

        recipe = Recipe(title = "Sadness", readyInMinutes = 0, servings = 1, calories = 0, numberOfSteps = 1, steps = "When you go to bed for dinner")
        session.add(recipe)
        session.commit()

        result = session.query(Recipe).first()

        self.assertEqual(result.readyInMinutes, 0)

        session.delete(recipe)
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

    def test_cuisine_4(self):
         
        session = self.sess()

        recipe = Recipe(title = "Chocolate Milk",
                        servings = 1,
                        calories = 800,
                        steps = 3 )
        cuisine = Cuisine(title = "American",
                            numberOfRecipes = 2,
                            averageNumberOfIngredientsPerRecipe = 5,
                            continent = "North America",
                            averageCalories = 200)
        recipe.cuisine = cuisine
        session.add(recipe)
        session.add(cuisine)
        session.commit()

        result = session.query(Recipe).one()
        self.assertEqual(result.cuisine.title, cuisine.title)
        session.delete(recipe)
        session.delete(cuisine)
        session.commit()

    def test_cuisine_5(self):
         
        session = self.sess()

        cuisine = Cuisine(title = "American",
                            numberOfRecipes = 2,
                            averageNumberOfIngredientsPerRecipe = 5,
                            continent = "North America",
                            averageCalories = 200)
        session.add(cuisine)
        session.commit()

        result = session.query(Cuisine).one()
        self.assertEqual(result.title, cuisine.title)
        session.delete(cuisine)
        session.commit()

    def test_cuisine_6(self):
         
        session = self.sess()

        cuisine = Cuisine(title = "Japanese",
                            numberOfRecipes = 2,
                            averageNumberOfIngredientsPerRecipe = 10,
                            continent = "Asia",
                            averageCalories = 200)
        session.add(cuisine)
        session.commit()

        result = session.query(Cuisine).one()
        self.assertEqual(result.continent, cuisine.continent)
        session.delete(cuisine)
        session.commit()

    def test_cuisine_7(self):
        session = self.sess()

        cuisine = Cuisine(title = "c1", numberOfRecipes = 5, continent = "GDC")
        recipe = Recipe(title = "r1", readyInMinutes = 80)
        recipe.cuisine = cuisine
        listed = [recipe]
        cuisine.recipes = listed
        session.add(cuisine)
        session.add(recipe)
        session.commit()

        r = session.query(Recipe).one()
        c = session.query(Cuisine).one()
        self.assertEqual(r.cuisine, cuisine)
        self.assertEqual(c.recipes, listed)

        session.delete(cuisine)
        session.delete(recipe)
        session.commit()

    def test_cuisine_8(self):
        session = self.sess()

        cuisine = Cuisine(title = "Pupper", numberOfRecipes = 67, averageNumberOfIngredientsPerRecipe = 1, continent = "doggo island", averageCalories = 50.6)
        session.add(cuisine)
        session.commit()

        result = session.query(Cuisine).first()

        self.assertEqual(result.title, "Pupper")
        self.assertEqual(result.numberOfRecipes, 67)
        self.assertEqual(result.averageNumberOfIngredientsPerRecipe, 1)
        self.assertEqual(result.continent, "doggo island")
        self.assertEqual(result.averageCalories, 50.6)

        session.delete(cuisine)
        session.commit()

    def test_cuisine_9(self):
        session = self.sess()

        cuisine = Cuisine(title = "Joe Biden", numberOfRecipes = 9001, averageNumberOfIngredientsPerRecipe = 42, continent = "Meme", averageCalories = 20.0)
        session.add(cuisine)
        session.commit()

        result = session.query(Cuisine).first()

        self.assertEqual(result.title, "Joe Biden")

        session.delete(cuisine)
        session.commit()


    def test_cuisine_10(self):
        session = self.sess()

        cuisine = Cuisine(title = "JavaScript", numberOfRecipes = 404, averageNumberOfIngredientsPerRecipe = 404, continent = "Google Chrome", averageCalories = 40.4)
        session.add(cuisine)
        session.commit()

        result = session.query(Cuisine).first()

        self.assertEqual(result.averageCalories, 40.4)

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

    def test_ingredient_4(self):
        session = self.sess()

        ingredient = Ingredient(title = "Potato", serving_size = "one potato", total_weight = "0.5 lbs", brand = "Nature", category = "Potato")
        session.add(ingredient)
        session.commit()

        result = session.query(Ingredient).one()
        self.assertEqual(result.title, "Potato")
        self.assertEqual(result.serving_size, "one potato")
        self.assertEqual(result.total_weight, "0.5 lbs")
        self.assertEqual(result.brand, "Nature")
        self.assertEqual(result.category, "Potato")
        self.assertEqual(result.imageURL, None) # might be an issue

        session.delete(ingredient)
        session.commit()

    def test_ingredient_5(self):
        session = self.sess()

        ingredient1 = Ingredient(title = "ing1", serving_size = "1")
        ingredient2 = Ingredient(title = "ing2", serving_size = "2")
        ingredient3 = Ingredient(title = "ing3", serving_size = "3")
        session.add(ingredient1)
        session.add(ingredient2)
        session.add(ingredient3)
        session.commit()

        q1 = session.query(Ingredient).filter(Ingredient.title == "ing1").first()
        q2 = session.query(Ingredient).filter(Ingredient.title == "ing3").first()

        self.assertEqual(q1.serving_size, "1")
        self.assertEqual(q2.serving_size, "3")

        session.delete(ingredient1)
        session.delete(ingredient2)
        session.delete(ingredient3)
        session.commit()

    def test_ingredient_6(self):
        session = self.sess()

        ingredient = Ingredient(title = "Rice", serving_size = "one grain", total_weight = ".0.30 g", brand = "Helen", category = "Grains")
        session.add(ingredient)
        session.commit()
        
        empty = session.query(Ingredient).filter(Ingredient.serving_size == "two grains").one_or_none()
        rice = session.query(Ingredient).filter(Ingredient.serving_size == "one grain").one()

        self.assertEqual(empty, None)
        self.assertNotEqual(rice, None)

        session.delete(ingredient)
        session.commit()

    def test_ingredient_7(self):
        session = self.sess()

        ingredient = Ingredient(title = "Dreams", serving_size = "one hour", total_weight = "20 memories", brand = "Sweet Dreams", category = "Grains")
        session.add(ingredient)
        session.commit()
        
        dream = session.query(Ingredient).filter(Ingredient.brand == "Sweet Dreams").one()

        self.assertNotEqual(dream, None)

        session.delete(ingredient)
        session.commit()

    def test_ingredient_8(self):
        session = self.sess()

        ingredient = Ingredient(title = "Dreams", serving_size = "one hour", total_weight = "20 memories", brand = "Sweet Dreams", category = "Grains")
        session.add(ingredient)
        session.commit()
        
        dream = session.query(Ingredient).filter(Ingredient.serving_size == "one hour").one()

        self.assertNotEqual(dream, None)

        session.delete(ingredient)
        session.commit()

    def test_ingredient_9(self):
        session = self.sess()

        ingredient = Ingredient(title = "Depression", serving_size = "lifetime", total_weight = "a body", brand = "Sweet Dreams", category = "meme")
        session.add(ingredient)
        session.commit()
        
        _ing = session.query(Ingredient).filter(Ingredient.serving_size == "lifetime").one()

        self.assertEqual(_ing.title, "Depression")

        session.delete(ingredient)
        session.commit()

    def test_ingredient_10(self):
        session = self.sess()

        ingredient = Ingredient(title = "Joe Biden", serving_size = "lifetime", total_weight = "One VP", brand = "Sweet Dreams", category = "meme")
        session.add(ingredient)
        session.commit()
        
        _ing = session.query(Ingredient).filter(Ingredient.serving_size == "lifetime").one()

        self.assertEqual(_ing.category, "meme")

        session.delete(ingredient)
        session.commit()

        
if __name__ == "__main__":  
    main()
