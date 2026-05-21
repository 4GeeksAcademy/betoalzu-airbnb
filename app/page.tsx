
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CardGrid from "@/components/CardGrid";
import Loader from "@/components/Loader";
import { LISTINGS } from "@/data/listings";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<typeof LISTINGS>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(LISTINGS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filtrado por búsqueda
  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />
      <div className="max-w-6xl mx-auto px-2 py-4">
        {/* Barra de búsqueda grande */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-full max-w-2xl">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>
        {/* Sección única con todos los destinos */}
        <div className="mt-2">
          {loading ? <Loader /> : <CardGrid items={filtered} />}
        </div>
      </div>
    </div>
  );
}
