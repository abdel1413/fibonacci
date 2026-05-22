function getDeepestBrackets(str) {
    let stack = [];
    let maxDepth = 0;
    let result = "";

    for (let char of str) {

        // Opening bracket
        if ("([{".includes(char)) {
            stack.push("");
            
            // Update deepest level
            if (stack.length > maxDepth) {
                maxDepth = stack.length;
            }

        // Closing bracket
        } else if (")]}".includes(char)) {

            const content = stack.pop();

            // If this was the deepest level
            if (stack.length + 1 === maxDepth) {
                result = content;
            }

        // Normal character
        } else {
            if (stack.length > 0) {
                stack[stack.length - 1] += char;
            }
        }
    }

    return result;
}