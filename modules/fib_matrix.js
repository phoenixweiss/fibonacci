// Матричный алгоритм

function fib(n) {
  // Создаем Q-матрицу
  const qMatrix = [[1, 1], [1, 0]];

  // Функция для умножения матриц
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

  // Функция для возведения матрицы в степень
  function powerMatrix(matrix, power) {
    let result = [[1, 0], [0, 1]];
    while (power > 0) {
      if (power % 2 === 1) {
        result = multiplyMatrix(result, matrix);
      }
      matrix = multiplyMatrix(matrix, matrix);
      power = Math.floor(power / 2);
    }
    return result;
  }

  // Умножаем Q-матрицу на [1, 0] для получения n-го числа Фибоначчи
  const resultMatrix = multiplyMatrix(powerMatrix(qMatrix, n - 1), [[1], [0]]);

  return resultMatrix[0][0];
}

export { fib as default };
