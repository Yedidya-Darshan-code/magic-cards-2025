# services/card_service.py
"""
Contains business logic for calculating the magic card.
This service is open for extension and encapsulates the card trick algorithm.
"""

from project.models.card import Card

class CardService:
    def __init__(self):
        # Define fractional suit values here for easy configuration.
        self.suit_values = {
            'clubs': 0.4,
            'hearts': 0.3,
            'spades': 0.2,
            'diamonds': 0.1
        }

    def calculate_chosen_card(self, cards):
        """
        Calculates the magic card given exactly 4 Card objects.
        """
        if len(cards) != 4:
            raise ValueError("Must provide exactly 4 cards")

        card_values = []
        # Convert each card to its numeric value (including a fractional suit value)
        for card in cards:
            if card.number == 'A':
                num_val = 1
            elif card.number == 'J':
                num_val = 11
            elif card.number == 'Q':
                num_val = 12
            elif card.number == 'K':
                num_val = 13
            else:
                num_val = int(card.number)
            suit_val = self.suit_values.get(card.suit, 0)
            total_value = num_val + suit_val
            card_values.append(total_value)

        # Calculation logic based on card order.
        val1, val2, val3 = card_values[1], card_values[2], card_values[3]
        sorted_values = sorted([val2, val3, val1])

        if val1 == sorted_values[2]:
            num_to_add = 6 if val2 > val3 else 5
        elif val1 == sorted_values[1]:
            num_to_add = 4 if val2 > val3 else 3
        else:
            num_to_add = 2 if val2 > val3 else 1

        result_num = int(card_values[0] + num_to_add)
        # Ensure the number wraps between 1 and 13 correctly.
        result_num = ((result_num - 1) % 13) + 1

        number_map = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'}
        result_number = number_map.get(result_num, str(result_num))

        # Return a new Card using the calculated value and the suit of the first card.
        return Card(result_number, cards[0].suit)
