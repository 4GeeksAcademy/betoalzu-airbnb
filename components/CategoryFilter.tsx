import React from "react";

export type Category = {
  label: string;
  icon: React.ReactNode;
};

type CategoryFilterProps = {
  categories: Category[];
  active: string;
  onSelect: (label: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, active, onSelect }) => {
  return (
    <div className="flex overflow-x-auto gap-2 py-2">
      {categories.map(cat => (
        <button
          key={cat.label}
          className={`flex flex-col items-center px-3 py-1 rounded ${active === cat.label ? 'bg-gray-200 font-bold' : ''}`}
          onClick={() => onSelect(cat.label)}
        >
          <span>{cat.icon}</span>
          <span className="text-xs">{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
