def eliminateDuplicates(lst):
	newlist = []
	for num in lst:
		if num not in newlist:
			newlist.append(num)
	print(" ".join(newlist))


numbers = input("enter 10 numbers separated by a space").split()
eliminateDuplicates(numbers)



