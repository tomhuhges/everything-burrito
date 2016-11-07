import random

# Generate a random number to be guessed
number = random.randint(1, 100)

print("Guess a magic number between 0 and 100")
guess = 0
while guess != number:
	guess = int(input())
	if guess < number:
		print("Higher")
	else:
		print("Lower")

print("that's right")


# Write your code below:
# Try to find the condition that will stop the loop
# What statement should you put in the body of the loop?
# Do not forget to declare your variables before using them
