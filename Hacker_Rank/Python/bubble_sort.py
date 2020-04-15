import random
# Ceates a list of 50 numbers, starting at 1
arr = list(range(1, 51))
# shuffles arr list
random.shuffle(arr)

def bubble_sort(arr):
    # first iterator is to keep a track of the numbers than has been sorted (bubbled up)
    for i in range(0, len(arr) - 1):
        # second iterator is to make a comparison between the current index and the index after that..
        for j in range(0, len(arr) - 1 - i):
            # if it is greater..
            if arr[j] > arr[j + 1]:
                # we swap places...
                arr[j], arr[j+1] = arr[j+1], arr[j]
    print(arr)            
    return arr

bubble_sort(arr)