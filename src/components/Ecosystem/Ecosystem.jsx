import { useState, useEffect } from 'react';
import './Ecosystem.css';

const Bubble = ({ image, title, size = 60, angle, colorIndex }) => {
  const [matrix, setMatrix] = useState({ x: 0, y: 0 });

  // Main position in the large circle
  const mainRadius = 300; // Distance from center
  const baseX = Math.cos(angle) * mainRadius;
  const baseY = Math.sin(angle) * mainRadius;

  useEffect(() => {
    let animationAngle = Math.random() * Math.PI * 2;
    const speed = 0.01;
    const radius = 4; // Maximum deviation for matrix transformation

    const animate = () => {
      animationAngle += speed;
      const x = Math.cos(animationAngle) * radius;
      const y = Math.sin(animationAngle) * radius;
      setMatrix({ x, y });
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      className="bubble"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${baseX}px, ${baseY}px) matrix(1,0,0,1,${matrix.x},${matrix.y})`,
      }}
    >
      <img src={image} alt={title} className="bubble-image" />
      <div className="bubble-title">{title}</div>
    </div>
  );
};

const Ecosystem = ({ heading, bubbles }) => {
  const distributeBubbles = (bubbles) => {
    return bubbles.map((bubble, index) => {
      const angle = (index * 2 * Math.PI) / bubbles.length;
      return { ...bubble, angle, colorIndex: index };
    });
  };

  const distributedBubbles = distributeBubbles(bubbles);

  return (
    <section className="ecosystem-container pt-20 pb-40">
      <h2 className="ecosystem-heading">{heading}</h2>
      <div className="ecosystem-wrapper">
        <div className="ecosystem-center">
          <img src="/aperture.png" alt="Oculus AI" className="center-logo" />
          <div>Oculus AI</div>
        </div>
        {distributedBubbles.map((bubble, index) => (
          <Bubble
            key={index}
            image={bubble.image}
            title={bubble.title}
            size={bubble.size || 60}
            angle={bubble.angle}
            colorIndex={bubble.colorIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Ecosystem; 