// Using Binet's formula (simplified version)
// This algorithm simplifies the formula by omitting the term with b^n,
// as it approaches 0 for large n. Results are rounded to handle floating-point errors.
// Time complexity: O(1), Space complexity: O(1).

function fib(n) {
  // Calculate the golden ratio
  const a = (1 + 5 ** 0.5) / 2; // Golden ratio

  // Simplified formula: round(a^n / sqrt(5))
  return Math.round(a ** n / 5 ** 0.5);
}

// Export the function as the default export
export { fib as default };
