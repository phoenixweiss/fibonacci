// Оптимизированный рекурсивный алгоритм с кэшированием (мемоизацией)

function fib_array(n) {
  let cache = [0, 1];
  function fib(n) {
    let result = cache[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      cache[n] = result;
    }
    return result;
  };
  return fib(n);
}

export { fib_array as default };