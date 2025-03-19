import React from 'react';
import MagicCardApp from './components/MagicCardApp';

function App() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #008B8B, #5FD2CD)',
            color: '#333',
            fontFamily: 'Segoe UI, Arial, sans-serif',
            textAlign: 'center',
            padding: '20px'
        },
        title: {
            fontSize: '2.8rem',
            color: '#FFD700', // Restored the gold color
            textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
            marginBottom: '30px',
            fontWeight: 'bold',
            letterSpacing: '1px'
        },
        cardContainer: {
            background: 'rgba(255,255,255,0.92)',
            borderRadius: '15px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
            border: '2px solid #B8860B', // Restored the gold border
            width: '100%',
            maxWidth: '850px',
            transition: 'all 0.3s ease'
        },
        footer: {
            marginTop: '20px',
            color: '#f0f0f0',
            fontSize: '0.9rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                Card Calculator Magic Trick
            </h1>
            <div style={styles.cardContainer}>
                <MagicCardApp />
            </div>
            <div style={styles.footer}>
                © 2025 Yedidya Darshan Magic Tricks
                <br />
                yedidya.darshan@gmail.com
            </div>
        </div>
    );
}

export default App;