export const getFirstDayOfMonth = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();

  return `${year}-${(month + 1).toString().padStart(2, '0')}-01`;
};
