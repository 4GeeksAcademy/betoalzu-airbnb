"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import { LISTINGS } from "@/data/listings";

type SortOrder = "asc" | "desc";

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const filteredAndSorted = useMemo(() => {
    const filtered = LISTINGS.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    return [...filtered].sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [search, sortOrder]);

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-6">
        <div className="mb-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm border border-zinc-200">
          <p className="text-sm text-zinc-700">
            {filteredAndSorted.length} resultados
          </p>
          <label className="flex items-center gap-2 text-sm text-zinc-700">
            Ordenar por precio
            <select
              className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm outline-none"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </label>
        </div>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredAndSorted.map((item) => (
              <Link key={item.id} href={`/rooms/${item.id}`}>
                <Card
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  subtitle={item.subtitle}
                  total={item.total}
                  tag={item.tag}
                />
              </Link>
            ))}
          </div>

          <aside className="h-[320px] rounded-2xl border border-zinc-300 bg-zinc-200 text-zinc-600 flex items-center justify-center text-lg font-semibold lg:sticky lg:top-24">
            Mapa
          </aside>
        </section>
      </main>
    </div>
  );
}
