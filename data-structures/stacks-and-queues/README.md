# Animal Shelter FIFO

## Challenge
Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.
Enqueue adds an animal (cat or dog)
Dequeue returns a cat or a dog based on preference.
If no preference, it returns the animal thats been in the queue
the longest.

## Approach & Efficiency
Here I had two queues, one for cats and one for dogs.
If the object was a cat, it would go into the cat queue, if the object was a dog
it would go into the dog queue. All of the objects are assigned a "time stamp"/id
so as to check how long its been in the queue. Animals are dequeue'd based on
test prefs. If no animal is chosen, the one with the lowest id would be returned.

## API
No API's were harmed in the making of this challenge.

[whiteboard](/assets/IMG_9383.png)
