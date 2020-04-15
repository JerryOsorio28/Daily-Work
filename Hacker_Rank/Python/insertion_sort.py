numbers = [7,5,6,3,9,0,1,2,4,10]

def insertion_sort(arr):
	# iterates over the arr, starting on index 1
	for index in range(1, len(numbers)):
		# value is equal to the value on index 1
		value = arr[index]
		# i is equal to the index on the left of index
		i = index - 1
		# run as long as i is less or equal than 0
		while i >= 0:
			# if value (5) is less than arr[i] (7)
			if value < arr[i]:
				# arr[i+1], which is 7 will now be equal to arr[i], which is 5
				arr[i + 1] = arr[i]
				# arr[i], which is 5 will now be equal to value, which is 7.
				arr[i] = value
				# We assign i to be equal to i - 1 to move one to the left as long as the while loop is true
				i = i - 1
			else:
				# we break out of the while loop to continue where we left off after checking that all the left side values are sorted
			    break

insertion_sort(numbers)
