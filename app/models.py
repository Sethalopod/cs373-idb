from sqlalchemy import Table, Column, Float, Integer, String, Boolean, ForeignKey, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Recipe(Base):
	__tablename__ = 'recipe'
	id = Column(Integer, primary_key=True)

	title = Column(String)
	readyInMinutes = Column(Integer)
	servings = Column(Integer)
	calories = Column(Integer)
	steps = Column(String)
	numberOfSteps = Column(Integer)
	imageURL = Column(String)

	# Relationships for recipes
	cuisine_id = Column(Integer, ForeignKey('cuisine.id'))
	cuisine = relationship("Cuisine", back_populates="recipes")
	ingredientInfos = relationship("IngredientInfo", back_populates="recipe")
	
	# Override __repr__ to display object properly
	def __repr__(self):
		return "<Recipe(title='%s', readyInMinutes='%i', servings='%i', calories='%i', steps='%s', numberOfSteps='%i')>" % (
			self.title, self.readyInMinutes, self.servings, self.calories, self.steps, self.numberOfSteps) 


class IngredientInfo(Base):
	__tablename__ = 'ingredientInfo'
	id = Column(Integer, primary_key=True)

	name = Column(String)
	fullName = Column(String)
	recipe_id = Column(Integer, ForeignKey('recipe.id'))
	ingredient_id = Column(Integer, ForeignKey('ingredient.id'))

	# Relationships for ingredients
	recipe = relationship("Recipe", back_populates="ingredientInfos")
	ingredient = relationship("Ingredient", back_populates="ingredientInfos")

	# Override __repr__ to display object properly
	def __repr__(self):
		return "<IngredientInfo(name='%s', fullName='%s')>" % (
			self.name, self.fullName) 


class Ingredient(Base):
	__tablename__ = 'ingredient'
	id = Column(Integer, primary_key=True)

	title = Column(String)
	serving_size = Column(String)
	total_weight = Column(String) 
	brand = Column(String)
	category = Column(String)
	imageURL = Column(String)

	# Relationships for ingredients
	ingredientInfos = relationship("IngredientInfo", back_populates="ingredient") 

	# Override __repr__ to display object properly
	def __repr__(self):
		return "<Ingredient(title='%s', serving_size='%s', total_weight='%s', brand='%s', category='%s')>" % (
			self.title, self.serving_size, self.total_weight, self.brand, self.category) 

class Cuisine(Base):
	__tablename__ = 'cuisine'
	id = Column(Integer, primary_key=True)

	title = Column(String)
	numberOfRecipes = Column(Integer)
	averageNumberOfIngredientsPerRecipe = Column(Float) 
	continent = Column(String)
	averageCalories = Column(Float)
	imageUrl = Column(String)

	# Relationships for Cuisine
	recipes = relationship("Recipe", back_populates="cuisine")

	# Override __repr__ to display object properly
	def __repr__(self):
		return "<Cuisine(title='%s', numberOfRecipes='%i', averageNumberOfIngredientsPerRecipe='%f', continent='%s', averageCalories='%f')>" % (
			self.title, self.numberOfRecipes, self.averageNumberOfIngredientsPerRecipe, self.continent, self.averageCalories)

if __name__ == '__main__':
	engine =  create_engine("") 
	Base.metadata.create_all(engine)