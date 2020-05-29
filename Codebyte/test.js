const people = [
    {name: 'solomon', age: 21},
    {name: 'prono', age:22},
    {name: 'chemicalstan', age:21}
];

const names = people.map(function(person){
    return person.name;
}); 
const ages = people.map(function(person){
    return person.age;
});

console.log(names);
console.log(ages);