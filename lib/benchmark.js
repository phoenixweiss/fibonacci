// Benchmark function to measure the execution time of a given function
function benchmark(fn, ...args) {
  // Object to store the output and execution time
  const b = {};

  // Record the start time using high-resolution timer
  const start = process.hrtime();

  // Execute the function with the provided arguments and store the output
  const output = fn(...args);

  // Record the stop time after the function execution
  const stop = process.hrtime(start);

  // Save the function output to the benchmark result
  b.output = output;

  // Calculate the total execution time in seconds
  b.hrtime = (stop[0] * 1e9 + stop[1]) / 1e9;

  // Return the benchmark result
  return b;
}

// Export the benchmark function as the default export
export default benchmark;
