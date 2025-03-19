# app.py
from flask import Flask, send_from_directory, render_template
import os
import sys

# Add the current directory to Python path
sys.path.append(os.path.dirname(__file__))

# Create Flask app with client/build as the static folder
app = Flask(__name__, static_folder='client/build', static_url_path='')

# Register API routes
from project.controllers.card_controller import card_blueprint
app.register_blueprint(card_blueprint)

# Debug route to check if Flask is working
@app.route('/hello')
def hello():
    return 'Hello, Flask is working!'

# Serve index.html for the root path
@app.route('/')
def serve_index():
    return send_from_directory('client/build', 'index.html')

# Serve static files explicitly
@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('client/build/static/js', filename)

@app.route('/static/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('client/build/static/css', filename)

# Route for card images
@app.route('/static/cards/<path:filename>')
def serve_card_images(filename):
    cards_path = os.path.join(os.path.dirname(__file__), 'project/static/static/cards')
    return send_from_directory(cards_path, filename)

if __name__ == '__main__':
    app.run(debug=True)