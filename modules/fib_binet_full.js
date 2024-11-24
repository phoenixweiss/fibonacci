// Using Binet's formula (full version)
// This algorithm computes Fibonacci numbers using a mathematical formula derived from
// the closed-form solution of the Fibonacci recurrence relation.
// Time complexity: O(1), Space complexity: O(1).

function fib(n) {
  // Calculate the golden ratio and its conjugate
  const a = (1 + 5 ** 0.5) / 2; // Golden ratio
  const b = (1 - 5 ** 0.5) / 2; // Conjugate of the golden ratio

  // Apply Binet's formula: (a^n - b^n) / sqrt(5)
  return (a ** n - b ** n) / 5 ** 0.5;
}

// Export the function as the default export
export { fib as default };
