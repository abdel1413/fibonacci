function isValidSchema(obj) {
  const roles = new Set([
    "user",
    "creator",
    "moderator",
    "staff",
    "admin",
  ]);

  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean" &&
    roles.has(obj.role) &&
    (obj.supporter === undefined || typeof obj.supporter === "boolean")
  );
}