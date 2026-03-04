import type { Perfume, OlfactiveFamily } from "../types"

export const families: OlfactiveFamily[] = [
  "citricos",
  "frescos",
  "aromaticos",
  "florales",
  "frutales",
  "amaderados",
  "orientales",
  "dulces",
  "almizclados",
  "verdes",
  "especiados",
  "cuero"
]

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: "Tryphé Aura Citrus",
    image: "/src/assets/perfume-1.jpg",
    price: 1890,
    profile: {
      citricos: 9,
      frescos: 8,
      aromaticos: 6,
      florales: 2,
      frutales: 4,
      amaderados: 3,
      orientales: 1,
      dulces: 2,
      almizclados: 3,
      verdes: 7,
      especiados: 2,
      cuero: 0
    }
  },
  {
    id: 2,
    name: "Tryphé Noir Amber",
    image: "../../assets/perfume-2.jpg",
    price: 2490,
    profile: {
      citricos: 1,
      frescos: 2,
      aromaticos: 3,
      florales: 2,
      frutales: 1,
      amaderados: 7,
      orientales: 9,
      dulces: 8,
      almizclados: 6,
      verdes: 1,
      especiados: 7,
      cuero: 6
    }
  }
]