from flask import Flask, render_template, url_for
from flask_script import Manager, Shell

app = Flask(__name__)
manager = Manager(app)


@app.route('/')
def index():
        return render_template('index.html')


def shell_context():
	context = {
		'app': app,
		'db': db,
		'Book': Book,
		'Author': Author
	}
	return context


manager.add_command('shell', Shell(make_context=shell_context))

if __name__ == "__main__":
        manager.run()
