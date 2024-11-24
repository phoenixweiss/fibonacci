// Matrix algorithm for calculating Fibonacci numbers
// This algorithm uses matrix exponentiation to compute Fibonacci numbers efficiently.
// Time complexity: O(log n), Space complexity: O(1).

function fib(n) {
  // Define the Q-matrix used to calculate Fibonacci numbers
  const qMatrix = [[1, 1], [1, 0]];

  // Function to multiply two matrices
  function multiplyMatrix(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < b[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  // Function to raise a matrix to a power using exponentiation by squaring
  function powerMatrix(matrix, power) {
    // Initialize the result as the identity matrix
    let result = [[1, 0], [0, 1]];

    // Perform binary exponentiation
    while (power > 0) {
      if (power % 2 === 1) {
        result = multiplyMatrix(result, matrix); // Multiply result by matrix if power is odd
      }
      matrix = multiplyMatrix(matrix, matrix); // Square the matrix
      power = Math.floor(power / 2); // Divide the power by 2
    }

    return result;
  }

  // Calculate Q^(n-1) * [1, 0] to find the nth Fibonacci number
  const resultMatrix = multiplyMatrix(powerMatrix(qMatrix, n - 1), [[1], [0]]);

  // The top-left element of the resulting matrix is the nth Fibonacci number
  return resultMatrix[0][0];
}

// Export the function as the default export
export { fib as default };
