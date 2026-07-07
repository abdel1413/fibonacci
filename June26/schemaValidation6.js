const Roles = ["user", "creator", "moderator", "staff", "admin"];

function isUserProfile(user) {
  return (
    user !== null &&
    typeof user === "object" &&
    typeof user.username === "string" &&
    typeof user.posts === "number" &&
    typeof user.verified === "boolean" &&
    Roles.includes(user.role) &&
    (user.supporter === undefined ||
      typeof user.supporter === "boolean") &&
    Array.isArray(user.badges) &&
    user.badges.every(badge => typeof badge === "string")
  );
}

function isValidSchema(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    Array.isArray(obj.users) &&
    obj.users.every(isUserProfile)
  );
}
// Example usage:
console.log(
  isValidSchema({
    users: [
      {
        username: "nicole",
        posts: 65,
        verified: true,
        role: "admin",
        supporter: false,
        badges: ["first-post", "top-contributor"],
      },
      {
        username: "john",
        posts: 10,
        verified: false,
        role: "user",
        badges: [],
      },
    ],
  })
); // true

console.log(
  isValidSchema({
    users: [
      {
        username: "nicole",
        posts: 65,
        verified: true,
        role: "admin",
        supporter: false,
        badges: ["first-post", 18],
      },
    ],
  })
); // false