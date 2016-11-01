from flask import Flask, render_template, make_response, url_for, send_file, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from models import Recipe, Ingredient, Cuisine

#from flask_script import Manager, Shell
import os

app = Flask(__name__)

# manager = Manager(app)

# Link to the database
engine = create_engine("database info")
Session = sessionmaker(bind = engine)

# http://flask.pocoo.org/snippets/57/
# Catch all path for now
@app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
def index(path):
    # Swtich to send_file for production
    # return send_file('templates/index.html')
    # Prevent cachcing for developement testing
    script_dir = os.path.dirname(__file__)
    rel_path = "templates/index.html"
    return make_response(open(os.path.join(script_dir, rel_path)).read())

# import os
# os.path.dirname(os.path.abspath(__file__))

# def shell_context():
#      context = {
#              'app': app,
#              'db': db,
#              'Recipes': Recipes,
#              'Ingredients': Ingredients,
#              'Cuisines': Cuisine
#      }
#      return context


# manager.add_command('shell', Shell(make_context=shell_context))

@app.route('/api/cuisines', methods=['GET'])
@app.route('/api/cuisines/', methods=['GET'])
def get_cuisines():
    session = Session()
    cuisines = []    
    for cuisine in session.query(Cuisine).all():
        cuisine_dict =cuisine.__dict__copy() # get dict
        cuisine_dict.pop('_sa_instance_state', None) # remove unwanted column
        cuisines.append(cuisine_dict) #add to list of dicts
    return jsonify(cuisines = ingredients)


@app.route('/api/cuisines/<int:cuisine_id>', methods=['GET'])
@app.route('/api/cuisines/<int:cuisine_id>/', methods=['GET'])
def get_cuisine(cuisine_id):
    session = Session()
    cuisine = session.query(Cuisine).filter(Cuisine.id == cuisine_id).one()
    cuisine = cuisine.__dict__.copy()
    cuisine.pop('_sa_instance_state', None)
    return jsonify(ingredient)


@app.route('/api/ingredients', methods=['GET'])
@app.route('/api/ingredients/', methods=['GET'])
def get_ingredients():
    session = Session()
    ingredients = []
    for ingredient in session.query(Ingredient).all():
        ingredient_dict = ingredient.__dict__.copy() # get dict
        ingredient_dict.pop('_sa_instance_state', None) # remove unwanted column
        ingredients.append(ingredient_dict) #add to list of dicts/jsons
    return jsonify(ingredients = ingredients)


@app.route('/api/ingredients/<int:ingredient_id>', methods=['GET'])
@app.route('/api/ingredients/<int:ingredient_id>/', methods=['GET'])
def get_ingredient(ingredient_id):
    session = Session()
    ingredient = session.query(Ingredient).filter(Ingredient.id == ingredient_id).one()
    ingredient = ingredient.__dict__.copy()
    ingredient.pop('_sa_instance_state', None)
    return jsonify(ingredient)


@app.route('/api/recipes', methods=['GET'])
@app.route('/api/recipes/', methods=['GET'])
def get_recipes():
    session = Session()
    recipes = []
    for recipe in session.query(Recipe).all():
        recipe_dict = recipe.__dict__.copy() # get dict
        recipe_dict.pop('_sa_instance_state', None) # remove unwanted column
        recipes.append(ingredient_dict) #add to list of dicts/jsons
    return jsonify(recipes = recipes)


@app.route('/api/recipes/<int:recipe_id>', methods=['GET'])
@app.route('/api/recipes/<int:recipe_id>/', methods=['GET'])
def get_recipe(recipe_id):
    session = Session()
    recipe = session.query(Recipe).filter(Recipe.id == recipe_id).one()
    recipe = recipe.__dict__.copy()
    recipe.pop('_sa_instance_state', None)
    return jsonify(recipe)

# turning results into JSONs: http://stackoverflow.com/questions/26792663/how-can-i-return-a-list-of-results-as-json

if __name__ == "__main__":
        app.run()
