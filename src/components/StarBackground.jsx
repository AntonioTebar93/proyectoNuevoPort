import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 8000);

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        movementSpeed: Math.random() * 1 + 0.5, // Velocidad de movimiento
      });
    }

    setStars(newStars);
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 gradient-background"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationName: "moveStar", // Movimiento hacia abajo
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};
