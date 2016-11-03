from flask import Flask, render_template, make_response, url_for, send_file

import os

app = Flask(__name__)

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
