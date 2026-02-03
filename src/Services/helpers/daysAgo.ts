export const daysAgo = (endDate: number, days: number): number => {
  const date = new Date(endDate);
  date.setDate(date.getDate() - days);
  return date.getTime();
};


