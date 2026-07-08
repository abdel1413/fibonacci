function getRoommates(people) {
    // create an object to store each person as a waiting room
    // in that room, there is a person waiting , if another person comes in, they will be compared to the person in the room
    const waitingRooms = {};
    //create an array to store the pairs of roommates
    const pairs = []; 

    // loop through the people array


    for (const person of people) {
        // check if the person is already in a waiting room
        if (waitingRooms[person.group]) {
            // if the person is already in a waiting room, we have found a pair
            pairs.push(`${waitingRooms[person.group].name} and ${person.name}`);
            // remove the person from the waiting room
            delete waitingRooms[person.group];
        } else {
            // if the person is not in a waiting room, add them to the waiting room
            waitingRooms[person.group] = person;
        }   
        
    }
        //if there still a person in the waiting room, they will be added as a sole  roommate
        for (const person in waitingRooms) {
           pairs.push(waitingRooms[person].name);
        }   
    return pairs;
    }