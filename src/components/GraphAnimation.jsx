import { motion } from 'framer-motion';

export default function GraphAnimation() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      {/* Animated Bar Chart Background */}
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        display: 'flex', 
        alignItems: 'flex-end', 
        gap: '2vw', 
        width: '100%', 
        height: '60%', 
        justifyContent: 'center',
        opacity: 0.15
      }}>
        {[30, 45, 35, 60, 50, 80, 70, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ 
              duration: 2, 
              ease: "easeOut",
              delay: i * 0.1,
            }}
            style={{
              flex: 1,
              maxWidth: '80px',
              background: 'linear-gradient(to top, rgba(255,255,255,0.05), rgba(255,255,255,0.8))',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px'
            }}
          />
        ))}
      </div>

      {/* Massive Inflating Upward Arrow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 150 }}
        animate={{ scale: [0.5, 1.2, 1.5], opacity: [0, 0.2, 0], y: -150 }}
        transition={{ 
          duration: 4, 
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V2" />
          <path d="M4 10l8-8 8 8" />
        </svg>
      </motion.div>
      
      {/* Secondary arrow to create a continuous flow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 150 }}
        animate={{ scale: [0.5, 1.2, 1.5], opacity: [0, 0.2, 0], y: -150 }}
        transition={{ 
          duration: 4, 
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2
        }}
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V2" />
          <path d="M4 10l8-8 8 8" />
        </svg>
      </motion.div>
    </div>
  );
}
