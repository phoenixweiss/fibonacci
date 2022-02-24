const oldFib = n => {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

const memoize = f => {
  const cache = {};
  return arg => cache[arg] || (cache[arg] = f(arg));
}

const fib = memoize(oldFib);