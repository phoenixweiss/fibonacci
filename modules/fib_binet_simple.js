// По формуле Бине (упрощенный вариант)

function fib(n) {
  const a = (1 + 5 ** 0.5) / 2;
  return Math.round(a ** n / 5 ** 0.5);
}

export { fib as default };