arr = [5,7,9,2,4,3,1,0,6,10]

def selection_sort(arr):
	# we iterate over the array
	for i in range(0, len(arr) - 1):
		# set the smallest value to be the current index
		smallest = i
		# second loop to compare values with i as we iterate
		for j in range(i, len(arr)):
			# if whats on index j is less than what it is currently consider as the smallest...
			if arr[j] < arr[smallest]:
				# we set the smallest to be the current index
				smallest = j
		# once we have the true smallest value, we grab the value of index i first...
		temp = arr[i]
		# we swap by setting what's currently the value of i to be the new smallest..
		arr[i] = arr[smallest]
		# then we swaps what's the smallest to be what is temp (which is what it was the value of i)
		arr[smallest] = temp
selection_sort(arr)

print(arr) # Should give of a sorted list.
