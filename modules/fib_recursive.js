// Naive recursive algorithm for calculating Fibonacci numbers
// This algorithm uses a straightforward but inefficient approach
// with exponential time complexity O(2^n) and linear space complexity O(n).

function fib(n) {
  // Base case: if n is 0 or 1, return n directly
  if (n <= 1) {
    return n;
  } else {
    // Recursive case: sum of the two preceding Fibonacci numbers
    // Calls itself for (n-1) and (n-2)
    return fib(n - 1) + fib(n - 2);
  }
}

// Export the function as the default export
export { fib as default };
