list1 = []
num = ""
while True:
	num = input("enter a number, q to quit")
	if num.upper() == "Q":
		break
	else:
		list1.append(int(num))

list1.sort()
print(list1)