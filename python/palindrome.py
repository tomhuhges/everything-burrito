import math

def palindrome (word):
	"this determines if a word is a palindrome"

	front = ""
	back = ""

	for i in range(0, len(word) // 2, 1):
		front += word[i]

	for i in range(len(word)-1, math.ceil(len(word) / 2)-1, -1):
		back += word[i]

	if ( front == back ):
		print("word is a palindrome")
	else:
		print("word is not a palindrome")

	return


word = input("enter a word: ")
palindrome(word)