function isValidSchema(obj) {
  const roles = ["user", "creator", "moderator", "staff", "admin"];

  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean" &&
    roles.includes(obj.role)
  );
}