# app.py
from flask import Flask, send_from_directory
import os
import sys

# Add the current directory to Python path
sys.path.append(os.path.dirname(__file__))

# Create Flask app
app = Flask(__name__, static_folder='client/build')

# Register blueprint for API routes
from project.controllers.card_controller import card_blueprint
app.register_blueprint(card_blueprint)

# Serve React app index
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

# Serve React static files
@app.route('/static/js/<path:path>')
def serve_js(path):
    return send_from_directory(os.path.join(app.static_folder, 'static/js'), path)

# Add this route to serve card images
@app.route('/static/static/cards/<path:filename>')
def serve_card_images(filename):
    cards_path = os.path.join(os.path.dirname(__file__), 'project/static/static/cards')
    return send_from_directory(cards_path, filename)

@app.route('/static/css/<path:path>')
def serve_css(path):
    return send_from_directory(os.path.join(app.static_folder, 'static/css'), path)

@app.route('/static/media/<path:path>')
def serve_media(path):
    return send_from_directory(os.path.join(app.static_folder, 'static/media'), path)

# Handle any other routes by serving index.html (for React Router)
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)