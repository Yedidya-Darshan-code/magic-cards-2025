import React from 'react';
import MagicCardApp from './components/MagicCardApp';

function App() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #008B8B, #40E0D0)',
            color: '#333',
            fontFamily: 'Segoe UI, Arial, sans-serif',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{
                fontSize: '2.8rem',
                color: '#FFD700',
                textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
                marginBottom: '30px',
                fontWeight: 'bold',
                letterSpacing: '1px'
            }}>
                Magic Card Trick
            </h1>
            <div style={{
                background: 'rgba(255,255,255,0.92)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
                border: '2px solid #B8860B',
                width: '100%',
                maxWidth: '850px',
                transition: 'all 0.3s ease'
            }}>
                <MagicCardApp />
            </div>
            <div style={{
                marginTop: '20px',
                color: '#f0f0f0',
                fontSize: '0.9rem',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
                © 2025 Magic Card Tricks
            </div>
        </div>
    );
}

export default App;