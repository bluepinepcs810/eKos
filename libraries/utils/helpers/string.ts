export const truncateString = (str: string | undefined, num: number): string | undefined => {
  if (!str) return str;
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};
