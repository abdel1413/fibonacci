function validate(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean"
  );
}