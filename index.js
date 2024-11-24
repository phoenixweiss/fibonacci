// Benchmark utility for measuring execution time
import benchmark from './lib/benchmark.js';
// Library for interactive CLI prompts
import inquirer from 'inquirer';

// Toggle debug mode for logging additional information
const debug_mode = false;

// Function to log debug messages if debug mode is enabled
function debug(msg) {
  if (debug_mode == true) {
    console.log(msg);
  }
}

// ASCII art logo to display at the start of the application
const logo = `
'||''''|  ||  '||                                                ||
 ||  .   ...   || ...    ...   .. ...    ....     ....    ....  ...
 ||''|    ||   ||'  || .|  '|.  ||  ||  '' .||  .|   '' .|   ''  ||
 ||       ||   ||    | ||   ||  ||  ||  .|' ||  ||      ||       ||
.||.     .||.  '|...'   '|..|' .||. ||. '|..'|'  '|...'  '|...' .||.
`;

// Metadata for available Fibonacci algorithms
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

// Function to retrieve algorithm metadata by its value
function findAlgByVal(algVal) {
  return fib_algorithms.find((x) => x.value === algVal);
}

// Display the ASCII logo
console.log(logo);

// Prompt user to select an algorithm and input a number
inquirer
  .prompt([
    {
      type: 'rawlist', // Prompt type: list with options
      name: 'fib_algorithm', // Key for storing selected algorithm
      message: 'Which algorithm should be used?', // Question for the user
      choices: [
        ...fib_algorithms // Available algorithms
      ]
    },
    {
      name: 'fib_n', // Key for storing the Fibonacci number input
      message: 'Number', // Prompt message for the user
      default: '10' // Default value if no input is provided
    }
  ])
  .then(answers => {
    // Log answers if debug mode is enabled
    debug(JSON.stringify(answers));

    // Retrieve algorithm metadata
    let alg = findAlgByVal(answers.fib_algorithm);

    // Inform the user about the selected algorithm and number
    console.log(`Finding Fibonacci number ${answers.fib_n} using ${alg.name} from ${alg.module}`);

    // Dynamically import the selected algorithm module
    import(alg.module).then(module => {
      // Run the benchmark with the selected algorithm and input number
      const result = benchmark(module.default, Number(answers.fib_n));

      // Display the result and execution time
      console.log(`The number is ${result.output}, found in ${result.hrtime} seconds.`);
    });
  });
