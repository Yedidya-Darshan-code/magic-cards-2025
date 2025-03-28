import React, { useState } from 'react';
import CardSelector from './CardSelector';
import CardDisplay from './CardDisplay';

const MagicCardApp = () => {
  // Initialize state for four cards
  const [cards, setCards] = useState([
    { number: '', suit: '' },
    { number: '', suit: '' },
    { number: '', suit: '' },
    { number: '', suit: '' }
  ]);
  
  const [resultCard, setResultCard] = useState(null);
  const [error, setError] = useState('');

  // Update the card at a given index when the user selects a value
  const handleCardChange = (index, card) => {
    const newCards = [...cards];
    newCards[index] = card;
    setCards(newCards);
  };

  // Call the backend API to calculate the magic card
  const handleCalculate = async () => {
    setError('');
    // Validate that all card fields are filled
    for (let card of cards) {
      if (!card.number || !card.suit) {
        setError('Please select all card values and suits.');
        return;
      }
    }

    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cards })
      });
      const data = await response.json();
      if (response.ok) {
        setResultCard(data.result);
      } else {
        setError(data.error || 'An error occurred.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '10px' }}>
      <h2 style={{
        color: '#2c3e50',
        fontSize: '1.8rem',
        marginBottom: '25px',
        fontWeight: '500'
      }}>Enter 4 of your cards</h2>
      
      {/* Grid layout for card selectors - 2 rows x 2 columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '25px',
        justifyContent: 'center',
        marginBottom: '30px',
        maxWidth: '500px',
        margin: '0 auto 30px auto'
      }}>
        {cards.map((card, index) => (
          <CardSelector key={index} index={index} card={card} onChange={handleCardChange} />
        ))}
      </div>
      
      <button 
        onClick={handleCalculate}
        style={{
          padding: '12px 25px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Find my secret card!
      </button>
      {error && <div style={{ color: '#e74c3c', margin: '15px 0', fontWeight: '500' }}>{error}</div>}
      {resultCard && <CardDisplay card={resultCard} />}
    </div>
  );
};

export default MagicCardApp;