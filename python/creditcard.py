#Return true if the card number is valid
def isValid(number):
	if (number[0] != 4 and number[0] != 5 and (number[0] == 3 and number[1] != 7) and number[0] != 6):
		return False
	elif len(number) not in range(13,17):
		return False
	else:
		if (sumOfDoubleEvenPlace(number) + sumOfOddPlace(number)) % 10 == 0:
			return True
		else:
			return False

#Get the result from Step2
def sumOfDoubleEvenPlace(number):
	indexlist = [i for i in range(len(number)-2,-1,-2)]

	evennumbers = []
	for index in indexlist:
		evennumbers.append(number[index])

	total = 0
	for num in evennumbers: 
		total += getDigit(num)

	return total

#Return this number if it is a single digit, otherwise,return #the sum of the two digits
def getDigit(num):
	num = str(int(num) *2)
	if len(num) > 1:
		return int(num[0]) + int(num[1])
	else:
		return int(num)

#Return sum of odd place digits in number
def sumOfOddPlace(number):
	indexlist = [i for i in range(len(number)-1,-1,-2)]

	oddnumbers = []
	for index in indexlist:
		oddnumbers.append(number[index])

	total = 0
	for num in oddnumbers:
		total += int(num)

	return total

creditcardno = input("Enter a credit card no: ")
if isValid(creditcardno):
	valid = "valid"
else:
	valid = "invalid"
print("The credit card number is", valid)