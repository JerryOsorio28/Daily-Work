def migratoryBirds(arr):
    birdSights = {}
    mostSeenBird = []
    result = []
    otherResult = []

    for i in range(0, len(arr)):
        birdSights[arr[i]] = []
    for i in range(0, len(arr)):
        if(arr[i] in birdSights):
            birdSights[arr[i]].append(arr[i])
    for i in range(0, len(birdSights)):
        if len(birdSights[arr[i]]) >= len(result):
            result.append(birdSights[arr[i]])
        
            # if birdSights[arr[i][0] < result[0]:
            #     result = birdSights[arr[i]]


    print(result)
    # print(birdSights)
    # print(mostSeenBird)
    return result



# migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3])
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])    