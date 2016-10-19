from flask import Flask, render_template, make_response, url_for, send_file
#from flask_script import Manager, Shell
import os

app = Flask(__name__)
# manager = Manager(app)

# http://flask.pocoo.org/snippets/57/
# Catch all path for now
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
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

if __name__ == "__main__":
        app.run()
