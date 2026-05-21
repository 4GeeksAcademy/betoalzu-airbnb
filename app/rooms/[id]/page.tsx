"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import StarRating from "@/components/StarRating";
import { ROOMS, type Room } from "@/data/rooms";

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const roomId = params?.id;

  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<Room | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = ROOMS.find((item) => item.id === roomId) ?? null;
      setRoom(found);
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [roomId]);

  const activePhoto = useMemo(() => {
    if (!room || room.gallery.length === 0) return "";
    return room.gallery[activePhotoIndex];
  }, [room, activePhotoIndex]);

  const handlePrev = () => {
    if (!room) return;
    setActivePhotoIndex((prev) =>
      prev === 0 ? room.gallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!room) return;
    setActivePhotoIndex((prev) => (prev + 1) % room.gallery.length);
  };

  const decreaseGuests = () => setGuests((prev) => Math.max(1, prev - 1));
  const increaseGuests = () => setGuests((prev) => Math.min(8, prev + 1));

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Loader />
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-2xl font-bold text-zinc-900">Habitacion no encontrada</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-6">
        <section className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm mb-6">
          <div className="relative h-[280px] sm:h-[380px] md:h-[460px]">
            <img
              src={activePhoto}
              alt={room.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4">
              <button
                onClick={handlePrev}
                className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-800 shadow"
              >
                Anterior
              </button>
              <button
                onClick={handleNext}
                className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-800 shadow"
              >
                Siguiente
              </button>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto p-3">
            {room.gallery.map((photo, index) => (
              <button
                key={photo}
                onClick={() => setActivePhotoIndex(index)}
                className={`h-16 w-24 overflow-hidden rounded-md border ${
                  activePhotoIndex === index
                    ? "border-rose-500"
                    : "border-zinc-200"
                }`}
              >
                <img
                  src={photo}
                  alt={`Foto ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_360px]">
          <div className="space-y-6">
            <header className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h1 className="text-2xl font-bold text-zinc-900">{room.title}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
                <span className="flex items-center gap-1">
                  <StarRating rating={Math.round(room.rating)} />
                  <strong className="text-zinc-800">{room.rating.toFixed(1)}</strong>
                </span>
                <span>({room.reviews} reseñas)</span>
                <span>{room.location}</span>
              </div>
            </header>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-zinc-300 flex items-center justify-center text-sm font-semibold text-zinc-700">
                AV
              </div>
              <div>
                <p className="text-base font-semibold text-zinc-900">
                  Anfitrion: {room.hostName}
                </p>
                <p className="text-sm text-zinc-600">
                  {room.hostYears} años como anfitrion
                </p>
              </div>
            </div>

            <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-zinc-900">Servicios</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2"
                  >
                    <p className="text-xs font-semibold text-zinc-500">{amenity.icon}</p>
                    <p className="text-sm text-zinc-800">{amenity.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm h-fit lg:sticky lg:top-24">
            <p className="text-lg font-semibold text-zinc-900">
              {room.price} EUR <span className="text-sm font-normal text-zinc-600">/ noche</span>
            </p>

            <div className="mt-4 rounded-xl border border-zinc-200 p-3">
              <p className="text-sm text-zinc-600">Huespedes</p>
              <div className="mt-2 flex items-center justify-between">
                <button
                  onClick={decreaseGuests}
                  className="h-8 w-8 rounded-full border border-zinc-300 text-zinc-700"
                >
                  -
                </button>
                <span className="font-semibold text-zinc-900">{guests}</span>
                <button
                  onClick={increaseGuests}
                  className="h-8 w-8 rounded-full border border-zinc-300 text-zinc-700"
                >
                  +
                </button>
              </div>
              <p className="mt-2 text-xs text-zinc-500">Min 1 - Max 8</p>
            </div>

            <button className="mt-5 w-full rounded-xl bg-rose-500 px-4 py-3 font-semibold text-white hover:bg-rose-600">
              Reservar
            </button>
          </aside>
        </section>
      </main>
    </div>
  );
}
