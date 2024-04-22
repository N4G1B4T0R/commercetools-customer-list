export const convertDateFormat = (inputDate: string) => {
  const date = new Date(inputDate);
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return formatter.format(date).replace(',', '');
};
