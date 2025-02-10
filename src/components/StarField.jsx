import { useEffect, useRef } from "react";

const StarField = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("span");
      star.classList.add("star");

      const startX = Math.random() * window.innerWidth + "px";
      const startY = Math.random() * window.innerHeight + "px";

      const endX = (parseFloat(startX) + Math.random() * 100 - 50) + "px";
      const endY = (parseFloat(startY) + Math.random() * 100 - 50) + "px";

      const endOpac = Math.random();

      const size = Math.random() * 4 + 1 + "px";

      star.style.setProperty("--start-x", startX);
      star.style.setProperty("--start-y", startY);
      star.style.setProperty("--end-x", endX);
      star.style.setProperty("--end-y", endY);
      star.style.setProperty("--end-opac", endOpac);
      star.style.height = size;
      star.style.width = size;

      star.style.animationDelay = Math.random() * 5 + "s";

      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="stars-container"></div>;
};

export default StarField;