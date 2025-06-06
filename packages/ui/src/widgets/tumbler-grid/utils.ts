export function getRandomSubset(arr: number[], n: number) {
  // Randomly pick n unique items from arr
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

// Helper for a new random image index
export function getRandomNextIdx(curr: number, total: number) {
  let next = curr;
  while (next === curr) {
    next = Math.floor(Math.random() * total);
  }
  return next;
}
