import random
random_list = [random.choice(list(range(1, 100))) for _ in range(10)]

print(random_list)

def get_min(random_list):
	print("min value is:", min(random_list))
	print("min index is:", random_list.index(min(random_list)))

get_min(random_list)