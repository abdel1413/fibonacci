const Roles = ["user", "creator", "moderator", "staff", "admin"];

function isValidSchema(obj) {
  if (
    obj === null ||
    typeof obj !== "object" ||
    typeof obj.username !== "string" ||
    typeof obj.posts !== "number" ||
    typeof obj.verified !== "boolean" ||
    !Roles.includes(obj.role) ||
    (obj.supporter !== undefined && typeof obj.supporter !== "boolean") ||
    !Array.isArray(obj.badges) ||
    !obj.badges.every(badge => typeof badge === "string")
  ) {
    return false;
  }

  return true;
}

console.log(
  isValidSchema({
    username: "nicole",
    posts: 65,
    verified: true,
    role: "admin",
    supporter: false,
    badges: ["first-post", 18],
  })
); // false