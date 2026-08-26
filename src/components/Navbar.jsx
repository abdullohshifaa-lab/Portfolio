import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      backgroundColor: 'rgba(3, 7, 18, 0.85)', 
      backdropFilter: 'blur(10px)', 
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
      zIndex: 1000 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '16px 24px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        
        {/* Logo */}
        <a href="#" style={{ 
          fontSize: '1.25rem', 
          fontWeight: '800', 
          color: '#ffffff', 
          textDecoration: 'none',
          background: 'linear-gradient(to right, #818cf8, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Portfolio<span style={{ color: '#818cf8' }}>.</span>
        </a>

        {/* Desktop Menyu (4 ta sahifa/bo'lim) */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          <a href="#hero" style={{ color: '#d1d5db', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>Bosh sahifa</a>
          <a href="#projects" style={{ color: '#d1d5db', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>Loyihalar</a>
          <a href="#skills" style={{ color: '#d1d5db', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>Ko'nikmalar</a>
          <a href="#contact" style={{ color: '#d1d5db', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>Bog'lanish</a>
        </nav>

        {/* Aloqa tugmasi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a 
            href="#contact" 
            style={{ 
              padding: '10px 20px', 
              borderRadius: '8px', 
              background: 'linear-gradient(to right, #6366f1, #a855f7)', 
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: '600',
              fontSize: '0.875rem',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}
          >
            Bog'lanish 🚀
          </a>
        </div>

      </div>
    </header>
  );
}