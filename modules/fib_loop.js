// Classic iterative algorithm for calculating Fibonacci numbers
// This algorithm uses a loop to iteratively compute the Fibonacci sequence
// with linear time complexity O(n) and constant space complexity O(1).

function fib(n) {
  // Initialize the first two Fibonacci numbers
  let prev = 0, next = 1;

  // Loop n times to compute the nth Fibonacci number
  for (let i = 0; i < n; i++) {
    // Temporarily store the current value of `next`
    let temp = next;

    // Update `next` to the sum of `prev` and `next` (the next Fibonacci number)
    next = prev + next;

    // Move `prev` forward to the previous `next` value
    prev = temp;
  }

  // Return the nth Fibonacci number, which ends up in `prev`
  return prev;
}

// Export the function as the default export
export { fib as default };
