import React from "react";
import StarRating from "./StarRating";

type CardProps = {
  title: string;
  price: number;
  rating: number;
  image?: string;
  subtitle?: string;
  total?: string;
  tag?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  price,
  rating,
  image,
  subtitle,
  total,
  tag,
}) => {
  return (
    <div className="rounded-xl shadow-sm bg-white flex flex-col min-w-[250px] max-w-[300px] relative overflow-hidden border border-gray-100">
      <div className="relative h-44 w-full mb-2">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="flex items-center justify-center h-full w-full bg-gray-200">Foto</span>
        )}
        {tag && (
          <span className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded-full shadow font-medium">
            {tag}
          </span>
        )}
        <span className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#FF385C" strokeWidth="2"/></svg>
        </span>
      </div>
      <div className="flex-1 px-3 pb-3">
        <h3 className="font-semibold text-base mb-1 truncate">{title}</h3>
        {subtitle && <div className="text-xs text-gray-500 mb-1">{subtitle}</div>}
        <div className="flex items-center justify-between mb-1">
          <span className="font-bold text-sm">{total ? total : `€${price}/noche`}</span>
          <span className="flex items-center text-yellow-500 text-xs">
            <StarRating rating={rating} />
            <span className="ml-1 text-gray-700 font-medium">{rating.toFixed(2)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
