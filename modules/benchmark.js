// Измеряет время выполнения функции в мкс

function benchmark(fn) {

  let b = {}

  let start = process.hrtime();

  fn

  let stop = process.hrtime(start);

  b.output = fn
  b.hrtime = (stop[0] * 1e9 + stop[1]) / 1e9

  return b

}

export { benchmark as default };