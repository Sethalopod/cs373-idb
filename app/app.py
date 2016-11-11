
from flask import Flask, render_template, make_response, url_for, send_file, jsonify
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from models import Recipe, Ingredient, Cuisine
from config import db
import os

app = Flask(__name__)

# Link to the database
engine = create_engine("postgresql://" + db['USER'] + ":" + db['PASSWORD'] + "@" + db['IP'] + "/" + db['DATABASE'])
Session = sessionmaker(bind = engine)

# http://flask.pocoo.org/snippets/57/
# Catch all path for now
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    # Swtich to send_file for production
    # Prevent cachcing for developement testing
    script_dir = os.path.dirname(__file__)
    rel_path = "templates/index.html"
    return make_response(open(os.path.join(script_dir, rel_path)).read())

@app.route('/api/cuisines/', methods=['GET'])
def get_cuisines():
    session = Session()
    cuisines = []    
    for cuisine in session.query(Cuisine).all():
        cuisine_dict =cuisine.__dict__.copy() # get dict
        cuisine_dict.pop('_sa_instance_state', None) # remove unwanted column
        cuisines.append(cuisine_dict) #add to list of dicts
    return jsonify(cuisines = cuisines)

@app.route('/api/cuisines/<int:cuisine_id>/', methods=['GET'])
def get_cuisine(cuisine_id):
    session = Session()
    cuisine = session.query(Cuisine).filter(Cuisine.id == cuisine_id).one()
    cuisine = cuisine.__dict__.copy()
    cuisine.pop('_sa_instance_state', None)
    return jsonify(cuisine)

@app.route('/api/recipes/', methods=['GET'])
def get_recipes():
    session = Session()
    recipes = []
    for recipe in session.query(Recipe).all():
        recipe_dict = recipe.__dict__.copy() # get dict
        recipe_dict.pop('_sa_instance_state', None) # remove unwanted column
        recipes.append(recipe_dict) #add to list of dicts/jsons
    return jsonify(recipes = recipes)

@app.route('/api/recipes/<int:recipe_id>/', methods=['GET'])
def get_recipe(recipe_id):
    session = Session()
    recipe = session.query(Recipe).filter(Recipe.id == recipe_id).one()
    recipe = recipe.__dict__.copy()
    recipe.pop('_sa_instance_state', None)
    return jsonify(recipe)

@app.route('/api/ingredients/', methods=['GET'])
def get_ingredients():
    session = Session()
    ingredients = []
    for ingredient in session.query(Ingredient).all():
        ingredient_dict = ingredient.__dict__.copy() # get dict
        ingredient_dict.pop('_sa_instance_state', None) # remove unwanted column
        ingredients.append(ingredient_dict) #add to list of dicts/jsons
    return jsonify(ingredients = ingredients)

@app.route('/api/ingredients/<int:ingredient_id>/', methods=['GET'])
def get_ingredient(ingredient_id):
    session = Session()
    ingredient = session.query(Ingredient).filter(Ingredient.id == ingredient_id).one()
    ingredient = ingredient.__dict__.copy()
    ingredient.pop('_sa_instance_state', None)
    return jsonify(ingredient)

# @app.route('/api/ingredient/<int:ingredient_id>/recipes', methods=['GET'])
# def get_ingredient(ingredient_id):
#     session = Session()
#     ingredient = session.query(Ingredient).filter(Ingredient.id == ingredient_id).one()
#     ingredient = ingredient.__dict__.copy()
#     ingredient.pop('_sa_instance_state', None)
#     return jsonify(ingredient)

@app.route('/api/recipe/<int:recipe_id>/ingredients/', methods=['GET'])
def getRecipeIngredients(recipe_id):
	session = Session()
	recipe = session.query(Recipe).filter(Recipe.id == recipe_id).one()
	recipe_dict = recipe.__dict__.copy()
	recipe_dict.pop('_sa_instance_state', None)

	cuisine = recipe.cuisine
	cuisine = cuisine.__dict__.copy()
	cuisine.pop('_sa_instance_state', None)

	ingredients = []
	for ingredientInfo in recipe.ingredientInfos:
		ingredient = ingredientInfo.ingredient
		if ingredient == None:
			continue
		ingredient_dict = ingredient.__dict__.copy() # get dict
		ingredient_dict.pop('_sa_instance_state', None) # remove unwanted column
		ingredients.append(ingredient_dict) #add to list of dicts/jsons

	return jsonify(ingredients = ingredients, recipe = recipe_dict, cuisine = cuisine)


@app.route('/api/recipe/<int:recipe_id>/ingredientInfo/', methods=['GET'])
def getRecipeIngredientsInfo(recipe_id):
    session = Session()
    recipe = session.query(Recipe).filter(Recipe.id == recipe_id).one()
    recipe_dict = recipe.__dict__.copy()
    recipe_dict.pop('_sa_instance_state', None)

    cuisine = recipe.cuisine
    cuisine = cuisine.__dict__.copy()
    cuisine.pop('_sa_instance_state', None)

    ingredients = []
    for ingredientInfo in recipe.ingredientInfos:
        ingredient_dict = ingredientInfo.__dict__.copy() # get dict
        ingredient_dict.pop('_sa_instance_state', None) # remove unwanted column
        ingredients.append(ingredient_dict) #add to list of dicts/jsons
        
    return jsonify(ingredients = ingredients, recipe = recipe_dict, cuisine = cuisine)


@app.route('/api/cuisine/<int:cuisine_id>/recipes/', methods=['GET'])
def getCuisineRecipes(cuisine_id):
	session = Session()
	cuisine = session.query(Cuisine).filter(Cuisine.id == cuisine_id).one()
	cuisine_dict = cuisine.__dict__.copy()
	cuisine_dict.pop('_sa_instance_state', None)

	recipes = []
	for recipe in cuisine.recipes:
		recipe = recipe.__dict__.copy() # get dict
		recipe.pop('_sa_instance_state', None) # remove unwanted column
		recipes.append(recipe) #add to list of dicts/jsons

	return jsonify(recipes = recipes, cuisine = cuisine_dict)

@app.route('/test')
def test():
    import subprocess

    script_dir = os.path.dirname(__file__)
    rel_path = "tests.py"
    try:
    	process = subprocess.check_output(["python", os.path.join(script_dir, rel_path)],
    		stderr=subprocess.STDOUT)
    except subprocess.CalledProcessError as e:
    	process = e.output

    return process.decode("utf-8") 

if __name__ == "__main__":
        app.run()
