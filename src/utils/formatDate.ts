export function formatDate(date: Date) {
  const newDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return newDate;
}
