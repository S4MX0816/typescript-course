// const person: {
//   name: string;
//   age: number;
// };
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Sanyam",
//   age: 25,
//   hobbies: ["Music", "Movies"],
//   role: [2, "Author"],
// };

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", ""];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Sanyam",
  age: 25,
  hobbies: ["Music", "Movies"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   hobby.map();
}

if (person.role === Role.ADMIN) {
  console.log("is Admin");
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

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
