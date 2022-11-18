export function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

export function getDayName(dateStr) {
  var date = new Date();
  date.setDate(dateStr);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}
