# You have been asked to help study the population of birds migrating across the continent. 
# Each type of bird you are interested in will be identified by an integer value. 
# Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. 
# You would like to be able to find out which type of bird is most common given a list of sightings.
# Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

# For example, assume your bird sightings are of types arr = [1,1,2,2,3]. There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

#Sample input ar\r = [1,4,4,4,5,3], return 4 since it's the bird ID that has been seen the most

def migratoryBirds(arr):
    # dictionary to create key/value pairs per ID
    birdSights = {}
    # dictionary with the key/value of the most seen bird
    mostSeenBird = {}

    # for loop that adds to the birdSights dic all the ID's available as key, value initialize as an empty arr
    for i in range(0, len(arr)):
        birdSights[arr[i]] = []
    # for loop that appends all the id's to the respective ID array if it exists in the birdSights dic
    for i in range(0, len(arr)):
        if(arr[i] in birdSights):
            birdSights[arr[i]].append(arr[i])
    # iterates over the arr and...
    for i in range(0, len(arr)):
        # checks if the length of the current bird ID in birdSights is greater than the mostSeenBird dic..
        if len(birdSights[arr[i]]) > len(mostSeenBird):
            # if it is, it means another birds as been seen more time, so we update the mostSeenBird dic
            mostSeenBird = birdSights[arr[i]]
        # else, if there is an ID with the same length..
        elif len(birdSights[arr[i]]) == len(mostSeenBird):
            # we check which one has the lowest value..
            if birdSights[arr[i]][0] < mostSeenBird[0]:
                # and update the mostSeenBird accordingly
                mostSeenBird = birdSights[arr[i]]

    return mostSeenBird[0]