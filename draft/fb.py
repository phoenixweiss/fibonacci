import time

def fib(n):
	if n <= 1:
		return n
	return fib(n - 1) + fib(n - 2)

starttime = time.time()
result = fib(int(input ()))
endtime = time.time() - starttime

print(result, endtime)