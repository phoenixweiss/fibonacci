import benchmark from './lib/benchmark.js';
import inquirer from 'inquirer';

const debug_mode = false;

function debug(msg) {
  if (debug_mode == true) {
    console.log(msg);
  }
}

const fib_algorithms = [
  {
    name: 'Naive recursive algorithm',
    value: 'fib_recursive',
    module: './modules/fib_recursive.js'
  },
  {
    name: 'Classic iterative algorithm',
    value: 'fib_loop',
    module: './modules/fib_loop.js'
  },
  {
    name: 'Optimized recursive algorithm with caching (memoization)',
    value: 'fib_array',
    module: './modules/fib_array.js'
  },
  {
    name: 'By Binet\'s formula (full version)',
    value: 'fib_binet_full',
    module: './modules/fib_binet_full.js'
  },
  {
    name: 'By Binet\'s formula (simplified)',
    value: 'fib_binet_simple',
    module: './modules/fib_binet_simple.js'
  },
  {
    name: 'Matrix algorithm',
    value: 'fib_matrix',
    module: './modules/fib_matrix.js'
  }
];

function findAlgByVal(algVal) {
  return fib_algorithms.find((x) => x.value === algVal);
}

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'fib_algorithm',
      message: 'Which algorithm should be used?',
      choices: [
        ...fib_algorithms
      ]
    },
    {
      name: 'fib_n',
      message: 'Number',
      default: '10'
    }
  ])
  .then(answers => {
    debug(JSON.stringify(answers));
    let alg = findAlgByVal(answers.fib_algorithm);
    console.log(`Finding Fibonacci number ${answers.fib_n} using ${alg.name} from ${alg.module}`);

    import(alg.module).then(module => {
      let result = benchmark(module.default(answers.fib_n));
      console.log(`The number is ${result.output}, found in ${result.hrtime} seconds.`);
    });
  });
