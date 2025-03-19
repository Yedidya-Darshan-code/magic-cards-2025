# models/card.py
"""
Domain model for a playing card.
Responsible only for storing card data and converting it to a dictionary.
"""

class Card:
    def __init__(self, number, suit):
        # number: e.g., 'A', '2', ..., '10', 'J', 'Q', 'K'
        # suit: one of 'hearts', 'diamonds', 'clubs', 'spades'
        self.number = number
        self.suit = suit

    def to_dict(self):
        return {
            'number': self.number,
            'suit': self.suit
        }
