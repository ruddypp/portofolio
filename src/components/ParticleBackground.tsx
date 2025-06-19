import { useEffect } from 'react';

const ParticleBackground = () => {
  return (
    <>
      {/* Space background with gradient */}
      <div 
        className="fixed inset-0 z-[-3]"
        style={{
          background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        }}
      />
      
      {/* Static stars */}
      <div className="fixed inset-0 z-[-2] overflow-hidden">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>

      {/* Nebula effect */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="nebula-1"></div>
        <div className="nebula-2"></div>
        <div className="nebula-3"></div>
      </div>

      {/* Shooting stars */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
      </div>
    </>
  );
};

export default ParticleBackground; 