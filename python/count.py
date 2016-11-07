positives = 0
negatives = 0
total = 0
count = 0

while True:
	print("Enter an integer, input ends if it is 0")
	number = int(input())
	if number != 0:
		count += 1
		total += number
		if number > 0:
			positives += 1
		else:
			negatives += 1
	else:
		break
print("number of positives: ", positives)
print("number of negatives: ", negatives)
print("total: ", total)
print("average: ", total / count)
	