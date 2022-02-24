import fib_recursive from './modules/fib_recursive.js'
import fib_loop from './modules/fib_loop.js'
import fib_array from './modules/fib_array.js'
import fib_binet_full from './modules/fib_binet_full.js'
import fib_binet_simple from './modules/fib_binet_simple.js'

import benchmark from './modules/benchmark.js'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv

let result = benchmark(fib_loop(argv._[0]))

console.log(result.output, result.hrtime)