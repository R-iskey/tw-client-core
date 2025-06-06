export default function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const res = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    res.push(array.slice(i, i + chunkSize));
  }
  return res;
}
