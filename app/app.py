from flask import Flask, render_template, url_for
#from flask_script import Manager, Shell

app = Flask(__name__)
# manager = Manager(app)

@app.route('/recipes')
def recipes():
	return render_template('recipes.html')

@app.route('/ingredients')
def ingredients():
	return render_template('ingredients.html')

@app.route('/cuisine')
def cuisine():
	return render_template('cuisine.html')

@app.route('/about')
def about():
	return render_template('about.html')

@app.route('/header')
def header():
    return render_template('header.html')

@app.route('/')
def index():
    return render_template('index.html')


# def shell_context():
# 	context = {
# 		'app': app,
# 		'db': db,
# 		'Recipes': Recipes,
# 		'Ingredients': Ingredients,
# 		'Cuisines': Cuisine
# 	}
# 	return context


# manager.add_command('shell', Shell(make_context=shell_context))

if __name__ == "__main__":
        app.run()
