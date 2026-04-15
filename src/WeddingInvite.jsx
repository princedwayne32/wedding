import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Import media
import weddingSong from './Wedding Song/Taylor Swift - Love Story.mp3';
import suitExample from './Wedding Song/Men.png';
import gownExample from './Wedding Song/Woman.png';

function WeddingInvite() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState('pending');
  const audioRef = useRef(null);

  const theme = {
    bg: '#0a0a0a',        // Deep Black
    surface: '#141414',   // Dark Gray
    accent: '#c5a059',    // Champagne Gold
    text: '#ffffff',
    textMuted: '#888888'
  };

  const toggleMusic = () => {
    if (isPlaying) { audioRef.current.pause(); } 
    else { audioRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  const reveal = {
    hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
    visible: { opacity: 1, clipPath: 'inset(0% 0 0 0)', transition: { duration: 1, ease: [0.45, 0, 0.55, 1] } }
  };

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, fontFamily: "'Inter', sans-serif" }}>
      <audio ref={audioRef} src={weddingSong} loop />

      {/* Minimalist Audio Control */}
      <div onClick={toggleMusic} style={{ position: 'fixed', top: '40px', right: '40px', zIndex: 100, cursor: 'pointer', letterSpacing: '2px', fontSize: '0.7rem', color: theme.accent }}>
        {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
      </div>

      {/* SECTION 1: THE REVEAL (Hero) */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
        <motion.div initial="hidden" animate="visible" variants={reveal}>
          <h1 style={{ fontFamily: "'KugileDemo', serif", fontSize: 'clamp(4rem, 15vw, 12rem)', lineHeight: '0.8', margin: 0 }}>
            Luka & Enteria
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
            <p style={{ fontSize: '1.2rem', letterSpacing: '5px' }}>NOVEMBER 01 . 2026</p>
            <p style={{ textAlign: 'right', maxWidth: '300px', fontSize: '0.9rem', color: theme.textMuted }}>
              LUKA AND ENTERIA ARE GETTING MARRIED IN INTRAMUROS, MANILA.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: THE ITINERARY (Locations) */}
      <section style={{ padding: '150px 0', borderTop: `1px solid ${theme.surface}` }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Ceremony Side */}
          <div style={{ flex: '1 1 50%', padding: '0 10%', borderRight: `1px solid ${theme.surface}` }}>
            <span style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '4px' }}>01 / THE VOWS</span>
            <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: '4rem', margin: '40px 0' }}>San Agustin Church</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>Join us at 11:00 AM for the ceremony within the historic walls of Intramuros.</p>
            <iframe title="Ceremony" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.123456789!2d120.9750!3d14.5889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2300000001%3A0x6d97e2056345678!2sSan%20Agustin%20Church!5e0!3m2!1sen!2sph!4v1234567890" width="100%" height="400" style={{ border: 0, filter: 'grayscale(1) invert(1)' }} />
          </div>

          {/* Reception Side */}
          <div style={{ flex: '1 1 50%', padding: '150px 10% 0 10%' }}>
            <span style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '4px' }}>02 / THE PARTY</span>
            <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: '4rem', margin: '40px 0' }}>VERA Intramuros</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>Celebration to follow at 06:00 PM. An evening of dinner, drinks, and dancing.</p>
            <iframe title="Reception" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.155!2d120.973!3d14.587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca23!2sVERA%20Intramuros!5e0!3m2!1sen!2sph!4v1234567890" width="100%" height="400" style={{ border: 0, filter: 'grayscale(1) invert(1)' }} />
          </div>
        </div>
      </section>

      {/* SECTION 3: ATTIRE (Enhanced & Larger Layout) */}
<section style={{ padding: '120px 5%', backgroundColor: theme.surface }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
    
    {/* Header & Text at the Top */}
    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
      <h2 style={{ 
        fontFamily: "'KugileDemo', serif", 
        fontSize: 'clamp(3.5rem, 8vw, 6rem)', // Significantly larger header
        color: theme.accent, 
        marginBottom: '25px' 
      }}>
        Dress Code
      </h2>
      <p style={{ fontSize: '1rem', letterSpacing: '6px', color: theme.accent, marginBottom: '20px', textTransform: 'uppercase' }}>
        STRICTLY BLACK TIE
      </p>
      <h3 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '20px', maxWidth: '900px', margin: '0 auto 20px auto', lineHeight: '1.4' }}>
        Gentlemen in Tuxedos. Ladies in Floor-Length Gowns.
      </h3>
      <p style={{ color: theme.textMuted, fontSize: '1.1rem', letterSpacing: '1px' }}>
        We kindly request our guests to adhere to a formal black palette to maintain the evening's aesthetic.
      </p>
    </div>

    {/* Enlarged Two-Column Images */}
    <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      
      {/* Gentlemen Column */}
      <div style={{ flex: '1', minWidth: '400px', textAlign: 'center' }}>
        <div style={{ overflow: 'hidden', marginBottom: '30px' }}>
          <img 
            src={suitExample} 
            alt="Gentlemen" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '550px', // Increased from 450px
              filter: 'grayscale(1)', 
              mixBlendMode: 'screen',
              transition: 'transform 0.5s ease'
            }} 
          />
        </div>
        <p style={{ letterSpacing: '4px', fontSize: '0.9rem', color: theme.accent, fontWeight: 'bold' }}>GENTLEMEN</p>
      </div>
      
      {/* Ladies Column */}
      <div style={{ flex: '1', minWidth: '400px', textAlign: 'center' }}>
        <div style={{ overflow: 'hidden', marginBottom: '30px' }}>
          <img 
            src={gownExample} 
            alt="Ladies" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '550px', // Increased from 450px
              filter: 'grayscale(1)', 
              mixBlendMode: 'screen'
            }} 
          />
        </div>
        <p style={{ letterSpacing: '4px', fontSize: '0.9rem', color: theme.accent, fontWeight: 'bold' }}>LADIES</p>
      </div>

    </div>
  </div>
</section>

      {/* SECTION 4: RSVP (Full Screen) */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}>
           <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: '5rem', marginBottom: '20px' }}>RSVP</h2>
           <p style={{ letterSpacing: '5px', marginBottom: '60px' }}>UNTIL OCTOBER 01 . 2026</p>
           
           <form style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <input placeholder="YOUR NAME" style={{ background: 'none', border: 'none', borderBottom: `1px solid ${theme.accent}`, color: '#fff', padding: '20px', textAlign: 'center', fontSize: '1.2rem', outline: 'none' }} />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
                 <label style={{ cursor: 'pointer' }}><input type="radio" name="att" /> ATTENDING</label>
                 <label style={{ cursor: 'pointer' }}><input type="radio" name="att" /> DECLINING</label>
              </div>
              <button style={{ background: 'none', border: `1px solid ${theme.accent}`, color: theme.accent, padding: '20px 60px', alignSelf: 'center', cursor: 'pointer', letterSpacing: '3px' }}>
                SUBMIT RESPONSE
              </button>
           </form>
        </div>
      </section>

      <footer style={{ padding: '100px', textAlign: 'center', color: theme.textMuted, fontSize: '0.7rem', letterSpacing: '5px' }}>
        MADE FOR LUKA AND ENTERIA — 2026
      </footer>
    </div>
  );
}

export default WeddingInvite;