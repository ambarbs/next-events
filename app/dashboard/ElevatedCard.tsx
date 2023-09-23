import React from "react";
import "./elevatedCard.css";

interface ElevatedCardProps {
  imageUrl: string;
}

const ElevatedCard: React.FC<ElevatedCardProps> = ({ imageUrl }) => {
  return (
    <div className="elevated-with-image-background" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Content of the card */}
    </div>
  );
};

export default ElevatedCard;
