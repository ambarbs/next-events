import React from "react";
import "./elevatedCard.css";

interface ElevatedCardProps {
  imageUrl: string;
  description: string;
}

const ElevatedCard: React.FC<ElevatedCardProps> = ({ imageUrl, description }) => {
  return (
    <div className="elevated-with-image-background" style={{ backgroundImage: `url(${imageUrl})` }}>
     {description}
    </div>
  );
};

export default ElevatedCard;
