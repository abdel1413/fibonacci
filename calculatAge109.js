function calculateAge(birthday) {
  const [year, month, day] = birthday.split("-").map(Number);

  const refYear = 2025;
  const refMonth = 11; // November
  const refDay = 27;

  let age = refYear - year;

  // Check if birthday has NOT happened yet in 2025
  if (
    month > refMonth ||
    (month === refMonth && day > refDay)
  ) {
    age--;
  }

  return age;
}
// Example usage:
console.log(calculateAge("2000-12-15")); // should return 24
console.log(calculateAge("1990-05-20")); // should return 35
console.log(calculateAge("2025-11-28")); // should return 0
console.log(calculateAge("1985-11-27")); // should return 40
console.log(calculateAge("2025-01-01")); // should return 0
console.log(calculateAge("1970-06-15")); // should return 55
