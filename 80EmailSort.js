function sort(emails) {
  return [...emails].sort((a, b) => {
    const [userA, domainA] = a.split("@");
    const [userB, domainB] = b.split("@");

    const domainCompare = domainA.toLowerCase().localeCompare(domainB.toLowerCase());
    if (domainCompare !== 0) return domainCompare;

    return userA.toLowerCase().localeCompare(userB.toLowerCase());
  });
}
// Example usage:
console.log(sort([" " ])); // should return [" "]
console.log(sort(["     "])); // should return ["     "]
console.log(sort([" "])); // should return [" "]
console.log(sort([" "])); // should return [" "]
console.log(sort([" "])); // should return [" "]    