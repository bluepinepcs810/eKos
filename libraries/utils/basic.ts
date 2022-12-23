export const getUnixTs = () => {
  return new Date().getTime() / 1000;
};
export const wait = async (milliSecond: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, milliSecond));
  return;
};
