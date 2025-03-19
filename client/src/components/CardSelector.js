import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardSelector.css';

// Array of card numbers with single letters for royals
const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Array of suits with emojis
const suits = [
  { value: 'hearts', emoji: '♥' },
  { value: 'diamonds', emoji: '♦' },
  { value: 'clubs', emoji: '♣' },
  { value: 'spades', emoji: '♠' }
];

const CardSelector = ({ index, card, onChange }) => {
  const handleNumberChange = (e) => {
    onChange(index, { ...card, number: e.target.value });
  };

  const handleSuitChange = (e) => {
    onChange(index, { ...card, suit: e.target.value });
  };

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '10px',
      width: '160px',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{
        fontSize: '17px',
        marginBottom: '12px',
        color: '#2c3e50',
        fontWeight: '600'
      }}>Card {index + 1}</h3>
      <select 
        value={card.number || ''} 
        onChange={handleNumberChange}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '15px'
        }}
      >
        <option value="">Select Number</option>
        {numbers.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <select 
        value={card.suit || ''} 
        onChange={handleSuitChange}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '15px'
        }}
      >
        <option value="">Select Suit</option>
        {suits.map((suit) => (
          <option key={suit.value} value={suit.value}>
            {suit.emoji}
          </option>
        ))}
      </select>
    </div>
  );
};

CardSelector.propTypes = {
  index: PropTypes.number.isRequired,
  card: PropTypes.shape({
    number: PropTypes.string,
    suit: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardSelector;