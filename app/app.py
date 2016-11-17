from flask import Flask, render_template, make_response, url_for, send_file, jsonify, request
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, func
from models import Recipe, Ingredient, Cuisine, IngredientInfo
from config import db

import subprocess as sub
import os
import grequests
import requests
import markovify

from importlib import reload
import socket

reload(sub)
reload(socket)

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


# Method to generate sentences from a text sample
# Parameters:   text - string of text used to build markov chain model
#               count - number of sentances to generate
def generate_sentences(text, count):
    text_model = markovify.Text(text)

    sentences = []
    for i in range(count):
        sentence = text_model.make_sentence()
        if sentence:
            sentences.append(sentence)

    return sentences


# Method to return flavor text from a request response
# Parameters:   result - result of the API request
def getFlavorTextFromResult(result):
    allFlavorTexts = ""
    resultJson = result.json()

    for r in resultJson["data"]:
        if r["flavor_text"]:
            allFlavorTexts += r["flavor_text"].replace("\n", " ") + "\n"

    return allFlavorTexts

# Method to make async requets for every page on endpoint
# Parameters:   pages - number of pages to query
#               endpoint - API endpoint to make requests against
def makeRequests(pages, endpoint):
    allRequests = []
    for page in range(1, pages + 1):
        requestEndpoint = endpoint + str(page)
        allRequests.append(requestEndpoint)

    requestsT = (grequests.get(u) for u in allRequests)
    requestResults = grequests.map(requestsT)

    return requestResults

@app.route('/pokemon/', methods=['GET'])
def generate_pokemon_flavor():
    numToGenerate = 5

    if request.args.get('count') is not None:
        numToGenerate = int(request.args.get('count'))

    POKEMON_ENDPOINT = "http://www.pokemans.me/api/v1/pokemon?page="
    call = POKEMON_ENDPOINT + "1"

    result = requests.get(call)
    resultJson = result.json()
    pages = resultJson["total_pages"]

    requestResults = makeRequests(pages, POKEMON_ENDPOINT)

    allTexts = ""
    for result in requestResults:
        allTexts += getFlavorTextFromResult(result)

    results = generate_sentences(allTexts, numToGenerate)

    return jsonify(data=results)


@app.route('/pokemon/moves', methods=['GET'])
def getAllMoveTexts():
    numToGenerate = 5

    if request.args.get('count') is not None:
        numToGenerate = int(request.args.get('count'))

    MOVES_ENDPOINT = "http://www.pokemans.me/api/v1/moves?page="
    call = MOVES_ENDPOINT + "1"

    result = requests.get(call)
    resultJson = result.json()
    pages = resultJson["total_pages"]

    requestResults = makeRequests(pages, MOVES_ENDPOINT)

    allTexts = ""
    for result in requestResults:
        allTexts += getFlavorTextFromResult(result)

    results = generate_sentences(allTexts, numToGenerate)

    return jsonify(data=results)


@app.route('/api/search', methods=['GET'])
def search_database():

    search = str(request.args.get('query'))
    count = int(request.args.get('limit'))

    session = Session()
    inclusiveSearch = search.lower().replace(" ","+") + ':*'
    print (inclusiveSearch)
    results = []

    cuisineQuery = session.query(Cuisine).filter(func.to_tsvector(func.lower(Cuisine.title)).match(inclusiveSearch)).limit(count).all()
    recipeQuery = session.query(Recipe).filter(func.to_tsvector(func.lower(Recipe.title)).match(inclusiveSearch)).limit(count).all()
    ingredientQuery = session.query(Ingredient).filter(func.to_tsvector(func.lower(Ingredient.title)).match(inclusiveSearch)).limit(count).all()

    for cuisine in cuisineQuery:
        result = {}
        result["title"] = cuisine.title
        result["image"] = cuisine.imageUrl
        result["link"] = "/cuisines/" + str(cuisine.id)
        result["type"] = "Cuisine"
        results.append(result)

    for recipe in recipeQuery:
        result = {}
        result["title"] = recipe.title
        result["image"] = recipe.imageURL
        result["link"] = "/recipes/" + str(recipe.id)
        result["type"] = "Recipe"
        results.append(result)

    for ingredient in ingredientQuery:
        result = {}
        result["title"] = ingredient.title
        result["image"] = ingredient.imageURL
        result["link"] = "/ingredients/" + str(ingredient.id)
        result["type"] = "Ingredient"
        results.append(result)

    results = sorted(results, key=lambda k : len(k["title"]))[:count]

    return jsonify(results = results)


@app.route('/api/cuisines/', methods=['GET'])
def get_cuisines():
    session = Session()
    cuisines = []    
    for cuisine in session.query(Cuisine).all():
        cuisine_dict = cuisine.__dict__.copy() # get dict
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

@app.route('/api/ingredients/<int:ingredient_id>/recipes/', methods=['GET'])
def get_recipes_for_ingredient(ingredient_id):
    session = Session()

    ingredient = session.query(Ingredient).filter(Ingredient.id == ingredient_id).one()
    ingredient = ingredient.__dict__.copy()
    ingredient.pop('_sa_instance_state', None)

    ingredients = session.query(IngredientInfo).filter(IngredientInfo.ingredient_id == ingredient_id).all()
    ings = []

    for ing in ingredients:
        recipeInfo = {}
        recipeInfo["name"] = ing.recipe.title
        recipeInfo["id"] = ing.recipe_id
        ings.append(recipeInfo)
    return jsonify(ingredient=ingredient, recipes = ings)

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

    script_dir = os.path.dirname(__file__)
    rel_path = "tests.py"
    try:
    	process = sub.check_output(["python", os.path.join(script_dir, rel_path)],
    		stderr=sub.STDOUT)
    except sub.CalledProcessError as e:
    	process = e.output

    return process.decode("utf-8") 

if __name__ == "__main__":
        app.run()
