# Fibonacci

```ascii
'||''''|  ||  '||                                                ||
 ||  .   ...   || ...    ...   .. ...    ....     ....    ....  ...
 ||''|    ||   ||'  || .|  '|.  ||  ||  '' .||  .|   '' .|   ''  ||
 ||       ||   ||    | ||   ||  ||  ||  .|' ||  ||      ||       ||
.||.     .||.  '|...'   '|..|' .||. ||. '|..'|'  '|...'  '|...' .||.
```

A CLI-based project for calculating Fibonacci numbers using various algorithms. It supports multiple approaches, including recursion, iteration, memoization, and mathematical formulas.

## Features

- Calculate Fibonacci numbers using different algorithms.
- Compare performance of algorithms with benchmarking.
- Interactive CLI or direct command-line arguments.
- View descriptions of all available algorithms.
- Lightweight and easy to use.

---

## Prerequisites

Before running this project, ensure that you have the following installed:

- **Node.js**: Version 20.18.1 or higher.
- **Yarn**: Version 1.22.22 or higher.

To install `yarn`, run:

```sh
npm install -g yarn
```

To install project dependencies, run:

```bash
yarn install
```

---

## Usage

### Running the Project

Run the project using:

```bash
yarn start
```

You can pass arguments directly for quick calculations or use interactive mode.

### Command-Line Arguments

- **`[algorithm] [number]`**: Specify the algorithm and the Fibonacci number to calculate.
- **`-h` / `--help`**: Display usage instructions.
- **`-l` / `--list`**: List all available algorithms with descriptions.

#### Examples

1. **Interactive Mode**:

   ```bash
   yarn start
   ```

   Prompts you to select an algorithm and input a Fibonacci number.

2. **Direct Calculation**:

   ```bash
   yarn start fib_recursive 10
   ```

   Calculates the 10th Fibonacci number using the naive recursive algorithm.

3. **List Available Algorithms**:

   ```bash
   yarn start -l
   ```

   Displays all supported algorithms with descriptions.

4. **Help**:

   ```bash
   yarn start -h
   ```

   Displays usage information.

---

## Available Algorithms

Run `yarn start -l` to see the full list of algorithms. Below are the included algorithms:

| Algorithm          | Description |
|--------------------|-------------|
| `fib_recursive`    | A straightforward but inefficient recursive approach. |
| `fib_loop`         | An iterative method with linear time complexity. |
| `fib_array`        | A recursive approach that uses caching to improve performance. |
| `fib_binet_full`   | Uses a mathematical formula for constant-time computation. |
| `fib_binet_simple` | A simplified version of Binet's formula with rounding. |
| `fib_matrix`       | Uses matrix exponentiation for efficient computation. |

---

## Examples in Action

1. **Calculate the 10th Fibonacci number using the matrix algorithm**:

   ```bash
   yarn start fib_matrix 10
   ```

   Output:

   ```txt
   Finding Fibonacci number 10 using Matrix algorithm from ./modules/fib_matrix.js
   The number is 55, found in 0.000001 seconds.
   ```

2. **List all available algorithms**:

   ```bash
   yarn start -l
   ```

3. **Show help**:

   ```bash
   yarn start -h
   ```

---

## Linting

To ensure code quality, run the linter:

```bash
yarn eslint
```
