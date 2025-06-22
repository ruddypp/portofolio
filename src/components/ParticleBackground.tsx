const ParticleBackground = () => {
  return (
    <>
      {/* Space background with gradient */}
      <div 
        className="fixed inset-0 z-[-5] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        }}
      />
      
      {/* Static stars */}
      <div className="fixed inset-0 z-[-4] overflow-hidden pointer-events-none">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>

      {/* Nebula effect */}
      <div className="fixed inset-0 z-[-3] overflow-hidden pointer-events-none">
        <div className="nebula-1"></div>
        <div className="nebula-2"></div>
        <div className="nebula-3"></div>
      </div>

      {/* Shooting stars */}
      <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
      </div>
    </>
  );
};

export default ParticleBackground; 