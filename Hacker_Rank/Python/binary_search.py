# sorted array from 0 to 100 // **IN ORDER FOR THIS TO WORK THE ARRAY MUST BE SORTED**
numbers = [number for number in range(101)]

def find_number(numbers, target):
    # set's variable as the left hand side of the array
	low = numbers[0]
    # set's variable as the right hand side or end of the array
	high = len(numbers) - 1
    # as long as low is less or equal than high...
	while low <= high:
        # set's the middle to be the sum of both low and high and divide it by 2
		middle = int((low+high) / 2)
        # compares if the number we are looking for is less than the middle
		if target < numbers[middle]:
            # if it is we set a new high to be equal to the middle - 1 since middle has already been checked
			high = middle - 1
        # compares if the number we are looking for is greater than the middle
		elif target > numbers[middle]:
            # if it is we set a new low to be equal to the middle - 1 since middle has already been checked
			low = middle + 1
		else:
			return middle
            
	return 'not found'

print(find_number(numbers, 101)) #Should return the value we are looking for.