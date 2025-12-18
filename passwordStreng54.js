function checkStrength(password) {
  let score = 0;

  // Rule 1: at least 8 characters
  if (password.length >= 8) score++;

  // Rule 2: contains uppercase and lowercase letters
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;

  // Rule 3: contains at least one number
  if (/\d/.test(password)) score++;

  // Rule 4: contains at least one special character
  if (/[!@#$%^&*]/.test(password)) score++;

  if (score < 2) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

// Example usage:
console.log(checkStrength("password")); // should return "weak"
console.log(checkStrength("Password1")); // should return "medium"
console.log(checkStrength("Pass1!")); // should return "weak"
console.log(checkStrength("StrongPass1!")); // should return "strong"
console.log(checkStrength("12345678")); // should return "weak"
console.log(checkStrength("Password!")); // should return "medium"
console.log(checkStrength("P@ssw0rd")); // should return "strong"   