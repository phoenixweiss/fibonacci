// Optimized recursive algorithm with caching (memoization)
// This algorithm improves efficiency by storing previously calculated
// Fibonacci numbers in a cache, avoiding redundant computations.
// Time complexity: O(n), Space complexity: O(n).

function fib_array(n) {
  // Initialize a cache to store computed Fibonacci numbers
  // The first two Fibonacci numbers are pre-filled
  let cache = [0, 1];

  // Recursive function that uses the cache
  function fib(n) {
    // Check if the result is already in the cache
    let result = cache[n];

    // If the result is not in the cache, calculate it
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2); // Recursive calls
      cache[n] = result; // Store the result in the cache
    }

    // Return the result
    return result;
  }

  // Start the recursive computation with the input number
  return fib(n);
}

// Export the function as the default export
export { fib_array as default };
