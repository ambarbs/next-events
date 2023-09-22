import React, { useState } from "react";
import './flip.css';

interface FlipAnimationProps {
  isFlipped: boolean;
  frontContent: React.ReactNode;
  flippedContent: React.ReactNode;
}

const FlipAnimation: React.FC<FlipAnimationProps> = ({
  isFlipped,
  frontContent,
  flippedContent,
}) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
    }, 500);
  };

  return (
    <div className="flip-animation">
      <div
        className={`flip-animation-inner ${isFlipping ? "flip" : ""}`}
        onClick={handleFlip}
      >
        {isFlipped ? flippedContent : frontContent}
      </div>
    </div>
  );
};

export default FlipAnimation;
