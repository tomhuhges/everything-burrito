print("Miles", "Kilometres")
for v in range(1,11,1):
	if v == 10:
		space = "  "
	else:
		space = "   "
	print(v, space, v*1.609)