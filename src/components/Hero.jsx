import React from 'react';

export default function Hero() {
  return (
    <section id="hero" style={{ 
      backgroundColor: '#030712', 
      color: '#ffffff', 
      minHeight: 'calc(100vh - 70px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '60px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Orqa fondagi jilokor neon yorug'liklar */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '550px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.18) 0%, rgba(3, 7, 18, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Status badge */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '8px 20px', 
          borderRadius: '9999px', 
          background: 'rgba(255, 255, 255, 0.03)', 
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '28px', 
          fontSize: '0.875rem', 
          color: '#d1d5db',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}>
          <span style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            backgroundColor: '#4ade80',
            boxShadow: '0 0 10px #4ade80'
          }}></span>
          <span>14 yoshda • Freelance uchun ochiqman</span>
        </div>

        {/* Ism va Familiya */}
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          fontWeight: '800', 
          marginBottom: '20px', 
          lineHeight: '1.2',
          letterSpacing: '-1px'
        }}>
          Salom, men <br />
          <span style={{ 
            background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>Abdulloh Kadirov</span>
        </h1>

        {/* Yo'nalish */}
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#9ca3af', 
          marginBottom: '24px' 
        }}>
          Professional <span style={{ color: '#fff' }}>Frontend Dasturchi</span>man
        </h2>

        {/* Qisqacha tavsif */}
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#9ca3af', 
          marginBottom: '40px', 
          lineHeight: '1.7',
          maxWidth: '700px',
          margin: '0 auto 40px auto'
        }}>
          Veb-ilovalar va interaktiv saytlarni zamonaviy texnologiyalar (<strong style={{ color: '#fff' }}>Html, CSS, React, Tailwind CSS, Vite</strong>) yordamida mukammal darajada yarataman.
        </p>

        {/* Tugmalar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '16px', 
          flexWrap: 'wrap' 
        }}>
          <a
            href="#projects"
            style={{ 
              padding: '15px 32px', 
              borderRadius: '14px', 
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', 
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: '600',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(168, 85, 247, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)';
            }}
          >
            Loyihalarni ko'rish 🚀
          </a>
        </div>

      </div>
    </section>
  );
}