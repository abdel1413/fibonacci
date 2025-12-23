function validate(email) {
  // must contain exactly one @
  if ((email.match(/@/g) || []).length !== 1) return false;

  const [local, domain] = email.split("@");

  // local part rules
  if (!/^[A-Za-z0-9._-]+$/.test(local)) return false;
  if (local.startsWith(".") || local.endsWith(".")) return false;
  if (local.includes("..")) return false;

  // domain rules
  if (!domain.includes(".")) return false;
  if (domain.includes("..")) return false;

  // must end with dot + at least two letters
  if (!/\.[A-Za-z]{2,}$/.test(domain)) return false;

  return true;
}
// Example usage:
 validate("a@b.cd") // should  return true.
 validate("hell.-w.rld@example.com") // should return true.
 validate(".b@sh.rc") //  should return false.