# controllers/card_controller.py
"""
Defines the API endpoint(s) for card-related operations.
This controller validates incoming requests and delegates logic to the CardService.
"""

from flask import Blueprint, request, jsonify
from project.services.card_service import CardService
from project.models.card import Card

# Create a blueprint for card-related routes.
card_blueprint = Blueprint('card', __name__)
card_service = CardService()

@card_blueprint.route('/api/calculate', methods=['POST'])
def calculate():
    """
    Receives JSON input with 4 cards, calculates the magic card, and returns the result.
    """
    data = request.get_json()
    if not data or 'cards' not in data:
        return jsonify({'error': 'No cards provided'}), 400

    try:
        cards_data = data['cards']
        if len(cards_data) != 4:
            return jsonify({'error': 'Must provide exactly 4 cards'}), 400

        # Convert JSON objects into Card instances.
        cards = [Card(card['number'], card['suit']) for card in cards_data]
        result_card = card_service.calculate_chosen_card(cards)

        return jsonify({
            'result': result_card.to_dict(),
            'input_cards': [card.to_dict() for card in cards]
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400
