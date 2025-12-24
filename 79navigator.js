function navigate(commands) {
  let current = "Home";
  const backStack = [];
  const forwardStack = [];

  for (const command of commands) {
    if (command.startsWith("Visit ")) {
      // Visiting a new page clears forward history
      backStack.push(current);
      current = command.slice(6);
      forwardStack.length = 0;
    } 
    else if (command === "Back") {
      if (backStack.length > 0) {
        forwardStack.push(current);
        current = backStack.pop();
      }
    } 
    else if (command === "Forward") {
      if (forwardStack.length > 0) {
        backStack.push(current);
        current = forwardStack.pop();
      }
    }
  }

  return current;
}
// Example usage:
console.log(navigate(["Visit Page1", "Visit Page2", "Back", "Visit Page3", "Back", "Forward"])); // should return "Page3"
console.log(navigate(["Visit A", "Visit B", "Visit C", "Back", "Back", "Forward"])); // should return "B"
console.log(navigate(["Back", "Visit X", "Forward", "Back"])); // should return "Home"
console.log(navigate(["Visit HomePage", "Visit AboutUs", "Back", "Back"])); // should return "Home"
console.log(navigate(["Visit PageA", "Visit PageB", "Visit PageC", "Back", "Forward", "Forward"])); // should return "PageC"