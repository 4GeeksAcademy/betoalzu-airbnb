export type Listing = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image?: string;
  subtitle?: string;
  total?: string;
  tag?: string;
};

export const LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Apartamento en París",
    price: 158,
    rating: 5,
    image:
      "",
    subtitle: "14-16 ago · Anfitrion particular",
    total: "158 EUR en total",
    tag: "Recomendacion del viajero",
  },
  {
    id: "2",
    title: "Apartamento en París",
    price: 227,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    subtitle: "12-14 jun · Anfitrion particular",
    total: "227 EUR en total",
    tag: "Recomendacion del viajero",
  },
  {
    id: "3",
    title: "Habitacion en Villejuif",
    price: 160,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    subtitle: "12-14 jun · Anfitrion particular",
    total: "160 EUR en total",
    tag: "Recomendacion del viajero",
  },
  {
    id: "4",
    title: "Habitacion en París",
    price: 160,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    subtitle: "10-12 jul · Anfitrion particular",
    total: "160 EUR en total",
    tag: "Recomendacion del viajero",
  },
  {
    id: "5",
    title: "Habitacion en Issy-les-Moulineaux",
    price: 134,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    subtitle: "5-7 jun · Anfitrion particular",
    total: "134 EUR en total",
    tag: "Recomendacion del viajero",
  },
];
