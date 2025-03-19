# app.py
from flask import Flask, send_from_directory
import os
import sys

# Add the current directory to Python path
sys.path.append(os.path.dirname(__file__))

# Create Flask app
app = Flask(__name__, static_folder='client/build', static_url_path='')

# Register blueprint for API routes
from project.controllers.card_controller import card_blueprint
app.register_blueprint(card_blueprint)

# Route for card images - make sure this path matches your actual file structure
@app.route('/static/cards/<path:filename>')
def serve_card_images(filename):
    cards_path = os.path.join(os.path.dirname(__file__), 'project/static/static/cards')
    return send_from_directory(cards_path, filename)

# Handle any other Flask routes
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)