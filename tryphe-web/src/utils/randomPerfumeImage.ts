export function getRandomPerfumeImage(): string {

  const total = 39;

  const index = Math.floor(Math.random() * total) + 1;

  const padded = index.toString().padStart(2, "0");

  return `/perfumes/perfume-${padded}.jpg`;

}