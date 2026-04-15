import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import weddingSong from './Wedding Song/Taylor Swift - Love Story.mp3';
import suitExample from './Wedding Song/Men.png';
import gownExample from './Wedding Song/Woman.png';

function WeddingInvite() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState('pending');
  const audioRef = useRef(null);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Playback failed:', err);
      });
    }
  };

  const handleRSVP = (e) => {
    e.preventDefault();
    setRsvpStatus('success');
  };

  const theme = {
    bg: '#0a0a0a',
    surface: '#141414',
    accent: '#c5a059',
    text: '#ffffff',
    textMuted: '#888888'
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Playback failed:', err);
      });
    }
  };

  const reveal = {
    hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0 0 0)',
      transition: { duration: 1, ease: [0.45, 0, 0.55, 1] }
    }
  };

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, fontFamily: "'Inter', sans-serif" }}>
      <audio ref={audioRef} src={weddingSong} loop />

      {/* WELCOME OVERLAY */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              backgroundColor: theme.bg,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '40px',
            }}
          >
            {/* Gold decorative line top */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.45, 0, 0.55, 1] }}
              style={{
                width: '60px',
                height: '1px',
                backgroundColor: theme.accent,
                marginBottom: '40px',
                transformOrigin: 'center',
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '5px',
                color: theme.accent,
                marginBottom: '30px',
                textTransform: 'uppercase',
              }}
            >
              You are cordially invited
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{
                fontFamily: "'KugileDemo', serif",
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                lineHeight: '0.85',
                margin: '0 0 30px 0',
                color: theme.text,
              }}
            >
              Luka &<br />Enteria
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              style={{
                fontSize: '1rem',
                letterSpacing: '5px',
                color: theme.textMuted,
                marginBottom: '60px',
              }}
            >
              NOVEMBER 01 · 2026 · INTRAMUROS, MANILA
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '3px',
                color: theme.textMuted,
                marginBottom: '24px',
              }}
            >
              ♪ This experience includes music
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              onClick={handleEnter}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = theme.accent;
                e.target.style.color = theme.bg;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = theme.accent;
              }}
              style={{
                background: 'none',
                border: `1px solid ${theme.accent}`,
                color: theme.accent,
                padding: '18px 60px',
                cursor: 'pointer',
                letterSpacing: '4px',
                fontSize: '0.75rem',
                transition: '0.3s',
                textTransform: 'uppercase',
              }}
            >
              Enter
            </motion.button>

            {/* Gold decorative line bottom */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.45, 0, 0.55, 1] }}
              style={{
                width: '60px',
                height: '1px',
                backgroundColor: theme.accent,
                marginTop: '40px',
                transformOrigin: 'center',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT — only fully visible after entering */}
      <div style={{ opacity: hasEntered ? 1 : 0, transition: 'opacity 0.5s ease 0.8s' }}>

        {/* Minimalist Audio Control */}
        <div
          onClick={toggleMusic}
          style={{
            position: 'fixed',
            top: '40px',
            right: '40px',
            zIndex: 100,
            cursor: 'pointer',
            letterSpacing: '2px',
            fontSize: '0.7rem',
            color: theme.accent,
          }}
        >
          {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
        </div>

        {/* SECTION 1: THE REVEAL (Hero) */}
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <motion.div initial="hidden" animate={hasEntered ? "visible" : "hidden"} variants={reveal}>
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
            <div style={{ flex: '1 1 50%', padding: '0 10%', borderRight: `1px solid ${theme.surface}` }}>
              <span style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '4px' }}>01 / THE VOWS</span>
              <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: '4rem', margin: '40px 0' }}>San Agustin Church</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>Join us at 11:00 AM for the ceremony within the historic walls of Intramuros.</p>
              <iframe title="Ceremony" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.123456789!2d120.9750!3d14.5889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2300000001%3A0x6d97e2056345678!2sSan%20Agustin%20Church!5e0!3m2!1sen!2sph!4v1234567890" width="100%" height="400" style={{ border: 0, filter: 'grayscale(1) invert(1)' }} />
            </div>
            <div style={{ flex: '1 1 50%', padding: '150px 10% 0 10%' }}>
              <span style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '4px' }}>02 / THE PARTY</span>
              <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: '4rem', margin: '40px 0' }}>VERA Intramuros</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>Celebration to follow at 06:00 PM. An evening of dinner, drinks, and dancing.</p>
              <iframe title="Reception" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.155!2d120.973!3d14.587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca23!2sVERA%20Intramuros!5e0!3m2!1sen!2sph!4v1234567890" width="100%" height="400" style={{ border: 0, filter: 'grayscale(1) invert(1)' }} />
            </div>
          </div>
        </section>

        {/* SECTION 3: ATTIRE */}
        <section style={{ padding: '120px 5%', backgroundColor: theme.surface }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: theme.accent, marginBottom: '25px' }}>
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
            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div style={{ flex: '1', minWidth: '400px', textAlign: 'center' }}>
                <div style={{ overflow: 'hidden', marginBottom: '30px' }}>
                  <img src={suitExample} alt="Gentlemen" style={{ width: '100%', height: 'auto', maxWidth: '550px', filter: 'grayscale(1)', mixBlendMode: 'screen' }} />
                </div>
                <p style={{ letterSpacing: '4px', fontSize: '0.9rem', color: theme.accent, fontWeight: 'bold' }}>GENTLEMEN</p>
              </div>
              <div style={{ flex: '1', minWidth: '400px', textAlign: 'center' }}>
                <div style={{ overflow: 'hidden', marginBottom: '30px' }}>
                  <img src={gownExample} alt="Ladies" style={{ width: '100%', height: 'auto', maxWidth: '550px', filter: 'grayscale(1)', mixBlendMode: 'screen' }} />
                </div>
                <p style={{ letterSpacing: '4px', fontSize: '0.9rem', color: theme.accent, fontWeight: 'bold' }}>LADIES</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: RSVP */}
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center', padding: '0 20px' }}>
            {rsvpStatus === 'pending' ? (
              <>
                <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: 'clamp(3rem, 10vw, 5rem)', marginBottom: '20px', color: theme.text }}>RSVP</h2>
                <p style={{ letterSpacing: '5px', marginBottom: '60px', color: theme.accent }}>UNTIL OCTOBER 01 . 2026</p>
                <form onSubmit={handleRSVP} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <input required placeholder="YOUR NAME" style={{ background: 'none', border: 'none', borderBottom: `1px solid ${theme.accent}`, color: '#fff', padding: '20px', textAlign: 'center', fontSize: '1.2rem', outline: 'none' }} />
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
                    <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input type="radio" name="att" required style={{ accentColor: theme.accent }} /> ATTENDING
                    </label>
                    <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input type="radio" name="att" style={{ accentColor: theme.accent }} /> DECLINING
                    </label>
                  </div>
                  <button type="submit" style={{ background: 'none', border: `1px solid ${theme.accent}`, color: theme.accent, padding: '20px 60px', alignSelf: 'center', cursor: 'pointer', letterSpacing: '3px', transition: '0.3s' }} onMouseOver={(e) => { e.target.style.backgroundColor = theme.accent; e.target.style.color = theme.bg; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = theme.accent; }}>
                    SUBMIT RESPONSE
                  </button>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 style={{ fontFamily: "'KugileDemo', serif", fontSize: 'clamp(3rem, 10vw, 5rem)', color: theme.accent, marginBottom: '20px' }}>Thank You</h2>
                <p style={{ fontSize: '1.2rem', letterSpacing: '3px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                  Your response has been received. <br />
                  We can't wait to celebrate this special day with you!
                </p>
                <button onClick={() => setRsvpStatus('pending')} style={{ marginTop: '40px', background: 'none', border: 'none', color: theme.textMuted, textDecoration: 'underline', cursor: 'pointer', fontSize: '0.8rem', letterSpacing: '2px' }}>
                  EDIT RESPONSE
                </button>
              </motion.div>
            )}
          </div>
        </section>

        <footer style={{ padding: '100px', textAlign: 'center', color: theme.textMuted, fontSize: '0.7rem', letterSpacing: '5px' }}>
          MADE FOR LUKA AND ENTERIA — 2026
        </footer>
      </div>
    </div>
  );
}

export default WeddingInvite;
