// Benchmark utility for measuring execution time
import benchmark from './lib/benchmark.js';
// Library for interactive CLI prompts
import inquirer from 'inquirer';

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
    description: 'A straightforward but inefficient recursive approach.',
    module: './modules/fib_recursive.js'
  },
  {
    name: 'Classic iterative algorithm',
    value: 'fib_loop',
    description: 'An iterative method with linear time complexity.',
    module: './modules/fib_loop.js'
  },
  {
    name: 'Optimized recursive algorithm with caching (memoization)',
    value: 'fib_array',
    description: 'A recursive approach that uses caching to improve performance.',
    module: './modules/fib_array.js'
  },
  {
    name: 'By Binet\'s formula (full version)',
    value: 'fib_binet_full',
    description: 'Uses a mathematical formula for constant-time computation.',
    module: './modules/fib_binet_full.js'
  },
  {
    name: 'By Binet\'s formula (simplified)',
    value: 'fib_binet_simple',
    description: 'A simplified version of Binet\'s formula with rounding.',
    module: './modules/fib_binet_simple.js'
  },
  {
    name: 'Matrix algorithm',
    value: 'fib_matrix',
    description: 'Uses matrix exponentiation for efficient computation.',
    module: './modules/fib_matrix.js'
  }
];

// Command-line arguments
const args = process.argv.slice(2); // Skip "node" and script path

// Display help message
function showHelp() {
  console.log(`
Usage: yarn start [algorithm] [number] [options]

Arguments:
  algorithm       Name of the algorithm (e.g., fib_recursive, fib_loop, etc.)
  number          Fibonacci number to calculate

Options:
  -h, --help      Show this help message
  -l, --list      List all available algorithms with descriptions

Examples:
  yarn start fib_recursive 10   Calculate the 10th Fibonacci number using the naive recursive algorithm
  yarn start -h                Show this help message
  yarn start -l                List all available algorithms
  yarn start fib_loop 15       Calculate the 15th Fibonacci number using the iterative algorithm
`);
}

// Display the list of available algorithms
function showAlgorithms() {
  console.log('\nAvailable Fibonacci algorithms:\n');
  fib_algorithms.forEach(alg => {
    console.log(`  ${alg.value.padEnd(20)} - ${alg.description}`);
  });
  console.log('\nUse "yarn start [algorithm] [number]" to calculate a Fibonacci number.\n');
}

// Function to retrieve algorithm metadata by its value
function findAlgByVal(algVal) {
  return fib_algorithms.find((x) => x.value === algVal);
}

// Display the ASCII logo
console.log(logo);

// Handle help flag
if (args.includes('-h') || args.includes('--help')) {
  showHelp();
  process.exit(0);
}

// Handle list flag
if (args.includes('-l') || args.includes('--list')) {
  showAlgorithms();
  process.exit(0);
}

// Check if algorithm and number are provided as arguments
const [algValue, fibNumber] = args;

if (algValue && fibNumber) {
  const alg = findAlgByVal(algValue);
  if (!alg) {
    console.error(`Error: Algorithm "${algValue}" not found.`);
    showHelp();
    process.exit(1);
  }

  console.log(`Finding Fibonacci number ${fibNumber} using ${alg.name} from ${alg.module}`);
  import(alg.module).then(module => {
    const result = benchmark(module.default, Number(fibNumber));
    console.log(`The number is ${result.output}, found in ${result.hrtime} seconds.`);
  });
} else {
  // If no arguments provided, fallback to interactive mode
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
      const alg = findAlgByVal(answers.fib_algorithm);
      console.log(`Finding Fibonacci number ${answers.fib_n} using ${alg.name} from ${alg.module}`);
      import(alg.module).then(module => {
        const result = benchmark(module.default, Number(answers.fib_n));
        console.log(`The number is ${result.output}, found in ${result.hrtime} seconds.`);
      });
    });
}
