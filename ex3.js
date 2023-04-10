//1(ForEach)
const people = [
    { name: 'Thom', age: 28 },
    { name: 'Hanna', age: 35 },
    { name: 'Julia', age: 16 },
    {name: 'Lukas', age: 9}
]
people.forEach (function(person) {
    console.log(person)
})
//2(Map)
const newPeople = people.map(function(person) {
  return { name: person.name, age: person.age * 5 };
});

console.log(newPeople);
//3(Filter)
const adults = []
for (let i = 0; i < people.length; i++){
    if (people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults)
//4(Find)()
const thom = people.find(function (person) { return person.name === 'Thom' })
console.log(thom)
//5(Sort)
people.sort(function(personA, personB) {
  return personA.age - personB.age;
});

console.log(people);