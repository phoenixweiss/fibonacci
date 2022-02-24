function fibonacci_last_digit(n) {
  if (n <= 1) {
    return n;
  } else {
    let prev = 0, next = 1;
    for (let i = 1; i < n; i++) {
      let temp = (prev + next) % 10;
      prev = next;
      next = temp;
    }
    return next;
  }
};