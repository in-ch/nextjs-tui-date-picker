export const getFirstDayOfMonth = (dateString: string, format: string) => {
  const parts = dateString.split(/[-: ]/);
  const formatParts = format.split(/[-: ]/);

  let year, month;
  for (let i = 0; i < formatParts.length; i++) {
    if (formatParts[i].toLowerCase() === 'yyyy') {
      year = parseInt(parts[i], 10);
    } else if (formatParts[i].toLowerCase() === 'mm') {
      month = parseInt(parts[i], 10) - 1;
    }
  }

  return new Date(year || 0, month || 0, 1);
};
