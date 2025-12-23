function mask(card) {
  const separator = card.includes("-") ? "-" : " ";
  const parts = card.split(separator);

  for (let i = 0; i < parts.length - 1; i++) {
    parts[i] = "****";
  }

  return parts.join(separator);
}
// Example usage:
console.log(mask("1234-5678-9012-3456")); // should return "****-****-****-3456"
console.log(mask("9876 5432 1098 7654")); // should return "**** **** **** 7654"
console.log(mask("1111-2222-3333-4444")); // should return "****-****-****-4444"
console.log(mask("5555 6666 7777 8888")); // should return "**** **** **** 8888"
console.log(mask("0000-1111-2222-3333")); // should return "****-****-****-3333"