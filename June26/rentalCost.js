function getRentalCost(rentalTimestamp, returnTimestamp, tier) {
  const pricing = {
    1: {
      baseCost: 499,
      lateFee: 399,
    },
    3: {
      baseCost: 399,
      lateFee: 299,
    },
    7: {
      baseCost: 299,
      lateFee: 99,
    },
  };

  const rentalDate = new Date(rentalTimestamp);
  const returnDate = new Date(returnTimestamp);

  // Create the due date at 12:00 PM UTC
  const dueDate = new Date(rentalDate);

  dueDate.setUTCHours(12, 0, 0, 0);
  dueDate.setUTCDate(dueDate.getUTCDate() + tier);

  let lateDays = 0;

  if (returnDate > dueDate) {
    const millisecondsLate = returnDate - dueDate;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    lateDays = Math.ceil(millisecondsLate / millisecondsPerDay);
  }

  const baseCost = pricing[tier].baseCost;
  const lateFee = pricing[tier].lateFee;

  const totalInCents = baseCost + lateDays * lateFee;

  return `$${(totalInCents / 100).toFixed(2)}`;
}