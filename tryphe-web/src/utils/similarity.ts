export function cosineSimilarity(
  userVector: number[],
  perfumeVector: number[]
): number {

  const dotProduct = userVector.reduce(
    (sum, value, index) => sum + value * perfumeVector[index],
    0
  )

  const magnitudeA = Math.sqrt(
    userVector.reduce((sum, value) => sum + value * value, 0)
  )

  const magnitudeB = Math.sqrt(
    perfumeVector.reduce((sum, value) => sum + value * value, 0)
  )

  return dotProduct / (magnitudeA * magnitudeB || 1)
}