export type OlfactiveFamily =
  | "citricos"
  | "frescos"
  | "aromaticos"
  | "florales"
  | "frutales"
  | "amaderados"
  | "orientales"
  | "dulces"
  | "almizclados"
  | "verdes"
  | "especiados"
  | "cuero"

export type OlfactiveProfile = Record<OlfactiveFamily, number>

export interface Perfume {
  id: number
  name: string
  image: string
  price: number
  profile: OlfactiveProfile
}