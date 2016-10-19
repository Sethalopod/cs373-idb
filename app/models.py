from sqlalchemy import Table, Column, Float, Integer, String, Boolean, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

association_table = Table('association', Base.metadata, 
	Column('recipe_id', Integer, ForeignKey('recipe.id')),
	Column('ingredient_id', Integer, ForeignKey('ingredient.id'))
)

class Recipe(Base):
	__tablename__ = 'recipe'
	id = Column(Integer, primary_key=True)

	title = Column(String)
	readyInMinutes = Column(Integer)
	servings = Column(Integer)
	calories = Column(Integer)
	steps = Column(String)
	imageURL = Column(String)

	# Relationships for recipes
	cuisine_id = Column(Integer, ForeignKey('cuisine.id'))
	cuisine = relationship("Cuisine", back_populates="recipes")
	ingredients = relationship("Ingredient", secondary=association_table, back_populates="recipesUsedIn")
	
	# Override __repr__ to display object properly
	def __repr__(self):
		return "<Recipe(title='%s', readyInMinutes='%i', servings='%i', calories='%i', steps='%s')>" % (
			self.title, self.readyInMinutes, self.servings, self.calories, self.steps) 

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
	recipesUsedIn = relationship("Recipe", secondary=association_table, back_populates="ingredients") 

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

	# Relationships for Cuisine
	recipes = relationship("Recipe", back_populates="cuisine")

	# Override __repr__ to display object properly
	def __repr__(self):
		return "<Cuisine(title='%s', numberOfRecipes='%i', averageNumberOfIngredientsPerRecipe='%f', continent='%s', averageCalories='%f')>" % (
			self.title, self.numberOfRecipes, self.averageNumberOfIngredientsPerRecipe, self.continent, self.averageCalories) 