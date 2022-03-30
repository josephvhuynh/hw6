from flask import Flask, jsonify
from flask.helpers import send_from_directory

# comment out on deployment
#from flask_cors import CORS

# uses 'frontend' because that is where our react app is stored
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out on deployment
#CORS(app)

@app.route("/toggle_button/<button_state>", methods=["GET"])
def toggle_button(button_state: str):
    separated = button_state.split('_')
    a = separated[0]
    b = separated[1]
    n = len(a)
    m = len(b)
    a.lower()
    b.lower()
    if a == "josep" and b == "jose":
        output = "Huynh"
    elif a[0:6] == "joseph" and n == 7 and b[0:6] == "joseph" and m == 8:
        output = "Huynh"
    else:
        output = "User Not Found"
    return jsonify(button=output)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")
    
if __name__ == "__main__":
    app.run(host="0.0.0.0")
