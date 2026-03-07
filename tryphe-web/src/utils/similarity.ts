import type{ Fragrance } from "../types/fragrance";
import { getRandomPerfumeImage } from "./randomPerfumeImage";

export function calculateSimilarity(
  profile: number[],
  fragrances: Fragrance[]
) {

  const results = fragrances.map((f) => {

    let diff = 0;

    for (let i = 0; i < profile.length; i++) {
      diff += Math.abs(profile[i] - f.notes[i]);
    }

    const maxDiff = profile.length * 10;

    const score = 100 - (diff / maxDiff) * 100;

    return {
      fragrance: {
        ...f,
        image: getRandomPerfumeImage()
      },
      score: Math.round(score)
    };
  });

  results.sort((a, b) => b.score - a.score);

  return results;

}