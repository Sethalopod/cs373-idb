from flask import Flask, render_template, make_response, url_for, send_file
#from flask_script import Manager, Shell
import os

app = Flask(__name__)
# manager = Manager(app)

@app.route('/')
def index():
    # return send_file('templates/index.html')
    return make_response(open('templates/index.html').read())

# import os
# os.path.dirname(os.path.abspath(__file__))

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
