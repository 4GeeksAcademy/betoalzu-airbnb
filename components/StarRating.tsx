import React from "react";

type StarRatingProps = {
  rating: number;
  max?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, max = 5 }) => {
  return (
    <span>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
      ))}
    </span>
  );
};

export default StarRating;
