function benchmark(fn, ...args) {
  const b = {};
  const start = process.hrtime();
  const output = fn(...args);
  const stop = process.hrtime(start);
  b.output = output;
  b.hrtime = (stop[0] * 1e9 + stop[1]) / 1e9;
  return b;
}

export default benchmark;
