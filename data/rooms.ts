export type Room = {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  hostName: string;
  hostYears: number;
  gallery: string[];
  amenities: Array<{ icon: string; label: string }>;
};

export const ROOMS: Room[] = [
  {
    id: "1",
    title: "Apartamento en París con balcón",
    price: 158,
    rating: 4.9,
    reviews: 128,
    location: "Paris, Francia",
    hostName: "Lucie",
    hostYears: 6,
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { icon: "WiFi", label: "Wifi" },
      { icon: "AC", label: "Aire acondicionado" },
      { icon: "KIT", label: "Cocina" },
      { icon: "TV", label: "TV" },
      { icon: "WASH", label: "Lavadora" },
      { icon: "WORK", label: "Zona de trabajo" },
    ],
  },
  {
    id: "2",
    title: "Loft moderno cerca del centro",
    price: 227,
    rating: 4.8,
    reviews: 94,
    location: "Paris, Francia",
    hostName: "Mathieu",
    hostYears: 4,
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { icon: "WiFi", label: "Wifi" },
      { icon: "PARK", label: "Aparcamiento" },
      { icon: "KIT", label: "Cocina" },
      { icon: "TV", label: "TV" },
      { icon: "SAFE", label: "Entrada autonoma" },
      { icon: "HEAT", label: "Calefaccion" },
    ],
  },
  {
    id: "3",
    title: "Habitación acogedora en Villejuif",
    price: 160,
    rating: 4.7,
    reviews: 76,
    location: "Villejuif, Francia",
    hostName: "Sophie",
    hostYears: 5,
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { icon: "WiFi", label: "Wifi" },
      { icon: "AC", label: "Aire acondicionado" },
      { icon: "WASH", label: "Lavadora" },
      { icon: "LOCK", label: "Cerradura segura" },
      { icon: "DESK", label: "Escritorio" },
      { icon: "HEAT", label: "Calefaccion" },
    ],
  },
  {
    id: "4",
    title: "Habitación luminosa en París",
    price: 160,
    rating: 4.6,
    reviews: 63,
    location: "Paris, Francia",
    hostName: "Antoine",
    hostYears: 3,
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { icon: "WiFi", label: "Wifi" },
      { icon: "KIT", label: "Cocina" },
      { icon: "TV", label: "TV" },
      { icon: "SAFE", label: "Entrada autonoma" },
      { icon: "WASH", label: "Lavadora" },
      { icon: "WORK", label: "Zona de trabajo" },
    ],
  },
  {
    id: "5",
    title: "Habitación tranquila en Issy-les-Moulineaux",
    price: 134,
    rating: 4.5,
    reviews: 52,
    location: "Issy-les-Moulineaux, Francia",
    hostName: "Camille",
    hostYears: 7,
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { icon: "WiFi", label: "Wifi" },
      { icon: "AC", label: "Aire acondicionado" },
      { icon: "KIT", label: "Cocina" },
      { icon: "LOCK", label: "Cerradura segura" },
      { icon: "PARK", label: "Aparcamiento" },
      { icon: "HEAT", label: "Calefaccion" },
    ],
  },
];
