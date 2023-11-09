import React, { useState } from "react";
import FlipAnimation from "./FlipAnimation";
import "./starRating.css";
interface StarRatingProps {
  myRating: number;
  maxRating?: number;
  onClick?: Function;
}

const StarRating: React.FC<StarRatingProps> = ({
  maxRating = 5,
  onClick,
  myRating,
}) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [showRevealButton, setShowRevealButton] = useState(false);
  const [showMyRating, setShowMyRating] = useState(false);

  const setIsRevealButtonVisible = () => setShowRevealButton(true);

  const handleStarClick = (newRating: number) => {
    setRating(newRating);
    setShowRevealButton(true);
  };

  console.log('my rating = ', myRating)

  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span
        key={i}
        style={{ color: i <= hoveredRating ? "gold" : "gray" }}
        className="cursor-pointer"
        onMouseEnter={() => {
          setHoveredRating(i);
        }}
        onMouseLeave={() => setHoveredRating(rating)}
        onClick={() => handleStarClick(i)}
      >
        *
      </span>
    );
  }

  const myRatings = [];
  for (let i = 0; i <5; i++) {
    myRatings.push(
      <span
        key={i}
        style={{ color: i+1 <= myRating ? "gold" : "gray" }}
        className="cursor-pointer"
      >
        *
      </span>
    );
  }
  console.log({myRatings})
  return (
    <div className="flex-col justify-center items-center">
      <div className="flex justify-around space-x-1 text-3xl">{stars}</div>
      <FlipAnimation
        frontContent={
          <>
            {showRevealButton && !showMyRating && (
              <div
                className=" reveal-button"
                onClick={() => setShowMyRating(true)}
              >
                Reveal
              </div>
            )}
          </>
        }
        flippedContent={
          <>
            {showMyRating && (
              <div className="flex-col justify-center items-center">
                <h6 className="text-sm">My rating</h6>
                {myRating === 0 && 'N/A'}
                {myRating >= 0 && myRatings}
              </div>
            )}
          </>
        }
        isFlipped={showMyRating}
      />
    </div>
  );
};

export default StarRating;
