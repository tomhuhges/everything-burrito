import prime

count = 0

for i in range(0,10000):
	if (prime.is_prime(i)):
		count += 1

print("there are", count, "prime numbers less than 10,000")