import React, { useState } from "react";
import PropTypes from "prop-types";

const CardDisplay = ({ card }) => {
  if (!card || !card.number || !card.suit) return null;
  
  const [imageError, setImageError] = useState(false);
  
  // Map suit names to symbols for text display
  const suitSymbols = {
    'hearts': '♥',
    'diamonds': '♦',
    'clubs': '♣',
    'spades': '♠'
  };

  // Determine text color based on suit
  const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
  
  // Convert short card names to full names for image paths
  const getFullCardName = (shortName) => {
    switch(shortName) {
      case 'A': return 'ace';
      case '2': return '2';
      case '3': return '3';
      case '4': return '4';
      case '5': return '5';
      case '6': return '6';
      case '7': return '7';
      case '8': return '8';
      case '9': return '9';
      case '10': return '10';
      case 'J': return 'jack';
      case 'Q': return 'queen';
      case 'K': return 'king';
      default: return shortName;
    }
  };
  
  // Create the image path with full names
  const imagePath = `/static/cards/${getFullCardName(card.number)}_of_${card.suit}.png`;
  console.log("Attempting to load image from:", imagePath);
  
  // Text-based card display as fallback
  const renderTextCard = () => (
    <div 
      className="card" 
      style={{
        display: 'inline-block',
        width: '100px',
        height: '140px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        margin: '10px',
        position: 'relative',
        textAlign: 'center',
        lineHeight: '140px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: isRed ? 'red' : 'black'
      }}
    >
      {card.number}
      <span 
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          fontSize: '20px'
        }}
      >
        {suitSymbols[card.suit]}
      </span>
    </div>
  );
  
  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: 'rgba(232, 244, 248, 0.7)',
      borderRadius: '12px',
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '20px',
        fontSize: '1.7rem',
        fontWeight: '600'
      }}>Your secret card is</h2>
      
      {imageError ? (
        // Show text card if image fails to load
        renderTextCard()
      ) : (
        // Try to load image first
        <div style={{
          transition: 'all 0.5s ease',
          transform: 'scale(1.05)',
          animation: 'pulseCard 1.5s ease-in-out'
        }}>
          <img 
            src={imagePath} 
            alt={`${card.number} of ${card.suit}`} 
            style={{
              width: '170px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.25)'
            }}
            onError={(e) => {
              console.error("Error loading image:", e);
              setImageError(true);
            }}
          />
        </div>
      )}
      
      {/* Add a bit of styling to create animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @keyframes pulseCard {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1.05); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

CardDisplay.propTypes = {
  card: PropTypes.shape({
    number: PropTypes.string,
    suit: PropTypes.string,
  }).isRequired,
};

export default CardDisplay;