export const truncateString = (str: string | undefined, num: number): string | undefined => {
  if (!str) return str;
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

export const roundNumber = (value: number, precision: number = 2) => {
  const places = 10 ** precision;
  return Math.round(places * value)/places;
}
