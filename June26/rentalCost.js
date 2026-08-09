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

//2nd version
const converter = (dollar) => {
  return Math.round(dollar * 100);
};

function getRentalCost(rented, returned, tier) {
  const rentalBoard = {
    1: {
      base: converter(4.99),
      lateFees: converter(3.99),
    },
    3: {
      base: converter(3.99),
      lateFees: converter(2.99),
    },
    7: {
      base: converter(2.99),
      lateFees: converter(0.99),
    },
  };

  const rentedDate = new Date(rented);
  const returnedDate = new Date(returned);

  // Start with the rental date
  const dueDate = new Date(rentedDate);

  // Move forward by the rental tier
  dueDate.setUTCDate(dueDate.getUTCDate() + tier);

  // Set the due time to 12:00 PM UTC
  dueDate.setUTCHours(12, 0, 0, 0);

  let lateDays = 0;

  if (returnedDate > dueDate) {
    const millisecondsLate = returnedDate - dueDate;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    lateDays = Math.ceil(
      millisecondsLate / millisecondsPerDay
    );
  }

  const baseCost = rentalBoard[tier].base;
  const lateFee = rentalBoard[tier].lateFees;

  const totalCents = baseCost + lateDays * lateFee;

  return `$${(totalCents / 100).toFixed(2)}`;
}