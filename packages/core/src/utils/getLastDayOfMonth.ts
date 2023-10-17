export const getLastDayOfMonth = (dateString: string, format: string) => {
  const parts = dateString.split(/[-: ]/);
  const formatParts = format.split(/[-: ]/);

  let year, month, day;
  for (let i = 0; i < formatParts.length; i++) {
    if (formatParts[i].toLowerCase() === 'yyyy') {
      year = parseInt(parts[i], 10);
    } else if (formatParts[i].toLowerCase() === 'mm') {
      month = parseInt(parts[i], 10) - 1; // JavaScript에서 월은 0부터 시작합니다 (0은 1월, 11은 12월).
    } else if (formatParts[i].toLowerCase() === 'dd') {
      day = parseInt(parts[i], 10);
    }
  }

  return new Date(year || 0, month || 0, day);
};
