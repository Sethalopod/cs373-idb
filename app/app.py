from flask import Flask
 
app = Flask(__name__)
 
@app.route("/")
def hello():
	return "Hello world!"

@app.route("/test")
def test():
        return "I'm a test page"
 
if __name__ == "__main__":
	app.run()
