function formatDate(dateStr) {
  const months = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12"
  };

  // Example: "December 6, 2025"
  const [monthName, dayWithComma, year] = dateStr.split(" ");
  const month = months[monthName];
  const day = dayWithComma.replace(",", "").padStart(2, "0");

  return `${year}-${month}-${day}`;
}
formatDate("December 6, 2025") // should return "2025-12-06"
formatDate("July 20, 1969") // should return "1969-07-20"
formatDate("January 1, 2000") // should return "2000-01-01"