function benchmark(fn) {
  const b = {};
  const start = process.hrtime();
  fn;
  const stop = process.hrtime(start);
  b.output = fn;
  b.hrtime = (stop[0] * 1e9 + stop[1]) / 1e9;
  return b;
}

export default benchmark;
