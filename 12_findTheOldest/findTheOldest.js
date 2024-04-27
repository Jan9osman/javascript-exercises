const findTheOldest = function(people) {
    for(let j = 0; j < people.length; j++)
    {
        if(people[j].yearOfDeath === undefined)
        {
            people[j].yearOfDeath = new Date().getFullYear();
        }
    }
    let ages = people.map(person => person.yearOfDeath - person.yearOfBirth);
    let oldest = 0;
    let name = "";
    let index = 0;
    for(let i = 0; i < ages.length; i++)
    {
        if(ages[i] > oldest)
        {
            oldest = ages[i];
            index = i;
        }
    }
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
