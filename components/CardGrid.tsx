import React from "react";
import Link from "next/link";
import Card from "./Card";
import type { Listing } from "@/data/listings";

type CardGridProps = {
  items: Listing[];
};

const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  return (
    <div>
      {/* Scroll horizontal en móvil, grid en escritorio */}
      <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-x-visible">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/rooms/${item.id}`}
            className="flex-shrink-0 w-[260px] sm:w-auto"
          >
            <Card {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
