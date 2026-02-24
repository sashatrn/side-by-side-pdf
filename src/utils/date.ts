export function parseIsoDate(dateStr?: string): Date | undefined {
  if (!dateStr) return undefined;

  const parts = dateStr.split("-");
  if (parts.length !== 3) return undefined;

  const [yearStr, monthStr, dayStr] = parts;

  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    return undefined;
  }

  // month у Date: 0-11
  return new Date(year, month - 1, day);
}

export function formatDate(
  date: Date | undefined,
  pattern: "dd.MM.yyyy" | "yyyy" | "MM.yyyy" = "dd.MM.yyyy",
): string {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  switch (pattern) {
    case "dd.MM.yyyy":
      return `${day}.${month}.${year}`;
    case "yyyy":
      return year;
    case "MM.yyyy":
      return `${month}.${year}`;
    default:
      return `${day}.${month}.${year}`;
  }
}