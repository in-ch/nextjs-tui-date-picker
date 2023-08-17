export const getLastDayOfMonth = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();

  const lastDay = new Date(year, month + 1, 0);
  const lastDayOfMonth = lastDay.getDate();

  return `${year}-${(month + 1).toString().padStart(2, '0')}-${lastDayOfMonth
    .toString()
    .padStart(2, '0')}`;
};
