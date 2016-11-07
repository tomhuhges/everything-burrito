def is_prime(x):
	if x >= 2:
		for y in range(2,x):
			if not ( x % y ):
				return False
	else:
		return False
	return True