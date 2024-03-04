import dayjs from "dayjs";

export function formatDate(date: Date) {
  const newDate =
    String(dayjs(date).get("month") + 1).padStart(2, "0") +
    "/" +
    dayjs(date).get("year");
  return newDate;
}
