def isAnagram(s1, s2):
	str1 = sorted(list(s1))
	str2 = sorted(list(s2))
	if str1 == str2:
		print("Strings are anagrams")
	else:
		print("Strings are not anagrams")

str1 = input("Enter a string: ")
str2 = input("Enter another string: ")

isAnagram(str1, str2)