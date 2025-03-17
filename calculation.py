from typing import List, Tuple
from Card import Card

def calculate_chosen_card(cards: List[Card]) -> Card:
    if len(cards) != 4:
        raise ValueError("Must provide exactly 4 cards")
    
    # Assign fractional suit values
    suit_values = {'clubs': 0.4, 'hearts': 0.3, 'spades': 0.2, 'diamonds': 0.1}

    # Calculate value for each card
    card_values = []
    
    for card in cards:
        # Convert face card values to numbers
        if card.number == 'A':
            num_val = 1
        elif card.number == 'J':
            num_val = 11
        elif card.number == 'Q':
            num_val = 12
        elif card.number == 'K':
            num_val = 13
        else:
            num_val = int (card.number)
        
        # Calculate total card value
        suit_val = suit_values[card.suit]  # Get suit fraction
        total_value = num_val + suit_val  # Add fractional suit value
        card_values.append(total_value)

    num_to_add = 0
    # Extract values for clarity
    val1, val2, val3 = card_values[1], card_values[2], card_values[3]

    # Sort the values in ascending order
    sorted_values = sorted([val1, val2, val3])

    # Assign num_to_add based on sorted position
    if val1 == sorted_values[2]:  # val1 is the largest
        num_to_add = 6 if val2 > val3 else 5
    elif val1 == sorted_values[1]:  # val1 is the middle value
        num_to_add = 4 if val2 > val3 else 3
    else:  # val1 is the smallest
        num_to_add = 2 if val2 > val3 else 1

    result_num = int (card_values[0] + num_to_add)
    result_num = ((result_num - 1) % 13) + 1  # Wrap around 1-13 correctly
   
    number_map = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'}
    result_num = number_map.get(result_num, str(result_num))  # Convert if needed

    return Card(result_num, cards[0].suit)

    

cards = [
    Card('10', 'hearts'),
    Card('A', 'spades'),
    Card('3', 'clubs'),
    Card('A', 'diamonds')
]

new_card = calculate_chosen_card(cards)
print(new_card.to_dict()) 
