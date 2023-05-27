// const person: {
//   name: string;
//   age: number;
// };
var person = {
    name: "Sanyam",
    age: 25,
    hobbies: ["Music", "Movies"],
    role: [2, "Author"],
};
person.role.push("admin");
person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   hobby.map();
}
// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// };
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
