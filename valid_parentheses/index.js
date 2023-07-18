function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false; // No matching open bracket
      }

      const top = stack.pop();

      if (
        (char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')
      ) {
        return false; // Mismatched brackets
      }
    }
  }

  return stack.length === 0; // Check if there are any unclosed brackets
}
const s = '(([]{}';

console.log(isValid(s));
