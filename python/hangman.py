import random

words = ["hello", "halloumi", "google"]

def hangman():

	guess = ""
	missed = 0
	is_correct = False

	# generate a word from list
	randomword = list(random.choice(words))

	# create *** array of same length
	hangmanstr = "*" * len(randomword)

	# prompt user for a guess ( if words isnt guessed yet )
	while is_correct != True:
		print("Enter a letter in word", hangmanstr)
		guess = input()

	# check if guess is in array
		if guess in randomword:
			hangmanlist = list(hangmanstr)
			# if guess has already been guessed
			if guess in hangmanlist:
				print(guess, "is already in the word")
			else:
				# if yes get indexes
				indexes = [];
				i = 0;
				for letter in randomword:
					if letter == guess:
						indexes.append(i)
					i += 1
				# and replace * with guess
				for i in indexes:
					hangmanlist[i] = guess
				hangmanstr = "".join(hangmanlist)
				if hangmanstr == "".join(randomword):
					is_correct = True

		# if no, increment missed
		else:
			print(guess, "is not in the word")
			missed += 1

		if is_correct:
			if missed == 1:
				times = "time"
			else :
				times = "times"
			print("The word is", hangmanstr, "! You missed", missed, times )


hangman()
again = input("Do you want to guess another word? Enter y or n: ")
if again == "y":
	hangman()


